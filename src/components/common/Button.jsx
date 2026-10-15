import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Editorial Academic Button Component
 * Features architectural micro-radius, high-contrast states, and optional router link support.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...rest
}) {
  const baseStyles = 'btn-sweep inline-flex items-center justify-center font-medium rounded-micro cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 tracking-wider uppercase font-semibold',
    md: 'text-sm px-5 py-3 gap-2 tracking-wide',
    lg: 'text-base px-7 py-3.5 gap-2.5 tracking-wide',
  };

  const variantStyles = {
    primary: 'btn-sweep-primary border border-transparent shadow-sm',
    accent: 'btn-sweep-accent border border-transparent shadow-sm',
    gold: 'btn-sweep-gold border border-transparent shadow-sm',
    secondary: 'btn-sweep-secondary border border-hairline shadow-sm',
    secondaryNavy: 'btn-sweep-secondary-navy border border-transparent shadow-sm',
    outline: 'btn-sweep-outline border border-navy-950',
    outlineLight: 'btn-sweep-outline-light border border-white/60',
    ghost: 'btn-sweep-ghost border border-transparent',
  };

  const disabledClasses = disabled ? 'pointer-events-none opacity-50' : '';
  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabledClasses} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 relative z-10" aria-hidden="true" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon
          className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 relative z-10"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={disabled ? '#' : to}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={`group ${combinedClasses}`}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        className={`group ${combinedClasses}`}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={`group ${combinedClasses}`}
      {...rest}
    >
      {content}
    </button>
  );
}
