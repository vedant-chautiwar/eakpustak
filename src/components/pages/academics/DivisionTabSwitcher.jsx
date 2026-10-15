import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import Badge from '../../common/Badge';
import Button from '../../common/Button';
import ImageWithFallback from '../../common/ImageWithFallback';

/**
 * Accessible DivisionTabSwitcher Component
 * Features fully accessible ARIA tabs, keyboard arrow navigation, and rich divisional deep-dive views.
 */
export default function DivisionTabSwitcher({ divisions = [] }) {
  const [activeTabId, setActiveTabId] = useState(divisions[0]?.id || 'primary');
  const tabListRef = useRef(null);

  const activeDivision = divisions.find((d) => d.id === activeTabId) || divisions[0];

  // Handle keyboard navigation between tabs (ArrowLeft / ArrowRight)
  const handleKeyDown = (e, index) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % divisions.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + divisions.length) % divisions.length;
    } else {
      return;
    }

    e.preventDefault();
    const targetDivision = divisions[newIndex];
    if (targetDivision) {
      setActiveTabId(targetDivision.id);
      const targetButton = tabListRef.current?.querySelector(`#tab-${targetDivision.id}`);
      targetButton?.focus();
    }
  };

  return (
    <div className="space-y-12">
      {/* Accessible Tab List Navigation */}
      <div
        ref={tabListRef}
        role="tablist"
        aria-label="Academic Divisions"
        className="flex flex-wrap lg:grid lg:grid-cols-4 gap-2 p-1.5 bg-chalk-100 border border-hairline rounded-micro"
      >
        {divisions.map((div, idx) => {
          const isSelected = div.id === activeTabId;
          return (
            <button
              key={div.id}
              role="tab"
              id={`tab-${div.id}`}
              type="button"
              aria-selected={isSelected}
              aria-controls={`panel-${div.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(div.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`px-4 py-3 text-left transition-all duration-200 rounded-micro flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-brass-500 ${
                isSelected
                  ? 'bg-navy-950 text-white shadow-xs'
                  : 'bg-transparent text-slate-700 hover:bg-white hover:text-navy-950'
              }`}
            >
              <div>
                <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold block mb-0.5 ${
                  isSelected ? 'text-brass-400' : 'text-slate-500'
                }`}>
                  {div.grades.split('(')[0].trim()}
                </span>
                <span className="font-serif text-sm font-bold block leading-tight">
                  {div.name.split(':')[0]}
                </span>
              </div>
              <span className={`text-[11px] font-sans mt-1.5 block ${
                isSelected ? 'text-stone-300' : 'text-slate-500'
              }`}>
                {div.ages}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      {activeDivision && (
        <div
          role="tabpanel"
          id={`panel-${activeDivision.id}`}
          aria-labelledby={`tab-${activeDivision.id}`}
          tabIndex={0}
          className="bg-white border border-hairline rounded-micro p-6 sm:p-10 lg:p-12 space-y-10 animate-fadeIn focus-visible:ring-1 focus-visible:ring-brass-500"
        >
          {/* Division Header Banner */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-hairline">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brass">{activeDivision.grades}</Badge>
                <Badge variant="navy">{activeDivision.ratio}</Badge>
                <span className="font-mono text-xs font-bold text-brass-700">
                  {activeDivision.ages}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-950 tracking-tight leading-tight">
                {activeDivision.name}
              </h3>
              <p className="font-sans text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Curricular Benchmark: {activeDivision.curriculum}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button to="/admissions" variant="accent" size="sm" icon={ArrowRight}>
                Admissions for {activeDivision.name.split(':')[0]}
              </Button>
            </div>
          </div>

          {/* Division Image + Narrative Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Photographic Plate (5.5 Cols) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-micro overflow-hidden shadow-subtle group">
                <ImageWithFallback
                  src={activeDivision.image}
                  alt={activeDivision.imageCaption}
                  aspectRatio="aspect-[16/10]"
                  fallbackTitle={activeDivision.name}
                  className="transition-transform duration-700 group-hover:scale-103"
                />
                <div className="p-3.5 bg-chalk-50 border-t border-hairline text-xs text-slate-600 flex items-center justify-between">
                  <span className="italic">{activeDivision.imageCaption}</span>
                  <span className="font-mono text-[11px] text-brass-700 font-bold">Oakridge Campus</span>
                </div>
              </div>
            </div>

            {/* Right Overview Narrative (6.5 Cols) */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block">
                Educational Philosophy & Focus
              </span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {activeDivision.overview}
              </p>

              {/* Division Distinctive Features */}
              <div className="pt-3 border-t border-hairline space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-navy-950 block">
                  Key Division Pillars:
                </span>
                {activeDivision.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subject Architecture Grid */}
          <div className="pt-8 border-t border-hairline space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brass-600 block mb-0.5">
                  Core Curricular Structure
                </span>
                <h4 className="font-serif text-xl font-semibold text-navy-950">
                  Disciplines & Subject Pathways
                </h4>
              </div>
              <Button to="/facilities" variant="ghost" size="sm" icon={ArrowRight}>
                View Associated Labs & Commons
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeDivision.subjects.map((subj, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-chalk-50 border border-hairline rounded-micro p-5 space-y-2 hover:border-brass-500 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-brass-600 shrink-0" />
                    <h5 className="font-serif text-base font-bold text-navy-950">
                      {subj.name}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {subj.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
