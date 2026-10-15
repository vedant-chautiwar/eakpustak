import React from 'react';
import { Home, Compass } from 'lucide-react';
import Button from '../components/common/Button';

/**
 * Editorial 404 Not Found Page
 */
export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-chalk-50 px-4 py-20">
      <div className="max-w-md text-center space-y-6">
        <span className="font-mono text-sm font-bold text-brass-600 uppercase tracking-widest block">
          Error 404 — Record Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-950">
          The Requested Page Does Not Exist.
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The academic publication, directory, or page you are attempting to access has moved or is no longer part of the EAK portal catalog.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/admissions" variant="outline" size="md" icon={Compass}>
            Admissions Directory
          </Button>
        </div>
      </div>
    </div>
  );
}
