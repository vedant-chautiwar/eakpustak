import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Award,
  Shield,
  Compass,
  Heart,
  CheckCircle2,
  Sparkles,
  BookOpen,
  UserCheck,
} from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import TextLink from '../components/common/TextLink';
import ImageWithFallback from '../components/common/ImageWithFallback';
import AnimatedCounter from '../components/common/AnimatedCounter';

import {
  aboutHeroData,
  historyMilestones,
  visionMissionData,
  coreValuesData,
  illustrativeStatsData,
  leadershipData,
  campusVignettes,
} from '../data/aboutData';
import { schoolInfo } from '../data/schoolInfo';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Complete About Page for EAK International School
 * Editorial narrative architecture featuring founding history chronicle, vision/mission,
 * core values, Principal's formal letter, sample statistics, campus vignettes, and academic bridges.
 */
export default function AboutPage() {
  const containerRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const timelineLineRef = useRef(null);

  // GSAP ScrollTrigger orchestration with automatic cleanup and reduced-motion compliance
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    // 1. Coordinated Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const heroElements = containerRef.current.querySelectorAll('.hero-reveal');
    if (heroElements.length > 0) {
      tl.fromTo(
        heroElements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
        }
      );
    }

    const heroImages = containerRef.current.querySelectorAll('.hero-image-reveal');
    if (heroImages.length > 0) {
      tl.fromTo(
        heroImages,
        { opacity: 0, y: 32, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    }

    // 2. Timeline vertical progress connector line reveal
    if (timelineContainerRef.current && timelineLineRef.current) {
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineContainerRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }

    // 3. Section reveals on scroll
    const sections = containerRef.current.querySelectorAll('.about-reveal');
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

    // 4. Staggered reveal for timeline milestones & values
    const staggerGroups = containerRef.current.querySelectorAll('.about-stagger-parent');
    staggerGroups.forEach((parent) => {
      const items = parent.querySelectorAll('.about-stagger-child');
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
          SECTION 1: EDITORIAL HERO & CAMPUS DIPTYCH
          Asymmetric headline composition paired with architectural imagery
          ========================================================================= */}
      <section className="relative bg-chalk-50 border-b border-hairline py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-12 lg:mb-16">
            <div className="hero-reveal flex flex-wrap items-center gap-2.5">
              <Badge variant="brass">{aboutHeroData.eyebrow}</Badge>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                24-Acre Parkland Campus • London
              </span>
            </div>

            <h1 className="hero-reveal font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight leading-[1.08]">
              {aboutHeroData.title}
            </h1>

            <p className="hero-reveal text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
              {aboutHeroData.subtitle}
            </p>

            <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
              <Button to="/academics" variant="primary" size="lg" icon={ArrowRight}>
                Academic Continuum
              </Button>
              <Button to="/admissions" variant="outline" size="lg">
                Admissions Process
              </Button>
            </div>
          </div>

          {/* Architectural Image Diptych */}
          <div className="hero-image-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="relative rounded-micro overflow-hidden shadow-subtle group">
                <ImageWithFallback
                  src={aboutHeroData.imageMain}
                  alt={aboutHeroData.captionMain}
                  aspectRatio="aspect-[16/10]"
                  fallbackTitle="The Oakridge Quadrangle"
                  loading="eager"
                  className="transition-transform duration-700 group-hover:scale-103"
                />
                <div className="p-4 bg-white border-t border-hairline flex items-center justify-between text-xs text-slate-600">
                  <span className="italic">{aboutHeroData.captionMain}</span>
                  <Badge variant="navy">Central Campus</Badge>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="relative rounded-micro overflow-hidden shadow-subtle group">
                <ImageWithFallback
                  src={aboutHeroData.imageSecondary}
                  alt={aboutHeroData.captionSecondary}
                  aspectRatio="aspect-[4/3]"
                  fallbackTitle="Humanities Library"
                  className="transition-transform duration-700 group-hover:scale-103"
                />
                <div className="p-4 bg-white border-t border-hairline flex items-center justify-between text-xs text-slate-600">
                  <span className="italic">{aboutHeroData.captionSecondary}</span>
                  <Badge variant="brass">Est. 2004</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SCHOOL INTRODUCTION & FICTIONAL CHRONICLE
          Chronological milestone timeline detailing the evolution of EAK
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-reveal max-w-3xl mb-16">
            <SectionHeading
              eyebrow="Two Decades of Distinction"
              title="The Chronicle of EAK International School"
              description="A heritage forged by visionary academic trustees, sustained by passionate educators, and enriched by generations of inquiring scholars."
            />
          </div>

          {/* Timeline Sequence */}
          <div
            ref={timelineContainerRef}
            className="about-stagger-parent space-y-8 relative"
          >
            <div
              ref={timelineLineRef}
              className="hidden md:block absolute left-[47px] top-4 bottom-4 w-0.5 bg-hairline"
              aria-hidden="true"
            />
            {historyMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="about-stagger-child flex flex-col md:flex-row md:items-start gap-6 lg:gap-10 relative"
              >
                {/* Year Marker Badge */}
                <div className="w-24 shrink-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-950 text-white rounded-micro flex items-center justify-center font-mono text-sm font-bold border border-navy-850 shadow-xs z-10 shrink-0">
                    {milestone.year.slice(2)}
                  </div>
                  <span className="font-mono text-sm font-bold text-brass-600 hidden md:inline">
                    {milestone.year}
                  </span>
                </div>

                {/* Milestone Detail Card */}
                <div className="flex-1 bg-chalk-50 border border-hairline rounded-micro p-6 sm:p-8 hover:border-brass-500 transition-colors space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-brass-700 md:hidden">
                      {milestone.year}
                    </span>
                    <Badge variant="default" className="text-[10px]">
                      {milestone.tag}
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-950">
                    {milestone.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {milestone.narrative}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: VISION & MISSION
          High-contrast editorial callout highlighting educational commitments
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Vision Statement (5.5 Cols) */}
            <div className="about-reveal lg:col-span-6 bg-navy-950 text-white border border-navy-850 p-8 sm:p-12 rounded-micro space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />

              <div className="relative z-10 space-y-5">
                <Badge variant="brass">{visionMissionData.vision.title}</Badge>

                <blockquote className="font-serif text-2xl sm:text-3xl text-white italic leading-snug">
                  "{visionMissionData.vision.quote}"
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-navy-850">
                  {visionMissionData.vision.description}
                </p>
              </div>
            </div>

            {/* Right Column: Mission & Commitments (6.5 Cols) */}
            <div className="about-reveal lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                  Our Purpose
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-950 leading-tight">
                  {visionMissionData.mission.title}
                </h2>
              </div>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {visionMissionData.mission.statement}
              </p>

              <div className="pt-4 border-t border-hairline space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Four Institutional Commitments:
                </span>
                {visionMissionData.mission.commitments.map((comm, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{comm}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CORE VALUES (THE FOUR PILLARS)
          Structured 4-pillar grid with custom insignia and narrative depth
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-reveal max-w-3xl mb-16">
            <SectionHeading
              eyebrow="The Four Pillars of Character"
              title="Our Enduring Core Values"
              description="These four non-negotiable principles inform our classroom discourse, pastoral care, and institutional governance."
            />
          </div>

          <div className="about-stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValuesData.map((val, idx) => {
              const icons = [Compass, Shield, Heart, Award];
              const ValueIcon = icons[idx] || Compass;

              return (
                <div
                  key={idx}
                  className="about-stagger-child bg-chalk-50 p-8 border border-hairline rounded-micro hover:border-brass-500 hover:shadow-subtle transition-all duration-200 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-navy-950 text-brass-500 rounded-micro flex items-center justify-center border border-navy-850">
                      <ValueIcon className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="font-mono text-[11px] font-bold text-brass-700 uppercase tracking-wider block mb-1">
                        {val.tagline}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold text-navy-950">
                        {val.value}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hairline flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                    <span>Lived Daily</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: KEY STATISTICS (FICTIONAL ILLUSTRATIVE DATA)
          Prominent metric ribbon with unambiguous sample disclosure
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white border-b border-navy-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-reveal text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brass-500 block">
              Institutional Benchmarks
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              EAK at a Glance
            </h2>
            <p className="text-xs text-slate-400 italic">
              {illustrativeStatsData.disclaimer}
            </p>
          </div>

          <div className="about-stagger-parent grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {illustrativeStatsData.stats.map((item, idx) => (
              <div
                key={idx}
                className="about-stagger-child bg-navy-900 border border-navy-850 p-6 rounded-micro text-center space-y-1.5 hover:border-brass-500/70 transition-colors"
              >
                <AnimatedCounter
                  value={item.metric}
                  className="font-serif text-3xl sm:text-4xl font-bold text-brass-500 block"
                />
                <h3 className="font-serif text-sm font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {item.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRINCIPAL'S FORMAL ADDRESS & SENIOR LEADERSHIP
          Executive address letter, formal portrait, signature, and leadership list
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Letter Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
            {/* Portrait Frame (4.5 Cols) */}
            <div className="about-reveal lg:col-span-5">
              <div className="relative rounded-micro overflow-hidden shadow-subtle">
                <ImageWithFallback
                  src={leadershipData.principalLetter.image}
                  alt={leadershipData.principalLetter.author}
                  aspectRatio="aspect-[4/5]"
                  fallbackTitle={leadershipData.principalLetter.author}
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="p-4 bg-navy-950 text-white text-center">
                  <p className="font-serif font-bold text-sm tracking-wide">
                    {leadershipData.principalLetter.author}
                  </p>
                  <p className="text-[11px] text-brass-500 uppercase tracking-widest mt-0.5">
                    {leadershipData.principalLetter.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Comprehensive Address Copy (7.5 Cols) */}
            <div className="about-reveal lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                  Executive Address
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-950 leading-tight">
                  A Letter from the Head of School
                </h2>
              </div>

              {leadershipData.principalLetter.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-3xl font-bold italic text-navy-950 block tracking-tight">
                    {leadershipData.principalLetter.signature}
                  </span>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {leadershipData.principalLetter.credentials}
                  </p>
                </div>
                <Button to="/admissions" variant="accent" size="md" icon={ArrowRight}>
                  Explore Admissions
                </Button>
              </div>
            </div>
          </div>

          {/* Senior Leadership Team Directory */}
          <div className="about-reveal pt-12 border-t border-hairline">
            <div className="mb-10 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                Governance & Deans
              </span>
              <h3 className="font-serif text-2xl font-semibold text-navy-950">
                Senior Academic Leadership
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipData.seniorLeadershipTeam.map((leader, lIdx) => (
                <div
                  key={lIdx}
                  className="bg-chalk-50 border border-hairline rounded-micro p-6 space-y-2 hover:border-brass-500 transition-colors"
                >
                  <UserCheck className="w-5 h-5 text-brass-600 mb-2" />
                  <h4 className="font-serif text-base font-bold text-navy-950">
                    {leader.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-700">
                    {leader.role}
                  </p>
                  <p className="text-[11px] text-slate-500 italic">
                    {leader.credentials}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CAMPUS OVERVIEW & ARCHITECTURAL VIGNETTES
          4 Photographic plates highlighting key facilities and learning spaces
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Campus Environment"
              title="An Architectural Masterplan for Discovery"
              description="A protected 24-acre historic parkland sanctuary equipped with cutting-edge academic, scientific, and athletic facilities."
            />
            <Button to="/facilities" variant="outline" size="md" icon={ArrowRight}>
              Explore All Facilities
            </Button>
          </div>

          <div className="about-stagger-parent grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusVignettes.map((vig, idx) => (
              <div
                key={idx}
                className="about-stagger-child bg-white border border-hairline rounded-micro overflow-hidden shadow-subtle hover:border-brass-500 transition-colors group flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <ImageWithFallback
                    src={vig.image}
                    alt={vig.title}
                    aspectRatio="aspect-[16/10]"
                    fallbackTitle={vig.title}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant="navy">{vig.tag}</Badge>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-navy-950 group-hover:text-brass-700 transition-colors">
                    {vig.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {vig.desc}
                  </p>
                  <div className="pt-3 border-t border-hairline flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400">Oakridge Estate</span>
                    <TextLink to="/facilities" className="text-xs">
                      Tour Infrastructure
                    </TextLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: NAVIGATIONAL BRIDGES TO ADMISSIONS & ACADEMICS
          High-impact dual transition callout directing parents to next steps
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-navy-950 text-white border-b border-navy-850 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-reveal text-center max-w-3xl mx-auto space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-850 rounded-micro text-xs text-brass-500 font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Begin Your Exploration
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Where Rigorous Scholarship Meets Enduring Character.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Continue discovering what an EAK education offers by exploring our articulated academic framework or starting your child's admissions dossier.
            </p>
          </div>

          {/* Dual Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bridge to Academics */}
            <div className="bg-navy-900 border border-navy-850 p-8 rounded-micro space-y-4 hover:border-brass-500/70 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <BookOpen className="w-8 h-8 text-brass-500" />
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Curriculum & Academics
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Discover our four learning stages: Primary inquiry, Middle School analysis, Cambridge IGCSE examinations, and the International Baccalaureate Diploma.
                </p>
              </div>
              <div className="pt-4 border-t border-navy-850">
                <Button to="/academics" variant="outlineLight" size="md" icon={ArrowRight} className="w-full justify-center">
                  Review Academic Stages
                </Button>
              </div>
            </div>

            {/* Bridge to Admissions */}
            <div className="bg-navy-900 border border-navy-850 p-8 rounded-micro space-y-4 hover:border-brass-500/70 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <Shield className="w-8 h-8 text-brass-500" />
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Admissions Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Learn about our 5-step admissions sequence, age eligibility benchmarks, required documentation checklist, and priority intake deadlines.
                </p>
              </div>
              <div className="pt-4 border-t border-navy-850">
                <Button to="/admissions" variant="accent" size="md" icon={ArrowRight} className="w-full justify-center">
                  5-Step Admissions Process
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center text-xs text-slate-400">
            <span>Direct Admissions Consultation Hotline: {schoolInfo.campus.admissionsPhone}</span>
            <span className="mx-2">•</span>
            <span>Oakridge Campus: 42 Academy Boulevard, London</span>
          </div>
        </div>
      </section>
    </div>
  );
}
