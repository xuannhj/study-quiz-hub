import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MistakeNotebookView } from './MistakeNotebookView';
import { storageService } from '../../services/storage';

describe('MistakeNotebookView (Sổ Tay Câu Sai & Flashcard)', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders clean encouraging empty state when there are no wrong questions', () => {
    render(
      <MemoryRouter>
        <MistakeNotebookView />
      </MemoryRouter>
    );

    expect(screen.getByText(/Sổ Tay/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Tuyệt vời quá! Bé không còn câu sai nào cần ôn!/i)
    ).toBeInTheDocument();
  });

  it('displays wrong questions, flips flashcard, filters by subject, and marks question as mastered', () => {
    // Seed storage with wrong questions across two subjects: SWR and FER202
    storageService.recordExamAttempt('swr', {
      id: 'att-swr-1',
      examPackId: 'swr-quiz-1',
      examTitle: 'Quiz 1',
      category: 'quiz',
      mode: 'exam',
      completedAt: new Date().toISOString(),
      scorePercent: 0,
      correctCount: 0,
      totalCount: 1,
      passed: false,
      durationSpentSeconds: 15,
      answers: [
        { questionId: 'swr-q-001', selectedOptionIds: ['b'], isCorrect: false },
      ],
    });

    storageService.recordExamAttempt('fer202', {
      id: 'att-fer-1',
      examPackId: 'fer202-quiz-1',
      examTitle: 'Quiz FER 1',
      category: 'quiz',
      mode: 'exam',
      completedAt: new Date().toISOString(),
      scorePercent: 0,
      correctCount: 0,
      totalCount: 1,
      passed: false,
      durationSpentSeconds: 15,
      answers: [
        { questionId: 'fer202-q-001', selectedOptionIds: ['b'], isCorrect: false },
      ],
    });

    render(
      <MemoryRouter initialEntries={['/mistakes']}>
        <Routes>
          <Route path="/mistakes" element={<MistakeNotebookView />} />
        </Routes>
      </MemoryRouter>
    );

    // Header and counters
    expect(screen.getByText(/Sổ Tay/i)).toBeInTheDocument();
    expect(screen.getByText(/Tìm thấy/i)).toBeInTheDocument();

    // Check subjects tabs exist
    expect(screen.getByText('Tất cả các môn')).toBeInTheDocument();
    expect(screen.getAllByText('SWR302').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('FER202').length).toBeGreaterThanOrEqual(1);

    // Verify flashcard is rendered
    expect(screen.getByText(/Mặt trước: Câu hỏi/i)).toBeInTheDocument();
    const flipBtn = screen.getByRole('button', {
      name: /Lật thẻ xem đáp án & giải thích/i,
    });
    expect(flipBtn).toBeInTheDocument();

    // Flip card
    fireEvent.click(flipBtn);
    expect(
      screen.getByText(/Mặt sau: Đáp án chuẩn & Lời giải/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Đáp án chính xác:/i)).toBeInTheDocument();

    // Mark as mastered
    const masteredBtn = screen.getByRole('button', {
      name: /Đã hiểu & nhớ rồi!/i,
    });
    fireEvent.click(masteredBtn);

    // Switch to status filter "Tất cả câu từng sai" to see all items including mastered
    fireEvent.click(screen.getByRole('button', { name: /Tất cả câu từng sai/i }));

    // Switch to List mode
    const listModeBtn = screen.getByRole('button', { name: /Danh sách/i });
    fireEvent.click(listModeBtn);
    expect(screen.getByText(/#1/i)).toBeInTheDocument();
  });

  it('switches to Ghi Chú tab, creates a new study note, and toggles it complete', () => {
    render(
      <MemoryRouter initialEntries={['/mistakes']}>
        <Routes>
          <Route path="/mistakes" element={<MistakeNotebookView />} />
        </Routes>
      </MemoryRouter>
    );

    // Switch to notes tab
    const notesTabBtn = screen.getByRole('button', {
      name: /Ghi Chú Cần Học/i,
    });
    fireEvent.click(notesTabBtn);

    // Click "+ Tạo ghi chú mới"
    const addNoteBtn = screen.getByRole('button', {
      name: /Tạo ghi chú mới/i,
    });
    fireEvent.click(addNoteBtn);

    // Fill note content
    const textarea = screen.getByLabelText(/Nội dung kiến thức/i);
    fireEvent.change(textarea, {
      target: {
        value: 'React 18 Concurrent Features: startTransition and useDeferredValue',
      },
    });

    // Save note
    fireEvent.click(screen.getByRole('button', { name: /Lưu vào Sổ tay/i }));

    // Check note is displayed
    expect(
      screen.getByText(/React 18 Concurrent Features/i)
    ).toBeInTheDocument();

    // Toggle completed
    const toggleBtn = screen.getByRole('button', {
      name: /Đánh dấu Đã học xong/i,
    });
    fireEvent.click(toggleBtn);
    expect(
      screen.getByText(/Đã học xong kiến thức này ✨/i)
    ).toBeInTheDocument();
  });
});
