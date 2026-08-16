import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Phone, Clock, Mail, ArrowRight } from 'lucide-react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import { ConsultationRequest } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMatter?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultMatter = 'Business Formation',
}) => {
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    matterType: defaultMatter,
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable transmission of consultation request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#0E1726] border border-slate-700/80 rounded-xl shadow-2xl max-w-2xl w-full text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-[#141F32] px-6 py-4 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded border border-[#C5A059]/40 bg-[#09101D] flex items-center justify-center text-[#C5A059] font-serif font-bold text-sm">
              DS
            </div>
            <div>
              <h3 className="font-serif text-lg text-white font-medium">Schedule a Consultation</h3>
              <p className="text-xs text-[#C5A059] uppercase tracking-wider">The Law Office of Darin Siefkes</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#C5A059]/10 text-[#C5A059] border border-[#C5A059]/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-serif text-white font-normal">Consultation Request Received</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Attorney Darin Siefkes reviews each inquiry directly and will follow up with you at{' '}
                <span className="text-[#C5A059]">{formData.email || formData.phone}</span> promptly to coordinate your consultation.
              </p>
            </div>

            <div className="bg-[#141F32] rounded-lg p-4 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2 border border-slate-700">
              <p className="font-semibold text-white">Direct Office Coordinates:</p>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call directly: {FIRM_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Hours: {FIRM_INFO.hours}</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              Please provide brief background on your company and legal needs. You will communicate directly with attorney Darin Siefkes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Full Name <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Company / Business Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Austin Tech Labs LLC"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Email Address <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Phone Number <span className="text-[#C5A059]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(512) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Primary Legal Matter
                </label>
                <select
                  value={formData.matterType}
                  onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                  className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  {PRACTICE_AREAS.map((area) => (
                    <option key={area.id} value={area.title} className="bg-[#0E1726]">
                      {area.title}
                    </option>
                  ))}
                  <option value="General Outside Counsel" className="bg-[#0E1726]">General Outside Business Counsel</option>
                  <option value="Other Commercial Matter" className="bg-[#0E1726]">Other Commercial Legal Matter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                  Preferred Contact Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors"
                >
                  <option value="Morning (9:00 AM – 12:00 PM)" className="bg-[#0E1726]">Morning (9:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (1:00 PM – 4:00 PM)" className="bg-[#0E1726]">Afternoon (1:00 PM – 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM – 5:30 PM)" className="bg-[#0E1726]">Late Afternoon (4:00 PM – 5:30 PM)</option>
                  <option value="Anytime via Email" className="bg-[#0E1726]">Anytime via Email</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                Brief Description of Legal Needs
              </label>
              <textarea
                rows={3}
                placeholder="Please summarize your timeline, entity structure, transaction type, or specific question (please do not submit sensitive confidential details prior to conflict check)..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-[#141F32] border border-slate-700 rounded px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 flex items-start space-x-2">
              <Shield className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
              <span>
                Confidentiality Notice: Submitting this form does not establish an attorney-client relationship. An attorney-client relationship is formed only upon formal engagement agreement execution and conflict check clearance.
              </span>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <div className="text-xs text-slate-400 hidden sm:block">
                Direct phone: <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-[#C5A059] hover:underline font-medium">{FIRM_INFO.phone}</a>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3 bg-[#C5A059] hover:bg-[#D6B36E] text-[#0E1726] font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
