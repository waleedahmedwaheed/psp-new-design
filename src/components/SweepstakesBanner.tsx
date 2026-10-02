import React from 'react';
import sweepstakesImg from '../assets/images/sweepstakes_chips_gift_1790943322206.jpg';
import { Gift, Users, Coins, Crown, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SweepstakesBannerProps {
  onEnterSweepstakes: () => void;
  isEntered: boolean;
}

export const SweepstakesBanner: React.FC<SweepstakesBannerProps> = ({
  onEnterSweepstakes,
  isEntered,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#021124] via-[#051f38] to-[#010e1c] border-y-2 border-amber-500/50 shadow-2xl py-6 sm:py-8 px-4 sm:px-6">
      
      {/* Background Graphic Asset with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={sweepstakesImg}
          alt="PSP Sweepstakes Gift Box and Chips"
          className="w-full h-full object-cover object-left opacity-35 lg:opacity-45 mix-blend-screen scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021124]/90 via-[#021124]/75 to-[#021124]/95" />
        {/* Golden light rays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Side: Stacks of PSP chips & Gift presentation */}
        <div className="lg:col-span-4 flex items-center justify-center lg:justify-start">
          <div className="relative group">
            {/* Glowing frame around image */}
            <div className="w-56 sm:w-64 md:w-72 h-44 sm:h-48 rounded-lg overflow-hidden border-2 border-amber-400/60 shadow-[0_0_30px_rgba(245,158,11,0.35)] relative">
              <img
                src={sweepstakesImg}
                alt="Weekly $100 PSP Sweepstakes"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-[10px] uppercase px-2 py-0.5 rounded shadow">
                $100 PRIZE POOL
              </div>
            </div>

            {/* Floating PSP Gold & Blue Chip Badges */}
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-cyan-500 to-blue-700 text-white font-black text-xs px-2.5 py-1 rounded-full border-2 border-cyan-200 shadow-xl flex items-center gap-1 animate-bounce [animation-duration:4s]">
              <span>PSP</span>
              <span className="text-[10px] text-cyan-200">CHIP</span>
            </div>
          </div>
        </div>

        {/* Center: Main Sweepstakes Headline */}
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          
          {/* Subheader with stars */}
          <div className="flex items-center gap-2 text-amber-400 font-black tracking-widest text-xs sm:text-sm uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
            <span>✦</span>
            <span>WEEKLY $100 GIVEAWAY</span>
            <span>✦</span>
          </div>

          {/* Massive 3D Metallic SWEEPSTAKES Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-amber-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] my-1">
            SWEEPSTAKES
          </h2>

          {/* 5 Lucky winners note */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-300 tracking-wider uppercase mt-0.5">
            <span>✦</span>
            <span>5 LUCKY WINNERS WILL RECEIVE</span>
            <span>✦</span>
          </div>

          {/* $20.00 PSP Pool Credit highlight */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#bef264] via-[#facc15] to-[#84cc16] drop-shadow-[0_0_15px_rgba(132,204,22,0.6)] mt-1 font-mono">
            $20.00 PSP POOL CREDIT!
          </div>

          {/* Free to enter legal note */}
          <div className="text-[11px] sm:text-xs font-bold text-slate-300 tracking-wider uppercase mt-2">
            FREE TO ENTER &bull; NO PURCHASE NECESSARY
          </div>
        </div>

        {/* Right Side: Features list + ENTER NOW button */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-3.5">
          
          <div className="space-y-1.5 text-xs sm:text-sm font-bold text-slate-200">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-amber-400 shrink-0" />
              <span>FREE TO ENTER</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>5 WINNERS EACH WEEK</span>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>$20.00 PSP POOL CREDIT</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-300 shrink-0" />
              <span>BUILD YOUR PLAY BALANCE</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onEnterSweepstakes}
            className={`w-full max-w-[220px] py-3 px-5 rounded-md font-black text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 shadow-xl cursor-pointer ${
              isEntered
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                : 'bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] shadow-[0_0_20px_rgba(132,204,22,0.5)] hover:shadow-[0_0_30px_rgba(163,230,53,0.8)] active:scale-95'
            }`}
          >
            {isEntered ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>TICKET ACTIVE</span>
              </>
            ) : (
              <>
                <span>ENTER NOW</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </>
            )}
          </button>

        </div>

      </div>
    </section>
  );
};
