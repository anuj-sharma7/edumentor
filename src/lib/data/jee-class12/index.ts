import { physics12 } from './physics';
import { chemistry12 } from './chemistry';
import { mathematics12 } from './mathematics';
import type { JeeSubject } from './types';

export * from './types';

/** Class 12 JEE chapter guide: priority, important topics, theory, formulas. */
export const jeeClass12: JeeSubject[] = [physics12, chemistry12, mathematics12];
