/**
 * Comprehensive admissions dataset for EAK International School.
 * Fictional sample data for 2026–2027 admissions cycle.
 */

export const admissionsHeroData = {
  badge: "Admissions Open • Academic Year 2026–2027",
  title: "Your Scholar's Journey Begins Here.",
  subtitle: "We welcome applications from motivated learners of all backgrounds. Our transparent five-step admissions process ensures that every family receives personal guidance, clear timelines, and dedicated registrar support.",
  intakeDeadlines: "Priority Round Closes: November 15, 2026 | Rolling Admissions for Select Grades",
};

export const admissionsSteps = [
  {
    step: "01",
    phase: "Enquiry",
    name: "Enquiry & Campus Exploration",
    timeframe: "Year-Round",
    summary: "Initiate contact through our online inquiry prototype or schedule an accompanied private walkthrough of our 24-acre Oakridge estate.",
    details: [
      "Receive our comprehensive 48-page Digital Prospectus & Syllabus Guide",
      "Attend a guided campus tour led by senior prefects and admissions staff",
      "Initial 20-minute informal consultation with our Admissions Registrar",
    ],
    actionLabel: "Submit Inquiry Below",
    actionTarget: "#inquiry-form",
  },
  {
    step: "02",
    phase: "Application",
    name: "Application & Portfolio Dossier",
    timeframe: "Within 2 Weeks of Enquiry",
    summary: "Complete the candidate profile and upload certified academic records, teacher recommendations, and personal statement.",
    details: [
      "Official academic transcripts for the past two consecutive school years",
      "Confidential recommendation form from the applicant's current school head",
      "Copy of passport bio-data or certified birth certificate",
      "Creative or academic portfolio submission (required for Grades 9–12)",
    ],
    actionLabel: "Review Document Checklist",
    actionTarget: "#document-checklist",
  },
  {
    step: "03",
    phase: "Assessment",
    name: "Interaction & Scholastic Assessment",
    timeframe: "Scheduled Individually",
    summary: "Age-appropriate cognitive, literacy, and numeracy evaluations designed to discover the applicant's learning strengths and intellectual curiosity.",
    details: [
      "Early Years & Primary: Social readiness observation & informal literacy play",
      "Middle School: CAT4 cognitive reasoning, reading comprehension, and math",
      "Secondary & IB DP: Subject-specific diagnostic papers in English & Mathematics",
      "30-minute conversational interview with the Divisional Academic Dean",
    ],
    actionLabel: "View Eligibility Matrix",
    actionTarget: "#eligibility-criteria",
  },
  {
    step: "04",
    phase: "Selection",
    name: "Committee Review & Letter of Offer",
    timeframe: "7–10 Days Post-Assessment",
    summary: "The Admissions Review Committee evaluates the candidate's holistic profile, academic aptitude, and community alignment.",
    details: [
      "Unconditional, Conditional, or Waiting Pool offers communicated in writing",
      "Detailed assessment feedback breakdown provided to parents",
      "Scholarship and bursary award notifications issued concurrently",
    ],
    actionLabel: "Check Important Dates",
    actionTarget: "#important-dates",
  },
  {
    step: "05",
    phase: "Enrollment",
    name: "Enrollment Confirmation & Welcome",
    timeframe: "14 Days to Confirm",
    summary: "Formal acceptance of the place, completion of health documents, uniform fittings, and house placement for day and boarding scholars.",
    details: [
      "Submission of signed parent contract and seat deposit confirmation",
      "House allocation (Radcliffe, Churchill, Newton, or Somerville)",
      "Invitation to New Scholar Orientation and peer buddy pairing",
    ],
    actionLabel: "Explore FAQs",
    actionTarget: "#admissions-faqs",
  },
];

export const eligibilityGroups = [
  {
    group: "Early Years",
    grades: "Pre-K & Kindergarten",
    ageRange: "Ages 3 to 5",
    cutoff: "Must reach age 3 or 4 by August 31, 2026",
    requirements: "Social-emotional developmental readiness, age-appropriate toilet independence, and readiness for bilingual language play in English and Spanish/Mandarin.",
    assessmentFormat: "45-minute interactive play session in our Early Learning Suite with child psychologists and lead teachers.",
  },
  {
    group: "Primary School",
    grades: "Grades 1 through 5",
    ageRange: "Ages 6 to 11",
    cutoff: "Must reach age 6 by August 31, 2026 for Grade 1",
    requirements: "Foundational phonics, English reading comprehension, basic arithmetic skills, and a positive record of behavior from prior school/nursery.",
    assessmentFormat: "Age-normed literacy and numeracy tasks, informal creative writing exercise, and group classroom interaction.",
  },
  {
    group: "Middle School",
    grades: "Grades 6 through 8",
    ageRange: "Ages 11 to 14",
    cutoff: "Completion of primary schooling or equivalent",
    requirements: "Strong proficiency in spoken and written English (minimum CEFR B1 for non-native speakers), solid scientific inquiry skills, and collaborative mindset.",
    assessmentFormat: "CAT4 cognitive aptitude battery (Verbal, Non-Verbal, Quantitative, Spatial) + written essay and Dean interview.",
  },
  {
    group: "Secondary (Cambridge IGCSE)",
    grades: "Grades 9 and 10",
    ageRange: "Ages 14 to 16",
    cutoff: "Successful completion of Grade 8 / Year 9",
    requirements: "Demonstrated academic aptitude in core sciences and humanities, CEFR B2 English proficiency, and commitment to 8–10 examination subjects.",
    assessmentFormat: "Diagnostic papers in English, Mathematics, and General Science, followed by subject elective consultation.",
  },
  {
    group: "Senior Secondary (IB Diploma)",
    grades: "Grades 11 and 12",
    ageRange: "Ages 16 to 18",
    cutoff: "Minimum 5 IGCSEs / GCSEs at grades 9–5 (A*–C)",
    requirements: "Exemplary academic transcript, strong teacher references, minimum grade 6/B in prospective Higher Level subjects, and passion for independent research.",
    assessmentFormat: "Academic writing sample, Mathematics placement assessment, and personal interview with the IB Diploma Coordinator.",
  },
];

export const requiredDocumentsList = [
  {
    id: "doc-1",
    category: "Identity & Civil Records",
    items: [
      "Official certified Birth Certificate or valid Passport bio-data page",
      "Two recent passport-format digital color photographs of the applicant",
      "Proof of parental custody or legal guardianship (if applicable)",
    ],
  },
  {
    id: "doc-2",
    category: "Academic Records",
    items: [
      "Official academic transcripts and report cards for the past two full academic years",
      "Most recent mid-term grade card from current school",
      "Standardized assessment scores (e.g., CAT4, MAP, ISA, WIDA) if available",
    ],
  },
  {
    id: "doc-3",
    category: "Confidential References",
    items: [
      "Confidential recommendation form completed directly by the applicant's current principal or class tutor",
      "Special Educational Needs (SEN) reports or IEP documentation (if applicable)",
    ],
  },
  {
    id: "doc-4",
    category: "Health & Wellbeing",
    items: [
      "Complete child immunization history and pediatric health clearance",
      "Emergency medical consent declaration signed by both parents/guardians",
    ],
  },
];

export const importantDatesList = [
  {
    term: "Michaelmas Cycle",
    event: "Early Priority Application Deadline (All Divisions)",
    date: "November 15, 2026",
    status: "Priority",
    badgeVariant: "crimson",
  },
  {
    term: "Michaelmas Cycle",
    event: "First Round Scholastic Assessments & Scholar Interviews",
    date: "December 01 – 15, 2026",
    status: "Active",
    badgeVariant: "navy",
  },
  {
    term: "Lent Cycle",
    event: "Priority Round Formal Letters of Offer Dispatched",
    date: "January 15, 2027",
    status: "Upcoming",
    badgeVariant: "forest",
  },
  {
    term: "Lent Cycle",
    event: "IB Diploma & Cambridge IGCSE Merit Scholarship Submissions",
    date: "February 10, 2027",
    status: "Scholarships",
    badgeVariant: "brass",
  },
  {
    term: "Trinity Cycle",
    event: "Rolling Admissions Review for Relocating Families",
    date: "March 01, 2027 onwards",
    status: "Rolling",
    badgeVariant: "default",
  },
];

export const tuitionAndGuidanceData = [
  {
    title: "Transparent Tuition Architecture",
    description: "Tuition fees include all laboratory equipment, digital textbooks, standard classroom stationery, library resources, curriculum excursions, and secondary student device subscriptions.",
    subtext: "No hidden technology or facility levies.",
  },
  {
    title: "Merit & Leadership Scholarships",
    description: "EAK awards up to 40% tuition fee reduction endowments to exceptional candidates entering Grade 9 (IGCSE) or Grade 11 (IB DP) demonstrating academic brilliance, musical virtuosity, or national athletic achievement.",
    subtext: "Annual renewal subject to scholastic standing.",
  },
  {
    title: "International Family Relocations",
    description: "Our dedicated admissions registrar coordinates seamless mid-term enrollments for corporate, diplomatic, and overseas families relocating to London outside standard term deadlines.",
    subtext: "Visa sponsorship & transit guidance provided.",
  },
];

export const admissionsFaqData = [
  {
    category: "General Application",
    question: "When is the ideal time to apply for the 2026–2027 academic year?",
    answer: "We strongly advise submitting applications by our Early Priority Deadline of November 15, 2026. While rolling admissions continue for select grades where places remain, high-demand entry points (Kindergarten, Grade 6, Grade 9, and Grade 11) typically fill during the first round.",
  },
  {
    category: "General Application",
    question: "Can we apply if we are relocating to London mid-academic year?",
    answer: "Yes. EAK maintains a dedicated protocol for international and diplomatic relocations. Subject to space availability and successful assessment, scholars may join us at the start of Lent term (January) or Trinity term (April).",
  },
  {
    category: "Assessments & Criteria",
    question: "What is the format of the student interaction and scholastic assessment?",
    answer: "Assessments are designed to understand how a student thinks, rather than testing memorization. Early Years candidates engage in observation-based play. Grades 1–8 complete age-appropriate literacy and CAT4 reasoning tasks. Grades 9–12 complete diagnostic papers in English and Mathematics followed by a dialogue with our Academic Dean.",
  },
  {
    category: "Assessments & Criteria",
    question: "Do you offer English as an Additional Language (EAL) support?",
    answer: "Yes. We celebrate a multilingual campus representing over 48 nationalities. For scholars who have high academic potential but need English language bridging, our dedicated EAL specialists provide integrated language immersion support.",
  },
  {
    category: "Fees & Scholarships",
    question: "Are payment plans available for tuition fees?",
    answer: "Tuition is payable annually or in three equal termly installments (August, December, and March). A 3% courtesy reduction is applied to families who settle annual tuition in a single upfront payment.",
  },
  {
    category: "Fees & Scholarships",
    question: "How can my child apply for an Academic or Arts Scholarship?",
    answer: "Scholarship candidates entering Grades 9 or 11 must indicate their intention on the application form and submit supporting academic portfolios, musical audition recordings, or athletic records by February 10, 2027. Shortlisted candidates are invited for specialized auditions.",
  },
  {
    category: "Campus & Logistics",
    question: "Is school transportation available throughout London?",
    answer: "Yes. Our secure, climate-controlled GPS school coach fleet covers 18 designated corridors across Greater London and surrounding districts, operated by vetted drivers and trained onboard attendants.",
  },
  {
    category: "Campus & Logistics",
    question: "What boarding options are available at the Oakridge campus?",
    answer: "We offer full 7-day boarding and weekly 5-day boarding for scholars from Grade 7 upwards in our newly refurbished residential pavilions, supported by resident housemasters, evening tutors, and 24/7 medical nursing staff.",
  },
];
