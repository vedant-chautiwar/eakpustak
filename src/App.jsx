import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Route Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import EventsNoticesPage from './pages/EventsNoticesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Root Application Router & Layout Shell
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-chalk-50 text-slate-800 font-sans selection:bg-brass-500/20 selection:text-navy-950">
        {/* Persistent Editorial Header */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/events-notices" element={<EventsNoticesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Persistent Editorial Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
