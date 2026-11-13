import type { Subject } from '../../types/study';
import { swrSubject } from './swr';
import { swrPdfSubject } from './swr-pdf';
import { fer202Subject } from './fer202';
import { fer202PastSubject } from './fer202-past';

export const BUILT_IN_SUBJECTS: Subject[] = [
  swrSubject,
  swrPdfSubject,
  fer202Subject,
  fer202PastSubject,
];

export { fer202Subject, fer202PastSubject };

