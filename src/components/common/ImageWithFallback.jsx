import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

/**
 * ImageWithFallback component
 * Renders high-res photography with a graceful, editorial fallback if image fails or is loading.
 */
export default function ImageWithFallback({
  src,
  alt = '',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  fallbackTitle = 'EAK Academic Campus',
  loading = 'lazy',
  ...rest
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-navy-950 border border-hairline flex flex-col items-center justify-center p-6 text-center text-slate-300 relative overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="relative z-10 space-y-2">
          <div className="w-10 h-10 rounded-micro bg-navy-900 border border-navy-850 flex items-center justify-center mx-auto text-brass-500">
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="font-serif text-sm font-semibold text-white">{fallbackTitle}</p>
          <span className="text-[10px] uppercase tracking-widest text-brass-500 font-bold block">
            EAK International School
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Skeleton / Shimmer placeholder before image completes loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-chalk-200 animate-pulse flex items-center justify-center">
          <span className="text-xs text-slate-400 font-serif">Loading image...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...rest}
      />
    </div>
  );
}
