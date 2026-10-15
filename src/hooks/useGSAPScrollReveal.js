import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Reusable GSAP hook for smooth, accessible staggered scroll reveals.
 * Respects 'prefers-reduced-motion'.
 * 
 * @param {React.RefObject} scopeRef - Container ref for scoping
 * @param {string} selector - CSS selector of elements inside scopeRef to reveal
 * @param {object} options - Animation configuration overrides
 */
export function useGSAPScrollReveal(scopeRef, selector = '.gsap-reveal', options = {}) {
  useGSAP(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !scopeRef.current) return;

    const elements = scopeRef.current.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    gsap.fromTo(
      elements,
      {
        y: options.y || 24,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: options.duration || 0.65,
        stagger: options.stagger !== undefined ? options.stagger : 0.08,
        ease: options.ease || 'power2.out',
        scrollTrigger: {
          trigger: scopeRef.current,
          start: options.start || 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }, { scope: scopeRef, dependencies: [selector] });
}
