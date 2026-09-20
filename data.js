/* =====================================================
   LEARNQUEST QUESTION BANK
===================================================== */


/* =====================================================
   HELPER FUNCTION
===================================================== */

function Q(question, options, answer, concept, explanation) {

    return {
        question: question,
        options: options,
        answer: answer,
        concept: concept,
        explanation: explanation
    };

}


/* =====================================================
   QUESTION BANK
===================================================== */

const questionBank = {


    /* =================================================
       PHYSICS
    ================================================= */

    "ohm's law": [

        Q(
            "What is the formula for Ohm's Law?",
            ["V = I × R", "V = I + R", "I = V × R", "R = V × I"],
            0,
            "Ohm's Law formula",
            "Ohm's Law states that V = I × R."
        ),

        Q(
            "What is the SI unit of resistance?",
            ["Volt", "Ampere", "Ohm", "Watt"],
            2,
            "Resistance unit",
            "The SI unit of resistance is the ohm (Ω)."
        ),

        Q(
            "What is the SI unit of electric current?",
            ["Volt", "Ampere", "Ohm", "Watt"],
            1,
            "Current unit",
            "Electric current is measured in amperes (A)."
        ),

        Q(
            "If V = 10 V and R = 5 Ω, what is the current?",
            ["0.5 A", "2 A", "5 A", "50 A"],
            1,
            "Ohm's Law calculation",
            "Using I = V/R, the current is 10/5 = 2 A."
        ),

        Q(
            "If resistance increases while voltage remains constant, what happens to current?",
            ["Current increases", "Current decreases", "Current becomes zero", "Nothing changes"],
            1,
            "Resistance and current",
            "From I = V/R, current decreases when resistance increases."
        )

    ],


    "motion": [

        Q(
            "What is the SI unit of velocity?",
            ["Meter", "Meter per second", "Newton", "Joule"],
            1,
            "Velocity unit",
            "Velocity is measured in meters per second (m/s)."
        ),

        Q(
            "What is the rate of change of velocity called?",
            ["Speed", "Acceleration", "Distance", "Force"],
            1,
            "Acceleration",
            "Acceleration is the rate of change of velocity."
        ),

        Q(
            "Which quantity has both magnitude and direction?",
            ["Distance", "Speed", "Velocity", "Time"],
            2,
            "Vector quantity",
            "Velocity is a vector quantity because it has magnitude and direction."
        ),

        Q(
            "What is the SI unit of acceleration?",
            ["m/s", "m/s²", "N", "J"],
            1,
            "Acceleration unit",
            "Acceleration is measured in meters per second squared (m/s²)."
        )

    ],


    "newton's laws": [

        Q(
            "Newton's First Law is also called the law of?",
            ["Acceleration", "Inertia", "Gravitation", "Momentum"],
            1,
            "Newton's First Law",
            "Newton's First Law is known as the law of inertia."
        ),

        Q(
            "What is the formula for Newton's Second Law?",
            ["F = ma", "F = m/a", "F = a/m", "F = m + a"],
            0,
            "Newton's Second Law",
            "Newton's Second Law states that force equals mass multiplied by acceleration."
        ),

        Q(
            "What does Newton's Third Law describe?",
            ["Energy conservation", "Action and reaction", "Inertia", "Gravity"],
            1,
            "Newton's Third Law",
            "For every action, there is an equal and opposite reaction."
        ),

        Q(
            "What is the SI unit of force?",
            ["Joule", "Watt", "Newton", "Pascal"],
            2,
            "Force unit",
            "Force is measured in newtons (N)."
        )

    ],


    "work power energy": [

        Q(
            "What is the SI unit of work?",
            ["Newton", "Joule", "Watt", "Pascal"],
            1,
            "Work unit",
            "Work is measured in joules (J)."
        ),

        Q(
            "What is the SI unit of power?",
            ["Joule", "Newton", "Watt", "Volt"],
            2,
            "Power unit",
            "Power is measured in watts (W)."
        ),

        Q(
            "What is the formula for power?",
            ["P = W/t", "P = W × t", "P = t/W", "P = W + t"],
            0,
            "Power formula",
            "Power is the rate of doing work, P = W/t."
        ),

        Q(
            "Which form of energy is stored in a stretched spring?",
            ["Chemical energy", "Elastic potential energy", "Nuclear energy", "Sound energy"],
            1,
            "Potential energy",
            "A stretched spring stores elastic potential energy."
        )

    ],


    "gravitation": [

        Q(
            "What force attracts objects toward Earth?",
            ["Magnetic force", "Gravitational force", "Friction", "Electric force"],
            1,
            "Gravity",
            "Gravity attracts objects toward the Earth."
        ),

        Q(
            "Who proposed the universal law of gravitation?",
            ["Newton", "Einstein", "Faraday", "Tesla"],
            0,
            "Universal gravitation",
            "Isaac Newton proposed the law of universal gravitation."
        ),

        Q(
            "What is the approximate acceleration due to gravity on Earth?",
            ["1.8 m/s²", "9.8 m/s²", "20 m/s²", "98 m/s²"],
            1,
            "Acceleration due to gravity",
            "The approximate value of g on Earth is 9.8 m/s²."
        ),

        Q(
            "Gravity on the Moon is approximately what fraction of Earth's gravity?",
            ["1/6", "1/2", "2 times", "6 times"],
            0,
            "Moon gravity",
            "The Moon's gravity is approximately one-sixth of Earth's gravity."
        )

    ],


    "waves": [

        Q(
            "What is the distance between two consecutive crests called?",
            ["Amplitude", "Wavelength", "Frequency", "Period"],
            1,
            "Wavelength",
            "The distance between consecutive corresponding points such as crests is wavelength."
        ),

        Q(
            "What is measured in hertz?",
            ["Wavelength", "Frequency", "Amplitude", "Speed"],
            1,
            "Frequency",
            "Frequency is measured in hertz (Hz)."
        ),

        Q(
            "Which wave requires a medium to travel?",
            ["Sound wave", "Light wave", "Radio wave", "Microwave"],
            0,
            "Mechanical waves",
            "Sound is a mechanical wave and requires a medium."
        ),

        Q(
            "What determines the pitch of a sound?",
            ["Frequency", "Amplitude", "Speed", "Wavelength only"],
            0,
            "Sound frequency",
            "Higher frequency produces a higher pitch."
        )

    ],


    "light and optics": [

        Q(
            "What is the approximate speed of light in vacuum?",
            ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^4 m/s", "300 m/s"],
            0,
            "Speed of light",
            "Light travels in vacuum at approximately 3 × 10^8 m/s."
        ),

        Q(
            "What happens when light bounces from a surface?",
            ["Refraction", "Reflection", "Diffraction", "Absorption"],
            1,
            "Reflection",
            "The bouncing back of light from a surface is called reflection."
        ),

        Q(
            "Which lens is thicker at the center?",
            ["Convex lens", "Concave lens", "Plane lens", "None"],
            0,
            "Convex lens",
            "A convex lens is thicker at the center than at the edges."
        ),

        Q(
            "What phenomenon causes a rainbow?",
            ["Dispersion of light", "Magnetism", "Electricity", "Conduction"],
            0,
            "Dispersion",
            "A rainbow is produced mainly by dispersion, refraction and internal reflection of sunlight in water droplets."
        )

    ],


    /* =================================================
       CHEMISTRY
    ================================================= */

    "atomic structure": [

        Q(
            "What is the negatively charged particle in an atom?",
            ["Proton", "Electron", "Neutron", "Nucleus"],
            1,
            "Electron",
            "Electrons carry a negative electric charge."
        ),

        Q(
            "What is the positively charged particle in an atom?",
            ["Electron", "Neutron", "Proton", "Photon"],
            2,
            "Proton",
            "Protons carry a positive electric charge."
        ),

        Q(
            "Where are protons and neutrons located?",
            ["Electron cloud", "Nucleus", "Shell only", "Orbit"],
            1,
            "Atomic nucleus",
            "Protons and neutrons are located in the nucleus."
        ),

        Q(
            "What is the charge of a neutron?",
            ["Positive", "Negative", "Neutral", "Double positive"],
            2,
            "Neutron",
            "A neutron has no net electric charge."
        )

    ],


    "periodic table": [

        Q(
            "Who is commonly credited with developing the periodic table?",
            ["Dmitri Mendeleev", "Isaac Newton", "Albert Einstein", "Michael Faraday"],
            0,
            "Periodic table history",
            "Dmitri Mendeleev developed an early form of the periodic table."
        ),

        Q(
            "What does the atomic number represent?",
            ["Number of neutrons", "Number of protons", "Atomic mass only", "Number of shells"],
            1,
            "Atomic number",
            "The atomic number equals the number of protons in an atom."
        ),

        Q(
            "Which element has the symbol O?",
            ["Gold", "Oxygen", "Osmium", "Iron"],
            1,
            "Chemical symbols",
            "O is the chemical symbol for oxygen."
        ),

        Q(
            "Which of these is a noble gas?",
            ["Sodium", "Chlorine", "Neon", "Calcium"],
            2,
            "Noble gases",
            "Neon is a noble gas."
        )

    ],


    "chemical bonding": [

        Q(
            "What type of bond involves sharing electrons?",
            ["Ionic bond", "Covalent bond", "Metallic bond only", "Nuclear bond"],
            1,
            "Covalent bonding",
            "Covalent bonds involve sharing electron pairs."
        ),

        Q(
            "What type of bond is formed by transfer of electrons?",
            ["Covalent", "Ionic", "Hydrogen only", "Nuclear"],
            1,
            "Ionic bonding",
            "Ionic bonds form through electron transfer between atoms."
        ),

        Q(
            "Which particles participate directly in chemical bonding?",
            ["Valence electrons", "Neutrons", "Nucleus only", "Protons only"],
            0,
            "Valence electrons",
            "Valence electrons are mainly involved in chemical bonding."
        ),

        Q(
            "What is NaCl commonly known as?",
            ["Baking soda", "Common salt", "Sugar", "Limestone"],
            1,
            "Ionic compound",
            "NaCl is sodium chloride, commonly known as common salt."
        )

    ],


    "acids bases salts": [

        Q(
            "What is the pH of a neutral solution at 25°C?",
            ["0", "7", "10", "14"],
            1,
            "pH scale",
            "A neutral solution has a pH of 7 at 25°C."
        ),

        Q(
            "Which substance is an acid?",
            ["Hydrochloric acid", "Sodium hydroxide", "Ammonia", "Soap"],
            0,
            "Acids",
            "Hydrochloric acid is a common strong acid."
        ),

        Q(
            "Which substance is a base?",
            ["HCl", "H2SO4", "NaOH", "CO2"],
            2,
            "Bases",
            "Sodium hydroxide (NaOH) is a strong base."
        ),

        Q(
            "What is formed when an acid reacts with a base?",
            ["Salt and water", "Only oxygen", "Only hydrogen", "Metal only"],
            0,
            "Neutralization",
            "An acid-base neutralization reaction generally produces salt and water."
        )

    ],


    "mole concept": [

        Q(
            "What is the SI unit of amount of substance?",
            ["Gram", "Mole", "Liter", "Kilogram"],
            1,
            "Mole",
            "The SI unit for amount of substance is the mole."
        ),

        Q(
            "Approximately how many particles are present in one mole?",
            ["6.022 × 10^23", "6.022 × 10^10", "3 × 10^8", "9.8 × 10^2"],
            0,
            "Avogadro constant",
            "One mole contains approximately 6.022 × 10^23 entities."
        ),

        Q(
            "The symbol for amount of substance is commonly?",
            ["n", "p", "v", "r"],
            0,
            "Amount of substance",
            "The amount of substance is commonly represented by n."
        ),

        Q(
            "What is the molar mass of water approximately?",
            ["10 g/mol", "18 g/mol", "20 g/mol", "36 g/mol"],
            1,
            "Molar mass",
            "Water, H2O, has a molar mass of approximately 18 g/mol."
        )

    ],


    "organic chemistry": [

        Q(
            "Which element is the main element in organic compounds?",
            ["Carbon", "Iron", "Sodium", "Calcium"],
            0,
            "Carbon",
            "Organic chemistry mainly deals with carbon-containing compounds."
        ),

        Q(
            "What is the simplest alkane?",
            ["Methane", "Ethane", "Propane", "Butane"],
            0,
            "Alkanes",
            "Methane (CH4) is the simplest alkane."
        ),

        Q(
            "What is the functional group of alcohols?",
            ["-OH", "-COOH", "-NH2", "-CHO"],
            0,
            "Alcohol functional group",
            "Alcohols contain the hydroxyl (-OH) functional group."
        ),

        Q(
            "What is the formula of methane?",
            ["CH4", "C2H6", "CO2", "CH3OH"],
            0,
            "Methane",
            "Methane has the molecular formula CH4."
        )

    ],


    /* =================================================
       BIOLOGY
    ================================================= */

    "photosynthesis": [

        Q(
            "Where does photosynthesis mainly occur?",
            ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
            1,
            "Photosynthesis location",
            "Photosynthesis mainly occurs in chloroplasts."
        ),

        Q(
            "Which pigment captures light energy?",
            ["Hemoglobin", "Chlorophyll", "Insulin", "Keratin"],
            1,
            "Chlorophyll",
            "Chlorophyll absorbs light energy used in photosynthesis."
        ),

        Q(
            "Which gas is absorbed during photosynthesis?",
            ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            2,
            "Carbon dioxide",
            "Plants use carbon dioxide during photosynthesis."
        ),

        Q(
            "Which gas is released during photosynthesis?",
            ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            0,
            "Oxygen production",
            "Oxygen is released during photosynthesis."
        )

    ],


    "cell biology": [

        Q(
            "What is known as the basic unit of life?",
            ["Tissue", "Cell", "Organ", "Organ system"],
            1,
            "Cell",
            "The cell is considered the basic structural and functional unit of life."
        ),

        Q(
            "Which organelle contains genetic material in a typical eukaryotic cell?",
            ["Nucleus", "Ribosome", "Golgi body", "Vacuole"],
            0,
            "Nucleus",
            "The nucleus contains most of the genetic material in eukaryotic cells."
        ),

        Q(
            "Which organelle is mainly responsible for cellular respiration?",
            ["Mitochondria", "Ribosome", "Chloroplast", "Golgi body"],
            0,
            "Mitochondria",
            "Mitochondria are major sites of cellular respiration."
        ),

        Q(
            "Which organelle is involved in protein synthesis?",
            ["Ribosome", "Lysosome", "Vacuole", "Centrosome"],
            0,
            "Ribosome",
            "Ribosomes are responsible for protein synthesis."
        )

    ],


    "human digestive system": [

        Q(
            "Where does digestion begin?",
            ["Stomach", "Mouth", "Small intestine", "Large intestine"],
            1,
            "Digestion",
            "Digestion begins in the mouth."
        ),

        Q(
            "Which organ produces bile?",
            ["Pancreas", "Liver", "Stomach", "Kidney"],
            1,
            "Bile",
            "The liver produces bile."
        ),

        Q(
            "Where does most nutrient absorption occur?",
            ["Stomach", "Small intestine", "Large intestine", "Esophagus"],
            1,
            "Nutrient absorption",
            "Most nutrient absorption occurs in the small intestine."
        ),

        Q(
            "Which organ stores bile?",
            ["Gallbladder", "Pancreas", "Kidney", "Spleen"],
            0,
            "Gallbladder",
            "The gallbladder stores and concentrates bile."
        )

    ],


    "human respiratory system": [

        Q(
            "Which organ is mainly responsible for gas exchange?",
            ["Heart", "Lungs", "Kidneys", "Stomach"],
            1,
            "Gas exchange",
            "The lungs are the main organs of gas exchange."
        ),

        Q(
            "What gas is required for cellular respiration?",
            ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            0,
            "Oxygen",
            "Cells use oxygen during aerobic cellular respiration."
        ),

        Q(
            "Where does gas exchange occur in the lungs?",
            ["Alveoli", "Trachea", "Nose", "Bronchi only"],
            0,
            "Alveoli",
            "Gas exchange occurs across the thin walls of the alveoli."
        ),

        Q(
            "What muscle plays a major role in breathing?",
            ["Biceps", "Diaphragm", "Triceps", "Quadriceps"],
            1,
            "Diaphragm",
            "The diaphragm contracts and relaxes to help ventilation."
        )

    ],


    "human circulatory system": [

        Q(
            "Which organ pumps blood through the body?",
            ["Lungs", "Heart", "Liver", "Kidney"],
            1,
            "Heart",
            "The heart pumps blood through the circulatory system."
        ),

        Q(
            "Which blood cells carry oxygen?",
            ["White blood cells", "Red blood cells", "Platelets", "Plasma cells"],
            1,
            "Red blood cells",
            "Red blood cells contain hemoglobin and transport oxygen."
        ),

        Q(
            "Which blood vessels carry blood away from the heart?",
            ["Veins", "Arteries", "Capillaries", "Nerves"],
            1,
            "Arteries",
            "Arteries carry blood away from the heart."
        ),

        Q(
            "Which component of blood helps with clotting?",
            ["Platelets", "Red blood cells", "Plasma only", "Neurons"],
            0,
            "Platelets",
            "Platelets play an important role in blood clotting."
        )

    ],


    "genetics": [

        Q(
            "What molecule carries genetic information?",
            ["DNA", "ATP", "Water", "Glucose"],
            0,
            "DNA",
            "DNA stores genetic information in most organisms."
        ),

        Q(
            "What is a segment of DNA that contains information for a functional product called?",
            ["Gene", "Tissue", "Organ", "Cell wall"],
            0,
            "Gene",
            "A gene is a segment of DNA containing functional genetic information."
        ),

        Q(
            "Who is known for foundational experiments on inheritance using pea plants?",
            ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"],
            0,
            "Mendelian genetics",
            "Gregor Mendel performed famous pea plant experiments on inheritance."
        ),

        Q(
            "Which bases are found in DNA?",
            ["A, T, G, C", "A, U, G, C", "A, B, C, D", "X, Y, Z, W"],
            0,
            "DNA bases",
            "DNA contains adenine, thymine, guanine and cytosine."
        )

    ],


    /* =================================================
       MATHEMATICS
    ================================================= */

    "algebra": [

        Q(
            "What is the value of x if x + 5 = 12?",
            ["5", "7", "12", "17"],
            1,
            "Linear equation",
            "Subtracting 5 from both sides gives x = 7."
        ),

        Q(
            "What is 2x when x = 4?",
            ["4", "6", "8", "10"],
            2,
            "Substitution",
            "2 × 4 = 8."
        ),

        Q(
            "What is the coefficient of x in 7x + 3?",
            ["3", "7", "10", "x"],
            1,
            "Coefficient",
            "The coefficient of x is 7."
        ),

        Q(
            "What is the value of 3²?",
            ["6", "9", "12", "15"],
            1,
            "Powers",
            "3² means 3 × 3, which equals 9."
        )

    ],


    "trigonometry": [

        Q(
            "What is sin 90°?",
            ["0", "1", "-1", "0.5"],
            1,
            "Sine",
            "sin 90° = 1."
        ),

        Q(
            "What is cos 0°?",
            ["0", "1", "-1", "0.5"],
            1,
            "Cosine",
            "cos 0° = 1."
        ),

        Q(
            "What is tan 45°?",
            ["0", "1", "√3", "2"],
            1,
            "Tangent",
            "tan 45° = 1."
        ),

        Q(
            "In a right triangle, sin θ equals?",
            ["Opposite/Hypotenuse", "Adjacent/Hypotenuse", "Opposite/Adjacent", "Hypotenuse/Opposite"],
            0,
            "Trigonometric ratios",
            "sin θ = opposite side divided by hypotenuse."
        )

    ],


    "probability": [

        Q(
            "What is the probability of getting heads when a fair coin is tossed?",
            ["0", "1/2", "1", "2"],
            1,
            "Basic probability",
            "A fair coin has two equally likely outcomes, so P(heads) = 1/2."
        ),

        Q(
            "What is the probability of rolling a 6 on a fair six-sided die?",
            ["1/2", "1/3", "1/6", "1"],
            2,
            "Dice probability",
            "There is one favorable outcome out of six, so the probability is 1/6."
        ),

        Q(
            "What is the probability of an impossible event?",
            ["0", "1/2", "1", "2"],
            0,
            "Probability range",
            "An impossible event has probability 0."
        ),

        Q(
            "What is the probability of a certain event?",
            ["0", "1/4", "1/2", "1"],
            3,
            "Certain event",
            "A certain event has probability 1."
        )

    ],


    "statistics": [

        Q(
            "What is the average of a set of numbers called?",
            ["Mean", "Range", "Mode", "Median only"],
            0,
            "Mean",
            "The arithmetic average is called the mean."
        ),

        Q(
            "Which value occurs most frequently in a data set?",
            ["Mean", "Median", "Mode", "Range"],
            2,
            "Mode",
            "The mode is the most frequently occurring value."
        ),

        Q(
            "What is the difference between the maximum and minimum values?",
            ["Mean", "Mode", "Range", "Median"],
            2,
            "Range",
            "Range = maximum value - minimum value."
        ),

        Q(
            "What is the middle value of ordered data called?",
            ["Mean", "Median", "Mode", "Variance"],
            1,
            "Median",
            "The median is the middle value when data is arranged in order."
        )

    ],


    "matrices": [

        Q(
            "What is a matrix?",
            ["A rectangular arrangement of numbers", "Only one number", "A graph only", "An equation only"],
            0,
            "Matrix definition",
            "A matrix is a rectangular arrangement of numbers or elements."
        ),

        Q(
            "A matrix with 2 rows and 3 columns has how many elements?",
            ["5", "6", "8", "9"],
            1,
            "Matrix order",
            "2 × 3 = 6 elements."
        ),

        Q(
            "What is a square matrix?",
            ["Rows equal columns", "Rows greater than columns", "Columns greater than rows", "No rows"],
            0,
            "Square matrix",
            "A square matrix has the same number of rows and columns."
        ),

        Q(
            "What is the identity matrix usually represented by?",
            ["I", "X", "A", "Z"],
            0,
            "Identity matrix",
            "The identity matrix is commonly represented by I."
        )

    ],


    "calculus": [

        Q(
            "What does a derivative generally represent?",
            ["Rate of change", "Total mass", "Area only", "Probability only"],
            0,
            "Derivative",
            "A derivative represents a rate of change."
        ),

        Q(
            "What does an integral commonly help calculate?",
            ["Accumulated quantity", "Only temperature", "Only speed", "Atomic number"],
            0,
            "Integral",
            "Integration can be used to find accumulated quantities such as area."
        ),

        Q(
            "What is the derivative of x²?",
            ["x", "2x", "x³", "2"],
            1,
            "Derivative rule",
            "The derivative of x² is 2x."
        ),

        Q(
            "What is the derivative of a constant?",
            ["1", "0", "The constant itself", "Infinity"],
            1,
            "Constant derivative",
            "The derivative of a constant is zero."
        )

    ],


    /* =================================================
       ENVIRONMENT
    ================================================= */

    "ecosystems": [

        Q(
            "What is an ecosystem?",
            ["Living organisms and their physical environment", "Only animals", "Only plants", "Only soil"],
            0,
            "Ecosystem",
            "An ecosystem includes living organisms and their physical environment."
        ),

        Q(
            "Which organisms produce their own food?",
            ["Consumers", "Producers", "Decomposers", "Predators"],
            1,
            "Producers",
            "Plants and other producers make organic food using energy sources such as sunlight."
        ),

        Q(
            "Which organisms break down dead organic matter?",
            ["Producers", "Decomposers", "Herbivores", "Predators"],
            1,
            "Decomposers",
            "Decomposers such as fungi and many bacteria break down dead organic matter."
        ),

        Q(
            "What is the first trophic level usually occupied by?",
            ["Producers", "Carnivores", "Decomposers", "Omnivores"],
            0,
            "Food chain",
            "Producers generally form the first trophic level."
        )

    ],


    "biodiversity": [

        Q(
            "What does biodiversity mean?",
            ["Variety of life", "Only number of trees", "Only climate", "Only soil types"],
            0,
            "Biodiversity",
            "Biodiversity refers to the variety of living organisms."
        ),

        Q(
            "Which is an example of genetic diversity?",
            ["Different varieties of rice", "Different planets", "Different rocks", "Different rivers"],
            0,
            "Genetic diversity",
            "Different varieties of the same species can represent genetic diversity."
        ),

        Q(
            "What can habitat destruction cause?",
            ["Loss of biodiversity", "More biodiversity always", "No ecological effect", "More rainfall always"],
            0,
            "Habitat loss",
            "Habitat destruction can reduce populations and biodiversity."
        ),

        Q(
            "Which practice can help conserve biodiversity?",
            ["Protecting habitats", "Destroying forests", "Overhunting", "Polluting rivers"],
            0,
            "Conservation",
            "Protecting natural habitats is an important conservation strategy."
        )

    ],


    "pollution": [

        Q(
            "Which type of pollution affects the atmosphere?",
            ["Air pollution", "Soil pollution", "Noise pollution", "Water pollution"],
            0,
            "Air pollution",
            "Air pollution involves harmful substances in the atmosphere."
        ),

        Q(
            "Which gas is a major greenhouse gas?",
            ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
            0,
            "Greenhouse gases",
            "Carbon dioxide is an important greenhouse gas."
        ),

        Q(
            "Untreated sewage mainly causes which type of pollution?",
            ["Water pollution", "Noise pollution", "Light pollution", "Thermal insulation"],
            0,
            "Water pollution",
            "Untreated sewage can contaminate water bodies."
        ),

        Q(
            "Which practice helps reduce plastic pollution?",
            ["Reduce and reuse plastics", "Throw plastic into rivers", "Burn all plastic", "Use more single-use plastic"],
            0,
            "Plastic pollution",
            "Reducing and reusing plastic can help reduce plastic waste."
        )

    ],


    "climate change": [

        Q(
            "What is a major human-caused contributor to climate change?",
            ["Greenhouse gas emissions", "Moonlight", "Earth's rotation", "Ocean tides only"],
            0,
            "Climate change",
            "Human activities that increase greenhouse gas emissions contribute significantly to current climate change."
        ),

        Q(
            "Which gas is a major contributor to the enhanced greenhouse effect?",
            ["Carbon dioxide", "Oxygen", "Nitrogen", "Helium"],
            0,
            "Greenhouse effect",
            "Carbon dioxide is a major greenhouse gas."
        ),

        Q(
            "Which activity can increase carbon dioxide emissions?",
            ["Burning fossil fuels", "Planting trees", "Using solar energy", "Walking"],
            0,
            "Carbon emissions",
            "Burning coal, oil and natural gas releases carbon dioxide."
        ),

        Q(
            "Which action can help reduce greenhouse gas emissions?",
            ["Using renewable energy", "Increasing coal use", "Wasting electricity", "Destroying forests"],
            0,
            "Climate solutions",
            "Renewable energy can reduce dependence on fossil fuels."
        )

    ],


    /* =================================================
       COMPUTER SCIENCE / ECE
    ================================================= */

    "computer networks": [

        Q(
            "What does LAN stand for?",
            ["Local Area Network", "Large Area Network", "Long Access Network", "Local Access Node"],
            0,
            "LAN",
            "LAN stands for Local Area Network."
        ),

        Q(
            "Which device forwards data between different networks?",
            ["Router", "Keyboard", "Monitor", "Printer"],
            0,
            "Router",
            "A router forwards packets between networks."
        ),

        Q(
            "What does IP stand for?",
            ["Internet Protocol", "Internal Program", "Internet Program", "Input Protocol"],
            0,
            "IP",
            "IP stands for Internet Protocol."
        ),

        Q(
            "Which protocol is commonly used to transfer web pages securely?",
            ["HTTPS", "FTP only", "SMTP", "ARP only"],
            0,
            "HTTPS",
            "HTTPS is the secure version of HTTP used for web communication."
        )

    ],


    "programming basics": [

        Q(
            "What is a variable used for?",
            ["Storing data", "Displaying only images", "Turning off a computer", "Printing paper"],
            0,
            "Variables",
            "Variables are used to store values or data."
        ),

        Q(
            "Which symbol is commonly used for equality comparison in many programming languages?",
            ["==", "=", "=>", "!="],
            0,
            "Comparison operator",
            "In many languages, == checks whether two values are equal."
        ),

        Q(
            "What is a loop used for?",
            ["Repeating instructions", "Deleting the computer", "Only storing images", "Connecting a monitor"],
            0,
            "Loops",
            "Loops allow instructions to be repeated."
        ),

        Q(
            "What is an algorithm?",
            ["A step-by-step procedure", "A computer screen", "A battery", "A programming cable"],
            0,
            "Algorithm",
            "An algorithm is a step-by-step procedure for solving a problem."
        )

    ],


    "artificial intelligence": [

        Q(
            "What is AI?",
            ["Technology that enables machines to perform tasks requiring human-like intelligence", "Only a calculator", "A type of battery", "A programming cable"],
            0,
            "Artificial intelligence",
            "AI refers to systems designed to perform tasks associated with human intelligence."
        ),

        Q(
            "What is machine learning?",
            ["A method where systems learn patterns from data", "Only manual programming", "A type of sensor", "A computer monitor"],
            0,
            "Machine learning",
            "Machine learning uses data and algorithms to learn patterns or make predictions."
        ),

        Q(
            "Which is an example of supervised learning?",
            ["Learning from labeled examples", "Learning with no data", "Turning off a computer", "Charging a battery"],
            0,
            "Supervised learning",
            "Supervised learning uses labeled training examples."
        ),

        Q(
            "What is a dataset?",
            ["A collection of data", "A computer battery", "A display", "A network cable"],
            0,
            "Dataset",
            "A dataset is a collection of data used for analysis or machine learning."
        )

    ],


    "iot": [

        Q(
            "What does IoT stand for?",
            ["Internet of Things", "Input of Technology", "Internet of Technology", "Information of Things"],
            0,
            "IoT",
            "IoT stands for Internet of Things."
        ),

        Q(
            "What is a sensor used for?",
            ["Detecting or measuring physical quantities", "Only displaying text", "Only storing files", "Charging batteries"],
            0,
            "Sensors",
            "Sensors detect or measure physical quantities such as temperature or light."
        ),

        Q(
            "Which protocol is commonly used in IoT systems?",
            ["MQTT", "HTML only", "JPEG", "PDF"],
            0,
            "MQTT",
            "MQTT is a lightweight messaging protocol widely used in IoT."
        ),

        Q(
            "What does a microcontroller do?",
            ["Controls electronic systems using a programmable processor", "Only displays movies", "Only stores photos", "Acts only as a battery"],
            0,
            "Microcontrollers",
            "Microcontrollers are programmable devices used to control electronic systems."
        )

    ],


    "digital logic": [

        Q(
            "Which gate gives HIGH output only when all inputs are HIGH?",
            ["AND", "OR", "NOT", "XOR"],
            0,
            "AND gate",
            "An AND gate produces HIGH output when all inputs are HIGH."
        ),

        Q(
            "Which gate reverses the input?",
            ["AND", "OR", "NOT", "NAND"],
            2,
            "NOT gate",
            "A NOT gate produces the inverse of its input."
        ),

        Q(
            "What is the binary representation of decimal 2?",
            ["10", "11", "01", "100"],
            0,
            "Binary numbers",
            "Decimal 2 is represented as 10 in binary."
        ),

        Q(
            "How many states can one binary bit represent?",
            ["1", "2", "4", "8"],
            1,
            "Binary bit",
            "A bit can represent two states: 0 and 1."
        )

    ],


    /* =================================================
       SPACE
    ================================================= */

    "solar system": [

        Q(
            "Which star is at the center of our solar system?",
            ["Sun", "Moon", "Earth", "Sirius"],
            0,
            "Sun",
            "The Sun is the star at the center of our solar system."
        ),

        Q(
            "Which planet is known as the Red Planet?",
            ["Venus", "Mars", "Jupiter", "Mercury"],
            1,
            "Mars",
            "Mars is commonly called the Red Planet."
        ),

        Q(
            "Which is the largest planet in our solar system?",
            ["Earth", "Saturn", "Jupiter", "Neptune"],
            2,
            "Jupiter",
            "Jupiter is the largest planet in our solar system."
        ),

        Q(
            "Which planet is famous for its prominent ring system?",
            ["Mercury", "Saturn", "Mars", "Venus"],
            1,
            "Saturn",
            "Saturn has a prominent system of rings."
        )

    ],


    "satellites": [

        Q(
            "What is an artificial satellite?",
            ["A human-made object placed in orbit", "A natural star", "A type of planet", "A cloud"],
            0,
            "Artificial satellite",
            "An artificial satellite is a human-made object placed into orbit."
        ),

        Q(
            "Which system is widely used for satellite-based positioning?",
            ["GNSS", "USB", "HDMI", "RAM"],
            0,
            "Satellite navigation",
            "GNSS refers to global navigation satellite systems."
        ),

        Q(
            "What does GPS stand for?",
            ["Global Positioning System", "General Processing System", "Global Power System", "Ground Positioning Sensor"],
            0,
            "GPS",
            "GPS stands for Global Positioning System."
        ),

        Q(
            "What force keeps an artificial satellite in orbit around Earth?",
            ["Gravity", "Friction", "Sound", "Magnetism only"],
            0,
            "Satellite orbit",
            "Earth's gravity provides the force that keeps satellites in orbit."
        )

    ],


    /* =================================================
       GEOGRAPHY
    ================================================= */

    "indian geography": [

        Q(
            "Which is the longest river system in India?",
            ["Ganga", "Narmada", "Tapi", "Mahanadi"],
            0,
            "Indian rivers",
            "The Ganga river system is the longest major river system in India."
        ),

        Q(
            "Which is the highest mountain peak in India?",
            ["Kangchenjunga", "Anamudi", "Aravalli", "Nilgiri"],
            0,
            "Indian mountains",
            "Kangchenjunga is the highest mountain peak in India."
        ),

        Q(
            "Which ocean lies south of India?",
            ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            1,
            "Indian Ocean",
            "India is surrounded by the Indian Ocean to the south."
        ),

        Q(
            "Which desert is located mainly in northwestern India?",
            ["Sahara", "Thar", "Gobi", "Kalahari"],
            1,
            "Thar Desert",
            "The Thar Desert is located mainly in northwestern India."
        )

    ],


    "world geography": [

        Q(
            "Which is the largest continent?",
            ["Asia", "Africa", "Europe", "Australia"],
            0,
            "Continents",
            "Asia is the largest continent by area."
        ),

        Q(
            "Which is the largest ocean?",
            ["Atlantic", "Indian", "Pacific", "Arctic"],
            2,
            "Oceans",
            "The Pacific Ocean is the largest ocean."
        ),

        Q(
            "Which is the longest mountain range on land?",
            ["Andes", "Alps", "Himalayas", "Rockies"],
            0,
            "Mountain ranges",
            "The Andes form the longest continental mountain range on land."
        ),

        Q(
            "Which imaginary line divides Earth into Northern and Southern Hemispheres?",
            ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"],
            1,
            "Equator",
            "The Equator divides Earth into Northern and Southern Hemispheres."
        )

    ],


    /* =================================================
       ENGLISH
    ================================================= */

    "english grammar": [

        Q(
            "Which word is a noun?",
            ["Beautiful", "Run", "Book", "Quickly"],
            2,
            "Noun",
            "Book is a noun because it names a thing."
        ),

        Q(
            "Which word is a verb?",
            ["Run", "Beautiful", "Blue", "Quickly"],
            0,
            "Verb",
            "Run can function as a verb describing an action."
        ),

        Q(
            "Choose the correct sentence.",
            ["She are happy.", "She is happy.", "She am happy.", "She be happy."],
            1,
            "Subject-verb agreement",
            "The correct sentence is 'She is happy.'"
        ),

        Q(
            "What is the past tense of 'go'?",
            ["Goed", "Gone", "Went", "Going"],
            2,
            "Past tense",
            "The past tense of go is went."
        )

    ],


    "vocabulary": [

        Q(
            "What is a synonym for 'happy'?",
            ["Sad", "Joyful", "Angry", "Tired"],
            1,
            "Synonyms",
            "Joyful has a similar meaning to happy."
        ),

        Q(
            "What is an antonym of 'hot'?",
            ["Warm", "Cold", "Boiling", "Heat"],
            1,
            "Antonyms",
            "Cold is an antonym of hot."
        ),

        Q(
            "What does 'rapid' mean?",
            ["Slow", "Fast", "Weak", "Small"],
            1,
            "Vocabulary",
            "Rapid means fast or happening quickly."
        ),

        Q(
            "What does 'ancient' mean?",
            ["Very old", "Very new", "Very small", "Very fast"],
            0,
            "Vocabulary",
            "Ancient means very old."
        )

    ]

};


/* =====================================================
   TOPIC ALIASES
===================================================== */

const topicAliases = {

    "ohm law": "ohm's law",
    "ohms law": "ohm's law",
    "newton laws": "newton's laws",
    "newtons laws": "newton's laws",
    "light optics": "light and optics",
    "biology cells": "cell biology",
    "digestive system": "human digestive system",
    "respiratory system": "human respiratory system",
    "circulatory system": "human circulatory system",
    "ai": "artificial intelligence",
    "machine learning": "artificial intelligence",
    "computer networking": "computer networks",
    "english": "english grammar",
    "grammar": "english grammar",
    "maths": "algebra",
    "math": "algebra"

};


/* =====================================================
   NORMALIZE TOPIC
===================================================== */

function normalizeTopic(topic) {

    return topic
        .toLowerCase()
        .trim()
        .replace(/[’]/g, "'")
        .replace(/\s+/g, " ");

}


/* =====================================================
   SHUFFLE QUESTIONS
===================================================== */

function shuffleQuestions(questions) {

    const shuffled = [...questions];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        const temp =
            shuffled[i];

        shuffled[i] =
            shuffled[j];

        shuffled[j] =
            temp;

    }

    return shuffled;

}


/* =====================================================
   GET QUESTIONS
===================================================== */

function getQuestions(topic) {

    const normalizedTopic =
        normalizeTopic(topic);

    let topicKey =
        normalizedTopic;


    if (
        topicAliases[normalizedTopic]
    ) {

        topicKey =
            topicAliases[normalizedTopic];

    }


    if (
        questionBank[topicKey]
    ) {

        return shuffleQuestions(
            questionBank[topicKey]
        );

    }


    return createGenericQuestions(topic);

}


/* =====================================================
   GENERIC QUESTIONS
===================================================== */

function createGenericQuestions(topic) {

    return [

        Q(
            `What is the main idea you should understand about ${topic}?`,
            [
                "Its fundamental concept",
                "Only its spelling",
                "Only its history",
                "Nothing"
            ],
            0,
            topic,
            `Understanding the fundamental concept is the first step in learning ${topic}.`
        ),

        Q(
            `Which approach is useful when learning ${topic}?`,
            [
                "Understand concepts and practice",
                "Avoid examples",
                "Never practice",
                "Memorize without understanding"
            ],
            0,
            `${topic} fundamentals`,
            "Understanding concepts and practicing helps strengthen learning."
        ),

        Q(
            `What should you do when you make a mistake while studying ${topic}?`,
            [
                "Ignore it",
                "Understand why it happened",
                "Stop learning",
                "Delete your notes"
            ],
            1,
            `${topic} learning process`,
            "Understanding mistakes helps identify gaps in knowledge."
        ),

        Q(
            `What helps improve understanding of ${topic}?`,
            [
                "Practice",
                "Never reviewing",
                "Guessing everything",
                "Avoiding questions"
            ],
            0,
            `${topic} practice`,
            "Practice helps reinforce concepts and identify areas that need improvement."
        ),

        Q(
            `What is a useful goal while learning ${topic}?`,
            [
                "Understand the concepts",
                "Only finish quickly",
                "Avoid difficult questions",
                "Never test yourself"
            ],
            0,
            `${topic} mastery`,
            "The goal of learning should be understanding and eventually mastering the concepts."
        )

    ];

}