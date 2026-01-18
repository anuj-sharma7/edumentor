
import type { Subject } from '.';
import { structuralOrganisationInPlantsQuestions } from './botany-structural-organisation';
import { humanPhysiologyDigestionQuestions } from './zoology-human-physiology';
import { anatomyOfFloweringPlantsQuestions } from './botany-anatomy-flowering-plants';
import { breathingAndExchangeQuestions } from './zoology-breathing-exchange-gases';
import { plantKingdomQuestions } from './botany-plant-kingdom';
import { bodyFluidsAndCirculationQuestions } from './zoology-body-fluids';


export const biologySubject: Subject = {
  id: 4,
  name: 'Biology',
  units: [
    {
      id: 40,
      name: 'Botany',
      chapters: [
        structuralOrganisationInPlantsQuestions,
        anatomyOfFloweringPlantsQuestions,
        plantKingdomQuestions,
      ]
    },
    {
      id: 41,
      name: 'Zoology',
      chapters: [
        humanPhysiologyDigestionQuestions,
        breathingAndExchangeQuestions,
        bodyFluidsAndCirculationQuestions,
      ]
    }
  ],
  chapters: [
    structuralOrganisationInPlantsQuestions,
    anatomyOfFloweringPlantsQuestions,
    humanPhysiologyDigestionQuestions,
    breathingAndExchangeQuestions,
    plantKingdomQuestions,
    bodyFluidsAndCirculationQuestions,
  ]
};
