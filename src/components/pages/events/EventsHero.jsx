import React from 'react';
import {
  FileText,
  Calendar,
  AlertCircle,
  Trophy,
  Download,
  ArrowRight,
  BookOpen,
  CalendarDays,
} from 'lucide-react';
import Button from '../../common/Button';
import AnimatedCounter from '../../common/AnimatedCounter';

/**
 * EventsHero
 * Clear page introduction, quick action buttons, live operational metrics,
 * and prominent priority action alert banner.
 */
export default function EventsHero({
  heroRef,
  stats,
  onFilterType,
  onFilterPriority,
  onDownloadCalendar,
}) {
  return (
    <section
      ref={heroRef}
      className="bg-chalk-50 border-b border-hairline py-16 sm:py-20"
      aria-label="Events and notices page overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Description (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="hero-reveal flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brass-600">
                Notice Board & Academic Calendar
              </span>
              <span className="h-px w-8 bg-brass-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Academic Year 2026–2027
              </span>
            </div>

            <h1 className="hero-reveal font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-950 tracking-tight leading-tight">
              Institutional Circulars,{' '}
              <span className="italic text-brass-700">Assessment Schedules</span> &amp; Term Events.
            </h1>

            <p className="hero-reveal text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Stay fully informed on daily academic operations, official Cambridge &amp; IB DP circulars, holiday announcements, examination timetables, and campus fixtures — authenticated directly by the Academic Registry.
            </p>

            {/* Quick Action Buttons */}
            <div className="hero-reveal flex flex-wrap gap-3 pt-2">
              <Button
                onClick={() => onFilterType('circular')}
                variant="primary"
                size="md"
                icon={FileText}
                iconPosition="left"
              >
                Official Circulars
              </Button>
              <Button
                onClick={() => onFilterType('examination')}
                variant="outline"
                size="md"
                icon={BookOpen}
                iconPosition="left"
              >
                Exam Notices
              </Button>
              <Button
                onClick={() => onFilterType('holiday')}
                variant="outline"
                size="md"
                icon={CalendarDays}
                iconPosition="left"
              >
                Holiday Dates
              </Button>
              <Button
                onClick={onDownloadCalendar}
                variant="accent"
                size="md"
                icon={Download}
                iconPosition="left"
              >
                Term Calendar (PDF)
              </Button>
            </div>
          </div>

          {/* Right Column: Key Operational Metrics (5 cols) */}
          <div className="lg:col-span-5 hero-reveal grid grid-cols-2 gap-3.5">
            {[
              {
                count: stats.circulars,
                label: 'Active Circulars',
                sub: 'Michaelmas Term',
                icon: FileText,
                onClick: () => onFilterType('circular'),
              },
              {
                count: stats.examinations,
                label: 'Exam Timetables',
                sub: 'IGCSE & IB DP',
                icon: BookOpen,
                onClick: () => onFilterType('examination'),
              },
              {
                count: stats.holidays,
                label: 'Holiday Recesses',
                sub: 'Upcoming Breaks',
                icon: Calendar,
                onClick: () => onFilterType('holiday'),
              },
              {
                count: stats.events + stats.competitions,
                label: 'Events & Fixtures',
                sub: 'Campus & Regional',
                icon: Trophy,
                onClick: () => onFilterType('event'),
              },
            ].map(({ count, label, sub, icon: Icon, onClick }) => (
              <div
                key={label}
                onClick={onClick}
                className="bg-white border border-hairline rounded-micro p-5 hover:border-brass-500 hover:shadow-subtle transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-micro bg-chalk-100 flex items-center justify-center text-navy-950 group-hover:text-brass-600 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {sub}
                  </span>
                </div>
                <AnimatedCounter
                  value={count}
                  className="font-serif text-3xl font-semibold text-navy-950 leading-none mb-1.5 block"
                />
                <p className="text-xs font-medium text-slate-600 group-hover:text-navy-950 transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Action Alert Banner */}
        {stats.priorityCount > 0 && (
          <div className="mt-10 p-4 sm:p-5 bg-crimson-700/5 border border-crimson-700/20 rounded-micro flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-micro bg-rose-100 text-crimson-700 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-crimson-700">
                  Priority Action Required ({stats.priorityCount} Notices)
                </p>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  Important memos regarding Cambridge Mock Exams, Winter Uniform transition, and Boarding logistics require parental confirmation.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onFilterPriority}
              className="btn-sweep inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson-700 bg-white border border-crimson-700/30 px-3.5 py-2 rounded-micro shadow-xs shrink-0 cursor-pointer"
              style={{ '--btn-dark-fill': 'rgba(155, 34, 38, 0.08)' }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                View Priority Notices <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
