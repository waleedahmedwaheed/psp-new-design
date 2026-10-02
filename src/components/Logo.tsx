import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const cubeSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className="flex items-center gap-2.5 select-none cursor-pointer group">
      {/* 3D Isometric Cube Logo */}
      <div className={`${cubeSizes[size]} relative shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
          <defs>
            <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7a18" />
              <stop offset="100%" stopColor="#e54300" />
            </linearGradient>
            <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#034b8c" />
            </linearGradient>
            <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a3e635" />
              <stop offset="100%" stopColor="#65a30d" />
            </linearGradient>
          </defs>

          {/* Top Face */}
          <polygon points="50,6 92,28 50,50 8,28" fill="url(#cubeTop)" stroke="#ffffff" strokeWidth="1.5" />
          <text
            x="50"
            y="33"
            textAnchor="middle"
            fill="#ffffff"
            fontWeight="900"
            fontSize="22"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            className="select-none"
          >
            P
          </text>

          {/* Left Face */}
          <polygon points="8,28 50,50 50,94 8,72" fill="url(#cubeLeft)" stroke="#ffffff" strokeWidth="1.5" />
          <text
            x="29"
            y="70"
            textAnchor="middle"
            fill="#ffffff"
            fontWeight="900"
            fontSize="26"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            className="select-none"
          >
            S
          </text>

          {/* Right Face */}
          <polygon points="50,50 92,28 92,72 50,94" fill="url(#cubeRight)" stroke="#ffffff" strokeWidth="1.5" />
          <text
            x="71"
            y="70"
            textAnchor="middle"
            fill="#0f2b05"
            fontWeight="900"
            fontSize="26"
            fontFamily="'Chakra Petch', Impact, sans-serif"
            className="select-none"
          >
            P
          </text>
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex items-baseline tracking-tight font-extrabold italic">
          <span className={`${textSizes[size]} text-white font-black tracking-normal drop-shadow-sm`}>
            PLAY
          </span>
          <span className={`${textSizes[size]} bg-gradient-to-b from-[#ffb400] to-[#f57c00] bg-clip-text text-transparent font-black tracking-normal ml-0.5`}>
            SPORTS
          </span>
          <span className={`${textSizes[size]} bg-gradient-to-b from-[#38bdf8] to-[#0284c7] bg-clip-text text-transparent font-black tracking-normal ml-0.5`}>
            POOLS
          </span>
          <span className="text-xs sm:text-sm text-[#38bdf8] font-bold not-italic ml-0.5 opacity-90">
            .COM
          </span>
        </div>
      )}
    </div>
  );
};
