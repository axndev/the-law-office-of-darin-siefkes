import React, { useState } from 'react';
import { Phone, MapPin, Clock, Printer, Shield, CheckCircle2, ArrowRight, ExternalLink, HelpCircle } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import { PageView } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageView, param?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    matter: 'Business Formation',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
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

  const consultationFaqs = [
    {
      q: 'How quickly will attorney Darin Siefkes respond to my inquiry?',
      a: 'Inquiries submitted through this form are reviewed directly by Darin. We typically respond within one business day during standard office hours.',
    },
    {
      q: 'Are initial consultations confidential?',
      a: 'Yes, inquiries are treated with professional discretion. However, please refrain from sending highly sensitive confidential details before a formal conflict check is performed.',
    },
    {
      q: 'Do you offer flat-fee options for legal services?',
      a: 'Yes. Many core commercial services—including business entity formations, trademark applications, and contract reviews—can be handled under transparent flat-fee arrangements.',
    },
  ];

  return (
    <div className="bg-[#FBF9F5] text-[#1E293B]">
      {/* Header Banner */}
      <section className="bg-[#0E1726] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141F32] border border-[#C5A059]/30 text-xs text-[#C5A059]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Austin, Texas Office</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight">
            Schedule a Consultation with <span className="italic text-[#D6B36E]">Darin Siefkes</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
            Practical business law counsel for Austin small businesses, entrepreneurs, and corporations. Connect directly with an experienced attorney.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-300 rounded-xl p-8 sm:p-10 shadow-lg space-y-6">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#B38E45]/10 text-[#B38E45] rounded-full flex items-center justify-center mx-auto border border-[#B38E45]/30">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#0E1726] font-medium">Consultation Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Attorney Darin Siefkes will review your details and contact you at <span className="text-[#B38E45] font-semibold">{formData.email || formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0E1726] text-white text-xs uppercase tracking-wider font-semibold rounded hover:bg-[#1C2B44] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-serif text-[#0E1726] font-medium">
                      Consultation Request Form
                    </h2>
                    <p className="text-xs text-slate-500">
                      You will communicate directly with attorney Darin Siefkes.
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
                        placeholder="e.g. Michael Cooper"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Capital Hill Software LLC"
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
                        placeholder="michael@company.com"
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
                        placeholder="(512) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Primary Legal Matter
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
                        Preferred Contact Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors"
                      >
                        <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                        <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM – 5:30 PM)">Late Afternoon (4:00 PM – 5:30 PM)</option>
                        <option value="Anytime via Email">Anytime via Email</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Message & Brief Background
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe your objective, timeline, or transaction (avoid submitting sensitive trade secrets or confidential details prior to conflict check)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-stone-300 rounded px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#B38E45] transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Mandatory Disclaimer */}
                  <div className="p-3.5 bg-[#F3EFE6] rounded border border-stone-200 text-[11px] text-slate-600 flex items-start space-x-2.5">
                    <Shield className="w-4 h-4 text-[#B38E45] flex-shrink-0 mt-0.5" />
                    <span>
                      Notice: Submitting this form does not create an attorney-client relationship. An attorney-client relationship is formed only upon formal engagement agreement and conflict check.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#0E1726] hover:bg-[#1C2B44] text-white font-semibold text-xs uppercase tracking-widest rounded transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting Request...' : 'Request a Consultation'}</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Office Coordinates & FAQ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Verified Location Card */}
            <div className="bg-white border border-stone-300 rounded-xl p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-serif text-[#0E1726] font-medium border-b border-stone-100 pb-3">
                Austin Office Information
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#B38E45] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{FIRM_INFO.name}</div>
                    <div>{FIRM_INFO.address.street}</div>
                    <div>{FIRM_INFO.address.city}, {FIRM_INFO.address.state} {FIRM_INFO.address.zip}</div>
                    <div className="text-stone-500 pt-1">Central Austin / Koenig Lane corridor</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-2 border-t border-stone-100">
                  <Phone className="w-4 h-4 text-[#B38E45] flex-shrink-0" />
                  <div>
                    <span className="text-stone-500 mr-1">Phone:</span>
                    <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-slate-900 font-semibold hover:text-[#B38E45]">
                      {FIRM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Printer className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  <div>
                    <span className="text-stone-500 mr-1">Fax:</span>
                    <span className="text-slate-700">{FIRM_INFO.fax}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-[#B38E45] flex-shrink-0" />
                  <div>
                    <span className="text-stone-500 mr-1">Hours:</span>
                    <span className="text-slate-900 font-medium">{FIRM_INFO.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=1523+W+Koenig+Ln+Austin+TX+78756"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded bg-[#0E1726] hover:bg-[#1C2B44] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>
              </div>
            </div>

            {/* Consultation FAQs */}
            <div className="bg-[#F3EFE6] border border-stone-300 rounded-xl p-8 space-y-4">
              <h4 className="font-serif text-lg text-[#0E1726] font-medium">Consultation FAQ</h4>
              <div className="space-y-3">
                {consultationFaqs.map((faq, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <p className="font-semibold text-slate-900">{faq.q}</p>
                    <p className="text-slate-600 leading-relaxed font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
