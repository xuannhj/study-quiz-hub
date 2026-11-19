import type { Subject } from '../../types/study';
import { swrSubject } from './swr';
import { swrPdfSubject } from './swr-pdf';
import { swrPastSubject } from './swr-past';
import { fer202Subject } from './fer202';
import { fer202PastSubject } from './fer202-past';
import { swtSubject } from './swt';
import { swtPastSubject } from './swt-past';

export const BUILT_IN_SUBJECTS: Subject[] = [
  swrSubject,
  swrPastSubject,
  swrPdfSubject,
  swtSubject,
  swtPastSubject,
  fer202Subject,
  fer202PastSubject,
];

export {
  swrSubject,
  swrPastSubject,
  swtSubject,
  swtPastSubject,
  fer202Subject,
  fer202PastSubject,
};


