import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Logo } from './Logo';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-[#020b14] py-8 sm:py-10 px-4 sm:px-6 border-b border-cyan-950">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-1.5 h-6 bg-gradient-to-b from-[#f97316] to-[#ea580c] rounded-sm" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider flex items-center gap-2">
            <span className="text-white drop-shadow-sm">HOW IT</span>
            <span className="text-[#38bdf8] drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">WORKS</span>
          </h2>
        </div>

        {/* Grid: 3 Steps on left/center + Devices mockup on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3 Step Flow (Cols 1-8) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative px-2 group">
              {/* Circular Step Badge */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#84cc16] to-[#4d7c0f] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-[0_0_20px_rgba(132,204,22,0.6)] border-2 border-[#bef264] mb-3 group-hover:scale-110 transition-transform">
                1
              </div>

              <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider mb-1.5">
                CHOOSE A POOL
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[240px]">
                Browse our open pools and find the one that fits your style and budget.
              </p>

              {/* Connecting Chevron (Desktop only) */}
              <div className="hidden md:flex absolute -right-4 top-6 text-[#0284c7]">
                <ChevronRight className="w-8 h-8 stroke-[3]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative px-2 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#84cc16] to-[#4d7c0f] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-[0_0_20px_rgba(132,204,22,0.6)] border-2 border-[#bef264] mb-3 group-hover:scale-110 transition-transform">
                2
              </div>

              <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider mb-1.5">
                MAKE YOUR PICKS
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[240px]">
                Select your winners, choose your entry level and submit your entry.
              </p>

              {/* Connecting Chevron (Desktop only) */}
              <div className="hidden md:flex absolute -right-4 top-6 text-[#0284c7]">
                <ChevronRight className="w-8 h-8 stroke-[3]" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative px-2 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#84cc16] to-[#4d7c0f] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-[0_0_20px_rgba(132,204,22,0.6)] border-2 border-[#bef264] mb-3 group-hover:scale-110 transition-transform">
                3
              </div>

              <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider mb-1.5">
                COMPETE & WIN
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[240px]">
                Track your picks, check results and see if you&apos;re a winner!
              </p>
            </div>

          </div>

          {/* Multi-Device Graphic (Cols 9-12) */}
          <div className="lg:col-span-4 flex items-center justify-center p-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[220px] flex items-center justify-center">
              
              {/* Desktop Monitor (Center/Back) */}
              <div className="w-[240px] h-[150px] bg-slate-900 rounded-md border-2 border-slate-700 shadow-2xl p-1 flex flex-col justify-between relative z-10">
                <div className="w-full h-full bg-[#031526] rounded flex flex-col items-center justify-center relative overflow-hidden border border-cyan-900/60">
                  <div className="absolute top-1 left-2 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <Logo size="sm" showText={false} />
                  <div className="text-[9px] font-bold text-cyan-300 mt-1 uppercase tracking-tight">
                    PlaySportsPools
                  </div>
                  <div className="flex gap-1 mt-1.5">
                    <span className="w-8 h-1.5 bg-[#84cc16] rounded-xs" />
                    <span className="w-12 h-1.5 bg-cyan-600 rounded-xs" />
                    <span className="w-6 h-1.5 bg-yellow-500 rounded-xs" />
                  </div>
                </div>
                {/* Stand */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-slate-700 rounded-t-sm" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-600 rounded-full" />
              </div>

              {/* Tablet (Left/Front) */}
              <div className="absolute -left-2 sm:left-2 bottom-2 w-[120px] h-[150px] bg-slate-950 rounded-lg border-2 border-slate-600 shadow-2xl p-1 z-20 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-[#041d33] rounded flex flex-col items-center justify-center border border-cyan-800/50 p-1">
                  <Logo size="sm" showText={false} />
                  <div className="text-[8px] font-black text-[#84cc16] mt-1">OPEN POOLS</div>
                  <div className="w-full mt-1 bg-black/40 p-1 rounded space-y-0.5">
                    <div className="h-1 bg-slate-600 rounded" />
                    <div className="h-1 bg-yellow-500/70 rounded w-3/4" />
                  </div>
                </div>
              </div>

              {/* Smartphone (Right/Front) */}
              <div className="absolute -right-2 sm:right-2 bottom-1 w-[70px] h-[120px] bg-black rounded-lg border-2 border-slate-600 shadow-2xl p-0.5 z-20 transform rotate-6 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-[#021324] rounded flex flex-col items-center justify-center p-0.5 border border-cyan-900">
                  <div className="w-3 h-0.5 bg-slate-700 rounded-full mb-1" />
                  <Logo size="sm" showText={false} />
                  <div className="text-[6.5px] font-bold text-yellow-400 mt-1">$1,977.06</div>
                  <div className="w-8 h-2 bg-[#84cc16] rounded-xs mt-1 text-[5px] text-center text-black font-bold flex items-center justify-center">
                    PICK
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
