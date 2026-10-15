/**
 * Comprehensive Contact & Campus Visitation Data for EAK International School
 * All information is illustrative and fictional sample data for demonstration.
 */

export const departments = [
  {
    id: "admissions",
    name: "Admissions & Enrolments Office",
    head: "Mrs. Eleanor Vance, BA (Oxon)",
    role: "Director of Admissions & Outreach",
    description: "Inquiries regarding prospective student entry, entrance assessments, Open Days, scholarship applications, and overseas family admissions.",
    phone: "+44 (0) 20 7946 0195",
    directExtension: "Ext. 201",
    email: "admissions@eakinternational.edu",
    location: "Welcome Pavilion, Ground Floor",
    hours: "Mon – Fri: 08:30 – 16:30 | Sat (Term Time): 09:00 – 12:00",
    badge: "Primary Contact for New Families",
    badgeVariant: "brass",
    category: "Prospective Families",
  },
  {
    id: "head-office",
    name: "Office of the Principal & Executive Directorate",
    head: "Dr. Alistair Sterling, CBE, PhD (Cantab)",
    role: "Executive Head of School",
    description: "Institutional governance, university partnerships, pedagogical leadership, and strategic school operations.",
    phone: "+44 (0) 20 7946 0190",
    directExtension: "Ext. 101",
    email: "principal.office@eakinternational.edu",
    location: "Radcliffe Hall, Executive Suite (Level 2)",
    hours: "Mon – Fri: 08:00 – 17:00 (By Appointment Only)",
    badge: "Executive Leadership",
    badgeVariant: "navy",
    category: "Institutional",
  },
  {
    id: "registry",
    name: "Academic Registry & Examination Secretariat",
    head: "Mr. David Thorpe, MA",
    role: "Chief Academic Registrar",
    description: "Official transcript requests, Cambridge & IB examination entries, student grade records, and matriculation verifications.",
    phone: "+44 (0) 20 7946 0198",
    directExtension: "Ext. 305",
    email: "registry@eakinternational.edu",
    location: "Faraday Building, Suite B-104",
    hours: "Mon – Fri: 08:30 – 16:00",
    badge: "Records & Diplomas",
    badgeVariant: "forest",
    category: "Current Families & Alumni",
  },
  {
    id: "bursar",
    name: "Bursary & Financial Controller's Office",
    head: "Mr. Marcus Sterling, FCA",
    role: "Bursar & Financial Director",
    description: "Tuition fee billing, payment plan arrangements, international wire reconciliations, and means-tested bursary administration.",
    phone: "+44 (0) 20 7946 0194",
    directExtension: "Ext. 410",
    email: "bursar@eakinternational.edu",
    location: "Bursar's Lodge, Courtyard West",
    hours: "Mon – Fri: 09:00 – 16:00",
    badge: "Fees & Accounts",
    badgeVariant: "brass",
    category: "Current Families",
  },
  {
    id: "safeguarding",
    name: "Pastoral Care, Safeguarding & Student Welfare",
    head: "Dr. Sarah Lin, MD, MRCPCH",
    role: "Designated Safeguarding Lead & Chief Medical Officer",
    description: "Student pastoral wellbeing, medical dispensary, daily health assessments, and confidential safeguarding matters.",
    phone: "+44 (0) 20 7946 0199",
    directExtension: "Ext. 555 (24/7 Welfare Hotline)",
    email: "welfare@eakinternational.edu",
    location: "Wellness Pavilion, Central Quad",
    hours: "Medical Centre: 24/7 during Term Time | Day Clinic: 08:00 – 17:30",
    badge: "Emergency & Welfare",
    badgeVariant: "crimson",
    category: "Pastoral & Medical",
  },
  {
    id: "logistics",
    name: "Campus Security, Transport & Estates",
    head: "Capt. James Wright (Retd.)",
    role: "Head of Campus Safety & Fleet Operations",
    description: "Dedicated coach transport routes, vehicle parking permits, gate access passes, and security protocols.",
    phone: "+44 (0) 20 7946 0192",
    directExtension: "Ext. 110",
    email: "transport@eakinternational.edu",
    location: "Gate House A (North Perimeter)",
    hours: "Security Control: 24 Hours Daily | Transport Desk: 07:00 – 18:00",
    badge: "Safety & Fleet",
    badgeVariant: "navy",
    category: "Operations",
  },
];

export const transitOptions = [
  {
    mode: "London Underground & Rail",
    icon: "Train",
    badge: "Recommended",
    summary: "Quick access via Northern, Jubilee, and National Rail lines.",
    details: [
      "Borough Station (Northern Line) — 8-minute sheltered walk via Academy Boulevard.",
      "London Bridge Station (Northern, Jubilee, Thameslink, Southeastern) — 12-minute walk or 4 minutes by Bus 21.",
      "Elephant & Castle Station (Bakerloo, Northern, National Rail) — 10 minutes via direct bus route.",
    ],
  },
  {
    mode: "Metropolitan Bus Services",
    icon: "Bus",
    badge: "Direct Stop Outside",
    summary: "Dedicated school drop-off bay serviced by multiple TfL routes.",
    details: [
      "Routes 21, 35, 133, and 343 stop immediately at 'Oakridge Academy Square' (Stops KA & KB).",
      "Night bus routes N21 and N133 service the perimeter 24 hours daily.",
      "Low-emission designated school transport corridor with traffic marshals active 07:30–09:00 and 15:30–17:00.",
    ],
  },
  {
    mode: "Private Vehicle & Visitor Parking",
    icon: "Car",
    badge: "Gate A Access",
    summary: "Reserved visitor parking with complimentary EV fast-charging.",
    details: [
      "Access exclusively via Gate A (North Perimeter off Academy Boulevard, Postcode: SE1 8TY).",
      "Visitor bays must be reserved in advance or registered with Gatehouse Security upon arrival.",
      "12 dedicated 22kW AC electric vehicle charging bays available for visiting families.",
    ],
  },
  {
    mode: "International Flight Transfers",
    icon: "Plane",
    badge: "Airport Links",
    summary: "Convenient rail and chauffeur links for overseas delegations.",
    details: [
      "London City Airport (LCY) — 25 minutes via DLR to Bank, then Northern Line.",
      "London Heathrow (LHR) — 45 minutes via Elizabeth Line to Farringdon, then Thameslink to London Bridge.",
      "London Gatwick (LGW) — 30 minutes direct via Thameslink to London Bridge.",
    ],
  },
];

export const campusLandmarks = [
  {
    id: "welcome",
    name: "Welcome Pavilion & Gate A",
    category: "Arrival & Security",
    coords: { x: 22, y: 78 },
    desc: "Main pedestrian and vehicular entrance. Visitor check-in, security badging, and Admissions lobby.",
    accent: "text-brass-500",
  },
  {
    id: "radcliffe",
    name: "Radcliffe Hall & Library",
    category: "Academic & Administrative",
    coords: { x: 42, y: 55 },
    desc: "Principal's Suite, Central Library, Boardroom, and Senior Secondary classrooms.",
    accent: "text-navy-950",
  },
  {
    id: "science",
    name: "Faraday Science & Technology Wing",
    category: "Laboratories",
    coords: { x: 65, y: 45 },
    desc: "Specialist Physics, Chemistry, Biology labs, Robotics centre, and AI development suite.",
    accent: "text-forest-700",
  },
  {
    id: "auditorium",
    name: "Radford Memorial Auditorium",
    category: "Arts & Culture",
    coords: { x: 38, y: 28 },
    desc: "750-seat concert hall, black-box drama studio, and orchestral acoustic rehearsal suites.",
    accent: "text-crimson-700",
  },
  {
    id: "sports",
    name: "Olympic Athletics & Aquatic Complex",
    category: "Sports & Fitness",
    coords: { x: 80, y: 68 },
    desc: "25-metre competition pool, multi-court indoor arena, squash courts, and synthetic turf pitches.",
    accent: "text-forest-700",
  },
  {
    id: "wellness",
    name: "Health Pavilion & Dining Commons",
    category: "Pastoral & Dining",
    coords: { x: 55, y: 75 },
    desc: "24/7 registered nursing clinic, pastoral consultation rooms, and executive dining refectory.",
    accent: "text-brass-600",
  },
];

export const visitorGuidelines = [
  {
    title: "Government Photo Identification",
    desc: "All adult visitors (parents, guardians, contractors, and guest speakers) must present valid government photo identification (Passport or UK/International Driving Licence) upon arrival at Gate A.",
  },
  {
    title: "Escorted Campus Policy",
    desc: "In accordance with strict UK Department for Education safeguarding standards, all visitors receive an escorted visitor pass and must be accompanied by an accredited staff member while scholars are on site.",
  },
  {
    title: "Strict Safeguarding & Photography Rules",
    desc: "Unauthorised mobile recording or photography of students is strictly prohibited across all academic and sports precincts. Media permissions must be registered with the Principal's Directorate.",
  },
  {
    title: "Accessible Campus Accreditation",
    desc: "Oakridge Campus features 100% barrier-free wheelchair accessibility, automatic door assists, tactile paving, accessible washrooms, and hearing induction loops installed throughout the auditoriums.",
  },
];

export const visitorFAQs = [
  {
    q: "Can prospective families drop in without a booked appointment?",
    a: "While our Admissions Welcome Pavilion is open during normal school hours for initial prospectus collection, guided campus walkthroughs and senior leadership consultations require at least 24 hours advance notice to ensure dedicated staff availability and campus security clearance.",
  },
  {
    q: "What parking arrangements exist for campus visitors?",
    a: "Complimentary designated visitor parking is available at North Perimeter Gate A (Academy Boulevard entrance). Simply identify yourself to the security marshal upon arrival. Fast-charging EV points (22kW) are free for visiting parents during their appointment.",
  },
  {
    q: "May children attend the campus tour with their parents?",
    a: "Scholars are strongly encouraged to accompany their parents! Our admissions walkthroughs are specifically structured to engage prospective students, introduce them to current prefects, and let them experience our science labs, library, and sports facilities firsthand.",
  },
  {
    q: "How are international delegations and non-English speaking families supported?",
    a: "Our Admissions Directorate accommodates multilingual tours in French, Mandarin, Spanish, Arabic, German, and Hindi upon request. We can also coordinate virtual 360-degree interactive video consultations for families residing overseas prior to relocating.",
  },
  {
    q: "What protocols are in place during school holidays?",
    a: "The main administrative offices (Admissions, Bursar, and Executive Directorate) remain fully staffed throughout half-term recesses and summer breaks (Monday to Friday, 09:00 to 16:00), excluding official UK bank holidays.",
  },
];
