import FormulaSheetView from './formula-sheet-view';
import { formulas } from '@/lib/data';
import { formulaSheet } from '@/lib/data/formula-sheet';

export default function FormulasPage() {
  // Biology has no JEE formula sheet; keep showing its existing notes.
  const biology = formulas.find(s => s.subject === 'Biology');
  return <FormulaSheetView sheet={formulaSheet} biology={biology} />;
}
