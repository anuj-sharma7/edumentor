import type { StudyChapter } from '../types';
import { unitsDimensionsErrors } from './units-dimensions-errors';
import { kinematics } from './kinematics';
import { lawsOfMotion } from './laws-of-motion';
import { workEnergyPower } from './work-energy-power';
import { centreOfMassCollisions } from './centre-of-mass-collisions';
import { rotationalMotion } from './rotational-motion';
import { gravitation } from './gravitation';

export const physics11PartA: StudyChapter[] = [
  unitsDimensionsErrors,
  kinematics,
  lawsOfMotion,
  workEnergyPower,
  centreOfMassCollisions,
  rotationalMotion,
  gravitation,
];
