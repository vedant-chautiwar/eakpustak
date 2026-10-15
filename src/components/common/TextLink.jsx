import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Editorial Text Link Component
 * Displays an underline offset transition with an optional arrow hover micro-shift.
 */
export default function TextLink({
  children,
  to,
  href,
  onClick,
  className = '',
  showArrow = true,
  variant = 'default',
  ...rest
}) {
  const variantStyles = {
    default: 'text-navy-950 hover:text-brass-600 decoration-brass-500/50 hover:decoration-brass-600',
    brass: 'text-brass-600 hover:text-brass-700 decoration-brass-600/50 hover:decoration-brass-700',
    light: 'text-slate-300 hover:text-white decoration-brass-400/50 hover:decoration-brass-400',
  };

  const baseStyles = `group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide underline underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:ring-brass-500 rounded-micro ${
    variantStyles[variant] || variantStyles.default
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseStyles} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseStyles} {...rest}>
      {content}
    </button>
  );
}
