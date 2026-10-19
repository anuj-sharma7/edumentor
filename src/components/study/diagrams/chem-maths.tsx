/**
 * Hand-drawn SVG diagrams for chemistry and mathematics study topics.
 *
 * Same visual language as src/components/ui/concept-diagrams.tsx: strokes in
 * currentColor, accents via stroke-primary / fill-primary, so every diagram
 * adapts to light and dark mode. Keyed by the diagram keys listed in
 * src/lib/data/study/types.ts.
 */

import type { SVGProps } from 'react';

function Diagram(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" {...props} />;
}

const axisProps = { stroke: 'currentColor', strokeOpacity: 0.35, strokeWidth: 1 };
const guide = { stroke: 'currentColor', strokeOpacity: 0.45, strokeWidth: 1, strokeDasharray: '3 3' };
const ink = { stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' };
const shade = 'fill-primary/20 stroke-primary';
const url = (id: string) => `url(#${id})`;

/** Arrowhead markers: `id` (currentColor) and `id-p` (primary). Double-headed via markerStart. */
function Arrows({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto-start-reverse">
        <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
      </marker>
      <marker id={`${id}-p`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto-start-reverse">
        <path d="M0,0 L6,3 L0,6 Z" className="fill-primary" />
      </marker>
    </defs>
  );
}

function T({ p, className, ...rest }: SVGProps<SVGTextElement> & { p?: boolean }) {
  return <text fontSize={10} fill="currentColor" className={p ? `fill-primary ${className ?? ''}` : className} {...rest} />;
}

type AxesProps = { id: string; ox: number; oy: number; x1: number; y1: number; x0?: number; y0?: number; xl?: string; yl?: string };
function Axes({ id, ox, oy, x1, y1, x0, y0, xl, yl }: AxesProps) {
  return (
    <g>
      <line x1={x0 ?? ox} y1={oy} x2={x1} y2={oy} {...axisProps} strokeOpacity={0.6} markerEnd={url(id)} />
      <line x1={ox} y1={y0 ?? oy} x2={ox} y2={y1} {...axisProps} strokeOpacity={0.6} markerEnd={url(id)} />
      {xl && <T x={x1} y={oy + 13} textAnchor="end" fontSize={9} opacity={0.75}>{xl}</T>}
      {yl && <T x={ox + 6} y={y1 + 6} fontSize={9} opacity={0.75}>{yl}</T>}
    </g>
  );
}

/** Sample f on [u0, u1] and map to svg via X, Y. */
function plot(f: (u: number) => number, u0: number, u1: number, X: (u: number) => number, Y: (v: number) => number, n = 80) {
  return Array.from({ length: n + 1 }, (_, i) => {
    const u = u0 + ((u1 - u0) * i) / n;
    return `${X(u).toFixed(1)},${Y(f(u)).toFixed(1)}`;
  }).join(' ');
}

/* ============================== CHEMISTRY ============================== */

function AtomicOrbitalsDiagram() {
  const centres = [55, 160, 265];
  return (
    <Diagram aria-label="Shapes of atomic orbitals: a spherical s orbital, a dumbbell-shaped p orbital with two lobes along the x axis and one nodal plane, and a cloverleaf d_xy orbital with four lobes between the axes and two nodal planes">
      <Arrows id="ao-arr" />
      {centres.map(cx => (
        <g key={cx}>
          <line x1={cx - 45} y1={85} x2={cx + 45} y2={85} {...axisProps} markerEnd={url('ao-arr')} />
          <line x1={cx} y1={130} x2={cx} y2={40} {...axisProps} markerEnd={url('ao-arr')} />
          <T x={cx + 44} y={97} fontSize={9} opacity={0.6}>x</T>
          <T x={cx + 5} y={45} fontSize={9} opacity={0.6}>y</T>
        </g>
      ))}
      <circle cx={55} cy={85} r={26} className={shade} strokeWidth={1.5} />
      <ellipse cx={138} cy={85} rx={21} ry={11} className={shade} strokeWidth={1.5} />
      <ellipse cx={182} cy={85} rx={21} ry={11} className={shade} strokeWidth={1.5} />
      {[45, 135, 225, 315].map(a => {
        const r = (a * Math.PI) / 180;
        const x = 265 + 19 * Math.cos(r), y = 85 - 19 * Math.sin(r);
        return <ellipse key={a} cx={x} cy={y} rx={17} ry={8} transform={`rotate(${-a} ${x} ${y})`} className={shade} strokeWidth={1.5} />;
      })}
      {centres.map(cx => <circle key={`n${cx}`} cx={cx} cy={85} r={2} fill="currentColor" />)}
      <T x={55} y={152} textAnchor="middle" fontWeight={600}>s (l = 0)</T>
      <T x={160} y={152} textAnchor="middle" fontWeight={600}>pₓ (l = 1)</T>
      <T x={265} y={152} textAnchor="middle" fontWeight={600}>d_xy (l = 2)</T>
      <T x={55} y={166} textAnchor="middle" fontSize={8} opacity={0.7}>spherical, 0 nodal planes</T>
      <T x={160} y={166} textAnchor="middle" fontSize={8} opacity={0.7}>dumbbell, 1 nodal plane</T>
      <T x={265} y={166} textAnchor="middle" fontSize={8} opacity={0.7}>cloverleaf, 2 nodal planes</T>
      <T x={160} y={188} textAnchor="middle" fontSize={9} opacity={0.75}>l fixes the shape; mₗ fixes the orientation</T>
    </Diagram>
  );
}

function PeriodicTrendsDiagram() {
  return (
    <Diagram aria-label="Periodic trends on an outline of the periodic table: ionisation enthalpy and electronegativity increase across a period and up a group, while atomic radius increases down a group and from right to left">
      <Arrows id="pt-arr" />
      {Array.from({ length: 6 }, (_, r) => Array.from({ length: 8 }, (_, c) => (
        <rect key={`${r}-${c}`} x={70 + c * 20} y={45 + r * 16} width={18} height={14} rx={2} className="fill-primary" fillOpacity={0.05 + 0.04 * c + 0.04 * (5 - r)} stroke="currentColor" strokeOpacity={0.3} />
      )))}
      <line x1={70} y1={36} x2={228} y2={36} className="stroke-primary" strokeWidth={2} markerEnd={url('pt-arr-p')} />
      <T x={150} y={28} textAnchor="middle" fontSize={9} p>ionisation enthalpy, electronegativity →</T>
      <line x1={244} y1={139} x2={244} y2={47} className="stroke-primary" strokeWidth={2} markerEnd={url('pt-arr-p')} />
      <T x={252} y={90} fontSize={9} p>IE, EN</T>
      <T x={252} y={102} fontSize={9} p>increase</T>
      <line x1={58} y1={47} x2={58} y2={139} stroke="currentColor" strokeWidth={2} markerEnd={url('pt-arr')} />
      <T x={52} y={90} fontSize={9} textAnchor="end">atomic</T>
      <T x={52} y={102} fontSize={9} textAnchor="end">radius ↑</T>
      <line x1={228} y1={152} x2={70} y2={152} stroke="currentColor" strokeWidth={2} markerEnd={url('pt-arr')} />
      <T x={150} y={166} textAnchor="middle" fontSize={9}>← atomic radius, metallic character</T>
      <T x={160} y={188} textAnchor="middle" fontSize={8} opacity={0.75}>across a period Z_eff rises; down a group a new shell is added</T>
    </Diagram>
  );
}

function VseprShapesDiagram() {
  const atom = (x: number, y: number, label: string, centre = false) => (
    <g>
      <circle cx={x} cy={y} r={centre ? 9 : 7} className={centre ? 'fill-primary/25 stroke-primary' : 'fill-secondary'} stroke="currentColor" strokeWidth={1} />
      <T x={x} y={y + 3} fontSize={7} textAnchor="middle">{label}</T>
    </g>
  );
  const b = (x1: number, y1: number, x2: number, y2: number, dash?: string) => <line x1={x1} y1={y1} x2={x2} y2={y2} {...ink} strokeDasharray={dash} />;
  const names = [
    ['BeCl₂', 'linear', '180°'],
    ['BF₃', 'trigonal planar', '120°'],
    ['CH₄', 'tetrahedral', '109.5°'],
    ['H₂O', 'bent (2 lp)', '104.5°'],
  ];
  return (
    <Diagram aria-label="VSEPR shapes: BeCl2 linear at 180 degrees, BF3 trigonal planar at 120 degrees, CH4 tetrahedral at 109.5 degrees, and H2O bent at 104.5 degrees because two lone pairs repel more strongly">
      {b(12, 85, 68, 85)}
      {atom(12, 85, 'Cl')}{atom(68, 85, 'Cl')}{atom(40, 85, 'Be', true)}
      {b(120, 85, 120, 57)}{b(120, 85, 144, 99)}{b(120, 85, 96, 99)}
      {atom(120, 57, 'F')}{atom(144, 99, 'F')}{atom(96, 99, 'F')}{atom(120, 85, 'B', true)}
      {b(200, 88, 200, 58)}{b(200, 88, 177, 104)}{b(200, 88, 226, 94, '2 2')}
      <polygon points="200,88 216,104 222,110 221,104" fill="currentColor" />
      {atom(200, 58, 'H')}{atom(177, 104, 'H')}{atom(226, 94, 'H')}{atom(220, 109, 'H')}{atom(200, 88, 'C', true)}
      <ellipse cx={268} cy={70} rx={8} ry={4.5} transform="rotate(60 268 70)" className="fill-primary/10 stroke-primary" strokeDasharray="2 2" />
      <ellipse cx={292} cy={70} rx={8} ry={4.5} transform="rotate(-60 292 70)" className="fill-primary/10 stroke-primary" strokeDasharray="2 2" />
      {b(280, 88, 260, 110)}{b(280, 88, 300, 110)}
      {atom(260, 110, 'H')}{atom(300, 110, 'H')}{atom(280, 88, 'O', true)}
      {names.map(([f, s, a], i) => (
        <g key={f}>
          <T x={40 + i * 80} y={140} textAnchor="middle" fontWeight={600}>{f}</T>
          <T x={40 + i * 80} y={153} textAnchor="middle" fontSize={8.5} opacity={0.8}>{s}</T>
          <T x={40 + i * 80} y={166} textAnchor="middle" fontSize={8.5} p>{a}</T>
        </g>
      ))}
      <T x={160} y={190} textAnchor="middle" fontSize={8.5} opacity={0.75}>electron pairs repel: lp–lp &gt; lp–bp &gt; bp–bp</T>
    </Diagram>
  );
}

function MoDiagram() {
  const lvl = (x1: number, x2: number, y: number, e = '', primary = false) => (
    <g key={`${x1}-${y}`}>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth={2} className={primary ? 'stroke-primary' : undefined} />
      {e && <T x={(x1 + x2) / 2} y={y - 2} fontSize={10} textAnchor="middle" p={primary}>{e}</T>}
    </g>
  );
  const link = (x1: number, y1: number, x2: number, y2: number) => <line key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} {...guide} strokeOpacity={0.3} />;
  const mo: [string, number][] = [['σ*2p', 28], ['π*2p', 48], ['π2p', 84], ['σ2p', 102], ['σ*2s', 128], ['σ2s', 164]];
  return (
    <Diagram aria-label="Molecular orbital energy diagram for O2: valence electrons fill sigma 2s, sigma star 2s, sigma 2p, two pi 2p and then one electron in each of the two pi star 2p orbitals, leaving two unpaired electrons so O2 is paramagnetic with bond order 2">
      <Arrows id="mo-arr" />
      <line x1={10} y1={180} x2={10} y2={22} {...axisProps} strokeOpacity={0.6} markerEnd={url('mo-arr')} />
      <T x={14} y={26} fontSize={9} opacity={0.7}>E</T>
      {[link(74, 66, 148, 28), link(74, 66, 130, 48), link(74, 66, 130, 84), link(74, 66, 148, 102),
        link(246, 66, 172, 28), link(246, 66, 190, 48), link(246, 66, 190, 84), link(246, 66, 172, 102),
        link(56, 146, 148, 128), link(56, 146, 148, 164), link(264, 146, 172, 128), link(264, 146, 172, 164)]}
      {lvl(24, 38, 66, '↑↓')}{lvl(42, 56, 66, '↑')}{lvl(60, 74, 66, '↑')}
      {lvl(246, 260, 66, '↑↓')}{lvl(264, 278, 66, '↑')}{lvl(282, 296, 66, '↑')}
      {lvl(42, 56, 146, '↑↓')}{lvl(264, 278, 146, '↑↓')}
      {lvl(148, 172, 28)}
      {lvl(130, 150, 48, '↑', true)}{lvl(170, 190, 48, '↑', true)}
      {lvl(130, 150, 84, '↑↓')}{lvl(170, 190, 84, '↑↓')}
      {lvl(148, 172, 102, '↑↓')}{lvl(148, 172, 128, '↑↓')}{lvl(148, 172, 164, '↑↓')}
      {mo.map(([l, y]) => <T key={l} x={196} y={y + 3} fontSize={8} opacity={0.8}>{l}</T>)}
      <T x={49} y={80} fontSize={8} textAnchor="middle" opacity={0.7}>2p</T>
      <T x={271} y={80} fontSize={8} textAnchor="middle" opacity={0.7}>2p</T>
      <T x={49} y={160} fontSize={8} textAnchor="middle" opacity={0.7}>2s</T>
      <T x={271} y={160} fontSize={8} textAnchor="middle" opacity={0.7}>2s</T>
      <T x={49} y={188} textAnchor="middle" fontWeight={600}>O</T>
      <T x={160} y={188} textAnchor="middle" fontWeight={600}>O₂</T>
      <T x={271} y={188} textAnchor="middle" fontWeight={600}>O</T>
      <T x={30} y={12} fontSize={8} p>2 unpaired e⁻ in π*2p → paramagnetic; B.O. = (8 − 4)/2 = 2</T>
    </Diagram>
  );
}

function HybridisationDiagram() {
  const box = (x: number, y: number, e: string, primary = false) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.2} className={primary ? 'stroke-primary' : undefined} />
      <T x={x + 8} y={y + 12} fontSize={10} textAnchor="middle" p={primary}>{e}</T>
    </g>
  );
  return (
    <Diagram aria-label="sp3 hybridisation of carbon: ground state 2s2 2p2, one 2s electron promoted to give 2s1 2p3, then the one s and three p orbitals mix into four equivalent singly occupied sp3 orbitals of intermediate energy, arranged tetrahedrally">
      <Arrows id="hy-arr" />
      <line x1={12} y1={160} x2={12} y2={30} {...axisProps} strokeOpacity={0.6} markerEnd={url('hy-arr')} />
      <T x={16} y={34} fontSize={9} opacity={0.7}>E</T>
      {box(34, 70, '↑')}{box(50, 70, '↑')}{box(66, 70, '')}{box(50, 130, '↑↓')}
      {box(124, 70, '↑')}{box(140, 70, '↑')}{box(156, 70, '↑')}{box(140, 130, '↑')}
      {[222, 238, 254, 270].map(x => box(x, 100, '↑', true))}
      <T x={30} y={82} fontSize={8} textAnchor="end">2p</T>
      <T x={46} y={142} fontSize={8} textAnchor="end">2s</T>
      <T x={120} y={82} fontSize={8} textAnchor="end">2p</T>
      <T x={136} y={142} fontSize={8} textAnchor="end">2s</T>
      <T x={290} y={112} fontSize={9} p>sp³</T>
      <line x1={92} y1={108} x2={116} y2={108} stroke="currentColor" strokeWidth={1.5} markerEnd={url('hy-arr')} />
      <T x={104} y={102} fontSize={8} textAnchor="middle" opacity={0.75}>promote</T>
      <line x1={180} y1={108} x2={214} y2={108} className="stroke-primary" strokeWidth={1.5} markerEnd={url('hy-arr-p')} />
      <T x={197} y={102} fontSize={8} textAnchor="middle" p>mix</T>
      <T x={58} y={30} textAnchor="middle" fontSize={9} fontWeight={600}>C ground</T>
      <T x={148} y={30} textAnchor="middle" fontSize={9} fontWeight={600}>excited</T>
      <T x={254} y={30} textAnchor="middle" fontSize={9} fontWeight={600}>hybridised</T>
      <T x={160} y={172} textAnchor="middle" fontSize={9}>1 s + 3 p → 4 equivalent sp³ orbitals (25% s character)</T>
      <T x={160} y={188} textAnchor="middle" fontSize={8.5} opacity={0.75}>point to the corners of a tetrahedron, 109.5° (e.g. CH₄)</T>
    </Diagram>
  );
}

function GasIsothermsDiagram() {
  const ks = [[1500, 'T₁'], [3600, 'T₂'], [6600, 'T₃']] as const;
  return (
    <Diagram aria-label="Boyle's law isotherms: pressure against volume gives rectangular hyperbolas PV = constant, with curves for higher temperature lying further from the origin">
      <Arrows id="gi-arr" />
      <Axes id="gi-arr" ox={40} oy={170} x1={300} y1={14} xl="V" yl="P" />
      {ks.map(([k, l], i) => (
        <g key={l}>
          <polyline points={plot(v => k / v, k / 150, 220, v => 40 + v, p => 170 - p)} fill="none" strokeWidth={2} stroke="currentColor" className={i === 2 ? 'stroke-primary' : undefined} strokeOpacity={i === 2 ? 1 : 0.5 + 0.2 * i} />
          <T x={264} y={170 - k / 220 + 3} fontSize={9} p={i === 2}>{l}</T>
        </g>
      ))}
      <line x1={110} y1={160} x2={165} y2={100} className="stroke-primary" strokeWidth={1.5} markerEnd={url('gi-arr-p')} />
      <T x={170} y={98} fontSize={9} p>T increases</T>
      <T x={160} y={36} fontSize={10} fontWeight={600}>PV = nRT = constant</T>
      <T x={160} y={50} fontSize={9} opacity={0.75}>(fixed n and T) · T₃ &gt; T₂ &gt; T₁</T>
    </Diagram>
  );
}

function EnthalpyDiagram() {
  return (
    <Diagram aria-label="Enthalpy level diagrams: in an exothermic reaction products lie below reactants and delta H is negative; in an endothermic reaction products lie above reactants and delta H is positive">
      <Arrows id="en-arr" />
      <line x1={14} y1={175} x2={14} y2={25} {...axisProps} strokeOpacity={0.6} markerEnd={url('en-arr')} />
      <T x={18} y={30} fontSize={9} opacity={0.7}>H</T>
      <T x={160} y={14} textAnchor="middle" fontSize={9} opacity={0.8}>ΔH = H(products) − H(reactants)</T>
      <line x1={165} y1={30} x2={165} y2={170} {...guide} strokeOpacity={0.25} />
      <line x1={30} y1={60} x2={110} y2={60} stroke="currentColor" strokeWidth={2.5} />
      <line x1={70} y1={140} x2={150} y2={140} className="stroke-primary" strokeWidth={2.5} />
      <T x={30} y={54} fontSize={9}>reactants</T>
      <T x={150} y={134} fontSize={9} textAnchor="end" p>products</T>
      <line x1={90} y1={62} x2={90} y2={136} className="stroke-primary" strokeWidth={1.5} markerEnd={url('en-arr-p')} />
      <T x={96} y={104} fontSize={10} p>ΔH &lt; 0</T>
      <line x1={185} y1={140} x2={265} y2={140} stroke="currentColor" strokeWidth={2.5} />
      <line x1={225} y1={60} x2={305} y2={60} className="stroke-primary" strokeWidth={2.5} />
      <T x={185} y={134} fontSize={9}>reactants</T>
      <T x={305} y={54} fontSize={9} textAnchor="end" p>products</T>
      <line x1={245} y1={138} x2={245} y2={64} className="stroke-primary" strokeWidth={1.5} markerEnd={url('en-arr-p')} />
      <T x={251} y={104} fontSize={10} p>ΔH &gt; 0</T>
      <T x={90} y={170} textAnchor="middle" fontWeight={600}>Exothermic</T>
      <T x={90} y={184} textAnchor="middle" fontSize={8.5} opacity={0.75}>heat released (combustion)</T>
      <T x={245} y={170} textAnchor="middle" fontWeight={600}>Endothermic</T>
      <T x={245} y={184} textAnchor="middle" fontSize={8.5} opacity={0.75}>heat absorbed (e.g. CaCO₃ → CaO)</T>
    </Diagram>
  );
}

function EquilibriumApproachDiagram() {
  const X = (t: number) => 40 + t;
  return (
    <Diagram aria-label="Concentration against time for A in equilibrium with B: reactant concentration falls and product concentration rises until both level off; after that point forward and backward rates are equal and concentrations stay constant">
      <Arrows id="eq-arr" />
      <Axes id="eq-arr" ox={40} oy={170} x1={300} y1={16} xl="time" yl="concentration" />
      <polyline points={plot(t => 45 + 105 * Math.exp(-t / 35), 0, 250, X, c => 170 - c)} {...ink} strokeWidth={2} />
      <polyline points={plot(t => 105 * (1 - Math.exp(-t / 35)), 0, 250, X, c => 170 - c)} fill="none" strokeWidth={2} className="stroke-primary" />
      <line x1={190} y1={30} x2={190} y2={170} {...guide} />
      <T x={196} y={36} fontSize={9} fontWeight={600}>equilibrium</T>
      <T x={196} y={48} fontSize={8} opacity={0.75}>rate(fwd) = rate(back)</T>
      <T x={300} y={60} fontSize={9} textAnchor="end" p>[B] product</T>
      <T x={300} y={118} fontSize={9} textAnchor="end">[A] reactant</T>
      <T x={110} y={30} fontSize={10} textAnchor="middle">A ⇌ B</T>
      <T x={110} y={186} fontSize={8} textAnchor="middle" opacity={0.75}>approach: net forward reaction</T>
      <T x={246} y={186} fontSize={8} textAnchor="middle" opacity={0.75}>Kc = [B]/[A] constant</T>
    </Diagram>
  );
}

function TitrationCurveDiagram() {
  const pts: string[] = [];
  for (let i = 0; i <= 200; i++) {
    const v = i * 0.25;
    const pH = v < 25 ? -Math.log10((0.1 * (25 - v)) / (25 + v)) : v === 25 ? 7 : 14 + Math.log10((0.1 * (v - 25)) / (25 + v));
    pts.push(`${40 + v * 5},${(170 - pH * 11).toFixed(1)}`);
  }
  return (
    <Diagram aria-label="Titration curve of 25 mL of 0.1 M HCl with 0.1 M NaOH: pH starts near 1, rises slowly, then jumps steeply at 25 mL through the equivalence point at pH 7 and levels off near pH 12.5">
      <Arrows id="ti-arr" />
      <Axes id="ti-arr" ox={40} oy={170} x1={300} y1={12} xl="V(NaOH) / mL" yl="pH" />
      <line x1={40} y1={93} x2={165} y2={93} {...guide} />
      <line x1={165} y1={93} x2={165} y2={170} {...guide} />
      <polyline points={pts.join(' ')} fill="none" strokeWidth={2} className="stroke-primary" />
      <circle cx={165} cy={93} r={4} className="fill-primary" />
      <T x={34} y={96} fontSize={9} textAnchor="end">7</T>
      <T x={34} y={159} fontSize={9} textAnchor="end">1</T>
      <T x={165} y={182} fontSize={9} textAnchor="middle">25</T>
      <T x={172} y={104} fontSize={9} fontWeight={600}>equivalence point</T>
      <T x={172} y={116} fontSize={8.5} opacity={0.75}>pH = 7 (strong acid + strong base)</T>
      <T x={52} y={34} fontSize={9}>0.1 M HCl titrated with 0.1 M NaOH</T>
      <T x={52} y={46} fontSize={8} opacity={0.7}>steep jump ≈ pH 4 → 10: any indicator in range works</T>
    </Diagram>
  );
}

function BufferActionDiagram() {
  const n = 80;
  const X = (a: number) => 40 + a * 240;
  const buffer = Array.from({ length: n + 1 }, (_, i) => {
    const a = (i / n) * 0.96;
    return `${X(a).toFixed(1)},${(170 - 20 * (4.76 + Math.log10((1 - a) / (1 + a)))).toFixed(1)}`;
  }).join(' ');
  const water = Array.from({ length: n + 1 }, (_, i) => {
    const a = (i / n) ** 3;
    return `${X(a).toFixed(1)},${(170 + 20 * Math.log10(1e-7 + a * 0.05)).toFixed(1)}`;
  }).join(' ');
  return (
    <Diagram aria-label="Buffer action: as acid is added, the pH of an acetic acid/acetate buffer stays close to its pKa of 4.76, while the pH of unbuffered water drops sharply from 7">
      <Arrows id="bu-arr" />
      <Axes id="bu-arr" ox={40} oy={170} x1={300} y1={12} xl="H⁺ added" yl="pH" />
      <line x1={40} y1={74.8} x2={290} y2={74.8} {...guide} strokeOpacity={0.3} />
      <T x={34} y={78} fontSize={8} textAnchor="end">4.76</T>
      <T x={34} y={33} fontSize={8} textAnchor="end">7</T>
      <polyline points={water} {...ink} strokeWidth={2} strokeOpacity={0.6} strokeDasharray="5 3" />
      <polyline points={buffer} fill="none" strokeWidth={2.5} className="stroke-primary" />
      <T x={150} y={98} fontSize={9} p>buffer (CH₃COOH / CH₃COO⁻)</T>
      <T x={190} y={160} fontSize={9} opacity={0.75}>unbuffered water</T>
      <T x={120} y={22} fontSize={9} fontWeight={600}>pH = pKa + log([A⁻]/[HA])</T>
      <T x={120} y={36} fontSize={8.5} opacity={0.8}>added H⁺ is mopped up: A⁻ + H⁺ → HA</T>
      <T x={120} y={48} fontSize={8.5} opacity={0.8}>added OH⁻: HA + OH⁻ → A⁻ + H₂O</T>
    </Diagram>
  );
}

function GalvanicCellDiagram() {
  return (
    <Diagram aria-label="Daniell cell: a zinc anode in zinc sulphate and a copper cathode in copper sulphate, joined by a salt bridge and an external wire through a voltmeter; electrons flow from zinc to copper, giving 1.10 volts">
      <Arrows id="gc-arr" />
      <rect x={31} y={100} width={88} height={69} className="fill-primary/10" />
      <rect x={201} y={100} width={88} height={69} className="fill-primary/10" />
      <path d="M 30 82 L 30 170 L 120 170 L 120 82" {...ink} />
      <path d="M 200 82 L 200 170 L 290 170 L 290 82" {...ink} />
      <path d="M 100 130 L 100 70 L 220 70 L 220 130" fill="none" stroke="currentColor" strokeOpacity={0.25} strokeWidth={8} />
      <T x={160} y={64} fontSize={8} textAnchor="middle" opacity={0.75}>salt bridge (KCl)</T>
      <rect x={60} y={55} width={10} height={95} fill="currentColor" fillOpacity={0.5} />
      <rect x={250} y={55} width={10} height={95} className="fill-primary" />
      <path d="M 65 55 L 65 30 L 148 30 M 172 30 L 255 30 L 255 55" {...ink} strokeWidth={1.2} />
      <circle cx={160} cy={30} r={12} {...ink} />
      <T x={160} y={34} textAnchor="middle" fontWeight={700}>V</T>
      <line x1={88} y1={20} x2={134} y2={20} className="stroke-primary" strokeWidth={1.5} markerEnd={url('gc-arr-p')} />
      <line x1={186} y1={20} x2={232} y2={20} className="stroke-primary" strokeWidth={1.5} markerEnd={url('gc-arr-p')} />
      <T x={111} y={15} fontSize={9} textAnchor="middle" p>e⁻</T>
      <T x={209} y={15} fontSize={9} textAnchor="middle" p>e⁻</T>
      <T x={46} y={94} fontSize={10} textAnchor="middle" fontWeight={600}>Zn</T>
      <T x={276} y={94} fontSize={10} textAnchor="middle" fontWeight={600}>Cu</T>
      <T x={92} y={162} fontSize={8} textAnchor="middle">ZnSO₄</T>
      <T x={228} y={162} fontSize={8} textAnchor="middle">CuSO₄</T>
      <T x={75} y={182} fontSize={8} textAnchor="middle">Anode (−): Zn → Zn²⁺ + 2e⁻</T>
      <T x={245} y={182} fontSize={8} textAnchor="middle">Cathode (+): Cu²⁺ + 2e⁻ → Cu</T>
      <T x={160} y={196} fontSize={8} textAnchor="middle" p>E°cell = E°cathode − E°anode = 0.34 − (−0.76) = 1.10 V</T>
    </Diagram>
  );
}

function ConductanceDilutionDiagram() {
  return (
    <Diagram aria-label="Molar conductivity against square root of concentration: a strong electrolyte such as KCl gives a straight line that extrapolates to the limiting molar conductivity at zero concentration, while a weak electrolyte such as acetic acid rises steeply only at very low concentration and cannot be extrapolated">
      <Arrows id="cd-arr" />
      <Axes id="cd-arr" ox={40} oy={170} x1={300} y1={14} xl="√c" yl="Λm" />
      <line x1={40} y1={45} x2={56} y2={48.3} {...guide} strokeOpacity={0.8} className="stroke-primary" />
      <line x1={56} y1={48.3} x2={280} y2={95} strokeWidth={2} className="stroke-primary" />
      <circle cx={40} cy={45} r={3} className="fill-primary" />
      <T x={46} y={38} fontSize={9} p>Λ°m (extrapolate c → 0)</T>
      <T x={150} y={58} fontSize={8.5} p>strong (KCl): Λm = Λ°m − A√c</T>
      <polyline points={plot(x => 168 - 130 * Math.exp(-(x - 40) / 18), 44, 280, x => x, y => y)} {...ink} strokeWidth={2} />
      <T x={110} y={150} fontSize={8.5}>weak (CH₃COOH): steep rise only on</T>
      <T x={110} y={161} fontSize={8.5}>high dilution (α increases)</T>
      <T x={300} y={188} fontSize={8} textAnchor="end" opacity={0.7}>← dilution increases Λm for both</T>
    </Diagram>
  );
}

function ReactionOrderGraphsDiagram() {
  const panels = [
    { y: '[A]', down: true, slope: 'slope = −k', t: 'Zero order', eq: '[A] = [A]₀ − kt', h: 't½ = [A]₀ / 2k' },
    { y: 'ln[A]', down: true, slope: 'slope = −k', t: 'First order', eq: 'ln[A] = ln[A]₀ − kt', h: 't½ = 0.693 / k' },
    { y: '1/[A]', down: false, slope: 'slope = +k', t: 'Second order', eq: '1/[A] = 1/[A]₀ + kt', h: 't½ = 1 / k[A]₀' },
  ];
  return (
    <Diagram aria-label="Integrated rate law plots: for zero order, concentration against time is a straight line of slope minus k; for first order, ln of concentration against time is linear with slope minus k; for second order, one over concentration against time is linear with slope plus k">
      <Arrows id="ro-arr" />
      {panels.map((p, i) => {
        const ox = 18 + i * 104;
        return (
          <g key={p.t}>
            <Axes id="ro-arr" ox={ox} oy={135} x1={ox + 90} y1={22} xl="t" yl={p.y} />
            <line x1={ox + 2} y1={p.down ? 45 : 120} x2={ox + 80} y2={p.down ? 120 : 45} strokeWidth={2} className="stroke-primary" />
            <T x={ox + 46} y={p.down ? 70 : 72} fontSize={8} p>{p.slope}</T>
            <T x={ox + 46} y={152} fontSize={9.5} textAnchor="middle" fontWeight={600}>{p.t}</T>
            <T x={ox + 46} y={166} fontSize={8} textAnchor="middle">{p.eq}</T>
            <T x={ox + 46} y={180} fontSize={8} textAnchor="middle" opacity={0.7}>{p.h}</T>
          </g>
        );
      })}
    </Diagram>
  );
}

function ActivationEnergyProfileDiagram() {
  return (
    <Diagram aria-label="Energy profile: reactants rise over a hump to the transition state, the height above the reactants being the activation energy Ea, then fall to lower-energy products, with delta H the difference; a dashed lower hump shows the catalysed path with a smaller activation energy and the same delta H">
      <Arrows id="ae-arr" />
      <Axes id="ae-arr" ox={28} oy={178} x1={308} y1={14} xl="reaction progress" yl="energy" />
      <path d="M 35 110 L 80 110 C 120 110 130 35 160 35 C 190 35 200 145 240 145 L 300 145" {...ink} strokeWidth={2} />
      <path d="M 80 110 C 120 110 130 75 160 75 C 190 75 200 145 240 145" fill="none" strokeWidth={2} strokeDasharray="5 3" className="stroke-primary" />
      <line x1={57} y1={35} x2={158} y2={35} {...guide} />
      <line x1={57} y1={108} x2={57} y2={39} stroke="currentColor" strokeWidth={1.5} markerEnd={url('ae-arr')} />
      <T x={62} y={78} fontWeight={600}>Ea</T>
      <line x1={108} y1={75} x2={158} y2={75} {...guide} className="stroke-primary" />
      <line x1={108} y1={108} x2={108} y2={79} className="stroke-primary" strokeWidth={1.5} markerEnd={url('ae-arr-p')} />
      <T x={104} y={97} fontSize={9} textAnchor="end" p>Ea′</T>
      <line x1={240} y1={110} x2={282} y2={110} {...guide} />
      <line x1={275} y1={112} x2={275} y2={141} stroke="currentColor" strokeWidth={1.5} markerEnd={url('ae-arr')} />
      <T x={280} y={130} fontSize={9}>ΔH</T>
      <T x={36} y={124} fontSize={9}>Reactants</T>
      <T x={244} y={160} fontSize={9}>Products</T>
      <T x={160} y={28} fontSize={8.5} textAnchor="middle" opacity={0.8}>transition state ‡</T>
      <T x={188} y={72} fontSize={8.5} p>catalysed path (Ea′ &lt; Ea)</T>
      <T x={188} y={84} fontSize={8} opacity={0.7}>same ΔH</T>
    </Diagram>
  );
}

function RaoultPlotDiagram() {
  return (
    <Diagram aria-label="Raoult's law for an ideal binary solution: partial pressure of A falls linearly from p zero A to zero, partial pressure of B rises linearly from zero to p zero B, and the total vapour pressure is a straight line joining p zero A and p zero B">
      <Arrows id="ra-arr" />
      <line x1={50} y1={170} x2={270} y2={170} {...axisProps} strokeOpacity={0.6} />
      <line x1={50} y1={170} x2={50} y2={22} {...axisProps} strokeOpacity={0.6} markerEnd={url('ra-arr')} />
      <line x1={270} y1={170} x2={270} y2={22} {...axisProps} strokeOpacity={0.6} markerEnd={url('ra-arr')} />
      <line x1={50} y1={100} x2={270} y2={170} {...ink} strokeDasharray="5 3" />
      <line x1={50} y1={170} x2={270} y2={40} {...ink} strokeDasharray="2 3" />
      <line x1={50} y1={100} x2={270} y2={40} strokeWidth={2.5} className="stroke-primary" />
      <T x={44} y={103} fontSize={9} textAnchor="end">p°A</T>
      <T x={276} y={43} fontSize={9}>p°B</T>
      <T x={160} y={62} fontSize={9} textAnchor="middle" p>p_total = p_A + p_B</T>
      <T x={58} y={118} fontSize={8.5}>p_A = x_A·p°A</T>
      <T x={266} y={98} fontSize={8.5} textAnchor="end">p_B = x_B·p°B</T>
      <T x={50} y={184} fontSize={8.5} textAnchor="middle">x_A = 1</T>
      <T x={270} y={184} fontSize={8.5} textAnchor="middle">x_B = 1</T>
      <T x={160} y={184} fontSize={8.5} textAnchor="middle" opacity={0.75}>mole fraction of B →</T>
      <T x={160} y={16} fontSize={9} textAnchor="middle" fontWeight={600}>Ideal solution: pᵢ = xᵢ p°ᵢ (vapour pressure)</T>
    </Diagram>
  );
}

function CrystalFieldSplittingDiagram() {
  const lv = (x: number, y: number, w = 14, primary = false) => <line key={`${x}-${y}`} x1={x} y1={y} x2={x + w} y2={y} strokeWidth={2.5} stroke="currentColor" className={primary ? 'stroke-primary' : undefined} />;
  return (
    <Diagram aria-label="Crystal field splitting: five degenerate d orbitals of the free ion split in an octahedral field into a lower t2g set of three and an upper eg set of two separated by delta o; in a tetrahedral field the splitting is inverted, with e lower and t2 upper, and delta t is about four ninths of delta o">
      <Arrows id="cf-arr" />
      {[20, 32, 44, 56, 68].map(x => lv(x, 100, 9))}
      <line x1={77} y1={100} x2={128} y2={58} {...guide} strokeOpacity={0.3} />
      <line x1={77} y1={100} x2={128} y2={128} {...guide} strokeOpacity={0.3} />
      <line x1={128} y1={100} x2={192} y2={100} {...guide} strokeOpacity={0.3} />
      {lv(140, 58, 15, true)}{lv(165, 58, 15, true)}
      {lv(130, 128, 15)}{lv(152, 128, 15)}{lv(174, 128, 15)}
      <T x={126} y={61} fontSize={9} textAnchor="end" p>e_g</T>
      <T x={126} y={131} fontSize={9} textAnchor="end">t₂g</T>
      <line x1={202} y1={61} x2={202} y2={125} stroke="currentColor" strokeWidth={1.2} markerStart={url('cf-arr')} markerEnd={url('cf-arr')} />
      <T x={206} y={96} fontSize={10} fontWeight={600}>Δo</T>
      <T x={194} y={76} fontSize={7.5} textAnchor="end" opacity={0.7}>+0.6Δo</T>
      <T x={194} y={118} fontSize={7.5} textAnchor="end" opacity={0.7}>−0.4Δo</T>
      <line x1={243} y1={100} x2={296} y2={100} {...guide} strokeOpacity={0.3} />
      {lv(245, 88, 13)}{lv(263, 88, 13)}{lv(281, 88, 13)}
      {lv(254, 119, 13, true)}{lv(272, 119, 13, true)}
      <T x={241} y={91} fontSize={9} textAnchor="end">t₂</T>
      <T x={250} y={122} fontSize={9} textAnchor="end" p>e</T>
      <line x1={304} y1={90} x2={304} y2={117} stroke="currentColor" strokeWidth={1.2} markerStart={url('cf-arr')} markerEnd={url('cf-arr')} />
      <T x={48} y={20} fontSize={9} textAnchor="middle" fontWeight={600}>free ion</T>
      <T x={160} y={20} fontSize={9} textAnchor="middle" fontWeight={600}>octahedral</T>
      <T x={270} y={20} fontSize={9} textAnchor="middle" fontWeight={600}>tetrahedral</T>
      <T x={48} y={116} fontSize={8} textAnchor="middle" opacity={0.7}>5 degenerate d</T>
      <T x={160} y={44} fontSize={7.5} textAnchor="middle" opacity={0.7}>d(x²−y²), d(z²)</T>
      <T x={160} y={146} fontSize={7.5} textAnchor="middle" opacity={0.7}>d(xy), d(yz), d(xz)</T>
      <T x={270} y={146} fontSize={8} textAnchor="middle">Δt ≈ (4/9) Δo</T>
      <T x={160} y={186} fontSize={8.5} textAnchor="middle" opacity={0.8}>Δo &gt; pairing energy P → low spin; Δo &lt; P → high spin</T>
    </Diagram>
  );
}

function Sn1Sn2Diagram() {
  return (
    <Diagram aria-label="SN2: the nucleophile attacks carbon from the side opposite the leaving group in one concerted step through a five-coordinate transition state, inverting the configuration. SN1: the leaving group departs first in a slow step to give a planar carbocation, which the nucleophile attacks from either face, giving a racemic mixture">
      <Arrows id="sn-arr" />
      <T x={8} y={16} fontWeight={700} p>SN2</T>
      <T x={38} y={16} fontSize={8.5} opacity={0.8}>one step · rate = k[RX][Nu⁻] · second order</T>
      <T x={8} y={54}>Nu⁻</T>
      <path d="M 28 46 Q 44 34 60 46" fill="none" strokeWidth={1.3} className="stroke-primary" markerEnd={url('sn-arr-p')} />
      <T x={70} y={54} textAnchor="middle" fontWeight={600}>C</T>
      <line x1={66} y1={45} x2={56} y2={34} {...ink} strokeWidth={1.2} />
      <line x1={66} y1={56} x2={56} y2={66} {...ink} strokeWidth={1.2} />
      <line x1={73} y1={44} x2={79} y2={33} {...ink} strokeWidth={1.2} />
      <line x1={77} y1={50} x2={95} y2={50} {...ink} />
      <T x={101} y={54} textAnchor="middle" fontWeight={600}>X</T>
      <line x1={112} y1={50} x2={130} y2={50} stroke="currentColor" strokeWidth={1.3} markerEnd={url('sn-arr')} />
      <T x={172} y={54} textAnchor="middle">[Nu···C···X]‡</T>
      <line x1={214} y1={50} x2={232} y2={50} stroke="currentColor" strokeWidth={1.3} markerEnd={url('sn-arr')} />
      <T x={244} y={54} textAnchor="middle" fontWeight={600}>Nu</T>
      <line x1={254} y1={50} x2={268} y2={50} {...ink} />
      <T x={274} y={54} textAnchor="middle" fontWeight={600}>C</T>
      <line x1={279} y1={45} x2={289} y2={34} {...ink} strokeWidth={1.2} />
      <line x1={279} y1={56} x2={289} y2={66} {...ink} strokeWidth={1.2} />
      <line x1={271} y1={44} x2={265} y2={33} {...ink} strokeWidth={1.2} />
      <T x={294} y={54} fontSize={9}>+ X⁻</T>
      <T x={160} y={84} fontSize={8.5} textAnchor="middle" p>backside attack (180° to X) → Walden inversion</T>
      <line x1={8} y1={96} x2={312} y2={96} {...guide} strokeOpacity={0.25} />
      <T x={8} y={114} fontWeight={700} p>SN1</T>
      <T x={38} y={114} fontSize={8.5} opacity={0.8}>two steps · rate = k[RX] · first order</T>
      <T x={8} y={139}>R₃C–X</T>
      <line x1={44} y1={135} x2={74} y2={135} stroke="currentColor" strokeWidth={1.3} markerEnd={url('sn-arr')} />
      <T x={59} y={129} fontSize={8} textAnchor="middle">slow</T>
      <T x={100} y={139} textAnchor="middle" fontWeight={600}>C⁺</T>
      <line x1={100} y1={127} x2={100} y2={115} {...ink} strokeWidth={1.2} />
      <line x1={94} y1={141} x2={84} y2={150} {...ink} strokeWidth={1.2} />
      <line x1={106} y1={141} x2={116} y2={150} {...ink} strokeWidth={1.2} />
      <T x={122} y={139} fontSize={9}>+ X⁻</T>
      <line x1={150} y1={135} x2={180} y2={135} stroke="currentColor" strokeWidth={1.3} markerEnd={url('sn-arr')} />
      <T x={165} y={129} fontSize={8} textAnchor="middle">fast, Nu⁻</T>
      <T x={188} y={128} fontSize={9}>Nu–CR₃ (retention)</T>
      <T x={188} y={146} fontSize={9}>R₃C–Nu (inversion)</T>
      <T x={188} y={164} fontSize={8.5} p>≈ 50 : 50 → racemic</T>
      <T x={100} y={168} fontSize={8} textAnchor="middle" opacity={0.75}>planar carbocation (sp²)</T>
      <T x={100} y={180} fontSize={8} textAnchor="middle" opacity={0.75}>attacked from either face</T>
      <T x={160} y={196} fontSize={8} textAnchor="middle" opacity={0.7}>SN1 favoured by 3° substrates, polar protic solvents; SN2 by 1°</T>
    </Diagram>
  );
}

function InductiveResonanceDiagram() {
  return (
    <Diagram aria-label="Inductive effect: in a chlorine-carbon chain, sigma electrons are pulled toward chlorine, giving decreasing partial positive charges along the chain. Resonance effect: in the acetate ion the negative charge and pi electrons are delocalised over both oxygens, shown by two resonance structures and curved arrows">
      <Arrows id="ir-arr" />
      <T x={18} y={74} textAnchor="middle" fontWeight={600} p>Cl</T>
      {[54, 89, 124].map(x => <T key={x} x={x} y={74} textAnchor="middle" fontWeight={600}>C</T>)}
      <line x1={48} y1={70} x2={30} y2={70} stroke="currentColor" strokeWidth={1.5} markerEnd={url('ir-arr')} />
      <line x1={83} y1={70} x2={62} y2={70} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.7} markerEnd={url('ir-arr')} />
      <line x1={118} y1={70} x2={97} y2={70} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.45} markerEnd={url('ir-arr')} />
      <T x={18} y={56} fontSize={8.5} textAnchor="middle" p>δ−</T>
      <T x={54} y={56} fontSize={8.5} textAnchor="middle">δ+</T>
      <T x={89} y={56} fontSize={8.5} textAnchor="middle" opacity={0.75}>δδ+</T>
      <T x={124} y={56} fontSize={8.5} textAnchor="middle" opacity={0.55}>δδδ+</T>
      <T x={70} y={112} fontSize={9.5} textAnchor="middle" fontWeight={600}>Inductive (−I)</T>
      <T x={70} y={126} fontSize={8} textAnchor="middle">σ-electrons pulled to Cl</T>
      <T x={70} y={139} fontSize={8} textAnchor="middle">fades after ~3 bonds</T>
      <T x={70} y={152} fontSize={8} textAnchor="middle">permanent effect</T>
      <line x1={145} y1={20} x2={145} y2={180} {...guide} strokeOpacity={0.25} />
      <T x={172} y={84} fontSize={9} textAnchor="end">H₃C</T>
      <T x={180} y={84} textAnchor="middle" fontWeight={600}>C</T>
      <line x1={183} y1={74} x2={193} y2={58} {...ink} strokeWidth={1.2} />
      <line x1={186} y1={76} x2={196} y2={60} {...ink} strokeWidth={1.2} />
      <T x={198} y={55} textAnchor="middle">O</T>
      <line x1={183} y1={86} x2={193} y2={102} {...ink} strokeWidth={1.2} />
      <T x={199} y={114} textAnchor="middle">O⁻</T>
      <path d="M 208 108 Q 214 94 194 92" fill="none" strokeWidth={1.2} className="stroke-primary" markerEnd={url('ir-arr-p')} />
      <path d="M 186 66 Q 182 48 192 48" fill="none" strokeWidth={1.2} className="stroke-primary" markerEnd={url('ir-arr-p')} />
      <T x={232} y={86} fontSize={14} textAnchor="middle">↔</T>
      <T x={267} y={84} fontSize={9} textAnchor="end">H₃C</T>
      <T x={275} y={84} textAnchor="middle" fontWeight={600}>C</T>
      <line x1={278} y1={74} x2={288} y2={58} {...ink} strokeWidth={1.2} />
      <T x={294} y={55} textAnchor="middle">O⁻</T>
      <line x1={278} y1={86} x2={288} y2={102} {...ink} strokeWidth={1.2} />
      <line x1={281} y1={84} x2={291} y2={100} {...ink} strokeWidth={1.2} />
      <T x={294} y={114} textAnchor="middle">O</T>
      <T x={232} y={140} fontSize={9.5} textAnchor="middle" fontWeight={600}>Resonance (mesomeric)</T>
      <T x={232} y={154} fontSize={8} textAnchor="middle">π-electrons and charge delocalised</T>
      <T x={232} y={167} fontSize={8} textAnchor="middle">both C–O bonds equal (≈127 pm)</T>
    </Diagram>
  );
}

function IsomerismTreeDiagram() {
  const node = (x: number, y: number, w: number, label: string, primary = false) => (
    <g>
      <rect x={x - w / 2} y={y} width={w} height={19} rx={5} className={primary ? 'fill-primary/15 stroke-primary' : 'fill-secondary'} stroke="currentColor" strokeWidth={1} />
      <T x={x} y={y + 13} fontSize={9.5} textAnchor="middle" fontWeight={600}>{label}</T>
    </g>
  );
  const leaves = ['chain', 'position', 'functional group', 'metamerism', 'tautomerism'];
  return (
    <Diagram aria-label="Classification of isomerism: structural isomerism divides into chain, position, functional group, metamerism and tautomerism; stereoisomerism divides into geometrical (cis/trans) and optical (enantiomers)">
      <Arrows id="is-arr" />
      <line x1={150} y1={27} x2={88} y2={47} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('is-arr')} />
      <line x1={170} y1={27} x2={232} y2={47} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('is-arr')} />
      <line x1={228} y1={70} x2={208} y2={92} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('is-arr')} />
      <line x1={252} y1={70} x2={272} y2={92} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('is-arr')} />
      {node(160, 8, 90, 'Isomerism', true)}
      {node(80, 51, 90, 'Structural')}
      {node(240, 51, 104, 'Stereoisomerism')}
      <line x1={45} y1={70} x2={45} y2={158} stroke="currentColor" strokeOpacity={0.5} />
      {leaves.map((l, i) => (
        <g key={l}>
          <line x1={45} y1={86 + i * 18} x2={52} y2={86 + i * 18} stroke="currentColor" strokeOpacity={0.5} markerEnd={url('is-arr')} />
          <T x={56} y={89 + i * 18} fontSize={9}>{l}</T>
        </g>
      ))}
      {node(200, 95, 76, 'Geometrical')}
      {node(280, 95, 64, 'Optical')}
      <T x={200} y={128} fontSize={8.5} textAnchor="middle">cis / trans (E / Z)</T>
      <T x={200} y={140} fontSize={7.5} textAnchor="middle" opacity={0.7}>restricted rotation (C=C)</T>
      <T x={280} y={128} fontSize={8.5} textAnchor="middle">enantiomers</T>
      <T x={280} y={140} fontSize={7.5} textAnchor="middle" opacity={0.7}>chiral C, rotate PPL</T>
      <T x={160} y={188} fontSize={8.5} textAnchor="middle" opacity={0.75}>same molecular formula, different arrangement of atoms</T>
    </Diagram>
  );
}

function CarbonylAdditionDiagram() {
  const tetra = (cx: number, top: string, primaryTop = false) => (
    <g>
      <T x={cx} y={112} textAnchor="middle" fontWeight={600}>C</T>
      <line x1={cx} y1={98} x2={cx} y2={72} {...ink} strokeWidth={1.2} />
      <T x={cx} y={66} textAnchor="middle" p={primaryTop}>{top}</T>
      <line x1={cx - 5} y1={112} x2={cx - 21} y2={126} {...ink} strokeWidth={1.2} />
      <line x1={cx + 5} y1={112} x2={cx + 21} y2={126} {...ink} strokeWidth={1.2} />
      <T x={cx - 26} y={136} fontSize={9} textAnchor="middle">R</T>
      <T x={cx + 27} y={136} fontSize={9} textAnchor="middle">R′</T>
      <line x1={cx} y1={115} x2={cx} y2={140} {...ink} strokeWidth={1.2} />
      <T x={cx} y={152} fontSize={9} textAnchor="middle" p>Nu</T>
    </g>
  );
  return (
    <Diagram aria-label="Nucleophilic addition to a carbonyl group: the nucleophile attacks the electrophilic, partially positive carbonyl carbon while the pi electrons move onto oxygen, turning the trigonal planar sp2 carbon into a tetrahedral sp3 alkoxide, which is then protonated">
      <Arrows id="ca-arr" />
      <T x={160} y={16} fontSize={10} textAnchor="middle" fontWeight={600}>Nucleophilic addition to C=O</T>
      <T x={65} y={112} textAnchor="middle" fontWeight={600}>C</T>
      <line x1={62} y1={98} x2={62} y2={70} {...ink} strokeWidth={1.2} />
      <line x1={68} y1={98} x2={68} y2={70} {...ink} strokeWidth={1.2} />
      <T x={65} y={64} textAnchor="middle" fontWeight={600}>O</T>
      <T x={80} y={110} fontSize={8} p>δ+</T>
      <T x={78} y={60} fontSize={8}>δ−</T>
      <line x1={60} y1={112} x2={44} y2={126} {...ink} strokeWidth={1.2} />
      <line x1={70} y1={112} x2={86} y2={126} {...ink} strokeWidth={1.2} />
      <T x={39} y={136} fontSize={9} textAnchor="middle">R</T>
      <T x={92} y={136} fontSize={9} textAnchor="middle">R′</T>
      <T x={8} y={160} p>Nu⁻</T>
      <path d="M 22 150 Q 30 116 56 110" fill="none" strokeWidth={1.3} className="stroke-primary" markerEnd={url('ca-arr-p')} />
      <path d="M 71 88 Q 88 80 76 64" fill="none" strokeWidth={1.2} stroke="currentColor" markerEnd={url('ca-arr')} />
      <line x1={108} y1={100} x2={138} y2={100} stroke="currentColor" strokeWidth={1.3} markerEnd={url('ca-arr')} />
      {tetra(190, 'O⁻')}
      <line x1={228} y1={100} x2={252} y2={100} stroke="currentColor" strokeWidth={1.3} markerEnd={url('ca-arr')} />
      <T x={240} y={94} fontSize={9} textAnchor="middle">H⁺</T>
      {tetra(285, 'OH', true)}
      <T x={65} y={172} fontSize={8} textAnchor="middle" opacity={0.75}>trigonal planar (sp²)</T>
      <T x={190} y={172} fontSize={8} textAnchor="middle" opacity={0.75}>tetrahedral alkoxide (sp³)</T>
      <T x={285} y={172} fontSize={8} textAnchor="middle" opacity={0.75}>adduct</T>
      <T x={160} y={190} fontSize={8.5} textAnchor="middle">Nu⁻ attacks the δ+ carbon; π electrons move onto O</T>
    </Diagram>
  );
}

function GlucoseStructureDiagram() {
  const rows: [string, string][] = [['H', 'OH'], ['HO', 'H'], ['H', 'OH'], ['H', 'OH']];
  return (
    <Diagram aria-label="Glucose: the open-chain Fischer projection of D-glucose with CHO at C1 and OH groups right, left, right, right on C2 to C5, cyclises when the C5 hydroxyl attacks C1 to give the six-membered alpha-D-glucopyranose ring, drawn as a Haworth projection with the anomeric C1 OH pointing down">
      <Arrows id="gl-arr" />
      <line x1={60} y1={32} x2={60} y2={162} {...ink} />
      <T x={60} y={26} textAnchor="middle" fontWeight={600} p>CHO</T>
      {rows.map(([l, r], i) => (
        <g key={i}>
          <line x1={42} y1={52 + i * 25} x2={78} y2={52 + i * 25} {...ink} />
          <T x={39} y={55 + i * 25} fontSize={9} textAnchor="end">{l}</T>
          <T x={81} y={55 + i * 25} fontSize={9} p={i === 3}>{r}</T>
        </g>
      ))}
      <T x={60} y={174} textAnchor="middle" fontSize={9}>CH₂OH</T>
      <T x={60} y={190} textAnchor="middle" fontSize={8.5} fontWeight={600}>D-glucose (open chain)</T>
      <line x1={112} y1={100} x2={150} y2={100} stroke="currentColor" strokeWidth={1.5} markerEnd={url('gl-arr')} />
      <T x={131} y={92} fontSize={8} textAnchor="middle">ring closure</T>
      <T x={131} y={114} fontSize={7.5} textAnchor="middle" opacity={0.75}>C5–OH + C1=O</T>
      <polygon points="205,78 250,78 278,102 250,126 205,126 178,102" className="fill-primary/10" stroke="currentColor" strokeWidth={1.2} />
      <line x1={278} y1={102} x2={250} y2={126} stroke="currentColor" strokeWidth={3} />
      <line x1={250} y1={126} x2={205} y2={126} stroke="currentColor" strokeWidth={3} />
      <line x1={205} y1={126} x2={178} y2={102} stroke="currentColor" strokeWidth={3} />
      <circle cx={250} cy={78} r={6} className="fill-background" />
      <T x={250} y={82} textAnchor="middle" fontSize={10} fontWeight={600}>O</T>
      <line x1={278} y1={102} x2={278} y2={124} {...ink} strokeWidth={1.2} />
      <T x={278} y={134} fontSize={9} textAnchor="middle" p>OH</T>
      <T x={284} y={98} fontSize={7} opacity={0.75}>C1</T>
      <line x1={250} y1={126} x2={250} y2={146} {...ink} strokeWidth={1.2} />
      <T x={250} y={156} fontSize={9} textAnchor="middle">OH</T>
      <line x1={205} y1={126} x2={205} y2={110} {...ink} strokeWidth={1.2} />
      <T x={205} y={106} fontSize={8} textAnchor="middle">OH</T>
      <line x1={178} y1={102} x2={178} y2={122} {...ink} strokeWidth={1.2} />
      <T x={178} y={132} fontSize={9} textAnchor="middle">OH</T>
      <line x1={205} y1={78} x2={205} y2={58} {...ink} strokeWidth={1.2} />
      <T x={205} y={52} fontSize={9} textAnchor="middle">CH₂OH</T>
      <T x={230} y={176} fontSize={8.5} textAnchor="middle" fontWeight={600}>α-D-glucopyranose</T>
      <T x={230} y={190} fontSize={8} textAnchor="middle" opacity={0.75}>anomeric C1–OH down (α), trans to CH₂OH</T>
    </Diagram>
  );
}

function DBlockTrendsDiagram() {
  const els = ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];
  const unpaired = [1, 2, 3, 4, 5, 4, 3, 2, 1, 0];
  return (
    <Diagram aria-label="Unpaired electrons in high-spin 3d M2+ ions rise from 1 for Sc2+ (d1) to a maximum of 5 for Mn2+ (d5), then fall to 0 for Zn2+ (d10); the spin-only magnetic moment root n(n+2) follows the same pattern, peaking at 5.92 BM">
      <Arrows id="db-arr" />
      <Axes id="db-arr" ox={38} oy={160} x1={308} y1={24} />
      <T x={44} y={16} fontSize={9} fontWeight={600}>3d M²⁺ ions (high spin): unpaired electrons n</T>
      {els.map((e, i) => {
        const n = unpaired[i];
        const x = 45 + i * 26;
        return (
          <g key={e}>
            <rect x={x} y={160 - n * 22} width={16} height={n * 22} className={n === 5 ? 'fill-primary' : 'fill-primary/30'} />
            <T x={x + 8} y={156 - n * 22} fontSize={7} textAnchor="middle" opacity={0.8}>{Math.sqrt(n * (n + 2)).toFixed(2)}</T>
            <T x={x + 8} y={172} fontSize={8.5} textAnchor="middle" fontWeight={600}>{e}</T>
            <T x={x + 8} y={182} fontSize={7} textAnchor="middle" opacity={0.7}>{`d${['¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', '¹⁰'][i]}`}</T>
          </g>
        );
      })}
      <T x={160} y={196} fontSize={8} textAnchor="middle" opacity={0.8}>numbers = μ = √(n(n+2)) BM; maximum at Mn²⁺ (d⁵)</T>
    </Diagram>
  );
}

function XenonShapesDiagram() {
  const F = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <circle cx={x} cy={y} r={7} className="fill-secondary" stroke="currentColor" strokeWidth={1} />
      <T x={x} y={y + 3} fontSize={8} textAnchor="middle">F</T>
    </g>
  );
  const Xe = (x: number, y: number) => (
    <g>
      <circle cx={x} cy={y} r={10} className="fill-primary/25 stroke-primary" strokeWidth={1.2} />
      <T x={x} y={y + 3} fontSize={7.5} textAnchor="middle" fontWeight={600}>Xe</T>
    </g>
  );
  const lp = (x: number, y: number, a: number) => <ellipse key={`${x}-${y}`} cx={x} cy={y} rx={9} ry={5} transform={`rotate(${a} ${x} ${y})`} className="fill-primary/10 stroke-primary" strokeDasharray="2 2" />;
  const bonds = (cx: number, cy: number, pts: [number, number][]) => pts.map(([x, y]) => <line key={`b${x}-${y}`} x1={cx} y1={cy} x2={x} y2={y} {...ink} strokeWidth={1.2} />);
  const f4: [number, number][] = [[126, 93], [194, 77], [146, 68], [174, 102]];
  const f6: [number, number][] = [[265, 50], [259, 120], [231, 89], [299, 81], [248, 106], [282, 64]];
  const labels = [['XeF₂', 'linear', 'sp³d · 3 lone pairs'], ['XeF₄', 'square planar', 'sp³d² · 2 lone pairs'], ['XeF₆', 'distorted octahedral', 'sp³d³ · 1 lone pair']];
  return (
    <Diagram aria-label="Xenon fluorides: XeF2 is linear with three equatorial lone pairs; XeF4 is square planar with two lone pairs above and below the plane; XeF6 is a distorted octahedron because of one lone pair">
      {[lp(32, 88, 10), lp(78, 80, -15), lp(70, 101, 35)]}
      {bonds(55, 85, [[55, 48], [55, 122]])}
      {F(55, 48)}{F(55, 122)}{Xe(55, 85)}
      <polygon points="126,93 146,68 194,77 174,102" fill="none" {...guide} strokeOpacity={0.35} />
      {[lp(160, 57, 90), lp(160, 113, 90)]}
      {bonds(160, 85, f4)}
      {f4.map(([x, y]) => F(x, y))}{Xe(160, 85)}
      {lp(285, 104, 45)}
      {bonds(265, 85, f6)}
      {f6.map(([x, y]) => F(x, y))}{Xe(265, 85)}
      {labels.map(([f, s, h], i) => (
        <g key={f}>
          <T x={[55, 160, 265][i]} y={148} textAnchor="middle" fontWeight={600}>{f}</T>
          <T x={[55, 160, 265][i]} y={161} textAnchor="middle" fontSize={8.5} p>{s}</T>
          <T x={[55, 160, 265][i]} y={174} textAnchor="middle" fontSize={8} opacity={0.75}>{h}</T>
        </g>
      ))}
      <T x={160} y={192} textAnchor="middle" fontSize={8} opacity={0.7}>dashed lobes = lone pairs on Xe</T>
    </Diagram>
  );
}

/* ============================== MATHEMATICS ============================== */

function VennDiagram() {
  return (
    <Diagram aria-label="Venn diagram: two overlapping sets A and B inside a universal set U, with the intersection A and B shaded, illustrating n(A union B) = n(A) + n(B) minus n(A intersection B)">
      <defs>
        <clipPath id="venn-clip"><circle cx={130} cy={92} r={55} /></clipPath>
        <marker id="venn-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" className="fill-primary" /></marker>
      </defs>
      <rect x={20} y={20} width={280} height={145} rx={6} {...ink} strokeOpacity={0.5} />
      <T x={28} y={36} fontWeight={600}>U</T>
      <circle cx={190} cy={92} r={55} className="fill-primary" clipPath="url(#venn-clip)" fillOpacity={0.35} />
      <circle cx={130} cy={92} r={55} {...ink} />
      <circle cx={190} cy={92} r={55} {...ink} />
      <T x={95} y={96} fontSize={13} fontWeight={600}>A</T>
      <T x={215} y={96} fontSize={13} fontWeight={600}>B</T>
      <line x1={250} y1={36} x2={166} y2={84} className="stroke-primary" strokeWidth={1.2} markerEnd="url(#venn-arr)" />
      <T x={252} y={36} fontSize={9} p>A ∩ B</T>
      <T x={160} y={185} fontSize={9.5} textAnchor="middle">n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</T>
    </Diagram>
  );
}

function UnitCircleDiagram() {
  const cx = 110, cy = 100, r = 70, th = (40 * Math.PI) / 180;
  const px = cx + r * Math.cos(th), py = cy - r * Math.sin(th);
  return (
    <Diagram aria-label="Unit circle: a point P at angle theta has coordinates (cos theta, sin theta); the quadrant signs follow All, Sin, Tan, Cos; and sin squared plus cos squared equals 1">
      <Arrows id="uc-arr" />
      <line x1={cx - r - 20} y1={cy} x2={cx + r + 22} y2={cy} {...axisProps} strokeOpacity={0.6} markerEnd={url('uc-arr')} />
      <line x1={cx} y1={cy + r + 15} x2={cx} y2={cy - r - 18} {...axisProps} strokeOpacity={0.6} markerEnd={url('uc-arr')} />
      <circle cx={cx} cy={cy} r={r} {...ink} strokeOpacity={0.6} />
      <line x1={cx} y1={cy} x2={px} y2={py} strokeWidth={2.5} className="stroke-primary" />
      <line x1={px} y1={py} x2={px} y2={cy} {...guide} strokeOpacity={0.8} />
      <circle cx={px} cy={py} r={3.5} className="fill-primary" />
      <path d={`M ${cx + 18} ${cy} A 18 18 0 0 0 ${cx + 18 * Math.cos(th)} ${cy - 18 * Math.sin(th)}`} {...ink} strokeWidth={1.2} />
      <T x={cx + 22} y={cy - 5} fontSize={9}>θ</T>
      <T x={px + 4} y={py - 6} fontSize={9} p>P(cos θ, sin θ)</T>
      <T x={(cx + px) / 2} y={cy + 12} fontSize={8} textAnchor="middle" opacity={0.75}>cos θ</T>
      <T x={px + 4} y={(cy + py) / 2 + 8} fontSize={8} opacity={0.75}>sin θ</T>
      <T x={cx + r + 3} y={cy + 12} fontSize={8}>(1, 0)</T>
      <T x={cx - r - 3} y={cy + 12} fontSize={8} textAnchor="end">(−1, 0)</T>
      <T x={cx + 4} y={cy - r - 4} fontSize={8}>(0, 1)</T>
      <T x={cx + 4} y={cy + r + 11} fontSize={8}>(0, −1)</T>
      <T x={30} y={38} fontSize={9} opacity={0.8}>II: sin +</T>
      <T x={150} y={150} fontSize={9} opacity={0.8}>IV: cos +</T>
      <T x={30} y={165} fontSize={9} opacity={0.8}>III: tan +</T>
      <T x={150} y={38} fontSize={9} opacity={0.8}>I: all +</T>
      <T x={218} y={80} fontSize={10} fontWeight={600}>r = 1, so</T>
      <T x={218} y={96} fontSize={10} p>sin²θ + cos²θ = 1</T>
      <T x={218} y={114} fontSize={9} opacity={0.75}>tan θ = sin θ / cos θ</T>
    </Diagram>
  );
}

function TrigGraphsDiagram() {
  const X = (u: number) => 30 + (u * 260) / (2 * Math.PI);
  const Y = (v: number) => 100 - 55 * v;
  const ticks: [number, string][] = [[Math.PI / 2, 'π/2'], [Math.PI, 'π'], [(3 * Math.PI) / 2, '3π/2'], [2 * Math.PI, '2π']];
  return (
    <Diagram aria-label="Graphs of y = sin x and y = cos x from 0 to 2 pi: both oscillate between -1 and 1 with period 2 pi; cos x is sin x shifted left by pi over 2">
      <Arrows id="tg-arr" />
      <Axes id="tg-arr" ox={30} oy={100} y0={170} x1={308} y1={20} xl="x" yl="y" />
      {ticks.map(([u, l]) => (
        <g key={l}>
          <line x1={X(u)} y1={97} x2={X(u)} y2={103} stroke="currentColor" strokeOpacity={0.5} />
          <T x={X(u)} y={114} fontSize={8.5} textAnchor="middle" opacity={0.75}>{l}</T>
        </g>
      ))}
      <line x1={30} y1={45} x2={300} y2={45} {...guide} strokeOpacity={0.2} />
      <line x1={30} y1={155} x2={300} y2={155} {...guide} strokeOpacity={0.2} />
      <T x={25} y={48} fontSize={8.5} textAnchor="end">1</T>
      <T x={25} y={158} fontSize={8.5} textAnchor="end">−1</T>
      <polyline points={plot(Math.sin, 0, 2 * Math.PI, X, Y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <polyline points={plot(Math.cos, 0, 2 * Math.PI, X, Y)} {...ink} strokeWidth={1.8} strokeDasharray="5 3" />
      <T x={210} y={22} fontSize={9} p>— y = sin x</T>
      <T x={210} y={35} fontSize={9}>- - y = cos x</T>
      <T x={160} y={185} fontSize={9} textAnchor="middle" opacity={0.8}>period 2π · range [−1, 1] · cos x = sin(x + π/2)</T>
    </Diagram>
  );
}

function ArgandPlaneDiagram() {
  const ox = 100, oy = 110;
  return (
    <Diagram aria-label="Argand plane: complex number z = a + ib plotted at (a, b) with modulus r as the distance from the origin and argument theta as the angle with the positive real axis; the conjugate z-bar is its reflection in the real axis">
      <Arrows id="ar-arr" />
      <line x1={30} y1={oy} x2={300} y2={oy} {...axisProps} strokeOpacity={0.6} markerEnd={url('ar-arr')} />
      <line x1={ox} y1={195} x2={ox} y2={12} {...axisProps} strokeOpacity={0.6} markerEnd={url('ar-arr')} />
      <T x={298} y={124} fontSize={9} textAnchor="end" opacity={0.75}>Re</T>
      <T x={ox + 5} y={18} fontSize={9} opacity={0.75}>Im</T>
      <line x1={ox} y1={oy} x2={220} y2={40} strokeWidth={2.2} className="stroke-primary" markerEnd={url('ar-arr-p')} />
      <line x1={220} y1={40} x2={220} y2={180} {...guide} />
      <line x1={ox} y1={40} x2={220} y2={40} {...guide} />
      <line x1={ox} y1={oy} x2={220} y2={180} {...ink} strokeOpacity={0.5} />
      <circle cx={220} cy={40} r={3.5} className="fill-primary" />
      <circle cx={220} cy={180} r={3} fill="currentColor" fillOpacity={0.6} />
      <path d={`M ${ox + 24} ${oy} A 24 24 0 0 0 ${ox + 24 * Math.cos(0.528)} ${oy - 24 * Math.sin(0.528)}`} {...ink} strokeWidth={1.2} />
      <T x={ox + 28} y={oy - 4} fontSize={9}>θ</T>
      <T x={226} y={38} fontSize={10} p>z = a + ib</T>
      <T x={226} y={184} fontSize={9} opacity={0.75}>z̄ = a − ib</T>
      <T x={150} y={68} fontSize={9} p>r</T>
      <T x={220} y={124} fontSize={8.5} textAnchor="middle">a</T>
      <T x={92} y={44} fontSize={8.5} textAnchor="end">b</T>
      <T x={8} y={150} fontSize={8.5}>|z| = r = √(a² + b²)</T>
      <T x={8} y={164} fontSize={8.5}>arg z = θ = tan⁻¹(b/a)</T>
      <T x={8} y={178} fontSize={8.5}>z = r(cos θ + i sin θ)</T>
    </Diagram>
  );
}

function QuadraticGraphDiagram() {
  const X = (u: number) => 130 + 30 * u;
  const Y = (v: number) => 110 - 15 * v;
  return (
    <Diagram aria-label="Graph of the quadratic y = x squared minus 2x minus 3, an upward parabola crossing the x axis at x = -1 and x = 3, with vertex (1, -4), y-intercept -3 and axis of symmetry x = 1">
      <Arrows id="qg-arr" />
      <line x1={30} y1={110} x2={300} y2={110} {...axisProps} strokeOpacity={0.6} markerEnd={url('qg-arr')} />
      <line x1={130} y1={190} x2={130} y2={58} {...axisProps} strokeOpacity={0.6} markerEnd={url('qg-arr')} />
      <T x={298} y={122} fontSize={9} textAnchor="end" opacity={0.7}>x</T>
      <T x={134} y={64} fontSize={9} opacity={0.7}>y</T>
      <line x1={160} y1={60} x2={160} y2={176} {...guide} />
      <T x={164} y={68} fontSize={8.5} opacity={0.8}>x = −b/2a = 1</T>
      <polyline points={plot(u => u * u - 2 * u - 3, -2.1, 4.1, X, Y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <circle cx={100} cy={110} r={3.5} fill="currentColor" />
      <circle cx={220} cy={110} r={3.5} fill="currentColor" />
      <circle cx={160} cy={170} r={3.5} className="fill-primary" />
      <circle cx={130} cy={155} r={3} fill="currentColor" fillOpacity={0.6} />
      <T x={94} y={124} fontSize={8.5} textAnchor="end">x = −1</T>
      <T x={226} y={124} fontSize={8.5}>x = 3</T>
      <T x={168} y={184} fontSize={8.5} p>vertex (1, −4)</T>
      <T x={124} y={160} fontSize={8} textAnchor="end" opacity={0.75}>(0, −3)</T>
      <T x={160} y={18} fontSize={10} textAnchor="middle" p>y = x² − 2x − 3 = (x − 1)² − 4</T>
      <T x={160} y={31} fontSize={8.5} textAnchor="middle" opacity={0.8}>a &gt; 0: opens up · D = b² − 4ac = 16 &gt; 0: two real roots</T>
    </Diagram>
  );
}

function ApGpSeriesDiagram() {
  const ap = [2, 5, 8, 11, 14];
  const gp = [1, 2, 4, 8, 16];
  const bars = (vals: number[], x0: number, primary: boolean) =>
    vals.map((v, i) => (
      <g key={`${x0}-${i}`}>
        <rect x={x0 + i * 22} y={150 - v * 7} width={15} height={v * 7} className={primary ? 'fill-primary' : 'fill-primary/35'} />
        <T x={x0 + i * 22 + 7.5} y={146 - v * 7} fontSize={8.5} textAnchor="middle">{v}</T>
        <T x={x0 + i * 22 + 7.5} y={162} fontSize={7.5} textAnchor="middle" opacity={0.7}>{`a${['₁', '₂', '₃', '₄', '₅'][i]}`}</T>
      </g>
    ));
  return (
    <Diagram aria-label="Arithmetic versus geometric progression: AP 2, 5, 8, 11, 14 grows by a constant difference of 3, so the bars rise linearly; GP 1, 2, 4, 8, 16 grows by a constant ratio of 2, so the bars rise exponentially">
      <Arrows id="ag-arr" />
      <line x1={25} y1={150} x2={145} y2={150} {...axisProps} strokeOpacity={0.6} markerEnd={url('ag-arr')} />
      <line x1={180} y1={150} x2={300} y2={150} {...axisProps} strokeOpacity={0.6} markerEnd={url('ag-arr')} />
      {bars(ap, 30, false)}
      {bars(gp, 185, true)}
      <T x={80} y={176} fontSize={9} textAnchor="middle" fontWeight={600}>AP: aₙ = a + (n − 1)d</T>
      <T x={80} y={189} fontSize={8} textAnchor="middle" opacity={0.75}>common difference d = 3</T>
      <T x={240} y={176} fontSize={9} textAnchor="middle" fontWeight={600} p>GP: aₙ = a·rⁿ⁻¹</T>
      <T x={240} y={189} fontSize={8} textAnchor="middle" opacity={0.75}>common ratio r = 2</T>
      <T x={30} y={20} fontSize={8} opacity={0.75}>Sₙ = n/2 [2a + (n − 1)d]</T>
      <T x={185} y={20} fontSize={8} opacity={0.75}>Sₙ = a(rⁿ − 1)/(r − 1)</T>
    </Diagram>
  );
}

function PascalTriangleDiagram() {
  const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]];
  const hi = (n: number, k: number) => (n === 3 && (k === 1 || k === 2)) || (n === 4 && k === 2);
  return (
    <Diagram aria-label="Pascal's triangle rows 0 to 5: each entry is the sum of the two entries above it, for example 3 + 3 = 6, and row n gives the binomial coefficients nCr of (a + b) to the n">
      <Arrows id="pa-arr" />
      {rows.map((r, n) => (
        <g key={n}>
          {r.map((v, k) => (
            <T key={k} x={130 + (k - n / 2) * 30} y={28 + n * 22} fontSize={11} textAnchor="middle" fontWeight={hi(n, k) ? 700 : 400} p={hi(n, k)}>{v}</T>
          ))}
          <T x={232} y={28 + n * 22} fontSize={8.5} opacity={0.7}>{`n = ${n}`}</T>
        </g>
      ))}
      <line x1={118} y1={98} x2={126} y2={107} className="stroke-primary" strokeWidth={1.2} markerEnd={url('pa-arr-p')} />
      <line x1={142} y1={98} x2={134} y2={107} className="stroke-primary" strokeWidth={1.2} markerEnd={url('pa-arr-p')} />
      <T x={160} y={154} fontSize={8.5} textAnchor="middle">each entry = sum of the two above: ⁿ⁻¹Cᵣ₋₁ + ⁿ⁻¹Cᵣ = ⁿCᵣ</T>
      <T x={160} y={170} fontSize={8.5} textAnchor="middle" opacity={0.8}>row n = coefficients of (a + b)ⁿ</T>
      <T x={160} y={186} fontSize={8.5} textAnchor="middle" p>(a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴</T>
    </Diagram>
  );
}

function StraightLineDistanceDiagram() {
  const A = [30, 170], dir = [0.894, -0.447];
  const P = [100, 50];
  const t = (P[0] - A[0]) * dir[0] + (P[1] - A[1]) * dir[1];
  const M = [A[0] + t * dir[0], A[1] + t * dir[1]];
  const n = [P[0] - M[0], P[1] - M[1]];
  const nl = Math.hypot(n[0], n[1]);
  const u = [n[0] / nl, n[1] / nl];
  const s = 8;
  return (
    <Diagram aria-label="Perpendicular distance from a point P(x1, y1) to the line ax + by + c = 0: the perpendicular from P meets the line at its foot M at a right angle, and its length is |a x1 + b y1 + c| over root of a squared plus b squared">
      <Arrows id="sl-arr" />
      <Axes id="sl-arr" ox={20} oy={185} x1={305} y1={12} />
      <line x1={30} y1={170} x2={290} y2={40} strokeWidth={2.2} className="stroke-primary" />
      <line x1={P[0]} y1={P[1]} x2={M[0]} y2={M[1]} stroke="currentColor" strokeWidth={1.5} strokeDasharray="4 3" />
      <path d={`M ${M[0] + s * u[0]} ${M[1] + s * u[1]} l ${s * dir[0]} ${s * dir[1]} l ${-s * u[0]} ${-s * u[1]}`} {...ink} strokeWidth={1} />
      <circle cx={P[0]} cy={P[1]} r={3.5} fill="currentColor" />
      <circle cx={M[0]} cy={M[1]} r={2.5} fill="currentColor" />
      <T x={P[0] - 6} y={P[1] - 6} fontSize={9} textAnchor="end">P(x₁, y₁)</T>
      <T x={M[0] - 4} y={M[1] + 14} fontSize={9}>M</T>
      <T x={(P[0] + M[0]) / 2 - 8} y={(P[1] + M[1]) / 2 + 4} fontSize={10} textAnchor="end" fontWeight={600}>d</T>
      <T x={232} y={92} fontSize={9} p>ax + by + c = 0</T>
      <T x={150} y={22} fontSize={10} fontWeight={600}>d = |ax₁ + by₁ + c| / √(a² + b²)</T>
      <T x={150} y={36} fontSize={8} opacity={0.75}>slope m = −a/b · PM ⟂ line</T>
    </Diagram>
  );
}

function CircleTangentDiagram() {
  const cx = 110, cy = 105, r = 60, th = (-50 * Math.PI) / 180;
  const rad = [Math.cos(th), Math.sin(th)];
  const tan = [-rad[1], rad[0]];
  const P = [cx + r * rad[0], cy + r * rad[1]];
  const s = 8;
  return (
    <Diagram aria-label="Tangent to a circle: the tangent at point P on the circle x squared plus y squared equals r squared is perpendicular to the radius CP, and has equation x x1 + y y1 = r squared">
      <Arrows id="ct-arr" />
      <circle cx={cx} cy={cy} r={r} {...ink} strokeWidth={2} />
      <line x1={cx} y1={cy} x2={P[0]} y2={P[1]} stroke="currentColor" strokeWidth={1.5} />
      <line x1={P[0] - 62 * tan[0]} y1={P[1] - 62 * tan[1]} x2={P[0] + 62 * tan[0]} y2={P[1] + 62 * tan[1]} strokeWidth={2.2} className="stroke-primary" markerStart={url('ct-arr-p')} markerEnd={url('ct-arr-p')} />
      <path d={`M ${P[0] - s * rad[0]} ${P[1] - s * rad[1]} l ${s * tan[0]} ${s * tan[1]} l ${s * rad[0]} ${s * rad[1]}`} {...ink} strokeWidth={1} />
      <circle cx={cx} cy={cy} r={2.5} fill="currentColor" />
      <circle cx={P[0]} cy={P[1]} r={3.5} className="fill-primary" />
      <T x={cx - 4} y={cy + 14} fontSize={9}>C(0, 0)</T>
      <T x={P[0] - 8} y={P[1] - 6} fontSize={9} textAnchor="end">P(x₁, y₁)</T>
      <T x={(cx + P[0]) / 2 + 6} y={(cy + P[1]) / 2 + 8} fontSize={10} fontWeight={600}>r</T>
      <T x={200} y={112} fontSize={9} p>tangent</T>
      <T x={212} y={30} fontSize={9} fontWeight={600}>tangent ⟂ radius CP</T>
      <T x={212} y={50} fontSize={8.5}>circle: x² + y² = r²</T>
      <T x={212} y={66} fontSize={8.5}>tangent at P:</T>
      <T x={212} y={79} fontSize={8.5} p>xx₁ + yy₁ = r²</T>
      <T x={212} y={150} fontSize={8} opacity={0.8}>y = mx + c touches</T>
      <T x={212} y={163} fontSize={8} opacity={0.8}>iff c² = r²(1 + m²)</T>
    </Diagram>
  );
}

function ParabolaDiagram() {
  const vx = 90, vy = 100, a = 25;
  return (
    <Diagram aria-label="Parabola y squared = 4ax with vertex at the origin, focus S(a, 0), directrix x = -a and axis along the x axis; any point P on it is equidistant from the focus and the directrix, PS = PM; the latus rectum through S has length 4a">
      <Arrows id="pb-arr" />
      <line x1={40} y1={vy} x2={185} y2={vy} {...axisProps} strokeOpacity={0.6} markerEnd={url('pb-arr')} />
      <T x={182} y={vy + 13} fontSize={8} textAnchor="end" opacity={0.7}>axis</T>
      <line x1={65} y1={12} x2={65} y2={188} stroke="currentColor" strokeWidth={1.5} strokeDasharray="5 3" />
      <T x={60} y={185} fontSize={8} textAnchor="end">x = −a</T>
      <T x={60} y={22} fontSize={8} textAnchor="end">directrix</T>
      <polyline points={plot(t => vy - t, -85, 85, t => vx + (t * t) / (4 * a), y => y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <line x1={115} y1={50} x2={115} y2={150} {...guide} strokeOpacity={0.6} />
      <circle cx={115} cy={vy} r={3.5} className="fill-primary" />
      <circle cx={vx} cy={vy} r={2.5} fill="currentColor" />
      <circle cx={139} cy={30} r={3.5} fill="currentColor" />
      <line x1={139} y1={30} x2={115} y2={vy} stroke="currentColor" strokeWidth={1.3} />
      <line x1={139} y1={30} x2={65} y2={30} stroke="currentColor" strokeWidth={1.3} />
      <T x={144} y={30} fontSize={9}>P</T>
      <T x={62} y={33} fontSize={9} textAnchor="end">M</T>
      <T x={120} y={112} fontSize={9} p>S(a, 0)</T>
      <T x={86} y={113} fontSize={8} textAnchor="end">O</T>
      <T x={118} y={160} fontSize={8} opacity={0.75}>latus rectum = 4a</T>
      <T x={200} y={50} fontSize={11} fontWeight={600} p>y² = 4ax</T>
      <T x={200} y={70} fontSize={9}>PS = PM (e = 1)</T>
      <T x={200} y={86} fontSize={9}>focus S(a, 0)</T>
      <T x={200} y={102} fontSize={9}>directrix x = −a</T>
      <T x={200} y={118} fontSize={9}>vertex O(0, 0)</T>
    </Diagram>
  );
}

function EllipseDiagram() {
  const cx = 160, cy = 95, a = 110, b = 65;
  const c = Math.sqrt(a * a - b * b);
  const d = (a * a) / c;
  const P = [cx + a * Math.cos(Math.PI / 3), cy - b * Math.sin(Math.PI / 3)];
  return (
    <Diagram aria-label="Ellipse x squared over a squared plus y squared over b squared equals 1, with major axis 2a, minor axis 2b, foci S and S' at plus or minus c on the major axis, directrices x = plus or minus a over e, and any point P satisfying PS + PS' = 2a, eccentricity less than 1">
      <Arrows id="el-arr" />
      <line x1={cx - a - 15} y1={cy} x2={cx + a + 15} y2={cy} {...axisProps} strokeOpacity={0.6} markerEnd={url('el-arr')} />
      <line x1={cx} y1={cy + b + 10} x2={cx} y2={cy - b - 12} {...axisProps} strokeOpacity={0.6} markerEnd={url('el-arr')} />
      <ellipse cx={cx} cy={cy} rx={a} ry={b} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <line x1={cx - d} y1={14} x2={cx - d} y2={168} {...guide} />
      <line x1={cx + d} y1={14} x2={cx + d} y2={168} {...guide} />
      <T x={cx - d + 3} y={22} fontSize={7.5}>x = −a/e</T>
      <T x={cx + d - 3} y={22} fontSize={7.5} textAnchor="end">x = a/e</T>
      <line x1={P[0]} y1={P[1]} x2={cx + c} y2={cy} stroke="currentColor" strokeWidth={1.3} />
      <line x1={P[0]} y1={P[1]} x2={cx - c} y2={cy} stroke="currentColor" strokeWidth={1.3} />
      <circle cx={P[0]} cy={P[1]} r={3} fill="currentColor" />
      <circle cx={cx + c} cy={cy} r={3} className="fill-primary" />
      <circle cx={cx - c} cy={cy} r={3} className="fill-primary" />
      <T x={P[0] + 5} y={P[1] - 4} fontSize={9}>P</T>
      <T x={cx + c} y={cy + 13} fontSize={9} textAnchor="middle" p>S</T>
      <T x={cx - c} y={cy + 13} fontSize={9} textAnchor="middle" p>S′</T>
      <T x={cx + a + 2} y={cy - 4} fontSize={8}>A</T>
      <T x={cx - a - 2} y={cy - 4} fontSize={8} textAnchor="end">A′</T>
      <T x={cx + 4} y={cy - b - 3} fontSize={8}>B(0, b)</T>
      <T x={cx + 4} y={cy + 12} fontSize={8} opacity={0.7}>O</T>
      <T x={160} y={178} fontSize={8.5} textAnchor="middle" p>x²/a² + y²/b² = 1, a &gt; b, c² = a² − b² = a²e²</T>
      <T x={160} y={192} fontSize={8.5} textAnchor="middle">PS + PS′ = 2a · major 2a, minor 2b · e = c/a &lt; 1</T>
    </Diagram>
  );
}

function HyperbolaDiagram() {
  const cx = 160, cy = 100, a = 40, b = 30, c = 50;
  const br = (sgn: number) => plot(t => cy - b * Math.sinh(t), -1.75, 1.75, t => cx + sgn * a * Math.cosh(t), y => y);
  const P = [cx + a * Math.cosh(1), cy - b * Math.sinh(1)];
  return (
    <Diagram aria-label="Hyperbola x squared over a squared minus y squared over b squared equals 1: two branches with vertices at plus or minus a, foci S and S' at plus or minus c, directrices x = plus or minus a over e, asymptotes y = plus or minus b over a x, and any point P satisfying the absolute difference PS minus PS' = 2a, eccentricity greater than 1">
      <Arrows id="hy2-arr" />
      <line x1={20} y1={cy} x2={305} y2={cy} {...axisProps} strokeOpacity={0.6} markerEnd={url('hy2-arr')} />
      <line x1={cx} y1={190} x2={cx} y2={12} {...axisProps} strokeOpacity={0.6} markerEnd={url('hy2-arr')} />
      <line x1={60} y1={25} x2={260} y2={175} {...guide} />
      <line x1={60} y1={175} x2={260} y2={25} {...guide} />
      <T x={262} y={22} fontSize={8} opacity={0.8}>asymptote</T>
      <line x1={cx - (a * a) / c} y1={30} x2={cx - (a * a) / c} y2={170} {...guide} strokeOpacity={0.3} />
      <line x1={cx + (a * a) / c} y1={30} x2={cx + (a * a) / c} y2={170} {...guide} strokeOpacity={0.3} />
      <T x={cx} y={22} fontSize={7.5} textAnchor="middle" opacity={0.75}>x = ±a/e</T>
      <polyline points={br(1)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <polyline points={br(-1)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <line x1={P[0]} y1={P[1]} x2={cx + c} y2={cy} stroke="currentColor" strokeWidth={1.2} />
      <line x1={P[0]} y1={P[1]} x2={cx - c} y2={cy} stroke="currentColor" strokeWidth={1.2} />
      <circle cx={P[0]} cy={P[1]} r={3} fill="currentColor" />
      <circle cx={cx + c} cy={cy} r={3} fill="currentColor" />
      <circle cx={cx - c} cy={cy} r={3} fill="currentColor" />
      <T x={P[0] + 5} y={P[1] - 3} fontSize={9}>P</T>
      <T x={cx + c + 3} y={cy + 13} fontSize={9}>S</T>
      <T x={cx - c - 3} y={cy + 13} fontSize={9} textAnchor="end">S′</T>
      <T x={cx + a - 3} y={cy - 5} fontSize={8} textAnchor="end">A</T>
      <T x={cx - a + 3} y={cy - 5} fontSize={8}>A′</T>
      <T x={160} y={194} fontSize={8.5} textAnchor="middle">x²/a² − y²/b² = 1 · |PS − PS′| = 2a · c² = a² + b² · e = c/a &gt; 1</T>
    </Diagram>
  );
}

function LimitGraphDiagram() {
  const f = (x: number) => 140 - 50 * Math.sin((x - 40) / 80);
  const L = f(170);
  return (
    <Diagram aria-label="Limit of a function: as x approaches a from the left and from the right, f(x) approaches the same value L, even though the point at x = a is missing (open circle) and f(a) is defined elsewhere">
      <Arrows id="lg-arr" />
      <Axes id="lg-arr" ox={40} oy={170} x1={305} y1={14} xl="x" yl="y" />
      <polyline points={plot(f, 42, 166.5, x => x, y => y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <polyline points={plot(f, 173.5, 295, x => x, y => y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <circle cx={170} cy={L} r={3.5} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <circle cx={170} cy={45} r={3} fill="currentColor" />
      <T x={176} y={48} fontSize={8} opacity={0.8}>f(a): does not affect the limit</T>
      <line x1={40} y1={L} x2={166} y2={L} {...guide} />
      <line x1={170} y1={L + 4} x2={170} y2={170} {...guide} />
      <T x={34} y={L + 3} fontSize={9} textAnchor="end" p>L</T>
      <T x={170} y={182} fontSize={9} textAnchor="middle">a</T>
      <line x1={120} y1={180} x2={160} y2={180} stroke="currentColor" strokeWidth={1.3} markerEnd={url('lg-arr')} />
      <line x1={220} y1={180} x2={180} y2={180} stroke="currentColor" strokeWidth={1.3} markerEnd={url('lg-arr')} />
      <T x={116} y={183} fontSize={8} textAnchor="end">x → a⁻</T>
      <T x={224} y={183} fontSize={8}>x → a⁺</T>
      <line x1={135} y1={f(135) - 8} x2={158} y2={f(158) - 8} className="stroke-primary" strokeWidth={1.2} markerEnd={url('lg-arr-p')} />
      <line x1={205} y1={f(205) - 8} x2={182} y2={f(182) - 8} className="stroke-primary" strokeWidth={1.2} markerEnd={url('lg-arr-p')} />
      <T x={52} y={26} fontSize={10} fontWeight={600} p>lim (x→a) f(x) = L</T>
      <T x={52} y={40} fontSize={8.5} opacity={0.8}>exists iff LHL = RHL = L</T>
    </Diagram>
  );
}

function FunctionTypesDiagram() {
  const panels = [
    { title: 'one-one (into)', note: 'no image repeated', a: 3, b: 4, map: [0, 1, 2] },
    { title: 'many-one, onto', note: 'range = codomain', a: 3, b: 2, map: [0, 0, 1] },
    { title: 'bijective', note: 'one-one + onto', a: 3, b: 3, map: [0, 1, 2] },
  ];
  const ys = (n: number) => Array.from({ length: n }, (_, i) => 90 + (i - (n - 1) / 2) * 24);
  return (
    <Diagram aria-label="Types of functions shown as arrow diagrams from set A to set B: one-one into, where distinct elements have distinct images but one element of B is unused; many-one onto, where two elements share an image but every element of B is hit; and bijective, both one-one and onto">
      <Arrows id="ft-arr" />
      {panels.map((p, k) => {
        const x0 = 12 + k * 104, ax = x0 + 18, bx = x0 + 78;
        const ay = ys(p.a), by = ys(p.b);
        return (
          <g key={p.title}>
            <ellipse cx={ax} cy={90} rx={14} ry={48} {...ink} strokeOpacity={0.5} />
            <ellipse cx={bx} cy={90} rx={14} ry={48} {...ink} strokeOpacity={0.5} />
            <T x={ax} y={34} fontSize={9} textAnchor="middle" fontWeight={600}>A</T>
            <T x={bx} y={34} fontSize={9} textAnchor="middle" fontWeight={600}>B</T>
            {ay.map(y => <circle key={`a${y}`} cx={ax} cy={y} r={2.8} fill="currentColor" />)}
            {by.map(y => <circle key={`b${y}`} cx={bx} cy={y} r={2.8} className="fill-primary" />)}
            {p.map.map((j, i) => <line key={i} x1={ax + 4} y1={ay[i]} x2={bx - 6} y2={by[j]} stroke="currentColor" strokeWidth={1.2} markerEnd={url('ft-arr')} />)}
            <T x={x0 + 48} y={158} fontSize={9} textAnchor="middle" fontWeight={600} p>{p.title}</T>
            <T x={x0 + 48} y={172} fontSize={8} textAnchor="middle" opacity={0.75}>{p.note}</T>
          </g>
        );
      })}
      <T x={160} y={192} fontSize={8.5} textAnchor="middle" opacity={0.75}>f : A → B (every element of A has exactly one image)</T>
    </Diagram>
  );
}

function InverseTrigGraphsDiagram() {
  const X = (u: number) => 160 + 80 * u;
  const Y = (v: number) => 140 - 30 * v;
  const h = Math.PI / 2;
  return (
    <Diagram aria-label="Graphs of inverse trigonometric functions on the domain -1 to 1: y = sin inverse x increases from -pi over 2 to pi over 2, and y = cos inverse x decreases from pi to 0">
      <Arrows id="it-arr" />
      <line x1={50} y1={140} x2={290} y2={140} {...axisProps} strokeOpacity={0.6} markerEnd={url('it-arr')} />
      <line x1={160} y1={195} x2={160} y2={22} {...axisProps} strokeOpacity={0.6} markerEnd={url('it-arr')} />
      {[[h, 'π/2'], [Math.PI, 'π'], [-h, '−π/2']].map(([v, l]) => (
        <g key={l as string}>
          <line x1={70} y1={Y(v as number)} x2={250} y2={Y(v as number)} {...guide} strokeOpacity={0.25} />
          <T x={156} y={Y(v as number) - 3} fontSize={8} textAnchor="end" opacity={0.8}>{l}</T>
        </g>
      ))}
      <line x1={80} y1={40} x2={80} y2={190} {...guide} strokeOpacity={0.2} />
      <line x1={240} y1={40} x2={240} y2={190} {...guide} strokeOpacity={0.2} />
      <T x={80} y={152} fontSize={8} textAnchor="middle">−1</T>
      <T x={244} y={152} fontSize={8}>1</T>
      <polyline points={plot(Math.asin, -1, 1, X, Y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <polyline points={plot(Math.acos, -1, 1, X, Y)} {...ink} strokeWidth={2} strokeDasharray="5 3" />
      <T x={246} y={Y(h) + 12} fontSize={9} p>y = sin⁻¹x</T>
      <T x={86} y={Y(Math.PI) - 4} fontSize={9}>y = cos⁻¹x</T>
      <T x={312} y={176} fontSize={8} textAnchor="end" p>sin⁻¹: [−1, 1] → [−π/2, π/2]</T>
      <T x={312} y={189} fontSize={8} textAnchor="end">cos⁻¹: [−1, 1] → [0, π]</T>
    </Diagram>
  );
}

function MatrixMultiplicationDiagram() {
  const L = (x: number, y0: number, y1: number) => <path d={`M ${x + 4} ${y0} L ${x} ${y0} L ${x} ${y1} L ${x + 4} ${y1}`} {...ink} strokeWidth={1.2} />;
  const R = (x: number, y0: number, y1: number) => <path d={`M ${x - 4} ${y0} L ${x} ${y0} L ${x} ${y1} L ${x - 4} ${y1}`} {...ink} strokeWidth={1.2} />;
  const sub = ['₁', '₂', '₃'];
  return (
    <Diagram aria-label="Matrix multiplication: a 2 by 3 matrix A times a 3 by 2 matrix B gives a 2 by 2 matrix C; entry c11 is the dot product of row 1 of A with column 1 of B, a11 b11 + a12 b21 + a13 b31">
      <Arrows id="mm-arr" />
      <rect x={21} y={65} width={84} height={18} rx={4} className="fill-primary/20" />
      <rect x={133} y={52} width={25} height={72} rx={4} className="fill-primary/20" />
      <rect x={222} y={65} width={28} height={18} rx={4} className="fill-primary/40" />
      {L(18, 62, 112)}{R(108, 62, 112)}
      {[0, 1].map(i => [0, 1, 2].map(j => <T key={`a${i}${j}`} x={35 + j * 30} y={78 + i * 26} textAnchor="middle">{`a${sub[i]}${sub[j]}`}</T>))}
      <T x={119} y={92} textAnchor="middle">×</T>
      {L(131, 50, 126)}{R(192, 50, 126)}
      {[0, 1, 2].map(i => [0, 1].map(j => <T key={`b${i}${j}`} x={145 + j * 33} y={66 + i * 26} textAnchor="middle">{`b${sub[i]}${sub[j]}`}</T>))}
      <T x={206} y={92} textAnchor="middle">=</T>
      {L(219, 62, 112)}{R(288, 62, 112)}
      {[0, 1].map(i => [0, 1].map(j => <T key={`c${i}${j}`} x={236 + j * 34} y={78 + i * 26} textAnchor="middle" p={i === 0 && j === 0}>{`c${sub[i]}${sub[j]}`}</T>))}
      <path d="M 63 62 Q 150 18 236 62" fill="none" strokeWidth={1.2} strokeDasharray="4 3" className="stroke-primary" markerEnd={url('mm-arr-p')} />
      <T x={63} y={138} fontSize={8.5} textAnchor="middle" opacity={0.75}>A (2×3)</T>
      <T x={161} y={140} fontSize={8.5} textAnchor="middle" opacity={0.75}>B (3×2)</T>
      <T x={254} y={138} fontSize={8.5} textAnchor="middle" opacity={0.75}>C (2×2)</T>
      <T x={160} y={162} fontSize={10} textAnchor="middle" p>c₁₁ = a₁₁b₁₁ + a₁₂b₂₁ + a₁₃b₃₁</T>
      <T x={160} y={180} fontSize={8.5} textAnchor="middle">cᵢⱼ = (row i of A) · (column j of B)</T>
      <T x={160} y={194} fontSize={8} textAnchor="middle" opacity={0.75}>(m×n)(n×p) = (m×p); in general AB ≠ BA</T>
    </Diagram>
  );
}

function ContinuityGraphDiagram() {
  const g = (x: number) => 115 - 40 * Math.sin((x - 25) / 30);
  return (
    <Diagram aria-label="Continuity: on the left a function continuous at x = a, where the left limit, right limit and f(a) agree; on the right a jump discontinuity, where the left-hand limit and right-hand limit differ">
      <Arrows id="cg-arr" />
      <Axes id="cg-arr" ox={20} oy={150} x1={150} y1={22} />
      <polyline points={plot(g, 22, 145, x => x, y => y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <circle cx={85} cy={g(85)} r={3.5} fill="currentColor" />
      <line x1={85} y1={g(85) + 4} x2={85} y2={150} {...guide} />
      <T x={85} y={161} fontSize={8.5} textAnchor="middle">a</T>
      <Axes id="cg-arr" ox={175} oy={150} x1={305} y1={22} />
      <line x1={178} y1={130} x2={240} y2={100} strokeWidth={2.2} className="stroke-primary" />
      <line x1={240} y1={60} x2={298} y2={42} strokeWidth={2.2} className="stroke-primary" />
      <circle cx={240} cy={100} r={3.5} fill="currentColor" />
      <circle cx={240} cy={60} r={3.5} fill="none" stroke="currentColor" strokeWidth={1.5} />
      <line x1={240} y1={64} x2={240} y2={150} {...guide} />
      <T x={240} y={161} fontSize={8.5} textAnchor="middle">a</T>
      <T x={246} y={106} fontSize={8}>LHL = f(a)</T>
      <T x={246} y={76} fontSize={8}>RHL</T>
      <T x={85} y={176} fontSize={9.5} textAnchor="middle" fontWeight={600}>continuous at a</T>
      <T x={85} y={190} fontSize={8.5} textAnchor="middle" p>LHL = RHL = f(a)</T>
      <T x={240} y={176} fontSize={9.5} textAnchor="middle" fontWeight={600}>jump discontinuity</T>
      <T x={240} y={190} fontSize={8.5} textAnchor="middle" p>LHL ≠ RHL</T>
    </Diagram>
  );
}

function TangentNormalDiagram() {
  const X = (u: number) => 60 + 30 * u;
  const Y = (v: number) => 175 - 30 * v;
  const u0 = 2.5, m = u0 / 2;
  const P = [X(u0), Y((u0 * u0) / 4)];
  const tl = Math.hypot(1, m);
  const t = [1 / tl, -m / tl];
  const n = [m / tl, 1 / tl];
  const s = 7;
  return (
    <Diagram aria-label="Tangent and normal to the curve y = x squared over 4 at a point P: the tangent has slope m = dy/dx at P, and the normal is perpendicular to it with slope -1/m">
      <Arrows id="tn-arr" />
      <Axes id="tn-arr" ox={45} oy={175} x1={210} y1={14} xl="x" yl="y" />
      <polyline points={plot(u => (u * u) / 4, -0.5, 4.5, X, Y)} {...ink} strokeWidth={2} />
      <line x1={P[0] - 50 * t[0]} y1={P[1] - 50 * t[1]} x2={P[0] + 75 * t[0]} y2={P[1] + 75 * t[1]} strokeWidth={2} className="stroke-primary" />
      <line x1={P[0] - 60 * n[0]} y1={P[1] - 60 * n[1]} x2={P[0] + 45 * n[0]} y2={P[1] + 45 * n[1]} stroke="currentColor" strokeWidth={1.5} strokeDasharray="5 3" />
      <path d={`M ${P[0] + s * t[0]} ${P[1] + s * t[1]} l ${-s * n[0]} ${-s * n[1]} l ${-s * t[0]} ${-s * t[1]}`} {...ink} strokeWidth={1} />
      <circle cx={P[0]} cy={P[1]} r={3.5} className="fill-primary" />
      <T x={P[0] + 8} y={P[1] + 12} fontSize={9}>P(x₁, y₁)</T>
      <T x={P[0] + 78 * t[0] - 4} y={P[1] + 78 * t[1]} fontSize={9} textAnchor="end" p>tangent</T>
      <T x={P[0] - 62 * n[0]} y={P[1] - 62 * n[1] - 4} fontSize={9} textAnchor="middle">normal</T>
      <T x={200} y={92} fontSize={9} fontWeight={600} p>m = dy/dx at P</T>
      <T x={200} y={108} fontSize={8.5} p>y − y₁ = m(x − x₁)</T>
      <T x={200} y={128} fontSize={9} fontWeight={600}>normal slope = −1/m</T>
      <T x={200} y={144} fontSize={8.5}>y − y₁ = −(1/m)(x − x₁)</T>
      <T x={200} y={70} fontSize={8.5} opacity={0.75}>curve y = x²/4</T>
    </Diagram>
  );
}

function MaximaMinimaDiagram() {
  const X = (u: number) => 160 + 55 * u;
  const Y = (v: number) => 100 - 30 * v;
  return (
    <Diagram aria-label="Graph of f(x) = x cubed minus 3x with a local maximum at x = -1 and a local minimum at x = 1, where the tangent is horizontal and f'(x) = 0; f' is positive before the maximum, negative between, and positive after the minimum; f'' is negative at the maximum and positive at the minimum">
      <Arrows id="mx-arr" />
      <line x1={30} y1={100} x2={305} y2={100} {...axisProps} strokeOpacity={0.6} markerEnd={url('mx-arr')} />
      <line x1={160} y1={192} x2={160} y2={10} {...axisProps} strokeOpacity={0.6} markerEnd={url('mx-arr')} />
      <polyline points={plot(u => u * u * u - 3 * u, -2.05, 2.05, X, Y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <line x1={83} y1={40} x2={127} y2={40} stroke="currentColor" strokeWidth={1.3} strokeDasharray="4 3" />
      <line x1={193} y1={160} x2={237} y2={160} stroke="currentColor" strokeWidth={1.3} strokeDasharray="4 3" />
      <circle cx={105} cy={40} r={3.5} fill="currentColor" />
      <circle cx={215} cy={160} r={3.5} fill="currentColor" />
      <T x={105} y={16} fontSize={9} textAnchor="middle" fontWeight={600}>local maximum</T>
      <T x={105} y={29} fontSize={8} textAnchor="middle">f′ = 0, f″ &lt; 0</T>
      <T x={215} y={176} fontSize={9} textAnchor="middle" fontWeight={600}>local minimum</T>
      <T x={215} y={189} fontSize={8} textAnchor="middle">f′ = 0, f″ &gt; 0</T>
      <T x={40} y={70} fontSize={8.5} p>f′ &gt; 0 ↗</T>
      <T x={166} y={86} fontSize={8.5} p>f′ &lt; 0 ↘</T>
      <T x={262} y={140} fontSize={8.5} p>f′ &gt; 0 ↗</T>
      <T x={8} y={186} fontSize={8.5} opacity={0.8}>f(x) = x³ − 3x</T>
    </Diagram>
  );
}

function AreaBetweenCurvesDiagram() {
  const X = (u: number) => 60 + 130 * u;
  const Y = (v: number) => 175 - 130 * v;
  const region = `${plot(u => u, 0, 1, X, Y, 2)} ${plot(u => u * u, 1, 0, X, Y, 40)}`;
  return (
    <Diagram aria-label="Area between the curves y = x and y = x squared, which intersect at (0, 0) and (1, 1); the shaded region between them has area integral from 0 to 1 of (x minus x squared) dx = 1/6">
      <Arrows id="ab-arr" />
      <Axes id="ab-arr" ox={60} oy={175} x0={40} y0={190} x1={305} y1={10} xl="x" yl="y" />
      <polygon points={region} className="fill-primary" fillOpacity={0.3} />
      <polyline points={plot(u => u, 0, 1.2, X, Y, 2)} {...ink} strokeWidth={2} />
      <polyline points={plot(u => u * u, 0, 1.1, X, Y)} fill="none" strokeWidth={2} className="stroke-primary" />
      <line x1={190} y1={45} x2={190} y2={175} {...guide} strokeOpacity={0.3} />
      <circle cx={190} cy={45} r={3} fill="currentColor" />
      <circle cx={60} cy={175} r={3} fill="currentColor" />
      <T x={196} y={50} fontSize={8.5}>(1, 1)</T>
      <T x={56} y={186} fontSize={8.5} textAnchor="end">O</T>
      <T x={190} y={186} fontSize={8.5} textAnchor="middle">1</T>
      <T x={92} y={100} fontSize={9.5} fontWeight={600}>y = x</T>
      <T x={166} y={124} fontSize={9.5} fontWeight={600} p>y = x²</T>
      <T x={220} y={104} fontSize={9.5} p>A = ∫₀¹ (x − x²) dx</T>
      <T x={220} y={120} fontSize={9.5}>= 1/2 − 1/3 = 1/6</T>
      <T x={220} y={138} fontSize={8} opacity={0.75}>(upper − lower curve)</T>
    </Diagram>
  );
}

function DefiniteIntegralAreaDiagram() {
  const f = (x: number) => 100 - 30 * Math.sin((x - 40) / 45);
  const region = `80,170 ${plot(f, 80, 250, x => x, y => y)} 250,170`;
  return (
    <Diagram aria-label="Definite integral as area: the region under y = f(x) above the x axis between x = a and x = b is shaded; a thin strip of width dx and height f(x) shows the area as a limit of sums">
      <Arrows id="di-arr" />
      <Axes id="di-arr" ox={40} oy={170} x1={305} y1={14} xl="x" yl="y" />
      <polygon points={region} className="fill-primary" fillOpacity={0.2} />
      <rect x={160} y={f(165)} width={10} height={170 - f(165)} className="fill-primary/50 stroke-primary" strokeWidth={1} />
      <polyline points={plot(f, 45, 290, x => x, y => y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <line x1={80} y1={f(80)} x2={80} y2={170} stroke="currentColor" strokeWidth={1.3} />
      <line x1={250} y1={f(250)} x2={250} y2={170} stroke="currentColor" strokeWidth={1.3} />
      <T x={80} y={182} fontSize={9} textAnchor="middle">a</T>
      <T x={250} y={182} fontSize={9} textAnchor="middle">b</T>
      <T x={165} y={182} fontSize={8} textAnchor="middle" p>dx</T>
      <T x={174} y={f(165) + 22} fontSize={8}>f(x)</T>
      <T x={290} y={f(290) - 8} fontSize={9} textAnchor="end">y = f(x)</T>
      <T x={60} y={24} fontSize={10} fontWeight={600} p>∫ₐᵇ f(x) dx = F(b) − F(a)</T>
      <T x={60} y={38} fontSize={8.5} opacity={0.8}>area = lim Σ f(xᵢ) Δx as Δx → 0, where F′ = f</T>
    </Diagram>
  );
}

function SlopeFieldDiagram() {
  const ox = 160, oy = 95, s = 36, half = 7;
  const segs: JSX.Element[] = [];
  for (let i = -6; i <= 6; i++) {
    for (let j = -4; j <= 4; j++) {
      const u = i / 2, v = j / 2, m = u;
      const l = Math.hypot(1, m);
      const dx = (half / l), dy = (half * m) / l;
      const x = ox + s * u, y = oy - s * v;
      segs.push(<line key={`${i},${j}`} x1={x - dx} y1={y + dy} x2={x + dx} y2={y - dy} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.2} />);
    }
  }
  const X = (u: number) => ox + s * u;
  const Y = (v: number) => oy - s * v;
  return (
    <Diagram aria-label="Slope field of the differential equation dy/dx = x: short segments whose slope equals x at each grid point, flat along the y axis and steeper further out, with solution curves y = x squared over 2 plus C following the segments">
      <Arrows id="sf-arr" />
      <line x1={40} y1={oy} x2={290} y2={oy} {...axisProps} strokeOpacity={0.6} markerEnd={url('sf-arr')} />
      <line x1={ox} y1={176} x2={ox} y2={12} {...axisProps} strokeOpacity={0.6} markerEnd={url('sf-arr')} />
      {segs}
      <polyline points={plot(u => (u * u) / 2 - 1.5, -2.64, 2.64, X, Y)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <polyline points={plot(u => (u * u) / 2 + 0.5, -1.72, 1.72, X, Y)} fill="none" strokeWidth={1.8} strokeDasharray="5 3" className="stroke-primary" />
      <T x={286} y={oy + 13} fontSize={9} textAnchor="end" opacity={0.7}>x</T>
      <T x={ox + 5} y={18} fontSize={9} opacity={0.7}>y</T>
      <T x={160} y={190} fontSize={9} textAnchor="middle">slope field of dy/dx = x; solutions <tspan className="fill-primary">y = x²/2 + C</tspan></T>
    </Diagram>
  );
}

function VectorProductsDiagram() {
  return (
    <Diagram aria-label="Dot and cross product: the dot product a dot b = |a||b| cos theta is a scalar equal to |a| times the projection of b on a; the cross product a cross b is a vector perpendicular to both a and b, with magnitude |a||b| sin theta equal to the area of the parallelogram they span">
      <Arrows id="vp-arr" />
      <line x1={25} y1={150} x2={140} y2={150} strokeWidth={2} stroke="currentColor" markerEnd={url('vp-arr')} />
      <line x1={25} y1={150} x2={90} y2={85} strokeWidth={2} className="stroke-primary" markerEnd={url('vp-arr-p')} />
      <line x1={90} y1={85} x2={90} y2={150} {...guide} />
      <line x1={25} y1={158} x2={90} y2={158} className="stroke-primary" strokeWidth={1.2} markerStart={url('vp-arr-p')} markerEnd={url('vp-arr-p')} />
      <path d={`M 45 150 A 20 20 0 0 0 ${25 + 20 * Math.SQRT1_2} ${150 - 20 * Math.SQRT1_2}`} {...ink} strokeWidth={1.1} />
      <T x={48} y={142} fontSize={8.5}>θ</T>
      <T x={132} y={143} fontSize={10} fontWeight={600}>a</T>
      <T x={78} y={82} fontSize={10} fontWeight={600} p>b</T>
      <T x={57} y={170} fontSize={7.5} textAnchor="middle" p>|b| cos θ</T>
      <T x={80} y={22} fontSize={9.5} textAnchor="middle" fontWeight={600}>Dot (scalar) product</T>
      <T x={80} y={184} fontSize={8.5} textAnchor="middle">a·b = |a||b| cos θ</T>
      <T x={80} y={196} fontSize={7.5} textAnchor="middle" opacity={0.75}>a·b = 0 ⇔ a ⟂ b</T>
      <line x1={160} y1={20} x2={160} y2={190} {...guide} strokeOpacity={0.2} />
      <polygon points="180,150 265,150 300,105 215,105" className="fill-primary/15" />
      <line x1={180} y1={150} x2={265} y2={150} strokeWidth={2} stroke="currentColor" markerEnd={url('vp-arr')} />
      <line x1={180} y1={150} x2={215} y2={105} strokeWidth={2} stroke="currentColor" markerEnd={url('vp-arr')} />
      <line x1={180} y1={150} x2={180} y2={45} strokeWidth={2} className="stroke-primary" markerEnd={url('vp-arr-p')} />
      <T x={258} y={164} fontSize={10} fontWeight={600}>a</T>
      <T x={204} y={102} fontSize={10} fontWeight={600}>b</T>
      <T x={186} y={52} fontSize={10} fontWeight={600} p>a × b</T>
      <T x={240} y={134} fontSize={8} textAnchor="middle">area = |a × b|</T>
      <T x={240} y={22} fontSize={9.5} textAnchor="middle" fontWeight={600}>Cross (vector) product</T>
      <T x={240} y={184} fontSize={8.5} textAnchor="middle">|a × b| = |a||b| sin θ</T>
      <T x={240} y={196} fontSize={7.5} textAnchor="middle" opacity={0.75}>⟂ to a and b (right-hand rule)</T>
    </Diagram>
  );
}

function LinePlane3dDiagram() {
  return (
    <Diagram aria-label="Line and plane in 3D: a plane r dot n = d with normal vector n, and a line r = a + lambda b through point A with direction b meeting the plane at Q; the angle phi between line and plane satisfies sin phi = |b dot n| over |b||n|">
      <Arrows id="lp-arr" />
      <line x1={30} y1={178} x2={30} y2={140} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('lp-arr')} />
      <line x1={30} y1={178} x2={70} y2={178} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('lp-arr')} />
      <line x1={30} y1={178} x2={12} y2={194} stroke="currentColor" strokeOpacity={0.6} markerEnd={url('lp-arr')} />
      <T x={34} y={146} fontSize={8} opacity={0.7}>z</T>
      <T x={68} y={190} fontSize={8} opacity={0.7}>y</T>
      <T x={6} y={190} fontSize={8} opacity={0.7}>x</T>
      <polygon points="70,140 230,140 290,95 130,95" className="fill-primary/10 stroke-primary" strokeWidth={1.2} />
      <line x1={180} y1={118} x2={212} y2={154} stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 3" strokeOpacity={0.6} />
      <line x1={110} y1={40} x2={150} y2={84.6} stroke="currentColor" strokeWidth={1.8} markerEnd={url('lp-arr')} />
      <line x1={150} y1={84.6} x2={180} y2={118} stroke="currentColor" strokeWidth={1.8} />
      <line x1={180} y1={118} x2={180} y2={45} strokeWidth={2} className="stroke-primary" markerEnd={url('lp-arr-p')} />
      <circle cx={119} cy={50} r={3} fill="currentColor" />
      <circle cx={180} cy={118} r={3} className="fill-primary" />
      <T x={113} y={56} fontSize={9} textAnchor="end">A(a)</T>
      <T x={144} y={96} fontSize={9} textAnchor="end">b</T>
      <T x={186} y={52} fontSize={10} fontWeight={600} p>n</T>
      <T x={186} y={130} fontSize={9}>Q</T>
      <T x={112} y={30} fontSize={9}>line: r = a + λb</T>
      <T x={250} y={128} fontSize={8.5} textAnchor="middle" p>plane: r·n = d</T>
      <T x={316} y={166} fontSize={8} textAnchor="end">angle with plane: sin φ = |b·n| / (|b||n|)</T>
      <T x={316} y={180} fontSize={8} textAnchor="end">distance of A from plane = |a·n − d| / |n|</T>
      <T x={316} y={194} fontSize={8} textAnchor="end" opacity={0.75}>line ∥ plane ⇔ b·n = 0</T>
    </Diagram>
  );
}

function ProbabilityTreeDiagram() {
  const br = (x1: number, y1: number, x2: number, y2: number, p: string, ly: number) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1.3} markerEnd={url('pr-arr')} />
      <T x={(x1 + x2) / 2 - 4} y={ly} fontSize={9} textAnchor="middle" p>{p}</T>
    </g>
  );
  const out: [number, string, string][] = [[32, 'B', '0.6 × 0.7 = 0.42'], [80, 'B′', '0.6 × 0.3 = 0.18'], [128, 'B', '0.4 × 0.2 = 0.08'], [176, 'B′', '0.4 × 0.8 = 0.32']];
  return (
    <Diagram aria-label="Two-stage probability tree: first A with probability 0.6 or A' with 0.4; then B given A 0.7, B' given A 0.3, B given A' 0.2, B' given A' 0.8; multiplying along branches gives 0.42, 0.18, 0.08 and 0.32, and P(B) = 0.42 + 0.08 = 0.50">
      <Arrows id="pr-arr" />
      <circle cx={20} cy={104} r={3} fill="currentColor" />
      {br(23, 102, 98, 58, '0.6', 70)}
      {br(23, 106, 98, 150, '0.4', 144)}
      <T x={107} y={58} textAnchor="middle" fontWeight={600}>A</T>
      <T x={107} y={154} textAnchor="middle" fontWeight={600}>A′</T>
      {br(118, 50, 184, 30, '0.7', 32)}
      {br(118, 58, 184, 78, '0.3', 80)}
      {br(118, 146, 184, 126, '0.2', 128)}
      {br(118, 154, 184, 174, '0.8', 176)}
      {out.map(([y, l, v]) => (
        <g key={y}>
          <T x={194} y={y + 3} fontWeight={600}>{l}</T>
          <T x={212} y={y + 3} fontSize={8.5} opacity={0.85}>{v}</T>
        </g>
      ))}
      <T x={10} y={18} fontSize={8} opacity={0.75}>stage 1</T>
      <T x={128} y={18} fontSize={8} opacity={0.75}>stage 2 (conditional)</T>
      <T x={8} y={194} fontSize={8.5} p>multiply along a path; add paths: P(B) = 0.42 + 0.08 = 0.50</T>
    </Diagram>
  );
}

function BinomialDistributionDiagram() {
  const c = [1, 6, 15, 20, 15, 6, 1];
  return (
    <Diagram aria-label="Binomial distribution B(6, 0.5): bar heights proportional to 1, 6, 15, 20, 15, 6, 1 out of 64 for k = 0 to 6, symmetric about the mean np = 3 with variance npq = 1.5">
      <Arrows id="bi-arr" />
      <Axes id="bi-arr" ox={40} oy={165} x1={305} y1={20} xl="k" />
      {c.map((v, k) => (
        <g key={k}>
          <rect x={50 + k * 36} y={165 - v * 6} width={24} height={v * 6} className={k === 3 ? 'fill-primary' : 'fill-primary/40'} />
          <T x={62 + k * 36} y={161 - v * 6} fontSize={7.5} textAnchor="middle">{`${v}/64`}</T>
          <T x={62 + k * 36} y={177} fontSize={8.5} textAnchor="middle">{k}</T>
        </g>
      ))}
      <T x={44} y={16} fontSize={9.5} fontWeight={600} p>P(X = k) = ⁿCₖ pᵏ qⁿ⁻ᵏ, n = 6, p = q = ½</T>
      <T x={310} y={60} fontSize={8.5} textAnchor="end">mean np = 3</T>
      <T x={310} y={73} fontSize={8.5} textAnchor="end">variance npq = 1.5</T>
      <T x={160} y={194} fontSize={8} textAnchor="middle" opacity={0.75}>Σ P(X = k) = (q + p)ⁿ = 1</T>
    </Diagram>
  );
}

function StatisticsSpreadDiagram() {
  const curve = (sd: number, h: number) => plot(x => 165 - h * Math.exp(-((x - 160) ** 2) / (2 * sd * sd)), 30, 290, x => x, y => y);
  const wideAtSd = 165 - 52.8 * Math.exp(-0.5);
  return (
    <Diagram aria-label="Two distributions with the same mean but different standard deviations: a tall narrow curve with small sigma where data cluster near the mean, and a low wide curve with large sigma where data are spread out; mean plus and minus one sigma marked on the wide curve">
      <Arrows id="st-arr" />
      <line x1={25} y1={165} x2={300} y2={165} {...axisProps} strokeOpacity={0.6} markerEnd={url('st-arr')} />
      <polyline points={curve(22, 120)} fill="none" strokeWidth={2.2} className="stroke-primary" />
      <polyline points={curve(50, 52.8)} {...ink} strokeWidth={2} strokeDasharray="5 3" />
      <line x1={160} y1={38} x2={160} y2={165} {...guide} />
      <line x1={110} y1={wideAtSd} x2={110} y2={165} {...guide} />
      <line x1={210} y1={wideAtSd} x2={210} y2={165} {...guide} />
      <T x={160} y={178} fontSize={9} textAnchor="middle">μ</T>
      <T x={110} y={178} fontSize={8.5} textAnchor="middle">μ − σ</T>
      <T x={210} y={178} fontSize={8.5} textAnchor="middle">μ + σ</T>
      <T x={180} y={62} fontSize={8.5} p>small σ: values clustered</T>
      <T x={222} y={128} fontSize={8.5}>large σ: spread out</T>
      <T x={10} y={20} fontSize={9.5} fontWeight={600}>σ = √( Σ(xᵢ − x̄)² / n )</T>
      <T x={10} y={34} fontSize={8.5} opacity={0.8}>variance = σ²</T>
      <T x={160} y={194} fontSize={8} textAnchor="middle" opacity={0.75}>same mean, different spread; equal areas under both curves</T>
    </Diagram>
  );
}

export const chemMathsDiagrams: Record<string, () => JSX.Element> = {
  // Chemistry
  'atomic-orbitals': AtomicOrbitalsDiagram,
  'periodic-trends': PeriodicTrendsDiagram,
  'vsepr-shapes': VseprShapesDiagram,
  'mo-diagram': MoDiagram,
  'hybridisation': HybridisationDiagram,
  'gas-isotherms': GasIsothermsDiagram,
  'enthalpy-diagram': EnthalpyDiagram,
  'equilibrium-approach': EquilibriumApproachDiagram,
  'titration-curve': TitrationCurveDiagram,
  'buffer-action': BufferActionDiagram,
  'galvanic-cell': GalvanicCellDiagram,
  'conductance-dilution': ConductanceDilutionDiagram,
  'reaction-order-graphs': ReactionOrderGraphsDiagram,
  'activation-energy-profile': ActivationEnergyProfileDiagram,
  'raoult-plot': RaoultPlotDiagram,
  'crystal-field-splitting': CrystalFieldSplittingDiagram,
  'sn1-sn2': Sn1Sn2Diagram,
  'inductive-resonance': InductiveResonanceDiagram,
  'isomerism-tree': IsomerismTreeDiagram,
  'carbonyl-addition': CarbonylAdditionDiagram,
  'glucose-structure': GlucoseStructureDiagram,
  'd-block-trends': DBlockTrendsDiagram,
  'xenon-shapes': XenonShapesDiagram,
  // Mathematics
  'venn-diagram': VennDiagram,
  'unit-circle': UnitCircleDiagram,
  'trig-graphs': TrigGraphsDiagram,
  'argand-plane': ArgandPlaneDiagram,
  'quadratic-graph': QuadraticGraphDiagram,
  'ap-gp-series': ApGpSeriesDiagram,
  'pascal-triangle': PascalTriangleDiagram,
  'straight-line-distance': StraightLineDistanceDiagram,
  'circle-tangent': CircleTangentDiagram,
  'parabola': ParabolaDiagram,
  'ellipse': EllipseDiagram,
  'hyperbola': HyperbolaDiagram,
  'limit-graph': LimitGraphDiagram,
  'function-types': FunctionTypesDiagram,
  'inverse-trig-graphs': InverseTrigGraphsDiagram,
  'matrix-multiplication': MatrixMultiplicationDiagram,
  'continuity-graph': ContinuityGraphDiagram,
  'tangent-normal': TangentNormalDiagram,
  'maxima-minima': MaximaMinimaDiagram,
  'area-between-curves': AreaBetweenCurvesDiagram,
  'definite-integral-area': DefiniteIntegralAreaDiagram,
  'slope-field': SlopeFieldDiagram,
  'vector-products': VectorProductsDiagram,
  'line-plane-3d': LinePlane3dDiagram,
  'probability-tree': ProbabilityTreeDiagram,
  'binomial-distribution': BinomialDistributionDiagram,
  'statistics-spread': StatisticsSpreadDiagram,
};
