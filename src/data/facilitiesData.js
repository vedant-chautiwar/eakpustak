/**
 * Facilities page data for EAK International School.
 * All figures and descriptions are fictional illustrative sample data
 * created for a design demonstration and hiring assignment.
 */

export const facilitiesHero = {
  eyebrow: 'Campus Infrastructure',
  tagline: '24-Acre Parkland Estate',
  headline: 'Spaces Designed to Inspire Every Kind of Learner.',
  body: 'From purpose-built science laboratories and a fully equipped sports complex to a tranquil library and a modern cafeteria, every corner of the EAK campus is intentionally designed to support academic focus, physical wellness, and creative growth.',
};

/**
 * Each facility object drives its own layout variant on the page.
 * layout: 'hero' | 'split-left' | 'split-right' | 'mosaic' | 'strip' | 'full'
 */
export const facilitiesData = [
  {
    id: 'smart-classrooms',
    name: 'Smart Classrooms',
    category: 'Academic',
    categoryVariant: 'navy',
    layout: 'split-right',          // image on the right
    headline: 'Classrooms Built for Active, Collaborative Learning.',
    body: 'Forty-eight technology-enabled classrooms feature 4K interactive smartboards, real-time collaborative software, and adjustable furniture that reconfigures for seminars, group projects, and direct instruction. Each room is acoustically treated and flooded with natural light through floor-to-ceiling south-facing windows.',
    specs: [
      '48 Classrooms Across 4 Academic Blocks',
      '4K Interactive Smartboard in Every Room',
      'Gigabit Wi-Fi 6 Campus-Wide',
      'Adjustable, Ergonomic Furniture Systems',
      'Google Workspace for Education Integration',
      'Real-Time Collaborative Whiteboard Software',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
      alt: 'Bright, modern classroom with interactive smartboard and students working in groups',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'science-laboratories',
    name: 'Science Laboratories',
    category: 'STEM',
    categoryVariant: 'forest',
    layout: 'split-left',           // image on the left
    headline: 'Six Dedicated Science Suites for Real Enquiry-Based Learning.',
    body: 'Physics, Chemistry, Biology, Environmental Science, Biotechnology, and Robotics each occupy their own fully equipped laboratory suite. University-standard bench configurations, fume extraction, Class 2 biosafety cabinets, and digital data-logging equipment allow students to conduct original investigations rather than reproduce demonstrations.',
    specs: [
      '6 Specialist Laboratory Suites',
      'Class 2 Biosafety Cabinet (Biology Lab)',
      '3D Rapid Prototyping & CAD Workstations',
      'Digital Data Loggers & Precision Sensors',
      'Fume Extraction & COSHH-Compliant Storage',
      'Pre-University Research Mentorship Programme',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1532094349884-543559331c46?w=1200&q=80',
      alt: 'Students conducting an experiment in a well-equipped science laboratory',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'computer-laboratories',
    name: 'Computer Laboratories',
    category: 'Technology',
    categoryVariant: 'navy',
    layout: 'split-right',
    headline: 'High-Performance Computing for Every Discipline.',
    body: 'Three air-conditioned computer laboratories house 120 high-specification workstations available across the full school day and during supervised evening sessions. Suites support programming and computational thinking from Primary through to Sixth Form, with licensed access to industry-standard design, data, and development toolchains.',
    specs: [
      '3 Labs · 120 Workstations Total',
      'Core i7 Processors, 32 GB RAM, SSD Storage',
      'Dual-Monitor Configuration in Senior Lab',
      'Licensed Adobe Creative Cloud & JetBrains IDEs',
      'Python, JavaScript, SQL, Java Curriculum Paths',
      'Open-Access Sessions Daily Until 18:30',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      alt: 'Students at high-performance workstations in an air-conditioned computer laboratory',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'library',
    name: 'Library & Learning Commons',
    category: 'Knowledge',
    categoryVariant: 'brass',
    layout: 'split-left',
    headline: 'The Radcliffe Library — 45,000 Volumes Across Three Reading Floors.',
    body: 'The Radcliffe Library is the intellectual heart of the campus. Three interconnected floors house over 45,000 curated physical volumes alongside digital access to JSTOR, EBSCO, and the British Library\'s EThOS thesis database. Quiet reading pods, a group seminar room, and an open periodicals gallery cater to every mode of scholarship.',
    specs: [
      '45,000+ Physical Volumes',
      'JSTOR, EBSCO & EThOS Digital Access',
      '24 Silent Study Pods',
      'Group Seminar Room (Capacity 16)',
      'Periodicals Gallery with 80+ Subscriptions',
      'Extended Hours During Examination Periods',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80',
      alt: 'Sunlit school library with high shelves filled with books and reading tables',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'auditorium',
    name: 'Radford Auditorium',
    category: 'Performing Arts',
    categoryVariant: 'crimson',
    layout: 'full-bleed',           // wide cinematic strip
    headline: 'A 400-Seat Auditorium Built for Performance and Assembly.',
    body: 'The Radford Performing Arts Centre houses a 400-seat proscenium theatre, a black box studio theatre, and a fully equipped music conservatory wing. Professional-grade stage lighting, an orchestral pit, a Steinway Model D concert grand piano, and acoustics designed by a specialist consultancy make this one of the finest school performance venues in the region.',
    specs: [
      '400-Seat Proscenium Theatre',
      'Steinway Model D Concert Grand Piano',
      'Professional Stage Lighting & Fly System',
      'Soundproofed Black Box Studio Theatre',
      'Recording Studio with DAW Workstations',
      '8 Individual Practice Rooms',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1600&q=80',
      alt: 'School auditorium with tiered seating, a large stage, and warm theatrical lighting',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'sports-complex',
    name: 'Sports Complex',
    category: 'Athletics',
    categoryVariant: 'forest',
    layout: 'split-left',
    headline: 'Olympic-Standard Athletic Facilities on a 24-Acre Campus.',
    body: 'The sports complex supports both elite competitive development and lifelong physical wellbeing. An eight-lane heated 50-metre swimming pool, a FIFA-grade artificial pitch, an indoor hardwood multi-sport arena, a strength-and-conditioning suite, and a dedicated cricket and track facility ensure every student finds their sporting identity.',
    specs: [
      '8-Lane Heated 50m Swimming Pool',
      'FIFA-Grade Artificial Turf Pitch',
      'Indoor Hardwood Multi-Sport Arena',
      'Strength & Conditioning Suite',
      'Athletics Track (200m, 6-Lane)',
      'UK Athletics & FINA-Accredited Coaching Staff',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
      alt: 'Olympic-standard swimming pool inside the school sports complex',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'cafeteria',
    name: 'Dining Hall & Cafeteria',
    category: 'Nutrition',
    categoryVariant: 'brass',
    layout: 'split-right',
    headline: 'Freshly Prepared, Nutritionist-Designed Meals Every Day.',
    body: 'The Radford Dining Hall serves 700 students across three sittings in a light-filled hall with courtyard views. Every menu is designed by an in-house registered nutritionist and prepared fresh daily, rotating across international cuisines while maintaining consistent allergen labelling. All dietary requirements — halal, vegetarian, vegan, and coeliac — are fully accommodated.',
    specs: [
      '700-Capacity Central Dining Hall',
      'Freshly Prepared Meals Three Times Daily',
      'Nutritionist-Designed Rotating Menu',
      'Full Allergen Labelling on Every Dish',
      'Halal, Vegetarian, Vegan & Coeliac Catering',
      'Food Hygiene Rating: 5 Stars (Sample)',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1200&q=80',
      alt: 'Radford Dining Hall interior with light-filled seating and dedicated nutritional food service stations',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'medical',
    name: 'Medical & Wellness Centre',
    category: 'Health & Wellbeing',
    categoryVariant: 'crimson',
    layout: 'split-left',
    headline: 'Round-the-Clock Pastoral and Medical Care for Every Student.',
    body: 'The Wellness Centre is staffed by two registered paediatric nurses and a visiting general practitioner during school hours. A dedicated counselling suite supports student mental health with trained pastoral counsellors available for drop-in sessions. Parents are notified of all medical interactions through the parent portal in real time.',
    specs: [
      '2 Paediatric Registered Nurses On Campus',
      'Visiting GP: Three Sessions Per Week',
      'Trained Pastoral Mental Health Counsellors',
      'Separate Assessment, Treatment & Rest Rooms',
      'Parent Notification via Portal Within 15 Minutes',
      'First Aid Trained in All Teaching Staff',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
      alt: 'Clean and welcoming school medical centre with professional equipment',
    },
    note: 'Sample data — illustrative only.',
  },
  {
    id: 'transportation',
    name: 'Transportation',
    category: 'Safety & Logistics',
    categoryVariant: 'navy',
    layout: 'split-right',
    headline: 'GPS-Tracked, Professionally Staffed Fleet Serving 18 Routes.',
    body: 'A fleet of twenty-two air-conditioned coaches covers eighteen designated municipal route corridors, each with a trained and vetted on-board attendant. Real-time GPS tracking is visible to parents through the EAK mobile application, with estimated arrival-time push notifications at every scheduled stop. All vehicles undergo bi-annual safety certification.',
    specs: [
      'Fleet of 22 Air-Conditioned Coaches',
      '18 Municipal Route Corridors',
      'Live GPS Tracking via Parent Mobile App',
      'Trained & Vetted On-Board Attendants',
      'ETA Push Notifications at Every Stop',
      'Bi-Annual Independent Safety Certification',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80',
      alt: 'Row of clean, modern school transport coaches in the campus parking area',
    },
    note: 'Sample data — illustrative only.',
  },
];

export const facilitiesCTAData = {
  headline: 'Experience the Campus in Person.',
  body: 'Open campus mornings take place every second Saturday during term time. Private guided tours are available to prospective families by appointment. Contact our Admissions team to schedule your visit.',
  primaryLabel: 'Schedule a Campus Visit',
  primaryTo: '/contact',
  secondaryLabel: 'View Admissions',
  secondaryTo: '/admissions',
};
