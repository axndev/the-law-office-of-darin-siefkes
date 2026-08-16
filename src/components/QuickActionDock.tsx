import React from 'react';
import { Phone, Calendar, Clock, MessageSquare, Shield } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface QuickActionDockProps {
  onOpenConsultation: () => void;
}

export const QuickActionDock: React.FC<QuickActionDockProps> = ({ onOpenConsultation }) => {
  return (
    <aside aria-label="Quick contact dock" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md w-full sm:w-auto animate-in slide-in-from-bottom-4 duration-300 pointer-events-auto">
      <div className="bg-[#0C2340]/95 backdrop-blur-md border border-[#C29B38]/50 shadow-2xl rounded-xl p-3 sm:px-4 sm:py-3 flex items-center justify-between space-x-3 text-white">
        <div className="hidden sm:flex items-center space-x-2.5 pr-3 border-r border-slate-700">
          <div className="w-2 h-2 rounded-full bg-[#D8B252]"></div>
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#D8B252] font-semibold block leading-none">
              Direct Counsel
            </span>
            <span className="text-xs text-slate-200 font-medium">Austin, TX</span>
          </div>
        </div>

        <a
          href={`tel:${FIRM_INFO.phoneRaw}`}
          className="flex items-center space-x-1.5 px-3 py-2 rounded bg-[#122B4D] hover:bg-[#193863] text-xs font-semibold text-white border border-slate-700 transition-colors"
          title="Call Attorney Darin Siefkes"
        >
          <Phone className="w-3.5 h-3.5 text-[#D8B252]" />
          <span>(512) 291-6991</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2 rounded bg-[#7A1B28] hover:bg-[#8D2030] border border-[#66101C] text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D8B252]" />
          <span>Schedule Call</span>
        </button>
      </div>
    </aside>
  );
};
