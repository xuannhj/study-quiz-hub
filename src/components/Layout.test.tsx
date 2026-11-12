import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { AMBIENT_STORAGE_KEY, THEME_STORAGE_KEY } from './cozyMood';

describe('Layout clean header, Day/Night window swap, settings menu, and dock', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('switches Day/Night banner artwork cleanly and houses ambient/sound/import inside Cài đặt menu', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Child Content</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText('Góc học của Xuân Nhi')).toBeInTheDocument();
    expect(screen.queryByText(/Lofi Town/i)).not.toBeInTheDocument();

    const bannerImg = screen.getByRole('img', {
      name: /khung cửa sổ mưa rơi/i,
    });
    expect(bannerImg).toHaveAttribute('src', '/images/cozy-window.png');

    // Enlarged Focus timer & Streak chip
    expect(screen.getByText('25:00')).toBeInTheDocument();
    const streakBtn = screen.getByRole('button', { name: /1 ngày/i });
    fireEvent.click(streakBtn);
    expect(screen.getByText('Chuỗi chăm chỉ của Xuân Nhi')).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole('button', { name: /đóng bảng chuỗi ngày học/i })
    );

    // Day/Night toggle swaps banner image and dark class
    const lightBtn = screen.getByRole('button', { name: /^sáng$/i });
    const darkBtn = screen.getByRole('button', { name: /^tối$/i });
    fireEvent.click(darkBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(
      screen.getByRole('img', { name: /căn phòng ban đêm/i })
    ).toHaveAttribute('src', '/images/cozy-night.png');
    fireEvent.click(lightBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Open Cài đặt menu to control Sound, Rain & Fireflies, and Import
    fireEvent.click(screen.getByRole('button', { name: /cài đặt/i }));
    const soundMenuBtn = screen.getByRole('menuitem', {
      name: /âm thanh nền/i,
    });
    fireEvent.click(soundMenuBtn);
    expect(screen.getByText('Tiếng mưa dịu')).toBeInTheDocument();

    const ambientMenuBtn = screen.getByRole('menuitem', {
      name: /mưa & đom đóm/i,
    });
    fireEvent.click(ambientMenuBtn);
    expect(window.localStorage.getItem(AMBIENT_STORAGE_KEY)).toBe('false');
    expect(
      screen.getByRole('menuitem', { name: /import & backup/i })
    ).toBeInTheDocument();
  });
});
