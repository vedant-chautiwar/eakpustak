import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, RefreshCw, UserCheck, Calendar } from 'lucide-react';
import Button from '../../common/Button';
import Badge from '../../common/Badge';

/**
 * Admissions Inquiry Form Prototype
 * Strictly client-side only. Features rigorous validation and clear prototype disclosure.
 */
export default function AdmissionsInquiryForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    dob: '',
    gradeLevel: 'Grade 9 (Cambridge IGCSE)',
    intakeTerm: 'Michaelmas 2026 (September)',
    tourPreference: 'In-Person Guided Tour',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = 'Parent or Guardian full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact telephone or mobile number is required.';
    }
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student candidate full name is required.';
    }
    if (!formData.dob) {
      errs.dob = 'Candidate date of birth is required.';
    }
    if (!formData.consent) {
      errs.consent = 'Please confirm that you understand this is a sample frontend prototype.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing delay for authentic UI feel
    setTimeout(() => {
      setIsSubmitting(false);
      const referenceCode = `EAK-2026-ADM-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({
        ...formData,
        referenceCode,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }, 550);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      studentName: '',
      dob: '',
      gradeLevel: 'Grade 9 (Cambridge IGCSE)',
      intakeTerm: 'Michaelmas 2026 (September)',
      tourPreference: 'In-Person Guided Tour',
      notes: '',
      consent: false,
    });
    setErrors({});
  };

  return (
    <div id="inquiry-form" className="bg-white border border-hairline rounded-micro shadow-subtle overflow-hidden">
      {/* Prototype Disclosure Banner */}
      <div className="bg-navy-950 text-white p-6 sm:p-7 border-b border-navy-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="brass">Frontend Prototype</Badge>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
              Interactive Demonstration
            </span>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-white">
            Formal Admissions Inquiry Dossier
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Simulate the initial stage of candidate registration for the 2026–2027 academic year.
          </p>
        </div>

        <div className="bg-navy-900 border border-navy-800 p-3 rounded-micro text-xs text-stone-300 max-w-xs shrink-0 flex items-start gap-2">
          <Info className="w-4 h-4 text-brass-500 shrink-0 mt-0.5" />
          <p className="leading-snug">
            All data is processed strictly in your local browser memory. No server data is transmitted.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {submittedData ? (
          /* Success Receipt Demonstration */
          <div className="py-8 space-y-8 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <div className="w-16 h-16 bg-emerald-50 text-forest-700 rounded-micro flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <Badge variant="forest">Demonstration Successful</Badge>
              <h4 className="font-serif text-3xl font-bold text-navy-950">
                Admissions Dossier Initialized
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                In a live institutional system, your candidate profile would now be queued with the Admissions Registrar. Below is the simulated candidate receipt:
              </p>
            </div>

            {/* Simulated Receipt Card */}
            <div className="max-w-2xl mx-auto bg-chalk-50 border border-hairline rounded-micro p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-hairline gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                    Admissions Dossier Reference
                  </span>
                  <span className="font-mono text-lg font-bold text-navy-950">
                    {submittedData.referenceCode}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                    Recorded At
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-700">
                    Today at {submittedData.timestamp}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 block font-semibold mb-0.5">Candidate Scholar:</span>
                  <p className="font-serif text-sm font-bold text-navy-950">{submittedData.studentName}</p>
                  <p className="text-slate-600">DOB: {submittedData.dob}</p>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold mb-0.5">Target Academic Division:</span>
                  <p className="font-serif text-sm font-bold text-navy-950">{submittedData.gradeLevel}</p>
                  <p className="text-slate-600">Intake: {submittedData.intakeTerm}</p>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold mb-0.5">Primary Contact:</span>
                  <p className="font-bold text-navy-950">{submittedData.parentName}</p>
                  <p className="text-slate-600">{submittedData.email} • {submittedData.phone}</p>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold mb-0.5">Visit Preference:</span>
                  <p className="font-bold text-navy-950">{submittedData.tourPreference}</p>
                </div>
              </div>

              {submittedData.notes && (
                <div className="pt-3 border-t border-hairline text-xs">
                  <span className="text-slate-500 font-semibold block mb-1">Scholar Notes / Inquiries:</span>
                  <p className="italic text-slate-700 bg-white p-3 border border-hairline rounded-micro">
                    "{submittedData.notes}"
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-hairline text-xs text-slate-600 space-y-1">
                <p className="font-bold text-navy-950">Next Simulated Action:</p>
                <p>1. Formal review by Admissions Dean within 48 hours.</p>
                <p>2. Invitation to schedule cognitive assessment & conversational interview.</p>
                <p>3. Dispatch of digital syllabus pack to {submittedData.email}.</p>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={handleReset}
                icon={RefreshCw}
                iconPosition="left"
              >
                Reset Demonstration Form
              </Button>
            </div>
          </div>
        ) : (
          /* Active Inquiry Form */
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Section 1: Candidate Scholar Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-hairline">
                <UserCheck className="w-4 h-4 text-brass-600" />
                <h4 className="font-serif text-lg font-semibold text-navy-950">
                  1. Candidate Scholar Information
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="studentName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Student Full Legal Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Julian Montgomery"
                    className={`w-full bg-chalk-50 border px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.studentName ? 'border-crimson-700 ring-1 ring-crimson-700' : 'border-hairline focus:border-navy-950 focus:ring-1 focus:ring-navy-950'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="text-xs text-crimson-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.studentName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="dob" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`w-full bg-chalk-50 border px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.dob ? 'border-crimson-700 ring-1 ring-crimson-700' : 'border-hairline focus:border-navy-950 focus:ring-1 focus:ring-navy-950'
                    }`}
                  />
                  {errors.dob && (
                    <p className="text-xs text-crimson-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.dob}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="gradeLevel" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Anticipated Grade Division *
                  </label>
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full bg-chalk-50 border border-hairline px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 focus:outline-none"
                  >
                    <option value="Early Years (Pre-K, Ages 3-4)">Early Years (Pre-K, Ages 3–4)</option>
                    <option value="Kindergarten (Ages 4-5)">Kindergarten (Ages 4–5)</option>
                    <option value="Grade 1 - 2 (Primary)">Primary: Grades 1 – 2</option>
                    <option value="Grade 3 - 5 (Primary)">Primary: Grades 3 – 5</option>
                    <option value="Grade 6 - 8 (Middle School)">Middle School: Grades 6 – 8</option>
                    <option value="Grade 9 (Cambridge IGCSE)">Grade 9 (Cambridge IGCSE)</option>
                    <option value="Grade 10 (Cambridge IGCSE)">Grade 10 (Cambridge IGCSE)</option>
                    <option value="Grade 11 (IB Diploma Programme)">Grade 11 (IB Diploma Programme)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="intakeTerm" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Anticipated Intake Term *
                  </label>
                  <select
                    id="intakeTerm"
                    name="intakeTerm"
                    value={formData.intakeTerm}
                    onChange={handleChange}
                    className="w-full bg-chalk-50 border border-hairline px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 focus:outline-none"
                  >
                    <option value="Michaelmas 2026 (September)">Michaelmas 2026 (September Entry - Main)</option>
                    <option value="Lent 2027 (January)">Lent 2027 (January Entry - Mid-Term)</option>
                    <option value="Michaelmas 2027 (September)">Michaelmas 2027 (Advance Booking)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Parent / Guardian Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-hairline">
                <Calendar className="w-4 h-4 text-brass-600" />
                <h4 className="font-serif text-lg font-semibold text-navy-950">
                  2. Parent / Guardian Details & Campus Tour
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
                    placeholder="e.g. Dr. Arthur Montgomery"
                    className={`w-full bg-chalk-50 border px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.parentName ? 'border-crimson-700 ring-1 ring-crimson-700' : 'border-hairline focus:border-navy-950 focus:ring-1 focus:ring-navy-950'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-crimson-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.parentName}
                    </p>
                  )}
                </div>

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
                    placeholder="arthur.m@example.com"
                    className={`w-full bg-chalk-50 border px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.email ? 'border-crimson-700 ring-1 ring-crimson-700' : 'border-hairline focus:border-navy-950 focus:ring-1 focus:ring-navy-950'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-crimson-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Telephone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 7700 900543"
                    className={`w-full bg-chalk-50 border px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                      errors.phone ? 'border-crimson-700 ring-1 ring-crimson-700' : 'border-hairline focus:border-navy-950 focus:ring-1 focus:ring-navy-950'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-crimson-700 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="tourPreference" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Campus Visit & Orientation Preference
                </label>
                <select
                  id="tourPreference"
                  name="tourPreference"
                  value={formData.tourPreference}
                  onChange={handleChange}
                  className="w-full bg-chalk-50 border border-hairline px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 focus:outline-none"
                >
                  <option value="In-Person Guided Tour">In-Person Accompanied Walkthrough (Oakridge Campus)</option>
                  <option value="Live Virtual Admissions Seminar">Live Virtual Seminar (for Relocating / International Families)</option>
                  <option value="Receive Prospectus Only First">Digital Prospectus Only at this stage</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Scholar Talents, Foreign Languages, or Specific Questions (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Inquiring about Grade 9 Music Scholarship, boarding accommodation, or bilingual immersion..."
                  className="w-full bg-chalk-50 border border-hairline px-3.5 py-2.5 text-sm rounded-micro text-slate-900 focus:border-navy-950 focus:bg-white focus:ring-1 focus:ring-navy-950 focus:outline-none"
                />
              </div>
            </div>

            {/* Section 3: Declaration & Submit */}
            <div className="pt-2 border-t border-hairline space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded-micro border-hairline text-brass-600 focus:ring-brass-500"
                />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
                  I understand that this form is a <strong>frontend hiring prototype demonstration</strong>. No data is transmitted to an external server or school database. *
                </label>
              </div>
              {errors.consent && (
                <p className="text-xs text-crimson-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.consent}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  icon={Send}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? 'Evaluating Dossier...' : 'Submit Admissions Inquiry Dossier'}
                </Button>

                <div className="text-xs text-slate-500 text-center sm:text-right">
                  <p>Direct Registrar Telephone: +44 (0) 20 7946 0195</p>
                  <p>Inquiries: admissions@eakinternational.edu</p>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
