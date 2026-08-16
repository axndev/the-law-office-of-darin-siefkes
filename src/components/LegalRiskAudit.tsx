import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, RefreshCw, Sparkles, Scale, FileText } from 'lucide-react';

interface LegalRiskAuditProps {
  onOpenConsultation: () => void;
}

interface AuditQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    label: string;
    score: number; // 0 = high risk, 20 = safe
    riskNote?: string;
  }[];
}

const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    id: 1,
    category: 'Company Governance & Ownership',
    question: 'Do you have a customized Texas Company Agreement (LLC) or Bylaws with buyout & deadlock provisions?',
    options: [
      { label: 'Yes, customized by an experienced Texas corporate attorney', score: 20 },
      { label: 'We used a generic online template / default state form', score: 10, riskNote: 'Generic templates often fail during partner exits or disputes' },
      { label: 'No written agreement or verbal agreement only', score: 0, riskNote: 'Severe risk: Texas default statutory rules apply to your equity' },
    ],
  },
  {
    id: 2,
    category: 'IP & Work Product Ownership',
    question: 'Have all contractors, developers, and key employees signed written Intellectual Property Assignment agreements?',
    options: [
      { label: 'Yes, signed IP assignment agreements for 100% of contributors', score: 20 },
      { label: 'For some contractors, but not consistently documented', score: 10, riskNote: 'Unassigned contractor code or designs remain contractor property' },
      { label: 'No formal IP assignment agreements signed', score: 0, riskNote: 'Major vulnerability during fundraising, M&A due diligence, or dispute' },
    ],
  },
  {
    id: 3,
    category: 'Client & Vendor Contracts',
    question: 'Do your customer contracts contain enforceable Texas Limitation of Liability & Indemnification clauses?',
    options: [
      { label: 'Yes, standard MSA with liability caps customized for our risk', score: 20 },
      { label: 'We sign our clients’ contracts or basic email proposals', score: 5, riskNote: 'You may be exposing entire business assets to unlimited consequential damages' },
      { label: 'We do not use written customer contracts', score: 0, riskNote: 'Critical exposure for unpaid invoices and warranty claims' },
    ],
  },
  {
    id: 4,
    category: 'Regulatory & BOI Compliance',
    question: 'Have you filed your federal FinCEN Beneficial Ownership Information (BOI) and Texas Franchise Tax reports?',
    options: [
      { label: 'Yes, fully filed and registered with active Texas good standing', score: 20 },
      { label: 'Unsure or haven’t completed federal BOI filing yet', score: 5, riskNote: 'Federal Corporate Transparency Act penalties can reach $591/day' },
      { label: 'No filings completed since entity registration', score: 0, riskNote: 'Risk of administrative forfeiture of corporate veil in Texas' },
    ],
  },
  {
    id: 5,
    category: 'Worker Classification & Non-Competes',
    question: 'Are your 1099 independent contractors and non-compete agreements compliant with strict Texas legal standards?',
    options: [
      { label: 'Yes, audited under Texas Workforce Commission & modern FTC rules', score: 20 },
      { label: 'We use generic non-competes and standard 1099 setups without legal review', score: 10, riskNote: 'Overly broad non-competes are void and unenforceable in Texas' },
      { label: 'Uncertain of current worker classification compliance', score: 5, riskNote: 'High risk of retroactive payroll tax and wage penalty audits' },
    ],
  },
];

export const LegalRiskAudit: React.FC<LegalRiskAuditProps> = ({ onOpenConsultation }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, score: number) => {
    const nextAnswers: Record<number, number> = { ...answers, [questionId]: score };
    setAnswers(nextAnswers);

    if (currentStep < AUDIT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setCompleted(false);
  };

  const totalScore = (Object.values(answers) as number[]).reduce((acc: number, score: number) => acc + score, 0);

  const getScoreAssessment = (score: number) => {
    if (score >= 85) {
      return {
        level: 'Strong Legal Posture',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badgeColor: 'bg-emerald-600',
        desc: 'Your business has structured key foundational legal protections. Consider a periodic annual review to ensure compliance with updated Texas statutes.',
      };
    }
    if (score >= 50) {
      return {
        level: 'Moderate Legal Exposure',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        badgeColor: 'bg-amber-600',
        desc: 'Your business has significant gaps in contract liability, IP protection, or company governance that expose owners to unnecessary personal and corporate risk.',
      };
    }
    return {
      level: 'High Legal Risk Vulnerability',
      color: 'text-[#7A1B28] bg-red-50 border-red-200',
      badgeColor: 'bg-[#7A1B28]',
      desc: 'Critical governance and contract deficiencies detected. Without customized agreements and proper liability caps, a single partner dispute or customer claim could threaten your company.',
    };
  };

  const assessment = getScoreAssessment(totalScore);
  const currentQ = AUDIT_QUESTIONS[currentStep];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#1E293B] border-b border-stone-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#0C2340]/10 border border-[#0C2340]/20 text-xs text-[#0C2340] font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#7A1B28]" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0C2340] font-normal leading-tight">
            Texas Business Legal Health Check
          </h2>
          <p className="text-base text-slate-700 font-light">
            Take this 60-second diagnostic to evaluate your company's contracts, governance, and liability protection under Texas law.
          </p>
        </div>

        {/* Audit Interactive Box */}
        <div className="bg-white rounded-xl border border-stone-300 shadow-xl overflow-hidden">
          {!completed ? (
            <div>
              {/* Progress Header */}
              <div className="bg-[#0C2340] px-6 py-4 text-white flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D8B252]">
                    Question {currentStep + 1} of {AUDIT_QUESTIONS.length}
                  </span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-xs text-slate-300 font-light">{currentQ.category}</span>
                </div>
                <div className="w-32 bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C29B38] h-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / AUDIT_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Body */}
              <div className="p-6 sm:p-10 space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif text-[#0C2340] font-medium leading-snug">
                  {currentQ.question}
                </h3>

                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(currentQ.id, option.score)}
                      className="w-full text-left p-4 sm:p-5 rounded-lg border border-stone-300 hover:border-[#0C2340] hover:bg-[#F4F0E8] transition-all flex items-start justify-between group shadow-sm"
                    >
                      <div className="space-y-1 pr-4">
                        <span className="text-sm font-medium text-slate-900 group-hover:text-[#0C2340]">
                          {option.label}
                        </span>
                        {option.riskNote && (
                          <p className="text-xs text-[#7A1B28] flex items-center pt-0.5">
                            <AlertTriangle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                            {option.riskNote}
                          </p>
                        )}
                      </div>
                      <div className="w-6 h-6 rounded-full border border-stone-400 group-hover:border-[#0C2340] group-hover:bg-[#0C2340] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-transparent group-hover:text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs text-slate-600">
                <span>Direct analysis by The Law Office of Darin Siefkes</span>
                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-[#0C2340] font-semibold hover:underline"
                  >
                    &larr; Previous Question
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#7A1B28]/10 text-xs text-[#7A1B28] font-bold uppercase tracking-wider">
                  <span>Diagnostic Results</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#0C2340] font-normal">
                  Your Business Legal Health Score
                </h3>
              </div>

              {/* Score Display Card */}
              <div className={`p-6 sm:p-8 rounded-xl border ${assessment.color} space-y-4`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className={`w-3 h-3 rounded-full ${assessment.badgeColor}`}></span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {assessment.level}
                      </span>
                    </div>
                    <p className="text-sm font-normal leading-relaxed">{assessment.desc}</p>
                  </div>
                  <div className="text-center sm:text-right flex-shrink-0">
                    <div className="text-5xl font-serif font-bold leading-none">{totalScore}/100</div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider opacity-80">
                      Protection Index
                    </span>
                  </div>
                </div>
              </div>

              {/* Actionable Next Steps */}
              <div className="bg-[#0C2340] text-white rounded-xl p-6 sm:p-8 border border-slate-700 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D8B252]">
                    Recommended Action Plan
                  </span>
                  <h4 className="text-xl font-serif text-white font-medium">
                    Review Your Score with Attorney Darin Siefkes
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Don’t wait for a costly lawsuit or contract dispute to reveal cracks in your company's foundation. Schedule a 15-minute consultation to review your governance, contract templates, and risk mitigation plan.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={onOpenConsultation}
                    className="px-8 py-3.5 bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-white font-semibold text-xs uppercase tracking-widest rounded shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Schedule Free Strategy Review</span>
                    <ArrowRight className="w-4 h-4 text-[#D8B252]" />
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs uppercase tracking-widest font-semibold rounded transition-all flex items-center justify-center space-x-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retake Diagnostic</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
