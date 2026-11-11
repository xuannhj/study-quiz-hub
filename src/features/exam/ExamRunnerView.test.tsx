import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ExamRunnerView } from './ExamRunnerView';
import { ExamResultView } from './ExamResultView';
import { storageService } from '../../services/storage';
import type { ExamLaunchState } from './types';

function LocationStateProbe() {
  const location = useLocation();
  return (
    <div data-testid="location-state">{JSON.stringify(location.state)}</div>
  );
}

function renderExamWithState(state: ExamLaunchState | { resume: true }) {
  return render(
    <MemoryRouter
      initialEntries={[{ pathname: '/subjects/swr/exam', state }]}
    >
      <LocationStateProbe />
      <Routes>
        <Route path="/subjects/:subjectId/exam" element={<ExamRunnerView />} />
        <Route
          path="/subjects/:subjectId"
          element={<div>Subject Hub Page</div>}
        />
      </Routes>
    </MemoryRouter>
  );
}

describe('ExamRunnerView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('reveals explanation immediately on check in Practice Mode and navigates with keyboard', () => {
    renderExamWithState({
      pack: {
        id: 'test-practice',
        subjectId: 'swr',
        category: 'quiz',
        title: 'Practice Pack',
        durationMinutes: 15,
        questionCount: 2,
        chapterIds: ['swr-ch1'],
        fixedQuestionIds: ['swr-q-001', 'swr-q-002'],
        passScorePercent: 50,
      },
      mode: 'practice',
      shuffleQuestions: false,
      shuffleOptions: false,
    });

    expect(screen.getByText(/Câu 1 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Vision and Scope Document/i)).toBeInTheDocument();

    fireEvent.keyDown(window, { key: '1' });
    fireEvent.keyDown(window, { key: 'Enter' });

    expect(screen.getByText(/Giải thích:/i)).toBeInTheDocument();
    expect(screen.getByText(/Chính xác!/i)).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByText(/Câu 2 \/ 2/i)).toBeInTheDocument();
  });

  it('submits Timed Exam, records attempt/wrong stats, and restores saved session on reload', () => {
    const launchState: ExamLaunchState = {
      pack: {
        id: 'test-timed',
        subjectId: 'swr',
        category: 'final',
        title: 'Timed Final',
        durationMinutes: 30,
        questionCount: 2,
        chapterIds: ['swr-ch1'],
        fixedQuestionIds: ['swr-q-001', 'swr-q-002'],
        passScorePercent: 50,
      },
      mode: 'exam',
      shuffleQuestions: false,
      shuffleOptions: false,
    };

    const { unmount } = renderExamWithState(launchState);

    fireEvent.click(screen.getByText(/Unit Test Specification/i));
    fireEvent.click(screen.getByRole('button', { name: /cắm cờ/i }));

    const saved = storageService.getProgress('swr').activeSession;
    expect(saved?.answers['swr-q-001']).toEqual(['b']);
    expect(saved?.flaggedQuestionIds).toContain('swr-q-001');

    unmount();
    render(
      <MemoryRouter initialEntries={['/subjects/swr/exam']}>
        <Routes>
          <Route path="/subjects/:subjectId/exam" element={<ExamRunnerView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Timed Final/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /nộp bài/i }));

    expect(screen.getByText(/Kết quả làm bài/i)).toBeInTheDocument();
    expect(storageService.getProgress('swr').attempts).toHaveLength(1);
    expect(
      storageService.getProgress('swr').wrongQuestionStats['swr-q-001'].wrongCount
    ).toBe(1);
  });

  it('replaces location pack state with resume marker so F5 reload preserves active session', () => {
    renderExamWithState({
      pack: {
        id: 'test-reload',
        subjectId: 'swr',
        category: 'quiz',
        title: 'Reload Safety Quiz',
        durationMinutes: 15,
        questionCount: 1,
        chapterIds: ['swr-ch1'],
        fixedQuestionIds: ['swr-q-001'],
        passScorePercent: 50,
      },
      mode: 'exam',
      shuffleQuestions: false,
      shuffleOptions: false,
    });

    expect(screen.getByTestId('location-state').textContent).toBe(
      JSON.stringify({ resume: true })
    );
  });

  it('distinguishes selected, missed, and wrong options in ExamResultView', () => {
    render(
      <MemoryRouter>
        <ExamResultView
          subjectId="swr"
          examTitle="Multi Check"
          flaggedIds={[]}
          onRetryWrong={() => {}}
          summary={{
            totalCount: 1,
            correctCount: 0,
            scorePercent: 0,
            passed: false,
            chapterBreakdown: [],
            results: [
              {
                isCorrect: false,
                selectedOptionIds: ['a', 'c'],
                question: {
                  id: 'm1',
                  subjectId: 'swr',
                  chapterId: 'swr-ch1',
                  source: 'slide-generated',
                  examTarget: 'both',
                  difficulty: 'understand',
                  type: 'multiple',
                  prompt: 'Pick A and B',
                  options: [
                    { id: 'a', text: 'Opt A' },
                    { id: 'b', text: 'Opt B' },
                    { id: 'c', text: 'Opt C' },
                  ],
                  correctOptionIds: ['a', 'b'],
                  explanation: 'A and B are right.',
                },
              },
            ],
          }}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Đáp án đúng (Bạn đã chọn)')).toBeInTheDocument();
    expect(screen.getByText('Đáp án đúng (Bạn bỏ sót)')).toBeInTheDocument();
    expect(screen.getByText('Bạn chọn (Sai)')).toBeInTheDocument();
  });
});

