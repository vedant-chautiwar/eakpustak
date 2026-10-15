/**
 * Comprehensive academics dataset for EAK International School.
 * Fictional detailed curricular content, methodologies, and matriculation outcomes.
 */

export const academicsHeroData = {
  eyebrow: "Curricular Framework • Cambridge & IB World School",
  title: "Inquiry, Analysis & Discovery: From Early Years to the IB Diploma.",
  subtitle: "At EAK International School, scholarship is an adventurous, rigorous dialogue. We unite Cambridge Assessment International Education depth with the holistic, interdisciplinary synthesis of the International Baccalaureate continuum.",
};

export const curriculumOverviewData = {
  philosophy: "Our dual-pathway continuum provides an articulated progression designed to eliminate pedagogical gaps. Early inquiry sparks innate wonder, Middle School sharpens analytical research, Cambridge IGCSE secures rigorous subject mastery, and the IB Diploma prepares scholars for the intellectual independence required at the world's premier universities.",
  pillars: [
    {
      title: "Inquiry-Led Foundations",
      stage: "Early Years – Grade 5",
      desc: "Reggio and inquiry-grounded discovery in phonics, bilingual immersion, and foundational mathematics.",
    },
    {
      title: "Interdisciplinary Synthesis",
      stage: "Grades 6 – 8",
      desc: "Bridging analytical humanities with empirical science through thematic research projects and rhetoric.",
    },
    {
      title: "Rigorous Subject Depth",
      stage: "Grades 9 – 10 (IGCSE)",
      desc: "External Cambridge examination benchmarks across 24 subject combinations and laboratory practicums.",
    },
    {
      title: "Pre-University Mastery",
      stage: "Grades 11 – 12 (IB DP)",
      desc: "Theory of Knowledge (TOK), 4,000-word Extended Essay, and collegiate Higher Level specializations.",
    },
  ],
};

export const academicDivisionsData = [
  {
    id: "primary",
    name: "Primary School",
    tagline: "Foundational Wonder & Multilingual Literacy",
    grades: "Early Years (Pre-K) through Grade 5",
    ages: "Ages 3 to 11",
    curriculum: "Inquiry Continuum & Foundational Literacy",
    ratio: "1:10 Teacher-to-Scholar Ratio",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    imageCaption: "Hands-on collaborative inquiry in the Primary Discovery Suite",
    overview: "Our Primary School honors childhood curiosity while establishing rigorous foundations in English literacy, mathematical problem-solving, bilingual communication, and scientific exploration. Learning environments are carefully designed with flexible seminar zones and maker areas.",
    subjects: [
      { name: "Language & Literacy", detail: "Systematic phonics, rich literature study, creative prose, and verbal rhetoric." },
      { name: "Mathematics & Logic", detail: "Singapore Math concrete-pictorial-abstract progression and spatial reasoning." },
      { name: "Inquiry Sciences", detail: "Botany, physical forces, sensory biology, and environmental stewardship." },
      { name: "World Languages", detail: "Bilingual Spanish or Mandarin immersion from Pre-K onwards." },
      { name: "Creative Expressions", detail: "Studio fine art, Kodály choral music, and movement education." },
      { name: "Physical Mastery", detail: "Gymnastics, fundamental athletic motor skills, and weekly swim clinics." },
    ],
    features: [
      "Dedicated Primary Science & Nature Garden",
      "Specialist teachers for Music, Languages, and Physical Education",
      "Daily phonics and shared reading circles in dedicated primary library",
      "Pastoral circle time fostering empathy, mindfulness, and collaborative play",
    ],
    facilityLink: "Explore Radcliffe Primary Library",
  },
  {
    id: "middle",
    name: "Middle School",
    tagline: "Interdisciplinary Exploration & Critical Reasoning",
    grades: "Grades 6 through 8",
    ages: "Ages 11 to 14",
    curriculum: "Preparatory Secondary Curriculum & Interdisciplinary Units",
    ratio: "1:12 Faculty Mentorship Ratio",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    imageCaption: "Socratic seminar debate in the Middle School Humanities Pavilion",
    overview: "Middle School bridges early inquiry with formal analytical rigor. Young adolescents engage in departmentalized academic subjects led by passionate specialists, conducting independent research investigations and mastering executive function skills.",
    subjects: [
      { name: "English Language & Literature", detail: "Classical and modern literary analysis, argumentative essays, and speechwriting." },
      { name: "Integrated Sciences", detail: "Foundational Biology, Chemistry, and Physics with weekly laboratory experiments." },
      { name: "Advanced Mathematics", detail: "Algebraic structures, geometry, data visualization, and intro probability." },
      { name: "Humanities & Geography", detail: "Global civilizations, human geography, and contemporary ethical affairs." },
      { name: "Modern Foreign Languages", detail: "French, Spanish, Mandarin, or German (CEFR A2–B1 progression)." },
      { name: "Digital Innovation", detail: "Algorithmic logic, Python coding fundamentals, and 3D design prototyping." },
    ],
    features: [
      "Interdisciplinary Capstone Project in Grade 8",
      "Introductory Model United Nations and competitive debating guild",
      "Weekly laboratory practicums in purpose-built science suites",
      "Individualized pastoral tutor assigned to every cohort of 12 scholars",
    ],
    facilityLink: "Inspect STEM Innovation Suites",
  },
  {
    id: "secondary",
    name: "Secondary Education: Cambridge IGCSE",
    tagline: "Subject Specialization & International Examination Rigor",
    grades: "Grades 9 and 10",
    ages: "Ages 14 to 16",
    curriculum: "Cambridge Assessment International Education (Cambridge IGCSE)",
    ratio: "1:12 Faculty Mentorship Ratio",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    imageCaption: "Biotechnology genetic assay in the Senior Science Suites",
    overview: "Grades 9 and 10 follow the globally respected Cambridge International General Certificate of Secondary Education (IGCSE). Scholars select 8 to 10 rigorous examination subjects, balancing core intellectual requirements with individual academic passions.",
    subjects: [
      { name: "Core Languages", detail: "Cambridge First Language English, World Literature, French, Spanish, or German." },
      { name: "Mathematics & Extended Math", detail: "Pure mathematics, calculus foundations, and applied coordinate geometry." },
      { name: "Triple Science Pathway", detail: "Autonomous Cambridge syllabi in Biology, Chemistry, and Physics." },
      { name: "Social Sciences & Humanities", detail: "Economics, World History (20th Century), and Environmental Management." },
      { name: "Technology & Engineering", detail: "Computer Science (Algorithms, Data structures) and Design Technology." },
      { name: "Visual & Performing Arts", detail: "Art & Design (Fine Art), Drama (Theatrical staging), and Music." },
    ],
    features: [
      "Over 24 Cambridge IGCSE subject combinations",
      "Standardized Cambridge mock examination series in Michaelmas term",
      "Introductory university guidance profiling and psychometric mapping",
      "Duke of Edinburgh's International Bronze and Silver Award participation",
    ],
    facilityLink: "Tour Biotechnology Suites",
  },
  {
    id: "senior",
    name: "Senior Secondary: IB Diploma Programme",
    tagline: "Pre-University Breadth, Critical Synthesis & Global Scholarship",
    grades: "Grades 11 and 12",
    ages: "Ages 16 to 18",
    curriculum: "International Baccalaureate Diploma Programme (IB DP)",
    ratio: "1:8 Higher Level Seminar Ratio",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
    imageCaption: "Senior scholars outside the Radcliffe Learning Commons",
    overview: "The International Baccalaureate Diploma Programme is the gold standard of pre-university preparation. Scholars choose six subject courses (three at Higher Level and three at Standard Level) alongside the three foundational core components: Theory of Knowledge, the Extended Essay, and CAS.",
    subjects: [
      { name: "Group 1: Studies in Language", detail: "English A: Literature or English A: Language & Literature (HL/SL)." },
      { name: "Group 2: Language Acquisition", detail: "French B, Spanish B, Mandarin B, or Latin / Classical Greek (HL/SL)." },
      { name: "Group 3: Individuals & Societies", detail: "History of Europe & the Americas, Economics, Psychology, Global Politics (HL/SL)." },
      { name: "Group 4: Experimental Sciences", detail: "Biology, Chemistry, Physics, or Computer Science (HL/SL)." },
      { name: "Group 5: Mathematics", detail: "Mathematics: Analysis & Approaches or Applications & Interpretation (HL/SL)." },
      { name: "Group 6: The Arts or Elective", detail: "Visual Arts, Theater Arts, Music, or an additional Science/Humanities course." },
    ],
    features: [
      "Theory of Knowledge (TOK): Philosophical exploration of how knowledge is constructed",
      "Extended Essay (EE): 4,000-word independent university-grade research paper",
      "Creativity, Activity, Service (CAS): 150 hours of self-directed societal engagement",
      "1-on-1 Oxbridge and US Ivy League college admissions counselor advisement",
    ],
    facilityLink: "Explore University Counseling Center",
  },
];

export const teachingMethodologyData = [
  {
    number: "01",
    title: "Socratic Inquiry & Argumentative Discourse",
    subtitle: "Dialogue Over Passive Lectures",
    desc: "In every classroom from Grade 4 upwards, seminars are structured around essential open questions. Scholars learn to defend hypotheses with textual and empirical evidence, listen with respect to counter-arguments, and reformulate ideas critically.",
  },
  {
    number: "02",
    title: "Empirical & Laboratory Practicums",
    subtitle: "Science as an Applied Discipline",
    desc: "Science at EAK is not learned from textbooks alone. In our 6 university-bench research labs, scholars extract DNA, program neural networks, analyze water chemistry, and write scientific reports adhering to peer-reviewed academic standards.",
  },
  {
    number: "03",
    title: "Interdisciplinary Synthesis",
    subtitle: "Connecting Divergent Domains",
    desc: "Complex global problems do not belong to a single department. Our curriculum intentionally bridges disciplines—examining the ethics of AI through philosophy and computer science, or analyzing global migration through economics and literature.",
  },
  {
    number: "04",
    title: "Intimate Mentorship & 1:12 Ratios",
    subtitle: "Every Scholar Known & Stretched",
    desc: "With class sizes averaging 14 scholars, teachers identify learning styles rapidly. We provide extension tutorials for gifted mathematicians and historians alongside targeted diagnostic clinics for scholars reinforcing key concepts.",
  },
];

export const coCurricularData = [
  {
    category: "Scholastic Societies & STEM",
    iconName: "Compass",
    desc: "Extending academic passion into national and international arenas.",
    activities: [
      "Model United Nations (Annual Delegation to The Hague & Geneva)",
      "Oxford Union Competitive Parliamentary Debating Guild",
      "AI & Algorithmic Robotics Club (VEX & FIRST League)",
      "UKMT Mathematics Olympiad Masterclasses",
      "Radcliffe Scientific Journal (Student Peer-Reviewed Periodical)",
    ],
  },
  {
    category: "Performing & Visual Arts",
    iconName: "Music",
    desc: "Acoustic recitals, full theatrical staging, and studio craftsmanship.",
    activities: [
      "EAK Symphony Orchestra & Senior Chamber Choir",
      "Annual Michaelmas Shakespearean Drama Production",
      "Studio Fine Arts, Ceramics & Darkroom Photography Society",
      "Radford Jazz Ensemble & Contemporary Composition Lab",
      "Cinematography & Documentary Film Workshop",
    ],
  },
  {
    category: "Competitive Athletics & Expeditions",
    iconName: "Trophy",
    desc: "Physical endurance, teamwork, and personal grit on regional circuits.",
    activities: [
      "Senior Varsity Football & Independent Schools League",
      "Olympic Aquatics Squad (8-Lane 50m Pool Training)",
      "Track & Field Athletics (IAAF Standard 400m Track)",
      "Equestrian & Cross-Country Eventing Club",
      "Duke of Edinburgh's International Award (Gold Expedition)",
    ],
  },
];

export const academicAchievementsData = {
  disclaimer: "Fictional illustrative sample metrics benchmarking institutional performance for frontend evaluation.",
  keyMetrics: [
    { metric: "38.6", label: "Average IB Diploma Score", benchmark: "World average: 30.2" },
    { metric: "100%", label: "IB Diploma Pass Rate", benchmark: "5-Year Consecutive Average" },
    { metric: "74%", label: "IGCSE Grades at A* or A", benchmark: "Cambridge Grades 9–8" },
    { metric: "38", label: "Oxbridge & Ivy League Offers", benchmark: "Class of 2024 & 2025" },
  ],
  notableAccolades: [
    {
      title: "British Council International School Award",
      year: "2024–2027",
      detail: "Accredited for outstanding international dimension, multilingual curriculum, and cross-border research partnerships.",
    },
    {
      title: "UK Senior Mathematical Olympiad Champions",
      year: "2025",
      detail: "First-place team trophy among 450 independent secondary institutions nationwide.",
    },
    {
      title: "Cambridge Assessment Outstanding Scholar Award",
      year: "2025",
      detail: "Three scholars achieved Top in the United Kingdom scores in Cambridge IGCSE Physics, Chemistry, and Economics.",
    },
    {
      title: "European Model United Nations Best Delegation",
      year: "2025",
      detail: "Awarded Best Overall Delegation at the annual Hague International Model UN Conference.",
    },
  ],
};
