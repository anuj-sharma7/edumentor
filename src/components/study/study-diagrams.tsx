import type { DiagramKey } from '@/lib/data/study/types';
import { physicsDiagrams } from './diagrams/physics';
import { chemMathsDiagrams } from './diagrams/chem-maths';

const diagrams: Record<string, () => JSX.Element> = { ...physicsDiagrams, ...chemMathsDiagrams };

/** Renders the SVG diagram for a study topic, or nothing if the key is unknown. */
export function StudyDiagram({ name }: { name: DiagramKey }) {
  const Diagram = diagrams[name];
  return Diagram ? <Diagram /> : null;
}
