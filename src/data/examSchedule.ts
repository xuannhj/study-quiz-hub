export interface ExamScheduleSlot {
  id: string;
  subjectCode: string;
  subjectName: string;
  date: string; // YYYY-MM-DD
  dateLabel: string; // DD/MM/YYYY
  time: string;
  room: string;
  format: 'PRACTICAL_EXAM' | 'Multiple_choices';
  examType: 'PE' | 'FE' | '2NDFE';
  gradeDate: string;
}

/**
 * Official FPT exam schedule provided by Xuan Nhi (Fall/Winter 2026).
 */
export const XUAN_NHI_EXAM_SCHEDULE: readonly ExamScheduleSlot[] = [
  {
    id: 'fer202-pe',
    subjectCode: 'FER202',
    subjectName: 'Phát triển web Front-End với React',
    date: '2026-11-08',
    dateLabel: '08/11/2026',
    time: '18h00-20h00',
    room: '212',
    format: 'PRACTICAL_EXAM',
    examType: 'PE',
    gradeDate: '19/11/2026',
  },
  {
    id: 'fer202-fe',
    subjectCode: 'FER202',
    subjectName: 'Phát triển web Front-End với React',
    date: '2026-11-17',
    dateLabel: '17/11/2026',
    time: '12h50-14h20',
    room: '118',
    format: 'Multiple_choices',
    examType: 'FE',
    gradeDate: '25/11/2026',
  },
  {
    id: 'swr302-pe-fe',
    subjectCode: 'SWR302',
    subjectName: 'Yêu cầu phần mềm',
    date: '2026-11-18',
    dateLabel: '18/11/2026',
    time: '14h30-16h10',
    room: '230',
    format: 'PRACTICAL_EXAM',
    examType: 'FE',
    gradeDate: '26/11/2026',
  },
  {
    id: 'swr302-mc-fe',
    subjectCode: 'SWR302',
    subjectName: 'Yêu cầu phần mềm',
    date: '2026-11-18',
    dateLabel: '18/11/2026',
    time: '16h20-17h40',
    room: '230',
    format: 'Multiple_choices',
    examType: 'FE',
    gradeDate: '26/11/2026',
  },
  {
    id: 'swt301-pe-fe',
    subjectCode: 'SWT301',
    subjectName: 'Kiểm thử phần mềm',
    date: '2026-11-19',
    dateLabel: '19/11/2026',
    time: '14h30-16h10',
    room: '131',
    format: 'PRACTICAL_EXAM',
    examType: 'FE',
    gradeDate: '26/11/2026',
  },
  {
    id: 'swt301-mc-fe',
    subjectCode: 'SWT301',
    subjectName: 'Kiểm thử phần mềm',
    date: '2026-11-19',
    dateLabel: '19/11/2026',
    time: '16h20-17h40',
    room: '131',
    format: 'Multiple_choices',
    examType: 'FE',
    gradeDate: '26/11/2026',
  },
  {
    id: 'fer202-2ndfe',
    subjectCode: 'FER202',
    subjectName: 'Phát triển web Front-End với React',
    date: '2026-11-27',
    dateLabel: '27/11/2026',
    time: '14h30-16h00',
    room: '-',
    format: 'Multiple_choices',
    examType: '2NDFE',
    gradeDate: '01/12/2026',
  },
  {
    id: 'swr302-2ndfe-pe',
    subjectCode: 'SWR302',
    subjectName: 'Yêu cầu phần mềm',
    date: '2026-11-28',
    dateLabel: '28/11/2026',
    time: '07h30-09h10',
    room: '-',
    format: 'PRACTICAL_EXAM',
    examType: '2NDFE',
    gradeDate: '01/12/2026',
  },
  {
    id: 'swr302-2ndfe-mc',
    subjectCode: 'SWR302',
    subjectName: 'Yêu cầu phần mềm',
    date: '2026-11-28',
    dateLabel: '28/11/2026',
    time: '09h20-10h40',
    room: '-',
    format: 'Multiple_choices',
    examType: '2NDFE',
    gradeDate: '01/12/2026',
  },
  {
    id: 'swt301-2ndfe-pe',
    subjectCode: 'SWT301',
    subjectName: 'Kiểm thử phần mềm',
    date: '2026-11-28',
    dateLabel: '28/11/2026',
    time: '12h50-14h30',
    room: '-',
    format: 'PRACTICAL_EXAM',
    examType: '2NDFE',
    gradeDate: '01/12/2026',
  },
  {
    id: 'swt301-2ndfe-mc',
    subjectCode: 'SWT301',
    subjectName: 'Kiểm thử phần mềm',
    date: '2026-11-28',
    dateLabel: '28/11/2026',
    time: '14h40-16h00',
    room: '-',
    format: 'Multiple_choices',
    examType: '2NDFE',
    gradeDate: '01/12/2026',
  },
  {
    id: 'wdu203c-fe',
    subjectCode: 'WDU203c',
    subjectName: 'Thiết kế trải nghiệm người dùng',
    date: '2026-12-13',
    dateLabel: '13/12/2026',
    time: '07h30-08h50',
    room: '011',
    format: 'Multiple_choices',
    examType: 'FE',
    gradeDate: '18/12/2026',
  },
  {
    id: 'wdu203c-2ndfe',
    subjectCode: 'WDU203c',
    subjectName: 'Thiết kế trải nghiệm người dùng',
    date: '2026-12-20',
    dateLabel: '20/12/2026',
    time: '09h10-10h40',
    room: '-',
    format: 'Multiple_choices',
    examType: '2NDFE',
    gradeDate: '25/12/2026',
  },
];

export function computeDaysUntilExamDate(
  isoDate: string,
  now: Date = new Date()
): number {
  const target = new Date(`${isoDate}T00:00:00`);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.ceil(
    (target.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)
  );
}

/**
 * Returns upcoming primary FE/PE exams (skipping secondary 2NDFE retake slots by default).
 */
export function getUpcomingPrimaryExams(
  now: Date = new Date()
): ExamScheduleSlot[] {
  return XUAN_NHI_EXAM_SCHEDULE.filter(
    (slot) =>
      slot.examType !== '2NDFE' && computeDaysUntilExamDate(slot.date, now) >= 0
  );
}

