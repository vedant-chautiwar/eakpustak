import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/**
 * Editorial Toast Notification
 * Provides immediate parent feedback for downloads, calendar exports, and links.
 */
export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    alert: <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-brass-500 shrink-0" />,
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-navy-950 text-white rounded-micro border border-white/20 shadow-elevated p-4 flex items-start gap-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      {icons[toast.type || 'info']}
      <div className="flex-1 min-w-0">
        {toast.title && (
          <p className="font-serif text-sm font-semibold text-white mb-0.5">
            {toast.title}
          </p>
        )}
        <p className="text-xs text-slate-300 leading-relaxed">{toast.message}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Dismiss notification"
        className="text-slate-400 hover:text-white transition-colors shrink-0 p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
