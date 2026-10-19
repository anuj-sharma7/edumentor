import type { StudyChapter } from '../types';
import { chemicalThermodynamics } from './chemical-thermodynamics';
import { chemicalEquilibrium } from './chemical-equilibrium';
import { ionicEquilibrium } from './ionic-equilibrium';
import { redoxReactions } from './redox-reactions';
import { organicBasicPrinciples } from './organic-basic-principles';
import { hydrocarbons } from './hydrocarbons';

export const chemistry11PartB: StudyChapter[] = [
  chemicalThermodynamics,
  chemicalEquilibrium,
  ionicEquilibrium,
  redoxReactions,
  organicBasicPrinciples,
  hydrocarbons,
];
