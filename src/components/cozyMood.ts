import { createContext, useContext } from 'react';

export const AMBIENT_STORAGE_KEY = 'xuannhi_cozy_ambient_v1';
export const THEME_STORAGE_KEY = 'xuannhi_theme_v1';

export type ThemeMode = 'light' | 'dark';

export interface CozyGreeting {
  greeting: string;
  headerNote: string;
  heroSubtitle: string;
}

/**
 * Generates an encouraging, warm greeting personalized for Xuan Nhi.
 */
export function getXuanNhiGreeting(date: Date = new Date()): CozyGreeting {
  const hour = date.getHours();

  if (hour >= 5 && hour < 11) {
    return {
      greeting: 'Chào buổi sáng, em bé Xuân Nhi',
      headerNote: 'Sáng sớm bình yên nè — cố gắng thêm xíu nữa, em bé giỏi lắm!',
      heroSubtitle:
        'Pha một ly nước ấm, mở nhẹ tiếng mưa và chinh phục từng bài học thật êm nha Nhi.',
    };
  }

  if (hour >= 11 && hour < 14) {
    return {
      greeting: 'Trưa bình yên nhé, em bé Xuân Nhi',
      headerNote: 'Trưa nay em bé vẫn chăm quá chừng — cố thêm chút nữa nha!',
      heroSubtitle:
        'Làm gọn một bài Quiz nhỏ hoặc lướt lại vài thẻ kiến thức là nhớ lâu lắm luôn.',
    };
  }

  if (hour >= 14 && hour < 18) {
    return {
      greeting: 'Chiều chill nhé, em bé Xuân Nhi',
      headerNote: 'Chiều mưa dịu nhẹ nè — cố gắng thêm xíu nữa, em bé giỏi lắm!',
      heroSubtitle:
        'Chọn môn em muốn ôn, bật chút tiếng mưa êm ái và học chậm mà chắc nhé.',
    };
  }

  if (hour >= 18 && hour < 22) {
    return {
      greeting: 'Tối ấm áp nhé, em bé Xuân Nhi',
      headerNote: 'Tối nay học thật vui nha — em bé giỏi lắm luôn á!',
      heroSubtitle:
        'Ánh đèn đom đóm đã bật lên rồi, cùng cố gắng thêm xíu nữa với từng chương nhé.',
    };
  }

  return {
    greeting: 'Đêm yên tĩnh thật chill, Xuân Nhi ơi',
    headerNote: 'Cố gắng thêm xíu nữa nha Xuân Nhi — em bé giỏi lắm luôn!',
    heroSubtitle:
      'Đêm mưa yên tĩnh cực hợp để tập trung nè, có góc học nhỏ này ngồi cùng em bé đây.',
  };
}

export function loadAmbientPreference(): boolean {
  try {
    if (
      typeof window === 'undefined' ||
      !window.localStorage ||
      typeof window.localStorage.getItem !== 'function'
    ) {
      return true;
    }
    const raw = window.localStorage.getItem(AMBIENT_STORAGE_KEY);
    return raw === null ? true : raw === 'true';
  } catch {
    return true;
  }
}

export function saveAmbientPreference(enabled: boolean): void {
  try {
    if (
      typeof window !== 'undefined' &&
      window.localStorage &&
      typeof window.localStorage.setItem === 'function'
    ) {
      window.localStorage.setItem(AMBIENT_STORAGE_KEY, String(enabled));
    }
  } catch {
    // Ignore storage quota or private-mode errors safely.
  }
}

export function loadThemePreference(): ThemeMode {
  try {
    if (
      typeof window === 'undefined' ||
      !window.localStorage ||
      typeof window.localStorage.getItem !== 'function'
    ) {
      return 'light';
    }
    const raw = window.localStorage.getItem(THEME_STORAGE_KEY);
    return raw === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function applyThemeClass(theme: ThemeMode): void {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}

export function saveThemePreference(theme: ThemeMode): void {
  applyThemeClass(theme);
  try {
    if (
      typeof window !== 'undefined' &&
      window.localStorage &&
      typeof window.localStorage.setItem === 'function'
    ) {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  } catch {
    // Ignore storage quota or private-mode errors safely.
  }
}

export const AmbientContext = createContext<{
  ambientEnabled: boolean;
}>({ ambientEnabled: true });

export function useAmbient() {
  return useContext(AmbientContext);
}
