import React, { useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Users,
  Download,
  FileText,
  AlertCircle,
  Building,
  CheckCircle2,
} from 'lucide-react';
import Badge from '../../common/Badge';
import Button from '../../common/Button';

/**
 * ItemDetailModal
 * Accessible dialog presenting full circular memos, examination rules, and event briefs.
 */
export default function ItemDetailModal({ item, onClose, onDownload, onAddToCalendar }) {
  // Close on Escape key
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const isEventOrComp = item.type === 'event' || item.type === 'competition';
  const typeDisplayNames = {
    circular: 'Official School Circular',
    examination: 'Examination Assessment Advisory',
    holiday: 'Holiday & Recess Announcement',
    event: 'School Calendar Event',
    competition: 'Interscholastic Competition',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white rounded-micro border border-hairline shadow-elevated max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-chalk-50 border-b border-hairline px-6 py-4 flex items-center justify-between gap-4 z-10">
          <div className="flex flex-wrap items-center gap-2">
            {item.ref && (
              <span className="font-mono text-xs font-bold text-navy-900 bg-white border border-hairline px-2.5 py-1 rounded-micro">
                {item.ref}
              </span>
            )}
            <Badge variant={item.categoryVariant}>{item.category}</Badge>
            {item.important && <Badge variant="crimson">Action Required</Badge>}
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {typeDisplayNames[item.type] || item.type}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="text-slate-400 hover:text-navy-950 hover:bg-chalk-200 rounded-micro p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          <div>
            <h2
              id="modal-headline"
              className="font-serif text-2xl sm:text-3xl font-semibold text-navy-950 leading-tight mb-2"
            >
              {item.title}
            </h2>
            {item.department && (
              <p className="text-xs font-semibold text-brass-700 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                Issued by {item.department}
              </p>
            )}
          </div>

          {/* Quick Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-chalk-50 border border-hairline rounded-micro text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4 text-brass-600 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">
                  {item.holidaySpan ? 'Recess Period' : 'Effective Date'}
                </span>
                <span className="font-semibold text-navy-950">
                  {item.holidaySpan || item.date}
                </span>
              </div>
            </div>

            {item.time && (
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-brass-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Timings</span>
                  <span className="font-semibold text-navy-950">{item.time}</span>
                </div>
              </div>
            )}

            {item.venue && (
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-brass-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                  <span className="font-semibold text-navy-950">{item.venue}</span>
                </div>
              </div>
            )}

            {item.audience && (
              <div className="flex items-center gap-2 text-slate-700">
                <Users className="w-4 h-4 text-brass-600 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Target Audience</span>
                  <span className="font-semibold text-navy-950">{item.audience}</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Required Callout Box */}
          {item.actionRequired && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-micro flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong className="font-semibold block mb-0.5 text-amber-950">Parent Action Required:</strong>
                {item.actionRequired}
              </div>
            </div>
          )}

          {/* Detailed Memo Content */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Official Directive & Details
            </h3>
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-white border border-hairline p-5 rounded-micro">
              {item.description || item.summary}
            </div>
          </div>

          {/* Attachments Section */}
          {item.attachments && item.attachments.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Authorized Documents & Forms
              </h3>
              <div className="space-y-2">
                {item.attachments.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-chalk-50 border border-hairline rounded-micro hover:border-brass-500 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-brass-600 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-navy-950 truncate">
                          {file.name}
                        </p>
                        <p className="text-[10px] text-slate-400">PDF Document • {file.size}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onDownload(file.name)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-navy-950 hover:text-brass-600 transition-colors shrink-0 px-2 py-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-chalk-50 border-t border-hairline px-6 py-4 flex flex-wrap items-center justify-between gap-3 z-10">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified by Academic Registry
          </div>

          <div className="flex items-center gap-2.5">
            {isEventOrComp && (
              <Button
                variant="outline"
                size="sm"
                icon={Calendar}
                iconPosition="left"
                onClick={() => onAddToCalendar(item)}
              >
                Add to Calendar
              </Button>
            )}

            <Button
              variant="primary"
              size="sm"
              icon={Download}
              iconPosition="left"
              onClick={() => onDownload(`${item.ref || 'EAK-Notice'}.pdf`)}
            >
              Download PDF
            </Button>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-slate-600 hover:text-navy-950 px-3 py-2 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
