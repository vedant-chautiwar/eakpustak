/**
 * Local Mock Dataset for EAK International School — Events & Notices
 * Covers:
 * - School Circulars
 * - Examination Notices
 * - Holiday Announcements
 * - Upcoming School Events
 * - Competitions & Tournaments
 *
 * Designed for parents seeking academic schedules and institutional updates.
 */

export const NOTICES_AND_EVENTS = [
  // ─── 1. SCHOOL CIRCULARS ──────────────────────────────────────────────────
  {
    id: 'circ-1',
    ref: 'CIR-2026/10/TRANS',
    type: 'circular',
    category: 'Administrative & Transport',
    categoryVariant: 'navy',
    title: 'Revised Morning Shuttle Bus Routes & Real-Time GPS Tracking Portal',
    date: 'October 16, 2026',
    dateISO: '2026-10-16',
    audience: 'All Bus Commuters & Parents',
    department: 'Transport & Campus Logistics Bureau',
    important: true,
    summary: 'Updated pickup and drop-off schedules for Routes 4, 7, and 12 effective Monday, October 19. Parents are advised to activate GPS fleet tracking notifications on the parent portal.',
    description: `Following the municipal road widening near Oakridge Junction, the School Transport Committee has recalibrated arrival timings for bus routes 4 (North Ridge), 7 (Valley Estate), and 12 (Central Promenade).
    
Key Highlights:
1. Morning pickup at all designated stops along Route 7 will commence 8 minutes earlier.
2. The real-time bus beacon system is now synced with the EAK Parent Portal app.
3. Fleet drivers have received revised speed limit compliance guidelines and student manifest verification devices.
    
All families utilizing school transportation are requested to verify their designated stop times on the digital transport roster.`,
    actionRequired: 'Confirm revised stop timings via the Parent Portal by Oct 18.',
    attachments: [
      { name: 'Revised_Bus_Routes_Oct2026.pdf', size: '1.2 MB' },
      { name: 'GPS_Tracking_Guide.pdf', size: '640 KB' },
    ],
  },
  {
    id: 'circ-2',
    ref: 'CIR-2026/10/UNIF',
    type: 'circular',
    category: 'Administrative & Transport',
    categoryVariant: 'navy',
    title: 'Mandatory Winter Uniform Transition Guidelines & Radford Crest Blazer Policy',
    date: 'October 18, 2026',
    dateISO: '2026-10-18',
    audience: 'Grades 1 to 12 (All Scholars)',
    department: 'Office of Student Welfare & Pastoral Care',
    important: false,
    summary: 'The formal transition to Michaelmas winter dress code commences Friday, November 1st. Radford navy woolen blazers, ties, and regulation knitwear are available at the tuck shop.',
    description: `As seasonal temperatures decline, all students from Grade 1 through Grade 12 must transition to the formal winter academic uniform from Friday, November 1, 2026.
    
Uniform Standards:
- Primary Division (Grades 1–5): Crested V-neck pullover, charcoal trousers/pleated pinafore, and long-sleeve oxford shirt.
- Middle & Senior Divisions (Grades 6–12): Tailored navy blazer with embroidered gold crest, house silk tie, and polished black Oxford footwear.
- Non-regulation cardigans, hoodies, or non-crested outwear are strictly prohibited during formal assembly hours.
    
The campus tuck shop will observe extended operating hours (08:00 – 17:00) through October 28 for uniform fittings.`,
    actionRequired: 'Procure required winter wear before November 1.',
    attachments: [
      { name: 'Uniform_Code_and_Grooming_Manual.pdf', size: '2.1 MB' },
    ],
  },
  {
    id: 'circ-3',
    ref: 'CIR-2026/10/HLTH',
    type: 'circular',
    category: 'Safety & Health',
    categoryVariant: 'crimson',
    title: 'Annual Health & Wellness Screening Camp for Boarders and Day Scholars',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    audience: 'All Day Scholars & Boarders',
    department: 'Campus Infirmary & Medical Directorate',
    important: true,
    summary: 'The medical wing will conduct routine pediatric health, vision, and dental checkups from October 27 to 31. Parents must upload updated immunisation certificates.',
    description: `In partnership with St. Jude Pediatric Health Sciences, EAK International School will conduct its comprehensive annual health, audiology, and optometry screening from October 27 to October 31, 2026.
    
Screening Schedule:
- Primary Division: October 27–28
- Middle School: October 29
- Senior School & Boarders: October 30–31
    
Confidential diagnostic reports will be published directly to each parent's health record folder on the school portal within 5 business days. Please ensure medical consent checkboxes are signed.`,
    actionRequired: 'Sign digital medical consent before October 25.',
    attachments: [
      { name: 'Medical_Consent_Form_2026.pdf', size: '480 KB' },
    ],
  },
  {
    id: 'circ-4',
    ref: 'CIR-2026/09/FIN',
    type: 'circular',
    category: 'Administrative & Transport',
    categoryVariant: 'navy',
    title: 'Michaelmas Term II Tuition Invoices & Banking Gateway Maintenance Notice',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    audience: 'All Fee-Paying Parents & Guardians',
    department: 'Bursar & Finance Office',
    important: false,
    summary: 'Term II fee statements have been dispatched via the parent portal. Note that the online banking gateway will undergo routine maintenance on Sunday, October 26 from 02:00 to 06:00 UTC.',
    description: `The Bursar’s Office has finalized tuition and activity statements for the second phase of the Michaelmas term. Individual fee schedules, including laboratory fees, elective arts materials, and residential boarding charges, are now viewable in the billing ledger.
    
Key Dates:
- Scheduled Gateway Maintenance: Sunday, October 26 (02:00 – 06:00 UTC)
- Prompt Payment Concession Window: Open until November 10, 2026
- Final Due Date without Late Levy: November 25, 2026
    
For international wire transfers, please ensure the student's unique admission index number is appended in the SWIFT remittance reference field.`,
    actionRequired: 'Review fee invoice on parent portal; note maintenance window.',
    attachments: [
      { name: 'Term_II_Fee_Schedule_and_Wire_Details.pdf', size: '780 KB' },
    ],
  },
  {
    id: 'circ-5',
    ref: 'CIR-2026/09/BOARD',
    type: 'circular',
    category: 'Administrative & Transport',
    categoryVariant: 'brass',
    title: 'Autumn Residential Boarding Recess Protocols & Travel Itinerary Submissions',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    audience: 'Residential Boarding Families',
    department: 'Dean of Boarding & Pastoral Care',
    important: true,
    summary: 'Parental travel consent forms and airport shuttle transfers for the mid-term recess must be submitted through the boarding coordinator desk by Thursday, October 22.',
    description: `Ahead of the upcoming Autumn Mid-Term break, residential boarding houses (Oak House, Radcliffe Hall, and Somerville) will commence recess procedures on Wednesday, October 28 at 14:00.
    
Protocols for Boarding Guardians:
1. Airport and railway station shuttle coaches will depart campus on October 28 at 14:30 and 17:00.
2. Boarders remaining on campus under pastoral supervision must register for the Michaelmas Enrichment Programme by October 23.
3. Houses reopen on Tuesday, November 3 at 10:00. All boarders must return before roll call at 18:00.`,
    actionRequired: 'Submit flight/travel manifest by October 22.',
    attachments: [
      { name: 'Boarding_Travel_Consent_Form.pdf', size: '520 KB' },
    ],
  },
  {
    id: 'circ-6',
    ref: 'CIR-2026/08/TECH',
    type: 'circular',
    category: 'STEM & Innovation',
    categoryVariant: 'forest',
    title: 'Scholar 1:1 Digital Device Security & Cloud Classroom Environment Update',
    date: 'October 10, 2026',
    dateISO: '2026-10-10',
    audience: 'Grades 6 to 12 Scholars & Parents',
    department: 'Digital Learning & IT Services',
    important: false,
    summary: 'Routine security certificate updates and managed software deployments for all student iPads and MacBooks will be pushed automatically over the weekend.',
    description: `The IT Services Directorate will deploy the Q4 digital security certificate updates across all student-enrolled devices.
    
What Parents Should Know:
- Ensure student laptops and tablets are powered on and connected to home Wi-Fi over the weekend.
- The classroom workspace suite (Google Workspace for Education & Turnitin) will experience a brief 15-minute sync window on Sunday evening.
- Browsing filter profiles and web-filtering policies have been updated to reinforce AI research ethics and academic integrity guidelines.`,
    actionRequired: 'Leave student devices connected to Wi-Fi on Sunday evening.',
    attachments: [
      { name: 'Device_Management_FAQ.pdf', size: '920 KB' },
    ],
  },

  // ─── 2. EXAMINATION NOTICES ───────────────────────────────────────────────
  {
    id: 'exam-1',
    ref: 'EXAM-2026/05/IGCSE',
    type: 'examination',
    category: 'Examinations',
    categoryVariant: 'crimson',
    title: 'Cambridge IGCSE Mock Examination Timetable & Revision Masterclasses',
    date: 'October 17, 2026',
    dateISO: '2026-10-17',
    audience: 'Grade 10 Scholars & Parents',
    department: 'Cambridge Assessment International Education Desk',
    important: true,
    summary: 'The Michaelmas mock examination timetable has been published for all Grade 10 scholars. Subject-specific revision clinics and past-paper clinics commence Monday, October 20.',
    description: `As part of the rigorous preparation for the upcoming Cambridge IGCSE series, Grade 10 scholars will sit their formal preparatory mock examination from November 09 to November 18, 2026.
    
Examination Rules:
- Morning sessions commence strictly at 08:30 (reporting by 08:15).
- Afternoon sessions commence at 13:30 (reporting by 13:15).
- Transparent pencil cases, authorized scientific calculators without formula memories, and photo ID badges are strictly enforced.
- Formative diagnostic feedback and teacher review sessions will be conducted following the return of marked papers on November 25.`,
    actionRequired: 'Download official timetable and ensure student attendance.',
    attachments: [
      { name: 'IGCSE_Mock_Exam_Timetable_Nov2026.pdf', size: '1.4 MB' },
      { name: 'Approved_Equipment_List.pdf', size: '380 KB' },
    ],
  },
  {
    id: 'exam-2',
    ref: 'EXAM-2026/04/IBDP',
    type: 'examination',
    category: 'Examinations',
    categoryVariant: 'crimson',
    title: 'IB Diploma Programme Extended Essay & Theory of Knowledge (TOK) Viva Roster',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    audience: 'Grade 12 (Year 2 IB DP)',
    department: 'IB Diploma Programme Coordinator',
    important: true,
    summary: 'Final viva voce schedules for the 4,000-word Extended Essay are now live. Candidates must bring authenticated research logs and supervisor notes to Room S-204.',
    description: `Grade 12 IB Diploma candidates must attend their mandatory concluding viva voce reflection interviews between November 02 and November 06, 2026.
    
Requirements:
1. Upload final Extended Essay drafts with Turnitin similarity indices below 10% to ManageBac by October 30, 23:59.
2. The TOK Exhibition portfolio presentations will be staged simultaneously in the Radcliffe Hall Library Gallery.
3. Parents of Grade 12 students are invited to review the predicted grading assessment protocols via the IB coordinator webinar on October 29.`,
    actionRequired: 'Submit final draft by October 30; confirm viva interview time.',
    attachments: [
      { name: 'IB_Viva_Voce_Roster_Nov2026.pdf', size: '890 KB' },
    ],
  },
  {
    id: 'exam-3',
    ref: 'EXAM-2026/03/PRACT',
    type: 'examination',
    category: 'Examinations',
    categoryVariant: 'navy',
    title: 'Practical Laboratory Assessments: Physics, Chemistry & Biology (Grades 10–12)',
    date: 'November 02, 2026',
    dateISO: '2026-11-02',
    audience: 'Grades 10, 11 & 12 Science Scholars',
    department: 'Department of Natural Sciences',
    important: false,
    summary: 'Laboratory station allocations, apparatus safety briefs, and timetable slots for secondary science practicals in the Sir James Chadwick STEM Centre.',
    description: `Laboratory practical assessments will take place under strict proctoring conditions in the STEM Laboratory Wing from November 10 to November 13, 2026.
    
Guidelines:
- All scholars must arrive equipped with certified cotton lab coats, splash-proof safety goggles, and non-programmable calculators.
- Mobile phones and digital watches are strictly confiscated upon entry into the laboratory prep corridor.
- Make-up laboratory assessments will only be scheduled under formal medical certificate exemption certified by the School Medical Officer.`,
    actionRequired: 'Verify laboratory station number and equipment requirements.',
    attachments: [
      { name: 'Science_Practical_Schedule_2026.pdf', size: '1.1 MB' },
    ],
  },
  {
    id: 'exam-4',
    ref: 'EXAM-2026/02/HALL',
    type: 'examination',
    category: 'Examinations',
    categoryVariant: 'crimson',
    title: 'Biometric Candidate Identification & Examination Hall Ticket Issuance',
    date: 'November 05, 2026',
    dateISO: '2026-11-05',
    audience: 'Grades 6 to 12 (All Candidates)',
    department: 'Academic Registry & Examinations Office',
    important: true,
    summary: 'Electronic examination entry hall tickets are now ready for download. Students must print and preserve physical laminated copies for all term assessments.',
    description: `All registered candidates for the Michaelmas end-of-term examinations must possess an authenticated, barcoded hall ticket.
    
Steps to Access:
1. Log in to the parent portal and navigate to Academic Records > Examination Hall Tickets.
2. Verify candidate legal name, date of birth, Cambridge/IB candidate index, and registered subject codes.
3. Print in colour and ensure the candidate and parent signatures are appended before the first examination session.`,
    actionRequired: 'Download and print physical hall ticket by November 08.',
    attachments: [
      { name: 'Sample_Hall_Ticket_Verification.pdf', size: '620 KB' },
    ],
  },
  {
    id: 'exam-5',
    ref: 'EXAM-2026/01/MID',
    type: 'examination',
    category: 'Examinations',
    categoryVariant: 'forest',
    title: 'Middle Years Division (Grades 6–8) Formative Assessment Window',
    date: 'November 15, 2026',
    dateISO: '2026-11-15',
    audience: 'Grades 6 to 8 Students & Families',
    department: 'Middle School Academic Dean',
    important: false,
    summary: 'Term evaluation schedules for Cambridge Lower Secondary candidates covering Humanities, Mathematics, Modern Foreign Languages, and Computing.',
    description: `The Middle Years Division will carry out formative diagnostic evaluations from November 23 through November 27, 2026.
    
Purpose:
- To assess core competencies, reading comprehension, and problem-solving reasoning ahead of term reports.
- Students will have regular class periods in the morning with testing conducted in 60-minute blocks.
- No heavy homework will be assigned during the evaluation week to support student wellbeing.`,
    actionRequired: 'Review study syllabus outlined in the division newsletter.',
    attachments: [
      { name: 'Middle_Years_Assessment_Matrix.pdf', size: '750 KB' },
    ],
  },

  // ─── 3. HOLIDAY ANNOUNCEMENTS ─────────────────────────────────────────────
  {
    id: 'hol-1',
    ref: 'HOL-2026/04/DIWALI',
    type: 'holiday',
    category: 'Holiday & Term Dates',
    categoryVariant: 'brass',
    title: 'Festival of Lights & Autumn Mid-Term Recess (Campus Closure Notice)',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    audience: 'Whole School Community',
    department: 'Office of the Principal & Academic Registry',
    important: true,
    holidaySpan: 'October 28 – November 03, 2026',
    summary: 'The school will remain closed from Wednesday, October 28 through Tuesday, November 03, 2026 for the Festival of Lights and Autumn Recess. Classes resume Wednesday, November 04.',
    description: `EAK International School will observe the Autumn Mid-Term and Festival of Lights recess.
    
Operational Notes:
- Last instructional day before recess: Tuesday, October 27 (full standard timetable).
- Administrative offices will be closed October 28 to November 02; a skeleton enquiry desk will operate from November 03.
- Classes across all divisions resume promptly at 08:15 on Wednesday, November 04, 2026.
- The Principal and Faculty wish all school families a joyful, safe, and illuminating festive break!`,
    actionRequired: 'Note campus closure dates; ensure boarder pickup by Oct 28.',
    attachments: [
      { name: 'Term_Dates_Calendar_2026_27.pdf', size: '1.8 MB' },
    ],
  },
  {
    id: 'hol-2',
    ref: 'HOL-2026/03/FOUNDER',
    type: 'holiday',
    category: 'Holiday & Term Dates',
    categoryVariant: 'brass',
    title: 'Founder\'s Commemoration Day & Long Weekend Holiday Notice',
    date: 'November 27, 2026',
    dateISO: '2026-11-27',
    audience: 'Whole School Community',
    department: 'Board of Governors & School Secretariat',
    important: false,
    holidaySpan: 'November 27 – November 30, 2026',
    summary: 'Administrative offices and academic blocks will be closed from Friday, November 27 to Monday, November 30 in commemoration of our Founding Charter. Classes resume Tuesday, Dec 01.',
    description: `In honour of the establishment of EAK International School and our benefactor founders, the school will observe Founder’s Commemoration Day.
    
Schedule:
- Thursday, November 26: Commemorative Assembly & Inter-House March Past (09:00 – 12:00, parents welcome). Early dismissal at 12:30.
- Friday, November 27 – Monday, November 30: Full campus closure.
- Tuesday, December 01: Normal school operations resume.`,
    actionRequired: 'Plan family travel around the extended 4-day weekend.',
    attachments: [
      { name: 'Founders_Day_Assembly_Programme.pdf', size: '940 KB' },
    ],
  },
  {
    id: 'hol-3',
    ref: 'HOL-2026/02/WINTER',
    type: 'holiday',
    category: 'Holiday & Term Dates',
    categoryVariant: 'brass',
    title: 'Michaelmas Term Concluding Date & Winter Vacation Recess Schedule',
    date: 'December 18, 2026',
    dateISO: '2026-12-18',
    audience: 'Whole School Community',
    department: 'Academic Registry',
    important: true,
    holidaySpan: 'December 18, 2026 – January 10, 2027',
    summary: 'Michaelmas Term concludes at 13:00 on Friday, December 18. Winter vacation spans through Sunday, January 10, 2027. Hilary Term commences Monday, January 11, 2027.',
    description: `As we conclude an inspiring Michaelmas term of academic achievement, athletic victories, and artistic milestones, please note the formal winter break arrangements.
    
Term Conclusion:
- Final Day of Term: Friday, December 18, 2026 (Winter Carols Assembly at 10:30; dismissal at 13:00).
- Winter Holiday: December 19, 2026 to January 10, 2027 inclusive.
- Hilary Term 2027 Opening Day: Monday, January 11, 2027 at 08:15.
- Term reports and standardized assessment analytics will be accessible via the Parent Portal on December 22.`,
    actionRequired: 'Mark Hilary Term opening date on home calendar.',
    attachments: [
      { name: 'Hilary_Term_2027_Preview_Schedule.pdf', size: '1.3 MB' },
    ],
  },
  {
    id: 'hol-4',
    ref: 'HOL-2026/01/SPRING',
    type: 'holiday',
    category: 'Holiday & Term Dates',
    categoryVariant: 'brass',
    title: 'Advance Term Advisory: Academic Year 2026–27 Spring Recess Dates',
    date: 'January 15, 2027',
    dateISO: '2027-01-15',
    audience: 'Whole School Community',
    department: 'Academic Registry & Global Admissions',
    important: false,
    holidaySpan: 'March 13 – March 22, 2027',
    summary: 'Advance notification of the upcoming Spring Mid-Term break to assist international and boarding families with flight reservations and consular arrangements.',
    description: `To assist parents with early international flight scheduling and visa requirements, the Academic Registry has confirmed the dates for the Spring Recess.
    
Spring Break Dates:
- Saturday, March 13, 2027 through Monday, March 22, 2027.
- Full academic sessions resume on Tuesday, March 23, 2027.`,
    actionRequired: 'Recommended for families making international travel bookings.',
    attachments: [
      { name: 'Complete_Academic_Calendar_2026_2027.pdf', size: '2.4 MB' },
    ],
  },

  // ─── 4. UPCOMING EVENTS ───────────────────────────────────────────────────
  {
    id: 'evt-1',
    ref: 'EVT-2026/07',
    type: 'event',
    category: 'Athletics & Sports',
    categoryVariant: 'forest',
    title: 'Radford Memorial Annual Athletics & Whole-School Sports Day 2026',
    date: 'November 08, 2026',
    dateISO: '2026-11-08',
    time: '08:30 – 15:30',
    venue: 'Radford Olympic Sports Pavilion & Athletics Oval',
    audience: 'Scholars, Parents & Alumni Guests',
    department: 'Department of Physical Education & Athletics',
    important: true,
    summary: 'Annual inter-house athletic meet featuring track sprints, high jump, javelin, parent-faculty tug-of-war, and the ceremonial House March Past.',
    description: `The flagship sporting event of Michaelmas Term brings together all four school houses (Eagles, Lions, Falcons, and Badgers) in spirited competition.
    
Highlights of the Day:
- 08:30: Opening Ceremony & House Captains’ Torch Relay.
- 09:30: Track and Field Finals (100m, 400m, 4x100m relays, Long Jump).
- 13:00: Alumni & Parent-Teacher Invitational Tug-of-War.
- 14:30: Trophies, Victor Ludorum honours, and Cock House Shield Presentation.
    
Shaded parent pavilion seating, artisan food stalls, and first-aid medical tents will be operational throughout the day. Entry is complimentary for all family members.`,
    actionRequired: 'Spectator passes available at reception; uniform rules apply for athletes.',
    attachments: [
      { name: 'Sports_Day_Fixtures_and_Schedule.pdf', size: '2.0 MB' },
      { name: 'Spectator_Parking_and_Gate_Pass.pdf', size: '510 KB' },
    ],
  },
  {
    id: 'evt-2',
    ref: 'EVT-2026/06',
    type: 'event',
    category: 'STEM & Innovation',
    categoryVariant: 'navy',
    title: 'Sir James Chadwick Science, Engineering & AI Innovation Expo 2026',
    date: 'November 12, 2026',
    dateISO: '2026-11-12',
    time: '09:30 – 16:30',
    venue: 'Sir James Chadwick STEM Centre & Quadrangle',
    audience: 'Grades 5 to 12 & Invited Visitors',
    department: 'Directorate of STEM & Applied Computing',
    important: false,
    summary: 'Over 85 scholar research projects covering robotics, green hydrogen storage, bioinformatics, and ethical artificial intelligence, judged by visiting university deans.',
    description: `A celebrated showcase of student curiosity, scientific methodology, and computational engineering.
    
Event Overview:
- Interactive demonstrations of solar micro-grids, autonomous drones, and biomedical prosthetics.
- Keynote Lecture at 11:00: "Emerging Quantum Horizons" by Dr. Aris Thorne (Imperial College London).
- Live coding hack-booths for Middle School pupils.
- Awards ceremony at 15:45 with research grant stipends awarded by the Oakridge Tech Guild.`,
    actionRequired: 'Open entry for all parents; register for keynote at reception.',
    attachments: [
      { name: 'STEM_Expo_Exhibitor_Catalogue.pdf', size: '3.2 MB' },
    ],
  },
  {
    id: 'evt-3',
    ref: 'EVT-2026/05',
    type: 'event',
    category: 'Fine Arts & Culture',
    categoryVariant: 'brass',
    title: 'Annual Winter Gala Concert: Symphony Orchestra & Chamber Choir',
    date: 'November 14, 2026',
    dateISO: '2026-11-14',
    time: '18:30 – 21:00',
    venue: 'Radford Performing Arts Auditorium',
    audience: 'Parents, Patrons & Classical Music Enthusiasts',
    department: 'Radford Conservatory & Music Faculty',
    important: true,
    summary: 'The 90-piece School Symphony Orchestra and Chamber Choir perform Vivaldi’s Winter, Holst’s Jupiter, and traditional choral works in the 400-seat auditorium.',
    description: `The pinnacle musical celebration of the autumn calendar.
    
Programme:
- Act I: EAK Chamber Strings — Vivaldi’s "L’inverno" featuring Grade 11 violin soloist Maya Lin.
- Act II: Senior Brass Ensemble & Wind Quintet selections.
- Act III: The 90-piece Symphony Orchestra and 60-voice Choir performing Holst’s Jupiter and Handel’s Messiah excerpts.
    
Dress Code: Black-tie or formal evening attire. Champagne and non-alcoholic cordial reception in the glass atrium beginning at 17:45. Seating is strictly limited to 400 patrons.`,
    actionRequired: 'Reserve complimentary seats via the ticket portal.',
    attachments: [
      { name: 'Winter_Gala_Programme_Notes.pdf', size: '1.6 MB' },
    ],
  },
  {
    id: 'evt-4',
    ref: 'EVT-2026/04',
    type: 'event',
    category: 'Academic & Curriculum',
    categoryVariant: 'navy',
    title: 'Michaelmas Parents\' Consultation Evening — Progress Dossiers',
    date: 'November 20, 2026',
    dateISO: '2026-11-20',
    time: '14:00 – 19:30',
    venue: 'Great Hall & Departmental Study Pods',
    audience: 'Parents of Grades 6 through 12',
    department: 'Academic Registry',
    important: true,
    summary: 'One-on-one 10-minute consultation sessions with subject specialists and House Tutors. Digital academic report cards will be released 24 hours prior.',
    description: `The Michaelmas Parent-Teacher Consultations offer parents an in-depth review of student progress, Cambridge diagnostic benchmarks, and pastoral development.
    
Booking Instructions:
- Online appointment booking opens Monday, November 10 at 09:00 on the Parent Portal.
- Parents can book up to six 10-minute slots with individual subject instructors.
- Tea, coffee, and refreshments will be served in the Great Hall lounge.`,
    actionRequired: 'Book appointment time slots on portal starting Nov 10.',
    attachments: [
      { name: 'Parent_Teacher_Consultation_User_Guide.pdf', size: '890 KB' },
    ],
  },
  {
    id: 'evt-5',
    ref: 'EVT-2026/03',
    type: 'event',
    category: 'Academic & Curriculum',
    categoryVariant: 'forest',
    title: 'Sixth Form Cambridge & IB DP University Fair & Global Alumni Panel',
    date: 'November 25, 2026',
    dateISO: '2026-11-25',
    time: '10:00 – 16:00',
    venue: 'Radcliff Memorial Library & Conference Suites',
    audience: 'Grades 10, 11 & 12 Families',
    department: 'College Counseling & University Admissions Office',
    important: false,
    summary: 'Representatives from 32 world-class universities (Oxford, Cambridge, Stanford, NUS, Toronto) present scholarship criteria and application roadmaps.',
    description: `A premier higher-education symposium connecting senior scholars with international university admissions officers.
    
Schedule:
- 10:00: University Booth Exhibition opens in the Radcliffe Hall.
- 12:30: Workshop: "Crafting High-Impact Personal Statements & UCAS Portfolios".
- 14:30: Alumni Q&A: Recent EAK graduates currently studying at Ivy League and Russell Group institutions share undergraduate insights.`,
    actionRequired: 'Open for all senior secondary students and families.',
    attachments: [
      { name: 'Participating_Universities_Directory_2026.pdf', size: '2.5 MB' },
    ],
  },
  {
    id: 'evt-6',
    ref: 'EVT-2026/02',
    type: 'event',
    category: 'Admissions',
    categoryVariant: 'crimson',
    title: 'Admissions Open Morning & Campus Guided Walkthrough — January 2027 Intake',
    date: 'November 28, 2026',
    dateISO: '2026-11-28',
    time: '09:00 – 12:30',
    venue: 'Main Reception & Central Quadrangle',
    audience: 'Prospective Families & Registered Applicants',
    department: 'Office of Global Admissions',
    important: false,
    summary: 'Guided walkthrough of the 24-acre Oakridge estate, principal address, science lab tours, and interactive Q&A session for families considering January enrollment.',
    description: `We welcome prospective families considering mid-year enrollment for our Cambridge and IB curricula.
    
Morning Agenda:
- 09:00: Registration, coffee, and welcome pastries in the Radcliffe Atrium.
- 09:30: Formal address by Principal Dr. Evelyn Vance on our academic ethos.
- 10:15: Student prefect-led tours of STEM labs, boarding dormitories, and sports complex.
- 11:30: Admissions panel and informal consultation with Divisional Deans.`,
    actionRequired: 'Pre-registration recommended due to auditorium seating limits.',
    attachments: [
      { name: 'Digital_Prospectus_2026_27.pdf', size: '5.2 MB' },
    ],
  },
  {
    id: 'evt-7',
    ref: 'EVT-2026/01',
    type: 'event',
    category: 'Fine Arts & Culture',
    categoryVariant: 'brass',
    title: 'Junior School Theatrical Production: "Peter Pan & the Lost Island"',
    date: 'December 05, 2026',
    dateISO: '2026-12-05',
    time: '16:00 – 18:00',
    venue: 'Primary Outdoor Amphitheatre',
    audience: 'Junior School Families & Friends',
    department: 'Primary Drama & Expressive Arts Guild',
    important: false,
    summary: 'A delightful live theatrical presentation featuring 65 young performers from Grades 2 through 5 with original stage designs, costumes, and live musical accompaniment.',
    description: `The Primary Division takes the stage for their annual theatrical production.
    
Event Notes:
- Beautiful open-air amphitheatre staging under twilight stage lighting.
- Run time: 90 minutes with a 15-minute intermission.
- Refreshments and hot chocolate served by the Primary PTA.`,
    actionRequired: 'Free seating; doors open at 15:30.',
    attachments: [
      { name: 'Peter_Pan_Cast_and_Crew_List.pdf', size: '1.1 MB' },
    ],
  },

  // ─── 5. COMPETITIONS & TOURNAMENTS ────────────────────────────────────────
  {
    id: 'comp-1',
    ref: 'CMP-2026/05',
    type: 'competition',
    category: 'Fine Arts & Culture',
    categoryVariant: 'brass',
    title: 'Radford Inter-House Michaelmas Debating Championship Grand Finals',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    time: '14:00 – 17:00',
    venue: 'Lord Macaulay Lecture Theatre',
    audience: 'Middle & Senior Schools (House Teams)',
    department: 'Department of English & Oratory Society',
    important: true,
    summary: 'The grand final of the inter-house debate cup. Finalist teams contest the motion: "This House Would Mandate Algorithmic Transparency in Autonomous Governance."',
    description: `Following four weeks of competitive divisional rounds, the two top-ranked house teams contest the coveted 2026 Radford Debating Silver Urn.
    
Format:
- World Schools Parliamentary Debating Format (8-minute substantive speeches, 4-minute replies).
- External adjudication panel featuring collegiate debate coaches and barristers.
- Audience questions and public floor speeches during adjudication deliberation.
- The championship trophy will be presented by Head of English, Mrs. Eleanor Vance.`,
    actionRequired: 'House supporters welcome; seating on first-come basis.',
    attachments: [
      { name: 'Debate_Finals_Motion_and_Rules.pdf', size: '720 KB' },
    ],
  },
  {
    id: 'comp-2',
    ref: 'CMP-2026/04',
    type: 'competition',
    category: 'Athletics & Sports',
    categoryVariant: 'forest',
    title: 'Southeast Asian International Schools Aquatics Invitational',
    date: 'November 04, 2026',
    dateISO: '2026-11-04',
    time: '08:00 – 17:00',
    venue: 'Radford 50m Olympic Aquatic Centre',
    audience: 'Varsity Swimming Squad & Spectators',
    department: 'Department of Physical Education & Athletics',
    important: true,
    summary: 'Fourteen international school swim teams contest 50m, 100m, and medley relay heats. EAK varsity squad is defending its 2025 regional championship shield.',
    description: `The premier competitive swimming meet in the region hosted at our state-of-the-art 10-lane Olympic aquatic facility.
    
Event Details:
- Over 250 student-athletes from Singapore, Bangkok, Kuala Lumpur, and Mumbai.
- Electronic Omega touch-pad timing with giant live scoreboard display.
- Events include 50m Freestyle, 100m Butterfly, 200m Individual Medley, and the 4x100m Freestyle Relay finale.
- Live audio commentary and spectator refreshments available in the mezzanine gallery.`,
    actionRequired: 'Selected varsity swimmers must report for warmups at 06:45.',
    attachments: [
      { name: 'Aquatics_Heat_Sheet_and_Schedule.pdf', size: '1.9 MB' },
    ],
  },
  {
    id: 'comp-3',
    ref: 'CMP-2026/03',
    type: 'competition',
    category: 'STEM & Innovation',
    categoryVariant: 'navy',
    title: 'National Inter-School AI & Robotics Hackathon 2026: Autonomous Solutions',
    date: 'November 16, 2026',
    dateISO: '2026-11-16',
    time: '08:30 – 18:30',
    venue: 'Sir James Chadwick Robotics Laboratory',
    audience: 'Grades 9 to 12 Teams (4 Members Per Team)',
    department: 'Directorate of STEM & Applied Computing',
    important: false,
    summary: 'A 10-hour hackathon where student cohorts build, program, and simulate autonomous search-and-rescue rovers. Cash grants and university mentorship for winners.',
    description: `High school engineering enthusiasts compete to solve real-world disaster relief logistical challenges using computer vision, ROS2, and micro-controllers.
    
Prizes & Judging:
- 1st Place: Oakridge Innovation Trophy + $1,500 project grant + university lab internship.
- Hardware kits (Raspberry Pi 5 + LiDAR sensor modules) provided to each registered cohort.
- Mentors from tech accelerator labs present throughout the coding sprint.`,
    actionRequired: 'Team registrations close November 05 via the STEM portal.',
    attachments: [
      { name: 'Hackathon_Problem_Brief_and_SDK.pdf', size: '2.8 MB' },
    ],
  },
  {
    id: 'comp-4',
    ref: 'CMP-2026/02',
    type: 'competition',
    category: 'Fine Arts & Culture',
    categoryVariant: 'brass',
    title: 'Radcliffe Literary Guild Annual Creative Writing & Poetry Prize',
    date: 'November 24, 2026',
    dateISO: '2026-11-24',
    time: '16:00 (Submission Deadline)',
    venue: 'Radcliff Library & Online Submission Portal',
    audience: 'Grades 6 to 12 Scholars',
    department: 'Radcliffe Literary Guild & Faculty of English',
    important: false,
    summary: 'Annual writing contest judged by visiting Booker Prize nominee author. Cash bursary, publication in the EAK Literary Review, and Radford crest medallion.',
    description: `Aspiring young writers are invited to submit original works of short fiction (up to 2,500 words) or poetry (up to 40 lines) exploring the 2026 theme: "Thresholds of Discovery".
    
Divisions:
- Junior Laureate: Grades 6–8
- Senior Laureate: Grades 9–12
    
Winning pieces will be professionally bound in the annual school anthology and featured in our international literary exchange with Gordonstoun School.`,
    actionRequired: 'Upload manuscripts to the portal by November 24 at 16:00.',
    attachments: [
      { name: 'Creative_Writing_Entry_Form_2026.pdf', size: '540 KB' },
    ],
  },
  {
    id: 'comp-5',
    ref: 'CMP-2026/01',
    type: 'competition',
    category: 'Examinations',
    categoryVariant: 'crimson',
    title: 'Cambridge South Asia Mathematics Olympiad (Stage-1 Qualifiers)',
    date: 'December 02, 2026',
    dateISO: '2026-12-02',
    time: '09:00 – 11:30',
    venue: 'Examination Hall 1 & Mathematics Seminar Wing',
    audience: 'Nominated Scholars from Grades 7 to 11',
    department: 'Department of Pure & Applied Mathematics',
    important: true,
    summary: 'Proctored international mathematical olympiad paper. The top 5% of candidates advance to the regional round held in Singapore in February 2027.',
    description: `The Cambridge South Asia Mathematics Olympiad assesses abstract mathematical ingenuity, number theory, combinatorics, and geometric proofs.
    
Candidate Requirements:
- Hall admittance tickets must be validated by the Head of Mathematics.
- Calculators are strictly prohibited; standard Euclidean compass and ruler sets permitted.
- Preparatory problem-solving clinics held every Tuesday afternoon in Room M-102.`,
    actionRequired: 'Registered scholars must attend prep clinics starting Nov 12.',
    attachments: [
      { name: 'Math_Olympiad_Syllabus_and_Sample_Problems.pdf', size: '1.5 MB' },
    ],
  },
];

/**
 * Filter categories list
 */
export const CATEGORY_OPTIONS = [
  'All Categories',
  'Examinations',
  'Holiday & Term Dates',
  'Administrative & Transport',
  'Athletics & Sports',
  'Fine Arts & Culture',
  'STEM & Innovation',
  'Safety & Health',
  'Academic & Curriculum',
  'Admissions',
];

/**
 * Primary type tabs
 */
export const TYPE_TABS = [
  { key: 'all', label: 'All Updates', countKey: 'all' },
  { key: 'circular', label: 'School Circulars', countKey: 'circular' },
  { key: 'examination', label: 'Examinations', countKey: 'examination' },
  { key: 'holiday', label: 'Holiday Notices', countKey: 'holiday' },
  { key: 'event', label: 'Upcoming Events', countKey: 'event' },
  { key: 'competition', label: 'Competitions', countKey: 'competition' },
];

/**
 * Date timeframe filter options
 */
export const TIMEFRAME_OPTIONS = [
  { key: 'all', label: 'All Dates' },
  { key: 'upcoming', label: 'Upcoming Only (Future)' },
  { key: 'this-month', label: 'This Month (October 2026)' },
  { key: 'next-month', label: 'Next Month (November 2026)' },
  { key: 'december-plus', label: 'Later This Term (Dec 2026+)' },
  { key: 'archive', label: 'Archived / Past' },
];

/**
 * Quick sorting options
 */
export const SORT_OPTIONS = [
  { key: 'date-asc', label: 'Date: Soonest First' },
  { key: 'date-desc', label: 'Date: Latest First' },
  { key: 'priority', label: 'Priority / Urgent First' },
  { key: 'title', label: 'Title: Alphabetical' },
];
