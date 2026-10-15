import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckSquare,
  Square,
  FileCheck2,
} from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';

import AdmissionsFAQAccordion from '../components/pages/admissions/AdmissionsFAQAccordion';
import AdmissionsInquiryForm from '../components/pages/admissions/AdmissionsInquiryForm';

import {
  admissionsHeroData,
  admissionsSteps,
  eligibilityGroups,
  requiredDocumentsList,
  importantDatesList,
  tuitionAndGuidanceData,
  admissionsFaqData,
} from '../data/admissionsData';
import { schoolInfo } from '../data/schoolInfo';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Complete Admissions Page for EAK International School
 * High-conversion architecture with sequential 5-step roadmap, eligibility matrix,
 * interactive checklist, dates, guidance, accessible FAQs, and validated inquiry prototype.
 */
export default function AdmissionsPage() {
  const containerRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const progressLineRef = useRef(null);

  // Interactive state for parent document checklist
  const [checkedDocs, setCheckedDocs] = useState({});

  const toggleDoc = (docId) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docId]: !prev[docId],
    }));
  };

  // GSAP Animations with lifecycle cleanup and reduced-motion protection
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    // 0. Coordinated Hero Reveal
    const heroElements = containerRef.current.querySelectorAll('.hero-reveal');
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

    // 1. Horizontal timeline progress line reveal
    if (stepsContainerRef.current && progressLineRef.current) {
      gsap.fromTo(
        progressLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }

    // 2. Sequential reveal of the 5 admission steps
    const stepCards = containerRef.current.querySelectorAll('.step-card');
    if (stepCards.length > 0 && stepsContainerRef.current) {
      gsap.fromTo(
        stepCards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }

    // 3. Section reveals
    const revealSections = containerRef.current.querySelectorAll('.admissions-reveal');
    revealSections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-chalk-50 text-slate-800">
      {/* =========================================================================
          SECTION 1: INTRODUCTORY HERO
          Conversion-focused header with quick anchors, deadline callout, and CTAs
          ========================================================================= */}
      <section className="bg-chalk-50 border-b border-hairline py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="hero-reveal flex flex-wrap items-center gap-2.5">
              <Badge variant="brass">{admissionsHeroData.badge}</Badge>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Cambridge IGCSE & IB World School
              </span>
            </div>

            <h1 className="hero-reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight leading-[1.10]">
              {admissionsHeroData.title}
            </h1>

            <p className="hero-reveal text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl">
              {admissionsHeroData.subtitle}
            </p>

            {/* Deadline Notification Callout */}
            <div className="hero-reveal p-4 bg-white border border-hairline rounded-micro flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-brass-600 shrink-0" />
                <span className="font-medium">{admissionsHeroData.intakeDeadlines}</span>
              </div>
              <span className="font-mono font-bold text-navy-950 uppercase tracking-wider text-[11px]">
                Rolling Intake Active
              </span>
            </div>

            {/* CTAs & Quick Jump Navigation */}
            <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-micro cursor-pointer text-sm px-6 py-3.5 gap-2 tracking-wide bg-brass-500 text-white hover:bg-brass-600 active:bg-brass-700 shadow-sm focus-visible:ring-2 focus-visible:ring-brass-500 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Submit Inquiry Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#admission-steps"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-micro cursor-pointer text-sm px-6 py-3.5 gap-2 tracking-wide bg-transparent text-navy-950 border border-navy-950 hover:bg-navy-950 hover:text-white focus-visible:ring-2 focus-visible:ring-brass-500 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View 5-Step Roadmap</span>
              </a>

              <a
                href={`tel:${schoolInfo.campus.admissionsPhone}`}
                className="text-xs font-semibold text-slate-600 hover:text-navy-950 flex items-center gap-1.5 px-3 py-2 transition-colors hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-3.5 h-3.5 text-brass-600" />
                <span>Call Registrar Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FIVE-STEP ADMISSION PROCESS
          Mandated by PRD: Enquiry -> Application -> Interaction/Assessment -> Selection -> Enrollment
          ========================================================================= */}
      <section id="admission-steps" className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="admissions-reveal">
            <SectionHeading
              eyebrow="Admissions Sequence"
              title="The Five-Stage Candidate Journey"
              description="A structured, transparent pathway designed to ensure candidates and families experience clarity, dignity, and personal guidance at every step."
              className="mb-16"
            />
          </div>

          <div ref={stepsContainerRef} className="relative">
            {/* Horizontal Timeline Connector Bar (Desktop) */}
            <div
              ref={progressLineRef}
              aria-hidden="true"
              className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-brass-500/80 z-0"
            />

            {/* 5 Sequential Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {admissionsSteps.map((st, idx) => (
                <div
                  key={idx}
                  className="step-card bg-chalk-50 border border-hairline rounded-micro p-6 flex flex-col justify-between hover:border-brass-500 hover:shadow-subtle transition-all duration-200 group"
                >
                  <div>
                    {/* Step Milestone Bubble */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-micro bg-navy-950 text-white border border-navy-850 flex items-center justify-center font-mono text-sm font-bold group-hover:bg-brass-600 transition-colors">
                        {st.step}
                      </div>
                      <Badge variant="navy" className="text-[10px]">
                        {st.phase}
                      </Badge>
                    </div>

                    <span className="font-mono text-[11px] text-brass-600 font-bold block mb-1">
                      {st.timeframe}
                    </span>

                    <h3 className="font-serif text-lg font-semibold text-navy-950 mb-2 leading-snug">
                      {st.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {st.summary}
                    </p>

                    {/* Step Checklist Items */}
                    <div className="pt-3 border-t border-hairline space-y-1.5">
                      {st.details.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-forest-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-hairline">
                    <a
                      href={st.actionTarget}
                      className="text-xs font-bold text-navy-950 hover:text-brass-600 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>{st.actionLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ELIGIBILITY CRITERIA MATRIX
          Organized by Grade Groups (Early Years, Primary, Middle, IGCSE, IB DP)
          ========================================================================= */}
      <section id="eligibility-criteria" className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="admissions-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Standards of Admission"
              title="Eligibility Criteria by Academic Division"
              description="Review age requirements, prerequisites, and assessment structures tailored for each developmental tier."
            />
            <div className="shrink-0">
              <Badge variant="brass">Intake 2026–2027</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eligibilityGroups.map((grp, idx) => (
              <div
                key={idx}
                className="admissions-reveal bg-white border border-hairline rounded-micro p-7 space-y-5 flex flex-col justify-between hover:border-brass-500 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="navy">{grp.grades}</Badge>
                    <span className="font-mono text-xs font-bold text-brass-700">
                      {grp.ageRange}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-950">
                      {grp.group}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {grp.cutoff}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-hairline space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy-950 block">
                      Candidate Prerequisites:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {grp.requirements}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-hairline text-xs space-y-1">
                  <span className="font-bold text-navy-950 block">Assessment Format:</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {grp.assessmentFormat}
                  </p>
                </div>
              </div>
            ))}

            {/* International Relocation Special Card */}
            <div className="admissions-reveal bg-navy-950 text-white border border-navy-850 rounded-micro p-7 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <Badge variant="brass">Global Admissions Protocol</Badge>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Relocating Families & Mid-Term Entries
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We support corporate and diplomatic transfers relocating from different school calendars (US, Southern Hemisphere, Japan). Our Admissions Registrar provides equivalent grade mapping and rolling assessments.
                </p>
              </div>

              <div className="pt-4 border-t border-navy-850">
                <a
                  href="#inquiry-form"
                  className="text-xs font-bold text-brass-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Request International Placement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: REQUIRED DOCUMENT CHECKLIST
          Interactive verification checklist for parents preparing their dossier
          ========================================================================= */}
      <section id="document-checklist" className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="admissions-reveal">
            <SectionHeading
              eyebrow="Application Dossier"
              title="Required Document Checklist"
              description="Prepare these certified records prior to submitting your formal candidate dossier. You can check off items as you gather them."
              className="mb-16"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requiredDocumentsList.map((docGroup) => (
              <div
                key={docGroup.id}
                className="admissions-reveal bg-chalk-50 border border-hairline rounded-micro p-7 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-hairline">
                  <FileText className="w-4 h-4 text-brass-600" />
                  <h3 className="font-serif text-lg font-semibold text-navy-950">
                    {docGroup.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {docGroup.items.map((item, iIdx) => {
                    const itemId = `${docGroup.id}-${iIdx}`;
                    const isChecked = !!checkedDocs[itemId];

                    return (
                      <button
                        key={iIdx}
                        type="button"
                        onClick={() => toggleDoc(itemId)}
                        className={`w-full text-left p-3 rounded-micro border transition-all duration-150 flex items-start gap-3 ${
                          isChecked
                            ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                            : 'bg-white border-hairline text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-forest-700" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400" />
                          )}
                        </div>
                        <span className={`text-xs leading-relaxed ${isChecked ? 'line-through text-slate-500' : ''}`}>
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-chalk-100 border border-hairline rounded-micro flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-brass-600 shrink-0" />
              <span>Certified English translations are required for all non-English civil and academic records.</span>
            </div>
            <span className="font-semibold text-navy-950">Direct Admissions Desk: +44 (0) 20 7946 0195</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 & 6: IMPORTANT DATES & PRACTICAL GUIDANCE
          Fictional sample calendar deadlines + tuition architecture & scholarships
          ========================================================================= */}
      <section id="important-dates" className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Key Intake Dates (6 Cols) */}
            <div className="admissions-reveal lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                  Intake Timeline 2026–2027
                </span>
                <h2 className="font-serif text-3xl font-semibold text-navy-950">
                  Key Admissions Dates & Deadlines
                </h2>
                <p className="text-xs text-slate-400 mt-1 italic">
                  Fictional sample calendar for frontend demonstration.
                </p>
              </div>

              <div className="bg-white border border-hairline rounded-micro overflow-hidden divide-y divide-hairline">
                {importantDatesList.map((dt, idx) => (
                  <div key={idx} className="p-5 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant={dt.badgeVariant} className="text-[10px]">
                          {dt.status}
                        </Badge>
                        <span className="font-mono text-[11px] text-slate-500">
                          {dt.term}
                        </span>
                      </div>
                      <h3 className="font-serif text-base font-semibold text-navy-950 leading-snug">
                        {dt.event}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs font-bold text-navy-950 block">
                        {dt.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Admission Information & Tuition Architecture (6 Cols) */}
            <div className="admissions-reveal lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                  Practical Guidance
                </span>
                <h2 className="font-serif text-3xl font-semibold text-navy-950">
                  Tuition, Scholarships & Enrollment Policies
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Institutional standards ensuring clarity and equitable access.
                </p>
              </div>

              <div className="space-y-4">
                {tuitionAndGuidanceData.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-hairline rounded-micro p-6 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-semibold text-navy-950">
                        {item.title}
                      </h3>
                      <ShieldCheck className="w-4 h-4 text-brass-600 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="font-mono text-[11px] text-brass-700 font-medium pt-1">
                      • {item.subtext}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (ACCORDION)
          Interactive, accessible multi-category FAQ disclosure
          ========================================================================= */}
      <section id="admissions-faqs" className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="admissions-reveal max-w-3xl mb-14">
            <SectionHeading
              eyebrow="Admissions Guidance"
              title="Frequently Asked Questions"
              description="Find detailed answers regarding assessment formats, fee structures, boarding choices, and international applications."
            />
          </div>

          <div className="admissions-reveal max-w-4xl">
            <AdmissionsFAQAccordion faqs={admissionsFaqData} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: INQUIRY FORM PROTOTYPE
          Client-side validated dossier submission with receipt demonstration
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="admissions-reveal max-w-3xl mb-12">
            <SectionHeading
              eyebrow="Candidate Registration"
              title="Begin Your Admissions Inquiry Dossier"
              description="Complete the confidential intake form below to receive our digital prospectus, syllabus breakdown, and priority assessment invitation."
            />
          </div>

          <div className="admissions-reveal max-w-4xl mx-auto">
            <AdmissionsInquiryForm />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL PROMINENT ADMISSIONS CTA
          High-impact callout in Deep Oxford Navy
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white border-b border-navy-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-850 rounded-micro text-xs text-brass-500 font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Office Oakridge
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Take the First Step Toward Scholastic Distinction.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our admissions registrars are available Monday through Friday to address your curricular inquiries and schedule accompanied family visits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-micro cursor-pointer text-base px-7 py-3.5 gap-2.5 tracking-wide bg-brass-500 text-white hover:bg-brass-600 active:bg-brass-700 shadow-sm focus-visible:ring-2 focus-visible:ring-brass-500"
            >
              <span>Submit Inquiry Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Button to="/contact" variant="outlineLight" size="lg">
              Book Private Campus Tour
            </Button>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>Direct Admissions Hotline: {schoolInfo.campus.admissionsPhone}</span>
            <span>•</span>
            <span>Email: {schoolInfo.campus.email}</span>
            <span>•</span>
            <span>Oakridge Campus, London SE1 8TY</span>
          </div>
        </div>
      </section>
    </div>
  );
}
