import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ExamRunnerView } from './ExamRunnerView';
import { storageService } from '../../services/storage';
import type { ExamLaunchState } from './types';

function renderExamWithState(state: ExamLaunchState | { resume: true }) {
  return render(
    <MemoryRouter
      initialEntries={[{ pathname: '/subjects/swr/exam', state }]}
    >
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
});
