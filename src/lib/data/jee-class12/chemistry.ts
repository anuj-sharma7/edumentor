import type { JeeSubject } from './types';

export const chemistry12: JeeSubject = {
  subject: 'Chemistry',
  chapters: [
    {
      name: 'Solutions',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Colligative properties and Raoult\'s law are the heart of this chapter. Expect a numerical (often integer type) every session.',
      importantTopics: [
        { name: 'Colligative properties', hot: true, note: 'ΔTb, ΔTf, osmotic pressure, relative lowering of VP' },
        { name: 'van\'t Hoff factor (i)', hot: true, note: 'Association / dissociation, degree α' },
        { name: 'Raoult\'s law & ideal solutions', hot: true, note: 'Vapour composition, Dalton + Raoult combined' },
        { name: 'Deviations & azeotropes', note: 'Positive (ethanol-water), negative (HNO₃-water, acetone-CHCl₃)' },
        { name: 'Concentration terms', note: 'Molarity, molality, mole fraction, ppm interconversion' },
        { name: 'Henry\'s law', note: 'Solubility of gases, KH and temperature' },
      ],
      theory: [
        {
          heading: 'Concentration terms',
          body:
            'Molarity M = moles of solute per litre of solution (==temperature dependent==). Molality m = moles of solute per kg of solvent (==temperature independent==). Mole fraction, mass %, ppm are also temperature independent. Relation: m = 1000M/(1000d − M·M_solute).',
        },
        {
          heading: 'Raoult\'s law',
          body:
            'For volatile components: ==p_A = x_A p°_A==, total P = x_A p°_A + x_B p°_B. Vapour-phase mole fraction y_A = p_A/P - vapour is richer in the more volatile component. For a non-volatile solute: relative lowering of vapour pressure ==(p° − p)/p° = x_solute==.',
        },
        {
          heading: 'Ideal and non-ideal solutions',
          body:
            'Ideal: obeys Raoult\'s law at all compositions, ΔH_mix = 0, ΔV_mix = 0 (benzene-toluene, hexane-heptane). ==Positive deviation==: A-B interactions weaker, ΔH_mix > 0, ΔV > 0, forms minimum boiling azeotrope (ethanol-water, acetone-CS₂). ==Negative deviation==: A-B stronger, ΔH_mix < 0, forms maximum boiling azeotrope (HNO₃-water, CHCl₃-acetone, HCl-water).',
        },
        {
          heading: 'Colligative properties',
          body:
            'Depend on the ==number of solute particles==, not their nature. ΔTb = iKb·m; ΔTf = iKf·m; osmotic pressure ==π = iCRT==; relative lowering of VP = i·x_solute (dilute). Isotonic solutions have equal π. Reverse osmosis (pressure > π) is used for desalination.',
        },
        {
          heading: 'van\'t Hoff factor',
          body:
            'i = observed colligative property / calculated = normal molar mass / observed molar mass. Dissociation: ==i = 1 + (n − 1)α==. Association (n molecules → 1): ==i = 1 − (1 − 1/n)α==. E.g. acetic acid dimerises in benzene (i ≈ 0.5), NaCl in water i ≈ 2, K₄[Fe(CN)₆] i = 5 (complete).',
        },
      ],
      keyPoints: [
        '==Molality is preferred== in colligative properties because it does not change with temperature.',
        'Higher i × m → higher boiling point, lower freezing point.',
        'Henry\'s law: p = K_H x; ==higher K_H means lower solubility==; gas solubility decreases with temperature.',
        'Kb = RTb²M/1000ΔHvap (in proper units) - depends only on the solvent.',
        'Abnormal molar mass arises from association/dissociation.',
      ],
      formulas: [
        { label: 'Raoult\'s law', important: true, expr: 'p_A = x_A p°_A ,  P = x_A p°_A + x_B p°_B' },
        { label: 'Vapour composition', expr: 'y_A = x_A p°_A / P' },
        { label: 'Relative lowering of VP', important: true, expr: '(p° − p)/p° = i · n₂/(n₁ + n₂)' },
        { label: 'Elevation in BP', important: true, expr: 'ΔTb = i Kb m' },
        { label: 'Depression in FP', important: true, expr: 'ΔTf = i Kf m' },
        { label: 'Osmotic pressure', important: true, expr: 'π = iCRT' },
        { label: 'van\'t Hoff (dissociation)', important: true, expr: 'i = 1 + (n − 1)α' },
        { label: 'van\'t Hoff (association)', expr: 'i = 1 − (1 − 1/n)α' },
        { label: 'Henry\'s law', expr: 'p = K_H · x' },
      ],
      mistakes: [
        'Using molarity instead of molality in ΔTb/ΔTf.',
        'Forgetting i for electrolytes.',
        'Confusing which deviation forms maximum/minimum boiling azeotrope.',
      ],
      pyqTrend:
        'Colligative property numericals with van\'t Hoff factor and Raoult\'s law vapour composition are the most repeated. Good integer-type source.',
    },
    {
      name: 'Electrochemistry',
      priority: 'Very High',
      weightage: '2 Qs',
      difficulty: 'Moderate',
      overview:
        'Nernst equation, conductance and Faraday\'s laws. Among the most important physical chemistry chapters for JEE.',
      importantTopics: [
        { name: 'Nernst equation & cell EMF', hot: true, note: 'Concentration cells, EMF at non-standard conditions' },
        { name: 'ΔG, K and E° relations', hot: true, note: 'ΔG° = −nFE°, E° = (0.059/n)log K' },
        { name: 'Conductance & Kohlrausch\'s law', hot: true, note: 'Λm, Λm°, degree of dissociation of weak electrolytes' },
        { name: 'Faraday\'s laws of electrolysis', note: 'Mass deposited, products at electrodes' },
        { name: 'Electrochemical series', note: 'Reducing/oxidising strength, feasibility of reactions' },
        { name: 'Batteries, fuel cells & corrosion', note: 'Lead storage, H₂-O₂ fuel cell, rusting' },
      ],
      theory: [
        {
          heading: 'Galvanic cells',
          body:
            'Oxidation at ==anode (−)==, reduction at ==cathode (+)== in a galvanic cell. E°cell = E°cathode − E°anode (using reduction potentials). The salt bridge completes the circuit and maintains electrical neutrality. A higher reduction potential means a stronger oxidising agent (F₂ strongest), lower means stronger reducing agent (Li strongest in water).',
        },
        {
          heading: 'Nernst equation',
          body:
            'For aA + bB → cC + dD: ==E = E° − (0.059/n) log Q== at 298 K. At equilibrium E = 0 so E° = (0.059/n) log K. Concentration cell: E° = 0, E = (0.059/n) log(C_cathode/C_anode) - works only if cathode is more concentrated. Hydrogen electrode: E = −0.059 pH (at 1 bar H₂).',
        },
        {
          heading: 'Thermodynamics of cells',
          body:
            '==ΔG = −nFE==, ΔG° = −nFE° = −RT ln K. A spontaneous cell has E > 0, ΔG < 0. Temperature coefficient: ΔS = nF(∂E/∂T), ΔH = −nFE + TnF(∂E/∂T). When adding half-cell potentials (not full cells), add ΔG values, not E values.',
        },
        {
          heading: 'Conductance',
          body:
            'κ (conductivity) = (1/R)(l/A); cell constant G* = l/A. Molar conductivity ==Λm = κ × 1000/C== (S cm² mol⁻¹). κ decreases on dilution, but ==Λm increases on dilution==. Strong electrolytes: Λm = Λm° − A√C (Debye-Hückel-Onsager). Kohlrausch\'s law: Λm° = ν₊λ°₊ + ν₋λ°₋ - used to find Λm° of weak electrolytes and α = Λm/Λm°.',
        },
        {
          heading: 'Electrolysis',
          body:
            'Faraday\'s first law: ==w = ZIt = (E/F)It== (E = equivalent weight). Second law: for the same charge, masses deposited ∝ equivalent weights. 1 F = 96500 C = charge of 1 mol electrons. Products depend on the standard potentials and overpotential - e.g. aqueous NaCl gives Cl₂ at anode (overpotential of O₂), H₂ at cathode.',
        },
      ],
      keyPoints: [
        '==E° is intensive== - do not multiply it when balancing equations.',
        'Λm increases sharply on dilution for weak electrolytes (more dissociation); slowly for strong ones.',
        'Lead storage battery: anode Pb, cathode PbO₂, electrolyte 38% H₂SO₄; on discharge H₂SO₄ is consumed.',
        'Corrosion of iron is electrochemical: Fe is anode, O₂ reduction at cathode; rust is Fe₂O₃·xH₂O.',
        'Ka of weak acid via conductance: Ka = Cα²/(1 − α), α = Λm/Λm°.',
      ],
      formulas: [
        { label: 'Cell EMF', expr: 'E°cell = E°cathode − E°anode' },
        { label: 'Nernst equation', important: true, expr: 'E = E° − (0.059/n) log Q  (298 K)' },
        { label: 'Equilibrium constant', important: true, expr: 'E° = (0.059/n) log K' },
        { label: 'Gibbs energy', important: true, expr: 'ΔG = −nFE ,  ΔG° = −RT ln K' },
        { label: 'Conductivity', expr: 'κ = G* / R ,  G* = l/A' },
        { label: 'Molar conductivity', important: true, expr: 'Λm = 1000κ / C' },
        { label: 'Kohlrausch', important: true, expr: 'Λm° = ν₊λ°₊ + ν₋λ°₋' },
        { label: 'Debye-Hückel-Onsager', expr: 'Λm = Λm° − A√C' },
        { label: 'Degree of dissociation', expr: 'α = Λm / Λm°' },
        { label: 'Faraday\'s first law', important: true, expr: 'w = (M/nF) · I · t' },
        { label: 'Hydrogen electrode', expr: 'E = −0.059 pH' },
      ],
      mistakes: [
        'Multiplying E° by stoichiometric coefficients.',
        'Wrong Q in Nernst - solids and pure liquids are excluded.',
        'Unit errors in Λm (S cm² mol⁻¹ needs C in mol/L with factor 1000).',
      ],
      pyqTrend:
        'Nernst equation numericals (often concentration cells or pH-dependent cells) and Kohlrausch\'s law are asked every year. Faraday\'s law appears as integer-type.',
    },
    {
      name: 'Chemical Kinetics',
      priority: 'Very High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Order of reaction, integrated rate laws, half-life and Arrhenius equation. Mostly numerical and highly scoring.',
      importantTopics: [
        { name: 'First-order kinetics', hot: true, note: 'k = (2.303/t) log(a/(a − x)), half-life, % completion' },
        { name: 'Arrhenius equation', hot: true, note: 'Activation energy from rate constants at two temperatures' },
        { name: 'Order & molecularity', hot: true, note: 'Units of k, determining order from data' },
        { name: 'Zero-order reactions', note: 't½ ∝ [A]₀, complete in finite time' },
        { name: 'Graphs of integrated rate laws', note: 'ln[A] vs t, [A] vs t, 1/[A] vs t' },
        { name: 'Pseudo first-order & parallel reactions', note: 'Hydrolysis of ester, sucrose inversion' },
        { name: 'Collision theory & catalysis', note: 'Effective collisions, catalyst lowers Ea' },
      ],
      theory: [
        {
          heading: 'Rate of reaction',
          body:
            'For aA + bB → cC: rate = −(1/a)d[A]/dt = (1/c)d[C]/dt. Rate law: ==rate = k[A]^x[B]^y==, order = x + y, determined ==experimentally== (not from stoichiometry). Molecularity is theoretical, only for elementary reactions, always a whole number (1, 2, rarely 3). Units of k: (mol L⁻¹)^(1−n) s⁻¹.',
        },
        {
          heading: 'Integrated rate laws',
          body:
            'Zero order: [A] = [A]₀ − kt, ==t½ = [A]₀/2k==. First order: ==k = (2.303/t) log([A]₀/[A])==, ==t½ = 0.693/k== (independent of initial concentration). Second order (single reactant): 1/[A] = 1/[A]₀ + kt, t½ = 1/k[A]₀. For nth order, t½ ∝ [A]₀^(1−n).',
        },
        {
          heading: 'First-order shortcuts',
          body:
            'Time for 99.9% completion ≈ ==10 × t½==; for 99% ≈ 6.64 t½; t₇₅% = 2t½. Amount left after n half-lives = [A]₀/2ⁿ. For gaseous reactions use pressures: k = (2.303/t) log(P₀/(2P₀ − Pt)) for A → B + C.',
        },
        {
          heading: 'Temperature dependence',
          body:
            'Arrhenius: ==k = A e^(−Ea/RT)==. log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂). Plot of ln k vs 1/T is a straight line with slope −Ea/R. Rule of thumb: rate roughly doubles for every 10 K rise (temperature coefficient ≈ 2-3). A catalyst lowers Ea, does not change ΔH or equilibrium constant.',
        },
      ],
      keyPoints: [
        '==Order can be zero, fractional or negative==; molecularity cannot.',
        'Radioactive decay is always first order.',
        'Pseudo first order: one reactant in large excess (e.g. water in ester hydrolysis).',
        'Parallel first-order reactions: k_eff = k₁ + k₂, fraction of product B = k₁/(k₁ + k₂).',
        'Rate-determining step = slowest step of the mechanism.',
      ],
      formulas: [
        { label: 'Zero order', important: true, expr: '[A] = [A]₀ − kt ,  t½ = [A]₀/2k' },
        { label: 'First order', important: true, expr: 'k = (2.303/t) log([A]₀/[A])' },
        { label: 'First-order half-life', important: true, expr: 't½ = 0.693 / k' },
        { label: 'Second order', expr: '1/[A] − 1/[A]₀ = kt ,  t½ = 1/k[A]₀' },
        { label: 'nth order half-life', expr: 't½ ∝ 1/[A]₀^(n − 1)' },
        { label: 'Arrhenius', important: true, expr: 'k = A e^(−Ea/RT)' },
        { label: 'Two temperatures', important: true, expr: 'log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)' },
        { label: 'Units of k', expr: '(mol L⁻¹)^(1−n) s⁻¹' },
      ],
      mistakes: [
        'Taking order from the balanced equation.',
        'Using ln and log interchangeably without 2.303.',
        'Forgetting temperature in Kelvin in Arrhenius equation.',
      ],
      pyqTrend:
        'First-order half-life/percentage completion and Arrhenius Ea calculation are near-certain. Graph-based order identification is also common.',
    },
    {
      name: 'p-Block Elements (Groups 15-18)',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Fact-heavy inorganic chapter. Structures of oxoacids, trends and important reactions are asked as statement-type questions.',
      importantTopics: [
        { name: 'Oxoacids of P, S, N & halogens - structures', hot: true, note: 'Basicity, P-H bonds, oxidation states' },
        { name: 'Interhalogen & xenon compounds', hot: true, note: 'Shapes via VSEPR: XeF₂, XeF₄, XeF₆, XeOF₄, ClF₃' },
        { name: 'Anomalous behaviour of first members', note: 'N, O, F' },
        { name: 'Trends - acidity, thermal stability, bond angles of hydrides', hot: true, note: 'NH₃ > PH₃ … bond angles, H₂O vs H₂S' },
        { name: 'Preparation & properties of NH₃, HNO₃, H₂SO₄, O₃, Cl₂', note: 'Haber, Ostwald, Contact process' },
        { name: 'Allotropes', note: 'Phosphorus (white, red, black), sulphur (rhombic, monoclinic)' },
      ],
      theory: [
        {
          heading: 'Group 15 (N family)',
          body:
            'Stability of +5 state decreases and +3 increases down the group (==inert pair effect==). Hydrides: basicity and bond angle decrease NH₃ > PH₃ > AsH₃ > SbH₃, reducing character increases. N forms pπ-pπ multiple bonds (N₂ is inert), P does not. White phosphorus (P₄, tetrahedral, highly reactive, stored in water) vs red (polymeric, less reactive).',
        },
        {
          heading: 'Oxoacids of phosphorus',
          body:
            'Basicity = number of ==P-OH bonds==; P-H bonds give reducing nature. ==H₃PO₂ (monobasic, 2 P-H)==, H₃PO₃ (dibasic, 1 P-H), H₃PO₄ (tribasic, no P-H). H₄P₂O₇ (pyrophosphoric) is tetrabasic. H₃PO₂ and H₃PO₃ disproportionate on heating.',
        },
        {
          heading: 'Group 16 (O family)',
          body:
            'Acidic character of hydrides increases H₂O < H₂S < H₂Se < H₂Te, thermal stability decreases. Ozone is a strong oxidising agent, bent molecule. ==H₂SO₄ by Contact process== (V₂O₅ catalyst, SO₂ → SO₃ absorbed in H₂SO₄ to form oleum H₂S₂O₇). Peroxy acids: H₂SO₅ (Caro\'s acid), H₂S₂O₈ (Marshall\'s acid) contain O-O bonds.',
        },
        {
          heading: 'Group 17 (Halogens)',
          body:
            'F is the most electronegative, ==but Cl has the highest electron gain enthalpy== (small size of F causes repulsion). Bond energy order: Cl₂ > Br₂ > F₂ > I₂. Oxidising power F₂ > Cl₂ > Br₂ > I₂. Acid strength of HX: HI > HBr > HCl > HF. Oxoacid strength: HOCl < HClO₂ < HClO₃ < HClO₄. Interhalogens XX\'n: shapes - ClF₃ (T-shaped), BrF₅ (square pyramidal), IF₇ (pentagonal bipyramidal).',
        },
        {
          heading: 'Group 18 (Noble gases)',
          body:
            'Xe forms compounds with F and O because of its low ionisation energy. ==XeF₂ - linear (sp³d), XeF₄ - square planar (sp³d²), XeF₆ - distorted octahedral (sp³d³)==, XeO₃ - pyramidal, XeOF₄ - square pyramidal. Hydrolysis of XeF₆ gives XeO₃ (complete) or XeOF₄ (partial).',
        },
      ],
      keyPoints: [
        '==Basicity of oxoacids of P = number of P-OH groups==, not number of H atoms.',
        'Bond angle: NH₃ (107°) > PH₃ (93.6°); H₂O (104.5°) > H₂S (92°).',
        'HF is a weak acid but forms H-bonded (HF)ₙ; HF can etch glass.',
        'Nitrogen\'s maximum covalency is 4 (no d-orbitals).',
        'Brown ring test: [Fe(H₂O)₅NO]²⁺ for nitrate.',
      ],
      formulas: [
        { label: 'Haber process', important: true, expr: 'N₂ + 3H₂ ⇌ 2NH₃  (Fe catalyst, Mo promoter, 200 atm, 700 K)' },
        { label: 'Ostwald process', expr: '4NH₃ + 5O₂ → 4NO + 6H₂O  (Pt/Rh, 500 K)' },
        { label: 'Contact process', important: true, expr: '2SO₂ + O₂ ⇌ 2SO₃  (V₂O₅);  SO₃ + H₂SO₄ → H₂S₂O₇' },
        { label: 'Deacon process', expr: '4HCl + O₂ → 2Cl₂ + 2H₂O  (CuCl₂)' },
        { label: 'Xenon hydrolysis', important: true, expr: 'XeF₆ + 3H₂O → XeO₃ + 6HF' },
        { label: 'Bleaching powder', expr: '2Ca(OH)₂ + 2Cl₂ → Ca(OCl)₂ + CaCl₂ + 2H₂O' },
      ],
      mistakes: [
        'Counting all H atoms for basicity of H₃PO₃ / H₃PO₂.',
        'Saying F has the highest electron gain enthalpy (it is Cl).',
      ],
      pyqTrend:
        'Structures/shapes of xenon fluorides and interhalogens, and oxoacids of phosphorus/sulphur are most frequently asked, often as statement or match-the-column questions.',
    },
    {
      name: 'd- and f-Block Elements',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Properties of transition metals, KMnO₄ and K₂Cr₂O₇ chemistry, and lanthanoid contraction. Very fact-oriented.',
      importantTopics: [
        { name: 'KMnO₄ & K₂Cr₂O₇ - preparation & reactions', hot: true, note: 'In acidic/neutral/basic medium, n-factor' },
        { name: 'Magnetic moment (spin-only)', hot: true, note: 'μ = √(n(n + 2)) BM' },
        { name: 'Lanthanoid contraction & consequences', hot: true, note: 'Zr-Hf similar size, basicity of Ln(OH)₃ decreases' },
        { name: 'General trends', note: 'Variable oxidation states, colour, catalytic property, interstitial compounds' },
        { name: 'E° values of M²⁺/M and M³⁺/M²⁺', note: 'Why Cu has +ve E°, Mn²⁺ and Fe³⁺ stability' },
        { name: 'Actinoids vs Lanthanoids', note: 'Oxidation states, radioactivity' },
      ],
      theory: [
        {
          heading: 'General properties',
          body:
            'Configuration (n − 1)d¹⁻¹⁰ns¹⁻². Show ==variable oxidation states== (Mn shows +2 to +7), coloured ions (d-d transitions; d⁰ and d¹⁰ are colourless, e.g. Sc³⁺, Zn²⁺, Cu⁺), paramagnetism, catalytic activity (Fe in Haber, V₂O₅ in Contact, Ni in hydrogenation), complex formation and interstitial compounds. Zn, Cd, Hg are not considered typical transition elements (full d¹⁰).',
        },
        {
          heading: 'Trends in the 3d series',
          body:
            'Melting point peaks around the middle (Cr, Mo, W - many unpaired electrons, strong metallic bonding). ==Mn²⁺ (d⁵) and Fe³⁺ (d⁵)== are extra stable (half-filled). Cu has a positive E°(Cu²⁺/Cu) = +0.34 V - high atomisation enthalpy not compensated by hydration enthalpy - so it does not liberate H₂ from acids. Cr²⁺ is a reducing agent, Mn³⁺ an oxidising agent (both move towards d³ and d⁵ stable configurations).',
        },
        {
          heading: 'Potassium dichromate',
          body:
            'Prepared from chromite ore FeCr₂O₄ → Na₂CrO₄ → Na₂Cr₂O₇ → K₂Cr₂O₇. ==Chromate ⇌ dichromate depends on pH==: 2CrO₄²⁻ (yellow) + 2H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O. Acidified K₂Cr₂O₇ is a strong oxidising agent: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (n-factor 6). Oxidises I⁻ → I₂, Fe²⁺ → Fe³⁺, H₂S → S.',
        },
        {
          heading: 'Potassium permanganate',
          body:
            'Prepared by fusing MnO₂ with KOH and an oxidant → K₂MnO₄ (green), then disproportionation/oxidation → KMnO₄ (purple). n-factor: ==acidic 5 (→ Mn²⁺), neutral/weakly basic 3 (→ MnO₂), strongly basic 1 (→ MnO₄²⁻)==. Self-indicator in titrations. HCl is not used to acidify it (Cl⁻ gets oxidised).',
        },
        {
          heading: 'Lanthanoids and actinoids',
          body:
            '==Lanthanoid contraction==: steady decrease in atomic/ionic radii from La to Lu due to poor shielding of 4f electrons. Consequences: Zr and Hf have almost identical radii, difficulty in separating lanthanoids, basicity of Ln(OH)₃ decreases. Common oxidation state +3 (Ce⁴⁺ oxidant, Eu²⁺ reductant). Actinoids show a larger range of oxidation states (5f, 6d, 7s close in energy) and are all radioactive.',
        },
      ],
      keyPoints: [
        '==Spin-only μ = √(n(n + 2)) BM==: n = 1 → 1.73, 2 → 2.83, 3 → 3.87, 4 → 4.90, 5 → 5.92.',
        'Highest oxidation state of Mn (+7) and Os (+8) are shown in oxides/oxoanions (oxygen stabilises high states better than F due to multiple bonding).',
        'Interstitial compounds are hard, high melting, chemically inert, retain metallic conductivity.',
        'Alloys form readily as atomic radii are similar.',
        'Misch metal = lanthanoids + Fe, used in lighter flints.',
      ],
      formulas: [
        { label: 'Spin-only magnetic moment', important: true, expr: 'μ = √(n(n + 2)) BM' },
        { label: 'KMnO₄ (acidic)', important: true, expr: 'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O' },
        { label: 'KMnO₄ (neutral)', expr: 'MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻' },
        { label: 'K₂Cr₂O₇ (acidic)', important: true, expr: 'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O' },
        { label: 'Chromate ⇌ Dichromate', important: true, expr: '2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O' },
        { label: 'Manganate disproportionation', expr: '3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O' },
      ],
      mistakes: [
        'Counting unpaired electrons from neutral atom instead of the ion (remove 4s electrons first).',
        'Using wrong n-factor of KMnO₄ for the given medium.',
      ],
      pyqTrend:
        'Spin-only magnetic moment, KMnO₄/K₂Cr₂O₇ reactions and lanthanoid contraction consequences appear in almost every session.',
    },
    {
      name: 'Coordination Compounds',
      priority: 'Very High',
      weightage: '2 Qs',
      difficulty: 'Moderate',
      overview:
        'Highest-weightage inorganic chapter. CFT, isomerism, hybridisation and magnetic behaviour are asked in every paper.',
      importantTopics: [
        { name: 'Crystal Field Theory & CFSE', hot: true, note: 'Octahedral/tetrahedral splitting, high/low spin' },
        { name: 'Isomerism in complexes', hot: true, note: 'Geometrical & optical isomers count, [MA₂B₂], [M(AA)₂B₂]' },
        { name: 'VBT - hybridisation & magnetic moment', hot: true, note: 'Inner vs outer orbital complexes' },
        { name: 'IUPAC nomenclature', note: 'Order of ligands, oxidation state, -ate suffix' },
        { name: 'Spectrochemical series & colour', note: 'Δo and absorbed wavelength' },
        { name: 'Werner\'s theory & EAN', note: 'Primary/secondary valency, precipitation with AgNO₃' },
        { name: 'Metal carbonyls & bonding', note: 'Synergic bonding, C-O bond length' },
      ],
      theory: [
        {
          heading: 'Werner\'s theory and terminology',
          body:
            'Primary valency = oxidation state (ionisable), secondary valency = ==coordination number== (non-ionisable, directional). Ligands may be monodentate (NH₃), bidentate (en, ox²⁻), polydentate (EDTA⁴⁻ - hexadentate). Ambidentate ligands: NO₂⁻/ONO⁻, SCN⁻/NCS⁻. Chelates are more stable than comparable non-chelated complexes (chelate effect).',
        },
        {
          heading: 'Nomenclature',
          body:
            'Cation first, then anion. Inside the complex: ==ligands in alphabetical order==, then metal with oxidation state in Roman numerals. Anionic complexes take "-ate" (ferrate, cuprate, argentate, plumbate). Anionic ligands end in -o (chlorido, cyanido), neutral keep their names (aqua, ammine, carbonyl). Example: K₄[Fe(CN)₆] = potassium hexacyanidoferrate(II).',
        },
        {
          heading: 'Isomerism',
          body:
            'Structural: ionisation, hydrate (solvate), linkage, coordination isomerism. Stereo: ==geometrical (cis/trans, fac/mer)== and ==optical==. Square planar [MA₂B₂] shows cis-trans; tetrahedral complexes do not show geometrical isomerism. [MA₃B₃] - fac and mer. cis-[Co(en)₂Cl₂]⁺ is optically active, trans is not. [M(AA)₃] is optically active.',
        },
        {
          heading: 'Valence Bond Theory',
          body:
            'Hybridisation decides geometry: sp³ - tetrahedral, dsp² - square planar, ==d²sp³ (inner orbital, low spin)== and ==sp³d² (outer orbital, high spin)== - octahedral. Strong field ligands (CN⁻, CO) pair up electrons. E.g. [Ni(CN)₄]²⁻ dsp² diamagnetic; [NiCl₄]²⁻ sp³ paramagnetic; [Fe(CN)₆]³⁻ d²sp³ one unpaired electron; [FeF₆]³⁻ sp³d² five unpaired. VBT cannot explain colour.',
        },
        {
          heading: 'Crystal Field Theory',
          body:
            'In an octahedral field d-orbitals split into t₂g (lower, −0.4Δo) and eg (higher, +0.6Δo). If ==Δo > P (pairing energy) → low spin==, else high spin. Tetrahedral: Δt = (4/9)Δo, almost always high spin. ==Spectrochemical series==: I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < CN⁻ < CO. Colour is complementary to the absorbed wavelength; larger Δo → shorter absorbed λ.',
        },
        {
          heading: 'Metal carbonyls',
          body:
            'M-C σ bond (CO → M) plus π back-bonding (M d-orbital → CO π*). ==Synergic bonding== strengthens M-C and weakens C-O (C-O bond length increases, stretching frequency decreases). More negative charge on the metal → more back-bonding. Ni(CO)₄ tetrahedral, Fe(CO)₅ trigonal bipyramidal, Cr(CO)₆ octahedral.',
        },
      ],
      keyPoints: [
        '==CFSE (octahedral) = (−0.4 n_t2g + 0.6 n_eg)Δo + pairing energy terms==.',
        'Number of AgCl moles precipitated = number of Cl⁻ outside the coordination sphere.',
        'Co³⁺ complexes are almost always low spin even with weak ligands like H₂O (high charge).',
        'EAN = Z − oxidation state + 2 × CN; stable when it equals the next noble gas number (e.g. 36 for Fe(CO)₅).',
        'Pt, Pd, Au complexes with CN 4 are square planar (large Δ).',
      ],
      formulas: [
        { label: 'CFSE octahedral', important: true, expr: 'CFSE = (−0.4x + 0.6y)Δo + nP' },
        { label: 'Tetrahedral splitting', important: true, expr: 'Δt = (4/9) Δo' },
        { label: 'Spin-only moment', important: true, expr: 'μ = √(n(n + 2)) BM' },
        { label: 'EAN', important: true, expr: 'EAN = Z − O.S. + 2 × CN' },
        { label: 'Energy of absorbed light', expr: 'Δo = hc/λ (per ion) = N_A hc/λ (per mol)' },
      ],
      mistakes: [
        'Not alphabetising ligands in IUPAC names (prefixes like di-, tri- are ignored).',
        'Assuming tetrahedral complexes show geometrical isomerism.',
        'Using neutral metal configuration instead of the ion for VBT/CFT.',
      ],
      pyqTrend:
        'CFSE/spin calculations, number of isomers and magnetic moment from VBT are asked in every session; often 2 questions from this chapter.',
    },
    {
      name: 'Haloalkanes and Haloarenes',
      priority: 'High',
      weightage: '1 Q',
      difficulty: 'Moderate',
      overview:
        'SN1/SN2/elimination mechanisms are the core. Also builds the base for all later organic chapters.',
      importantTopics: [
        { name: 'SN1 vs SN2 mechanism', hot: true, note: 'Reactivity order, stereochemistry (inversion / racemisation)' },
        { name: 'Elimination (E1, E2) & Saytzeff rule', hot: true, note: 'Substitution vs elimination with bulky base' },
        { name: 'Nucleophilic substitution in haloarenes', note: 'Activation by −NO₂ at o/p positions' },
        { name: 'Named reactions', hot: true, note: 'Finkelstein, Swarts, Wurtz, Wurtz-Fittig, Sandmeyer' },
        { name: 'Preparation from alcohols', note: 'SOCl₂ (best), PCl₅, HX + ZnCl₂ (Lucas)' },
        { name: 'Polyhalogen compounds', note: 'CHCl₃, CCl₄, DDT, freons' },
      ],
      theory: [
        {
          heading: 'SN2 mechanism',
          body:
            'One step, bimolecular: rate = k[RX][Nu⁻]. Back-side attack → ==inversion of configuration== (Walden inversion). Reactivity: ==CH₃X > 1° > 2° > 3°== (steric hindrance). Favoured by strong nucleophiles and polar aprotic solvents (DMSO, DMF, acetone).',
        },
        {
          heading: 'SN1 mechanism',
          body:
            'Two steps via carbocation: rate = k[RX]. Reactivity: ==3° > 2° > 1° > CH₃X== (carbocation stability); benzyl and allyl halides are very reactive. Planar carbocation → ==racemisation== (partial inversion in practice). Favoured by polar protic solvents. Rearrangements (hydride/methyl shifts) are possible.',
        },
        {
          heading: 'Elimination',
          body:
            'Alcoholic KOH promotes β-elimination; aqueous KOH promotes substitution. ==Saytzeff rule==: more substituted alkene is the major product. Bulky bases (t-BuO⁻) give the Hofmann (less substituted) product. E2 needs anti-periplanar H and leaving group.',
        },
        {
          heading: 'Haloarenes',
          body:
            'Less reactive towards nucleophilic substitution due to ==partial double bond character of C-X (resonance)==, sp² carbon and phenyl cation instability. Electron-withdrawing groups at ortho/para (−NO₂) activate them (e.g. 2,4,6-trinitrochlorobenzene hydrolyses with warm water). Halogens are deactivating yet ortho/para directing in electrophilic substitution.',
        },
        {
          heading: 'Important name reactions',
          body:
            '==Finkelstein==: R-Cl + NaI (acetone) → R-I. ==Swarts==: R-Br + AgF/Hg₂F₂ → R-F. ==Wurtz==: 2RX + 2Na (dry ether) → R-R. ==Wurtz-Fittig==: ArX + RX + Na → Ar-R. ==Fittig==: 2ArX + Na → Ar-Ar. ==Sandmeyer==: ArN₂⁺ + CuCl/CuBr → ArCl/ArBr. Gattermann: Cu/HCl instead of CuCl.',
        },
      ],
      keyPoints: [
        '==Leaving group ability: I⁻ > Br⁻ > Cl⁻ > F⁻== (weaker base = better leaving group).',
        'Boiling point increases with mass: RI > RBr > RCl > RF; for isomers, branching lowers BP.',
        'p-dichlorobenzene has a higher melting point than o/m (symmetric packing).',
        'Chloroform is stored in dark coloured bottles - it oxidises to poisonous phosgene in light.',
        'KCN gives alkyl cyanide (C-attack) mainly; AgCN gives isocyanide (N-attack).',
      ],
      formulas: [
        { label: 'SN2 rate law', expr: 'rate = k[RX][Nu⁻]' },
        { label: 'SN1 rate law', expr: 'rate = k[RX]' },
        { label: 'Finkelstein', important: true, expr: 'R−Cl + NaI → R−I + NaCl (acetone)' },
        { label: 'Wurtz', important: true, expr: '2R−X + 2Na → R−R + 2NaX (dry ether)' },
        { label: 'Sandmeyer', important: true, expr: 'ArN₂⁺Cl⁻ + CuCl → ArCl + N₂' },
        { label: 'Dow\'s process', expr: 'C₆H₅Cl + NaOH (623 K, 300 atm) → C₆H₅OH' },
      ],
      mistakes: [
        'Assuming 3° halides undergo SN2.',
        'Forgetting rearrangement of carbocations in SN1.',
        'Mixing aqueous KOH (substitution) with alcoholic KOH (elimination).',
      ],
      pyqTrend:
        'Reactivity order towards SN1/SN2 and product prediction (major product with stereochemistry) are most common.',
    },
    {
      name: 'Alcohols, Phenols and Ethers',
      priority: 'High',
      weightage: '1-2 Qs',
      difficulty: 'Moderate',
      overview:
        'Acidity order, preparation and name reactions (Reimer-Tiemann, Kolbe, Williamson). Reaction-based questions dominate.',
      importantTopics: [
        { name: 'Acidity of phenols & alcohols', hot: true, note: 'Effect of −NO₂, −CH₃, −OCH₃ at o/m/p' },
        { name: 'Name reactions', hot: true, note: 'Reimer-Tiemann, Kolbe, Williamson synthesis' },
        { name: 'Dehydration of alcohols', note: 'Carbocation rearrangement, Saytzeff product' },
        { name: 'Lucas test & distinction tests', hot: true, note: '1°/2°/3° alcohols, FeCl₃ for phenol' },
        { name: 'Preparation of alcohols', note: 'Hydroboration-oxidation, Grignard, reduction' },
        { name: 'Cleavage of ethers by HI', note: 'SN1 vs SN2 product' },
      ],
      theory: [
        {
          heading: 'Preparation of alcohols',
          body:
            'Acid-catalysed hydration follows Markovnikov (with possible rearrangement). ==Hydroboration-oxidation (B₂H₆, then H₂O₂/OH⁻) gives anti-Markovnikov alcohol== without rearrangement. Grignard reagent + HCHO → 1°, + other aldehydes → 2°, + ketones → 3° alcohol. LiAlH₄/NaBH₄ reduce carbonyls (NaBH₄ does not reduce acids/esters).',
        },
        {
          heading: 'Acidity',
          body:
            'Phenol (pKa ≈ 10) is more acidic than alcohols (pKa ≈ 16) because the ==phenoxide ion is resonance stabilised==. Electron-withdrawing groups (−NO₂) at o/p increase acidity; electron-donating groups (−CH₃, −OCH₃) decrease it. Order: picric acid > 2,4-dinitrophenol > p-nitrophenol > o-nitrophenol > m-nitrophenol > phenol > cresols. Alcohols: 1° > 2° > 3° (in solution).',
        },
        {
          heading: 'Reactions of alcohols',
          body:
            'Dehydration with conc. H₂SO₄: ==3° > 2° > 1°== ease (carbocation). Lucas test (ZnCl₂/HCl): 3° - immediate turbidity, 2° - within 5 minutes, 1° - no turbidity at room temperature. Oxidation: 1° → aldehyde (PCC) → acid (KMnO₄); 2° → ketone; 3° resists oxidation. Cu at 573 K: 1° → aldehyde, 2° → ketone, 3° → alkene.',
        },
        {
          heading: 'Reactions of phenol',
          body:
            '−OH is strongly activating, o/p directing. Bromine water → 2,4,6-tribromophenol (white ppt); Br₂ in CS₂ → mono-bromo. ==Kolbe\'s reaction==: sodium phenoxide + CO₂ (400 K, 4-7 atm) → salicylic acid. ==Reimer-Tiemann==: CHCl₃ + NaOH → salicylaldehyde (via dichlorocarbene). Phenol + Zn dust → benzene. Conc. HNO₃ → picric acid.',
        },
        {
          heading: 'Ethers',
          body:
            '==Williamson synthesis==: R-O⁻Na⁺ + R\'-X → R-O-R\' (SN2, so use 1° halide; 3° halides give alkenes). Cleavage with HI: for 1°/2° alkyl groups, I⁻ attacks the ==less hindered== alkyl (SN2); if one group is 3°, the 3° carbocation forms (SN1) and gets I. Aryl alkyl ethers always give phenol + alkyl iodide.',
        },
      ],
      keyPoints: [
        '==o-Nitrophenol is steam volatile== (intramolecular H-bond), p-nitrophenol is not.',
        'Phenol gives violet colour with neutral FeCl₃.',
        'Boiling points: alcohols > ethers of similar mass (H-bonding).',
        'Anisole undergoes EAS at o/p positions; −OCH₃ activates the ring.',
      ],
      formulas: [
        { label: 'Hydroboration-oxidation', important: true, expr: 'R−CH=CH₂ → (B₂H₆; H₂O₂/OH⁻) → R−CH₂−CH₂OH' },
        { label: 'Kolbe\'s reaction', important: true, expr: 'C₆H₅ONa + CO₂ → (H⁺) → o-HOC₆H₄COOH' },
        { label: 'Reimer-Tiemann', important: true, expr: 'C₆H₅OH + CHCl₃ + NaOH → o-HOC₆H₄CHO' },
        { label: 'Williamson synthesis', important: true, expr: 'RONa + R\'X → R−O−R\' + NaX' },
        { label: 'Ether cleavage', expr: 'C₆H₅OCH₃ + HI → C₆H₅OH + CH₃I' },
      ],
      mistakes: [
        'Using a 3° halide in Williamson synthesis (gives elimination).',
        'Forgetting rearrangement during acid-catalysed dehydration/hydration.',
      ],
      pyqTrend:
        'Acidity order of substituted phenols, product of ether cleavage with HI and multi-step conversions are favourites.',
    },
    {
      name: 'Aldehydes, Ketones and Carboxylic Acids',
      priority: 'Very High',
      weightage: '2 Qs',
      difficulty: 'Tough',
      overview:
        'The most important organic chapter for JEE. Nucleophilic addition, name reactions and acidity of carboxylic acids appear in every paper.',
      importantTopics: [
        { name: 'Name reactions', hot: true, note: 'Aldol, Cannizzaro, Clemmensen, Wolff-Kishner, Rosenmund, Stephen, Etard, HVZ' },
        { name: 'Nucleophilic addition & reactivity order', hot: true, note: 'HCHO > CH₃CHO > ketones; effect of EWG/EDG' },
        { name: 'Distinction tests', hot: true, note: 'Tollens\', Fehling\'s, iodoform, 2,4-DNP' },
        { name: 'Acidity of carboxylic acids', hot: true, note: 'Effect of halogens, position of substituent' },
        { name: 'Preparation of aldehydes/ketones', note: 'Ozonolysis, DIBAL-H, Friedel-Crafts acylation' },
        { name: 'Derivatives of carbonyls', note: 'Oxime, hydrazone, semicarbazone' },
      ],
      theory: [
        {
          heading: 'Preparation',
          body:
            'Ozonolysis of alkenes, hydration of alkynes (HgSO₄/H₂SO₄ - ethyne gives ethanal, others give ketones). ==Rosenmund reduction==: RCOCl + H₂ (Pd/BaSO₄) → RCHO. ==Stephen reduction==: RCN + SnCl₂/HCl → imine → RCHO. ==DIBAL-H== reduces esters and nitriles to aldehydes. ==Etard reaction==: toluene + CrO₂Cl₂ → benzaldehyde. Gattermann-Koch: benzene + CO + HCl (AlCl₃/CuCl) → benzaldehyde.',
        },
        {
          heading: 'Nucleophilic addition',
          body:
            'C=O carbon is electrophilic. Reactivity: ==HCHO > RCHO > R₂CO== (electronic + steric factors); aromatic aldehydes less reactive than aliphatic (resonance). Additions: HCN (cyanohydrin), NaHSO₃ (bisulphite adduct - used for purification), Grignard reagents, alcohols (hemiacetal/acetal), ammonia derivatives (addition-elimination: NH₂OH → oxime, NH₂NH₂ → hydrazone, 2,4-DNP → orange/yellow ppt).',
        },
        {
          heading: 'Reduction and oxidation',
          body:
            '==Clemmensen (Zn-Hg/HCl)== and ==Wolff-Kishner (NH₂NH₂, KOH/ethylene glycol)== reduce C=O to CH₂. Aldehydes are easily oxidised: ==Tollens\' reagent== (silver mirror) - all aldehydes; ==Fehling\'s/Benedict\'s== (red Cu₂O) - aliphatic aldehydes only (not benzaldehyde). ==Iodoform test==: compounds with CH₃CO- or CH₃CH(OH)- give yellow CHI₃.',
        },
        {
          heading: 'Reactions involving α-hydrogen',
          body:
            'α-H is acidic (enolate stabilised by resonance). ==Aldol condensation==: aldehydes/ketones with α-H in dilute NaOH → β-hydroxy carbonyl → α,β-unsaturated carbonyl on heating. Cross aldol gives mixtures (unless one partner has no α-H - Claisen-Schmidt). ==Cannizzaro reaction==: aldehydes WITHOUT α-H (HCHO, C₆H₅CHO) in conc. NaOH disproportionate into alcohol + carboxylate. In crossed Cannizzaro with HCHO, HCHO is always oxidised.',
        },
        {
          heading: 'Carboxylic acids',
          body:
            'Prepared by oxidation of 1° alcohols/aldehydes/alkylbenzenes (KMnO₄ - any alkyl side chain with benzylic H → COOH), hydrolysis of nitriles, Grignard + CO₂. Acidity: ==EWG increase, EDG decrease acidity==; effect weakens with distance. FCH₂COOH > ClCH₂COOH > BrCH₂COOH; Cl₃CCOOH > Cl₂CHCOOH > ClCH₂COOH. HCOOH > CH₃COOH. ==HVZ reaction==: RCH₂COOH + X₂/red P → α-halo acid. Decarboxylation with soda lime gives alkane with one less carbon.',
        },
      ],
      keyPoints: [
        '==Benzaldehyde gives Tollens\' test but NOT Fehling\'s test==.',
        'Formic acid also reduces Tollens\' reagent (has an aldehydic H).',
        'Carboxylic acids do not give typical carbonyl addition reactions (resonance).',
        'Carboxylic acids form H-bonded dimers - high boiling points.',
        'Acid derivative reactivity: acid chloride > anhydride > ester > amide.',
        'Benzoic acid: −COOH is deactivating and meta directing; does not undergo Friedel-Crafts.',
      ],
      formulas: [
        { label: 'Rosenmund', important: true, expr: 'RCOCl + H₂ → (Pd/BaSO₄) → RCHO + HCl' },
        { label: 'Stephen', expr: 'RCN + SnCl₂/HCl → RCH=NH → (H₃O⁺) → RCHO' },
        { label: 'Clemmensen', important: true, expr: 'R₂C=O + Zn-Hg/HCl → R₂CH₂' },
        { label: 'Wolff-Kishner', important: true, expr: 'R₂C=O + NH₂NH₂ → (KOH, glycol, Δ) → R₂CH₂' },
        { label: 'Aldol', important: true, expr: '2CH₃CHO → (dil. NaOH) → CH₃CH(OH)CH₂CHO' },
        { label: 'Cannizzaro', important: true, expr: '2HCHO + conc. NaOH → CH₃OH + HCOONa' },
        { label: 'Iodoform', important: true, expr: 'CH₃COR + 3I₂ + 4NaOH → CHI₃↓ + RCOONa + 3NaI + 3H₂O' },
        { label: 'HVZ', important: true, expr: 'RCH₂COOH + X₂/red P → RCH(X)COOH' },
        { label: 'Decarboxylation', expr: 'RCOONa + NaOH/CaO → R−H + Na₂CO₃' },
      ],
      mistakes: [
        'Applying aldol to aldehydes without α-H (they give Cannizzaro instead).',
        'Saying all aldehydes give Fehling\'s test.',
        'Forgetting that ethanol and isopropyl alcohol also give iodoform test.',
      ],
      pyqTrend:
        'Multi-step conversion questions (identify A, B, C) built around these name reactions are asked every session. Acidity order of substituted acids is also frequent.',
    },
    {
      name: 'Amines',
      priority: 'High',
      weightage: '1 Q',
      difficulty: 'Moderate',
      overview:
        'Basicity order, distinction of 1°/2°/3° amines and diazonium salt reactions.',
      importantTopics: [
        { name: 'Basicity order', hot: true, note: 'Aqueous vs gas phase, aromatic amines with substituents' },
        { name: 'Diazonium salts & coupling', hot: true, note: 'Sandmeyer, coupling with phenol/aniline (azo dyes)' },
        { name: 'Hinsberg & carbylamine tests', hot: true, note: 'Distinguishing 1°, 2°, 3° amines' },
        { name: 'Hoffmann bromamide degradation', note: 'Amine with one carbon less' },
        { name: 'Gabriel phthalimide synthesis', note: 'Only 1° aliphatic amines' },
        { name: 'Reactions of aniline', note: 'Acetylation to control reactivity, nitration gives meta product too' },
      ],
      theory: [
        {
          heading: 'Preparation',
          body:
            'Reduction of nitro compounds (Sn/HCl or Fe/HCl), nitriles (LiAlH₄), amides (LiAlH₄). ==Gabriel phthalimide synthesis== gives pure 1° aliphatic amines (not aromatic - aryl halides do not undergo SN). ==Hoffmann bromamide==: RCONH₂ + Br₂ + 4NaOH → RNH₂ (one carbon less). Ammonolysis of alkyl halides gives a mixture of amines.',
        },
        {
          heading: 'Basicity',
          body:
            'Aliphatic amines are stronger bases than NH₃ (+I effect). In ==aqueous solution==: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ and ==(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃== (balance of +I, solvation and steric effects). In gas phase: 3° > 2° > 1° > NH₃. ==Aniline is much weaker== (lone pair delocalised into ring); EDG increase and EWG decrease its basicity.',
        },
        {
          heading: 'Tests',
          body:
            '==Carbylamine test==: only 1° amines + CHCl₃ + KOH → foul-smelling isocyanide. ==Hinsberg reagent== (C₆H₅SO₂Cl): 1° gives sulphonamide soluble in alkali; 2° gives sulphonamide insoluble in alkali; 3° does not react. Nitrous acid: 1° aliphatic → N₂ gas + alcohol; 1° aromatic (0-5 °C) → diazonium salt; 2° → yellow N-nitrosamine.',
        },
        {
          heading: 'Diazonium salts',
          body:
            'Benzenediazonium chloride is prepared at ==0-5 °C== (aniline + NaNO₂ + HCl). Replacement reactions: CuCl/HCl → ArCl, CuBr → ArBr, CuCN → ArCN (Sandmeyer); KI → ArI; HBF₄ then Δ → ArF (Balz-Schiemann); H₂O → phenol; H₃PO₂ → benzene. ==Coupling== with phenol (alkaline) gives orange p-hydroxyazobenzene; with aniline (mildly acidic) gives yellow p-aminoazobenzene.',
        },
        {
          heading: 'Reactions of aniline',
          body:
            '−NH₂ is strongly activating: bromine water → 2,4,6-tribromoaniline. To get mono-substitution, protect by ==acetylation== (−NHCOCH₃ is moderately activating). Direct nitration gives significant ==meta product== (~47%) because anilinium ion (−NH₃⁺) is meta directing. Aniline does not undergo Friedel-Crafts (forms complex with AlCl₃).',
        },
      ],
      keyPoints: [
        '==Only 1° amines give carbylamine test==.',
        'Aromatic diazonium salts are stable at 0-5 °C due to resonance; aliphatic ones are not.',
        'pKb lower = stronger base; aniline pKb ≈ 9.4, methylamine ≈ 3.4.',
        'Sulphanilic acid exists as a zwitterion.',
      ],
      formulas: [
        { label: 'Hoffmann bromamide', important: true, expr: 'RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O' },
        { label: 'Carbylamine', important: true, expr: 'RNH₂ + CHCl₃ + 3KOH → RNC + 3KCl + 3H₂O' },
        { label: 'Diazotisation', important: true, expr: 'C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O (273-278 K)' },
        { label: 'Balz-Schiemann', expr: 'ArN₂⁺BF₄⁻ → (Δ) → ArF + BF₃ + N₂' },
        { label: 'Reduction to arene', expr: 'ArN₂⁺Cl⁻ + H₃PO₂ + H₂O → ArH + N₂ + H₃PO₃ + HCl' },
      ],
      mistakes: [
        'Using gas-phase basicity order for aqueous solutions.',
        'Expecting only o/p products in direct nitration of aniline.',
      ],
      pyqTrend:
        'Basicity order and diazonium-based conversion sequences are most asked. Hinsberg/carbylamine distinguishing tests appear frequently in statement questions.',
    },
    {
      name: 'Biomolecules',
      priority: 'Medium',
      weightage: '1 Q',
      difficulty: 'Easy',
      overview:
        'Pure NCERT-based facts on carbohydrates, proteins, vitamins and nucleic acids. One easy question is almost guaranteed.',
      importantTopics: [
        { name: 'Carbohydrates - glucose structure & reactions', hot: true, note: 'Reactions not explained by open chain, anomers' },
        { name: 'Reducing vs non-reducing sugars', hot: true, note: 'Sucrose non-reducing; maltose, lactose reducing' },
        { name: 'Proteins - structure & denaturation', note: 'Primary to quaternary, peptide bond, essential amino acids' },
        { name: 'Vitamins & deficiency diseases', hot: true, note: 'Fat vs water soluble' },
        { name: 'Nucleic acids', note: 'DNA vs RNA bases, sugar, nucleoside vs nucleotide' },
      ],
      theory: [
        {
          heading: 'Carbohydrates',
          body:
            'Glucose: aldohexose, exists mainly as ==cyclic pyranose (α and β anomers)==. Open-chain structure cannot explain: no reaction with NaHSO₃ and Schiff\'s reagent, pentaacetate not reacting with NH₂OH, and mutarotation. Glucose + HI → n-hexane (straight chain); + Br₂ water → gluconic acid; + HNO₃ → saccharic acid. Fructose is a ketohexose (furanose form).',
        },
        {
          heading: 'Disaccharides and polysaccharides',
          body:
            '==Sucrose== (α-glucose C1 - β-fructose C2) is non-reducing; its hydrolysis gives invert sugar (dextro → laevo). ==Maltose== (α-1,4 glucose) and ==lactose== (β-galactose + glucose) are reducing. Starch = amylose (linear, α-1,4, water soluble, 15-20%) + amylopectin (branched with α-1,6). Cellulose: β-1,4 glucose, linear. Glycogen: highly branched animal starch.',
        },
        {
          heading: 'Proteins',
          body:
            'Polymers of α-amino acids joined by ==peptide bonds (-CO-NH-)==. Amino acids exist as zwitterions; isoelectric point = pH where net charge is zero. 10 essential amino acids (cannot be synthesised: Val, Leu, Ile, Lys, Thr, Met, Phe, Trp, Arg, His). Structures: primary (sequence), secondary (α-helix, β-pleated sheet - H-bonds), tertiary (folding), quaternary (subunits). ==Denaturation destroys 2°/3° structure but primary remains== (e.g. boiling egg, curdling of milk).',
        },
        {
          heading: 'Vitamins and nucleic acids',
          body:
            'Fat soluble: ==A, D, E, K== (stored in body); water soluble: B and C (must be supplied regularly, except B₁₂). Deficiencies: A - night blindness, B₁ - beri beri, B₂ - cheilosis, B₆ - convulsions, B₁₂ - pernicious anaemia, C - scurvy, D - rickets, E - muscular weakness, K - delayed clotting. DNA: deoxyribose, bases A, G, C, ==T==; RNA: ribose, A, G, C, ==U==. Nucleoside = base + sugar; nucleotide = nucleoside + phosphate.',
        },
      ],
      keyPoints: [
        '==Sucrose is a non-reducing sugar== - both anomeric carbons are involved in the glycosidic bond.',
        'α and β glucose are anomers (differ at C-1), not enantiomers.',
        'Insulin, haemoglobin are globular proteins; keratin, myosin are fibrous.',
        'Enzymes are biocatalysts, mostly globular proteins.',
      ],
      formulas: [
        { label: 'Glucose with HI', important: true, expr: 'C₆H₁₂O₆ + HI (Δ) → n-hexane' },
        { label: 'Oxidation (Br₂ water)', expr: 'Glucose → Gluconic acid' },
        { label: 'Oxidation (HNO₃)', expr: 'Glucose → Saccharic (glucaric) acid' },
        { label: 'Sucrose inversion', important: true, expr: 'C₁₂H₂₂O₁₁ + H₂O → glucose (+52.5°) + fructose (−92.4°)' },
      ],
      mistakes: [
        'Confusing anomers with epimers.',
        'Listing vitamin B₁₂ as not storable (it is stored in the liver).',
      ],
      pyqTrend:
        'Usually one direct NCERT-line question (vitamin deficiency, reducing sugar, bases in DNA/RNA, glucose reactions).',
    },
  ],
};
