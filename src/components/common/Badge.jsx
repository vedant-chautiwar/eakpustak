import React from 'react';

/**
 * Editorial Academic Badge Component
 */
export default function Badge({
  children,
  variant = 'default',
  className = '',
}) {
  const baseStyles = 'inline-flex items-center px-2.5 py-1 text-xs font-semibold tracking-widest uppercase rounded-micro border';

  const variantStyles = {
    default: 'bg-chalk-100 text-slate-700 border-stone-300',
    brass: 'bg-brass-100 text-brass-700 border-brass-200',
    navy: 'bg-navy-950 text-white border-navy-900',
    forest: 'bg-emerald-50 text-forest-700 border-emerald-200',
    crimson: 'bg-rose-50 text-crimson-700 border-rose-200',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`}>
      {children}
    </span>
  );
}
