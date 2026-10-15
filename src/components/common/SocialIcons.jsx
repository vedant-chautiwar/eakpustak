import React from 'react';
import { schoolInfo } from '../../data/schoolInfo';

/**
 * Platform SVG glyphs for institutional social media channels
 */
function SocialGlyph({ platform, className = 'w-3.5 h-3.5' }) {
  const p = platform.toLowerCase();

  if (p.includes('linkedin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
      </svg>
    );
  }

  if (p.includes('twitter') || p.includes('x')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  if (p.includes('instagram')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }

  if (p.includes('youtube')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }

  return null;
}

/**
 * Compact Persistent Social Media Icon Cluster
 * Features smooth upward fade-in tooltips directly above each icon,
 * accessible keyboard focus support, and subtle visual hierarchy.
 */
export default function SocialIcons({
  className = '',
  iconClassName = 'w-3.5 h-3.5',
  buttonClassName = 'w-7 h-7 sm:w-8 sm:h-8',
  vertical = false,
}) {
  return (
    <div className={`flex ${vertical ? 'flex-col gap-1' : 'items-center gap-1 sm:gap-1.5'} ${className}`} role="list" aria-label="Social media channels">
      {schoolInfo.socials.map((social) => {
        const platformName = social.name === 'Twitter' ? 'X' : social.name;

        return (
          <div key={social.name} className="relative group flex items-center justify-center" role="listitem">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              onClick={(e) => {
                if (social.href === '#') {
                  e.preventDefault();
                }
              }}
              className={`${buttonClassName} rounded-micro flex items-center justify-center text-slate-500 hover:text-navy-950 hover:bg-slate-200/70 focus-visible:bg-slate-200/70 focus-visible:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-500 transition-colors cursor-pointer`}
            >
              <SocialGlyph platform={social.name} className={iconClassName} />
            </a>

            {/* Smooth Animated Hover Label (Directly Above the Icon) */}
            <div
              role="tooltip"
              className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 transition-all duration-200 ease-out opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
            >
              <div className="bg-navy-950 text-white text-[10.5px] font-medium tracking-wide px-2 py-0.5 rounded-micro shadow-md whitespace-nowrap border border-navy-850 text-center">
                {platformName}
              </div>
              {/* Downward Caret Arrow */}
              <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-navy-950 mx-auto" aria-hidden="true" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
