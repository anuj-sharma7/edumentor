/**
 * Hand-drawn physics diagrams for study questions, keyed by DiagramKey
 * (see src/lib/data/study/types.ts). Same conventions as
 * src/components/ui/concept-diagrams.tsx: 320x200 viewBox, currentColor for
 * neutral strokes/text and the theme `primary` token for accents, so every
 * diagram works in light and dark mode. Each svg defines its own arrowhead
 * markers with a unique id prefix to avoid collisions when several diagrams
 * render on one page.
 */

import type { ReactNode, SVGProps } from 'react';

function Diagram(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" {...props} />;
}

const ax = { stroke: 'currentColor', strokeOpacity: 0.4, strokeWidth: 1 } as const;
const ln = { stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' } as const;
const dsh = { stroke: 'currentColor', strokeOpacity: 0.5, strokeWidth: 1, strokeDasharray: '3 3', fill: 'none' } as const;
const pr = { stroke: 'currentColor', strokeWidth: 2, fill: 'none', className: 'stroke-primary' } as const;

/** Arrowhead markers: `${id}` (currentColor) and `${id}-p` (primary). */
function Defs({ id, children }: { id: string; children?: ReactNode }) {
  const head = (suffix: string, cls?: string) => (
    <marker id={id + suffix} viewBox="0 0 8 8" markerWidth={8} markerHeight={8} refX={7} refY={4} orient="auto-start-reverse" markerUnits="userSpaceOnUse">
      <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" className={cls} />
    </marker>
  );
  return (
    <defs>
      {head('')}
      {head('-p', 'fill-primary')}
      {children}
    </defs>
  );
}

type ArrowProps = { x1: number; y1: number; x2: number; y2: number; m: string; p?: boolean; w?: number; dash?: boolean; o?: number; both?: boolean };
function Arrow({ x1, y1, x2, y2, m, p, w = 1.5, dash, o, both }: ArrowProps) {
  const url = `url(#${p ? `${m}-p` : m})`;
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={w} strokeOpacity={o} strokeDasharray={dash ? '4 3' : undefined} className={p ? 'stroke-primary' : undefined} markerEnd={url} markerStart={both ? url : undefined} />
  );
}

function APath({ d, m, p, w = 1.5, dash, o }: { d: string; m: string; p?: boolean; w?: number; dash?: boolean; o?: number }) {
  return (
    <path d={d} fill="none" stroke="currentColor" strokeWidth={w} strokeOpacity={o} strokeDasharray={dash ? '4 3' : undefined} className={p ? 'stroke-primary' : undefined} markerEnd={`url(#${p ? `${m}-p` : m})`} />
  );
}

type TProps = { x: number; y: number; children: ReactNode; s?: number; o?: number; a?: 'start' | 'middle' | 'end'; b?: boolean; p?: boolean };
function T({ x, y, children, s = 11, o = 0.85, a, b, p }: TProps) {
  return (
    <text x={x} y={y} fontSize={s} fill="currentColor" opacity={o} textAnchor={a} fontWeight={b ? 600 : undefined} className={p ? 'fill-primary' : undefined}>
      {children}
    </text>
  );
}

function Axes({ m, ox = 40, oy = 170, w = 260, h = 150, xl, yl }: { m: string; ox?: number; oy?: number; w?: number; h?: number; xl: ReactNode; yl: ReactNode }) {
  return (
    <g>
      <Arrow x1={ox} y1={oy} x2={ox + w} y2={oy} m={m} w={1} o={0.6} />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy - h} m={m} w={1} o={0.6} />
      <T x={ox + w} y={oy + 14} a="end" s={10}>{xl}</T>
      <T x={ox + 6} y={oy - h + 8} s={10}>{yl}</T>
    </g>
  );
}

/** Double-headed dimension arrow. */
function Dim({ x1, y1, x2, y2, m }: { x1: number; y1: number; x2: number; y2: number; m: string }) {
  return <Arrow x1={x1} y1={y1} x2={x2} y2={y2} m={m} w={1} o={0.7} both />;
}

/** Polyline path sampled from a parametric function. */
function fpath(f: (t: number) => [number, number], t0: number, t1: number, n = 60) {
  return Array.from({ length: n + 1 }, (_, i) => {
    const [x, y] = f(t0 + ((t1 - t0) * i) / n);
    return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
}

/** Resistor / spring zigzag between two points (zigzag occupies fraction s..e). */
function zig(x1: number, y1: number, x2: number, y2: number, a = 5, n = 6, s = 0.3, e = 0.7) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), px = -dy / L, py = dx / L;
  let d = `M${x1} ${y1} L${x1 + dx * s} ${y1 + dy * s}`;
  for (let i = 0; i < n; i++) {
    const t = s + ((e - s) * (i + 0.5)) / n, k = i % 2 ? -a : a;
    d += ` L${(x1 + dx * t + px * k).toFixed(1)} ${(y1 + dy * t + py * k).toFixed(1)}`;
  }
  return `${d} L${x1 + dx * e} ${y1 + dy * e} L${x2} ${y2}`;
}

function wavy(x1: number, y1: number, x2: number, y2: number, amp = 4, waves = 4) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), px = -dy / L, py = dx / L;
  return fpath((t) => {
    const o = amp * Math.sin(t * waves * 2 * Math.PI);
    return [x1 + dx * t + px * o, y1 + dy * t + py * o];
  }, 0, 1, 50);
}

/** Cell symbol: long (+) plate then short thick (−) plate, perpendicular to the wire. */
function Cell({ x, y, vertical }: { x: number; y: number; vertical?: boolean }) {
  return vertical ? (
    <g stroke="currentColor">
      <line x1={x - 12} y1={y} x2={x + 12} y2={y} strokeWidth={1.5} />
      <line x1={x - 6} y1={y + 7} x2={x + 6} y2={y + 7} strokeWidth={3.5} />
    </g>
  ) : (
    <g stroke="currentColor">
      <line x1={x} y1={y - 12} x2={x} y2={y + 12} strokeWidth={1.5} />
      <line x1={x + 7} y1={y - 6} x2={x + 7} y2={y + 6} strokeWidth={3.5} />
    </g>
  );
}

const Dot = ({ x, y, r = 2.5 }: { x: number; y: number; r?: number }) => <circle cx={x} cy={y} r={r} fill="currentColor" />;

/* ------------------------------------------------------------------ */
/* Mechanics                                                           */
/* ------------------------------------------------------------------ */

function ProjectileDiagram() {
  const m = 'ph-proj';
  return (
    <Diagram aria-label="Projectile launched with speed v at angle θ follows a parabola; the horizontal component v cosθ stays constant while the vertical component v sinθ falls to zero at the maximum height H; R is the horizontal range">
      <Defs id={m} />
      <line x1={20} y1={160} x2={300} y2={160} {...ax} />
      <path d="M 40 160 Q 160 -80 280 160" {...pr} />
      <Arrow x1={40} y1={160} x2={80} y2={80} m={m} w={2} />
      <Arrow x1={40} y1={160} x2={80} y2={160} m={m} o={0.6} />
      <Arrow x1={40} y1={160} x2={40} y2={80} m={m} o={0.6} />
      <path d="M 58 160 A 18 18 0 0 0 48 144" {...ln} strokeOpacity={0.6} strokeWidth={1} />
      <T x={60} y={152} s={10}>θ</T>
      <T x={86} y={84} b>v</T>
      <T x={84} y={157} s={10}>v cosθ</T>
      <T x={40} y={72} s={10} a="middle">v sinθ</T>
      <Arrow x1={160} y1={40} x2={200} y2={40} m={m} p />
      <T x={204} y={44} s={10}>v cosθ (at top, vᵧ = 0)</T>
      <line x1={160} y1={40} x2={160} y2={160} {...dsh} />
      <T x={166} y={105} s={10}>H = v²sin²θ / 2g</T>
      <Dim x1={40} y1={176} x2={280} y2={176} m={m} />
      <T x={160} y={192} s={10} a="middle">R = v² sin2θ / g</T>
    </Diagram>
  );
}

function RelativeVelocityRiverDiagram() {
  const m = 'ph-river';
  return (
    <Diagram aria-label="Boat crossing a river: boat velocity relative to water v_b points straight across, river velocity v_r points downstream, and the resultant velocity v carries the boat diagonally so it lands a drift distance downstream">
      <Defs id={m} />
      <rect x={0} y={40} width={320} height={130} className="fill-primary/10" />
      <line x1={0} y1={40} x2={320} y2={40} stroke="currentColor" strokeWidth={2} />
      <line x1={0} y1={170} x2={320} y2={170} stroke="currentColor" strokeWidth={2} />
      <Arrow x1={240} y1={70} x2={300} y2={70} m={m} o={0.5} />
      <Arrow x1={240} y1={140} x2={300} y2={140} m={m} o={0.5} />
      <T x={270} y={110} s={10} a="middle">river flow v_r</T>
      <Arrow x1={80} y1={170} x2={80} y2={80} m={m} w={2} />
      <Arrow x1={80} y1={80} x2={129} y2={80} m={m} w={2} />
      <Arrow x1={80} y1={170} x2={129} y2={80} m={m} p />
      <line x1={129} y1={80} x2={151} y2={40} {...pr} strokeDasharray="4 3" />
      <T x={74} y={128} s={10} a="end">v_b</T>
      <T x={104} y={74} s={10} a="middle">v_r</T>
      <T x={114} y={134} s={11} p b>v</T>
      <Dim x1={40} y1={40} x2={40} y2={170} m={m} />
      <T x={34} y={108} a="end">d</T>
      <Dim x1={80} y1={30} x2={151} y2={30} m={m} />
      <T x={156} y={28} s={10}>drift = d·v_r / v_b</T>
      <T x={80} y={186} s={10} a="middle">A (start)</T>
      <T x={210} y={192} s={10} a="middle">time to cross t = d / v_b</T>
    </Diagram>
  );
}

function FreeBodyInclineDiagram() {
  const m = 'ph-fbi';
  return (
    <Diagram aria-label="Block on a rough incline of angle θ: weight mg acts vertically down and resolves into mg sinθ down the slope and mg cosθ into the slope; normal reaction N is perpendicular to the surface and friction f acts up the slope">
      <Defs id={m} />
      <path d="M 30 170 L 290 170 L 290 60 Z" {...ln} strokeOpacity={0.7} />
      <path d="M 60 170 A 30 30 0 0 0 57.6 158.3" {...ln} strokeWidth={1} />
      <T x={64} y={165} s={10}>θ</T>
      <g transform="translate(180 106.5) rotate(-22.9)">
        <rect x={-18} y={-24} width={36} height={24} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
        <Arrow x1={0} y1={-12} x2={0} y2={-60} m={m} p />
        <Arrow x1={18} y1={-2} x2={55} y2={-2} m={m} p />
        <Arrow x1={0} y1={-12} x2={-23.3} y2={-12} m={m} dash o={0.7} />
        <Arrow x1={0} y1={-12} x2={0} y2={43.3} m={m} dash o={0.7} />
      </g>
      <Arrow x1={175.3} y1={95.4} x2={175.3} y2={155} m={m} w={2} />
      <T x={146} y={50} b p>N</T>
      <T x={233} y={80} b p>f</T>
      <T x={180} y={162} s={10}>mg</T>
      <T x={100} y={112} s={10}>mg sinθ</T>
      <T x={202} y={148} s={10}>mg cosθ</T>
      <T x={10} y={20} s={10}>N = mg cosθ</T>
      <T x={10} y={34} s={10}>ma = mg sinθ − f</T>
    </Diagram>
  );
}

function AtwoodMachineDiagram() {
  const m = 'ph-atw';
  return (
    <Diagram aria-label="Atwood machine: two masses m1 and m2 hang from a light string over a frictionless pulley; tension T acts up on each, weights act down, and the heavier mass m2 accelerates down with a = (m2 − m1)g/(m1 + m2)">
      <Defs id={m} />
      <line x1={120} y1={12} x2={200} y2={12} stroke="currentColor" strokeWidth={2} />
      <line x1={160} y1={12} x2={160} y2={40} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={160} cy={40} r={20} {...ln} />
      <Dot x={160} y={40} />
      <line x1={140} y1={40} x2={140} y2={110} stroke="currentColor" />
      <line x1={180} y1={40} x2={180} y2={90} stroke="currentColor" />
      <rect x={128} y={110} width={24} height={24} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <rect x={166} y={90} width={28} height={34} className="fill-primary/30 stroke-primary" strokeWidth={1.5} />
      <T x={140} y={126} s={9} a="middle">m₁</T>
      <T x={180} y={111} s={9} a="middle">m₂</T>
      <Arrow x1={140} y1={110} x2={140} y2={82} m={m} p />
      <Arrow x1={180} y1={90} x2={180} y2={62} m={m} p />
      <T x={133} y={94} s={10} a="end" p>T</T>
      <T x={186} y={74} s={10} p>T</T>
      <Arrow x1={140} y1={134} x2={140} y2={165} m={m} />
      <Arrow x1={180} y1={124} x2={180} y2={172} m={m} />
      <T x={134} y={162} s={10} a="end">m₁g</T>
      <T x={186} y={168} s={10}>m₂g</T>
      <Arrow x1={110} y1={135} x2={110} y2={105} m={m} o={0.7} />
      <Arrow x1={215} y1={95} x2={215} y2={125} m={m} o={0.7} />
      <T x={104} y={124} s={10} a="end">a</T>
      <T x={220} y={114} s={10}>a</T>
      <T x={10} y={30} s={10}>T = 2m₁m₂g/(m₁+m₂)</T>
      <T x={160} y={192} s={10} a="middle">a = (m₂ − m₁)g / (m₁ + m₂),  m₂ &gt; m₁</T>
    </Diagram>
  );
}

function CircularMotionDiagram() {
  const m = 'ph-circ';
  return (
    <Diagram aria-label="Uniform circular motion: velocity v is tangent to the circle and centripetal acceleration a_c = v²/r points toward the centre">
      <Defs id={m} />
      <circle cx={140} cy={100} r={70} {...ln} strokeOpacity={0.6} />
      <Dot x={140} y={100} />
      <line x1={140} y1={100} x2={189.5} y2={50.5} {...dsh} />
      <circle cx={189.5} cy={50.5} r={6} className="fill-primary" />
      <Arrow x1={189.5} y1={50.5} x2={157.7} y2={18.7} m={m} w={2} />
      <Arrow x1={189.5} y1={50.5} x2={168.3} y2={71.7} m={m} p />
      <APath d="M 110.4 163.4 A 70 70 0 0 0 152.2 168.9" m={m} p />
      <T x={152} y={70} s={10}>r</T>
      <T x={150} y={18} a="end" b>v</T>
      <T x={180} y={84} s={10} p>a_c</T>
      <T x={225} y={100} s={11}>a_c = v²/r = ω²r</T>
      <T x={225} y={118} s={11}>F = mv²/r</T>
      <T x={225} y={136} s={10} o={0.7}>(towards centre)</T>
      <T x={225} y={154} s={10} o={0.7}>v = ωr, tangential</T>
    </Diagram>
  );
}

function VerticalCircleDiagram() {
  const m = 'ph-vc';
  return (
    <Diagram aria-label="Motion in a vertical circle: at the top both tension and weight point down toward the centre, at the bottom tension points up and weight down; minimum speeds are √(gr) at the top and √(5gr) at the bottom">
      <Defs id={m} />
      <circle cx={130} cy={100} r={65} {...ln} strokeOpacity={0.6} />
      <Dot x={130} y={100} />
      <line x1={130} y1={100} x2={65} y2={100} {...dsh} />
      <T x={97} y={95} s={10} a="middle">r</T>
      <circle cx={130} cy={35} r={5} className="fill-primary" />
      <circle cx={130} cy={165} r={5} className="fill-primary" />
      <Arrow x1={124} y1={38} x2={124} y2={62} m={m} p />
      <Arrow x1={136} y1={38} x2={136} y2={64} m={m} />
      <T x={118} y={58} s={10} a="end" p>T</T>
      <T x={141} y={62} s={10}>mg</T>
      <Arrow x1={130} y1={35} x2={170} y2={35} m={m} o={0.7} />
      <T x={174} y={38} s={10}>v</T>
      <Arrow x1={130} y1={162} x2={130} y2={126} m={m} p />
      <Arrow x1={130} y1={170} x2={130} y2={196} m={m} />
      <T x={124} y={140} s={10} a="end" p>T</T>
      <T x={136} y={192} s={10}>mg</T>
      <Arrow x1={130} y1={165} x2={90} y2={165} m={m} o={0.7} />
      <T x={86} y={168} s={10} a="end">v</T>
      <T x={210} y={36} s={10}>Top: T + mg = mv²/r</T>
      <T x={210} y={52} s={10} p>v_top ≥ √(gr)</T>
      <T x={210} y={150} s={10}>Bottom: T − mg = mv²/r</T>
      <T x={210} y={166} s={10} p>v_bottom ≥ √(5gr)</T>
    </Diagram>
  );
}

function Collision1dDiagram() {
  const m = 'ph-col';
  return (
    <Diagram aria-label="One-dimensional collision: masses m1 and m2 with initial velocities u1 and u2 collide and leave with v1 and v2; total momentum is conserved and the coefficient of restitution is e = (v2 − v1)/(u1 − u2)">
      <Defs id={m} />
      <T x={10} y={24} s={10} b>Before</T>
      <line x1={10} y1={73} x2={310} y2={73} {...ax} />
      <circle cx={70} cy={55} r={16} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <circle cx={200} cy={59} r={12} className="fill-primary/10" stroke="currentColor" />
      <T x={70} y={59} s={10} a="middle">m₁</T>
      <T x={200} y={63} s={9} a="middle">m₂</T>
      <Arrow x1={90} y1={55} x2={140} y2={55} m={m} p />
      <Arrow x1={215} y1={59} x2={235} y2={59} m={m} />
      <T x={115} y={47} s={10} a="middle">u₁</T>
      <T x={225} y={51} s={10} a="middle">u₂</T>
      <T x={10} y={98} s={10} b>After</T>
      <line x1={10} y1={143} x2={310} y2={143} {...ax} />
      <circle cx={110} cy={125} r={16} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <circle cx={230} cy={129} r={12} className="fill-primary/10" stroke="currentColor" />
      <T x={110} y={129} s={10} a="middle">m₁</T>
      <T x={230} y={133} s={9} a="middle">m₂</T>
      <Arrow x1={130} y1={125} x2={148} y2={125} m={m} p />
      <Arrow x1={245} y1={129} x2={295} y2={129} m={m} />
      <T x={140} y={117} s={10} a="middle">v₁</T>
      <T x={270} y={121} s={10} a="middle">v₂</T>
      <T x={160} y={168} s={11} a="middle">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</T>
      <T x={160} y={188} s={10} a="middle">e = (v₂ − v₁)/(u₁ − u₂);  e = 1 elastic, e = 0 perfectly inelastic</T>
    </Diagram>
  );
}

function CentreOfMassDiagram() {
  const m = 'ph-com';
  return (
    <Diagram aria-label="Centre of mass of two particles lies on the line joining them, closer to the heavier mass, such that m1 r1 = m2 r2">
      <Defs id={m} />
      <line x1={60} y1={110} x2={260} y2={110} stroke="currentColor" strokeWidth={3} strokeOpacity={0.6} />
      <circle cx={60} cy={110} r={12} className="fill-primary/20" stroke="currentColor" />
      <circle cx={260} cy={110} r={18} className="fill-primary/40" stroke="currentColor" />
      <T x={60} y={114} s={9} a="middle">m₁</T>
      <T x={260} y={114} s={10} a="middle">m₂</T>
      <path d="M 193.3 113 L 181 133 L 205.6 133 Z" className="fill-primary/30 stroke-primary" strokeWidth={1.5} />
      <circle cx={193.3} cy={110} r={4} className="fill-primary" />
      <T x={193.3} y={100} s={10} a="middle" p b>CM</T>
      <Dim x1={60} y1={80} x2={193.3} y2={80} m={m} />
      <Dim x1={193.3} y1={80} x2={260} y2={80} m={m} />
      <T x={126} y={74} s={10} a="middle">r₁</T>
      <T x={226} y={74} s={10} a="middle">r₂</T>
      <T x={160} y={30} s={10} a="middle">m₂ = 2m₁ ⇒ CM is 2/3 of the way to m₂</T>
      <T x={160} y={160} s={11} a="middle">m₁r₁ = m₂r₂</T>
      <T x={160} y={182} s={11} a="middle">x_cm = (m₁x₁ + m₂x₂) / (m₁ + m₂)</T>
    </Diagram>
  );
}

function RollingMotionDiagram() {
  const m = 'ph-roll';
  return (
    <Diagram aria-label="Rolling without slipping: the contact point is momentarily at rest, the centre moves with v and the top point with 2v; velocities grow linearly with distance from the contact point">
      <Defs id={m} />
      <line x1={20} y1={165} x2={300} y2={165} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.6} />
      <circle cx={150} cy={110} r={55} className="fill-primary/10" stroke="currentColor" strokeWidth={1.5} />
      <Dot x={150} y={110} />
      <line x1={150} y1={165} x2={240} y2={55} {...dsh} />
      <Arrow x1={150} y1={110} x2={195} y2={110} m={m} p />
      <Arrow x1={150} y1={55} x2={240} y2={55} m={m} p />
      <APath d="M 176 125 A 30 30 0 0 1 124 125" m={m} o={0.7} />
      <T x={150} y={132} s={10} a="middle">ω</T>
      <T x={199} y={114} s={11} b>v</T>
      <T x={244} y={59} s={11} b>2v</T>
      <circle cx={150} cy={165} r={3.5} className="fill-primary" />
      <T x={156} y={182} s={10}>P: v = 0 (contact)</T>
      <T x={215} y={130} s={10}>v_cm = ωR</T>
      <T x={200} y={148} s={10}>KE = ½mv²(1 + k²/R²)</T>
    </Diagram>
  );
}

function MomentOfInertiaDiagram() {
  const m = 'ph-moi';
  return (
    <Diagram aria-label="Moment of inertia of a uniform rod of mass M and length L: ML²/12 about an axis through its centre, ML²/3 about a parallel axis through one end, related by the parallel axis theorem">
      <Defs id={m} />
      <line x1={60} y1={55} x2={260} y2={55} stroke="currentColor" strokeWidth={6} strokeOpacity={0.5} strokeLinecap="round" />
      <line x1={160} y1={22} x2={160} y2={88} {...pr} strokeDasharray="5 3" />
      <APath d="M 148 30 A 12 4 0 1 0 172 30" m={m} p w={1.2} />
      <T x={160} y={104} s={10} a="middle">axis through centre: I = ML²/12</T>
      <line x1={60} y1={140} x2={260} y2={140} stroke="currentColor" strokeWidth={6} strokeOpacity={0.5} strokeLinecap="round" />
      <line x1={60} y1={112} x2={60} y2={170} {...pr} strokeDasharray="5 3" />
      <line x1={160} y1={130} x2={160} y2={150} {...dsh} />
      <Dim x1={60} y1={124} x2={160} y2={124} m={m} />
      <T x={110} y={120} s={10} a="middle">d = L/2</T>
      <T x={270} y={144} s={10}>L, M</T>
      <T x={160} y={168} s={10} a="middle">axis through end: I = ML²/3</T>
      <T x={160} y={190} s={11} a="middle" p>I = I_cm + Md² = ML²/12 + M(L/2)²</T>
    </Diagram>
  );
}

function SatelliteOrbitDiagram() {
  const m = 'ph-sat';
  return (
    <Diagram aria-label="Satellite in circular orbit of radius r = R + h around Earth of mass M: gravity provides the centripetal force, orbital speed v0 = √(GM/r), period T = 2π√(r³/GM)">
      <Defs id={m} />
      <circle cx={120} cy={105} r={75} {...ln} strokeOpacity={0.45} strokeDasharray="4 3" />
      <circle cx={120} cy={105} r={32} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <T x={120} y={109} s={11} a="middle">M</T>
      <line x1={120} y1={105} x2={195} y2={105} {...dsh} />
      <rect x={190} y={100} width={10} height={10} className="fill-primary" />
      <Arrow x1={195} y1={100} x2={195} y2={50} m={m} p />
      <Arrow x1={190} y1={98} x2={160} y2={98} m={m} />
      <T x={201} y={60} b p>v₀</T>
      <T x={170} y={92} s={10}>F</T>
      <T x={136} y={120} s={10} a="middle">R</T>
      <T x={173} y={120} s={10} a="middle">h</T>
      <T x={215} y={40} s={11}>v₀ = √(GM/r)</T>
      <T x={215} y={60} s={11}>T = 2π√(r³/GM)</T>
      <T x={215} y={80} s={11}>r = R + h</T>
      <T x={215} y={150} s={10} o={0.7}>GMm/r² = mv₀²/r</T>
      <T x={215} y={166} s={10} o={0.7}>v_esc = √2 · v₀ (surface)</T>
    </Diagram>
  );
}

function StressStrainCurveDiagram() {
  const m = 'ph-ss';
  return (
    <Diagram aria-label="Stress-strain curve of a ductile metal: linear up to the proportional limit A, elastic limit B, yield point C, ultimate tensile strength D at the maximum, and fracture at E">
      <Defs id={m} />
      <Axes m={m} xl="strain" yl="stress" />
      <path d="M 40 170 L 95 90 L 103 80 C 110 72 116 76 122 80 C 130 84 134 80 140 76 C 170 50 200 38 222 38 C 245 38 262 52 272 66" {...pr} />
      <path d="M 268 62 L 276 70 M 276 62 L 268 70" stroke="currentColor" strokeWidth={1.5} />
      {[[95, 90], [103, 80], [122, 80], [222, 38]].map(([x, y]) => <Dot key={x} x={x} y={y} r={2.5} />)}
      <T x={88} y={94} s={10} a="end">A</T>
      <T x={98} y={74} s={10} a="end">B</T>
      <T x={122} y={94} s={10} a="middle">C</T>
      <T x={222} y={30} s={10} a="middle">D</T>
      <T x={280} y={74} s={10}>E</T>
      <T x={70} y={140} s={9}>slope = Y (Hooke)</T>
      <T x={160} y={110} s={9}>A: proportional limit</T>
      <T x={160} y={122} s={9}>B: elastic limit</T>
      <T x={160} y={134} s={9}>C: yield point</T>
      <T x={160} y={146} s={9}>D: ultimate tensile strength</T>
      <T x={160} y={158} s={9}>E: fracture</T>
    </Diagram>
  );
}

function BernoulliPipeDiagram() {
  const m = 'ph-bern';
  return (
    <Diagram aria-label="Venturi pipe: fluid speeds up in the narrow section (A1v1 = A2v2) and its pressure drops, shown by a lower liquid column in the manometer tube above the narrow part, consistent with Bernoulli's equation">
      <Defs id={m} />
      <path d="M 20 50 L 120 50 C 150 50 150 80 180 80 L 300 80" {...ln} />
      <path d="M 20 130 L 120 130 C 150 130 150 100 180 100 L 300 100" {...ln} />
      <line x1={64} y1={50} x2={64} y2={8} stroke="currentColor" />
      <line x1={76} y1={50} x2={76} y2={8} stroke="currentColor" />
      <rect x={64} y={18} width={12} height={32} className="fill-primary/40" />
      <line x1={234} y1={80} x2={234} y2={8} stroke="currentColor" />
      <line x1={246} y1={80} x2={246} y2={8} stroke="currentColor" />
      <rect x={234} y={52} width={12} height={28} className="fill-primary/40" />
      <line x1={76} y1={18} x2={234} y2={18} {...dsh} />
      <Dim x1={252} y1={18} x2={252} y2={52} m={m} />
      <T x={258} y={40} s={10}>Δh</T>
      <Arrow x1={40} y1={90} x2={75} y2={90} m={m} p />
      <Arrow x1={200} y1={90} x2={290} y2={90} m={m} p />
      <T x={70} y={148} s={10} a="middle">A₁, v₁, P₁</T>
      <T x={240} y={118} s={10} a="middle">A₂, v₂, P₂</T>
      <T x={160} y={170} s={11} a="middle">P + ½ρv² + ρgh = constant</T>
      <T x={160} y={190} s={10} a="middle">A₁v₁ = A₂v₂ ⇒ v₂ &gt; v₁ and P₂ &lt; P₁</T>
    </Diagram>
  );
}

function CapillaryRiseDiagram() {
  const m = 'ph-cap';
  return (
    <Diagram aria-label="Capillary rise: water rises in narrow glass tubes with a concave meniscus; the narrower tube shows a greater rise since h = 2T cosθ/(rρg)">
      <Defs id={m} />
      <rect x={40} y={130} width={240} height={50} className="fill-primary/20" />
      <path d="M 40 110 L 40 180 L 280 180 L 280 110" {...ln} />
      <rect x={100} y={84} width={16} height={46} className="fill-primary/20" />
      <rect x={200} y={54} width={8} height={76} className="fill-primary/20" />
      <path d="M 100 40 L 100 165 M 116 40 L 116 165 M 200 40 L 200 165 M 208 40 L 208 165" stroke="currentColor" strokeWidth={1.2} fill="none" />
      <path d="M 100 80 Q 108 92 116 80" {...pr} strokeWidth={1.5} />
      <path d="M 200 50 Q 204 60 208 50" {...pr} strokeWidth={1.5} />
      <line x1={60} y1={130} x2={260} y2={130} {...dsh} />
      <Dim x1={88} y1={130} x2={88} y2={86} m={m} />
      <Dim x1={190} y1={130} x2={190} y2={56} m={m} />
      <T x={84} y={112} s={10} a="end">h₁</T>
      <T x={186} y={96} s={10} a="end">h₂</T>
      <T x={120} y={78} s={9}>θ (contact angle)</T>
      <T x={214} y={64} s={9}>narrower → higher</T>
      <T x={160} y={24} s={11} a="middle">h = 2T cosθ / (rρg)</T>
      <T x={160} y={196} s={9} a="middle" o={0.7}>water: θ &lt; 90°, concave meniscus, rises</T>
    </Diagram>
  );
}

function PvProcessesDiagram() {
  const m = 'ph-pv';
  const X = (v: number) => 40 + v * 62.5, Y = (p: number) => 170 - p * 30;
  return (
    <Diagram aria-label="P-V diagram from a common state A showing an isobaric (horizontal), isochoric (vertical), isothermal (PV = constant hyperbola) and a steeper adiabatic (PV^γ = constant) process">
      <Defs id={m} />
      <Axes m={m} xl="V" yl="P" />
      <Arrow x1={X(1)} y1={Y(4)} x2={X(3)} y2={Y(4)} m={m} />
      <Arrow x1={X(1)} y1={Y(4)} x2={X(1)} y2={Y(1)} m={m} />
      <APath d={fpath((v) => [X(v), Y(4 / v)], 1, 3.6)} m={m} p />
      <APath d={fpath((v) => [X(v), Y(4 * Math.pow(v, -1.4))], 1, 3.6)} m={m} p dash />
      <circle cx={X(1)} cy={Y(4)} r={3.5} className="fill-primary" />
      <T x={96} y={46} s={11} a="end" b>A</T>
      <T x={232} y={46} s={9}>isobaric</T>
      <T x={108} y={150} s={9}>isochoric</T>
      <T x={268} y={134} s={9}>isothermal</T>
      <T x={268} y={154} s={9}>adiabatic</T>
      <T x={130} y={22} s={10}>Adiabat steeper than isotherm (γ &gt; 1)</T>
      <T x={170} y={86} s={9} o={0.7}>PV = const</T>
      <T x={128} y={118} s={9} o={0.7}>PV^γ = const</T>
    </Diagram>
  );
}

function CarnotCycleDiagram() {
  const m = 'ph-carnot';
  const X = (v: number) => 40 + v * 65, Y = (p: number) => 170 - p * 33;
  const seg = (f: (v: number) => number, a: number, b: number) => fpath((v) => [X(v), Y(f(v))], a, b, 40);
  return (
    <Diagram aria-label="Carnot cycle on a P-V diagram: A to B isothermal expansion at T1 absorbing Q1, B to C adiabatic expansion, C to D isothermal compression at T2 rejecting Q2, D to A adiabatic compression; efficiency 1 − T2/T1">
      <Defs id={m} />
      <Axes m={m} xl="V" yl="P" />
      <APath d={seg((v) => 4 / v, 1, 2)} m={m} p />
      <APath d={seg((v) => 5.278 * Math.pow(v, -1.4), 2, 3.5)} m={m} />
      <APath d={seg((v) => 3.198 / v, 3.5, 1.75)} m={m} p />
      <APath d={seg((v) => 4 * Math.pow(v, -1.4), 1.75, 1)} m={m} />
      <T x={98} y={36} s={11} a="end" b>A</T>
      <T x={176} y={100} s={11} b>B</T>
      <T x={272} y={142} s={11} b>C</T>
      <T x={146} y={120} s={11} a="end" b>D</T>
      <Arrow x1={160} y1={55} x2={138} y2={72} m={m} p />
      <T x={162} y={52} s={10}>Q₁ in (isothermal T₁)</T>
      <Arrow x1={212} y1={132} x2={226} y2={152} m={m} p />
      <T x={230} y={162} s={10}>Q₂ out (T₂)</T>
      <T x={200} y={80} s={9} o={0.7}>adiabatic</T>
      <T x={48} y={190} s={11}>η = 1 − Q₂/Q₁ = 1 − T₂/T₁</T>
    </Diagram>
  );
}

/* ------------------------------------------------------------------ */
/* Oscillations & waves                                                */
/* ------------------------------------------------------------------ */

function ShmSpringDiagram() {
  const m = 'ph-shm';
  return (
    <Diagram aria-label="Spring-mass oscillator on a frictionless surface: displaced by x from equilibrium O, the block feels restoring force F = −kx toward O and oscillates between −A and +A with period 2π√(m/k)">
      <Defs id={m} />
      <line x1={30} y1={70} x2={30} y2={140} stroke="currentColor" strokeWidth={3} />
      <line x1={30} y1={140} x2={300} y2={140} stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.6} />
      <path d={zig(30, 115, 150, 115, 8, 10, 0.08, 0.92)} {...ln} />
      <rect x={150} y={92} width={40} height={48} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <T x={170} y={120} s={11} a="middle">m</T>
      <line x1={120} y1={55} x2={120} y2={140} {...dsh} />
      <line x1={90} y1={132} x2={90} y2={148} stroke="currentColor" strokeOpacity={0.6} />
      <line x1={150} y1={132} x2={150} y2={148} stroke="currentColor" strokeOpacity={0.6} />
      <T x={90} y={160} s={10} a="middle">−A</T>
      <T x={120} y={160} s={10} a="middle">O</T>
      <T x={150} y={160} s={10} a="middle">+A</T>
      <Dim x1={120} y1={62} x2={150} y2={62} m={m} />
      <T x={135} y={56} s={10} a="middle">x</T>
      <Arrow x1={188} y1={82} x2={155} y2={82} m={m} p w={2} />
      <T x={194} y={86} s={10} p>F = −kx</T>
      <T x={210} y={110} s={10}>a = −ω²x</T>
      <T x={210} y={126} s={10}>ω = √(k/m)</T>
      <T x={60} y={185} s={11}>T = 2π√(m/k),  x = A sin(ωt + φ)</T>
    </Diagram>
  );
}

function SimplePendulumDiagram() {
  const m = 'ph-pend';
  return (
    <Diagram aria-label="Simple pendulum of length L displaced by θ: tension T acts along the string, weight mg resolves into mg cosθ along the string and the restoring component mg sinθ along the arc; period 2π√(L/g)">
      <Defs id={m} />
      <line x1={110} y1={20} x2={210} y2={20} stroke="currentColor" strokeWidth={2} strokeOpacity={0.6} />
      <line x1={160} y1={20} x2={160} y2={170} {...dsh} />
      <path d="M 112 151.6 A 140 140 0 0 0 207.9 151.6" {...dsh} />
      <line x1={160} y1={20} x2={207.9} y2={151.6} stroke="currentColor" strokeWidth={1.5} />
      <path d="M 160 50 A 30 30 0 0 0 170.3 48.2" {...ln} strokeWidth={1} />
      <T x={164} y={62} s={10}>θ</T>
      <T x={190} y={84} s={10}>L</T>
      <circle cx={207.9} cy={151.6} r={9} className="fill-primary/30 stroke-primary" strokeWidth={1.5} />
      <Arrow x1={207.9} y1={151.6} x2={194.2} y2={114} m={m} p />
      <Arrow x1={207.9} y1={151.6} x2={207.9} y2={196} m={m} />
      <Arrow x1={207.9} y1={151.6} x2={193.4} y2={156.9} m={m} p dash />
      <Arrow x1={207.9} y1={151.6} x2={222.4} y2={191.4} m={m} dash o={0.6} />
      <T x={186} y={112} s={10} a="end" p>T</T>
      <T x={200} y={194} s={10} a="end">mg</T>
      <T x={190} y={172} s={9} a="end" p>mg sinθ</T>
      <T x={226} y={182} s={9}>mg cosθ</T>
      <T x={14} y={50} s={11}>T = 2π√(L/g)</T>
      <T x={14} y={68} s={9} o={0.7}>(small θ: sinθ ≈ θ)</T>
    </Diagram>
  );
}

function TransverseWaveDiagram() {
  const m = 'ph-tw';
  const y = (x: number) => 100 - 40 * Math.sin((2 * Math.PI * (x - 30)) / 120);
  return (
    <Diagram aria-label="Transverse wave travelling right: wavelength λ between successive crests, amplitude A, particles oscillate perpendicular to the direction of propagation; v = fλ">
      <Defs id={m} />
      <line x1={20} y1={100} x2={305} y2={100} {...ax} />
      <path d={fpath((x) => [x, y(x)], 30, 300, 90)} {...pr} />
      <line x1={60} y1={60} x2={60} y2={45} {...dsh} />
      <line x1={180} y1={60} x2={180} y2={45} {...dsh} />
      <Dim x1={60} y1={45} x2={180} y2={45} m={m} />
      <T x={120} y={40} s={12} a="middle" b>λ</T>
      <Dim x1={40} y1={100} x2={40} y2={60} m={m} />
      <line x1={40} y1={60} x2={60} y2={60} {...dsh} />
      <T x={34} y={84} s={11} a="end">A</T>
      <Arrow x1={90} y1={100} x2={90} y2={78} m={m} />
      <Arrow x1={150} y1={100} x2={150} y2={122} m={m} />
      <T x={92} y={124} s={9} o={0.7}>particle motion ⟂ v</T>
      <T x={120} y={154} s={10} a="middle">trough</T>
      <T x={60} y={54} s={9} a="middle" o={0.7}>crest</T>
      <Arrow x1={235} y1={180} x2={295} y2={180} m={m} p w={2} />
      <T x={228} y={184} s={10} a="end">wave velocity v</T>
      <T x={20} y={196} s={11}>v = fλ</T>
    </Diagram>
  );
}

function StandingWavesPipesDiagram() {
  const open = (s: number) => fpath((x) => [x, 55 + s * 20 * Math.cos((Math.PI * (x - 40)) / 240)], 40, 280);
  const closed = (s: number) => fpath((x) => [x, 145 + s * 20 * Math.sin((Math.PI * (x - 40)) / 480)], 40, 280);
  return (
    <Diagram aria-label="Fundamental standing wave in pipes: open pipe has displacement antinodes at both ends and a node in the middle (λ = 2L, all harmonics); closed pipe has a node at the closed end and an antinode at the open end (λ = 4L, odd harmonics only)">
      <T x={160} y={20} s={10} a="middle">Open pipe: λ = 2L, f₁ = v/2L (all harmonics)</T>
      <path d="M 40 30 L 280 30 M 40 80 L 280 80" stroke="currentColor" strokeWidth={2} />
      <path d={open(1)} {...pr} strokeWidth={1.5} />
      <path d={open(-1)} {...pr} strokeWidth={1.5} />
      <T x={40} y={94} s={10} a="middle" b>A</T>
      <T x={160} y={94} s={10} a="middle" b>N</T>
      <T x={280} y={94} s={10} a="middle" b>A</T>
      <T x={160} y={113} s={10} a="middle">Closed pipe: λ = 4L, f₁ = v/4L (odd harmonics)</T>
      <path d="M 40 120 L 280 120 M 40 170 L 280 170" stroke="currentColor" strokeWidth={2} />
      <line x1={40} y1={120} x2={40} y2={170} stroke="currentColor" strokeWidth={5} />
      <path d={closed(1)} {...pr} strokeWidth={1.5} />
      <path d={closed(-1)} {...pr} strokeWidth={1.5} />
      <T x={40} y={186} s={10} a="middle" b>N</T>
      <T x={280} y={186} s={10} a="middle" b>A</T>
      <T x={160} y={194} s={9} a="middle" o={0.7}>N = displacement node, A = antinode</T>
    </Diagram>
  );
}

function DopplerEffectDiagram() {
  const m = 'ph-dop';
  return (
    <Diagram aria-label="Doppler effect: wavefronts from a source moving right are bunched in front (shorter wavelength, higher frequency heard by observer A) and spread out behind (longer wavelength, lower frequency heard by observer B)">
      <Defs id={m} />
      {[1, 2, 3, 4].map((i) => (
        <circle key={i} cx={200 - 10 * i} cy={100} r={20 * i} {...ln} strokeOpacity={0.6} strokeWidth={1.2} />
      ))}
      <circle cx={200} cy={100} r={5} className="fill-primary" />
      <Arrow x1={205} y1={100} x2={232} y2={100} m={m} p w={2} />
      <T x={214} y={94} s={10} p>v_s</T>
      <circle cx={280} cy={100} r={6} stroke="currentColor" fill="none" strokeWidth={1.5} />
      <T x={280} y={88} s={11} a="middle" b>A</T>
      <circle cx={40} cy={100} r={6} stroke="currentColor" fill="none" strokeWidth={1.5} />
      <T x={40} y={88} s={11} a="middle" b>B</T>
      <T x={160} y={12} s={9} a="middle">B (behind): λ longer, f′ = f·v/(v + v_s) lower</T>
      <T x={160} y={194} s={9} a="middle">A (ahead): λ shorter, f′ = f·v/(v − v_s) higher</T>
    </Diagram>
  );
}

function HeatTransferDiagram() {
  const m = 'ph-heat';
  return (
    <Diagram aria-label="Three modes of heat transfer: conduction along a rod from hot to cold end, convection currents rising from a heated fluid and sinking at the sides, and radiation travelling as electromagnetic waves without a medium">
      <Defs id={m} />
      <line x1={107} y1={10} x2={107} y2={195} {...dsh} />
      <line x1={213} y1={10} x2={213} y2={195} {...dsh} />
      <T x={53} y={22} s={10} a="middle" b>Conduction</T>
      <T x={160} y={22} s={10} a="middle" b>Convection</T>
      <T x={267} y={22} s={10} a="middle" b>Radiation</T>
      <rect x={15} y={85} width={80} height={20} className="fill-primary/20" stroke="currentColor" />
      <rect x={15} y={85} width={20} height={20} className="fill-primary/50" />
      <Arrow x1={30} y1={72} x2={85} y2={72} m={m} p />
      <T x={57} y={66} s={10} a="middle">Q</T>
      <T x={15} y={122} s={9}>T₁ hot</T>
      <T x={95} y={122} s={9} a="end">T₂ cold</T>
      <T x={53} y={160} s={8} a="middle">Q/t = kA(T₁ − T₂)/L</T>
      <path d="M 125 50 L 125 150 L 195 150 L 195 50" {...ln} />
      <Arrow x1={160} y1={140} x2={160} y2={72} m={m} p />
      <APath d="M 155 66 C 130 66 132 100 134 135" m={m} p />
      <APath d="M 165 66 C 190 66 188 100 186 135" m={m} p />
      <path d="M 150 178 Q 160 150 170 178 Z" className="fill-primary/40" />
      <T x={160} y={194} s={8} a="middle">warm fluid rises</T>
      <circle cx={240} cy={55} r={14} className="fill-primary/40 stroke-primary" />
      <APath d={wavy(250, 70, 282, 130, 3, 4)} m={m} p w={1.2} />
      <APath d={wavy(232, 72, 246, 135, 3, 4)} m={m} p w={1.2} />
      <rect x={240} y={140} width={50} height={12} stroke="currentColor" fill="none" />
      <T x={267} y={174} s={8} a="middle">no medium needed</T>
      <T x={267} y={190} s={9} a="middle">E = σT⁴</T>
    </Diagram>
  );
}

/* ------------------------------------------------------------------ */
/* Electrostatics                                                      */
/* ------------------------------------------------------------------ */

function ElectricFieldLinesDiagram() {
  const m = 'ph-efl';
  return (
    <Diagram aria-label="Electric field lines of a positive and a negative charge: lines start on +q and end on −q, never crossing; their density indicates field strength">
      <Defs id={m} />
      <Arrow x1={112} y1={100} x2={162} y2={100} m={m} p />
      <line x1={160} y1={100} x2={208} y2={100} {...pr} strokeWidth={1.5} />
      {[1, -1].map((s) => (
        <g key={s}>
          <APath d={`M 108 ${100 - 8 * s} Q 125 ${100 - 28 * s} 160 ${100 - 28 * s}`} m={m} p />
          <path d={`M 160 ${100 - 28 * s} Q 195 ${100 - 28 * s} 212 ${100 - 8 * s}`} {...pr} strokeWidth={1.5} />
          <APath d={`M 102 ${100 - 11 * s} Q 115 ${100 - 70 * s} 160 ${100 - 70 * s}`} m={m} p />
          <path d={`M 160 ${100 - 70 * s} Q 205 ${100 - 70 * s} 218 ${100 - 11 * s}`} {...pr} strokeWidth={1.5} />
          <Arrow x1={90} y1={100 - 8 * s} x2={55} y2={100 - 30 * s} m={m} p />
          <Arrow x1={265} y1={100 - 30 * s} x2={230} y2={100 - 8 * s} m={m} p />
        </g>
      ))}
      <Arrow x1={88} y1={100} x2={40} y2={100} m={m} p />
      <Arrow x1={280} y1={100} x2={232} y2={100} m={m} p />
      <circle cx={100} cy={100} r={12} className="fill-primary/20" stroke="currentColor" />
      <circle cx={220} cy={100} r={12} className="fill-primary/20" stroke="currentColor" />
      <T x={100} y={105} s={14} a="middle" b>+</T>
      <T x={220} y={105} s={14} a="middle" b>−</T>
      <T x={164} y={24} s={11} p b>E</T>
      <T x={160} y={192} s={10} a="middle">Lines start on +q, end on −q, never cross</T>
    </Diagram>
  );
}

function ElectricDipoleDiagram() {
  const m = 'ph-dip';
  return (
    <Diagram aria-label="Electric dipole of charges −q and +q separated by 2a; dipole moment p points from −q to +q; on the axis the field is 2kp/r³ along p, on the equatorial line it is kp/r³ opposite to p">
      <Defs id={m} />
      <line x1={30} y1={110} x2={300} y2={110} {...dsh} />
      <line x1={150} y1={40} x2={150} y2={110} {...dsh} />
      <circle cx={110} cy={110} r={10} className="fill-primary/20" stroke="currentColor" />
      <circle cx={190} cy={110} r={10} className="fill-primary/20" stroke="currentColor" />
      <T x={110} y={114} s={12} a="middle" b>−</T>
      <T x={190} y={114} s={12} a="middle" b>+</T>
      <T x={110} y={132} s={10} a="middle">−q</T>
      <T x={190} y={132} s={10} a="middle">+q</T>
      <Dim x1={110} y1={92} x2={190} y2={92} m={m} />
      <T x={150} y={88} s={10} a="middle">2a</T>
      <Arrow x1={120} y1={150} x2={180} y2={150} m={m} p w={2} />
      <T x={150} y={166} s={10} a="middle" p>p = q·2a (from − to +)</T>
      <Dot x={265} y={110} />
      <Arrow x1={265} y1={110} x2={305} y2={110} m={m} p w={2} />
      <T x={315} y={98} s={9} a="end">E = 2kp/r³ (along p)</T>
      <T x={230} y={124} s={10}>r</T>
      <Dot x={150} y={40} />
      <Arrow x1={150} y1={40} x2={110} y2={40} m={m} p w={2} />
      <T x={158} y={44} s={9}>E = kp/r³ (opposite p)</T>
      <T x={155} y={78} s={10}>r</T>
      <T x={10} y={192} s={10}>Torque in uniform field: τ = pE sinθ</T>
    </Diagram>
  );
}

function GaussSurfaceDiagram() {
  const m = 'ph-gauss';
  const dirs = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <Diagram aria-label="Gauss's law: a spherical Gaussian surface around charge +q; field lines cross outward along the area vectors dA and the total flux equals q_enc/ε0; a charge outside contributes zero net flux">
      <Defs id={m} />
      <circle cx={120} cy={100} r={60} {...pr} strokeDasharray="5 4" strokeWidth={1.5} className="stroke-primary fill-primary/5" />
      {dirs.map((a) => (
        <Arrow key={a} x1={120 + 14 * Math.cos(a)} y1={100 + 14 * Math.sin(a)} x2={120 + 82 * Math.cos(a)} y2={100 + 82 * Math.sin(a)} m={m} w={1.2} o={0.7} />
      ))}
      <circle cx={120} cy={100} r={9} className="fill-primary" />
      <T x={120} y={104} s={11} a="middle">+</T>
      <Arrow x1={175.4} y1={77} x2={196.6} y2={68.2} m={m} p w={2} />
      <T x={200} y={66} s={10} p>dA</T>
      <T x={150} y={170} s={9} o={0.8}>Gaussian surface</T>
      <circle cx={270} cy={55} r={7} stroke="currentColor" fill="none" />
      <T x={270} y={59} s={10} a="middle">+</T>
      <T x={270} y={80} s={9} a="middle">q′ outside:</T>
      <T x={270} y={92} s={9} a="middle">net flux 0</T>
      <T x={258} y={140} s={11} a="middle">∮ E·dA = q_enc / ε₀</T>
    </Diagram>
  );
}

function EquipotentialSurfacesDiagram() {
  const m = 'ph-eqp';
  const dirs = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <Diagram aria-label="Equipotential surfaces are everywhere perpendicular to field lines: concentric spheres around a point charge, and parallel planes in a uniform field; E points toward decreasing potential">
      <Defs id={m} />
      {[25, 45, 65].map((r) => <circle key={r} cx={80} cy={100} r={r} {...pr} strokeWidth={1.2} strokeDasharray="4 3" />)}
      {dirs.map((a) => (
        <Arrow key={a} x1={80 + 9 * Math.cos(a)} y1={100 + 9 * Math.sin(a)} x2={80 + 78 * Math.cos(a)} y2={100 + 78 * Math.sin(a)} m={m} w={1} o={0.7} />
      ))}
      <circle cx={80} cy={100} r={6} className="fill-primary" />
      <T x={104} y={92} s={8} p>V₁</T>
      <T x={122} y={84} s={8} p>V₂</T>
      <T x={141} y={76} s={8} p>V₃</T>
      <T x={80} y={196} s={9} a="middle">point charge: V₁ &gt; V₂ &gt; V₃</T>
      {[60, 100, 140].map((y) => <Arrow key={y} x1={185} y1={y} x2={305} y2={y} m={m} w={1.2} o={0.7} />)}
      {[215, 245, 275].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={40} x2={x} y2={160} {...pr} strokeWidth={1.2} strokeDasharray="4 3" />
          <T x={x} y={34} s={9} a="middle" p>{`V${'₁₂₃'[i]}`}</T>
        </g>
      ))}
      <T x={300} y={54} s={10} a="end">E</T>
      <T x={245} y={180} s={9} a="middle">uniform field: E ⟂ equipotentials,</T>
      <T x={245} y={192} s={9} a="middle">points to lower V;  E = −dV/dr</T>
    </Diagram>
  );
}

function ParallelPlateCapacitorDiagram() {
  const m = 'ph-ppc';
  return (
    <Diagram aria-label="Parallel plate capacitor: plates with charges +Q and −Q separated by d produce a uniform field E = σ/ε0 from the positive to the negative plate, with slight fringing at the edges; C = ε0A/d">
      <Defs id={m} />
      <line x1={120} y1={40} x2={120} y2={160} stroke="currentColor" strokeWidth={4} className="stroke-primary" />
      <line x1={200} y1={40} x2={200} y2={160} stroke="currentColor" strokeWidth={4} />
      {[50, 75, 100, 125, 150].map((y) => (
        <g key={y}>
          <T x={108} y={y + 4} s={11} a="middle" p b>+</T>
          <T x={212} y={y + 4} s={11} a="middle" b>−</T>
          {y !== 50 && y !== 150 ? <Arrow x1={125} y1={y} x2={195} y2={y} m={m} p /> : null}
        </g>
      ))}
      <APath d="M 123 42 Q 160 18 197 42" m={m} dash o={0.6} />
      <APath d="M 123 158 Q 160 182 197 158" m={m} dash o={0.6} />
      <T x={160} y={66} s={11} a="middle" p b>E</T>
      <Dim x1={120} y1={185} x2={200} y2={185} m={m} />
      <T x={160} y={198} s={10} a="middle">d</T>
      <T x={98} y={104} s={11} a="end">+Q</T>
      <T x={222} y={30} s={11}>−Q</T>
      <T x={232} y={90} s={11}>E = σ/ε₀</T>
      <T x={232} y={108} s={11}>V = Ed</T>
      <T x={232} y={126} s={11} p>C = ε₀A/d</T>
      <T x={10} y={30} s={9} o={0.7}>plate area A</T>
    </Diagram>
  );
}

/* ------------------------------------------------------------------ */
/* Current electricity                                                 */
/* ------------------------------------------------------------------ */

function RcChargingCurveDiagram() {
  const m = 'ph-rc';
  return (
    <Diagram aria-label="Charging of a capacitor through a resistor: charge q = q0(1 − e^(−t/RC)) rises exponentially toward the asymptote q0 = CE, reaching 63% of q0 at one time constant τ = RC">
      <Defs id={m} />
      <Axes m={m} xl="t" yl="q" />
      <line x1={40} y1={50} x2={300} y2={50} {...dsh} />
      <T x={300} y={44} s={10} a="end">q₀ = CE</T>
      <path d={fpath((t) => [40 + t * 50, 170 - 120 * (1 - Math.exp(-t))], 0, 5.1)} {...pr} />
      <line x1={90} y1={170} x2={90} y2={94.2} {...dsh} />
      <line x1={40} y1={94.2} x2={90} y2={94.2} {...dsh} />
      <circle cx={90} cy={94.2} r={3} className="fill-primary" />
      <T x={90} y={184} s={10} a="middle">τ = RC</T>
      <T x={36} y={98} s={9} a="end">0.63q₀</T>
      <T x={140} y={120} s={11}>q = q₀(1 − e^(−t/RC))</T>
      <T x={140} y={138} s={9} o={0.7}>current I = I₀e^(−t/RC) decays</T>
    </Diagram>
  );
}

function KirchhoffCircuitDiagram() {
  const m = 'ph-kirch';
  return (
    <Diagram aria-label="Two-loop circuit with cells E1 and E2 and resistors R1, R2, R3: at the junction the currents satisfy I3 = I1 + I2 (junction rule) and the sum of potential changes around each loop is zero (loop rule)">
      <Defs id={m} />
      <g {...ln}>
        <path d="M 40 90 L 40 40 L 70 40" />
        <path d={zig(70, 40, 160, 40)} />
        <path d={zig(160, 40, 250, 40)} />
        <path d="M 250 40 L 280 40 L 280 90" />
        <path d="M 40 97 L 40 160 L 280 160 L 280 97" />
        <path d={zig(160, 40, 160, 160)} />
      </g>
      <Cell x={40} y={90} vertical />
      <Cell x={280} y={90} vertical />
      <Dot x={160} y={40} r={3.5} />
      <Dot x={160} y={160} r={3.5} />
      <T x={22} y={98} s={10} a="end">E₁</T>
      <T x={298} y={98} s={10}>E₂</T>
      <T x={115} y={60} s={10} a="middle">R₁</T>
      <T x={205} y={60} s={10} a="middle">R₂</T>
      <T x={174} y={104} s={10}>R₃</T>
      <Arrow x1={50} y1={28} x2={80} y2={28} m={m} p />
      <T x={84} y={32} s={10} p>I₁</T>
      <Arrow x1={270} y1={28} x2={240} y2={28} m={m} p />
      <T x={236} y={32} s={10} a="end" p>I₂</T>
      <Arrow x1={148} y1={128} x2={148} y2={150} m={m} p />
      <T x={144} y={144} s={10} a="end" p>I₃</T>
      <APath d="M 85 115 A 18 18 0 1 1 100 125" m={m} o={0.5} />
      <T x={160} y={180} s={10} a="middle">Junction: I₃ = I₁ + I₂ (ΣI = 0)</T>
      <T x={160} y={195} s={10} a="middle">Loop: ΣΔV = 0, e.g. E₁ − I₁R₁ − I₃R₃ = 0</T>
    </Diagram>
  );
}

function WheatstoneBridgeDiagram() {
  const m = 'ph-wb';
  return (
    <Diagram aria-label="Wheatstone bridge: resistors P, Q, R, S arranged in a diamond with a galvanometer between B and D; at balance no current flows through G and P/Q = R/S">
      <Defs id={m} />
      <g {...ln}>
        <path d={zig(60, 95, 160, 30)} />
        <path d={zig(160, 30, 260, 95)} />
        <path d={zig(60, 95, 160, 160)} />
        <path d={zig(160, 160, 260, 95)} />
        <path d="M 160 30 L 160 83 M 160 107 L 160 160" />
        <path d="M 60 95 L 60 185 L 150 185 M 157 185 L 260 185 L 260 95" />
      </g>
      <circle cx={160} cy={95} r={12} {...ln} className="stroke-primary" strokeWidth={2} />
      <T x={160} y={99} s={11} a="middle" b p>G</T>
      <Cell x={150} y={185} />
      {[[60, 95, 'A'], [160, 30, 'B'], [260, 95, 'C'], [160, 160, 'D']].map(([x, y, l]) => (
        <g key={l as string}>
          <Dot x={x as number} y={y as number} r={3} />
          <T x={(x as number) + (l === 'A' ? -8 : l === 'C' ? 8 : 8)} y={(y as number) + (l === 'B' ? -4 : l === 'D' ? 14 : 4)} s={10} a={l === 'A' ? 'end' : 'start'} b>{l}</T>
        </g>
      ))}
      <T x={98} y={52} s={11} a="end">P</T>
      <T x={222} y={52} s={11}>Q</T>
      <T x={98} y={146} s={11} a="end">R</T>
      <T x={222} y={146} s={11}>S</T>
      <T x={10} y={20} s={11} p>Balance (I_g = 0):</T>
      <T x={10} y={36} s={11} p>P/Q = R/S</T>
    </Diagram>
  );
}

function PotentiometerDiagram() {
  const m = 'ph-pot';
  return (
    <Diagram aria-label="Potentiometer: a driver cell sends a steady current through a uniform wire AB; a cell of emf E with a galvanometer is connected from A to a sliding jockey J, and at the balance length l no current flows, so E = k·l where k is the potential gradient">
      <Defs id={m} />
      <g {...ln}>
        <path d="M 40 110 L 40 40 L 145 40 M 152 40 L 280 40 L 280 110" />
        <path d="M 40 110 L 40 170 L 95 170 M 102 170 L 200 170 L 200 152 M 200 128 L 200 116" />
      </g>
      <line x1={40} y1={110} x2={280} y2={110} {...pr} strokeWidth={3} />
      <Cell x={145} y={40} />
      <Cell x={95} y={170} />
      <circle cx={200} cy={140} r={12} {...ln} />
      <T x={200} y={144} s={10} a="middle" b>G</T>
      <path d="M 196 116 L 200 110 L 204 116" className="fill-primary" />
      <T x={150} y={26} s={10} a="middle">driver cell</T>
      <T x={98} y={192} s={10} a="middle">E (unknown)</T>
      <T x={34} y={114} s={11} a="end" b>A</T>
      <T x={286} y={114} s={11} b>B</T>
      <T x={208} y={124} s={10} b>J</T>
      <Dim x1={40} y1={96} x2={200} y2={96} m={m} />
      <T x={120} y={90} s={11} a="middle">l</T>
      <T x={222} y={160} s={11} p>E = k·l</T>
      <T x={222} y={176} s={9} o={0.7}>k = V_AB / L</T>
      <T x={222} y={190} s={9} o={0.7}>E₁/E₂ = l₁/l₂</T>
    </Diagram>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetism & EMI                                                     */
/* ------------------------------------------------------------------ */

function MagneticFieldLoopDiagram() {
  const m = 'ph-mfl';
  return (
    <Diagram aria-label="Magnetic field of a circular current loop seen in cross-section: current comes out of the page at the top and goes in at the bottom; field lines circle each wire and pass straight through the centre along the axis, where B = μ0I/2R">
      <Defs id={m} />
      <Arrow x1={30} y1={100} x2={295} y2={100} m={m} p w={2} />
      <T x={300} y={92} s={12} a="end" b p>B</T>
      {[18, 32].map((r) => (
        <g key={r}>
          <circle cx={160} cy={50} r={r} {...ln} strokeOpacity={0.6} strokeWidth={1.2} />
          <circle cx={160} cy={150} r={r} {...ln} strokeOpacity={0.6} strokeWidth={1.2} />
          <Arrow x1={156} y1={50 + r} x2={163} y2={50 + r} m={m} />
          <Arrow x1={164} y1={50 - r} x2={157} y2={50 - r} m={m} />
          <Arrow x1={156} y1={150 - r} x2={163} y2={150 - r} m={m} />
          <Arrow x1={164} y1={150 + r} x2={157} y2={150 + r} m={m} />
        </g>
      ))}
      <circle cx={160} cy={50} r={7} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <Dot x={160} y={50} r={2} />
      <circle cx={160} cy={150} r={7} className="fill-primary/20 stroke-primary" strokeWidth={1.5} />
      <path d="M 155 145 L 165 155 M 165 145 L 155 155" stroke="currentColor" strokeWidth={1.5} />
      <T x={200} y={46} s={10}>I out of page (⊙)</T>
      <T x={200} y={162} s={10}>I into page (⊗)</T>
      <T x={10} y={16} s={9} o={0.7}>loop seen edge-on</T>
      <T x={10} y={192} s={11}>B = μ₀I / 2R (at centre)</T>
    </Diagram>
  );
}

function ChargeInMagneticFieldDiagram() {
  const m = 'ph-cmf';
  const grid: [number, number][] = [];
  for (let x = 30; x <= 290; x += 40) for (let y = 25; y <= 185; y += 40) grid.push([x, y]);
  return (
    <Diagram aria-label="Positive charge moving with velocity v perpendicular to a uniform magnetic field into the page: the force F = qv × B is always perpendicular to v, so the charge moves anticlockwise in a circle of radius r = mv/qB">
      <Defs id={m} />
      {grid.map(([x, y]) => <T key={`${x}-${y}`} x={x} y={y + 4} s={11} a="middle" o={0.3}>×</T>)}
      <circle cx={160} cy={95} r={60} {...pr} strokeWidth={1.5} />
      <APath d="M 103.6 74.5 A 60 60 0 0 0 103.6 115.5" m={m} p />
      <Dot x={160} y={95} />
      <line x1={160} y1={95} x2={202.4} y2={52.6} {...dsh} />
      <T x={186} y={70} s={10}>r</T>
      <circle cx={160} cy={155} r={6} className="fill-primary" />
      <Arrow x1={166} y1={155} x2={205} y2={155} m={m} w={2} />
      <Arrow x1={160} y1={149} x2={160} y2={118} m={m} w={2} />
      <T x={208} y={159} s={11} b>v</T>
      <T x={166} y={130} s={11} b>F</T>
      <T x={228} y={36} s={11}>r = mv / qB</T>
      <T x={228} y={52} s={11}>T = 2πm / qB</T>
      <T x={10} y={196} s={9}>F = q(v × B), B into page (×)</T>
    </Diagram>
  );
}

function SolenoidFieldDiagram() {
  const m = 'ph-sol';
  const xs = Array.from({ length: 9 }, (_, i) => 80 + 20 * i);
  return (
    <Diagram aria-label="Long solenoid in cross-section: current comes out of the page along the top row and into the page along the bottom row; the field inside is uniform and axial, B = μ0nI, emerging from the N end and returning outside to the S end">
      <Defs id={m} />
      {xs.map((x) => (
        <g key={x}>
          <circle cx={x} cy={70} r={6} {...ln} strokeWidth={1.2} />
          <Dot x={x} y={70} r={1.8} />
          <circle cx={x} cy={130} r={6} {...ln} strokeWidth={1.2} />
          <path d={`M ${x - 4} 126 L ${x + 4} 134 M ${x + 4} 126 L ${x - 4} 134`} stroke="currentColor" strokeWidth={1.2} />
        </g>
      ))}
      {[88, 100, 112].map((y) => <Arrow key={y} x1={60} y1={y} x2={262} y2={y} m={m} p />)}
      <APath d="M 264 88 C 310 60 300 30 160 30" m={m} o={0.6} />
      <APath d="M 160 30 C 20 30 10 60 56 88" m={m} o={0.6} />
      <APath d="M 264 112 C 310 140 300 170 160 170" m={m} o={0.6} />
      <APath d="M 160 170 C 20 170 10 140 56 112" m={m} o={0.6} />
      <T x={276} y={104} s={12} b p>N</T>
      <T x={44} y={104} s={12} a="end" b>S</T>
      <T x={6} y={14} s={9} o={0.7}>⊙ current out, ⊗ current in</T>
      <T x={160} y={192} s={11} a="middle" p>B = μ₀nI (uniform inside)</T>
    </Diagram>
  );
}

function HysteresisLoopDiagram() {
  const m = 'ph-hys';
  return (
    <Diagram aria-label="B-H hysteresis loop of a ferromagnet: the dashed initial magnetisation curve reaches saturation; on reducing H to zero B retains the retentivity Br, and a reverse field equal to the coercivity Hc is needed to bring B to zero; loop area is the energy lost per cycle">
      <Defs id={m} />
      <Arrow x1={30} y1={100} x2={300} y2={100} m={m} w={1} o={0.6} />
      <Arrow x1={160} y1={190} x2={160} y2={12} m={m} w={1} o={0.6} />
      <T x={300} y={114} s={11} a="end">H</T>
      <T x={166} y={18} s={11}>B</T>
      <path d="M 160 100 C 180 95 200 60 260 35" {...ln} strokeDasharray="4 3" strokeOpacity={0.6} />
      <APath d="M 260 35 C 210 50 175 55 160 60 C 145 66 132 80 125 100 C 115 125 95 160 60 165" m={m} p />
      <APath d="M 60 165 C 110 150 145 145 160 140 C 175 134 188 120 195 100 C 205 75 225 40 260 35" m={m} p />
      <Dot x={160} y={60} />
      <Dot x={125} y={100} />
      <T x={166} y={56} s={10}>B_r (retentivity)</T>
      <T x={120} y={92} s={10} a="end">−H_c (coercivity)</T>
      <T x={264} y={32} s={9}>saturation</T>
      <T x={166} y={152} s={9}>−B_r</T>
      <T x={200} y={112} s={9}>+H_c</T>
      <T x={10} y={192} s={9} o={0.8}>loop area = energy lost per cycle</T>
    </Diagram>
  );
}

function FaradayInductionDiagram() {
  const m = 'ph-far';
  return (
    <Diagram aria-label="Faraday's law: a bar magnet pushed toward a coil changes the magnetic flux through it, inducing an emf ε = −dΦ/dt that deflects the galvanometer; by Lenz's law the near face of the coil becomes a north pole to oppose the approach">
      <Defs id={m} />
      <rect x={30} y={85} width={40} height={30} stroke="currentColor" fill="none" />
      <rect x={70} y={85} width={40} height={30} className="fill-primary/30 stroke-primary" />
      <T x={50} y={104} s={11} a="middle" b>S</T>
      <T x={90} y={104} s={11} a="middle" b p>N</T>
      <Arrow x1={50} y1={70} x2={105} y2={70} m={m} w={2} />
      <T x={78} y={62} s={11} a="middle" b>v</T>
      {[90, 100, 110].map((y, i) => <Arrow key={y} x1={114} y1={y} x2={148} y2={y + (i - 1) * 6} m={m} dash o={0.5} w={1} />)}
      {[160, 172, 184, 196, 208, 220].map((x) => <ellipse key={x} cx={x} cy={100} rx={6} ry={28} {...pr} strokeWidth={1.5} />)}
      <path d="M 160 128 L 160 165 L 178 165 M 202 165 L 220 165 L 220 128" {...ln} />
      <circle cx={190} cy={165} r={12} {...ln} />
      <line x1={190} y1={170} x2={196} y2={157} stroke="currentColor" strokeWidth={1.5} />
      <T x={190} y={190} s={10} a="middle">G deflects</T>
      <T x={150} y={64} s={10} a="middle" p>N (induced)</T>
      <T x={238} y={60} s={13}>ε = −dΦ/dt</T>
      <T x={238} y={80} s={9} o={0.7}>Φ = B·A·N</T>
      <T x={10} y={150} s={9}>Lenz: induced current</T>
      <T x={10} y={162} s={9}>opposes the change</T>
    </Diagram>
  );
}

function LrGrowthCurveDiagram() {
  const m = 'ph-lr';
  return (
    <Diagram aria-label="Current in an LR circuit: on switching on, I = I0(1 − e^(−Rt/L)) grows toward I0 = E/R, reaching 63% at τ = L/R; on switching off it decays as I0 e^(−Rt/L), falling to 37% at τ">
      <Defs id={m} />
      <Axes m={m} xl="t" yl="I" />
      <line x1={40} y1={50} x2={300} y2={50} {...dsh} />
      <T x={300} y={44} s={10} a="end">I₀ = E/R</T>
      <path d={fpath((t) => [40 + t * 50, 170 - 120 * (1 - Math.exp(-t))], 0, 5.1)} {...pr} />
      <path d={fpath((t) => [40 + t * 50, 170 - 120 * Math.exp(-t)], 0, 5.1)} {...pr} strokeDasharray="5 3" strokeWidth={1.5} />
      <line x1={90} y1={170} x2={90} y2={94.2} {...dsh} />
      <circle cx={90} cy={94.2} r={3} className="fill-primary" />
      <circle cx={90} cy={125.8} r={3} className="fill-primary" />
      <T x={36} y={98} s={8} a="end">0.63I₀</T>
      <T x={36} y={129} s={8} a="end">0.37I₀</T>
      <T x={90} y={184} s={10} a="middle">τ = L/R</T>
      <T x={170} y={76} s={10}>growth: I = I₀(1 − e^(−t/τ))</T>
      <T x={170} y={150} s={10}>decay: I = I₀e^(−t/τ)</T>
    </Diagram>
  );
}

function LcrPhasorDiagram() {
  const m = 'ph-lcr';
  return (
    <Diagram aria-label="Phasor diagram of a series LCR circuit: V_R is in phase with current I, V_L leads I by 90°, V_C lags by 90°; the resultant V makes phase angle φ with I where tanφ = (X_L − X_C)/R">
      <Defs id={m} />
      <Arrow x1={70} y1={120} x2={275} y2={120} m={m} w={1} o={0.5} />
      <T x={275} y={134} s={10} a="end">I (reference)</T>
      <Arrow x1={70} y1={120} x2={200} y2={120} m={m} w={2} />
      <Arrow x1={70} y1={120} x2={70} y2={30} m={m} w={2} />
      <Arrow x1={70} y1={120} x2={70} y2={170} m={m} w={2} />
      <line x1={200} y1={120} x2={200} y2={80} {...dsh} />
      <line x1={70} y1={80} x2={200} y2={80} {...dsh} />
      <Arrow x1={70} y1={120} x2={200} y2={80} m={m} p w={2.5} />
      <path d="M 100 120 A 30 30 0 0 0 98.7 111.2" {...ln} strokeWidth={1} />
      <T x={104} y={116} s={10}>φ</T>
      <T x={135} y={134} s={10} a="middle">V_R</T>
      <T x={62} y={40} s={10} a="end">V_L</T>
      <T x={62} y={170} s={10} a="end">V_C</T>
      <T x={204} y={104} s={9}>V_L − V_C</T>
      <T x={128} y={92} s={11} b p>V</T>
      <T x={150} y={28} s={10}>Z = √(R² + (X_L − X_C)²)</T>
      <T x={150} y={44} s={10}>tan φ = (X_L − X_C)/R</T>
      <T x={150} y={60} s={9} o={0.7}>V_L leads I by 90°, V_C lags by 90°</T>
    </Diagram>
  );
}

function ResonanceCurveDiagram() {
  const m = 'ph-res';
  const curve = (r: number) =>
    fpath((w) => [40 + (w - 0.2) * 113.6, 170 - 32 / Math.sqrt(r * r + (w - 1 / w) ** 2)], 0.2, 2.4, 120);
  return (
    <Diagram aria-label="Series LCR resonance: current amplitude peaks at the resonant frequency ω0 = 1/√(LC); a small resistance gives a tall sharp peak (high quality factor), a larger resistance a low broad peak">
      <Defs id={m} />
      <Axes m={m} xl="ω" yl="I" />
      <line x1={130.9} y1={170} x2={130.9} y2={40} {...dsh} />
      <path d={curve(0.25)} {...pr} />
      <path d={curve(0.7)} {...ln} strokeDasharray="5 3" />
      <T x={131} y={184} s={10} a="middle">ω₀ = 1/√(LC)</T>
      <line x1={205} y1={40} x2={222} y2={40} {...pr} />
      <T x={226} y={44} s={9}>small R (sharp)</T>
      <line x1={205} y1={56} x2={222} y2={56} {...ln} strokeDasharray="5 3" />
      <T x={226} y={60} s={9}>large R (broad)</T>
      <T x={205} y={80} s={10}>Q = ω₀L / R</T>
      <T x={205} y={96} s={9} o={0.7}>at ω₀: X_L = X_C, Z = R</T>
    </Diagram>
  );
}

function TransformerDiagram() {
  const m = 'ph-tf';
  return (
    <Diagram aria-label="Step-up transformer: primary coil with Np turns and secondary coil with more turns Ns are wound on a common laminated iron core carrying the alternating flux Φ; Vs/Vp = Ns/Np">
      <Defs id={m} />
      <path d="M 90 40 H 230 V 160 H 90 Z M 120 70 V 130 H 200 V 70 Z" fill="currentColor" fillOpacity={0.12} fillRule="evenodd" stroke="currentColor" strokeOpacity={0.5} />
      {[76, 88, 100, 112, 124].map((y) => <line key={y} x1={86} y1={y} x2={124} y2={y + 6} {...pr} strokeWidth={1.8} />)}
      {[74, 82, 90, 98, 106, 114, 122, 130].map((y) => <line key={y} x1={196} y1={y} x2={234} y2={y + 5} {...pr} strokeWidth={1.8} />)}
      <path d="M 86 76 L 40 76 L 40 88 M 40 112 L 40 124 L 86 124" {...ln} />
      <circle cx={40} cy={100} r={12} {...ln} />
      <T x={40} y={105} s={13} a="middle">~</T>
      <path d={`M 234 79 L 280 79 M 280 135 L 234 135`} {...ln} />
      <path d={zig(280, 79, 280, 135)} {...ln} />
      <T x={24} y={104} s={10} a="end">V_p</T>
      <T x={290} y={110} s={10}>V_s</T>
      <APath d="M 125 55 H 175" m={m} o={0.7} />
      <APath d="M 195 145 H 145" m={m} o={0.7} />
      <T x={180} y={59} s={10}>Φ</T>
      <T x={105} y={176} s={9} a="middle">primary N_p</T>
      <T x={215} y={176} s={9} a="middle">secondary N_s</T>
      <T x={160} y={26} s={11} a="middle" p>V_s/V_p = N_s/N_p = I_p/I_s</T>
      <T x={160} y={194} s={9} a="middle" o={0.7}>step-up: N_s &gt; N_p (works only with AC)</T>
    </Diagram>
  );
}

/* ------------------------------------------------------------------ */
/* EM waves & optics                                                   */
/* ------------------------------------------------------------------ */

function EmWaveDiagram() {
  const m = 'ph-emw';
  const s = (x: number) => Math.sin((2 * Math.PI * (x - 30)) / 130);
  return (
    <Diagram aria-label="Electromagnetic wave: oscillating electric field E and magnetic field B are in phase, perpendicular to each other and to the direction of propagation, travelling at c = E0/B0">
      <Defs id={m} />
      <Arrow x1={25} y1={110} x2={305} y2={110} m={m} w={1} o={0.6} />
      <T x={305} y={124} s={10} a="end">x (direction c)</T>
      <path d={fpath((x) => [x, 110 - 45 * s(x)], 30, 290, 100)} {...pr} />
      <path d={fpath((x) => [x - 17.5 * s(x), 110 + 15.75 * s(x)], 30, 290, 100)} {...ln} strokeOpacity={0.7} />
      {[62.5, 192.5].map((x) => <line key={x} x1={x} y1={110} x2={x} y2={65} {...pr} strokeWidth={1} strokeOpacity={0.6} />)}
      <T x={66} y={60} s={11} b p>E</T>
      <T x={30} y={132} s={11} b>B</T>
      <Arrow x1={270} y1={55} x2={270} y2={28} m={m} p />
      <Arrow x1={270} y1={55} x2={254} y2={69} m={m} />
      <Arrow x1={270} y1={55} x2={297} y2={55} m={m} />
      <T x={274} y={30} s={9} p>E</T>
      <T x={246} y={76} s={9}>B</T>
      <T x={300} y={50} s={9}>c</T>
      <T x={160} y={186} s={10} a="middle">E ⟂ B ⟂ c, in phase;  c = E₀/B₀ = 1/√(μ₀ε₀)</T>
    </Diagram>
  );
}

function EmSpectrumDiagram() {
  const m = 'ph-ems';
  const bands: [string, number][] = [['Radio', 60], ['Microwave', 40], ['IR', 40], ['', 16], ['UV', 34], ['X-ray', 40], ['γ-ray', 50]];
  let x = 20;
  return (
    <Diagram aria-label="Electromagnetic spectrum from radio waves through microwaves, infrared, visible, ultraviolet and X-rays to gamma rays; frequency and photon energy increase to the right while wavelength decreases">
      <Defs id={m}>
        <linearGradient id={`${m}-vis`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#e53935" />
          <stop offset="0.25" stopColor="#fb8c00" />
          <stop offset="0.45" stopColor="#fdd835" />
          <stop offset="0.65" stopColor="#43a047" />
          <stop offset="0.85" stopColor="#1e88e5" />
          <stop offset="1" stopColor="#8e24aa" />
        </linearGradient>
      </Defs>
      {bands.map(([name, w], i) => {
        const x0 = x;
        x += w;
        return (
          <g key={i}>
            <rect x={x0} y={70} width={w} height={35} stroke="currentColor" strokeOpacity={0.5} className={name ? 'fill-primary' : undefined} fill={name ? undefined : `url(#${m}-vis)`} fillOpacity={name ? 0.1 + i * 0.06 : 1} />
            {name ? <T x={x0 + w / 2} y={91} s={name.length > 6 ? 8 : 9} a="middle">{name}</T> : null}
          </g>
        );
      })}
      <T x={168} y={62} s={8} a="middle">Visible (700–400 nm)</T>
      <T x={20} y={48} s={8}>λ ~ m–km</T>
      <T x={300} y={48} s={8} a="end">λ &lt; 10⁻¹¹ m</T>
      <Arrow x1={30} y1={130} x2={290} y2={130} m={m} p w={2} />
      <T x={160} y={146} s={10} a="middle">increasing frequency ν and photon energy E = hν</T>
      <Arrow x1={290} y1={168} x2={30} y2={168} m={m} w={1.5} />
      <T x={160} y={184} s={10} a="middle">increasing wavelength λ  (c = νλ)</T>
    </Diagram>
  );
}

function MirrorRayDiagram() {
  const m = 'ph-mir';
  return (
    <Diagram aria-label="Concave mirror ray diagram with the object beyond C: a ray parallel to the axis reflects through F, a ray through F reflects parallel to the axis, and they meet to form a real, inverted, diminished image between C and F">
      <Defs id={m} />
      <line x1={15} y1={110} x2={300} y2={110} {...ax} />
      <path d="M 262 30 Q 285 110 262 190" stroke="currentColor" strokeWidth={2.5} fill="none" />
      <Arrow x1={70} y1={110} x2={70} y2={70} m={m} w={2} />
      <Arrow x1={184.3} y1={110} x2={184.3} y2={127.1} m={m} p w={2} />
      <Arrow x1={70} y1={70} x2={170} y2={70} m={m} p w={1.2} />
      <line x1={170} y1={70} x2={270} y2={70} {...pr} strokeWidth={1.2} />
      <Arrow x1={270} y1={70} x2={170} y2={136.7} m={m} p w={1.2} />
      <Arrow x1={70} y1={70} x2={140} y2={90} m={m} p w={1.2} />
      <line x1={140} y1={90} x2={270} y2={127.1} {...pr} strokeWidth={1.2} />
      <Arrow x1={270} y1={127.1} x2={160} y2={127.1} m={m} p w={1.2} />
      {[[150, 'C'], [210, 'F'], [273, 'P']].map(([x, l]) => (
        <g key={l as string}>
          <Dot x={x as number} y={110} />
          <T x={x as number} y={104} s={10} a="middle" b>{l}</T>
        </g>
      ))}
      <T x={70} y={62} s={9} a="middle">object</T>
      <T x={184} y={152} s={9} a="middle">image: real, inverted, diminished</T>
      <T x={15} y={186} s={10}>1/v + 1/u = 1/f,  f = R/2,  m = −v/u</T>
    </Diagram>
  );
}

function LensRayDiagram() {
  const m = 'ph-lens';
  return (
    <Diagram aria-label="Convex lens ray diagram with the object between F and 2F: a ray parallel to the axis refracts through F′, a ray through the optical centre goes straight, and a ray through F emerges parallel; they meet beyond 2F′ to form a real, inverted, magnified image">
      <Defs id={m} />
      <line x1={10} y1={110} x2={310} y2={110} {...ax} />
      <ellipse cx={160} cy={110} rx={7} ry={70} className="fill-primary/15 stroke-primary" strokeWidth={1.5} />
      <Arrow x1={70} y1={110} x2={70} y2={75} m={m} w={2} />
      <Arrow x1={272.5} y1={110} x2={272.5} y2={153.75} m={m} p w={2} />
      <Arrow x1={70} y1={75} x2={120} y2={75} m={m} p w={1.2} />
      <line x1={120} y1={75} x2={160} y2={75} {...pr} strokeWidth={1.2} />
      <Arrow x1={160} y1={75} x2={290} y2={166} m={m} p w={1.2} />
      <Arrow x1={70} y1={75} x2={290} y2={160.6} m={m} w={1.2} o={0.7} />
      <line x1={70} y1={75} x2={160} y2={153.75} {...pr} strokeWidth={1.2} />
      <Arrow x1={160} y1={153.75} x2={290} y2={153.75} m={m} p w={1.2} />
      {[[60, '2F'], [110, 'F'], [210, 'F′'], [260, '2F′']].map(([x, l]) => (
        <g key={l as string}>
          <Dot x={x as number} y={110} />
          <T x={x as number} y={104} s={9} a="middle">{l}</T>
        </g>
      ))}
      <T x={166} y={124} s={9}>O</T>
      <T x={70} y={68} s={9} a="middle">object</T>
      <T x={10} y={186} s={10}>1/v − 1/u = 1/f,  m = v/u</T>
      <T x={315} y={186} s={9} a="end">real, inverted, magnified</T>
    </Diagram>
  );
}

function PrismDeviationDiagram() {
  const m = 'ph-prism';
  return (
    <Diagram aria-label="Refraction through a prism of angle A at minimum deviation: the ray inside travels parallel to the base, incidence angle i equals emergence angle e, and the emergent ray is deviated toward the base by δ">
      <Defs id={m} />
      <path d="M 160 30 L 90 170 L 230 170 Z" className="fill-primary/10" stroke="currentColor" strokeWidth={1.5} />
      <line x1={137.9} y1={118.9} x2={97.7} y2={98.8} {...dsh} />
      <line x1={182.1} y1={118.9} x2={222.3} y2={98.8} {...dsh} />
      <Arrow x1={52.6} y1={128.8} x2={120} y2={110} m={m} w={1.8} />
      <line x1={120} y1={110} x2={200} y2={110} {...pr} />
      <Arrow x1={200} y1={110} x2={267.4} y2={128.8} m={m} w={1.8} />
      <line x1={120} y1={110} x2={240} y2={76.6} {...dsh} />
      <path d="M 213 84.2 A 55 55 0 0 1 213 113.6" {...ln} className="stroke-primary" strokeWidth={1.2} />
      <T x={160} y={56} s={11} a="middle" b>A</T>
      <T x={94} y={116} s={10}>i</T>
      <T x={132} y={122} s={9}>r</T>
      <T x={220} y={103} s={11} b p>δ</T>
      <T x={260} y={146} s={9} a="middle">i = e at δ_min</T>
      <T x={160} y={192} s={10} a="middle">μ = sin((A + δ_m)/2) / sin(A/2),  δ = i + e − A</T>
    </Diagram>
  );
}

function TotalInternalReflectionDiagram() {
  const m = 'ph-tir';
  return (
    <Diagram aria-label="Total internal reflection: rays from a source in a denser medium refract away from the normal when i is less than the critical angle c, graze the surface when i = c, and are totally reflected when i exceeds c; sin c = n2/n1">
      <Defs id={m} />
      <rect x={0} y={100} width={320} height={100} className="fill-primary/10" />
      <line x1={0} y1={100} x2={320} y2={100} stroke="currentColor" strokeWidth={1.5} />
      {[90.9, 48.5, 234].map((x) => <line key={x} x1={x} y1={70} x2={x} y2={130} {...dsh} />)}
      <Arrow x1={120} y1={180} x2={90.9} y2={100} m={m} w={1.2} />
      <Arrow x1={90.9} y1={100} x2={55} y2={40} m={m} w={1.2} />
      <Arrow x1={120} y1={180} x2={48.5} y2={100} m={m} p w={1.2} />
      <Arrow x1={48.5} y1={99} x2={10} y2={99} m={m} p w={1.2} />
      <Arrow x1={120} y1={180} x2={234} y2={100} m={m} p w={1.8} />
      <Arrow x1={234} y1={100} x2={283} y2={134.3} m={m} p w={1.8} />
      <Dot x={120} y={180} r={3.5} />
      <T x={62} y={44} s={9}>i &lt; c: refracts</T>
      <T x={14} y={92} s={9} p>i = c: grazes</T>
      <T x={250} y={160} s={9} p>i &gt; c: TIR</T>
      <T x={310} y={20} s={10} a="end">rarer medium n₂</T>
      <T x={310} y={192} s={10} a="end">denser medium n₁ &gt; n₂</T>
      <T x={310} y={60} s={11} a="end">sin c = n₂/n₁</T>
    </Diagram>
  );
}

function YdseDiagram() {
  const m = 'ph-ydse';
  return (
    <Diagram aria-label="Young's double slit experiment: light from slit S illuminates two coherent slits S1 and S2 separated by d; at a screen distance D away bright and dark fringes form with fringe width β = λD/d; path difference to a point P is d sinθ">
      <Defs id={m} />
      <path d="M 30 40 L 30 96 M 30 104 L 30 160" stroke="currentColor" strokeWidth={2} />
      {[20, 40, 60].map((r) => <path key={r} d={`M ${30 + r * 0.766} ${100 - r * 0.643} A ${r} ${r} 0 0 1 ${30 + r * 0.766} ${100 + r * 0.643}`} {...ln} strokeOpacity={0.4} strokeWidth={1} />)}
      <path d="M 100 30 L 100 85 M 100 91 L 100 109 M 100 115 L 100 170" stroke="currentColor" strokeWidth={2} />
      <line x1={250} y1={30} x2={250} y2={170} stroke="currentColor" strokeWidth={2} />
      <path d={fpath((y) => [255 + 40 * Math.cos((Math.PI * (y - 100)) / 20) ** 2, y], 30, 170, 140)} {...pr} strokeWidth={1.5} />
      <line x1={100} y1={88} x2={250} y2={60} {...ln} strokeWidth={1} />
      <line x1={100} y1={112} x2={250} y2={60} {...ln} strokeWidth={1} />
      <line x1={100} y1={100} x2={250} y2={100} {...dsh} />
      <line x1={100} y1={100} x2={250} y2={60} {...dsh} />
      <T x={140} y={96} s={10}>θ</T>
      <T x={24} y={104} s={10} a="end">S</T>
      <T x={95} y={84} s={9} a="end">S₁</T>
      <T x={95} y={124} s={9} a="end">S₂</T>
      <T x={106} y={104} s={9}>d</T>
      <T x={244} y={56} s={10} a="end">P</T>
      <Dim x1={100} y1={182} x2={250} y2={182} m={m} />
      <T x={175} y={196} s={10} a="middle">D</T>
      <T x={110} y={20} s={9}>path diff. = d sinθ = nλ (bright)</T>
      <T x={300} y={186} s={11} a="end" p>β = λD/d</T>
    </Diagram>
  );
}

function SingleSlitDiffractionDiagram() {
  const m = 'ph-ssd';
  const I = (y: number) => {
    const u = (Math.PI * (y - 100)) / 30;
    return Math.abs(u) < 1e-6 ? 1 : (Math.sin(u) / u) ** 2;
  };
  return (
    <Diagram aria-label="Single slit diffraction: plane waves pass a slit of width a; the screen shows a bright central maximum twice as wide as the weaker secondary maxima, with minima where a sinθ = nλ">
      <Defs id={m} />
      {[30, 45, 60, 75].map((x) => <line key={x} x1={x} y1={70} x2={x} y2={130} {...ln} strokeOpacity={0.4} strokeWidth={1} />)}
      <Arrow x1={30} y1={100} x2={88} y2={100} m={m} o={0.6} />
      <path d="M 100 30 L 100 88 M 100 112 L 100 170" stroke="currentColor" strokeWidth={2.5} />
      <T x={108} y={104} s={10}>a</T>
      <line x1={240} y1={15} x2={240} y2={185} stroke="currentColor" strokeWidth={2} />
      <path d={fpath((y) => [240 + 60 * I(y), y], 15, 185, 170)} {...pr} strokeWidth={1.5} />
      <line x1={100} y1={100} x2={240} y2={100} {...dsh} />
      <line x1={100} y1={100} x2={240} y2={70} {...dsh} />
      <T x={150} y={96} s={10}>θ</T>
      <Dim x1={232} y1={70} x2={232} y2={130} m={m} />
      <T x={226} y={124} s={9} a="end">2λD/a</T>
      <T x={10} y={20} s={10}>1st minimum: a sinθ = λ</T>
      <T x={10} y={192} s={9}>central max: twice the width of secondary maxima</T>
    </Diagram>
  );
}

function PolarisationDiagram() {
  const m = 'ph-pol';
  return (
    <Diagram aria-label="Polarisation: unpolarised light of intensity I0 passes a polariser and emerges plane polarised with intensity I0/2; an analyser at angle θ transmits I = (I0/2)cos²θ (Malus' law)">
      <Defs id={m} />
      <line x1={10} y1={100} x2={310} y2={100} {...dsh} />
      {[0, 45, 90, 135].map((a) => {
        const r = (a * Math.PI) / 180;
        return <Arrow key={a} x1={45 - 22 * Math.cos(r)} y1={100 - 22 * Math.sin(r)} x2={45 + 22 * Math.cos(r)} y2={100 + 22 * Math.sin(r)} m={m} both w={1.2} />;
      })}
      <path d="M 100 55 L 120 45 L 120 145 L 100 155 Z" className="fill-primary/10" stroke="currentColor" />
      <line x1={110} y1={62} x2={110} y2={138} {...pr} strokeWidth={1.5} />
      <Arrow x1={160} y1={78} x2={160} y2={122} m={m} p both w={2} />
      <path d="M 200 55 L 220 45 L 220 145 L 200 155 Z" className="fill-primary/10" stroke="currentColor" />
      <line x1={210} y1={70} x2={210} y2={130} {...dsh} />
      <line x1={225} y1={74} x2={195} y2={126} {...pr} strokeWidth={1.5} />
      <T x={214} y={66} s={10}>θ</T>
      <Arrow x1={273.5} y1={85.3} x2={256.5} y2={114.7} m={m} p both w={2} />
      <T x={45} y={142} s={9} a="middle">unpolarised I₀</T>
      <T x={110} y={172} s={9} a="middle">polariser</T>
      <T x={160} y={142} s={9} a="middle">I₀/2</T>
      <T x={210} y={172} s={9} a="middle">analyser</T>
      <T x={268} y={142} s={9} a="middle">(I₀/2)cos²θ</T>
      <T x={160} y={194} s={10} a="middle" p>Malus&apos; law: I = I₁ cos²θ</T>
    </Diagram>
  );
}

/* ------------------------------------------------------------------ */
/* Modern physics & electronics                                        */
/* ------------------------------------------------------------------ */

function PhotoelectricGraphsDiagram() {
  const m = 'ph-pe';
  return (
    <Diagram aria-label="Photoelectric effect graphs. Left: photocurrent versus anode potential for two intensities at the same frequency, with the same stopping potential −V0 but different saturation currents. Right: stopping potential versus frequency for two metals, parallel straight lines of slope h/e with different threshold frequencies ν0">
      <Defs id={m} />
      <T x={82} y={18} s={9} a="middle" b>I vs V (same ν)</T>
      <Arrow x1={12} y1={160} x2={152} y2={160} m={m} w={1} o={0.6} />
      <Arrow x1={90} y1={170} x2={90} y2={30} m={m} w={1} o={0.6} />
      <T x={152} y={174} s={10} a="end">V</T>
      <T x={95} y={38} s={10}>I</T>
      <path d="M 40 160 C 55 100 80 72 110 70 L 148 70" {...pr} />
      <path d="M 40 160 C 55 130 80 112 110 110 L 148 110" {...pr} strokeDasharray="5 3" strokeWidth={1.5} />
      <Dot x={40} y={160} />
      <T x={40} y={174} s={10} a="middle">−V₀</T>
      <T x={112} y={64} s={8}>high intensity</T>
      <T x={112} y={104} s={8}>low intensity</T>
      <T x={14} y={196} s={8} o={0.7}>saturation ∝ intensity; V₀ same</T>
      <line x1={163} y1={20} x2={163} y2={190} {...dsh} />
      <T x={242} y={18} s={9} a="middle" b>V₀ vs ν (two metals)</T>
      <Arrow x1={175} y1={160} x2={312} y2={160} m={m} w={1} o={0.6} />
      <Arrow x1={175} y1={160} x2={175} y2={30} m={m} w={1} o={0.6} />
      <T x={312} y={174} s={10} a="end">ν</T>
      <T x={180} y={38} s={10}>V₀</T>
      <line x1={200} y1={160} x2={280} y2={60} {...pr} />
      <line x1={240} y1={160} x2={300} y2={85} {...pr} strokeDasharray="5 3" strokeWidth={1.5} />
      <T x={200} y={174} s={9} a="middle">ν₀(1)</T>
      <T x={240} y={174} s={9} a="middle">ν₀(2)</T>
      <T x={228} y={124} s={8}>same slope h/e</T>
      <T x={180} y={196} s={8} o={0.7}>eV₀ = hν − hν₀</T>
    </Diagram>
  );
}

function BohrEnergyLevelsDiagram() {
  const m = 'ph-bohr';
  const lv: [string, number, string][] = [['n=1', 166, '−13.6 eV'], ['n=2', 64, '−3.4 eV'], ['n=3', 45.1, '−1.51 eV'], ['n=4', 38.5, '−0.85 eV']];
  return (
    <Diagram aria-label="Energy levels of hydrogen, E_n = −13.6/n² eV, with emission transitions: the Lyman series ends on n = 1 (ultraviolet) and the Balmer series ends on n = 2 (visible)">
      <Defs id={m} />
      <line x1={80} y1={30} x2={240} y2={30} {...dsh} />
      <T x={75} y={33} s={8} a="end">n=∞</T>
      <T x={245} y={33} s={8}>0 eV</T>
      {lv.map(([n, y, e]) => (
        <g key={n}>
          <line x1={80} y1={y} x2={240} y2={y} stroke="currentColor" strokeWidth={1.5} />
          <T x={75} y={y + 3} s={8} a="end">{n}</T>
          <T x={245} y={y + 3} s={8}>{e}</T>
        </g>
      ))}
      <Arrow x1={100} y1={64} x2={100} y2={166} m={m} p />
      <Arrow x1={115} y1={45.1} x2={115} y2={166} m={m} p />
      <T x={122} y={120} s={9} p>Lyman (UV)</T>
      <Arrow x1={170} y1={45.1} x2={170} y2={64} m={m} />
      <Arrow x1={185} y1={38.5} x2={185} y2={64} m={m} />
      <T x={178} y={80} s={9} a="middle">Balmer (visible)</T>
      <T x={12} y={192} s={10}>E_n = −13.6/n² eV,  emitted hν = E_i − E_f</T>
    </Diagram>
  );
}

function RadioactiveDecayCurveDiagram() {
  const m = 'ph-decay';
  return (
    <Diagram aria-label="Radioactive decay: the number of undecayed nuclei N = N0 e^(−λt) halves every half-life T½: N0/2 after one half-life, N0/4 after two, N0/8 after three">
      <Defs id={m} />
      <Axes m={m} xl="t" yl="N" />
      <path d={fpath((t) => [40 + t, 170 - 130 * Math.exp((-t * Math.LN2) / 50)], 0, 255)} {...pr} />
      {[[90, 105, 'N₀/2', 'T½'], [140, 137.5, 'N₀/4', '2T½'], [190, 153.75, 'N₀/8', '3T½']].map(([x, y, ln2, lt]) => (
        <g key={lt as string}>
          <path d={`M 40 ${y} H ${x} V 170`} {...dsh} />
          <circle cx={x as number} cy={y as number} r={2.5} className="fill-primary" />
          <T x={36} y={(y as number) + 3} s={8} a="end">{ln2}</T>
          <T x={x as number} y={182} s={9} a="middle">{lt}</T>
        </g>
      ))}
      <T x={36} y={44} s={8} a="end">N₀</T>
      <T x={180} y={70} s={11}>N = N₀e^(−λt)</T>
      <T x={180} y={88} s={11}>T½ = 0.693/λ</T>
    </Diagram>
  );
}

function BindingEnergyCurveDiagram() {
  const m = 'ph-be';
  const pts: [number, number][] = [[2, 1.11], [3, 2.57], [4, 7.07], [6, 5.33], [7, 5.6], [9, 6.46], [12, 7.68], [16, 7.98], [20, 8.03], [28, 8.45], [40, 8.55], [56, 8.79], [80, 8.7], [100, 8.6], [120, 8.5], [150, 8.3], [180, 8.05], [200, 7.9], [238, 7.57]];
  const X = (a: number) => 40 + a * 1.05, Y = (b: number) => 170 - b * 14;
  return (
    <Diagram aria-label="Binding energy per nucleon versus mass number: rises steeply for light nuclei (with a spike at helium-4), peaks at about 8.8 MeV near A ≈ 56 (iron), then decreases slowly to about 7.6 MeV for uranium-238; fusion of light and fission of heavy nuclei both release energy">
      <Defs id={m} />
      <Axes m={m} xl="mass number A" yl="BE/A (MeV)" />
      <polyline points={pts.map(([a, b]) => `${X(a).toFixed(1)},${Y(b).toFixed(1)}`).join(' ')} {...pr} strokeLinejoin="round" />
      <line x1={X(56)} y1={Y(8.79)} x2={X(56)} y2={170} {...dsh} />
      <line x1={40} y1={Y(8.79)} x2={X(56)} y2={Y(8.79)} {...dsh} />
      <T x={36} y={Y(8.79) + 3} s={8} a="end">8.8</T>
      <T x={X(56)} y={182} s={9} a="middle">56</T>
      <T x={X(56) + 4} y={38} s={9}>⁵⁶Fe (most stable)</T>
      <T x={50} y={70} s={9}>⁴He</T>
      <T x={X(238)} y={Y(7.57) - 8} s={9} a="end">²³⁸U</T>
      <T x={60} y={150} s={9}>← fusion releases energy</T>
      <T x={170} y={120} s={9}>fission releases energy →</T>
    </Diagram>
  );
}

function PnJunctionDiagram() {
  const m = 'ph-pn';
  const ys = [55, 75, 95];
  return (
    <Diagram aria-label="p-n junction: holes in the p region and electrons in the n region diffuse across, leaving a depletion region of negative acceptor ions on the p side and positive donor ions on the n side; the built-in field E points from n to p and creates a barrier potential V0">
      <Defs id={m} />
      <rect x={30} y={40} width={260} height={70} {...ln} />
      <rect x={140} y={40} width={40} height={70} className="fill-primary/15" />
      <line x1={160} y1={40} x2={160} y2={110} stroke="currentColor" strokeOpacity={0.6} />
      {ys.map((y) => (
        <g key={y}>
          {[45, 65, 85, 105, 125].map((x) => <circle key={x} cx={x} cy={y} r={3} {...ln} strokeWidth={1.2} />)}
          {[195, 215, 235, 255, 275].map((x) => <Dot key={x} x={x} y={y} r={3} />)}
          <T x={150} y={y + 4} s={12} a="middle" b>−</T>
          <T x={170} y={y + 4} s={11} a="middle" b p>+</T>
        </g>
      ))}
      <T x={160} y={32} s={9} a="middle">depletion region</T>
      <T x={85} y={126} s={9} a="middle">p-type (holes ○)</T>
      <T x={235} y={126} s={9} a="middle">n-type (electrons ●)</T>
      <Arrow x1={180} y1={120} x2={140} y2={120} m={m} p w={2} />
      <T x={160} y={134} s={10} a="middle" p b>E</T>
      <line x1={140} y1={175} x2={290} y2={175} {...dsh} />
      <path d="M 30 175 L 140 175 C 160 175 160 145 180 145 L 290 145" {...pr} />
      <Dim x1={250} y1={145} x2={250} y2={175} m={m} />
      <T x={256} y={166} s={10}>V₀</T>
      <T x={30} y={192} s={9}>potential across junction (V₀ ≈ 0.7 V for Si)</T>
    </Diagram>
  );
}

function RectifierDiagram() {
  const rows: [number, string, (s: number) => number][] = [
    [40, 'Input AC', (s) => s],
    [100, 'Half-wave', (s) => Math.max(0, s)],
    [160, 'Full-wave', (s) => Math.abs(s)],
  ];
  return (
    <Diagram aria-label="Rectification: an AC input sine wave; the half-wave rectifier output passes only positive half cycles; the full-wave rectifier output flips negative half cycles to positive, giving ripple at twice the input frequency">
      {rows.map(([y0, label, f], i) => (
        <g key={label}>
          <line x1={55} y1={y0} x2={305} y2={y0} {...ax} />
          <T x={5} y={y0 + 4} s={9} b>{label}</T>
          <path d={fpath((x) => [x, y0 - 22 * f(Math.sin((2 * Math.PI * (x - 60)) / 120))], 60, 300, 160)} {...(i ? pr : ln)} />
        </g>
      ))}
      <T x={300} y={124} s={8} a="end" o={0.7}>one diode conducts on + half</T>
      <T x={300} y={190} s={8} a="end" o={0.7}>output ripple frequency = 2f (bridge / centre-tap)</T>
    </Diagram>
  );
}

function LogicGatesDiagram() {
  const gate = (kind: 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR', x: number, y: number, expr: ReactNode) => {
    const isAnd = kind === 'AND' || kind === 'NAND', isOr = kind === 'OR' || kind === 'NOR';
    const body = isAnd ? `M ${x} ${y} h 18 a 18 18 0 0 1 0 36 h -18 Z`
      : isOr ? `M ${x} ${y} Q ${x + 12} ${y + 18} ${x} ${y + 36} Q ${x + 26} ${y + 36} ${x + 40} ${y + 18} Q ${x + 26} ${y} ${x} ${y} Z`
        : `M ${x} ${y} L ${x + 30} ${y + 18} L ${x} ${y + 36} Z`;
    const tip = isAnd ? x + 36 : isOr ? x + 40 : x + 30;
    const bubble = kind === 'NOT' || kind === 'NAND' || kind === 'NOR';
    const out = bubble ? tip + 7 : tip;
    return (
      <g key={kind}>
        <path d={body} className="fill-primary/10 stroke-primary" strokeWidth={1.5} />
        {bubble ? <circle cx={tip + 3.5} cy={y + 18} r={3.5} fill="none" className="stroke-primary" strokeWidth={1.5} /> : null}
        {kind === 'NOT' ? (
          <line x1={x - 14} y1={y + 18} x2={x} y2={y + 18} stroke="currentColor" />
        ) : (
          <path d={`M ${x - 14} ${y + 10} H ${x + 5} M ${x - 14} ${y + 26} H ${x + 5}`} stroke="currentColor" />
        )}
        <line x1={out} y1={y + 18} x2={out + 14} y2={y + 18} stroke="currentColor" />
        <T x={x - 16} y={kind === 'NOT' ? y + 21 : y + 13} s={8} a="end">A</T>
        {kind === 'NOT' ? null : <T x={x - 16} y={y + 29} s={8} a="end">B</T>}
        <T x={out + 16} y={y + 21} s={8}>Y</T>
        <T x={x + 18} y={y + 52} s={10} a="middle" b>{kind}</T>
        <T x={x + 18} y={y + 66} s={9} a="middle">{expr}</T>
      </g>
    );
  };
  const bar = (s: string) => <tspan textDecoration="overline">{s}</tspan>;
  return (
    <Diagram aria-label="Logic gate symbols: AND (Y = A·B), OR (Y = A + B), NOT (Y = Ā), NAND (Y = NOT of A·B) and NOR (Y = NOT of A + B); a small bubble at the output denotes inversion">
      {gate('AND', 25, 15, <>Y = A·B</>)}
      {gate('OR', 135, 15, <>Y = A + B</>)}
      {gate('NOT', 248, 15, <>Y = {bar('A')}</>)}
      {gate('NAND', 75, 108, <>Y = {bar('A·B')}</>)}
      {gate('NOR', 190, 108, <>Y = {bar('A + B')}</>)}
    </Diagram>
  );
}

function VernierScrewGaugeDiagram() {
  const mm = Array.from({ length: 36 }, (_, i) => i);
  const vs = Array.from({ length: 11 }, (_, i) => i);
  return (
    <Diagram aria-label="Vernier calliper and screw gauge: 10 vernier divisions equal 9 main-scale millimetres, so the least count is 0.1 mm and the reading shown is 12 mm + 4 × 0.1 mm = 12.4 mm; a screw gauge's least count is pitch divided by the number of circular-scale divisions, e.g. 0.5 mm/50 = 0.01 mm">
      <line x1={20} y1={50} x2={300} y2={50} stroke="currentColor" />
      {mm.map((i) => (
        <line key={i} x1={20 + 8 * i} y1={50} x2={20 + 8 * i} y2={i % 5 ? 44 : 39} stroke="currentColor" strokeWidth={0.8} className={i === 16 ? 'stroke-primary' : undefined} />
      ))}
      {[0, 1, 2, 3].map((c) => <T key={c} x={20 + 80 * c} y={34} s={8} a="middle">{c}</T>)}
      <T x={300} y={34} s={8} a="end">cm (main scale)</T>
      <rect x={112} y={50} width={116} height={20} className="fill-primary/10" stroke="currentColor" strokeOpacity={0.4} />
      {vs.map((i) => (
        <line key={i} x1={119.2 + 7.2 * i} y1={50} x2={119.2 + 7.2 * i} y2={i % 5 ? 56 : 60} stroke="currentColor" strokeWidth={i === 4 ? 1.8 : 0.8} className={i === 4 ? 'stroke-primary' : undefined} />
      ))}
      {[0, 5, 10].map((i) => <T key={i} x={119.2 + 7.2 * i} y={68} s={7} a="middle">{i}</T>)}
      <T x={20} y={86} s={9}>LC = 1 MSD − 1 VSD = 1 mm − 0.9 mm = 0.1 mm</T>
      <T x={20} y={99} s={9} p>Reading = 12 mm + 4 × 0.1 mm = 12.4 mm</T>
      <rect x={20} y={135} width={10} height={20} fill="currentColor" fillOpacity={0.3} stroke="currentColor" />
      <path d="M 25 155 L 25 180 L 140 180 L 140 155" {...ln} strokeOpacity={0.6} />
      <rect x={38} y={140} width={52} height={10} fill="currentColor" fillOpacity={0.15} stroke="currentColor" />
      <rect x={90} y={135} width={100} height={20} fill="none" stroke="currentColor" />
      <line x1={90} y1={145} x2={185} y2={145} stroke="currentColor" />
      {Array.from({ length: 10 }, (_, i) => (
        <line key={i} x1={95 + 10 * i} y1={145} x2={95 + 10 * i} y2={i % 2 ? 149 : 140} stroke="currentColor" strokeWidth={0.8} />
      ))}
      <rect x={185} y={122} width={70} height={46} className="fill-primary/10 stroke-primary" />
      {Array.from({ length: 9 }, (_, i) => (
        <line key={i} x1={185} y1={125 + 5 * i} x2={193} y2={125 + 5 * i} stroke="currentColor" strokeWidth={i === 4 ? 1.8 : 0.8} className={i === 4 ? 'stroke-primary' : undefined} />
      ))}
      <rect x={255} y={135} width={20} height={20} fill="currentColor" fillOpacity={0.2} stroke="currentColor" />
      <T x={130} y={130} s={8} a="middle">sleeve (main scale)</T>
      <T x={220} y={117} s={8} a="middle">thimble (circular scale)</T>
      <T x={160} y={196} s={9} a="middle">Screw gauge LC = pitch / N = 0.5 mm / 50 = 0.01 mm</T>
    </Diagram>
  );
}

export const physicsDiagrams: Record<string, () => JSX.Element> = {
  'projectile': ProjectileDiagram,
  'relative-velocity-river': RelativeVelocityRiverDiagram,
  'free-body-incline': FreeBodyInclineDiagram,
  'atwood-machine': AtwoodMachineDiagram,
  'circular-motion': CircularMotionDiagram,
  'vertical-circle': VerticalCircleDiagram,
  'collision-1d': Collision1dDiagram,
  'centre-of-mass': CentreOfMassDiagram,
  'rolling-motion': RollingMotionDiagram,
  'moment-of-inertia': MomentOfInertiaDiagram,
  'satellite-orbit': SatelliteOrbitDiagram,
  'stress-strain-curve': StressStrainCurveDiagram,
  'bernoulli-pipe': BernoulliPipeDiagram,
  'capillary-rise': CapillaryRiseDiagram,
  'pv-processes': PvProcessesDiagram,
  'carnot-cycle': CarnotCycleDiagram,
  'shm-spring': ShmSpringDiagram,
  'simple-pendulum': SimplePendulumDiagram,
  'transverse-wave': TransverseWaveDiagram,
  'standing-waves-pipes': StandingWavesPipesDiagram,
  'doppler-effect': DopplerEffectDiagram,
  'heat-transfer': HeatTransferDiagram,
  'electric-field-lines': ElectricFieldLinesDiagram,
  'electric-dipole': ElectricDipoleDiagram,
  'gauss-surface': GaussSurfaceDiagram,
  'equipotential-surfaces': EquipotentialSurfacesDiagram,
  'parallel-plate-capacitor': ParallelPlateCapacitorDiagram,
  'rc-charging-curve': RcChargingCurveDiagram,
  'kirchhoff-circuit': KirchhoffCircuitDiagram,
  'wheatstone-bridge': WheatstoneBridgeDiagram,
  'potentiometer': PotentiometerDiagram,
  'magnetic-field-loop': MagneticFieldLoopDiagram,
  'charge-in-magnetic-field': ChargeInMagneticFieldDiagram,
  'solenoid-field': SolenoidFieldDiagram,
  'hysteresis-loop': HysteresisLoopDiagram,
  'faraday-induction': FaradayInductionDiagram,
  'lr-growth-curve': LrGrowthCurveDiagram,
  'lcr-phasor': LcrPhasorDiagram,
  'resonance-curve': ResonanceCurveDiagram,
  'transformer': TransformerDiagram,
  'em-wave': EmWaveDiagram,
  'em-spectrum': EmSpectrumDiagram,
  'mirror-ray-diagram': MirrorRayDiagram,
  'lens-ray-diagram': LensRayDiagram,
  'prism-deviation': PrismDeviationDiagram,
  'total-internal-reflection': TotalInternalReflectionDiagram,
  'ydse': YdseDiagram,
  'single-slit-diffraction': SingleSlitDiffractionDiagram,
  'polarisation': PolarisationDiagram,
  'photoelectric-graphs': PhotoelectricGraphsDiagram,
  'bohr-energy-levels': BohrEnergyLevelsDiagram,
  'radioactive-decay-curve': RadioactiveDecayCurveDiagram,
  'binding-energy-curve': BindingEnergyCurveDiagram,
  'pn-junction': PnJunctionDiagram,
  'rectifier': RectifierDiagram,
  'logic-gates': LogicGatesDiagram,
  'vernier-screw-gauge': VernierScrewGaugeDiagram,
};
