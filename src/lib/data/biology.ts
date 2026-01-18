import type { Subject } from '.';
import { structuralOrganisationInPlantsQuestions } from './botany-structural-organisation';
import { humanPhysiologyDigestionQuestions } from './zoology-human-physiology';
import { anatomyOfFloweringPlantsQuestions } from './botany-anatomy-flowering-plants';
import { breathingAndExchangeQuestions } from './zoology-breathing-exchange-gases';
import { plantKingdomQuestions } from './botany-plant-kingdom';
import { bodyFluidsAndCirculationQuestions } from './zoology-body-fluids';
import { cellUnitOfLifeQuestions } from './botany-cell-unit-of-life';
import { cellCycleQuestions } from './botany-cell-cycle';
import { excretoryProductsQuestions } from './zoology-excretory-products';
import { locomotionQuestions } from './zoology-locomotion';


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
        cellUnitOfLifeQuestions,
        cellCycleQuestions,
      ]
    },
    {
      id: 41,
      name: 'Zoology',
      chapters: [
        humanPhysiologyDigestionQuestions,
        breathingAndExchangeQuestions,
        bodyFluidsAndCirculationQuestions,
        excretoryProductsQuestions,
        locomotionQuestions,
      ]
    }
  ],
  chapters: [
    structuralOrganisationInPlantsQuestions,
    anatomyOfFloweringPlantsQuestions,
    plantKingdomQuestions,
    cellUnitOfLifeQuestions,
    cellCycleQuestions,
    humanPhysiologyDigestionQuestions,
    breathingAndExchangeQuestions,
    bodyFluidsAndCirculationQuestions,
    excretoryProductsQuestions,
    locomotionQuestions,
  ]
};
