import type { ExamPack } from '../../../types/study';

const rangeIds = (start: number, count: number): string[] =>
  Array.from(
    { length: count },
    (_, idx) => `swr-pdf-q-${String(start + idx).padStart(3, '0')}`
  );

const L1_IDS = rangeIds(1, 12);
const L2_IDS = rangeIds(13, 12);
const L3_IDS = rangeIds(25, 12);
const L4_IDS = rangeIds(37, 12);
const L56_IDS = rangeIds(49, 14);
const L6_IDS = rangeIds(63, 18);

const DIAGRAMS_GROUP_IDS = [...L1_IDS, ...L2_IDS, ...L56_IDS]; // 38 câu
const UC_DATA_GROUP_IDS = [...L3_IDS, ...L4_IDS, ...L6_IDS]; // 42 câu
const ALL_PDF_IDS = rangeIds(1, 80); // 80 câu

const ALL_PDF_CHAPTERS = [
  'swr-pdf-l1',
  'swr-pdf-l2',
  'swr-pdf-l3',
  'swr-pdf-l4',
  'swr-pdf-l56',
  'swr-pdf-l6',
];

export const swrPdfExamPacks: ExamPack[] = [
  {
    id: 'swr-pdf-quiz-l1',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề 1: Lesson 01 — Swimlane Diagram (12 câu)',
    description:
      'Kiểm tra trọn vẹn Lesson 01 - Swimlane Diagram.pdf: ký hiệu hình chữ nhật/thoi/mũi tên/làn, luồng mua hóa chất Figure 12-2 (Chemist, Buyer, Receiving, Vendor) và các bẫy rẽ nhánh.',
    durationMinutes: 15,
    questionCount: L1_IDS.length,
    chapterIds: ['swr-pdf-l1'],
    fixedQuestionIds: L1_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-l2',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề 2: Lesson 02 — Context Diagram (12 câu)',
    description:
      'Kiểm tra trọn vẹn Lesson 02 - Context Diagram (1).pdf: mục đích & thời điểm vẽ, quy tắc ẩn chi tiết nội bộ, 4 loại External Entities và đọc luồng dữ liệu Chemical Tracking System.',
    durationMinutes: 15,
    questionCount: L2_IDS.length,
    chapterIds: ['swr-pdf-l2'],
    fixedQuestionIds: L2_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-l3',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề 3: Lesson 03 — Use Case Diagram (12 câu)',
    description:
      'Kiểm tra trọn vẹn Lesson 03 - Use case Diagram - for students.pdf: User Stories, Users vs Actors ("collection of hats"), chiều mũi tên Association / Generalization / Include / Extend và Figure 8-2.',
    durationMinutes: 15,
    questionCount: L3_IDS.length,
    chapterIds: ['swr-pdf-l3'],
    fixedQuestionIds: L3_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-l4',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề 4: Lesson 04 — Use Case Specification (12 câu)',
    description:
      'Kiểm tra trọn vẹn Lesson 04 - Use case Specification (1).pdf: mẫu đặc tả UC-4, Primary vs Secondary Actors, Trigger/Pre/Post, luồng 4.0/4.1, Exception 4.1.E1 và Figure 8-1.',
    durationMinutes: 15,
    questionCount: L4_IDS.length,
    chapterIds: ['swr-pdf-l4'],
    fixedQuestionIds: L4_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-l56',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề 5: Lesson 05–06 — State Diagram & Level 0 DFD (14 câu)',
    description:
      'Kiểm tra trọn vẹn Lesson 05 & 06 - State diagram & DFD.pdf: chuyển trạng thái hợp lệ/bẫy cấm của Chemical Request, 4 ký hiệu DFD Key và luồng dữ liệu Figure 12-1.',
    durationMinutes: 18,
    questionCount: L56_IDS.length,
    chapterIds: ['swr-pdf-l56'],
    fixedQuestionIds: L56_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-l6',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề 6: Knowledge Ch 13 — Data Modeling, ERD, CRUD & Reports (18 câu)',
    description:
      'Kiểm tra trọn vẹn Knowledge - Chapters 13 (1).pdf: Conceptual/Logical/Physical, Chen vs Crow’s Foot, đọc ERD Chemical Tracking System, phát hiện thiếu sót bằng CRUD Matrix và đặc tả Báo cáo.',
    durationMinutes: 22,
    questionCount: L6_IDS.length,
    chapterIds: ['swr-pdf-l6'],
    fixedQuestionIds: L6_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-diagrams',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề Gộp A: Chuyên Sâu Sơ Đồ (Swimlane, Context, State & DFD — 38 câu)',
    description:
      'Tổng hợp toàn bộ 38 câu hỏi từ 4 file PDF sơ đồ (Lesson 01, Lesson 02, Lesson 05–06) để luyện phản xạ đọc ký hiệu và bẫy sơ đồ.',
    durationMinutes: 40,
    questionCount: DIAGRAMS_GROUP_IDS.length,
    chapterIds: ['swr-pdf-l1', 'swr-pdf-l2', 'swr-pdf-l56'],
    fixedQuestionIds: DIAGRAMS_GROUP_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-quiz-uc-data',
    subjectId: 'swr-pdf',
    category: 'quiz',
    title: 'Đề Gộp B: Use Case & Data/Reports (Lessons 03, 04 & Ch 13 — 42 câu)',
    description:
      'Tổng hợp toàn bộ 42 câu hỏi từ bộ Use Case Diagram/Spec (Lessons 03–04) và Knowledge Chapter 13 PDF (ERD, CRUD Matrix, Reports).',
    durationMinutes: 45,
    questionCount: UC_DATA_GROUP_IDS.length,
    chapterIds: ['swr-pdf-l3', 'swr-pdf-l4', 'swr-pdf-l6'],
    fixedQuestionIds: UC_DATA_GROUP_IDS,
    passScorePercent: 60,
  },
  {
    id: 'swr-pdf-final-1',
    subjectId: 'swr-pdf',
    category: 'final',
    title: 'PDF Final Mock #1: Tổng Hợp Chuẩn 6 File PDF (40 câu)',
    description:
      'Đề thi thử rút cân bằng 40 câu rải đều cả 6 file PDF chuyên đề trong slides/swr/text/.',
    durationMinutes: 45,
    questionCount: 40,
    chapterIds: ALL_PDF_CHAPTERS,
    passScorePercent: 50,
  },
  {
    id: 'swr-pdf-final-2',
    subjectId: 'swr-pdf',
    category: 'final',
    title: 'PDF Final Mock #2: Tổng Hợp Nâng Cao 6 File PDF (60 câu)',
    description:
      'Đề thi thử rút cân bằng 60 câu bao phủ sâu cả 6 file PDF (Swimlane, Context, Use Case, State/DFD, Data/ERD/CRUD/Reports).',
    durationMinutes: 60,
    questionCount: 60,
    chapterIds: ALL_PDF_CHAPTERS,
    passScorePercent: 50,
  },
  {
    id: 'swr-pdf-final-3',
    subjectId: 'swr-pdf',
    category: 'final',
    title: 'PDF Final Mock #3: Full 100% Ngân Hàng 6 File PDF (80 câu)',
    description:
      'Đề tổng duyệt cố định toàn bộ 80 câu hỏi không bỏ sót bất kỳ chi tiết hay hình vẽ nào trong 6 file PDF chuyên đề.',
    durationMinutes: 75,
    questionCount: ALL_PDF_IDS.length,
    chapterIds: ALL_PDF_CHAPTERS,
    fixedQuestionIds: ALL_PDF_IDS,
    passScorePercent: 50,
  },
];

