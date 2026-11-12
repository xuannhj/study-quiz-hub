import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DashboardView } from './DashboardView';
import { STORAGE_KEY } from '../../services/storage/storageService';

describe('DashboardView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('highlights primary Start Studying action, Firefly Jar daily goal, and creates a new subject', () => {
    render(
      <MemoryRouter>
        <DashboardView />
      </MemoryRouter>
    );

    expect(screen.getAllByText('SWR302').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Thời gian biểu thi sắp tới')).toBeInTheDocument();
    expect(screen.getByText('Software Requirements')).toBeInTheDocument();
    expect(screen.getByText('SWR-PDF')).toBeInTheDocument();
    expect(
      screen.getByText(/không gian ôn tập riêng của xuân nhi/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /bắt đầu ôn ngay/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/lọ đom đóm/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText(/tìm nhanh môn học/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /xem lịch thi/i }));
    expect(screen.getByRole('dialog', { name: /lịch thi của xuân nhi/i })).toBeInTheDocument();
    expect(screen.getByText(/18\/11\/2026 · 16h20-17h40/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /đóng lịch thi/i }));

    fireEvent.click(screen.getByRole('button', { name: /thêm môn học/i }));

    fireEvent.change(screen.getByLabelText(/mã môn/i), {
      target: { value: 'SWP391' },
    });
    fireEvent.change(screen.getByLabelText(/tên môn học/i), {
      target: { value: 'Software Development Project' },
    });
    fireEvent.click(screen.getByRole('button', { name: /lưu môn học/i }));

    expect(screen.getByText('SWP391')).toBeInTheDocument();
    expect(screen.getByText('Software Development Project')).toBeInTheDocument();
    expect(window.localStorage.getItem(STORAGE_KEY)).toContain('SWP391');
  });
});
