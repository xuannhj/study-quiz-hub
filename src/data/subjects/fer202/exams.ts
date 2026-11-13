import type { ExamPack } from '../../../types/study';

const rangeIds = (start: number, count: number): string[] =>
  Array.from(
    { length: count },
    (_, idx) => `fer202-q-${String(start + idx).padStart(3, '0')}`
  );

const ALL_IDS = rangeIds(1, 150);

const M1_IDS = rangeIds(1, 30); // Ch1 - Ch3 (Slot 1-5)
const M2_IDS = rangeIds(31, 30); // Ch4 - Ch6 (Slot 6-8)
const M3_IDS = rangeIds(61, 20); // Ch7 - Ch8 (Slot 9-12)
const M4_IDS = rangeIds(81, 30); // Ch9 - Ch11 (Slot 13-15)
const M5_IDS = rangeIds(111, 40); // Ch12 - Ch15 (Slot 16-20)

const MOCK_1_IDS = ALL_IDS.filter((_, idx) => idx % 3 === 0); // 50 câu rải đều 15 chương
const MOCK_2_IDS = ALL_IDS.filter((_, idx) => idx % 3 === 1); // 50 câu rải đều 15 chương
const MOCK_3_IDS = ALL_IDS.filter((_, idx) => idx % 3 === 2); // 50 câu rải đều 15 chương

const ALL_CHAPTERS = Array.from({ length: 15 }, (_, idx) => `fer202-ch${idx + 1}`);

export const fer202ExamPacks: ExamPack[] = [
  {
    id: 'fer202-quiz-m1',
    subjectId: 'fer202',
    category: 'quiz',
    title: 'Progress Test 1 (Slot 1–5): React 18, Node.js, ES6, JSX & Bootstrap 5 (30 câu)',
    description:
      'Kiểm tra kiến thức nền tảng từ Chương 1 đến Chương 3: Virtual DOM, React 18 Automatic Batching, kiến trúc Node.js単luồng (Event Loop), cú pháp ES6 (let/const, Arrow, Destructuring, Spread/Rest), biên dịch JSX và hệ thống lưới Bootstrap 5 (12 cột, 6 breakpoints, Flexbox).',
    durationMinutes: 30,
    questionCount: M1_IDS.length,
    chapterIds: ['fer202-ch1', 'fer202-ch2', 'fer202-ch3'],
    fixedQuestionIds: M1_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-quiz-m2',
    subjectId: 'fer202',
    category: 'quiz',
    title: 'Progress Test 2 (Slot 6–8): Components, Lifecycle, React-Bootstrap, Props/State & Context (30 câu)',
    description:
      'Kiểm tra kiến thức từ Chương 4 đến Chương 6: Function vs Class Component, vòng đời Mounting/Updating/Unmounting, Higher-Order Components, bộ UI React-Bootstrap (Container/Row/Col, Modal, Form, Nav), luồng dữ liệu một chiều Props/State và chống Prop Drilling với Context API.',
    durationMinutes: 30,
    questionCount: M2_IDS.length,
    chapterIds: ['fer202-ch4', 'fer202-ch5', 'fer202-ch6'],
    fixedQuestionIds: M2_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-quiz-m3',
    subjectId: 'fer202',
    category: 'quiz',
    title: 'Progress Test 3 (Slot 9–12): React Hooks, Event Handling, Render & Commit, Lists/Keys (20 câu)',
    description:
      'Kiểm tra chuyên sâu Chương 7 và Chương 8: Rules of Hooks, useState (Functional Updater), useEffect (Dependency Array & Cleanup), useReducer, useRef, useMemo/useCallback, SyntheticEvent, ẩn dụ Nhà hàng 3 bước (Trigger → Render → Commit) và quy tắc chọn key khi render danh sách.',
    durationMinutes: 25,
    questionCount: M3_IDS.length,
    chapterIds: ['fer202-ch7', 'fer202-ch8'],
    fixedQuestionIds: M3_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-quiz-m4',
    subjectId: 'fer202',
    category: 'quiz',
    title: 'Progress Test 4 (Slot 13–15): PropTypes, React Router v6 & Code Splitting/Suspense (30 câu)',
    description:
      'Kiểm tra Chương 9 đến Chương 11: Kiểm tra kiểu runtime với PropTypes (node vs element, shape vs exact, Custom Validator), định tuyến SPA với React Router v6 (BrowserRouter, Routes/Route, Link/NavLink, Outlet, useParams, useSearchParams, useNavigate) và tối ưu bundle với React.lazy + Suspense.',
    durationMinutes: 30,
    questionCount: M4_IDS.length,
    chapterIds: ['fer202-ch9', 'fer202-ch10', 'fer202-ch11'],
    fixedQuestionIds: M4_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-quiz-m5',
    subjectId: 'fer202',
    category: 'quiz',
    title: 'Progress Test 5 (Slot 16–20): Flux, Redux/Toolkit, REST API, Fetch/Axios, Next.js & Tailwind (40 câu)',
    description:
      'Kiểm tra Chương 12 đến Chương 15: So sánh MVC vs Flux vs Redux, 3 nguyên lý Redux, Pure Reducer, Redux Thunk & Redux Toolkit (createSlice, configureStore), giao thức HTTP/RESTful API, json-server, Promises/async-await, Fetch vs Axios, cùng kiến trúc Next.js (SSR/SSG, App Router) và Tailwind CSS.',
    durationMinutes: 40,
    questionCount: M5_IDS.length,
    chapterIds: ['fer202-ch12', 'fer202-ch13', 'fer202-ch14', 'fer202-ch15'],
    fixedQuestionIds: M5_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-final-mock-1',
    subjectId: 'fer202',
    category: 'final',
    title: 'Đề Thi Thử FE Chuẩn Slide & React Hiện Đại — Đề Số 1 (50 câu)',
    description:
      'Đề thi thử Final Exam số 1 (50 câu / 45 phút) phủ đều cả 15 chương Slide gốc kết hợp React hiện đại. Không trùng câu với Đề số 2 và Đề số 3.',
    durationMinutes: 45,
    questionCount: MOCK_1_IDS.length,
    chapterIds: ALL_CHAPTERS,
    fixedQuestionIds: MOCK_1_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-final-mock-2',
    subjectId: 'fer202',
    category: 'final',
    title: 'Đề Thi Thử FE Chuẩn Slide & React Hiện Đại — Đề Số 2 (50 câu)',
    description:
      'Đề thi thử Final Exam số 2 (50 câu / 45 phút) tập trung mạnh vào đọc hiểu code JSX/Hooks/Router/Redux, dự đoán output và phân tích lỗi thường gặp.',
    durationMinutes: 45,
    questionCount: MOCK_2_IDS.length,
    chapterIds: ALL_CHAPTERS,
    fixedQuestionIds: MOCK_2_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-final-mock-3',
    subjectId: 'fer202',
    category: 'final',
    title: 'Đề Thi Thử FE Chuẩn Slide & React Hiện Đại — Đề Số 3 (50 câu)',
    description:
      'Đề thi thử Final Exam số 3 (50 câu / 45 phút) tổng hợp các bẫy lý thuyết trong Slide (Kitchen/Waiter, PropTypes custom, Flux vs Redux, Fetch vs Axios, Next.js SSR) và tình huống thực tế.',
    durationMinutes: 45,
    questionCount: MOCK_3_IDS.length,
    chapterIds: ALL_CHAPTERS,
    fixedQuestionIds: MOCK_3_IDS,
    passScorePercent: 60,
  },
  {
    id: 'fer202-final-marathon',
    subjectId: 'fer202',
    category: 'final',
    title: 'Đề Tổng Duyệt Toàn Tập 15 Chương Slide & React Hiện Đại (Full 150 câu)',
    description:
      'Bộ đề Marathon luyện trọn vẹn 150 câu hỏi từ Slot 1 đến Slot 20 kèm giải thích chi tiết từng đáp án.',
    durationMinutes: 120,
    questionCount: ALL_IDS.length,
    chapterIds: ALL_CHAPTERS,
    fixedQuestionIds: ALL_IDS,
    passScorePercent: 60,
  },
];

