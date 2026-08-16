import React, { useState } from 'react';
import { Phone, MapPin, Clock, Printer, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    matter: 'Business Formation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Coordinates & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B38E45] font-semibold">
                Direct Contact & Inquiries
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0E1726] font-normal leading-tight">
                Let's Talk About Your Business
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Whether you need contract review, entity formation, trademark counsel, or advice on an upcoming transaction, contact attorney Darin Siefkes to arrange a consultation.
              </p>
            </div>

            {/* Office Information Cards */}
            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-sm space-y-1.5">
                <div className="flex items-center space-x-2 text-[#B38E45] font-semibold uppercase tracking-wider text-[11px]">
                  <MapPin className="w-4 h-4" />
                  <span>Office Address</span>
                </div>
                <div className="text-sm font-serif font-medium text-[#0E1726]">{FIRM_INFO.address.street}</div>
                <div className="text-slate-600">{FIRM_INFO.address.city}, {FIRM_INFO.address.state} {FIRM_INFO.address.zip}</div>
                <div className="text-[11px] text-stone-500 pt-1">Central Austin / Koenig Lane location with convenient on-site parking.</div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-sm space-y-1.5">
                <div className="flex items-center space-x-2 text-[#B38E45] font-semibold uppercase tracking-wider text-[11px]">
                  <Phone className="w-4 h-4" />
                  <span>Telephone & Inquiries</span>
                </div>
                <div className="text-sm font-medium text-[#0E1726]">
                  <a href={`tel:${FIRM_INFO.phoneRaw}`} className="hover:text-[#B38E45] transition-colors">
                    {FIRM_INFO.phone}
                  </a>
                </div>
                <div className="text-slate-600">Fax: {FIRM_INFO.fax}</div>
              </div>

              <div className="p-5 rounded-lg bg-white border border-stone-200 shadow-sm space-y-1.5">
                <div className="flex items-center space-x-2 text-[#B38E45] font-semibold uppercase tracking-wider text-[11px]">
                  <Clock className="w-4 h-4" />
                  <span>Office Hours</span>
                </div>
                <div className="text-sm font-medium text-[#0E1726]">{FIRM_INFO.hours}</div>
                <div className="text-slate-600">Initial consultations by appointment.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-300 rounded-xl p-8 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#B38E45]/10 text-[#B38E45] rounded-full flex items-center justify-center mx-auto border border-[#B38E45]/30">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#0E1726] font-medium">Thank You For Reaching Out</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been submitted directly to attorney Darin Siefkes. We will review your message and reach out to you at <span className="font-semibold text-slate-900">{formData.email || formData.phone}</span> promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0E1726] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#1C2B44] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl font-serif text-[#0E1726] font-medium">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the form below to connect with attorney Darin Siefkes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-[#B38E45]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Business / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Austin Tech Solutions LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address <span className="text-[#B38E45]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-[#B38E45]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(512) 555-0100"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Legal Matter Category
                    </label>
                    <select
                      value={formData.matter}
                      onChange={(e) => setFormData({ ...formData, matter: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                    >
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                      <option value="General Corporate Counsel">General Outside Counsel</option>
                      <option value="Other Matter">Other Commercial Legal Matter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Message & Brief Background
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please summarize your question or legal objective (avoid disclosing sensitive confidential details until conflict check is complete)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Required Legal Disclaimer */}
                  <div className="p-3 bg-[#F3EFE6] rounded border border-stone-200 text-[11px] text-slate-600 flex items-start space-x-2">
                    <Shield className="w-4 h-4 text-[#B38E45] flex-shrink-0 mt-0.5" />
                    <span>
                      Disclaimer: Submitting this form does not create an attorney-client relationship. Please do not send confidential or sensitive information until formal engagement.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#0E1726] hover:bg-[#1C2B44] text-white font-semibold text-xs uppercase tracking-widest rounded transition-all shadow flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting...' : 'Request a Consultation'}</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
