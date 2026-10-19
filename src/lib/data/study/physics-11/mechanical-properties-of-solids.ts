import type { StudyChapter } from '../types';

export const mechanicalPropertiesOfSolids: StudyChapter = {
  name: 'Mechanical Properties of Solids',
  subject: 'Physics',
  classLevel: 11,
  summary:
    'How solids deform under forces: stress, strain, the three elastic moduli, Poisson\'s ratio and stored elastic energy. A short, formula-based chapter that gives at least one easy question in JEE Main almost every year.',
  mostRepeated: [
    'Extension of a wire ==ΔL = FL/AY==; for the same material and load, ΔL ∝ L/r².',
    'Young\'s modulus is a ==property of the material only==, not of the length or thickness of the wire.',
    'Elastic energy stored ==U = ½ × load × extension== = ½ × stress × strain × volume.',
    'Fractional change in radius of a sphere under pressure p is ==Δr/r = p/3B==.',
    'Thermal stress in a clamped rod is ==YαΔT==, independent of its length and area.',
    'Extension of a wire due to its own weight is ==half== the extension produced by the same weight hung at the end.',
    'Poisson\'s ratio lies between ==0 and 0.5== in practice; σ = 0.5 means no change in volume.',
  ],
  topics: [
    {
      name: 'Stress, Strain and Young\'s Modulus',
      theory:
        'When a deforming force acts on a body, internal restoring forces develop. The restoring force per unit area is called ==stress== (σ = F/A, unit N/m² or Pa). The fractional change in dimension is called ==strain== and has no unit. Longitudinal strain is ΔL/L, volumetric strain is ΔV/V and shear strain is the angle of shear θ.\n\n==Hooke\'s law== states that, within the elastic limit, stress is proportional to strain. The constant of proportionality is the modulus of elasticity. For stretching or compression of a wire it is ==Young\'s modulus Y = (F/A)/(ΔL/L) = FL/(AΔL)==.\n\nRearranging gives the working formula ΔL = FL/(AY). Y depends only on the material (and temperature), so two wires of the same material have the same Y even if their lengths and radii differ. Steel (Y ≈ 2 × 10¹¹ Pa) is ==more elastic than rubber== because it needs a far larger stress for the same strain.',
      keyPoints: [
        'Stress = F/A; strain = ΔL/L (dimensionless).',
        '==ΔL = FL/(AY)==; for the same material and load ΔL ∝ L/r².',
        'Y is a material constant; ==larger Y means more elastic== (steel > copper > rubber).',
        'Wires joined in series carry the same tension; each extends by FLᵢ/(AYᵢ).',
        'Y has the same unit and dimensions as stress: N/m², [ML⁻¹T⁻²].',
      ],
      formulas: ['Stress = F/A', 'Strain = ΔL/L', 'Y = FL/(AΔL)', 'ΔL = FL/(AY)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - ratio-based questions most years',
        question:
          'A force F produces an extension l in a wire of length L and radius r. What extension does a force 2F produce in a wire of the same material with length 2L and radius 2r?',
        approach: [
          'Write ΔL = FL/(πr²Y) and note that Y is the same for both wires.',
          'Form the ratio: ΔL₂/ΔL₁ = (F₂/F₁)(L₂/L₁)(r₁/r₂)² = 2 × 2 × (1/2)² = 1.',
          'So the second wire extends by the same amount.',
        ],
        answer: 'l',
      },
      questions: [
        {
          question: 'A wire of length 2 m and cross-sectional area 1 mm² is stretched by a force of 100 N. If Y = 2 × 10¹¹ N/m², the extension is:',
          options: ['0.1 mm', '1 mm', '10 mm', '0.5 mm'],
          answer: '1 mm',
          difficulty: 'Easy',
          hint: 'Use ΔL = FL/(AY) and convert mm² to m².',
          solution: 'A = 1 mm² = 10⁻⁶ m². ΔL = (100 × 2)/(10⁻⁶ × 2 × 10¹¹) = 200/(2 × 10⁵) = 10⁻³ m = 1 mm.',
          similar: {
            question: 'A wire of length 1 m and area 2 mm² is stretched by 400 N. If Y = 10¹¹ N/m², the extension is:',
            options: ['1 mm', '2 mm', '4 mm', '0.2 mm'],
            answer: '2 mm',
            solution: 'ΔL = (400 × 1)/(2 × 10⁻⁶ × 10¹¹) = 400/(2 × 10⁵) = 2 × 10⁻³ m = 2 mm.',
          },
        },
        {
          question: 'Two wires A and B of the same material carry the same load. Their lengths are in the ratio 1 : 2 and diameters in the ratio 2 : 1. The ratio of their extensions ΔL_A : ΔL_B is:',
          options: ['1 : 8', '1 : 4', '8 : 1', '1 : 2'],
          answer: '1 : 8',
          difficulty: 'Medium',
          hint: 'For the same material and load, ΔL ∝ L/d².',
          solution: 'ΔL ∝ L/d². ΔL_A/ΔL_B = (L_A/L_B) × (d_B/d_A)² = (1/2) × (1/2)² = 1/8.',
          similar: {
            question: 'Two wires of the same material carry the same load. Their lengths are in the ratio 2 : 1 and radii in the ratio 1 : 2. The ratio of their extensions is:',
            options: ['8 : 1', '1 : 8', '2 : 1', '4 : 1'],
            answer: '8 : 1',
            solution: 'ΔL ∝ L/r² ⇒ ratio = (2/1) × (2/1)² = 8 : 1.',
          },
        },
        {
          question: 'A steel wire (Y = 2 × 10¹¹ Pa) and a brass wire (Y = 1 × 10¹¹ Pa), each 1 m long and of the same cross-section, are joined end to end and loaded. The total extension is 3 mm. The extension of the steel wire is:',
          options: ['1 mm', '2 mm', '1.5 mm', '0.5 mm'],
          answer: '1 mm',
          difficulty: 'Hard',
          hint: 'In series the tension is the same in both wires, so ΔL ∝ 1/Y.',
          solution: 'Same F, L and A ⇒ ΔL ∝ 1/Y. ΔL_steel : ΔL_brass = 1/2 : 1/1 = 1 : 2. Total 3 parts = 3 mm ⇒ steel extends 1 mm (brass 2 mm).',
          similar: {
            question: 'Steel (Y = 2 × 10¹¹ Pa) and copper (Y = 1.2 × 10¹¹ Pa) wires of equal length and area are joined end to end and loaded. The total extension is 1.6 mm. Extension of the steel wire:',
            options: ['0.6 mm', '1.0 mm', '0.8 mm', '0.96 mm'],
            answer: '0.6 mm',
            solution: 'ΔL ∝ 1/Y ⇒ steel : copper = 1/2 : 1/1.2 = 0.5 : 0.833 = 3 : 5. Steel share = (3/8) × 1.6 = 0.6 mm.',
          },
        },
      ],
    },
    {
      name: 'Stress-Strain Curve and Elastic Behaviour',
      theory:
        'When a wire is gradually loaded and stress is plotted against strain, the graph is first a straight line up to the ==proportional limit== (Hooke\'s law holds). A little further is the ==elastic limit (yield point)==: up to here the wire returns to its original length when the load is removed.\n\nBeyond the yield point the material flows plastically and a ==permanent set== remains on unloading. The maximum stress the wire can bear is the ==ultimate tensile strength==, after which it narrows and finally breaks at the fracture point.\n\n==Ductile== materials (copper, aluminium) have a large plastic region between the ultimate point and fracture, so they can be drawn into wires. ==Brittle== materials (glass, cast iron) break soon after the elastic limit. ==Elastomers== such as rubber can be stretched to large strains but have no well-defined plastic region and show elastic hysteresis. The slope of the linear part of the curve equals Young\'s modulus.',
      keyPoints: [
        'Slope of the linear part of the stress-strain graph = ==Young\'s modulus==.',
        'Order: proportional limit → elastic limit (yield) → ultimate strength → fracture.',
        'Breaking load = breaking stress × area, so it ==depends on area but not on length==.',
        'Ductile: large plastic region; brittle: fracture soon after elastic limit.',
      ],
      formulas: ['Y = slope of stress-strain line = tan θ', 'Breaking load = breaking stress × A'],
      diagram: 'stress-strain-curve',
      diagramCaption: 'Stress-strain curve of a ductile metal: proportional limit, yield point, ultimate tensile strength and fracture.',
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - graph-reading and breaking-load questions',
        question:
          'The stress-strain graphs of two wires A and B are straight lines through the origin making angles of 60° and 30° with the strain axis. Which wire is more elastic and what is Y_A : Y_B?',
        approach: [
          'Young\'s modulus is the slope of the stress-strain line: Y = tan θ.',
          'Y_A/Y_B = tan 60°/tan 30° = √3/(1/√3) = 3.',
          'Larger Y means more elastic, so A is more elastic.',
        ],
        answer: 'A is more elastic; Y_A : Y_B = 3 : 1',
      },
      questions: [
        {
          question: 'Up to which point on the stress-strain curve does Hooke\'s law hold exactly?',
          options: ['Proportional limit', 'Yield point', 'Ultimate tensile point', 'Fracture point'],
          answer: 'Proportional limit',
          difficulty: 'Easy',
          hint: 'Hooke\'s law means stress ∝ strain, i.e. the straight-line part.',
          solution: 'Stress is strictly proportional to strain only on the linear part of the graph, which ends at the proportional limit.',
          similar: {
            question: 'Beyond which point does a wire acquire a permanent set when the load is removed?',
            options: ['Elastic limit', 'Proportional limit', 'Origin', 'Any point'],
            answer: 'Elastic limit',
            solution: 'Up to the elastic limit (yield point) the wire regains its length; beyond it the deformation is partly permanent.',
          },
        },
        {
          question: 'A wire can support a maximum load of 100 kg. Another wire of the same material with double the radius and half the length can support a maximum load of:',
          options: ['400 kg', '200 kg', '100 kg', '800 kg'],
          answer: '400 kg',
          difficulty: 'Medium',
          hint: 'Breaking stress is a material constant; breaking load = breaking stress × area.',
          solution: 'Breaking load ∝ area ∝ r² and does not depend on length. Doubling r ⇒ 4 × 100 = 400 kg.',
          similar: {
            question: 'A wire breaks under a load of 100 kg. A wire of the same material with half the radius and double the length breaks under:',
            options: ['25 kg', '50 kg', '100 kg', '12.5 kg'],
            answer: '25 kg',
            solution: 'Breaking load ∝ r² only. (1/2)² × 100 = 25 kg; length does not matter.',
          },
        },
        {
          question: 'Stress-strain graphs of wires A and B are straight lines making angles 45° and 30° with the strain axis. Y_A : Y_B is:',
          options: ['√3 : 1', '1 : √3', '3 : 1', '3 : 2'],
          answer: '√3 : 1',
          difficulty: 'Medium',
          hint: 'Y equals the slope (tan of the angle with the strain axis).',
          solution: 'Y_A/Y_B = tan 45°/tan 30° = 1/(1/√3) = √3.',
          similar: {
            question: 'Stress-strain lines of wires P and Q make angles 60° and 45° with the strain axis. Y_P : Y_Q is:',
            options: ['√3 : 1', '1 : √3', '3 : 1', '2 : 1'],
            answer: '√3 : 1',
            solution: 'Y_P/Y_Q = tan 60°/tan 45° = √3/1.',
          },
        },
      ],
    },
    {
      name: 'Bulk Modulus, Shear Modulus and Poisson\'s Ratio',
      theory:
        'A uniform pressure change ΔP applied all around a body changes its volume. The ==bulk modulus B = −ΔP/(ΔV/V)== (the minus sign makes B positive since volume decreases when pressure increases). Its reciprocal is the ==compressibility k = 1/B==. Solids, liquids and gases all have a bulk modulus; for an ideal gas the isothermal bulk modulus is P and the adiabatic one is γP.\n\nA tangential force F on a face of area A produces a shear strain θ ≈ Δx/L. The ==modulus of rigidity G = (F/A)/θ==. Fluids cannot sustain a steady shear, so ==liquids and gases have no shear modulus or Young\'s modulus==.\n\nWhen a wire is stretched it also becomes thinner. ==Poisson\'s ratio σ = −(lateral strain)/(longitudinal strain)== = −(Δr/r)/(ΔL/L). Theoretically −1 < σ < 0.5, but for real materials it lies between 0 and 0.5. The moduli are related by Y = 2G(1 + σ) = 3B(1 − 2σ).',
      keyPoints: [
        '==B = −ΔP/(ΔV/V)==; compressibility = 1/B.',
        'For a sphere under pressure p: ΔV/V = p/B and ==Δr/r = p/(3B)==.',
        'G = shear stress/shear strain; fluids have only bulk modulus.',
        '==Y = 2G(1 + σ) = 3B(1 − 2σ)==; σ = 0.5 ⇒ volume does not change on stretching.',
      ],
      formulas: ['B = −ΔP/(ΔV/V)', 'G = (F/A)/θ', 'σ = −(Δr/r)/(ΔL/L)', 'Y = 2G(1 + σ)', 'Y = 3B(1 − 2σ)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - sphere under pressure / bulk modulus',
        question:
          'A solid sphere of radius r and bulk modulus B is subjected to a uniform pressure p. The fractional decrease in its radius is:',
        approach: [
          'From the definition of bulk modulus, ΔV/V = p/B.',
          'V = (4/3)πr³ ⇒ ΔV/V = 3(Δr/r).',
          'So Δr/r = p/(3B).',
        ],
        answer: 'p/(3B)',
      },
      questions: [
        {
          question: 'A pressure increase of 2 × 10⁷ Pa reduces the volume of a liquid by 0.4%. Its bulk modulus is:',
          options: ['5 × 10⁹ Pa', '5 × 10⁷ Pa', '8 × 10⁴ Pa', '2 × 10⁹ Pa'],
          answer: '5 × 10⁹ Pa',
          difficulty: 'Easy',
          hint: 'B = ΔP/(ΔV/V); write 0.4% as a fraction.',
          solution: 'ΔV/V = 0.4/100 = 4 × 10⁻³. B = 2 × 10⁷/(4 × 10⁻³) = 5 × 10⁹ Pa.',
          similar: {
            question: 'The bulk modulus of water is 2.2 × 10⁹ Pa. The percentage decrease in its volume under an extra pressure of 1.1 × 10⁷ Pa is:',
            options: ['0.5%', '0.05%', '5%', '0.2%'],
            answer: '0.5%',
            solution: 'ΔV/V = ΔP/B = 1.1 × 10⁷/2.2 × 10⁹ = 5 × 10⁻³ = 0.5%.',
          },
        },
        {
          question: 'A cube of side 10 cm has its lower face fixed. A tangential force of 10⁴ N acts on the top face. If G = 10¹⁰ Pa, the lateral displacement of the top face is:',
          options: ['10⁻⁵ m', '10⁻⁴ m', '10⁻³ m', '10⁻⁶ m'],
          answer: '10⁻⁵ m',
          difficulty: 'Medium',
          hint: 'Shear strain θ = (F/A)/G and displacement = θ × side.',
          solution: 'A = (0.1)² = 10⁻² m². θ = 10⁴/(10⁻² × 10¹⁰) = 10⁻⁴. Displacement = θL = 10⁻⁴ × 0.1 = 10⁻⁵ m.',
          similar: {
            question: 'A cube of side 20 cm with its base fixed has a tangential force of 8 × 10³ N on its top face. If G = 4 × 10¹⁰ Pa, the top face shifts by:',
            options: ['10⁻⁶ m', '5 × 10⁻⁶ m', '2 × 10⁻⁶ m', '10⁻⁵ m'],
            answer: '10⁻⁶ m',
            solution: 'A = 0.04 m². θ = 8 × 10³/(0.04 × 4 × 10¹⁰) = 5 × 10⁻⁶. Shift = 5 × 10⁻⁶ × 0.2 = 10⁻⁶ m.',
          },
        },
        {
          question: 'For a material Y = 2.4 × 10¹¹ Pa and G = 1.0 × 10¹¹ Pa. Its Poisson\'s ratio is:',
          options: ['0.2', '0.4', '0.25', '0.1'],
          answer: '0.2',
          difficulty: 'Hard',
          hint: 'Use Y = 2G(1 + σ).',
          solution: '1 + σ = Y/(2G) = 2.4/2 = 1.2 ⇒ σ = 0.2.',
          similar: {
            question: 'For a metal Y = 2.6 × 10¹¹ Pa and G = 1.0 × 10¹¹ Pa. Its Poisson\'s ratio is:',
            options: ['0.3', '0.13', '0.6', '0.26'],
            answer: '0.3',
            solution: '1 + σ = 2.6/2 = 1.3 ⇒ σ = 0.3.',
          },
        },
      ],
    },
    {
      name: 'Elastic Potential Energy',
      theory:
        'Work done in stretching a wire is stored in it as ==elastic potential energy==. If the load is increased gradually from zero to F producing extension ΔL, the average force is F/2, so ==U = ½ F ΔL==.\n\nDividing by the volume AL gives the ==energy density u = ½ × stress × strain = stress²/(2Y) = ½ Y (strain)²==. Substituting ΔL = FL/(AY) gives U = F²L/(2AY), which is useful for comparing wires carrying the same load.\n\nIf a load Mg is attached and released, gravity does work Mg ΔL while only ½ Mg ΔL is stored as elastic energy; the ==other half is lost as heat== while the oscillations die out.',
      keyPoints: [
        '==U = ½ × F × ΔL== = ½ × stress × strain × volume.',
        'Energy per unit volume u = stress²/(2Y) = ½Y(strain)².',
        'Same load: U = F²L/(2AY) ⇒ U ∝ L/(r²Y).',
        'Loss in gravitational PE = 2 × elastic energy stored.',
      ],
      formulas: ['U = ½FΔL', 'U = F²L/(2AY)', 'u = ½ × stress × strain', 'u = stress²/(2Y)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Frequently - energy stored / energy density',
        question:
          'A load is suspended from a wire, producing extension ΔL. What is the ratio of the elastic energy stored in the wire to the loss in gravitational potential energy of the load?',
        approach: [
          'Elastic energy stored = ½ Mg ΔL (average force × extension).',
          'Loss in gravitational PE = Mg ΔL.',
          'Ratio = ½; the remaining half is dissipated as heat.',
        ],
        answer: '1 : 2',
      },
      questions: [
        {
          question: 'A force of 100 N applied gradually stretches a wire by 2 mm. The energy stored in the wire is:',
          options: ['0.1 J', '0.2 J', '0.05 J', '1 J'],
          answer: '0.1 J',
          difficulty: 'Easy',
          hint: 'U = ½ × F × ΔL.',
          solution: 'U = ½ × 100 × 2 × 10⁻³ = 0.1 J.',
          similar: {
            question: 'A force of 200 N gradually stretches a wire by 1 mm. The energy stored is:',
            options: ['0.1 J', '0.2 J', '0.05 J', '0.4 J'],
            answer: '0.1 J',
            solution: 'U = ½ × 200 × 10⁻³ = 0.1 J.',
          },
        },
        {
          question: 'A steel wire (Y = 2 × 10¹¹ Pa) is under a longitudinal strain of 10⁻³. The elastic energy stored per unit volume is:',
          options: ['10⁵ J/m³', '2 × 10⁵ J/m³', '10⁸ J/m³', '10² J/m³'],
          answer: '10⁵ J/m³',
          difficulty: 'Medium',
          hint: 'u = ½ Y (strain)².',
          solution: 'u = ½ × 2 × 10¹¹ × (10⁻³)² = 10¹¹ × 10⁻⁶ = 10⁵ J/m³.',
          similar: {
            question: 'A wire (Y = 2 × 10¹¹ Pa) carries a stress of 4 × 10⁸ Pa. Energy stored per unit volume:',
            options: ['4 × 10⁵ J/m³', '2 × 10⁵ J/m³', '8 × 10⁵ J/m³', '10⁵ J/m³'],
            answer: '4 × 10⁵ J/m³',
            solution: 'u = stress²/(2Y) = (16 × 10¹⁶)/(4 × 10¹¹) = 4 × 10⁵ J/m³.',
          },
        },
        {
          question: 'Two wires of the same material and length have radii r and 2r. The same load is hung from each. Ratio of elastic energies stored U₁ : U₂ is:',
          options: ['4 : 1', '1 : 4', '2 : 1', '16 : 1'],
          answer: '4 : 1',
          difficulty: 'Hard',
          hint: 'For a fixed load, U = F²L/(2AY).',
          solution: 'U ∝ 1/A ∝ 1/r². U₁/U₂ = (2r)²/r² = 4.',
          similar: {
            question: 'Two wires of the same material and radius have lengths L and 2L and carry the same load. U₁ : U₂ is:',
            options: ['1 : 2', '2 : 1', '1 : 4', '1 : 1'],
            answer: '1 : 2',
            solution: 'U = F²L/(2AY) ∝ L ⇒ U₁ : U₂ = 1 : 2.',
          },
        },
      ],
    },
    {
      name: 'Thermal Stress, Own-Weight Elongation and Applications',
      theory:
        'If a rod is clamped between rigid supports and heated by ΔT, it is prevented from expanding by ΔL = LαΔT. The supports therefore compress it by this amount, producing a ==thermal stress YαΔT== and a force F = YAαΔT on the supports. Note that the stress does not depend on the length of the rod.\n\nA wire or rope hanging under its own weight has tension that increases from zero at the bottom to Mg at the top. Integrating gives the elongation ==ΔL = MgL/(2AY) = ρgL²/(2Y)==, which is half of what the same weight would produce if hung at the end.\n\nA wire hanging vertically breaks when the stress at the top, ρgL, equals the breaking stress, so the ==maximum length L_max = σ_breaking/(ρg)==. The same idea limits the height of mountains. In engineering, the depression of a beam loaded at the centre is δ = WL³/(4bd³Y); since δ ∝ 1/d³, beams are made with ==large depth (I-section)== to minimise bending.',
      keyPoints: [
        '==Thermal stress = YαΔT==; force = YAαΔT.',
        'Own-weight elongation ==ρgL²/(2Y)==, half that of an end load Mg.',
        'Maximum length of a hanging wire L_max = breaking stress/(ρg).',
        'Beam depression δ = WL³/(4bd³Y) ⇒ increase depth d to reduce bending.',
      ],
      formulas: ['Thermal stress = YαΔT', 'F = YAαΔT', 'ΔL(own weight) = ρgL²/(2Y)', 'L_max = σ_b/(ρg)', 'δ = WL³/(4bd³Y)'],
      pyq: {
        exam: 'JEE Main',
        frequency: 'Recurring - thermal stress force',
        question:
          'A steel rod of cross-section 10⁻⁴ m² is fixed between two rigid walls and heated through 100 °C. Find the force exerted on the walls (Y = 2 × 10¹¹ Pa, α = 1.1 × 10⁻⁵ /°C).',
        approach: [
          'Free expansion is prevented, so thermal strain = αΔT.',
          'Force F = YAαΔT = 2 × 10¹¹ × 10⁻⁴ × 1.1 × 10⁻⁵ × 100.',
          'F = 2 × 10⁷ × 1.1 × 10⁻³ = 2.2 × 10⁴ N.',
        ],
        answer: '2.2 × 10⁴ N',
      },
      questions: [
        {
          question: 'A steel rod is clamped rigidly at both ends and heated by 50 °C. Thermal stress developed (Y = 2 × 10¹¹ Pa, α = 1.2 × 10⁻⁵ /°C):',
          options: ['1.2 × 10⁸ Pa', '1.2 × 10⁶ Pa', '2.4 × 10⁸ Pa', '6 × 10⁷ Pa'],
          answer: '1.2 × 10⁸ Pa',
          difficulty: 'Easy',
          hint: 'Thermal stress = YαΔT.',
          solution: 'Stress = 2 × 10¹¹ × 1.2 × 10⁻⁵ × 50 = 1.2 × 10⁸ Pa.',
          similar: {
            question: 'A clamped rod with Y = 10¹¹ Pa and α = 10⁻⁵ /°C is heated by 100 °C. Thermal stress:',
            options: ['10⁸ Pa', '10⁶ Pa', '10¹⁰ Pa', '2 × 10⁸ Pa'],
            answer: '10⁸ Pa',
            solution: 'Stress = 10¹¹ × 10⁻⁵ × 100 = 10⁸ Pa.',
          },
        },
        {
          question: 'A rubber cord 8 m long hangs from a ceiling. Density = 1.5 × 10³ kg/m³, Y = 5 × 10⁶ Pa, g = 10 m/s². Its elongation under its own weight is:',
          options: ['9.6 cm', '19.2 cm', '4.8 cm', '0.96 cm'],
          answer: '9.6 cm',
          difficulty: 'Medium',
          hint: 'Own-weight elongation = ρgL²/(2Y).',
          solution: 'ΔL = (1.5 × 10³ × 10 × 64)/(2 × 5 × 10⁶) = 9.6 × 10⁵/10⁷ = 0.096 m = 9.6 cm.',
          similar: {
            question: 'The same rubber (ρ = 1.5 × 10³ kg/m³, Y = 5 × 10⁶ Pa) is used as a 4 m long hanging cord. Elongation under its own weight (g = 10 m/s²):',
            options: ['2.4 cm', '4.8 cm', '1.2 cm', '9.6 cm'],
            answer: '2.4 cm',
            solution: 'ΔL = (1.5 × 10³ × 10 × 16)/(10⁷) = 0.024 m = 2.4 cm (note ΔL ∝ L²).',
          },
        },
        {
          question: 'The breaking stress of steel is 8 × 10⁸ Pa and its density is 8000 kg/m³. The maximum length of a steel wire that can hang vertically without breaking (g = 10 m/s²) is:',
          options: ['10⁴ m', '10³ m', '10⁵ m', '5 × 10³ m'],
          answer: '10⁴ m',
          difficulty: 'Hard',
          hint: 'The stress at the top of the wire is ρgL.',
          solution: 'ρgL_max = σ_b ⇒ L_max = 8 × 10⁸/(8000 × 10) = 10⁴ m. The answer does not depend on the area.',
          similar: {
            question: 'A wire has breaking stress 4.8 × 10⁸ Pa and density 8000 kg/m³. Maximum length that can hang without breaking (g = 10 m/s²):',
            options: ['6000 m', '3000 m', '600 m', '12000 m'],
            answer: '6000 m',
            solution: 'L_max = 4.8 × 10⁸/(8 × 10⁴) = 6000 m.',
          },
        },
      ],
    },
  ],
};
