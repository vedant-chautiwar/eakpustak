/**
 * High-quality mock data for the EAK International School Homepage.
 * Fictional sample data tailored for an elite K-12 international academy.
 */

export const heroData = {
  badge: "Admissions Open for Academic Year 2026–2027",
  headline: "Fostering Inquiring Minds, Cultivating Global Character.",
  subheadline: "Founded in 2004, EAK International School delivers an intellectually ambitious, ethically anchored education for scholars aged 3 to 18 across Cambridge IGCSE and IB Diploma continuum pathways.",
  primaryCta: { label: "Apply for 2026–27", to: "/admissions" },
  secondaryCta: { label: "Discover Our Heritage", to: "/about" },
  image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
  imageCaption: "Oakridge Quadrangle & Central Academic Commons",
};

export const whyChooseUsData = [
  {
    number: "01",
    title: "Cambridge & IB Dual Continuum",
    description: "An articulated, world-class curriculum progression from Primary inquiry to Cambridge IGCSE and the gold-standard International Baccalaureate Diploma.",
    tag: "Academic Rigor",
  },
  {
    number: "02",
    title: "1:12 Faculty Mentorship Ratio",
    description: "Small seminar cohorts ensure that every scholar is known, challenged, and guided by subject specialists holding advanced international degrees.",
    tag: "Individual Focus",
  },
  {
    number: "03",
    title: "Global University Matriculation",
    description: "98% of graduates receive admissions offers from their top-three university choices across the UK Russell Group, US Ivy Plus, and European capitals.",
    tag: "Proven Trajectory",
  },
  {
    number: "04",
    title: "State-of-the-Art Research Labs",
    description: "Biotechnology, artificial intelligence, and precision robotics facilities designed to university research bench specifications.",
    tag: "Applied Innovation",
  },
  {
    number: "05",
    title: "Holistic Arts & Olympic Athletics",
    description: "400-seat acoustic black box theater, music conservatory, and an 8-lane heated Olympic pool alongside FIFA-certified grounds.",
    tag: "Co-Curricular Mastery",
  },
  {
    number: "06",
    title: "Ethical Leadership & Service",
    description: "Active community engagement, Model United Nations delegation, and environmental sustainability embedded into daily school life.",
    tag: "Character & Ethos",
  },
];

export const aboutSnippetData = {
  eyebrow: "Our Heritage & Vision",
  title: "An Educational Community Rooted in Tradition, Looking to the Future.",
  leadText: "Established in 2004 on a 24-acre parkland estate in London, EAK International School was founded on the conviction that scholarship and character are indivisible.",
  bodyText: "Today, our diverse student body represents more than 48 nationalities. We cultivate independent thinkers who question deeply, synthesize critically, and act with moral courage in an evolving world.",
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
  caption: "Seminar discussion in the Radcliffe Humanities Pavilion",
  cta: { label: "Read More About Our Story", to: "/about" },
  statsSnippet: [
    { value: "22+", label: "Years of Educational Distinction" },
    { value: "48", label: "Nationalities Represented" },
    { value: "100%", label: "IB Diploma Pass Rate (2025)" },
  ],
};

export const academicStagesData = [
  {
    id: "primary",
    division: "Primary School",
    grades: "Early Years – Grade 5",
    ages: "Ages 3 to 11",
    summary: "Nurturing foundational inquiry, multilingual literacy, spatial problem-solving, and creative exploration in self-contained developmental suites.",
    keyPoints: [
      "Reggio-inspired Early Years inquiry",
      "Bilingual Spanish & Mandarin language tracks",
      "Hands-on scientific discovery & computational logic",
    ],
    accent: "Early Learning Foundation",
  },
  {
    id: "middle",
    division: "Middle School",
    grades: "Grades 6 – 8",
    ages: "Ages 11 to 14",
    summary: "Guiding young adolescents through interdisciplinary thematic research, scientific experimentation, and analytical discourse.",
    keyPoints: [
      "Interdisciplinary STEM & humanities integration",
      "Structured debate, rhetoric & Model UN foundation",
      "Adolescent pastoral care & executive function mentorship",
    ],
    accent: "Exploratory & Analytical",
  },
  {
    id: "secondary",
    division: "Secondary School",
    grades: "Grades 9 – 10",
    ages: "Ages 14 to 16",
    summary: "Internationally benchmarked Cambridge IGCSE qualifications providing rigorous subject depth, laboratory assessments, and external examination rigor.",
    keyPoints: [
      "Choice of 24 rigorous Cambridge IGCSE subjects",
      "Independent scientific research papers",
      "Introductory university counseling & career profiling",
    ],
    accent: "Cambridge IGCSE",
  },
  {
    id: "senior",
    division: "Senior Secondary",
    grades: "Grades 11 – 12",
    ages: "Ages 16 to 18",
    summary: "The prestigious International Baccalaureate Diploma Programme (IB DP), recognized by leading global universities for critical intellectual breadth.",
    keyPoints: [
      "Theory of Knowledge (TOK) & 4,000-word Extended Essay",
      "Creativity, Activity, Service (CAS) self-directed portfolio",
      "Individualized Oxbridge & Ivy Plus matriculation counseling",
    ],
    accent: "IB Diploma Programme",
  },
];

export const facilitiesData = [
  {
    title: "Biotechnology & AI Robotics Suites",
    category: "Science & Technology",
    desc: "Equipped with automated gene sequencers, digital microscopy, 3D rapid prototyping, and sensor benches for collegiate-level STEM investigations.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    badge: "6 Specialized Labs",
  },
  {
    title: "The Radcliffe Learning Commons",
    category: "Intellectual Sanctuary",
    desc: "Home to 45,000 physical volumes, digital JSTOR repository access, soundproof research carrels, and panoramic views over the school gardens.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    badge: "45,000 Volumes",
  },
  {
    title: "Olympic Aquatics & Sports Arena",
    category: "Athletic Mastery",
    desc: "An 8-lane heated 50-meter competition pool, FIFA-grade turf pitch, IAAF running track, and hardwood indoor pavilion for competitive varsity fixtures.",
    image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80",
    badge: "50m Olympic Pool",
  },
  {
    title: "Interactive Smart Classrooms",
    category: "Pedagogical Spaces",
    desc: "Acoustically treated spaces with modular seminar seating, interactive high-resolution boards, and wireless airplay for hybrid collaborative presentations.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    badge: "100% Smart Classrooms",
  },
  {
    title: "Black Box Theater & Music Conservatory",
    category: "Creative & Performing Arts",
    desc: "A 400-seat convertible theater with computerized lighting rigs, Steinway pianos, and soundproof music recording and rehearsal studios.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    badge: "400-Seat Hall",
  },
  {
    title: "Secure GPS Fleet & Transit Logistics",
    category: "Safety & Transportation",
    desc: "Modern climate-controlled coach fleet servicing 18 designated municipal corridors, equipped with satellite tracking and certified chaperones.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    badge: "18 Transit Corridors",
  },
];

export const achievementsData = [
  {
    metric: "38.6",
    label: "Average IB Diploma Score",
    note: "World average: 30.2 (Class of 2025)",
  },
  {
    metric: "100%",
    label: "University Placement Rate",
    note: "Offers from UK Russell Group, US Ivy Plus, & Europe",
  },
  {
    metric: "14",
    label: "National Olympiad Gold Medals",
    note: "Mathematics, Physics, and Chemistry distinctions",
  },
  {
    metric: "£1.2M",
    label: "Scholarship Grants Awarded",
    note: "Awarded to 2025 graduates by global universities",
  },
];

export const principalMessageData = {
  eyebrow: "Leadership Welcome",
  title: "A Welcome from the Head of School",
  quote: "We believe education must cultivate both intellectual bravery and deep humility. Our scholars leave EAK equipped not only to excel at the world's most demanding universities, but to lead lives of consequence, empathy, and honor.",
  body: "For over two decades, EAK International School has stood as an intellectual home where rigorous scholarship meets an enduring commitment to character. Every morning as our scholars enter our gates, they are invited to question conventions, discover their unique voices, and embrace responsibility for the global community they will inherit.",
  author: "Dr. Alistair Sterling, Ph.D.",
  titleRole: "Head of School & Chief Executive Principal",
  credentials: "M.A. (Oxon), Ph.D. (Cantab), Fellow of the Royal Society of Arts",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  signatureText: "Alistair Sterling",
};

export const latestNewsData = [
  {
    id: "not-1",
    ref: "CIR-2026/09/ACAD",
    title: "Cambridge IGCSE & IB Mock Examination Schedules Released",
    date: "October 18, 2026",
    category: "Academic Circular",
    summary: "Detailed Michaelmas term examination schedules for Grades 10 and 12, including science laboratory practical slots and revision clinic hours.",
    urgent: true,
  },
  {
    id: "not-2",
    ref: "CIR-2026/08/ARTS",
    title: "Annual Winter Gala Concert Reservations Now Open",
    date: "October 22, 2026",
    category: "Campus Events",
    summary: "Join the EAK Symphony Orchestra and Chamber Choir in the Radford Performing Arts Center for an evening of classical and choral masterpieces.",
    urgent: false,
  },
  {
    id: "not-3",
    ref: "CIR-2026/07/SPRT",
    title: "Varsity Football Squad Clinches South East Championship",
    date: "October 25, 2026",
    category: "Athletic Distinction",
    summary: "Our Senior Boys Varsity Football team has successfully defended their title with a thrilling 3-1 victory in the regional tournament finals.",
    urgent: false,
  },
];

export const upcomingEventsData = [
  {
    id: "ev-1",
    dateDay: "05",
    dateMonth: "NOV",
    title: "Prospective Parent Open Morning & Campus Walkthrough",
    time: "09:30 – 12:00 GMT",
    location: "Oakridge Assembly Hall & Gardens",
    audience: "Early Years, Primary & Middle Admissions",
  },
  {
    id: "ev-2",
    dateDay: "12",
    dateMonth: "NOV",
    title: "Global Perspectives Symposium & Model UN Exhibition",
    time: "14:00 – 17:30 GMT",
    location: "Radcliffe Humanities Pavilion",
    audience: "Grades 8 through 12 Scholars & Families",
  },
  {
    id: "ev-3",
    dateDay: "20",
    dateMonth: "NOV",
    title: "STEM Innovation Showcase & Robotics Demonstration",
    time: "10:00 – 15:00 GMT",
    location: "Biotechnology & AI Center",
    audience: "All Divisions & Community Guests",
  },
];

export const testimonialsData = [
  {
    id: "test-1",
    quote: "EAK transformed our daughter from a hesitant reader into an inquisitive researcher who debates global ethics with poise. The mentorship of the Cambridge and IB faculty is unparalleled.",
    author: "Dr. Caroline Beauchamp",
    relation: "Parent of Grade 11 IB Diploma Scholar",
    cohort: "Enrolled since Grade 3",
  },
  {
    id: "test-2",
    quote: "The academic rigor is balanced by an extraordinary culture of kindness. Here, being intellectual is celebrated, and every teacher takes time to understand your individual ambitions.",
    author: "Marcus Chen",
    relation: "Head Boy & IB Scholar (Class of 2025)",
    cohort: "Now reading PPE at University of Oxford",
  },
  {
    id: "test-3",
    quote: "As an international family relocating frequently, finding a school that offered both Cambridge IGCSE and IB Diploma continuity was essential. EAK made our transition seamless.",
    author: "Elena Rostov-Svensson",
    relation: "Parent of Grades 4 & 7 Scholars",
    cohort: "Enrolled 2022",
  },
];
