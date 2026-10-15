import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Badge from '../../common/Badge';

/**
 * Accessible Admissions FAQ Accordion
 * Includes category filtering and keyboard-navigable disclosure panels.
 * Uses CSS grid-template-rows transition for smooth height animation
 * without requiring height measurement or GSAP.
 */
export default function AdmissionsFAQAccordion({ faqs = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default

  const categories = ['All', 'General Application', 'Assessments & Criteria', 'Fees & Scholarships', 'Campus & Logistics'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-hairline">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
              setOpenIndexes([0]); // reset open item to first in category
            }}
            className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-micro transition-colors ${
              selectedCategory === cat
                ? 'bg-navy-950 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-navy-950 border border-hairline'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Panels */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          const panelId = `faq-panel-${idx}`;
          const buttonId = `faq-btn-${idx}`;

          return (
            <div
              key={idx}
              className={`bg-white border rounded-micro transition-colors duration-200 overflow-hidden ${
                isOpen ? 'border-brass-500/80 shadow-subtle' : 'border-hairline hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus-visible:ring-2 focus-visible:ring-brass-500"
              >
                <div className="space-y-1.5 flex-1 pr-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="brass" className="text-[10px] px-2 py-0.5">
                      {faq.category}
                    </Badge>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-navy-950 leading-snug">
                    {faq.question}
                  </h3>
                </div>

                {/* Animated chevron indicator */}
                <div
                  className={`w-8 h-8 rounded-micro flex items-center justify-center shrink-0 border transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'bg-navy-950 text-white border-navy-950 rotate-180'
                      : 'bg-chalk-100 text-slate-600 border-hairline'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/*
               * Smooth expand/collapse via CSS grid-template-rows transition.
               * The outer grid wrapper animates from 0fr → 1fr.
               * The inner div has min-h-0 so it can collapse to zero.
               * Opacity is layered for a polished fade-in effect.
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
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm text-slate-600 leading-relaxed border-t border-hairline pt-4 bg-chalk-50/50">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="p-8 text-center bg-white border border-hairline rounded-micro text-slate-500">
          <HelpCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
          <p className="text-sm">No questions found in this category.</p>
        </div>
      )}
    </div>
  );
}
