import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, PhoneCall, Mail } from 'lucide-react';
import Button from '../common/Button';

/**
 * Global Quick Inquiry Slide-over Drawer
 * Allows prospective parents to request admissions packets from any page.
 */
export default function QuickInquiryDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    gradeLevel: 'Grade 1 - 5 (Primary)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact number is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate immediate frontend response (no backend per PRD)
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      gradeLevel: 'Grade 1 - 5 (Primary)',
      message: '',
    });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-chalk-50 border-l border-hairline shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-6 bg-navy-950 text-white flex items-center justify-between border-b border-navy-850">
            <div>
              <span className="text-xs uppercase tracking-widest text-brass-500 font-bold block mb-1">
                Admissions 2026–2027
              </span>
              <h3 id="inquiry-title" className="font-serif text-xl font-semibold">
                Quick Admission Inquiry
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-stone-400 hover:text-white p-2 transition-colors rounded-micro focus-visible:ring-1 focus-visible:ring-brass-500"
              aria-label="Close inquiry drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 bg-emerald-50 text-forest-700 rounded-micro flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-navy-950 mb-2">
                  Inquiry Received
                </h4>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Thank you for your interest in EAK International School. Our Admissions Registrar will contact you at <strong className="text-navy-950">{formData.email}</strong> within one working day with the prospectus and schedule.
                </p>
                <div className="bg-chalk-100 p-4 border border-hairline rounded-micro text-left text-xs space-y-1 mb-8">
                  <p className="font-semibold text-navy-950">Direct Admissions Hotline:</p>
                  <p className="flex items-center gap-2 text-slate-600">
                    <PhoneCall className="w-3.5 h-3.5 text-brass-600" /> +44 (0) 20 7946 0195
                  </p>
                  <p className="flex items-center gap-2 text-slate-600">
                    <Mail className="w-3.5 h-3.5 text-brass-600" /> admissions@eakinternational.edu
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" size="md" onClick={handleReset}>
                    Submit Another Inquiry
                  </Button>
                  <Button variant="primary" size="md" onClick={onClose}>
                    Close Window
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs text-slate-600 leading-relaxed pb-2 border-b border-hairline">
                  Complete this brief inquiry to receive our digital prospectus, syllabus breakdown, and priority assessment invitation for the upcoming academic cycle.
                </p>

                {/* Parent Name */}
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full bg-white border border-hairline px-3.5 py-2.5 text-sm rounded-micro focus:border-navy-950 focus:ring-1 focus:ring-navy-950 text-slate-900"
                    placeholder="e.g. Dr. Eleanor Vance"
                  />
                  {errors.parentName && (
                    <p className="text-xs text-crimson-700 mt-1">{errors.parentName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-hairline px-3.5 py-2.5 text-sm rounded-micro focus:border-navy-950 focus:ring-1 focus:ring-navy-950 text-slate-900"
                    placeholder="eleanor.vance@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-crimson-700 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Telephone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-hairline px-3.5 py-2.5 text-sm rounded-micro focus:border-navy-950 focus:ring-1 focus:ring-navy-950 text-slate-900"
                    placeholder="+44 7700 900123"
                  />
                  {errors.phone && (
                    <p className="text-xs text-crimson-700 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Grade Level */}
                <div>
                  <label htmlFor="gradeLevel" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Anticipated Grade Division
                  </label>
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full bg-white border border-hairline px-3.5 py-2.5 text-sm rounded-micro focus:border-navy-950 focus:ring-1 focus:ring-navy-950 text-slate-900"
                  >
                    <option value="Early Years (Pre-K to K)">Early Years (Pre-K to Kindergarten)</option>
                    <option value="Primary (Grades 1 - 5)">Primary School (Grades 1 – 5)</option>
                    <option value="Middle School (Grades 6 - 8)">Middle School (Grades 6 – 8)</option>
                    <option value="Secondary IGCSE (Grades 9 - 10)">Secondary Cambridge IGCSE (Grades 9 – 10)</option>
                    <option value="Senior IB Diploma (Grades 11 - 12)">Senior Secondary IB DP (Grades 11 – 12)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Notes or Specific Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-hairline px-3.5 py-2.5 text-sm rounded-micro focus:border-navy-950 focus:ring-1 focus:ring-navy-950 text-slate-900"
                    placeholder="Inquire about boarding, scholarships, or language immersion..."
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    icon={Send}
                  >
                    Submit Admissions Inquiry
                  </Button>
                </div>

                <p className="text-[11px] text-slate-500 text-center leading-normal">
                  All inquiries are governed by EAK International School's privacy protocol. No data is stored externally.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
