import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Compass,
  Music,
  Trophy,
  Microscope,
  GraduationCap,
} from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import TextLink from '../components/common/TextLink';

import DivisionTabSwitcher from '../components/pages/academics/DivisionTabSwitcher';

import {
  academicsHeroData,
  curriculumOverviewData,
  academicDivisionsData,
  teachingMethodologyData,
  coCurricularData,
  academicAchievementsData,
} from '../data/academicsPageData';
import { schoolInfo } from '../data/schoolInfo';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Complete Academics Page for EAK International School
 * Rich editorial layout with dual continuum overview, accessible 4-stage division tabs,
 * pedagogical methodology pillars, co-curricular societies, and fictional achievements.
 */
export default function AcademicsPage() {
  const containerRef = useRef(null);

  // GSAP ScrollTrigger animations with cleanup & reduced-motion support
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    // 1. Hero text reveal
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

    // 2. Section reveals
    const sections = containerRef.current.querySelectorAll('.academics-reveal');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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

    // 3. Staggered reveal for cards & methodology
    const staggerGroups = containerRef.current.querySelectorAll('.academics-stagger-parent');
    staggerGroups.forEach((parent) => {
      const items = parent.querySelectorAll('.academics-stagger-child');
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 82%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-chalk-50 text-slate-800">
      {/* =========================================================================
          SECTION 1: EDITORIAL HERO
          Curricular architecture headline, Cambridge/IB badges, and jump anchors
          ========================================================================= */}
      <section className="relative bg-chalk-50 border-b border-hairline py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="hero-reveal flex flex-wrap items-center gap-2.5">
              <Badge variant="brass">{academicsHeroData.eyebrow}</Badge>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Ages 3–18 • Early Years to Grade 12
              </span>
            </div>

            <h1 className="hero-reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight leading-[1.08]">
              {academicsHeroData.title}
            </h1>

            <p className="hero-reveal text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
              {academicsHeroData.subtitle}
            </p>

            {/* Quick Navigation Anchors */}
            <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#four-divisions"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-micro cursor-pointer text-sm px-6 py-3.5 gap-2 tracking-wide bg-navy-950 text-white hover:bg-navy-850 active:bg-navy-900 shadow-sm focus-visible:ring-2 focus-visible:ring-brass-500 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore the 4 Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#methodology"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-micro cursor-pointer text-sm px-6 py-3.5 gap-2 tracking-wide bg-transparent text-navy-950 border border-navy-950 hover:bg-navy-950 hover:text-white focus-visible:ring-2 focus-visible:ring-brass-500 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Teaching Methodology</span>
              </a>

              <Button to="/admissions" variant="accent" size="lg">
                Admissions Criteria
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CURRICULUM OVERVIEW
          The Dual Continuum: Cambridge Depth + IB Breadth
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="academics-reveal max-w-3xl mb-16 space-y-4">
            <SectionHeading
              eyebrow="The Continuum Architecture"
              title="A Unified Dual-Curriculum Philosophy"
              description="Why choose between the world's two most esteemed educational frameworks when an institution can integrate both seamlessly?"
            />
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
              {curriculumOverviewData.philosophy}
            </p>
          </div>

          {/* Continuum Pillars */}
          <div className="academics-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumOverviewData.pillars.map((pil, idx) => (
              <div
                key={idx}
                className="academics-stagger-child bg-chalk-50 border border-hairline rounded-micro p-6 sm:p-7 flex flex-col justify-between hover:border-brass-500 transition-colors space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brass-600">
                      STAGE 0{idx + 1}
                    </span>
                    <Badge variant="navy" className="text-[10px]">
                      {pil.stage}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-950 leading-snug">
                    {pil.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-hairline flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                  <span>Articulated Transition</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE FOUR EDUCATIONAL DIVISIONS (ACCESSIBLE TAB SWITCHER)
          Deep-dives for Primary, Middle, Secondary (IGCSE), Senior Secondary (IB DP)
          ========================================================================= */}
      <section id="four-divisions" className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="academics-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Divisional Structure"
              title="Four Developmental Stages of Scholarship"
              description="Select a division below to inspect grade levels, faculty mentorship ratios, core subjects, and learning environments."
            />
            <div className="shrink-0">
              <Badge variant="brass">Cambridge & IB Continuum</Badge>
            </div>
          </div>

          <div className="academics-reveal">
            <DivisionTabSwitcher divisions={academicDivisionsData} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TEACHING METHODOLOGY
          4 Pedagogical Pillars: Socratic, Laboratory, Interdisciplinary, Mentorship
          ========================================================================= */}
      <section id="methodology" className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="academics-reveal max-w-3xl mb-16">
            <SectionHeading
              eyebrow="Pedagogical Principles"
              title="How Scholars Learn at EAK"
              description="We reject passive memorization. Our teaching methodology cultivates independent inquiry, empirical validation, and intellectual courage."
            />
          </div>

          <div className="academics-stagger-parent grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachingMethodologyData.map((meth, idx) => (
              <div
                key={idx}
                className="academics-stagger-child bg-chalk-50 border border-hairline rounded-micro p-8 space-y-4 hover:border-brass-500 hover:shadow-subtle transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brass-600 tracking-wider">
                      PILLAR {meth.number}
                    </span>
                    <Badge variant="default" className="text-[10px]">
                      {meth.subtitle}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-navy-950">
                    {meth.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {meth.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Microscope className="w-3.5 h-3.5 text-brass-600" />
                    <span>Applied Across All Divisions</span>
                  </span>
                  <span className="font-mono text-navy-950 font-bold">1:12 Faculty Ratio</span>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Profile Callout */}
          <div className="mt-12 p-8 bg-navy-950 text-white rounded-micro border border-navy-850 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <Badge variant="brass">Faculty Excellence</Badge>
              <h4 className="font-serif text-2xl font-semibold">
                Taught by International Subject Specialists
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Over 78% of our secondary and IB faculty hold Master's or Doctoral degrees from leading world institutions. All teachers undergo continuous professional development with Cambridge Assessment and the International Baccalaureate Organization.
              </p>
            </div>
            <Button to="/contact" variant="outlineLight" size="md" className="shrink-0">
              Meet Our Academic Leadership
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CO-CURRICULAR ENRICHMENT
          Scholastic societies, Performing & Visual Arts, Athletics
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="academics-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Beyond the Classroom"
              title="Co-Curricular Societies & Enrichment"
              description="Intellectual, creative, and physical mastery flourish in over 45 co-curricular clubs, athletic squads, and performing arts ensembles."
            />
            <Button to="/facilities" variant="outline" size="md" icon={ArrowRight}>
              View Arts & Athletic Facilities
            </Button>
          </div>

          <div className="academics-stagger-parent grid grid-cols-1 md:grid-cols-3 gap-8">
            {coCurricularData.map((stream, idx) => {
              const icons = [Compass, Music, Trophy];
              const StreamIcon = icons[idx] || Compass;

              return (
                <div
                  key={idx}
                  className="academics-stagger-child bg-white border border-hairline rounded-micro p-8 flex flex-col justify-between hover:border-brass-500 transition-colors space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-navy-950 text-brass-500 rounded-micro flex items-center justify-center border border-navy-850">
                      <StreamIcon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-semibold text-navy-950">
                        {stream.category}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {stream.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-hairline space-y-2.5">
                      {stream.activities.map((act, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-hairline text-xs font-semibold text-brass-700">
                    Integrated Michaelmas & Lent Terms
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ACADEMIC ACHIEVEMENTS & UNIVERSITY MATRICULATION
          Fictional illustrative accolades, IB score benchmarks, and university offers
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="academics-reveal text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="brass">Academic Distinctions</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-950">
              Scholastic Outcomes & Global Accolades
            </h2>
            <p className="text-xs text-slate-400 italic">
              {academicAchievementsData.disclaimer}
            </p>
          </div>

          {/* Metric Counter Ribbon */}
          <div className="academics-stagger-parent grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {academicAchievementsData.keyMetrics.map((met, idx) => (
              <div
                key={idx}
                className="academics-stagger-child bg-chalk-50 border border-hairline rounded-micro p-7 text-center space-y-1.5 hover:border-brass-500 transition-colors"
              >
                <Award className="w-5 h-5 text-brass-600 mx-auto mb-2" />
                <p className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 tracking-tight">
                  {met.metric}
                </p>
                <h3 className="font-serif text-sm font-semibold text-navy-950">
                  {met.label}
                </h3>
                <p className="text-[11px] text-slate-500 font-mono">
                  {met.benchmark}
                </p>
              </div>
            ))}
          </div>

          {/* Notable Fictional Accolades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicAchievementsData.notableAccolades.map((acc, idx) => (
              <div
                key={idx}
                className="academics-reveal bg-chalk-50 border border-hairline rounded-micro p-6 sm:p-7 space-y-2 hover:border-brass-500 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="navy">{acc.year}</Badge>
                  <span className="font-mono text-[11px] text-brass-700 font-bold uppercase tracking-wider">
                    Official Distinction
                  </span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-navy-950">
                  {acc.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {acc.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Matriculation Destinations Pill Grid */}
          <div className="mt-16 p-8 bg-chalk-100 border border-hairline rounded-micro space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brass-600" />
                <span className="font-serif text-lg font-bold text-navy-950">
                  Recent Graduate Matriculation Destinations
                </span>
              </div>
              <span className="text-xs text-slate-500">Class of 2024 & 2025</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "University of Oxford",
                "University of Cambridge",
                "Imperial College London",
                "London School of Economics (LSE)",
                "University College London (UCL)",
                "Harvard University",
                "Princeton University",
                "Stanford University",
                "Columbia University",
                "Yale University",
                "ETH Zürich",
                "Sciences Po Paris",
                "University of Toronto",
                "McGill University",
              ].map((uni) => (
                <span
                  key={uni}
                  className="px-3 py-1.5 bg-white border border-hairline text-slate-800 text-xs font-semibold rounded-micro shadow-2xs"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: NAVIGATIONAL BRIDGES TO FACILITIES & ADMISSIONS
          High-impact dual action callout
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-navy-950 text-white border-b border-navy-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="academics-reveal text-center max-w-3xl mx-auto space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-850 rounded-micro text-xs text-brass-500 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Academic Consultation
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Prepare Your Child for Global Scholastic Distinction.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore the physical environments where our curriculum comes to life, or consult with our admissions team regarding division placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bridge to Facilities */}
            <div className="bg-navy-900 border border-navy-850 p-8 rounded-micro space-y-4 hover:border-brass-500/70 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <BookOpen className="w-8 h-8 text-brass-500" />
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Campus Facilities
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Inspect our 6 specialized biotechnology laboratories, Radcliffe Learning Commons, smart classrooms, and Olympic aquatics pavilion.
                </p>
              </div>
              <div className="pt-4 border-t border-navy-850">
                <Button to="/facilities" variant="outlineLight" size="md" icon={ArrowRight} className="w-full justify-center">
                  Explore Learning Spaces
                </Button>
              </div>
            </div>

            {/* Bridge to Admissions */}
            <div className="bg-navy-900 border border-navy-850 p-8 rounded-micro space-y-4 hover:border-brass-500/70 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <GraduationCap className="w-8 h-8 text-brass-500" />
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Admissions Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Review age benchmarks, the 5-step admissions sequence, required documents checklist, and submit your candidate inquiry dossier.
                </p>
              </div>
              <div className="pt-4 border-t border-navy-850">
                <Button to="/admissions" variant="accent" size="md" icon={ArrowRight} className="w-full justify-center">
                  Review Admissions Criteria
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center text-xs text-slate-400">
            <span>Direct Academic Inquiries: {schoolInfo.campus.email}</span>
            <span className="mx-2">•</span>
            <span>Admissions Desk: {schoolInfo.campus.admissionsPhone}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
