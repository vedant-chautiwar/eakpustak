import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowRight,
  Award,
  Clock,
  MapPin,
  Quote,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import TextLink from '../components/common/TextLink';
import ImageWithFallback from '../components/common/ImageWithFallback';
import TiltedCard from '../components/common/TiltedCard';
import AnimatedCounter from '../components/common/AnimatedCounter';

import {
  heroData,
  whyChooseUsData,
  aboutSnippetData,
  academicStagesData,
  facilitiesData,
  achievementsData,
  principalMessageData,
  latestNewsData,
  upcomingEventsData,
  testimonialsData,
} from '../data/homeData';
import { schoolInfo } from '../data/schoolInfo';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Complete Home Page for EAK International School
 * Fully compliant with PRD requirements, approved editorial academic design system,
 * and restrained GSAP ScrollTrigger orchestration.
 */
export default function HomePage() {
  const containerRef = useRef(null);

  // Hero refs for coordinated timeline
  const heroBadgeRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroCtasRef = useRef(null);
  const heroStatsRef = useRef(null);
  const heroImageRef = useRef(null);

  // GSAP animations with automatic lifecycle cleanup and reduced-motion compliance
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    // 1. Coordinated Hero Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    if (heroBadgeRef.current) {
      tl.from(heroBadgeRef.current, { opacity: 0, y: 16, duration: 0.5 });
    }
    if (heroHeadlineRef.current) {
      tl.from(heroHeadlineRef.current, { opacity: 0, y: 24, duration: 0.65 }, '-=0.25');
    }
    if (heroTextRef.current) {
      tl.from(heroTextRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.35');
    }
    if (heroCtasRef.current) {
      tl.from(heroCtasRef.current, { opacity: 0, y: 16, duration: 0.5 }, '-=0.3');
    }
    if (heroStatsRef.current) {
      tl.from(heroStatsRef.current, { opacity: 0, y: 16, duration: 0.5 }, '-=0.2');
    }
    if (heroImageRef.current) {
      tl.from(heroImageRef.current, { opacity: 0, scale: 0.97, duration: 0.8 }, '-=0.7');
    }

    // 2. ScrollTrigger reveals for sections
    const revealSections = containerRef.current.querySelectorAll('.scroll-reveal');
    revealSections.forEach((sec) => {
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

    // 3. Staggered reveal for cards
    const staggerContainers = containerRef.current.querySelectorAll('.stagger-parent');
    staggerContainers.forEach((parent) => {
      const items = parent.querySelectorAll('.stagger-child');
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
          SECTION 1: HERO
          Asymmetrical composition with typography, metrics ticker, and framed photo
          ========================================================================= */}
      <section className="relative bg-chalk-50 border-b border-hairline py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Copy & Actions (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div ref={heroBadgeRef} className="flex flex-wrap items-center gap-2.5">
                <Badge variant="brass">{heroData.badge}</Badge>
                <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">
                  Ages 3–18 • Day & Boarding
                </span>
              </div>

              <h1
                ref={heroHeadlineRef}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy-950 tracking-tight leading-[1.08]"
              >
                {heroData.headline}
              </h1>

              <p
                ref={heroTextRef}
                className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl"
              >
                {heroData.subheadline}
              </p>

              {/* Action Buttons */}
              <div ref={heroCtasRef} className="flex flex-wrap items-center gap-4 pt-2">
                <Button to={heroData.primaryCta.to} variant="accent" size="lg" icon={ArrowRight}>
                  {heroData.primaryCta.label}
                </Button>
                <Button to={heroData.secondaryCta.to} variant="outline" size="lg">
                  {heroData.secondaryCta.label}
                </Button>
              </div>

              {/* Institutional Metrics Ticker */}
              <div
                ref={heroStatsRef}
                className="pt-8 border-t border-hairline grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {schoolInfo.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <AnimatedCounter
                      value={stat.value}
                      className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 block"
                    />
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Visual Plate (5 Cols) */}
            <div ref={heroImageRef} className="lg:col-span-5">
              <div className="relative rounded-micro overflow-hidden shadow-subtle group">
                <ImageWithFallback
                  src={heroData.image}
                  alt={heroData.imageCaption}
                  aspectRatio="aspect-[4/5]"
                  fallbackTitle="Oakridge Central Quadrangle"
                  loading="eager"
                  className="transition-transform duration-700 ease-out group-hover:scale-103"
                />
                {/* Architectural Caption Plate */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/70 to-transparent p-6 text-white z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brass-500 block mb-1">
                    Oakridge Campus
                  </span>
                  <p className="font-serif text-base font-semibold leading-snug">
                    {heroData.imageCaption}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    24 acres of dedicated laboratories, parkland, and historic halls in London.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY CHOOSE US
          6 Meaningful school differentiators in a structured editorial grid
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal">
            <SectionHeading
              eyebrow="Distinctive Excellence"
              title="Why Discerning Families Choose EAK"
              description="A purposeful synthesis of academic rigor, individualized mentorship, and global character preparation."
              align="center"
              className="mb-16"
            />
          </div>

          <div className="stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUsData.map((item, idx) => (
              <TiltedCard
                key={idx}
                scaleOnHover={1.02}
                rotateAmplitude={6}
                showTooltip={false}
                showMobileWarning={false}
                className="stagger-child h-full bg-chalk-50 p-8 border border-hairline rounded-micro flex flex-col justify-between"
                innerClassName="flex flex-col justify-between w-full h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brass-600 tracking-wider">
                      {item.number}
                    </span>
                    <Badge variant="default" className="text-[10px]">
                      {item.tag}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-hairline flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700" />
                  <span>Institutional Standard</span>
                </div>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ABOUT THE SCHOOL
          Split composition: narrative storytelling + photo vignette + key statistics
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Photographic Vignette (5.5 Cols) */}
            <div className="scroll-reveal order-2 lg:order-1 lg:col-span-5 group">
              <div className="relative rounded-micro overflow-hidden shadow-subtle">
                <ImageWithFallback
                  src={aboutSnippetData.image}
                  alt={aboutSnippetData.caption}
                  aspectRatio="aspect-[4/3]"
                  fallbackTitle="Radcliffe Humanities Pavilion"
                  className="transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="p-4 bg-white border-t border-hairline flex items-center justify-between text-xs text-slate-600">
                  <span className="italic">{aboutSnippetData.caption}</span>
                  <Badge variant="navy">London Campus</Badge>
                </div>
              </div>
            </div>

            {/* Right Narrative (6.5 Cols) */}
            <div className="scroll-reveal order-1 lg:order-2 lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="brass">Est. 2004</Badge>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {aboutSnippetData.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-950 tracking-tight leading-tight">
                {aboutSnippetData.title}
              </h2>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {aboutSnippetData.leadText}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {aboutSnippetData.bodyText}
              </p>

              {/* Statistics Snippet */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-hairline">
                {aboutSnippetData.statsSnippet.map((st, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <p className="font-serif text-2xl font-bold text-navy-950">
                      {st.value}
                    </p>
                    <p className="text-xs text-slate-500 leading-tight">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <TextLink to={aboutSnippetData.cta.to} variant="default" className="text-sm font-bold">
                  {aboutSnippetData.cta.label}
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ACADEMIC EXCELLENCE
          Detailed 4-stage continuum (Primary, Middle, Secondary, Senior Secondary)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Pedagogical Architecture"
              title="A Continuum of Academic Excellence"
              description="From foundational Early Years inquiry through the internationally acclaimed Cambridge IGCSE and IB Diploma qualifications."
            />
            <Button to="/academics" variant="outline" size="md" icon={ArrowRight}>
              Explore Full Syllabi
            </Button>
          </div>

          <div className="stagger-parent grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicStagesData.map((stage) => (
              <TiltedCard
                key={stage.id}
                scaleOnHover={1.02}
                rotateAmplitude={6}
                showTooltip={false}
                showMobileWarning={false}
                className="stagger-child h-full bg-chalk-50 p-8 border border-hairline rounded-micro flex flex-col justify-between space-y-6"
                innerClassName="flex flex-col justify-between w-full h-full space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="brass">{stage.accent}</Badge>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {stage.ages}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-navy-950">
                      {stage.division}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1 font-mono">
                      {stage.grades}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stage.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-hairline space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy-950 block">
                    Curriculum Pillars:
                  </span>
                  {stage.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SCHOOL FACILITIES
          Masonry/asymmetric showcase covering labs, library, pool, smart rooms, etc.
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Purpose-Built Infrastructure"
              title="Spaces Engineered for Intellectual & Athletic Flourishing"
              description="Our 24-acre parkland campus combines collegiate architectural tradition with cutting-edge scientific and artistic infrastructure."
            />
            <Button to="/facilities" variant="primary" size="md" icon={ArrowRight}>
              View All Facilities
            </Button>
          </div>

          <div className="stagger-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.map((fac, idx) => (
              <TiltedCard
                key={idx}
                scaleOnHover={1.02}
                rotateAmplitude={6}
                showTooltip={false}
                showMobileWarning={false}
                className="stagger-child h-full bg-white border border-hairline rounded-micro overflow-hidden flex flex-col"
                innerClassName="flex flex-col w-full h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={fac.image}
                    alt={fac.title}
                    aspectRatio="aspect-[16/10]"
                    fallbackTitle={fac.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant="navy">{fac.badge}</Badge>
                  </div>
                </div>
                <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brass-600 block mb-1">
                      {fac.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy-950">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {fac.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-hairline flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-400 text-[11px]">Oakridge Campus</span>
                    <TextLink to="/facilities" className="text-xs">Inspect Space</TextLink>
                  </div>
                </div>
              </TiltedCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: ACHIEVEMENTS & DISTINCTIONS
          Sample fictional milestones and metrics in an editorial showcase
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white border-b border-navy-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brass-500 block">
              Sample Fictional Institutional Milestones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
              Demonstrated Scholastic & Athletic Distinctions
            </h2>
            <p className="text-sm text-slate-300">
              Benchmarked against leading independent schools in the United Kingdom and globally.
            </p>
          </div>

          <div className="stagger-parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementsData.map((ach, idx) => (
              <div
                key={idx}
                className="stagger-child bg-navy-900 border border-navy-850 p-8 rounded-micro text-center space-y-2 hover:border-brass-500/60 transition-colors"
              >
                <Award className="w-6 h-6 text-brass-500 mx-auto mb-2" />
                <AnimatedCounter
                  value={ach.metric}
                  className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight block"
                />
                <h3 className="font-serif text-base font-semibold text-stone-200">
                  {ach.label}
                </h3>
                <p className="text-xs text-slate-400">
                  {ach.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PRINCIPAL'S WELCOME
          Executive portrait, formal leadership letter, signature, and credentials
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait Frame (4.5 Cols) */}
            <div className="scroll-reveal lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-micro overflow-hidden shadow-subtle">
                <ImageWithFallback
                  src={principalMessageData.image}
                  alt={principalMessageData.author}
                  aspectRatio="aspect-[4/5]"
                  fallbackTitle={principalMessageData.author}
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="p-4 bg-navy-950 text-white text-center">
                  <p className="font-serif font-bold text-sm tracking-wide">
                    {principalMessageData.author}
                  </p>
                  <p className="text-[11px] text-brass-500 uppercase tracking-widest mt-0.5">
                    {principalMessageData.titleRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Letter Copy (7.5 Cols) */}
            <div className="scroll-reveal lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="brass">{principalMessageData.eyebrow}</Badge>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Head of School Welcome
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-950 tracking-tight leading-snug">
                {principalMessageData.title}
              </h2>

              <blockquote className="relative pl-6 border-l-2 border-brass-500 font-serif text-lg sm:text-xl text-navy-950 italic leading-relaxed">
                "{principalMessageData.quote}"
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {principalMessageData.body}
              </p>

              <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-2xl font-bold italic text-navy-950 block tracking-tight">
                    {principalMessageData.signatureText}
                  </span>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {principalMessageData.credentials}
                  </p>
                </div>
                <Button to="/about" variant="outline" size="md" icon={ArrowRight}>
                  Read Leadership Vision
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 & 9: LATEST NEWS / NOTICES & UPCOMING EVENTS
          Dual-column split layout for real-time school awareness
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-chalk-50 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Latest Notices & Circulars (7 Cols) */}
            <div className="scroll-reveal lg:col-span-7 space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                    Academic Notices
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-950">
                    Latest Circulars & Updates
                  </h2>
                </div>
                <TextLink to="/events-notices" className="text-xs font-bold">
                  View All Notices
                </TextLink>
              </div>

              <div className="space-y-4">
                {latestNewsData.map((notice) => (
                  <div
                    key={notice.id}
                    className="bg-white p-6 border border-hairline rounded-micro hover:border-brass-500 transition-colors space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-500 font-semibold">
                        {notice.ref}
                      </span>
                      <div className="flex items-center gap-2">
                        {notice.urgent && <Badge variant="crimson">Urgent Action</Badge>}
                        <Badge variant="navy">{notice.category}</Badge>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-navy-950 hover:text-brass-700 transition-colors leading-snug">
                      <Link to="/events-notices">{notice.title}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {notice.summary}
                    </p>

                    <div className="pt-2 border-t border-hairline flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-brass-600" />
                        <span>{notice.date}</span>
                      </span>
                      <Link
                        to="/events-notices"
                        className="text-navy-950 hover:text-brass-600 font-semibold inline-flex items-center gap-1"
                      >
                        Read Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Upcoming Events (5 Cols) */}
            <div className="scroll-reveal lg:col-span-5 space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-hairline">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-1">
                    Term Calendar
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-950">
                    Upcoming Events
                  </h2>
                </div>
                <TextLink to="/events-notices" className="text-xs font-bold">
                  Full Calendar
                </TextLink>
              </div>

              <div className="space-y-4">
                {upcomingEventsData.map((ev) => (
                  <div
                    key={ev.id}
                    className="bg-white p-5 border border-hairline rounded-micro hover:border-brass-500 transition-colors flex items-start gap-4"
                  >
                    {/* Date Block */}
                    <div className="w-14 h-14 bg-navy-950 text-white rounded-micro flex flex-col items-center justify-center shrink-0 border border-navy-850">
                      <span className="font-mono text-xs text-brass-500 font-bold uppercase">
                        {ev.dateMonth}
                      </span>
                      <span className="font-serif text-xl font-bold leading-none">
                        {ev.dateDay}
                      </span>
                    </div>

                    {/* Event Detail */}
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h3 className="font-serif text-base font-semibold text-navy-950 leading-snug">
                        {ev.title}
                      </h3>
                      <p className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-brass-600 shrink-0" />
                        <span>{ev.time}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-xs text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-brass-600 shrink-0" />
                        <span className="truncate">{ev.location}</span>
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-brass-700 bg-brass-100/70 px-2 py-0.5 rounded-micro mt-1">
                        {ev.audience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Open Day Callout Box */}
              <div className="p-6 bg-navy-950 text-white rounded-micro border border-navy-850 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brass-500 block">
                  Next Campus Open Morning
                </span>
                <h3 className="font-serif text-lg font-semibold">
                  Reserve a Guided Family Tour for 2026 Entry
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Meet our Head of School, Divisional Deans, and current student prefects for an intimate campus walkthrough.
                </p>
                <Button to="/contact" variant="accent" size="sm" icon={ArrowRight} className="w-full justify-center">
                  Register for Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TESTIMONIALS
          Parent, scholar, and alumni perspectives presented as sample content
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-16 space-y-2">
            <Badge variant="brass">Voices of the Community</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-950">
              Reflections on an EAK Education
            </h2>
            <p className="text-xs text-slate-400 italic">
              Sample fictional parent and student perspectives for frontend evaluation.
            </p>
          </div>

          <div className="stagger-parent grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="stagger-child bg-chalk-50 p-8 border border-hairline rounded-micro flex flex-col justify-between hover:border-brass-500 transition-colors space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-brass-500 opacity-70" />
                  <p className="font-serif text-base text-navy-950 italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline space-y-1">
                  <p className="font-sans font-bold text-sm text-navy-950">
                    {test.author}
                  </p>
                  <p className="text-xs text-brass-700 font-semibold">
                    {test.relation}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    {test.cohort}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: PROMINENT ADMISSIONS CTA
          High-impact callout in Deep Oxford Navy with dual actions
          ========================================================================= */}
      <section className="py-20 lg:py-24 bg-navy-950 text-white border-b border-navy-850 relative overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-900 border border-navy-800 rounded-micro text-xs text-brass-500 font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open for Academic Year 2026–2027
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Begin Your Scholar's Academic Journey with EAK.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Applications are accepted on a rolling basis across Early Years, Primary, Middle School, Cambridge IGCSE, and the IB Diploma Programme.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/admissions" variant="accent" size="lg" icon={ArrowRight}>
              Explore 5-Step Admissions Process
            </Button>
            <Button to="/contact" variant="outlineLight" size="lg">
              Book Private Campus Tour
            </Button>
          </div>

          <div className="pt-6 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>Direct Admissions Hotline: {schoolInfo.campus.admissionsPhone}</span>
            <span>•</span>
            <span>Email: {schoolInfo.campus.email}</span>
            <span>•</span>
            <span>London Campus: Mon–Fri 08:00–17:00</span>
          </div>
        </div>
      </section>
    </div>
  );
}
