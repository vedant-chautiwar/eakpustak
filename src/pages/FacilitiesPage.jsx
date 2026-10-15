import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Check, MapPin, Phone, Calendar } from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import SectionHeading from '../components/common/SectionHeading';
import ImageWithFallback from '../components/common/ImageWithFallback';
import TiltedCard from '../components/common/TiltedCard';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { facilitiesHero, facilitiesData, facilitiesCTAData } from '../data/facilitiesData';

// Register once at module level
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────────────────────
   GSAP per-section reveal helper
   Runs inside the page's useGSAP scope so cleanup is automatic.
───────────────────────────────────────────────────────────────────────── */
function registerReveal(container, selector, options = {}) {
  const els = container.querySelectorAll(selector);
  if (!els.length) return;
  gsap.fromTo(
    els,
    { opacity: 0, y: options.y ?? 36 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.75,
      stagger: options.stagger ?? 0.1,
      ease: options.ease ?? 'power2.out',
      scrollTrigger: {
        trigger: options.trigger ?? els[0],
        start: options.start ?? 'top 85%',
        once: true,
      },
    }
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   LAYOUT VARIANTS
───────────────────────────────────────────────────────────────────────── */

/**
 * SPLIT layout — image + copy side-by-side, direction toggled by `imageRight`.
 */
function SplitLayout({ facility, imageRight }) {
  const ref = useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !ref.current) return;
    registerReveal(ref.current, '.split-img', { y: 40, duration: 0.9 });
    registerReveal(ref.current, '.split-copy > *', {
      stagger: 0.09,
      y: 24,
      trigger: ref.current,
      start: 'top 82%',
    });
  }, { scope: ref });

  const imgData = facility.image || (facility.images && facility.images[0]);

  const imagePanel = (
    <TiltedCard
      imageSrc={imgData?.src}
      altText={imgData?.alt || facility.name}
      captionText={`${facility.name} • ${facility.category}`}
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      scaleOnHover={1.02}
      rotateAmplitude={6}
      showTooltip={true}
      showMobileWarning={false}
      displayOverlayContent={true}
      overlayContent={
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <Badge variant={facility.categoryVariant}>{facility.category}</Badge>
        </div>
      }
      className="split-img aspect-[4/3] rounded-micro overflow-hidden shadow-subtle"
    />
  );

  const copyPanel = (
    <div className="split-copy flex flex-col justify-center space-y-5">
      <div>
        <Badge variant={facility.categoryVariant} className="mb-4">
          {facility.category}
        </Badge>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950 leading-snug mb-4">
          {facility.headline}
        </h2>
        <p className="text-slate-600 leading-relaxed">{facility.body}</p>
      </div>

      {/* Spec list */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
        {facility.specs.map((spec) => (
          <li key={spec} className="flex items-start gap-2 text-sm text-slate-700">
            <Check
              className="w-3.5 h-3.5 text-brass-600 mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span>{spec}</span>
          </li>
        ))}
      </ul>

      {/* Disclaimer */}
      <p className="text-[11px] text-slate-400 italic">{facility.note}</p>
    </div>
  );

  return (
    <section
      ref={ref}
      id={facility.id}
      aria-labelledby={`${facility.id}-heading`}
      className="py-20 border-b border-hairline scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {imageRight ? (
            <>
              <div className="order-1">{copyPanel}</div>
              <div className="order-2">{imagePanel}</div>
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">{imagePanel}</div>
              <div className="order-1 lg:order-2">{copyPanel}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * MOSAIC layout — copy on top, two images side by side below.
 */
function MosaicLayout({ facility }) {
  const ref = useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !ref.current) return;
    registerReveal(ref.current, '.mosaic-copy > *', {
      stagger: 0.09,
      y: 24,
      trigger: ref.current,
      start: 'top 82%',
    });
    registerReveal(ref.current, '.mosaic-img', {
      y: 44,
      stagger: 0.14,
      duration: 0.85,
      trigger: ref.current,
      start: 'top 80%',
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      id={facility.id}
      aria-labelledby={`${facility.id}-heading`}
      className="py-20 bg-chalk-50 border-b border-hairline scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Copy row */}
        <div className="mosaic-copy grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className="space-y-4">
            <Badge variant={facility.categoryVariant}>{facility.category}</Badge>
            <h2
              id={`${facility.id}-heading`}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950 leading-snug"
            >
              {facility.headline}
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">{facility.body}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {facility.specs.map((spec) => (
                <li key={spec} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check
                    className="w-3.5 h-3.5 text-brass-600 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-400 italic">{facility.note}</p>
          </div>
        </div>

        {/* Two-image mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(facility.images || []).map((img, i) => (
            <div
              key={i}
              className={`mosaic-img overflow-hidden rounded-micro ${
                i === 0 ? 'sm:mt-0' : 'sm:mt-8'
              }`}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                aspectRatio={i === 0 ? 'aspect-[5/4]' : 'aspect-[4/3]'}
                fallbackTitle={facility.name}
                loading="lazy"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Self-contained image for the full-bleed layout.
 * Uses a plain <img> so it fills an absolute-positioned parent without
 * the aspect-ratio wrapper added by ImageWithFallback.
 */
function FullBleedImage({ src, alt, fallbackTitle }) {
  const [hasError, setHasError] = React.useState(false);
  if (hasError || !src) {
    return (
      <div className="absolute inset-0 bg-navy-900 flex items-center justify-center">
        <span className="font-serif text-slate-400 text-sm">{fallbackTitle}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

/**
 * FULL-BLEED layout — wide cinematic image with overlaid headline and specs.
 * Used for the Auditorium — the most dramatically lit space.
 */
function FullBleedLayout({ facility }) {
  const ref = useRef(null);
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !ref.current) return;
    registerReveal(ref.current, '.fb-content > *', {
      stagger: 0.1,
      y: 28,
      trigger: ref.current,
      start: 'top 80%',
    });
    // Subtle Ken Burns on the image
    const img = ref.current.querySelector('.fb-image');
    if (img) {
      gsap.fromTo(
        img,
        { scale: 1.06 },
        {
          scale: 1,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        }
      );
    }
  }, { scope: ref });

  return (
    <section
      ref={ref}
      id={facility.id}
      aria-labelledby={`${facility.id}-heading`}
      className="relative overflow-hidden border-b border-hairline scroll-mt-24"
    >
      {/* Full-bleed image */}
      <div className="fb-image w-full h-[70vh] sm:h-[80vh] relative overflow-hidden">
        <FullBleedImage src={facility.image.src} alt={facility.image.alt} fallbackTitle={facility.name} />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(11,19,37,0.92) 0%, rgba(11,19,37,0.55) 50%, rgba(11,19,37,0.15) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Overlaid content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
            <div className="fb-content grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
              {/* Left — title */}
              <div className="space-y-4">
                <Badge variant={facility.categoryVariant}>{facility.category}</Badge>
                <h2
                  id={`${facility.id}-heading`}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight"
                >
                  {facility.headline}
                </h2>
              </div>
              {/* Right — body + specs */}
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{facility.body}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {facility.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-sm text-slate-200">
                      <Check
                        className="w-3.5 h-3.5 text-brass-500 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-500 italic">{facility.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   LAYOUT DISPATCHER
───────────────────────────────────────────────────────────────────────── */
function FacilitySection({ facility }) {
  switch (facility.layout) {
    case 'split-right':
      return <SplitLayout facility={facility} imageRight={true} />;
    case 'split-left':
      return <SplitLayout facility={facility} imageRight={false} />;
    case 'mosaic':
      return <MosaicLayout facility={facility} />;
    case 'full-bleed':
      return <FullBleedLayout facility={facility} />;
    default:
      return <SplitLayout facility={facility} imageRight={true} />;
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────────────── */
export default function FacilitiesPage() {
  const heroRef = useRef(null);

  // Hero entrance — stagger headline, body, CTAs, stats
  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !heroRef.current) return;
    gsap.fromTo(
      heroRef.current.querySelectorAll('.hero-el'),
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      }
    );
  }, { scope: heroRef });

  // Quick-nav anchors
  const anchors = facilitiesData.map((f) => ({ id: f.id, name: f.name }));

  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative bg-navy-950 overflow-hidden"
        aria-label="Facilities page hero"
      >
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(179,142,70,0.18) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        {/* Horizontal rule accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #B38E46 0%, transparent 60%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow */}
            <div className="hero-el flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-widest text-brass-500">
                {facilitiesHero.eyebrow}
              </span>
              <span className="h-px w-8 bg-brass-700 block" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {facilitiesHero.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-el font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
              {facilitiesHero.headline}
            </h1>

            {/* Body */}
            <p className="hero-el text-lg sm:text-xl text-slate-300 leading-relaxed">
              {facilitiesHero.body}
            </p>

            {/* CTAs */}
            <div className="hero-el flex flex-wrap gap-3">
              <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
                Book a Campus Tour
              </Button>
              <Button to="/admissions" variant="outlineLight" size="lg">
                Admissions Overview
              </Button>
            </div>
          </div>

          {/* Stat pills row */}
          <div
            className="hero-el mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3"
            role="list"
            aria-label="Campus statistics"
          >
            {[
              { value: '24', unit: 'Acres', label: 'Parkland Campus' },
              { value: '9', unit: 'Zones', label: 'Specialist Facility Areas' },
              { value: '45k+', unit: 'Volumes', label: 'Library Collection' },
              { value: '22', unit: 'Coaches', label: 'Secure Transport Fleet' },
            ].map((s) => (
              <div
                key={s.label}
                role="listitem"
                className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-micro px-5 py-4 text-center"
              >
                <div className="flex items-baseline justify-center gap-1">
                  <AnimatedCounter
                    value={s.value}
                    className="font-serif text-2xl sm:text-3xl font-semibold text-white block"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brass-500">
                    {s.unit}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK-NAV BAR ─────────────────────────────────────────────
          Scrollable anchor links to each facility section.           */}
      <nav
        className="bg-white border-b border-hairline sticky top-[80px] z-30 shadow-sm overflow-x-auto"
        aria-label="Jump to facility"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center gap-1 py-3 whitespace-nowrap" role="list">
            {anchors.map(({ id, name }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="inline-block px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-navy-950 hover:bg-chalk-100 rounded-micro transition-colors focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:outline-none"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── FACILITY SECTIONS ─────────────────────────────────────────
          Each section uses its own layout variant.                   */}
      <main id="facilities-content">
        {facilitiesData.map((facility) => (
          <FacilitySection key={facility.id} facility={facility} />
        ))}
      </main>

      {/* ── VISIT CTA ─────────────────────────────────────────────── */}
      <section
        className="py-24 bg-navy-950"
        aria-labelledby="visit-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brass-500 block">
                Schedule a Visit
              </span>
              <h2
                id="visit-cta-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight"
              >
                {facilitiesCTAData.headline}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {facilitiesCTAData.body}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  to={facilitiesCTAData.primaryTo}
                  variant="accent"
                  size="lg"
                  icon={ArrowRight}
                >
                  {facilitiesCTAData.primaryLabel}
                </Button>
                <Button
                  to={facilitiesCTAData.secondaryTo}
                  variant="outlineLight"
                  size="lg"
                >
                  {facilitiesCTAData.secondaryLabel}
                </Button>
              </div>
            </div>

            {/* Info cards column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Calendar,
                  title: 'Open Campus Mornings',
                  body: 'Every second Saturday during term time, 09:00 – 12:30.',
                },
                {
                  icon: MapPin,
                  title: 'Private Guided Tours',
                  body: 'Available by appointment on weekday afternoons for prospective families.',
                },
                {
                  icon: Phone,
                  title: 'Admissions Team',
                  body: 'Call or email us to find the next available open day date.',
                },
                {
                  icon: ArrowRight,
                  title: 'Online Enquiry',
                  body: 'Submit a tour enquiry form and we will respond within one working day.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white/5 border border-white/10 rounded-micro p-5 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      className="w-4 h-4 text-brass-500 shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-semibold text-white">{title}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
