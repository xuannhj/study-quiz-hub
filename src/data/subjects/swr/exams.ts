import type { ExamPack } from '../../../types/study';

const ALL_SWR_CHAPTERS = [
  'swr-ch1',
  'swr-ch2',
  'swr-ch3',
  'swr-ch4',
  'swr-ch5',
  'swr-ch6',
  'swr-ch7',
  'swr-ch8',
  'swr-ch9',
  'swr-ch10',
  'swr-ch11',
  'swr-ch12',
  'swr-ch13',
  'swr-ch14',
  'swr-ch15',
  'swr-ch16',
  'swr-ch17',
  'swr-ch18',
  'swr-ch19',
];

const EXTENDED_19CH_IDS = Array.from(
  { length: 57 },
  (_, idx) => `swr-q-${String(116 + idx).padStart(3, '0')}`
);

export const swrExamPacks: ExamPack[] = [
  {
    id: 'swr-quiz-1',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz 1: Chương 1 – Chương 6 (Nền tảng, Khách hàng & Voice of User)',
    description:
      'Kiểm tra kiến thức về bản chất yêu cầu, Bill of Rights/Responsibilities, Good Practices, vai trò BA, Vision & Scope (Context Diagram) và User Classes.',
    durationMinutes: 25,
    questionCount: 25,
    chapterIds: [
      'swr-ch1',
      'swr-ch2',
      'swr-ch3',
      'swr-ch4',
      'swr-ch5',
      'swr-ch6',
    ],
    passScorePercent: 60,
  },
  {
    id: 'swr-quiz-2',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz 2: Chương 7 – Chương 13 (Elicitation, Use Case, SRS & Diagrams)',
    description:
      'Kiểm tra kỹ thuật khai thác yêu cầu, Use Case Diagram/Spec, Business Rules, tài liệu SRS, tiêu chuẩn viết yêu cầu, DFD/Swimlane/State Diagram và Data Modeling (ERD/CRUD).',
    durationMinutes: 30,
    questionCount: 30,
    chapterIds: [
      'swr-ch7',
      'swr-ch8',
      'swr-ch9',
      'swr-ch10',
      'swr-ch11',
      'swr-ch12',
      'swr-ch13',
    ],
    passScorePercent: 60,
  },
  {
    id: 'swr-quiz-3',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz 3: Chương 14 – Chương 19 (NFR/Planguage, Prototype, Priority & Validation)',
    description:
      'Kiểm tra Quality Attributes, Planguage, Constraints, Prototyping, Prioritization (MoSCoW/$100), Validation vs Verification, Inspection, Reuse và Estimation.',
    durationMinutes: 25,
    questionCount: 25,
    chapterIds: [
      'swr-ch14',
      'swr-ch15',
      'swr-ch16',
      'swr-ch17',
      'swr-ch18',
      'swr-ch19',
    ],
    passScorePercent: 60,
  },
  {
    id: 'swr-quiz-part1-foundations',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz Chuyên Sâu Part I: Nền tảng RE, Khách hàng, Good Practices & BA (Ch 1–4)',
    description:
      'Rèn sâu 4 chương đầu: Product vs Project requirements, Decision leader/rule, phân loại nhóm Good Practices và 10 nhiệm vụ/kỹ năng cốt lõi của Business Analyst.',
    durationMinutes: 20,
    questionCount: 20,
    chapterIds: ['swr-ch1', 'swr-ch2', 'swr-ch3', 'swr-ch4'],
    passScorePercent: 60,
  },
  {
    id: 'swr-quiz-srs-rules-models',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz Chuyên Sâu: Business Rules, SRS, Viết Yêu Cầu & Mô Hình (Ch 9–12)',
    description:
      'Bao quát 5 loại Business Rules Taxonomy, Atomic Rules, đánh mã SRS, xử lý TBD, 7 tiêu chí Statement, Dialog Map, Decision Table và Event-Response Table.',
    durationMinutes: 25,
    questionCount: 22,
    chapterIds: ['swr-ch9', 'swr-ch10', 'swr-ch11', 'swr-ch12'],
    passScorePercent: 60,
  },
  {
    id: 'swr-final-1',
    subjectId: 'swr',
    category: 'final',
    title: 'Final Exam Mock #1 (Tổng hợp chuẩn 50 câu)',
    description:
      'Đề thi thử cuối kỳ rút cân bằng 50 câu hỏi rải đều qua toàn bộ 19 Chương.',
    durationMinutes: 60,
    questionCount: 50,
    chapterIds: ALL_SWR_CHAPTERS,
    passScorePercent: 50,
  },
  {
    id: 'swr-final-2',
    subjectId: 'swr',
    category: 'final',
    title: 'Final Exam Mock #2 (Đề đầy đủ 60 câu)',
    description:
      'Đề thi tổng duyệt rút cân bằng 60 câu qua toàn bộ 19 Chương, bao gồm cả câu tình huống và câu chọn nhiều đáp án.',
    durationMinutes: 60,
    questionCount: 60,
    chapterIds: ALL_SWR_CHAPTERS,
    passScorePercent: 50,
  },
  {
    id: 'swr-final-3-textbook-deep',
    subjectId: 'swr',
    category: 'final',
    title: 'Final Mock #3: Tổng hợp Chuyên Sâu 19 Chương Slide & Giáo Trình (57 câu)',
    description:
      'Đề cố định gồm 57 câu chuyên sâu (không trùng 61 câu nền tảng), bao quát mọi khái niệm trọng tâm và tình huống thực chiến từ Chương 1 đến Chương 19.',
    durationMinutes: 60,
    questionCount: EXTENDED_19CH_IDS.length,
    chapterIds: ALL_SWR_CHAPTERS,
    fixedQuestionIds: EXTENDED_19CH_IDS,
    passScorePercent: 50,
  },
];
