import React from 'react';

/**
 * Standardized Editorial Section Heading Component
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          {isCenter && <span className="h-px w-6 bg-brass-500/80 inline-block" />}
          <span className="text-xs font-bold uppercase tracking-widest text-brass-600">
            {eyebrow}
          </span>
          <span className="h-px w-6 bg-brass-500/80 inline-block" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
