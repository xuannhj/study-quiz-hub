import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SubjectHubView } from './SubjectHubView';
import { StudyChapterView } from '../study/StudyChapterView';
import { storageService } from '../../services/storage';

describe('SubjectHubView and StudyChapterView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('switches between Study Guide, Quiz, Final, and Mistake tabs and reads a chapter', () => {
    render(
      <MemoryRouter initialEntries={['/subjects/swr']}>
        <Routes>
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
          <Route
            path="/subjects/:subjectId/study/:chapterId"
            element={<StudyChapterView />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Software Requirements' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Chương 1:/i })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /thi quiz/i }));
    expect(screen.getByText(/Quiz 1: Chương 1/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /thi final/i }));
    expect(screen.getByText(/Final Exam Mock #1/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /học lý thuyết/i }));
    fireEvent.click(screen.getAllByRole('link', { name: /đọc bài học/i })[0]);

    expect(screen.getByText(/Ba cấp độ yêu cầu cốt lõi/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /đánh dấu đã học/i }));
    expect(storageService.getProgress('swr').completedChapterIds).toContain(
      'swr-ch1'
    );
  });

  it('shows empty state cleanly on Mistake Review tab when no wrong/bookmarked questions exist', () => {
    render(
      <MemoryRouter initialEntries={['/subjects/swr']}>
        <Routes>
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /kho câu sai/i }));
    expect(
      screen.getByText(/chưa có câu hỏi làm sai hoặc đánh dấu sao/i)
    ).toBeInTheDocument();
  });

  it('dismisses the active session banner immediately when clicking "Bỏ qua"', () => {
    storageService.saveActiveSession('swr', {
      id: 'sess-dismiss',
      subjectId: 'swr',
      examPackId: 'swr-quiz-1',
      examTitle: 'Quiz 1 In Progress',
      category: 'quiz',
      mode: 'exam',
      durationMinutes: 20,
      passScorePercent: 60,
      shuffleQuestions: false,
      shuffleOptions: false,
      snapshots: [],
      answers: {},
      checkedQuestionIds: [],
      flaggedQuestionIds: [],
      currentIndex: 0,
      remainingSeconds: 600,
      startedAt: '2026-11-11T10:00:00Z',
      updatedAt: '2026-11-11T10:01:00Z',
    });

    render(
      <MemoryRouter initialEntries={['/subjects/swr']}>
        <Routes>
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Quiz 1 In Progress/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /bỏ qua/i }));
    expect(screen.queryByText(/Quiz 1 In Progress/i)).not.toBeInTheDocument();
  });
});

