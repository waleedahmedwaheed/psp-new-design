import React from 'react';
import heroSoccerImg from '../assets/images/hero_soccer_player_1790943308006.jpg';

interface HeroBannerProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  onExplorePools: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onOpenAuth, onExplorePools }) => {
  return (
    <section className="relative w-full bg-[#020b14] overflow-hidden border-b border-cyan-950">
      {/* Background Hero Image with Sports Scrim & Stadium Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSoccerImg}
          alt="Acrobatic soccer volley in stadium lights"
          className="w-full h-full object-cover object-center scale-105 opacity-65 md:opacity-80 transition-transform duration-1000 ease-out hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend seamlessly into page styling */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b14]/95 via-[#020b14]/75 to-[#020b14]/85 md:from-[#020b14]/90 md:via-[#020b14]/60 md:to-[#020b14]/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#020b14]/40 to-[#020b14]" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#020b14] to-transparent" />
      </div>

      {/* Realistic 3D Soccer Ball in Upper Right (Matching Screenshot) */}
      <div className="absolute -top-4 -right-4 sm:top-2 sm:right-6 md:top-4 md:right-16 z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] animate-pulse [animation-duration:6s]">
        <svg viewBox="0 0 200 200" className="w-full h-full transform rotate-12">
          <defs>
            <radialGradient id="ballShade" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="55%" stopColor="#e2e8f0" />
              <stop offset="85%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#1e293b" />
            </radialGradient>
            <radialGradient id="pentagonGrad" cx="40%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#020617" />
            </radialGradient>
            <filter id="ballGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#000000" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Main sphere with lighting */}
          <circle cx="100" cy="100" r="88" fill="url(#ballShade)" filter="url(#ballGlow)" />

          {/* Center Pentagon */}
          <polygon points="100,68 126,86 116,118 84,118 74,86" fill="url(#pentagonGrad)" stroke="#475569" strokeWidth="1.5" />

          {/* Connecting Seams & Surrounding Pentagons */}
          <polygon points="100,68 100,32 128,18 144,48 126,86" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <polygon points="126,86 160,86 172,118 148,142 116,118" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <polygon points="116,118 124,154 98,172 74,154 84,118" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <polygon points="84,118 52,142 28,118 40,86 74,86" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <polygon points="74,86 56,48 72,18 100,32" fill="none" stroke="#64748b" strokeWidth="2.5" />

          {/* Surrounding Black Patches */}
          <polygon points="100,32 128,18 144,48" fill="url(#pentagonGrad)" opacity="0.95" />
          <polygon points="160,86 172,118 148,142" fill="url(#pentagonGrad)" opacity="0.95" />
          <polygon points="124,154 98,172 74,154" fill="url(#pentagonGrad)" opacity="0.95" />
          <polygon points="52,142 28,118 40,86" fill="url(#pentagonGrad)" opacity="0.95" />
          <polygon points="56,48 72,18 100,32" fill="url(#pentagonGrad)" opacity="0.95" />

          {/* Specular Highlight */}
          <ellipse cx="68" cy="55" rx="30" ry="16" fill="#ffffff" opacity="0.35" transform="rotate(-30 68 55)" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center">
        
        {/* Top Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          WIN REAL MONEY WITH
        </h2>

        {/* Massive Headline */}
        <h1 className="mt-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#fef08a] via-[#eab308] to-[#84cc16] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          DAILY & WEEKLY SPORTS POOLS!
        </h1>

        {/* CTA Buttons Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => onOpenAuth('login')}
            className="w-36 sm:w-44 py-3 text-base sm:text-lg font-black tracking-wider uppercase text-white bg-[#031d36]/90 hover:bg-[#06335d] border-2 border-cyan-500/80 rounded-md transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] cursor-pointer active:scale-95"
          >
            LOGIN
          </button>
          <button
            onClick={() => onOpenAuth('register')}
            className="w-36 sm:w-44 py-3 text-base sm:text-lg font-black tracking-wider uppercase text-[#0d2806] bg-[#84cc16] hover:bg-[#a3e635] rounded-md transition-all duration-200 shadow-[0_0_20px_rgba(132,204,22,0.65)] hover:shadow-[0_0_30px_rgba(163,230,53,0.9)] cursor-pointer active:scale-95 border-b-4 border-[#65a30d]"
          >
            REGISTER
          </button>
        </div>

        {/* Subtitle / Rules description */}
        <div className="mt-6 max-w-2xl text-slate-200 text-sm sm:text-base font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] space-y-1">
          <p>
            Play Pick&apos;Em Pools and more for your chance to win real money.
          </p>
          <p>
            Refer friends and <span className="text-[#facc15] font-bold">earn up to 5% of the prize pool share</span> when they win!
          </p>
        </div>

        {/* Catchphrase Punchline */}
        <div className="mt-5">
          <p className="text-xl sm:text-2xl md:text-3xl font-black italic tracking-wider text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            IF YOU CAN <span className="text-[#facc15] font-black underline decoration-cyan-400 decoration-4 underline-offset-4">PICK</span>, YOU CAN <span className="text-[#84cc16] font-black underline decoration-yellow-400 decoration-4 underline-offset-4">PLAY</span>!
          </p>
        </div>

      </div>
    </section>
  );
};
