export type CourseGroup = 'all' | 'fer' | 'swr' | 'swt';

export interface CourseGroupMeta {
  id: CourseGroup;
  label: string;
  badge: string;
  icon: string;
  title: string;
}

export const COURSE_GROUPS: CourseGroupMeta[] = [
  {
    id: 'all',
    label: 'Tất cả các môn',
    badge: 'Tất cả',
    icon: '📚',
    title: 'Toàn bộ môn học',
  },
  {
    id: 'fer',
    label: 'FER202',
    badge: 'React & JS',
    icon: '⚛️',
    title: 'Front-End Development with React',
  },
  {
    id: 'swr',
    label: 'SWR302',
    badge: 'Requirements',
    icon: '📐',
    title: 'Software Requirements',
  },
  {
    id: 'swt',
    label: 'SWT301',
    badge: 'Testing',
    icon: '🧪',
    title: 'Software Testing',
  },
];

export function getSubjectCourseGroup(
  subjectId: string,
  code?: string
): 'fer' | 'swr' | 'swt' {
  const text = `${subjectId} ${code ?? ''}`.toLowerCase();
  if (text.includes('fer') || text.includes('react')) return 'fer';
  if (text.includes('swt') || text.includes('test')) return 'swt';
  if (text.includes('swr') || text.includes('requirement')) return 'swr';
  return 'swr';
}
