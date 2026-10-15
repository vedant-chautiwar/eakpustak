import React, { useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation,
  Calendar, Building2, ShieldCheck, Car, Train, Bus, Plane,
  AlertCircle, Download, ChevronDown, Copy, Check,
  FileText, Search, Users, Sparkles, ArrowRight, Compass,
  X, Info, BookOpen, GraduationCap,
} from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import { schoolInfo } from '../data/schoolInfo';
import {
  departments,
  transitOptions,
  campusLandmarks,
  visitorGuidelines,
  visitorFAQs,
} from '../data/contactData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contactFieldClass = (hasError) =>
  `w-full h-10 px-3.5 text-sm bg-white border rounded-micro text-slate-900 outline-none transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none placeholder:text-slate-500 ${
    hasError
      ? 'border-crimson-600 hover:border-crimson-600 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20'
      : 'border-hairline hover:border-slate-400 focus:border-navy-950 focus:ring-2 focus:ring-brass-500/25'
  }`;

const contactTextareaClass = (hasError) =>
  `w-full bg-white border px-3.5 py-2.5 text-sm rounded-micro text-slate-900 outline-none transition-[border-color,box-shadow] duration-150 motion-reduce:transition-none placeholder:text-slate-500 min-h-[100px] max-h-[148px] resize-y ${
    hasError
      ? 'border-crimson-600 hover:border-crimson-600 focus:border-crimson-600 focus:ring-2 focus:ring-crimson-600/20'
      : 'border-hairline hover:border-slate-400 focus:border-navy-950 focus:ring-2 focus:ring-brass-500/25'
  }`;

const contactSelectWrapClass = 'relative';

const contactSelectClass = (hasError) =>
  `${contactFieldClass(hasError)} appearance-none cursor-pointer pr-10`;

export default function ContactPage() {
  const containerRef = useRef(null);
  const formAnnouncerRef = useRef(null);

  // ── GSAP Scroll-Triggered Animations with Reduced-Motion Support ─────────
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !containerRef.current) return;

    // 0. Coordinated Hero Entrance
    const heroElements = containerRef.current.querySelectorAll('.contact-hero-reveal');
    if (heroElements.length > 0) {
      gsap.fromTo(
        heroElements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }

    const sections = containerRef.current.querySelectorAll('.contact-reveal');
    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 88%',
            once: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  // ── Form State & Modes ──────────────────────────────────────────────────
  const [formType, setFormType] = useState('inquiry'); // 'inquiry' | 'tour' | 'prospectus'
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Admissions & Enrolments Office',
    // Tour specific
    gradeInterest: 'Secondary School (Grades 9–10)',
    tourDate: '2026-11-16',
    tourTime: 'Morning (10:00 – 11:30)',
    attendeeCount: '2',
    // Prospectus specific
    entryYear: '2027 / 2028 Academic Year',
    format: 'digital',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formAnnounce, setFormAnnounce] = useState('');

  // ── Copy-to-clipboard state with accessible fallback ────────────────────
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      }).catch(() => {
        fallbackCopy(text, key);
      });
    } else {
      fallbackCopy(text, key);
    }
  };

  const fallbackCopy = (text, key) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // ignore
    }
    document.body.removeChild(textArea);
  };

  // ── Modal / Toast Feedback States ───────────────────────────────────────
  const [dossierModalOpen, setDossierModalOpen] = useState(false);
  const [activeMapMode, setActiveMapMode] = useState('architectural'); // 'architectural' | 'geographic'
  const [mapZoomLevel, setMapZoomLevel] = useState(1);

  // ── Demonstration Visitor Dossier Download Handler ───────────────────────
  const handleDownloadDossier = () => {
    const content = `========================================================================
EAK INTERNATIONAL SCHOOL OF LONDON — OAKRIDGE CAMPUS
VISITOR & ARRIVAL DOSSIER (OFFICIAL DEMONSTRATION DOCUMENT)
Reference: EAK-DOC-2026-SE1
========================================================================

CAMPUS ORIENTATION & ACCESS PROTOCOLS:

1. PRIMARY VISITOR ENTRANCE:
   North Perimeter Gate A (Welcome Pavilion)
   Oakridge Campus, 42 Academy Boulevard, London SE1 8TY
   Telephone Switchboard: +44 (0) 20 7946 0192

2. SECURITY & REGISTRATION CLEARANCE:
   • All prospective parents and official visitors must report to Security Pavilion A.
   • Valid government-issued photographic identification is mandatory.
   • Visitors will receive an encoded contactless badge for escorted access.

3. VISITOR PARKING & EV CHARGING:
   • Dedicated visitor bays 1 through 24 are situated adjacent to the Welcome Pavilion.
   • Six 22kW Type-2 rapid charging stations available free of charge for visiting families.
   • Commercial coaches and minibuses must use South Gate B holding bays.

4. SAFEGUARDING STANDARDS:
   • Visitors must wear designated red visitor lanyards at all times on campus grounds.
   • Unescorted transit within academic wings during teaching hours is strictly prohibited.

5. PUBLIC TRANSIT:
   • St. Jude's Cross Underground Station (Jubilee & Northern Lines) — 4 min walk.
   • Waterloo & London Bridge mainline connections via bus routes 45, 63, and 381.

------------------------------------------------------------------------
Notice: This document is an illustrative demonstration artifact prepared
for the EAK International School portfolio presentation.
========================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'EAK-Visitor-Dossier-2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDossierModalOpen(false);
  };

  // ── Client-Side Form Validation ─────────────────────────────────────────
  const validateForm = () => {
    const err = {};
    if (!form.name.trim()) {
      err.name = 'Full name is required.';
    }
    if (!form.email.trim()) {
      err.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      err.email = 'Please provide a valid email address (e.g. name@example.com).';
    }
    if (!form.phone.trim()) {
      err.phone = 'Contact telephone number is required.';
    } else if (form.phone.trim().replace(/\D/g, '').length < 6) {
      err.phone = 'Please provide a valid telephone number (at least 6 digits).';
    }

    if (formType === 'tour' && !form.tourDate) {
      err.tourDate = 'Please select a preferred visitation date.';
    }

    if (formType === 'inquiry' && !form.message.trim()) {
      err.message = 'Please provide the details of your inquiry.';
    } else if (formType === 'inquiry' && form.message.trim().length < 10) {
      err.message = 'Inquiry details should be at least 10 characters.';
    }

    return err;
  };

  const focusFirstInvalidField = (errs) => {
    const order = ['name', 'email', 'phone', 'tourDate', 'message'];
    const idByKey = {
      name: 'contact-name',
      email: 'contact-email',
      phone: 'contact-phone',
      tourDate: 'tour-date',
      message: 'contact-message',
    };
    const firstKey = order.find((key) => errs[key]);
    if (firstKey) {
      setTimeout(() => {
        document.getElementById(idByKey[firstKey])?.focus();
      }, 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errs = validateForm();
    if (Object.keys(errs).length > 0) {
      setSubmitted(false);
      setErrors(errs);
      setFormAnnounce('Please correct the highlighted fields below.');
      focusFirstInvalidField(errs);
      return;
    }

    setErrors({});
    setFormAnnounce('');
    setIsSubmitting(true);

    // Simulate realistic asynchronous confirmation state without actual network dispatch
    setTimeout(() => {
      const refCode = `SIM-EAK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionId(refCode);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormAnnounce('Inquiry validated locally. Demonstration confirmation displayed.');
    }, 450);
  };

  const resetForm = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmissionId('');
    setForm({
      name: '',
      email: '',
      phone: '',
      department: 'Admissions & Enrolments Office',
      gradeInterest: 'Secondary School (Grades 9–10)',
      tourDate: '2026-11-16',
      tourTime: 'Morning (10:00 – 11:30)',
      attendeeCount: '2',
      entryYear: '2027 / 2028 Academic Year',
      format: 'digital',
      message: '',
    });
    setErrors({});
    setFormAnnounce('');
  };

  // ── Department Directory Search & Filter ────────────────────────────────
  const [selectedDeptCategory, setSelectedDeptCategory] = useState('All');
  const [deptSearchQuery, setDeptSearchQuery] = useState('');

  const deptCategories = [
    'All',
    'Prospective Families',
    'Institutional',
    'Current Families & Alumni',
    'Pastoral & Medical',
    'Operations',
  ];

  const filteredDepartments = useMemo(() => {
    return departments.filter((d) => {
      const matchesCategory = selectedDeptCategory === 'All' || d.category === selectedDeptCategory;
      const q = deptSearchQuery.toLowerCase();
      const matchesSearch =
        d.name.toLowerCase().includes(q) ||
        d.head.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedDeptCategory, deptSearchQuery]);

  // ── Transit Tab Selection ───────────────────────────────────────────────
  const [activeTransitIdx, setActiveTransitIdx] = useState(0);

  // ── Interactive Campus Landmark Pin ─────────────────────────────────────
  const [activeLandmark, setActiveLandmark] = useState(campusLandmarks[0]);

  // ── Visitor FAQ Accordion ───────────────────────────────────────────────
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-chalk-50">
      {/* ── 1. Editorial Hero Section ────────────────────────────────────── */}
      <section className="bg-navy-950 text-white border-b border-navy-850 pt-16 pb-20 sm:pt-24 sm:pb-28 relative overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="contact-hero-reveal flex flex-wrap items-center gap-2">
              <Badge variant="brass">Campus Directory & Inquiries</Badge>
              <span className="text-xs text-stone-400 font-semibold uppercase tracking-widest">
                London SE1 • Visiting & Admissions
              </span>
              <span className="text-[11px] font-mono text-brass-400 bg-navy-900/90 border border-navy-800 px-2 py-0.5 rounded-micro">
                Illustrative Sample Details
              </span>
            </div>

            <h1 className="contact-hero-reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
              Connect with Our Administrative & Academic Leadership.
            </h1>

            <p className="contact-hero-reveal text-lg text-slate-300 leading-relaxed">
              Whether arranging a private family campus walkthrough, submitting academic inquiries to the registry, or reaching department heads, our secretariat welcomes your communication.
            </p>

            {/* Live Operational Status Pills */}
            <div className="contact-hero-reveal pt-2 flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2 bg-navy-900/90 border border-navy-800 px-3.5 py-2 rounded-micro text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Admissions Welcome Pavilion: <strong>Open Today 08:30 – 16:30</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-navy-900/90 border border-navy-800 px-3.5 py-2 rounded-micro text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brass-500" />
                <span>Average Electronic Reply: <strong>Within 1 Business Day</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Primary Contact & Inquiries Workspace ──────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-hairline contact-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-9 items-start">
            
            {/* Interactive Correspondence Hub (6 Cols) */}
            <div className="lg:col-span-6 bg-chalk-50 border border-hairline p-6 sm:p-7 rounded-micro shadow-subtle">
              {/* Type Switcher Tabs */}
              <div className="border-b border-hairline pb-5 mb-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-brass-600 block">
                    Official Communication Portal
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Client-Side Demo Form
                  </span>
                </div>
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Inquiry types">
                  <button
                    id="tab-inquiry"
                    type="button"
                    role="tab"
                    aria-selected={formType === 'inquiry'}
                    aria-controls="inquiry-form-panel"
                    onClick={() => { setFormType('inquiry'); resetForm(); }}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-micro transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 ${
                      formType === 'inquiry'
                        ? 'bg-navy-950 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-hairline hover:bg-slate-100 hover:text-navy-950'
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    id="tab-tour"
                    type="button"
                    role="tab"
                    aria-selected={formType === 'tour'}
                    aria-controls="inquiry-form-panel"
                    onClick={() => { setFormType('tour'); resetForm(); }}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-micro transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 ${
                      formType === 'tour'
                        ? 'bg-navy-950 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-hairline hover:bg-slate-100 hover:text-navy-950'
                    }`}
                  >
                    Book Campus Tour
                  </button>
                  <button
                    id="tab-prospectus"
                    type="button"
                    role="tab"
                    aria-selected={formType === 'prospectus'}
                    aria-controls="inquiry-form-panel"
                    onClick={() => { setFormType('prospectus'); resetForm(); }}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-micro transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 ${
                      formType === 'prospectus'
                        ? 'bg-navy-950 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-hairline hover:bg-slate-100 hover:text-navy-950'
                    }`}
                  >
                    Request Prospectus
                  </button>
                </div>
              </div>

              {submitted ? (
                /* Submission Confirmation Receipt (Explicitly Non-Persisted Demo State) */
                <div className="py-6 text-center space-y-5" role="status" aria-live="polite" aria-label="Simulated submission receipt">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-micro flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-micro bg-emerald-100/70 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Local Demonstration State</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-950">
                      Prototype Submission Simulated
                    </h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Your form inputs have successfully passed client-side validation and simulated a local confirmation workflow.
                    </p>
                  </div>

                  {/* Prominent Demonstration Disclaimer Banner */}
                  <div className="p-4 bg-amber-50/80 border border-amber-200 text-amber-900 rounded-micro text-xs text-left flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Important Privacy & Prototype Notice:</strong>
                      <span>
                        This is an interactive frontend demonstration. <strong>No data has been transmitted across the network, stored on a database, or dispatched to any real inbox.</strong> In an operational deployment, this inquiry would be securely catalogued in the school management system.
                      </span>
                    </div>
                  </div>

                  {/* Simulated Receipt Details */}
                  <div className="bg-white p-5 border border-hairline rounded-micro text-left max-w-lg mx-auto space-y-3 text-xs shadow-xs">
                    <div className="flex justify-between items-center border-b border-hairline pb-2">
                      <span className="text-slate-500">Simulated Reference:</span>
                      <strong className="font-mono text-navy-950 bg-chalk-100 px-2 py-0.5 rounded-micro">{submissionId}</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-hairline pb-2">
                      <span className="text-slate-500">Applicant / Correspondent:</span>
                      <strong className="text-navy-950">{form.name}</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-hairline pb-2">
                      <span className="text-slate-500">Provided Email:</span>
                      <strong className="text-navy-950">{form.email}</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-hairline pb-2">
                      <span className="text-slate-500">Provided Telephone:</span>
                      <strong className="text-navy-950">{form.phone}</strong>
                    </div>
                    {formType === 'tour' && (
                      <div className="flex justify-between items-center border-b border-hairline pb-2">
                        <span className="text-slate-500">Requested Tour Slot:</span>
                        <strong className="text-navy-950">{form.tourDate} ({form.tourTime}) • {form.attendeeCount} Guests</strong>
                      </div>
                    )}
                    {formType === 'prospectus' && (
                      <div className="flex justify-between items-center border-b border-hairline pb-2">
                        <span className="text-slate-500">Prospectus Mode:</span>
                        <strong className="text-navy-950">{form.entryYear} ({form.format === 'digital' ? 'Digital PDF' : 'Postal Courier'})</strong>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Designated Department:</span>
                      <strong className="text-navy-950">{form.department}</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="sm" onClick={resetForm}>
                      Submit Additional Correspondence
                    </Button>
                  </div>
                </div>
              ) : (
                /* Active Accessible Client-Validated Form */
                <form id="inquiry-form-panel" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  <div ref={formAnnouncerRef} className="sr-only" aria-live="polite" aria-atomic="true">
                    {formAnnounce}
                  </div>
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name <span className="text-crimson-600 ml-0.5" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Dr. Eleanor Sterling"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className={contactFieldClass(!!errors.name)}
                      />
                      {errors.name && (
                        <p id="contact-name-error" role="alert" className="text-[11px] sm:text-xs text-crimson-600 mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-crimson-600 ml-0.5" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="eleanor.s@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className={contactFieldClass(!!errors.email)}
                      />
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="text-[11px] sm:text-xs text-crimson-600 mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Department */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Telephone Number <span className="text-crimson-600 ml-0.5" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+44 20 7946 0000"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        className={contactFieldClass(!!errors.phone)}
                      />
                      {errors.phone && (
                        <p id="contact-phone-error" role="alert" className="text-[11px] sm:text-xs text-crimson-600 mt-1.5 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-department" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Recipient Department
                      </label>
                      <div className={contactSelectWrapClass}>
                        <select
                          id="contact-department"
                          value={form.department}
                          onChange={(e) => setForm({ ...form, department: e.target.value })}
                          className={contactSelectClass(false)}
                        >
                          {departments.map((d) => (
                            <option key={d.id} value={d.name}>{d.name}</option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Fields for Campus Tour Mode */}
                  {formType === 'tour' && (
                    <div className="p-4 bg-white border border-hairline rounded-micro space-y-4 shadow-2xs">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-950 uppercase tracking-wider">
                        <Calendar className="w-4 h-4 text-brass-600" aria-hidden="true" />
                        <span>Tour Logistics & Schedule</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="tour-date" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Preferred Date <span className="text-crimson-600 ml-0.5" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="tour-date"
                            type="date"
                            min="2026-10-15"
                            value={form.tourDate}
                            onChange={(e) => {
                              setForm({ ...form, tourDate: e.target.value });
                              if (errors.tourDate) setErrors({ ...errors, tourDate: undefined });
                            }}
                            aria-required="true"
                            aria-invalid={!!errors.tourDate}
                            aria-describedby={errors.tourDate ? 'tour-date-error' : undefined}
                            className={contactFieldClass(!!errors.tourDate)}
                          />
                          {errors.tourDate && (
                            <p id="tour-date-error" role="alert" className="text-[11px] sm:text-xs text-crimson-600 mt-1 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                              <span>{errors.tourDate}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="tour-slot" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Preferred Slot
                          </label>
                          <div className={contactSelectWrapClass}>
                            <select
                              id="tour-slot"
                              value={form.tourTime}
                              onChange={(e) => setForm({ ...form, tourTime: e.target.value })}
                              className={contactSelectClass(false)}
                            >
                              <option value="Morning (10:00 – 11:30)">Morning (10:00 – 11:30)</option>
                              <option value="Afternoon (14:00 – 15:30)">Afternoon (14:00 – 15:30)</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="tour-attendees" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Party Size
                          </label>
                          <div className={contactSelectWrapClass}>
                            <select
                              id="tour-attendees"
                              value={form.attendeeCount}
                              onChange={(e) => setForm({ ...form, attendeeCount: e.target.value })}
                              className={contactSelectClass(false)}
                            >
                              <option value="1">1 Person</option>
                              <option value="2">2 Persons (Parent + Scholar)</option>
                              <option value="3">3 Persons</option>
                              <option value="4+">4+ Persons (Family Group)</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="tour-grade" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Academic Level of Interest
                        </label>
                        <div className={contactSelectWrapClass}>
                          <select
                            id="tour-grade"
                            value={form.gradeInterest}
                            onChange={(e) => setForm({ ...form, gradeInterest: e.target.value })}
                            className={contactSelectClass(false)}
                          >
                            <option value="Primary School (Grades 1–5)">Primary School (Grades 1–5)</option>
                            <option value="Middle School (Grades 6–8)">Middle School (Grades 6–8)</option>
                            <option value="Secondary School (Grades 9–10)">Secondary School (Grades 9–10)</option>
                            <option value="Senior Secondary & IB Diploma (Grades 11–12)">Senior Secondary & IB Diploma (Grades 11–12)</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Fields for Prospectus Mode */}
                  {formType === 'prospectus' && (
                    <div className="p-4 bg-white border border-hairline rounded-micro space-y-4 shadow-2xs">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy-950 uppercase tracking-wider">
                        <FileText className="w-4 h-4 text-brass-600" aria-hidden="true" />
                        <span>Prospectus Specifications</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="prospectus-year" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Prospective Enrolment Year
                          </label>
                          <div className={contactSelectWrapClass}>
                            <select
                              id="prospectus-year"
                              value={form.entryYear}
                              onChange={(e) => setForm({ ...form, entryYear: e.target.value })}
                              className={contactSelectClass(false)}
                            >
                              <option value="2026 / 2027 Academic Year">2026 / 2027 Academic Year</option>
                              <option value="2027 / 2028 Academic Year">2027 / 2028 Academic Year</option>
                              <option value="2028 / 2029 Academic Year">2028 / 2029 Academic Year</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="prospectus-format" className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Delivery Preference
                          </label>
                          <div className={contactSelectWrapClass}>
                            <select
                              id="prospectus-format"
                              value={form.format}
                              onChange={(e) => setForm({ ...form, format: e.target.value })}
                              className={contactSelectClass(false)}
                            >
                              <option value="digital">Instant High-Res PDF via Email</option>
                              <option value="postal">Hardbound Print Pack via Courier</option>
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      {formType === 'inquiry' ? (
                        <>
                          Inquiry Details & Questions <span className="text-crimson-600 ml-0.5" aria-hidden="true">*</span>
                        </>
                      ) : (
                        'Additional Notes or Accessibility Requests (Optional)'
                      )}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      aria-required={formType === 'inquiry'}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder={
                        formType === 'inquiry'
                          ? "Please describe your inquiry, scholar's background, or specific question..."
                          : "Any specific subject interests, mobility requirements, or language needs..."
                      }
                      className={contactTextareaClass(!!errors.message)}
                    />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="text-[11px] sm:text-xs text-crimson-600 mt-1.5 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission CTA & Local Demo Notice */}
                  <div className="pt-4 border-t border-hairline flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="btn-sweep btn-sweep-primary inline-flex h-11 sm:h-9 items-center justify-center gap-2 px-4 py-2 text-white text-sm font-semibold rounded-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2 disabled:opacity-55 disabled:pointer-events-none shrink-0 w-full sm:w-auto cursor-pointer self-start"
                    >
                      {isSubmitting ? (
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin motion-reduce:animate-none" aria-hidden="true" />
                          <span>Processing...</span>
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="whitespace-nowrap">
                            {formType === 'tour'
                              ? 'Book Campus Tour'
                              : formType === 'prospectus'
                              ? 'Request Prospectus'
                              : 'Submit Inquiry'}
                          </span>
                          <Send className="w-3.5 h-3.5 shrink-0 opacity-90" aria-hidden="true" />
                        </span>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 leading-snug sm:pt-0.5">
                      No server transmission • Local demonstration mode only
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Coordinates & Direct Communications Sidebar (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Primary Address Card (Fictional School Address & Clearly Labeled Sample Contacts) */}
              <div className="bg-navy-950 text-white p-6 sm:p-7 rounded-micro border border-navy-850 space-y-4 shadow-subtle">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brass-500 font-bold block mb-1">
                      Central Campus Coordinates
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Oakridge Main Campus
                    </h3>
                  </div>
                  <Badge variant="brass">Sample Details</Badge>
                </div>

                {/* Clear Sample Disclaimer */}
                <div className="p-3 bg-navy-900/90 border border-navy-800 rounded-micro text-[11px] text-slate-300 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">
                    Fictional contact details provided for portfolio demonstration purposes. No real calls or emails are routed.
                  </span>
                </div>

                <div className="space-y-0 text-slate-300">
                  {/* Postal Address */}
                  <div className="flex items-start gap-3 pb-3.5">
                    <MapPin className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <strong className="text-white block font-sans text-xs uppercase tracking-wider">Postal Address</strong>
                        <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">(Sample)</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-snug">{schoolInfo.campus.address}</p>
                    </div>
                  </div>

                  {/* Switchboard Phone */}
                  <div className="flex items-center justify-between gap-3 py-3.5 border-t border-navy-850">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <Phone className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <strong className="text-white block font-sans text-xs uppercase tracking-wider">Main Switchboard</strong>
                          <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">(Sample Line)</span>
                        </div>
                        <a
                          href={`tel:${schoolInfo.campus.phone}`}
                          className="text-xs sm:text-sm text-slate-300 hover:text-brass-400 transition-colors block mt-0.5 truncate font-mono"
                        >
                          {schoolInfo.campus.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={copiedKey === 'phone' ? 'Copied telephone number to clipboard' : 'Copy sample phone number'}
                      onClick={() => handleCopy(schoolInfo.campus.phone, 'phone')}
                      className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-navy-900 rounded-micro transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
                      title={copiedKey === 'phone' ? 'Copied!' : 'Copy phone number'}
                    >
                      {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  </div>

                  {/* Admissions Email */}
                  <div className="flex items-center justify-between gap-3 py-3.5 border-t border-navy-850">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <Mail className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <strong className="text-white block font-sans text-xs uppercase tracking-wider">Admissions Office</strong>
                          <span className="text-[10px] uppercase font-mono text-stone-400 tracking-wider">(Sample Mailbox)</span>
                        </div>
                        <a
                          href={`mailto:${schoolInfo.campus.email}`}
                          className="text-xs sm:text-sm text-slate-300 hover:text-brass-400 transition-colors block mt-0.5 truncate"
                        >
                          {schoolInfo.campus.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={copiedKey === 'email' ? 'Copied admissions email to clipboard' : 'Copy sample email address'}
                      onClick={() => handleCopy(schoolInfo.campus.email, 'email')}
                      className="inline-flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-navy-900 rounded-micro transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
                      title={copiedKey === 'email' ? 'Copied!' : 'Copy email address'}
                    >
                      {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                    </button>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3 pt-3.5 border-t border-navy-850">
                    <Clock className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1">
                      <strong className="text-stone-300 block font-sans uppercase tracking-wider text-xs">Office & Visiting Hours</strong>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-snug">{schoolInfo.campus.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Balanced Two-Column Row: Urgent Parental Medical Hotline & Visitor Dossier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                
                {/* Urgent Parental & Medical Hotline */}
                <div className="bg-amber-50/80 border border-brass-500/35 p-5 sm:p-6 rounded-micro flex flex-col gap-4 shadow-xs h-full">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-brass-700 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-950">
                        Parental Medical Hotline
                      </span>
                    </div>
                    <p className="text-xs text-amber-900/85 leading-relaxed">
                      For immediate safeguarding concerns, day-scholar bus delays, or urgent medical updates during school hours:
                    </p>
                  </div>

                  <div className="mt-auto pt-3 border-t border-brass-500/25 space-y-1.5">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900/75">
                        24/7 Priority Dispatch Desk
                      </span>
                      <span className="text-[10px] font-mono text-amber-800/70 uppercase tracking-widest">(Sample Line)</span>
                    </div>
                    <a
                      href="tel:+442079460199"
                      className="text-sm font-mono font-semibold text-navy-950 hover:text-brass-700 transition-colors block tracking-tight break-all sm:break-normal"
                    >
                      +44 (0) 20 7946 0199
                    </a>
                    <p className="text-[10px] text-amber-900/60 italic leading-snug">
                      Illustrative hotline for demo purposes only.
                    </p>
                  </div>
                </div>

                {/* Visitor & Arrival Dossier */}
                <div className="bg-chalk-100 border border-hairline p-5 sm:p-6 rounded-micro flex flex-col gap-4 shadow-xs h-full">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-brass-600 shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wider text-navy-950">
                        Visitor & Arrival Dossier
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Orientation guide covering visitor parking bays, security gate protocols, and campus transit maps:
                    </p>
                  </div>

                  <div className="mt-auto pt-3 border-t border-hairline flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                    <span className="text-[10px] font-mono text-slate-500">
                      Ref: EAK-DOC-2026-SE1
                    </span>
                    <button
                      type="button"
                      onClick={() => setDossierModalOpen(true)}
                      aria-haspopup="dialog"
                      className="inline-flex min-h-[2.5rem] items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-hairline hover:border-slate-300 text-xs font-semibold text-navy-950 rounded-micro transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 shrink-0"
                    >
                      <Download className="w-3.5 h-3.5 text-brass-600" aria-hidden="true" />
                      <span>Preview Guide</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Relevant Institutional Quick Links ─────────────────────────── */}
      <section className="py-16 bg-chalk-50 border-b border-hairline contact-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Portals & Navigation"
            title="Relevant Institutional Quick Links"
            description="Explore central academic divisions, application criteria, campus facilities, and official circulars before your visit."
            align="left"
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              to="/admissions"
              className="p-5 bg-white border border-hairline rounded-micro hover:border-slate-300 transition-all shadow-subtle group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-micro bg-chalk-100 flex items-center justify-center text-brass-700">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-navy-950 group-hover:text-brass-700 transition-colors">
                  Admissions Procedures
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Entry criteria, application timelines, scholarship dossiers, and overseas scholar assessments.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brass-700">
                <span>View Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/academics"
              className="p-5 bg-white border border-hairline rounded-micro hover:border-slate-300 transition-all shadow-subtle group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-micro bg-chalk-100 flex items-center justify-center text-brass-700">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-navy-950 group-hover:text-brass-700 transition-colors">
                  Academic Curricula
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primary years, Cambridge IGCSE, and International Baccalaureate (IB) Diploma programmes.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brass-700">
                <span>Explore Curricula</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/facilities"
              className="p-5 bg-white border border-hairline rounded-micro hover:border-slate-300 transition-all shadow-subtle group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-micro bg-chalk-100 flex items-center justify-center text-brass-700">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-navy-950 group-hover:text-brass-700 transition-colors">
                  Campus Facilities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tour our 24-acre parkland grounds, Olympic arena, science suites, and Radford Auditorium.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brass-700">
                <span>Inspect Facilities</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/events-notices"
              className="p-5 bg-white border border-hairline rounded-micro hover:border-slate-300 transition-all shadow-subtle group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-micro bg-chalk-100 flex items-center justify-center text-brass-700">
                  <Calendar className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-base font-semibold text-navy-950 group-hover:text-brass-700 transition-colors">
                  Circulars & Notices
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Official school notices, examination schedules, term dates, and calendar announcements.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brass-700">
                <span>Browse Circulars</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Departmental Directory ────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-hairline contact-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Institutional Contacts"
            title="Departmental Directory & Direct Extensions"
            description="Direct points of contact for admissions, bursary accounts, transcript requests, pastoral care, and transport coordination."
            align="left"
            className="mb-10"
          />

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8 pb-6 border-b border-hairline">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {deptCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedDeptCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-micro transition-colors ${
                    selectedDeptCategory === cat
                      ? 'bg-navy-950 text-white'
                      : 'bg-chalk-50 text-slate-600 border border-hairline hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={deptSearchQuery}
                onChange={(e) => setDeptSearchQuery(e.target.value)}
                placeholder="Search department or head..."
                className="w-full bg-chalk-50 border border-hairline pl-9 pr-3.5 py-1.5 text-xs rounded-micro text-slate-900 focus:border-navy-950 outline-none"
              />
            </div>
          </div>

          {/* Directory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white border border-hairline p-6 rounded-micro space-y-4 hover:border-slate-300 transition-colors shadow-subtle flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={dept.badgeVariant}>{dept.badge}</Badge>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">{dept.directExtension}</span>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-semibold text-navy-950 leading-snug">
                      {dept.name}
                    </h4>
                    <p className="text-xs font-semibold text-brass-700 mt-0.5">
                      {dept.head} • <span className="text-slate-500 font-normal">{dept.role}</span>
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{dept.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`tel:${dept.phone}`} className="hover:text-navy-950 font-medium">{dept.phone}</a>
                    </div>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-brass-700 hover:text-navy-950 font-semibold text-[11px] uppercase tracking-wider"
                    >
                      Email Direct
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="text-center py-12 bg-white border border-hairline rounded-micro space-y-2">
              <p className="text-sm text-slate-600">No departments found matching your criteria.</p>
              <button
                type="button"
                onClick={() => { setSelectedDeptCategory('All'); setDeptSearchQuery(''); }}
                className="text-xs text-navy-950 font-semibold underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. Campus Location & Interactive Map Demonstration Area ────────── */}
      <section className="py-20 bg-chalk-50 border-b border-hairline contact-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transit & Access"
            title="Campus Map & Location Demonstration Area"
            description="Explore our fictional campus ground plan and simulated geographic transit routes for Oakridge Campus on Academy Boulevard in London SE1."
            align="left"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Transit Options Guide (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
                Travel Directions
              </span>

              {/* Transit Mode Selection Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {transitOptions.map((opt, idx) => (
                  <button
                    key={opt.mode}
                    type="button"
                    onClick={() => setActiveTransitIdx(idx)}
                    className={`p-3 text-left border rounded-micro transition-colors ${
                      activeTransitIdx === idx
                        ? 'bg-navy-950 text-white border-navy-950'
                        : 'bg-white text-slate-700 border-hairline hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {opt.icon === 'Train' && <Train className="w-4 h-4 text-brass-500" />}
                      {opt.icon === 'Bus' && <Bus className="w-4 h-4 text-brass-500" />}
                      {opt.icon === 'Car' && <Car className="w-4 h-4 text-brass-500" />}
                      {opt.icon === 'Plane' && <Plane className="w-4 h-4 text-brass-500" />}
                      <span className="text-xs font-bold truncate">{opt.mode.split(' ')[0]}</span>
                    </div>
                    <span className="text-[11px] block truncate opacity-80">{opt.badge}</span>
                  </button>
                ))}
              </div>

              {/* Active Transit Details */}
              <div className="p-6 bg-white border border-hairline rounded-micro space-y-4 shadow-subtle">
                <div className="flex justify-between items-center border-b border-hairline pb-3">
                  <h4 className="font-serif text-lg font-semibold text-navy-950">
                    {transitOptions[activeTransitIdx].mode}
                  </h4>
                  <Badge variant="navy">{transitOptions[activeTransitIdx].badge}</Badge>
                </div>
                
                <p className="text-xs font-semibold text-slate-700">
                  {transitOptions[activeTransitIdx].summary}
                </p>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  {transitOptions[activeTransitIdx].details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-500 shrink-0 mt-1.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GPS Coordinates Bar with Demonstration Tag */}
              <div className="p-4 bg-white border border-hairline rounded-micro flex items-center justify-between text-xs shadow-xs">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brass-600" />
                  <span className="text-slate-600">Demonstration GPS:</span>
                  <span className="font-mono font-semibold text-navy-950">51.4988° N, 0.0877° W</span>
                </div>
                <Badge variant="brass">SE1 8TY Demo</Badge>
              </div>
            </div>

            {/* Map Demonstration Workspace (7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-hairline rounded-micro overflow-hidden shadow-subtle flex flex-col">
              
              {/* Toolbar with Map Mode Switcher & Zoom */}
              <div className="p-4 sm:p-5 bg-chalk-100 border-b border-hairline flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-brass-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-950">
                    Map Demonstration Area
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded-micro border border-hairline">
                    Fictional Campus
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveMapMode('architectural')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-micro transition-colors ${
                      activeMapMode === 'architectural'
                        ? 'bg-navy-950 text-white'
                        : 'bg-white text-slate-600 border border-hairline hover:bg-slate-50'
                    }`}
                  >
                    Architectural Plan
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveMapMode('geographic')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-micro transition-colors ${
                      activeMapMode === 'geographic'
                        ? 'bg-navy-950 text-white'
                        : 'bg-white text-slate-600 border border-hairline hover:bg-slate-50'
                    }`}
                  >
                    Street & Transit Map
                  </button>
                </div>
              </div>

              {/* Mode A: Interactive Campus Architectural Ground Plan */}
              {activeMapMode === 'architectural' ? (
                <div className="relative aspect-[16/10] bg-white p-3 sm:p-4 select-none border-b border-hairline overflow-hidden">
                  <svg
                    viewBox="0 0 100 80"
                    className="w-full h-full text-slate-400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Outer Campus Perimeter */}
                    <rect x="5" y="5" width="90" height="70" rx="3" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.8" />
                    
                    {/* Great Lawn / Central Parkland Quad */}
                    <rect x="25" y="32" width="50" height="28" rx="2" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="0.5" />
                    <text x="50" y="47" textAnchor="middle" fill="#047857" fontSize="2.8" fontWeight="bold" letterSpacing="0.2">
                      CENTRAL PARKLAND QUAD
                    </text>

                    {/* Pathways & Roads */}
                    <path d="M 5 60 L 25 60 L 25 45 L 75 45 L 75 60 L 95 60" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 50 5 L 50 32" stroke="#E2E8F0" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Gate A & Gate B */}
                    <rect x="2" y="57" width="5" height="6" fill="#C5A059" rx="0.8" />
                    <text x="4.5" y="55" textAnchor="middle" fill="#1E293B" fontSize="2.2" fontWeight="bold">GATE A</text>

                    <rect x="93" y="57" width="5" height="6" fill="#0B1325" rx="0.8" />
                    <text x="95.5" y="55" textAnchor="middle" fill="#1E293B" fontSize="2.2" fontWeight="bold">GATE B</text>

                    {/* Building Outlines */}
                    <rect x="15" y="55" width="14" height="12" rx="1.5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="0.6" />
                    <rect x="35" y="10" width="22" height="16" rx="1.5" fill="#E2E8F0" stroke="#0B1325" strokeWidth="0.8" />
                    <rect x="62" y="12" width="20" height="14" rx="1.5" fill="#E2E8F0" stroke="#0B1325" strokeWidth="0.8" />
                    <rect x="12" y="18" width="16" height="16" rx="1.5" fill="#FEE2E2" stroke="#B91C1C" strokeWidth="0.6" />
                    <rect x="75" y="48" width="16" height="18" rx="1.5" fill="#DCFCE7" stroke="#15803D" strokeWidth="0.6" />
                    <rect x="42" y="62" width="22" height="10" rx="1.5" fill="#E2E8F0" stroke="#0B1325" strokeWidth="0.8" />
                  </svg>

                  {/* Interactive Clickable Pins */}
                  {campusLandmarks.map((pin) => {
                    const isSelected = activeLandmark.id === pin.id;
                    return (
                      <button
                        key={pin.id}
                        type="button"
                        onClick={() => setActiveLandmark(pin)}
                        style={{ left: `${pin.coords.x}%`, top: `${pin.coords.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group p-1 focus:outline-none transition-transform ${
                          isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                        }`}
                        aria-label={`Select ${pin.name}`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 ${
                            isSelected
                              ? 'bg-navy-950 text-brass-400 border-brass-400'
                              : 'bg-white text-navy-950 border-slate-300 group-hover:border-navy-950'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* Mode B: Geographic London SE1 Street Map Demonstration Area */
                <div className="relative aspect-[16/10] bg-slate-100 p-4 select-none border-b border-hairline overflow-hidden flex items-center justify-center">
                  <div
                    className="w-full h-full relative rounded-micro overflow-hidden border border-slate-300 transition-transform duration-300"
                    style={{ transform: `scale(${mapZoomLevel})` }}
                  >
                    {/* Stylized London SE1 Geographic Grid Background */}
                    <div
                      className="absolute inset-0 bg-[#E8ECEF]"
                      style={{
                        backgroundImage: 'linear-gradient(#CBD5E1 1px, transparent 1px), linear-gradient(90deg, #CBD5E1 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* River Thames Curve (Stylized North of SE1) */}
                    <path
                      d="M 0 10 Q 50 30 100 15"
                      className="stroke-blue-200"
                      strokeWidth="6"
                      fill="none"
                    />

                    {/* Main Road: Academy Boulevard Corridor */}
                    <div className="absolute top-[48%] left-0 right-0 h-6 bg-slate-300 -translate-y-1/2 border-y border-slate-400/60 flex items-center justify-center">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-600 uppercase">
                        ACADEMY BOULEVARD (SE1)
                      </span>
                    </div>

                    {/* Borough High Street Crossroad */}
                    <div className="absolute top-0 bottom-0 left-[22%] w-6 bg-slate-300 -translate-x-1/2 border-x border-slate-400/60 flex items-center justify-center">
                      <span className="text-[9px] font-mono font-bold tracking-wider text-slate-500 uppercase -rotate-90">
                        BOROUGH HIGH ST
                      </span>
                    </div>

                    {/* London Bridge Rail Line Corridor */}
                    <div className="absolute top-0 bottom-0 right-[25%] w-4 bg-slate-200 -translate-x-1/2 border-x border-dashed border-slate-400" />

                    {/* School Campus Grounds Block */}
                    <div className="absolute top-[30%] left-[36%] w-[42%] h-[45%] bg-emerald-100/90 border-2 border-emerald-600 rounded-micro p-2 flex flex-col justify-between shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-navy-950 uppercase tracking-tight">
                          EAK INTERNATIONAL CAMPUS
                        </span>
                        <Badge variant="forest">Gate A Entrance</Badge>
                      </div>
                      <div className="text-[9px] text-slate-600 font-sans">
                        <span>42 Academy Blvd, SE1 8TY</span>
                        <span className="block font-bold text-emerald-800">24-Acre Parkland Site</span>
                      </div>
                    </div>

                    {/* Borough Underground Pin */}
                    <div className="absolute top-[65%] left-[18%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white border border-slate-400 px-2 py-1 rounded-micro shadow-xs">
                      <Train className="w-3.5 h-3.5 text-rose-600" />
                      <span className="text-[10px] font-bold text-slate-800">Borough Station (8 min walk)</span>
                    </div>

                    {/* London Bridge Station Indicator */}
                    <div className="absolute top-[12%] right-[18%] -translate-x-1/2 flex items-center gap-1.5 bg-white border border-slate-400 px-2 py-1 rounded-micro shadow-xs">
                      <Train className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-[10px] font-bold text-slate-800">London Bridge Rail</span>
                    </div>

                    {/* Compass Rose */}
                    <div className="absolute bottom-2 right-2 bg-white/90 border border-slate-300 p-1.5 rounded-micro flex items-center gap-1 text-[9px] font-mono font-bold text-slate-700">
                      <Compass className="w-3.5 h-3.5 text-brass-600" />
                      <span>N ↑</span>
                    </div>
                  </div>

                  {/* Simulated Zoom Overlay Controls */}
                  <div className="absolute top-6 right-6 flex flex-col gap-1 z-20">
                    <button
                      type="button"
                      aria-label="Simulate zoom in"
                      onClick={() => setMapZoomLevel((prev) => Math.min(prev + 0.15, 1.3))}
                      className="w-7 h-7 bg-white border border-slate-300 rounded-micro flex items-center justify-center font-bold text-navy-950 hover:bg-slate-100 shadow-xs"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      aria-label="Simulate zoom out"
                      onClick={() => setMapZoomLevel((prev) => Math.max(prev - 0.15, 0.85))}
                      className="w-7 h-7 bg-white border border-slate-300 rounded-micro flex items-center justify-center font-bold text-navy-950 hover:bg-slate-100 shadow-xs"
                    >
                      −
                    </button>
                    <button
                      type="button"
                      aria-label="Reset zoom"
                      onClick={() => setMapZoomLevel(1)}
                      className="px-1 py-0.5 bg-white border border-slate-300 rounded-micro text-[9px] font-mono text-slate-700 hover:bg-slate-100 shadow-xs text-center"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              )}

              {/* Selected Landmark Info / Access Route Details */}
              <div className="p-5 sm:p-6 bg-chalk-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-navy-950">
                      {activeLandmark.name}
                    </span>
                    <Badge variant="navy">{activeLandmark.category}</Badge>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeLandmark.desc}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Access Route</span>
                  <span className="text-xs font-semibold text-brass-700">via North Gate A</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. Visiting Protocols & Security Standards ─────────────────────── */}
      <section className="py-20 bg-white border-b border-hairline contact-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visitor Safety"
            title="Campus Protocols & Safeguarding Guidelines"
            description="EAK International School maintains rigorous safeguarding measures to ensure the uncompromising safety of all enrolled scholars and visitors."
            align="left"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitorGuidelines.map((guide, idx) => (
              <div
                key={idx}
                className="bg-white border border-hairline p-6 rounded-micro space-y-3 hover:border-slate-300 transition-colors shadow-subtle"
              >
                <div className="w-10 h-10 rounded-micro bg-chalk-100 flex items-center justify-center text-brass-700 border border-hairline">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Users className="w-5 h-5" />}
                  {idx === 2 && <AlertCircle className="w-5 h-5" />}
                  {idx === 3 && <CheckCircle2 className="w-5 h-5" />}
                </div>

                <h4 className="font-serif text-base font-semibold text-navy-950">
                  {guide.title}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {guide.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Visitor Frequently Asked Questions ─────────────────────────── */}
      <section className="py-20 bg-chalk-50 border-b border-hairline contact-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visitor Inquiries"
            title="Frequently Asked Questions by Prospective Visitors"
            description="Key information regarding campus appointment procedures, family attendance, parking, and overseas visits."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {visitorFAQs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `contact-faq-panel-${index}`;
              const buttonId = `contact-faq-btn-${index}`;
              return (
                <div
                  key={index}
                  className={`border rounded-micro overflow-hidden bg-white shadow-subtle transition-colors duration-200 ${
                    isOpen ? 'border-brass-500/80' : 'border-hairline hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-brass-500"
                  >
                    <span className="font-serif text-base font-semibold text-navy-950">
                      {faq.q}
                    </span>
                    {/* Single chevron with CSS rotation — smoother than icon swap */}
                    <div
                      className={`p-1 rounded-micro transition-transform duration-300 ease-in-out ${
                        isOpen ? 'text-brass-600 rotate-180' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/*
                   * Smooth expand/collapse via CSS grid-template-rows.
                   * Animates from 0fr → 1fr without needing height measurement.
                   */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 320ms cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div
                      style={{
                        minHeight: 0,
                        opacity: isOpen ? 1 : 0,
                        transition: 'opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: isOpen ? '60ms' : '0ms',
                      }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-hairline bg-chalk-50">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. Institutional Disclaimer ──────────────────────────────────── */}
      <section className="py-8 bg-chalk-100 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] text-slate-500 italic max-w-3xl mx-auto leading-relaxed">
            * Note on Demonstration Data: EAK International School, its London campus address, telephone switchboards, email addresses, and departmental staff are fictional representations created exclusively for this portfolio showcase and institutional design system presentation.
          </p>
        </div>
      </section>

      {/* ── Simulated Visitor Dossier Preview Modal ───────────────────────── */}
      {dossierModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-micro border border-hairline max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <div className="flex items-center gap-2.5">
                <Download className="w-5 h-5 text-brass-600" />
                <div>
                  <h4 className="font-serif text-lg font-bold text-navy-950">
                    Visitor Dossier & Campus Protocol Guide
                  </h4>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Document Ref: EAK-DOC-2026-SE1
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDossierModalOpen(false)}
                aria-label="Close modal"
                className="inline-flex min-h-[2.5rem] min-w-[2.5rem] items-center justify-center p-1 text-slate-400 hover:text-navy-950 rounded-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                This publication contains complete orientation guidance for visiting families, international school inspectors, guest lecturers, and admissions applicants:
              </p>
              <ul className="space-y-1.5 list-disc list-inside bg-chalk-50 p-3 rounded-micro border border-hairline">
                <li>North Perimeter Gate A arrival procedures and security check-in</li>
                <li>Designated visitor EV charging bays & coach parking locations</li>
                <li>Safeguarding visitor badge classification and badge return points</li>
                <li>Accessibility assistance routes, elevators, and tactile guidance</li>
              </ul>
              <p className="text-[11px] text-slate-500 italic">
                * Sample PDF document demonstration. Initiating the action triggers a local prototype download notice.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setDossierModalOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                icon={Download}
                onClick={handleDownloadDossier}
              >
                Download Guide (.txt)
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
