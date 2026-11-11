import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DashboardView } from './DashboardView';
import { STORAGE_KEY } from '../../services/storage/storageService';

describe('DashboardView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders built-in SWR subject card and allows creating a new subject', () => {
    render(
      <MemoryRouter>
        <DashboardView />
      </MemoryRouter>
    );

    expect(screen.getByText('SWR302')).toBeInTheDocument();
    expect(screen.getByText('Software Requirements')).toBeInTheDocument();

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

