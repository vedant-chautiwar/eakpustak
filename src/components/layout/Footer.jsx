import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Award, Globe } from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';

const CURRENT_YEAR = 2026;

/**
 * Editorial Academic Footer
 * Contains contact details, quick links, school information, and social links using fictional sample data.
 */
export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-2 border-brass-500 font-sans">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Institutional Heritage (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-navy-900 border border-navy-800 text-white rounded-micro flex items-center justify-center shrink-0 shadow-xs">
                <div className="text-center font-serif leading-none">
                  <span className="text-brass-500 font-bold text-sm tracking-widest block">EAK</span>
                  <span className="text-[9px] text-stone-400 tracking-wider">2004</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                  EAK INTERNATIONAL SCHOOL
                </h3>
                <p className="text-xs uppercase tracking-widest text-brass-500 font-medium">
                  London Academic Campus
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              An independent, co-educational day and boarding school committed to intellectual rigor, moral integrity, and purposeful global engagement across the Primary, Middle, Cambridge IGCSE, and IB Diploma curricula.
            </p>

            {/* Accreditations Badges */}
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Accreditations & Affiliations
              </span>
              <div className="flex flex-wrap gap-2">
                {schoolInfo.accreditations.map((acc) => (
                  <span
                    key={acc}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold bg-navy-900 border border-navy-800 text-stone-300 rounded-micro"
                  >
                    <Award className="w-3 h-3 text-brass-500 shrink-0" />
                    <span>{acc}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Social Channels (Fictional Sample Links) */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Follow Campus Channels
              </span>
              <div className="flex flex-wrap gap-2">
                {schoolInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Fictional sample social link: ${social.label}`);
                    }}
                    aria-label={social.label}
                    className="px-2.5 py-1 text-xs border border-navy-800 bg-navy-900 text-stone-300 hover:text-white hover:border-brass-500 rounded-micro transition-colors inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-brass-500"
                  >
                    <Globe className="w-3 h-3 text-brass-500" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Academic Divisions (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-navy-850 pb-2">
              Academic Pathways
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/academics" className="hover:text-brass-400 transition-colors flex items-center justify-between">
                  <span>Primary School (Ages 3–11)</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-brass-400 transition-colors flex items-center justify-between">
                  <span>Middle School (Ages 11–14)</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-brass-400 transition-colors flex items-center justify-between">
                  <span>Cambridge IGCSE (Grades 9–10)</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-brass-400 transition-colors flex items-center justify-between">
                  <span>IB Diploma Programme (Grades 11–12)</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-brass-400 transition-colors flex items-center justify-between">
                  <span>University Guidance & Outcomes</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-brass-400 transition-colors flex items-center justify-between">
                  <span>STEM Labs & Radcliffe Library</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Updates (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-navy-850 pb-2">
              Admissions & Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/admissions" className="hover:text-brass-400 transition-colors">
                  5-Step Process
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-brass-400 transition-colors">
                  Eligibility & Age Matrix
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-brass-400 transition-colors">
                  Tuition & Scholarships
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-brass-400 transition-colors">
                  Admissions FAQs
                </Link>
              </li>
              <li>
                <Link to="/events-notices" className="hover:text-brass-400 transition-colors">
                  Circulars & Exam Notices
                </Link>
              </li>
              <li>
                <Link to="/events-notices" className="hover:text-brass-400 transition-colors">
                  Upcoming Term Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Coordinates & Direct Desk (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide border-b border-navy-850 pb-2">
              Campus Coordinates
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" />
                <span>{schoolInfo.campus.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass-500 shrink-0" />
                <a href={`tel:${schoolInfo.campus.phone}`} className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-brass-500 rounded-micro">
                  Main Desk: {schoolInfo.campus.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-500 shrink-0" />
                <a href={`mailto:${schoolInfo.campus.email}`} className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-brass-500 rounded-micro">
                  {schoolInfo.campus.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" />
                <span>{schoolInfo.campus.hours}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statutory Legal & Disclaimer Bar */}
      <div className="border-t border-navy-850 bg-navy-950/80 text-xs text-slate-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p>
              © {CURRENT_YEAR} EAK International School. All rights reserved. Sample institutional prototype created for frontend evaluation.
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Fictional educational institution. No personal data collected or stored.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/about" className="hover:text-stone-300 transition-colors">
              Institutional Governance
            </Link>
            <Link to="/admissions" className="hover:text-stone-300 transition-colors">
              Safeguarding Policy
            </Link>
            <Link to="/contact" className="hover:text-stone-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
