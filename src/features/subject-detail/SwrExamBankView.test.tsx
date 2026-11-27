import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SubjectHubView } from './SubjectHubView';
import { storageService } from '../../services/storage';

describe('SwrExamBankView tab in SubjectHubView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('switches to Ngân Hàng 7 Đề Gốc tab in swr-past and filters questions', () => {
    // Record a wrong question on swr-past to test wrong filter
    storageService.recordExamAttempt('swr-past', {
      id: 'att-1',
      examPackId: 'swr-exam-01',
      examTitle: 'Đề 01',
      category: 'final',
      mode: 'exam',
      completedAt: new Date().toISOString(),
      durationSpentSeconds: 120,
      scorePercent: 40,
      correctCount: 4,
      totalCount: 10,
      passed: false,
      answers: [
        {
          questionId: 'swr-exam-01-q01',
          selectedOptionIds: ['B'],
          isCorrect: false,
        },
      ],
    });

    render(
      <MemoryRouter initialEntries={['/subjects/swr-past']}>
        <Routes>
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
        </Routes>
      </MemoryRouter>
    );

    // Tab button should be visible
    const tabBtn = screen.getByRole('button', {
      name: /Tổng Hợp 7 Đề Gốc/i,
    });
    expect(tabBtn).toBeInTheDocument();

    // Click tab
    fireEvent.click(tabBtn);

    // Header and stats should render
    expect(
      screen.getByText(/Ngân Hàng 7 Đề Gốc SWR302 Theo Dạng/i)
    ).toBeInTheDocument();
    expect(screen.getAllByText(/419 câu/i).length).toBeGreaterThan(0);

    // Wrong question button should display count 1
    const wrongBtn = screen.getByRole('button', {
      name: /Câu em đã làm sai \(1\)/i,
    });
    expect(wrongBtn).toBeInTheDocument();

    // Click filter to show only wrong questions
    fireEvent.click(wrongBtn);
    expect(screen.getByText(/Em đã làm sai 1 lần/i)).toBeInTheDocument();

    // Reset filter
    fireEvent.click(screen.getByRole('button', { name: /Tất cả \(/i }));
    expect(screen.queryByText(/Không tìm thấy câu hỏi/i)).not.toBeInTheDocument();
  });
});
