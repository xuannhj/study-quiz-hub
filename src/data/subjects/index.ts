import type { Subject } from '../../types/study';
import { swrSubject } from './swr';
import { swrPdfSubject } from './swr-pdf';

export const BUILT_IN_SUBJECTS: Subject[] = [swrSubject, swrPdfSubject];
