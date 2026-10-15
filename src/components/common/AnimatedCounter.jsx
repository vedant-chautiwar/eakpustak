import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AnimatedCounter component
 * Dynamically parses formatted statistics (e.g., "1,450+", "98%", "1:12", "38.6", "24", "100%")
 * and animates the numerical segment using GSAP & ScrollTrigger upon entering the viewport.
 * Fully compliant with 'prefers-reduced-motion'.
 */
export default function AnimatedCounter({
  value,
  duration = 1.6,
  className = '',
  ease = 'power2.out',
}) {
  const countRef = useRef(null);

  useGSAP(
    () => {
      if (!countRef.current) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        countRef.current.textContent = String(value);
        return;
      }

      const strVal = String(value).trim();
      // Match pattern: optional prefix + numerical portion (with commas/dots) + optional suffix
      const match = strVal.match(/^([^0-9.]*)([0-9,.]+)(.*)$/);
      if (!match) {
        countRef.current.textContent = strVal;
        return;
      }

      const prefix = match[1] || '';
      const rawNum = match[2] || '';
      const suffix = match[3] || '';

      const hasComma = rawNum.includes(',');
      const hasDecimal = rawNum.includes('.');
      const decimals = hasDecimal ? rawNum.split('.')[1].length : 0;
      const targetNumber = parseFloat(rawNum.replace(/,/g, ''));

      if (isNaN(targetNumber)) {
        countRef.current.textContent = strVal;
        return;
      }

      const counter = { val: 0 };

      // Set initial state before animation starts
      countRef.current.textContent = prefix + (hasDecimal ? (0).toFixed(decimals) : '0') + suffix;

      gsap.to(counter, {
        val: targetNumber,
        duration,
        ease,
        scrollTrigger: {
          trigger: countRef.current,
          start: 'top 92%',
          once: true,
        },
        onUpdate: () => {
          if (!countRef.current) return;
          let currentVal;
          if (hasDecimal) {
            currentVal = counter.val.toFixed(decimals);
          } else {
            const intVal = Math.round(counter.val);
            currentVal = hasComma ? intVal.toLocaleString('en-US') : String(intVal);
          }
          countRef.current.textContent = prefix + currentVal + suffix;
        },
      });
    },
    { scope: countRef, dependencies: [value] }
  );

  return (
    <span ref={countRef} className={className}>
      {value}
    </span>
  );
}
