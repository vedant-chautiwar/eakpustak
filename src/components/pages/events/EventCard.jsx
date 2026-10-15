import React from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ChevronRight,
  Trophy,
} from 'lucide-react';
import Badge from '../../common/Badge';

/**
 * EventCard
 * Editorial card for Upcoming School Events and Interscholastic Competitions.
 */
export default function EventCard({ item, onSelect, onAddToCalendar }) {
  const [day, month] = (() => {
    const d = new Date(item.dateISO);
    return [
      d.getDate().toString().padStart(2, '0'),
      d.toLocaleString('en-GB', { month: 'short' }).toUpperCase(),
    ];
  })();

  const isCompetition = item.type === 'competition';

  return (
    <article className="group bg-white border border-hairline rounded-micro overflow-hidden hover:border-brass-500 hover:shadow-subtle transition-all duration-200 flex flex-col">
      {/* Date Header Strip */}
      <div className="bg-navy-950 px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-center min-w-[44px]">
            <p className="font-serif text-3xl font-semibold text-white leading-none">
              {day}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brass-500 mt-1">
              {month}
            </p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={item.categoryVariant}>{item.category}</Badge>
              {isCompetition && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brass-400 bg-white/10 px-2 py-0.5 rounded-micro">
                  <Trophy className="w-3 h-3 text-brass-400" />
                  Tournament
                </span>
              )}
            </div>
            {item.time && (
              <p className="text-xs text-slate-300 flex items-center gap-1.5 truncate">
                <Clock className="w-3 h-3 text-brass-500 shrink-0" />
                {item.time}
              </p>
            )}
          </div>
        </div>

        {item.ref && (
          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline-block">
            {item.ref}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3
            onClick={() => onSelect(item)}
            className="font-serif text-lg font-semibold text-navy-950 leading-snug mb-2.5 cursor-pointer group-hover:text-brass-700 transition-colors"
          >
            {item.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {item.description || item.summary}
          </p>

          {/* Venue & Audience Information */}
          <div className="space-y-2 mb-4 pb-4 border-b border-hairline text-xs text-slate-500">
            {item.venue && (
              <div className="flex items-center gap-2 text-slate-600 truncate">
                <MapPin className="w-3.5 h-3.5 text-brass-600 shrink-0" />
                <span className="truncate">{item.venue}</span>
              </div>
            )}
            {item.audience && (
              <div className="flex items-center gap-2 text-slate-600 truncate">
                <Users className="w-3.5 h-3.5 text-brass-600 shrink-0" />
                <span className="truncate">{item.audience}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={() => onAddToCalendar(item)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-950 hover:text-brass-600 transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-brass-600" />
            Add to Calendar
          </button>

          <button
            type="button"
            onClick={() => onSelect(item)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-navy-950 hover:text-brass-600 transition-colors cursor-pointer"
          >
            Full Details
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
