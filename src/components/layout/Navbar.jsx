import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';
import Button from '../common/Button';
import SocialIcons from '../common/SocialIcons';
import QuickInquiryDrawer from './QuickInquiryDrawer';
import eakLogo from '../../assets/eak-logo.png';

/**
 * Editorial Academic Navbar
 * Features institutional utility strip, sticky navigational header with active route styling,
 * persistent social media links with animated tooltips, accessible mobile drawer, and admissions CTA.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const location = useLocation();

  // Scroll listener for sticky header elevation & background contrast
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Automatically close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Sticky Navigation Container */}
      <div className="sticky top-0 z-40 w-full">
        {/* Top Institutional Utility Strip (Desktop only) */}
        <div
          className={`hidden lg:block bg-navy-950 text-slate-300 text-xs border-b border-navy-850 transition-all duration-200 ${
            isScrolled ? 'py-1' : 'py-2'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-stone-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-brass-500" />
                <span>IB World School & Cambridge International Continuum</span>
              </span>
              <span className="h-3 w-px bg-slate-700" />
              <span className="flex items-center gap-2 text-stone-300">
                <Clock className="w-3.5 h-3.5 text-brass-500" />
                <span>{schoolInfo.campus.hours.split('|')[0].trim()}</span>
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`tel:${schoolInfo.campus.admissionsPhone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-brass-500 rounded-micro px-1"
              >
                <Phone className="w-3.5 h-3.5 text-brass-500" />
                <span>Admissions Office: {schoolInfo.campus.admissionsPhone}</span>
              </a>
              <span className="h-3 w-px bg-slate-700" />
              <button
                type="button"
                onClick={() => setInquiryDrawerOpen(true)}
                className="text-brass-500 hover:text-brass-200 transition-colors font-semibold flex items-center gap-1 focus-visible:ring-1 focus-visible:ring-brass-500 rounded-micro px-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Inquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`w-full bg-chalk-50 transition-all duration-200 ${
            isScrolled
              ? 'shadow-subtle border-b border-hairline py-2.5'
              : 'border-b border-hairline py-3 sm:py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 min-h-[3.25rem]">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group flex items-center gap-2.5 sm:gap-3.5 shrink-0 focus-visible:ring-2 focus-visible:ring-brass-500 rounded-micro p-1 -ml-1"
              aria-label="EAK International School Home"
            >
              {/* EAK Medallion Logo */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                <img
                  src={eakLogo}
                  alt="EAK International School crest"
                  className="w-full h-full object-contain drop-shadow-sm"
                  draggable={false}
                />
              </div>

              {/* Wordmark Typography */}
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-sm sm:text-base font-bold tracking-wide text-navy-950 leading-none group-hover:text-brass-600 transition-colors whitespace-nowrap">
                  EAK
                </span>
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight text-navy-950 leading-none mt-0.5 group-hover:text-brass-600 transition-colors whitespace-nowrap">
                  INTERNATIONAL
                </span>
                <span className="text-[9.5px] sm:text-[11px] font-sans font-bold uppercase tracking-widest text-slate-500 mt-0.5 sm:mt-1 whitespace-nowrap">
                  School of London
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — full row from 2xl up */}
            <nav
              className="hidden 2xl:flex flex-1 items-center justify-center gap-x-1.5 min-w-0 flex-nowrap"
              aria-label="Primary navigation"
            >
              {schoolInfo.navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`nav-link-underline shrink-0 whitespace-nowrap px-1.5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors relative rounded-micro focus-visible:ring-2 focus-visible:ring-brass-500 ${
                      isActive
                        ? 'is-active text-navy-950 font-bold'
                        : 'text-slate-600 hover:text-navy-950'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-1.5 right-1.5 h-[2px] bg-brass-500 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions: Inquiry + Admissions CTA */}
            <div className="hidden 2xl:flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setInquiryDrawerOpen(true)}
                className="nav-link-underline relative shrink-0 whitespace-nowrap text-xs font-bold uppercase tracking-wide text-slate-700 hover:text-navy-950 px-1.5 py-2 transition-colors rounded-micro focus-visible:ring-2 focus-visible:ring-brass-500"
              >
                Inquire
              </button>
              <Button
                to="/admissions"
                variant="accent"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                className="whitespace-nowrap normal-case tracking-normal min-w-[10rem] px-4 py-2 font-semibold"
              >
                Apply for 2026–27
              </Button>
            </div>

            {/* Mobile / tablet Actions: Compact CTA + Accessible Hamburger Toggle */}
            <div className="2xl:hidden flex items-center gap-2 shrink-0">
              <Button
                to="/admissions"
                variant="accent"
                size="sm"
                className="hidden sm:inline-flex text-xs px-2.5 py-1.5"
              >
                Apply
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 text-navy-950 hover:text-brass-600 hover:bg-chalk-100 transition-colors rounded-micro border border-hairline focus-visible:ring-2 focus-visible:ring-brass-500 cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Off-canvas Mobile Navigation Drawer & Backdrop */}
      <div
        className={`2xl:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none delay-300'
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? '' : undefined}
      >
        {/* Subtle Dark Backdrop */}
        <div
          className={`fixed inset-0 bg-navy-950/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Off-canvas Left Drawer Panel */}
        <aside
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-chalk-50 text-slate-800 shadow-2xl flex flex-col border-r border-hairline transform transition-transform duration-350 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
            {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-hairline shrink-0 bg-chalk-50">
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* EAK Medallion Logo (drawer) */}
              <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                <img
                  src={eakLogo}
                  alt="EAK International School crest"
                  className="w-full h-full object-contain drop-shadow-sm"
                  draggable={false}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-xs font-bold tracking-tight text-navy-950 leading-none">
                  EAK INTERNATIONAL
                </span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-slate-500 mt-0.5">
                  School of London
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-2 text-slate-500 hover:text-navy-950 hover:bg-chalk-100 transition-colors rounded-micro border border-hairline focus-visible:ring-2 focus-visible:ring-brass-500 cursor-pointer"
              aria-label="Close navigation drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Vertical Navigation Links */}
          <nav
            className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5"
            aria-label="Mobile Navigation Links"
          >
            {schoolInfo.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex items-center px-4 py-3 text-sm font-semibold tracking-wide transition-colors rounded-micro min-h-[44px] ${
                    isActive
                      ? 'text-navy-950 bg-brass-100/60 border-l-4 border-l-brass-500 font-bold'
                      : 'text-slate-700 hover:bg-chalk-100 hover:text-navy-950'
                  }`}
                >
                  <span className={`relative inline-block ${!isActive ? 'nav-link-underline-mobile' : ''}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Social Icons Anchored at the Bottom of the Drawer */}
          <div
            className="mt-auto px-5 pt-4 border-t border-hairline bg-chalk-50 shrink-0"
            style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
          >
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 text-center">
              Connect With Us
            </div>
            <SocialIcons
              className="justify-around w-full"
              buttonClassName="w-10 h-10 border border-hairline/80 hover:border-brass-500/50 bg-chalk-100/50"
              iconClassName="w-4 h-4"
            />
          </div>
        </aside>
      </div>

      {/* Persistent social links on desktop only (hidden on mobile/tablet to avoid floating over viewport) */}
      <div className="hidden 2xl:block fixed right-4 bottom-5 z-40 rounded-control border border-hairline bg-chalk-50/95 p-1.5 shadow-lg backdrop-blur-sm">
        <SocialIcons
          vertical
          className="shrink-0"
          buttonClassName="w-9 h-9"
          iconClassName="w-4 h-4"
        />
      </div>

      {/* Global Quick Inquiry Drawer */}
      <QuickInquiryDrawer
        isOpen={inquiryDrawerOpen}
        onClose={() => setInquiryDrawerOpen(false)}
      />
    </>
  );
}
