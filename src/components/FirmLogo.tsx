import React from 'react';

interface FirmLogoProps {
  variant?: 'light' | 'dark' | 'mark-only' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const FirmLogo: React.FC<FirmLogoProps> = ({
  variant = 'light',
  size = 'md',
  className = '',
}) => {
  const isDark = variant === 'dark';
  const isMarkOnly = variant === 'mark-only';
  const isStacked = variant === 'stacked';

  const markSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: {
      pre: 'text-[9px] tracking-[0.25em]',
      main: 'text-sm sm:text-base tracking-[0.08em]',
      sub: 'text-[8px] sm:text-[9px] tracking-[0.2em]',
    },
    md: {
      pre: 'text-[9px] sm:text-[10px] tracking-[0.26em]',
      main: 'text-base sm:text-lg tracking-[0.08em]',
      sub: 'text-[9px] sm:text-[10px] tracking-[0.22em]',
    },
    lg: {
      pre: 'text-[10px] sm:text-[11px] tracking-[0.28em]',
      main: 'text-lg sm:text-xl tracking-[0.09em]',
      sub: 'text-[10px] sm:text-[11px] tracking-[0.22em]',
    },
  };

  const currentText = textSizes[size];

  return (
    <div
      className={`inline-flex items-center space-x-3.5 group select-none transition-all duration-200 ${className}`}
    >
      {/* Bespoke Architectural Seal / Monogram Mark */}
      <div
        className={`relative ${markSizes[size]} flex-shrink-0 flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-[1.03] ${
          isDark
            ? 'bg-[#0C2340] text-[#D8B252] shadow-sm'
            : 'bg-[#071324] text-[#D8B252] shadow-md'
        }`}
        style={{
          border: '1px solid rgba(216, 178, 82, 0.4)',
        }}
      >
        {/* Precise SVG Crest with Architectural Intertwined 'S' and Classic Geometric Lineage */}
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full p-1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Geometric Precision Border */}
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            stroke="#D8B252"
            strokeWidth="1"
            strokeOpacity="0.85"
          />
          {/* Inner Inset Border */}
          <rect
            x="7"
            y="7"
            width="34"
            height="34"
            stroke="#D8B252"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />

          {/* Corner Miter Points */}
          <line x1="4" y1="4" x2="7" y2="7" stroke="#D8B252" strokeWidth="0.5" strokeOpacity="0.6" />
          <line x1="44" y1="4" x2="41" y2="7" stroke="#D8B252" strokeWidth="0.5" strokeOpacity="0.6" />
          <line x1="4" y1="44" x2="7" y2="41" stroke="#D8B252" strokeWidth="0.5" strokeOpacity="0.6" />
          <line x1="44" y1="44" x2="41" y2="41" stroke="#D8B252" strokeWidth="0.5" strokeOpacity="0.6" />

          {/* Classical Roman 'S' Monogram Centered */}
          <path
            d="M 31 16.5 C 31 16.5 29.5 13.5 24 13.5 C 18.5 13.5 16 16.8 16 20.2 C 16 25 29 24 29 29.5 C 29 33.5 25.5 35 23 35 C 17.5 35 15.5 31.5 15.5 31.5 M 15 17 H 18 M 30 31.5 H 33"
            stroke="#EAD59A"
            strokeWidth="2.2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />

          {/* Subtle Texas Star Accent at Top */}
          <polygon
            points="24,8.5 25,10.5 27,10.5 25.5,11.8 26,13.8 24,12.5 22,13.8 22.5,11.8 21,10.5 23,10.5"
            fill="#7A1B28"
          />
        </svg>
      </div>

      {/* Typographic Identity */}
      {!isMarkOnly && (
        <div className="flex flex-col text-left justify-center">
          {/* Pre-title */}
          <span
            className={`uppercase font-sans font-semibold text-[#8D2030] dark:text-[#E2808E] ${currentText.pre}`}
            style={{ letterSpacing: '0.22em' }}
          >
            The Law Office of
          </span>

          {/* Main Attorney Name / Wordmark */}
          <span
            className={`font-serif font-bold uppercase tracking-wider leading-tight transition-colors ${
              currentText.main
            } ${
              isDark
                ? 'text-[#0C2340] group-hover:text-[#7A1B28]'
                : 'text-white group-hover:text-[#D8B252]'
            }`}
            style={{
              fontFamily: '"Cinzel", "Cormorant Garamond", Georgia, serif',
            }}
          >
            Darin Siefkes
          </span>

          {/* Subtitle location & discipline */}
          <div className="flex items-center space-x-2 mt-0.5">
            <span
              className={`font-sans uppercase font-medium ${
                isDark ? 'text-slate-600' : 'text-slate-300'
              } ${currentText.sub}`}
            >
              Austin, Texas
            </span>
            <span className="text-[#D8B252] text-[8px]">&bull;</span>
            <span
              className={`font-sans uppercase font-semibold text-[#D8B252] ${currentText.sub}`}
            >
              Business Counsel
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
