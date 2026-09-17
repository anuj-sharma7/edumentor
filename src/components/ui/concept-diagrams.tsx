/**
 * Hand-drawn inline diagrams for a curated set of concepts.
 *
 * These replace what used to be random picsum.photos stock photos captioned
 * with a chapter name (see git history on the Resources page). Every diagram
 * here is drawn to actually depict its concept - no stand-in photography -
 * and uses currentColor / theme tokens so it adapts to light and dark mode
 * without a separate asset per theme.
 *
 * Keyed by the exact `concept.title` string in src/lib/data/theory.ts. Not
 * every concept has one; this is a deliberately small, high-quality set
 * rather than a placeholder for all of them.
 */

import type { SVGProps } from 'react';

function Diagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 320 200"
      className="h-auto w-full"
      role="img"
      {...props}
    />
  );
}

const axisProps = { stroke: 'currentColor', strokeOpacity: 0.35, strokeWidth: 1 };
const lineProps = { stroke: 'currentColor', strokeWidth: 2, fill: 'none' };

function ProjectileMotionDiagram() {
  return (
    <Diagram aria-label="A projectile launched at an angle, tracing a parabolic path, with the launch velocity split into horizontal and vertical components">
      <line x1={20} y1={160} x2={300} y2={160} {...axisProps} />
      <path d="M 40 160 Q 160 20 280 160" {...lineProps} className="stroke-primary" />
      {/* launch velocity vector + components */}
      <line x1={40} y1={160} x2={110} y2={90} stroke="currentColor" strokeWidth={2} markerEnd="url(#arrow)" />
      <line x1={40} y1={160} x2={110} y2={160} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="3 3" />
      <line x1={110} y1={160} x2={110} y2={90} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="3 3" />
      <text x={68} y={175} fontSize={11} fill="currentColor" opacity={0.7}>v cosθ</text>
      <text x={116} y={128} fontSize={11} fill="currentColor" opacity={0.7}>v sinθ</text>
      <text x={45} y={100} fontSize={11} fill="currentColor" fontWeight={600}>v</text>
      {/* max height marker */}
      <line x1={160} y1={20} x2={160} y2={160} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1} strokeDasharray="2 3" />
      <text x={165} y={95} fontSize={11} fill="currentColor" opacity={0.7}>H</text>
      <text x={150} y={178} fontSize={11} fill="currentColor" opacity={0.7}>Range R</text>
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </Diagram>
  );
}

function SimplePendulumDiagram() {
  return (
    <Diagram aria-label="A simple pendulum displaced through a small angle from the vertical, with the restoring force shown">
      <line x1={160} y1={20} x2={230} y2={20} {...axisProps} />
      <line x1={90} y1={20} x2={230} y2={20} stroke="currentColor" strokeOpacity={0.5} strokeWidth={2} />
      <circle cx={160} cy={20} r={3} fill="currentColor" />
      <line x1={160} y1={20} x2={160} y2={165} stroke="currentColor" strokeOpacity={0.3} strokeWidth={1.5} strokeDasharray="3 3" />
      <line x1={160} y1={20} x2={205} y2={150} className="stroke-primary" strokeWidth={2} />
      <circle cx={205} cy={150} r={12} className="fill-primary/20 stroke-primary" strokeWidth={2} />
      <path d="M 175 55 A 100 100 0 0 1 190 60" fill="none" stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} />
      <text x={182} y={48} fontSize={12} fill="currentColor" opacity={0.8}>θ</text>
      <text x={175} y={185} fontSize={11} fill="currentColor" opacity={0.7}>L</text>
      <line x1={205} y1={150} x2={205} y2={180} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arrow2)" />
      <text x={210} y={182} fontSize={11} fill="currentColor" opacity={0.7}>mg</text>
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </Diagram>
  );
}

function WaveDiagram() {
  const points = Array.from({ length: 65 }, (_, i) => {
    const x = 20 + i * 4.3;
    const y = 100 - 45 * Math.sin((i / 64) * 4 * Math.PI);
    return `${x},${y}`;
  }).join(' ');
  return (
    <Diagram aria-label="A transverse wave, with amplitude and wavelength labelled">
      <line x1={10} y1={100} x2={300} y2={100} {...axisProps} />
      <polyline points={points} className="stroke-primary" strokeWidth={2} fill="none" />
      <line x1={20} y1={100} x2={20} y2={55} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} strokeDasharray="3 3" />
      <text x={25} y={75} fontSize={11} fill="currentColor" opacity={0.7}>A</text>
      <line x1={20} y1={40} x2={88} y2={40} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.5} />
      <text x={35} y={32} fontSize={11} fill="currentColor" opacity={0.7}>wavelength λ</text>
    </Diagram>
  );
}

function CapacitorDiagram() {
  return (
    <Diagram aria-label="A parallel plate capacitor with an electric field between the plates">
      <line x1={70} y1={50} x2={70} y2={150} className="stroke-primary" strokeWidth={5} strokeLinecap="round" />
      <line x1={250} y1={50} x2={250} y2={150} stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
      {[65, 90, 115, 140].map(y => (
        <line key={y} x1={80} y1={y} x2={240} y2={y} stroke="currentColor" strokeWidth={1.5} markerEnd="url(#arrow3)" strokeOpacity={0.7} />
      ))}
      <text x={55} y={40} fontSize={13} fill="currentColor" fontWeight={600} className="fill-primary">+Q</text>
      <text x={240} y={40} fontSize={13} fill="currentColor" fontWeight={600}>−Q</text>
      <line x1={70} y1={170} x2={250} y2={170} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1} />
      <text x={150} y={185} fontSize={11} fill="currentColor" opacity={0.7} textAnchor="middle">separation d</text>
      <defs>
        <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" fillOpacity={0.7} />
        </marker>
      </defs>
    </Diagram>
  );
}

function ElectricFieldDiagram() {
  const angles = Array.from({ length: 8 }, (_, i) => (i / 8) * 2 * Math.PI);
  return (
    <Diagram aria-label="Electric field lines radiating outward from a positive point charge">
      <circle cx={160} cy={100} r={10} className="fill-primary" />
      <text x={160} y={104} fontSize={11} fill="white" textAnchor="middle" fontWeight={700}>+</text>
      {angles.map((a, i) => {
        const x2 = 160 + 85 * Math.cos(a);
        const y2 = 100 + 85 * Math.sin(a);
        const x1 = 160 + 16 * Math.cos(a);
        const y1 = 100 + 16 * Math.sin(a);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.75} markerEnd="url(#arrow4)" />
        );
      })}
      <defs>
        <marker id="arrow4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" fillOpacity={0.75} />
        </marker>
      </defs>
    </Diagram>
  );
}

function MirrorFormulaDiagram() {
  return (
    <Diagram aria-label="Ray diagram for a concave mirror, showing an object beyond the centre of curvature forming a real, inverted image between the focus and the centre of curvature">
      <line x1={20} y1={100} x2={300} y2={100} {...axisProps} />
      <path d="M 260 30 Q 220 100 260 170" {...lineProps} className="stroke-foreground" strokeWidth={2.5} />
      {/* Pole, Focus, Centre of curvature markers */}
      <circle cx={244} cy={100} r={2} fill="currentColor" />
      <circle cx={190} cy={100} r={2} fill="currentColor" />
      <circle cx={140} cy={100} r={2} fill="currentColor" />
      <text x={240} y={115} fontSize={10} fill="currentColor" opacity={0.7}>P</text>
      <text x={186} y={115} fontSize={10} fill="currentColor" opacity={0.7}>F</text>
      <text x={133} y={115} fontSize={10} fill="currentColor" opacity={0.7}>C</text>
      {/* Object */}
      <line x1={70} y1={100} x2={70} y2={55} className="stroke-primary" strokeWidth={2.5} markerEnd="url(#arrow5)" />
      {/* Image (real, inverted, between F and C) */}
      <line x1={165} y1={100} x2={165} y2={132} stroke="currentColor" strokeWidth={2.5} markerEnd="url(#arrow5)" />
      {/* Rays: parallel to axis -> through F ; through C -> back parallel */}
      <line x1={70} y1={55} x2={244} y2={55} stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.3} strokeDasharray="2 3" />
      <path d="M 244 55 L 165 132" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.3} />
      <path d="M 70 55 L 140 100" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.3} />
      <path d="M 140 100 L 165 132" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.3} />
      <defs>
        <marker id="arrow5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
      </defs>
    </Diagram>
  );
}

function CarnotCycleDiagram() {
  return (
    <Diagram aria-label="Pressure-volume diagram of a Carnot cycle, a closed loop made of two isothermal and two adiabatic curves">
      <line x1={40} y1={170} x2={40} y2={20} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} markerEnd="url(#arrow6)" />
      <line x1={40} y1={170} x2={300} y2={170} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} markerEnd="url(#arrow6)" />
      <text x={16} y={30} fontSize={11} fill="currentColor" opacity={0.7}>P</text>
      <text x={290} y={185} fontSize={11} fill="currentColor" opacity={0.7}>V</text>
      <path d="M 70 50 Q 150 45 210 75" className="stroke-primary" strokeWidth={2} fill="none" />
      <path d="M 210 75 Q 250 100 240 150" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M 240 150 Q 170 165 110 140" stroke="currentColor" strokeWidth={2} fill="none" strokeOpacity={0.7} />
      <path d="M 110 140 Q 80 110 70 50" stroke="currentColor" strokeWidth={2} fill="none" />
      <text x={130} y={40} fontSize={10} fill="currentColor" opacity={0.7}>isothermal (T₁)</text>
      <text x={130} y={158} fontSize={10} fill="currentColor" opacity={0.7}>isothermal (T₂)</text>
      <path d="M 195 63 l 8 3 l -3 8" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <defs>
        <marker id="arrow6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" fillOpacity={0.6} />
        </marker>
      </defs>
    </Diagram>
  );
}

function LeChatelierDiagram() {
  return (
    <Diagram aria-label="Reactants and products in equilibrium, with an applied stress shifting the balance toward one side">
      <rect x={30} y={70} width={90} height={60} rx={8} className="fill-secondary stroke-border" strokeWidth={1.5} />
      <text x={75} y={105} fontSize={13} fill="currentColor" textAnchor="middle" fontWeight={600}>Reactants</text>
      <rect x={200} y={70} width={90} height={60} rx={8} className="fill-secondary stroke-border" strokeWidth={1.5} />
      <text x={245} y={105} fontSize={13} fill="currentColor" textAnchor="middle" fontWeight={600}>Products</text>
      <path d="M 122 90 L 196 90" stroke="currentColor" strokeWidth={2} markerEnd="url(#arrow7)" />
      <path d="M 196 110 L 122 110" stroke="currentColor" strokeWidth={2} markerEnd="url(#arrow7)" strokeOpacity={0.5} />
      <rect x={120} y={15} width={80} height={28} rx={14} className="fill-primary/15 stroke-primary" strokeWidth={1.5} />
      <text x={160} y={34} fontSize={11} className="fill-primary" textAnchor="middle" fontWeight={600}>added stress</text>
      <path d="M 160 43 L 160 60" className="stroke-primary" strokeWidth={2} markerEnd="url(#arrow8)" />
      <defs>
        <marker id="arrow7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
        </marker>
        <marker id="arrow8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="fill-primary" />
        </marker>
      </defs>
    </Diagram>
  );
}

function UnitCircleDiagram() {
  const angle = -50 * (Math.PI / 180);
  const cx = 130, cy = 100, r = 70;
  const px = cx + r * Math.cos(angle);
  const py = cy + r * Math.sin(angle);
  return (
    <Diagram aria-label="A right triangle inscribed in a unit circle, showing sine as the vertical side and cosine as the horizontal side">
      <line x1={cx - r - 15} y1={cy} x2={cx + r + 15} y2={cy} {...axisProps} />
      <line x1={cx} y1={cy - r - 15} x2={cx} y2={cy + r + 15} {...axisProps} />
      <circle cx={cx} cy={cy} r={r} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1.5} fill="none" />
      <line x1={cx} y1={cy} x2={px} y2={py} className="stroke-primary" strokeWidth={2.5} />
      <line x1={px} y1={py} x2={px} y2={cy} stroke="currentColor" strokeWidth={2} strokeDasharray="3 3" />
      <line x1={cx} y1={cy} x2={px} y2={cy} stroke="currentColor" strokeWidth={2} strokeDasharray="3 3" />
      <path d={`M ${cx + 20} ${cy} A 20 20 0 0 0 ${cx + 20 * Math.cos(angle)} ${cy + 20 * Math.sin(angle)}`} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={1.2} />
      <text x={cx + 24} y={cy - 8} fontSize={11} fill="currentColor" opacity={0.8}>θ</text>
      <text x={(px + cx) / 2 - 10} y={cy + 15} fontSize={11} fill="currentColor" opacity={0.75}>cosθ</text>
      <text x={px + 6} y={(py + cy) / 2} fontSize={11} fill="currentColor" opacity={0.75}>sinθ</text>
      <text x={px - 4} y={py - 8} fontSize={11} className="fill-primary" fontWeight={600}>1</text>
    </Diagram>
  );
}

function CellCycleDiagram() {
  const segs = [
    { label: 'G1', from: -90, to: 30, color: 'stroke-primary' },
    { label: 'S', from: 30, to: 150, color: 'stroke-foreground' },
    { label: 'G2', from: 150, to: 230, color: 'stroke-primary' },
    { label: 'M', from: 230, to: 270, color: 'stroke-destructive' },
  ];
  const cx = 160, cy = 100, r = 65;
  const toXY = (deg: number) => [cx + r * Math.cos((deg * Math.PI) / 180), cy + r * Math.sin((deg * Math.PI) / 180)];
  return (
    <Diagram aria-label="A circular diagram of the four phases of the cell cycle: G1, S, G2 and M, in sequence">
      {segs.map(seg => {
        const [x1, y1] = toXY(seg.from);
        const [x2, y2] = toXY(seg.to);
        const large = seg.to - seg.from > 180 ? 1 : 0;
        const [lx, ly] = toXY((seg.from + seg.to) / 2);
        return (
          <g key={seg.label}>
            <path d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`} fill="none" className={seg.color} strokeWidth={10} strokeLinecap="round" />
            <text x={lx} y={ly} fontSize={12} fill="currentColor" fontWeight={700} textAnchor="middle">{seg.label}</text>
          </g>
        );
      })}
      <text x={cx} y={cy + 4} fontSize={11} fill="currentColor" opacity={0.6} textAnchor="middle">interphase</text>
      <text x={cx} y={cy - 10} fontSize={11} fill="currentColor" opacity={0.6} textAnchor="middle">+ mitosis</text>
    </Diagram>
  );
}

function SarcomereDiagram() {
  const row = (y: number, gap: number, label: string) => (
    <g>
      <line x1={40} y1={y} x2={40} y2={y + 40} stroke="currentColor" strokeWidth={3} />
      <line x1={280} y1={y} x2={280} y2={y + 40} stroke="currentColor" strokeWidth={3} />
      <line x1={130} y1={y + 20} x2={190} y2={y + 20} className="stroke-primary" strokeWidth={7} strokeLinecap="round" />
      <line x1={40} y1={y + 20} x2={40 + gap} y2={y + 20} stroke="currentColor" strokeWidth={2.5} strokeOpacity={0.7} />
      <line x1={280} y1={y + 20} x2={280 - gap} y2={y + 20} stroke="currentColor" strokeWidth={2.5} strokeOpacity={0.7} />
      <text x={40} y={y - 4} fontSize={10} fill="currentColor" opacity={0.7}>{label}</text>
    </g>
  );
  return (
    <Diagram aria-label="A sarcomere before and after contraction: the actin filaments slide further over the myosin filament, shortening the sarcomere">
      {row(35, 110, 'Relaxed')}
      {row(120, 145, 'Contracted (Z-lines closer together)')}
    </Diagram>
  );
}

export const conceptDiagrams: Record<string, () => JSX.Element> = {
  'Projectile Motion': ProjectileMotionDiagram,
  'Simple Pendulum': SimplePendulumDiagram,
  'Wave Speed': WaveDiagram,
  'Energy Stored in a Capacitor': CapacitorDiagram,
  'Electric Field': ElectricFieldDiagram,
  'Mirror Formula': MirrorFormulaDiagram,
  'Carnot Engine Efficiency': CarnotCycleDiagram,
  "Le Chatelier's Principle": LeChatelierDiagram,
  'Fundamental Trigonometric Identities': UnitCircleDiagram,
  'Phases of the Cell Cycle': CellCycleDiagram,
  'Sliding Filament Theory of Muscle Contraction': SarcomereDiagram,
};
