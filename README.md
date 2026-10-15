# EAK International School — Modern School Website Redesign

An editorial, high-performance web platform for **EAK International School**, an independent K–12 international institution offering Cambridge IGCSE and International Baccalaureate (IB) Diploma pathways.

This project is built from scratch as part of the EAK Pustak Frontend Hiring Assignment, delivering an art-directed "Editorial Academy" visual identity with thoughtful motion, clear information architecture, and responsive typography.

---

## Technology Stack

- **Framework & Tooling:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** JavaScript (Modern ES Modules, JSX)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with an Editorial Academic custom theme
- **Routing:** [React Router v6](https://reactrouter.com/) with automated scroll restoration
- **Motion & Interactions:** [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/) and `@gsap/react`
- **Iconography:** [Lucide React](https://lucide.dev/)

---

## Key Architecture & Features

1. **7 Core Required Routes:**
   - **Home (`/`):** Hero with metrics ticker, "Why Choose Us" 6-pillar grid, academic preview, facilities showcase, notices ticker, and testimonials.
   - **About (`/about`):** Founding history, Vision/Mission/Values, Principal's formal address, and leadership overview.
   - **Academics (`/academics`):** 4 learning divisions (Primary, Middle, Cambridge IGCSE, IB DP), methodology, and university placement outcomes.
   - **Admissions (`/admissions`):** 5-stage sequential roadmap (Enquiry → Application → Assessment → Selection → Enrollment), eligibility criteria, required documents, key intake dates, and FAQ accordion.
   - **Facilities (`/facilities`):** 24-acre Oakridge infrastructure showcase with category filters (STEM labs, Radcliffe library, Olympic sports pavilion, boarding).
   - **Events & Notices (`/events-notices`):** Live filterable announcements, official circulars with reference IDs (`CIR-2026/04`), simulated PDF downloads, and term calendar events.
   - **Contact (`/contact`):** Department directory, interactive inquiry form with validation, operating hours, and campus transit locator.

2. **Global Components:**
   - **Navbar:** Sticky navigation with institutional utility strip, logo crest, active route indicator, and mobile drawer.
   - **Quick Inquiry Drawer:** Accessible slide-over drawer accessible from any page with validation and confirmation state.
   - **Footer:** 4-column academic directory, accreditation badges, and statutory disclaimers.
   - **GSAP Scroll Reveal Hook:** Reusable lifecycle hook (`useGSAPScrollReveal`) respecting `prefers-reduced-motion` settings.

3. **Scope Boundary:**
   - **Frontend Only:** All data is structured locally in `src/data/`. No external APIs, database, or backend transmission required.

---

## Installation & Local Development

### Prerequisites
- Node.js `v18.0.0` or higher (tested on Node `v22.21.0`)
- npm `v9.0.0` or higher

### Setup Commands

```bash
# 1. Clone or navigate to the repository root
cd eakpustak

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Create production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Project Structure

```
eakpustak/
├── public/
├── src/
│   ├── components/
│   │   ├── common/             # Button, Badge, SectionHeading
│   │   └── layout/             # Navbar, Footer, QuickInquiryDrawer, ScrollToTop
│   ├── data/                   # Structured mock data (schoolInfo, etc.)
│   ├── hooks/                  # useGSAPScrollReveal (GSAP lifecycle hook)
│   ├── pages/                  # 7 core pages + 404 handler
│   ├── App.jsx                 # Route configurations & layout shell
│   ├── main.jsx                # Application root
│   └── index.css               # Design tokens & Tailwind directives
├── index.html                  # HTML template with Google Fonts (Playfair + Jakarta)
├── package.json
├── postcss.config.js
├── tailwind.config.js          # Custom colors (Oxford Navy, Corinthian Brass, Chalk)
└── vite.config.js
```
