import React from 'react';
import {
  Calendar,
  Download,
  Users,
  ChevronRight,
  BookOpen,
  AlertCircle,
  FileText,
  Building,
  CheckCircle,
} from 'lucide-react';
import Badge from '../../common/Badge';

/**
 * NoticeCard
 * Editorial card for Official Circulars, Examination Advisories, and Holiday Announcements.
 */
export default function NoticeCard({ item, onSelect, onDownload }) {
  // Select icon based on item type
  const getIcon = () => {
    switch (item.type) {
      case 'examination':
        return <BookOpen className="w-4.5 h-4.5 text-navy-950" />;
      case 'holiday':
        return <Calendar className="w-4.5 h-4.5 text-navy-950" />;
      default:
        return item.important ? (
          <AlertCircle className="w-4.5 h-4.5 text-crimson-700" />
        ) : (
          <FileText className="w-4.5 h-4.5 text-navy-950" />
        );
    }
  };

  return (
    <article className="group bg-white border border-hairline rounded-micro overflow-hidden hover:border-brass-500 hover:shadow-subtle transition-all duration-200 flex flex-col">
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Top meta strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              {item.ref && (
                <span className="font-mono text-[11px] font-bold text-slate-500 bg-chalk-100 border border-hairline px-2 py-0.5 rounded-micro">
                  {item.ref}
                </span>
              )}
              <Badge variant={item.categoryVariant}>{item.category}</Badge>
              {item.important && <Badge variant="crimson">Action Required</Badge>}
              {item.holidaySpan && <Badge variant="brass">Recess Dates</Badge>}
            </div>

            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brass-600" />
              {item.date}
            </span>
          </div>

          {/* Title with Type Icon */}
          <div className="flex items-start gap-3.5 mb-2.5">
            <div className="shrink-0 w-8 h-8 rounded-micro bg-chalk-100 flex items-center justify-center border border-hairline mt-0.5 text-navy-950 group-hover:border-brass-500 transition-colors">
              {getIcon()}
            </div>
            <h3
              onClick={() => onSelect(item)}
              className="font-serif text-lg sm:text-xl font-semibold text-navy-950 leading-snug cursor-pointer group-hover:text-brass-700 transition-colors flex-1"
            >
              {item.title}
            </h3>
          </div>

          {/* Summary */}
          <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {item.summary}
          </p>

          {/* Additional details (Audience & Department) */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-hairline">
            {item.audience && (
              <span className="flex items-center gap-1.5 font-medium text-navy-900 bg-chalk-50 px-2 py-1 rounded-micro border border-hairline">
                <Users className="w-3.5 h-3.5 text-brass-600" />
                {item.audience}
              </span>
            )}
            {item.holidaySpan && (
              <span className="flex items-center gap-1.5 text-brass-800 font-semibold bg-brass-100/60 px-2 py-1 rounded-micro">
                <CheckCircle className="w-3.5 h-3.5 text-brass-600" />
                {item.holidaySpan}
              </span>
            )}
            {item.department && (
              <span className="flex items-center gap-1.5 text-slate-500 truncate max-w-[240px]">
                <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {item.department}
              </span>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => onDownload(`${item.ref || 'Notice'}.pdf`)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-950 hover:text-brass-600 transition-colors py-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </button>

          <button
            type="button"
            onClick={() => onSelect(item)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-navy-950 hover:text-brass-600 transition-colors py-1 cursor-pointer"
          >
            Read Notice
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
