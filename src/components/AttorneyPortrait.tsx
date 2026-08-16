import React from 'react';
import { FIRM_INFO } from '../data/firmData';

interface AttorneyPortraitProps {
  className?: string;
  variant?: 'hero' | 'card' | 'compact';
  showOverlay?: boolean;
}

export const AttorneyPortrait: React.FC<AttorneyPortraitProps> = ({
  className = '',
  variant = 'card',
  showOverlay = true,
}) => {
  // High quality professional portrait representation for Darin Siefkes, Austin Texas Business Attorney
  const portraitUrl =
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85';

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img
        src={portraitUrl}
        alt="Darin P. Siefkes - Austin, Texas Business Law Attorney"
        className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
        loading="eager"
      />

      {/* Subtle dual gradient vignette with navy and crimson warmth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#0C2340]/25 to-transparent pointer-events-none"></div>

      {showOverlay && (
        <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
          <div className="flex items-center space-x-2 mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C29B38]"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#D8B252] font-semibold">
              Principal Attorney & Founder
            </span>
          </div>
          <h3 className="text-2xl font-serif font-medium leading-tight text-white drop-shadow-sm">
            {FIRM_INFO.attorney.name}
          </h3>
          <p className="text-xs text-slate-300 font-light mt-0.5">
            Baylor Law J.D., <em>cum laude</em> &bull; Admitted 2005
          </p>
        </div>
      )}
    </div>
  );
};
