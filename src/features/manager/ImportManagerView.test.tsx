import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ImportManagerView } from './ImportManagerView';
import { storageService } from '../../services/storage';

describe('ImportManagerView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('previews raw pasted questions, shows errors if invalid, and saves valid ones to selected subject', () => {
    render(
      <MemoryRouter initialEntries={['/import?subject=swr']}>
        <ImportManagerView />
      </MemoryRouter>
    );

    const textarea = screen.getByLabelText(/dán câu hỏi hoặc json/i);
    fireEvent.change(textarea, {
      target: {
        value: `
1. Which requirement defines system response time?
A. Functional
B. Non-Functional
Answer: B
Explanation: Response time is a performance quality attribute.
`,
      },
    });

    fireEvent.click(screen.getByRole('button', { name: /xem trước/i }));
    expect(screen.getByText(/1 câu hỏi hợp lệ/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /lưu vào môn học/i }));
    expect(screen.getByText(/đã lưu 1 câu hỏi mới/i)).toBeInTheDocument();

    const swr = storageService.getSubjectById('swr');
    expect(
      swr?.questions.some((q) =>
        q.prompt.includes('Which requirement defines system response time?')
      )
    ).toBe(true);
  });
});

