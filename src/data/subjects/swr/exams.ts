import type { ExamPack } from '../../../types/study';

export const swrExamPacks: ExamPack[] = [
  {
    id: 'swr-quiz-1',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz 1 (Starter): Chương 1 - Chương 2',
    description:
      'Bài Quiz mẫu kiểm tra khái niệm phân loại yêu cầu và kỹ thuật khai thác (Elicitation).',
    durationMinutes: 15,
    questionCount: 6,
    chapterIds: ['swr-ch1', 'swr-ch2'],
    passScorePercent: 60,
  },
  {
    id: 'swr-final-1',
    subjectId: 'swr',
    category: 'final',
    title: 'Final Exam Mock #1 (Starter)',
    description:
      'Đề thi thử Final mẫu tổng hợp câu hỏi trọng tâm từ toàn bộ các chương hiện có.',
    durationMinutes: 60,
    questionCount: 50,
    chapterIds: ['swr-ch1', 'swr-ch2'],
    passScorePercent: 50,
  },
];
