import type { Subject } from '.';
import { structuralOrganisationInPlantsQuestions } from './botany-structural-organisation';
import { humanPhysiologyDigestionQuestions } from './zoology-human-physiology';


export const biologySubject: Subject = {
  id: 4,
  name: 'Biology',
  units: [
    {
      id: 40,
      name: 'Botany',
      chapters: [structuralOrganisationInPlantsQuestions]
    },
    {
      id: 41,
      name: 'Zoology',
      chapters: [humanPhysiologyDigestionQuestions]
    }
  ],
  chapters: [
    structuralOrganisationInPlantsQuestions,
    humanPhysiologyDigestionQuestions,
  ]
};