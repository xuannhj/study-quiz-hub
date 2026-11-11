import { BUILT_IN_SUBJECTS } from '../../data/subjects';
import { createStorageService } from './storageService';

export const storageService = createStorageService(BUILT_IN_SUBJECTS);
