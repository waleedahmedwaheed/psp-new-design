import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ReferralBannerProps {
  referralCode?: string;
  onCopyNotice: (msg: string) => void;
}

export const ReferralBanner: React.FC<ReferralBannerProps> = ({
  referralCode = 'ABC123',
  onCopyNotice,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(referralCode);
    setCopied(true);
    onCopyNotice(`Referral code ${referralCode} copied to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full overflow-hidden bg-sports-stripes border-y-2 border-[#84cc16] shadow-xl py-3 px-3 sm:px-6">
      {/* Dark overlay with transparent center to keep stripes prominent on edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031e38]/95 via-[#021324]/90 to-[#031e38]/95 z-0" />
      
      {/* Vibrant sports speed stripe accents on far left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-sports-stripes z-10 pointer-events-none opacity-90 border-r border-cyan-500/30" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-sports-stripes z-10 pointer-events-none opacity-90 border-l border-cyan-500/30" />

      <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 py-1 px-4 sm:px-10">
        
        {/* Left Side: Earn up to 5% Headline */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-baseline gap-2 flex-wrap justify-center lg:justify-start">
            <span className="text-2xl sm:text-4xl md:text-5xl font-black italic tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              EARN UP TO
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-black italic tracking-tighter text-[#84cc16] drop-shadow-[0_0_15px_rgba(132,204,22,0.8)]">
              5%
            </span>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wide text-slate-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] mt-0.5">
            OF THE PRIZE SHARE ON EVERYONE YOU REFER WHEN THEY WIN!
          </p>
        </div>

        {/* Center: Invite Your Friends Script Badge */}
        <div className="relative flex items-center justify-center my-1 lg:my-0">
          <div className="transform -rotate-6 bg-gradient-to-r from-[#eab308] to-[#84cc16] text-[#0f2b05] px-4 py-1.5 rounded-full font-black text-sm sm:text-base shadow-[0_4px_12px_rgba(0,0,0,0.6)] border-2 border-white flex items-center gap-1.5 animate-bounce [animation-duration:3s]">
            <span className="italic font-bold">Invite</span>
            <span className="font-black underline uppercase text-xs sm:text-sm tracking-wide">Your Friends</span>
            <span className="text-base">🚀</span>
          </div>
        </div>

        {/* Right Side: QR Code + Referral Code Box */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          
          {/* QR Code Container */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 mb-1">
                SCAN TO JOIN
              </span>
              <div className="bg-white p-1.5 rounded-md shadow-md border border-slate-300 hover:scale-105 transition-transform cursor-pointer" title="Scan to join with referral">
                <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16">
                  {/* Position detection patterns */}
                  <rect width="100" height="100" fill="#ffffff" />
                  {/* Top-Left Finder */}
                  <rect x="5" y="5" width="28" height="28" fill="#020b14" />
                  <rect x="9" y="9" width="20" height="20" fill="#ffffff" />
                  <rect x="13" y="13" width="12" height="12" fill="#020b14" />
                  {/* Top-Right Finder */}
                  <rect x="67" y="5" width="28" height="28" fill="#020b14" />
                  <rect x="71" y="9" width="20" height="20" fill="#ffffff" />
                  <rect x="75" y="13" width="12" height="12" fill="#020b14" />
                  {/* Bottom-Left Finder */}
                  <rect x="5" y="67" width="28" height="28" fill="#020b14" />
                  <rect x="9" y="71" width="20" height="20" fill="#ffffff" />
                  <rect x="13" y="75" width="12" height="12" fill="#020b14" />
                  {/* Data Modules Mockup */}
                  <rect x="38" y="8" width="8" height="8" fill="#020b14" />
                  <rect x="50" y="8" width="6" height="6" fill="#020b14" />
                  <rect x="38" y="22" width="6" height="6" fill="#020b14" />
                  <rect x="48" y="24" width="8" height="8" fill="#020b14" />
                  <rect x="8" y="38" width="8" height="6" fill="#020b14" />
                  <rect x="22" y="42" width="6" height="8" fill="#020b14" />
                  <rect x="36" y="38" width="12" height="12" fill="#020b14" />
                  <rect x="54" y="38" width="8" height="8" fill="#020b14" />
                  <rect x="68" y="38" width="6" height="6" fill="#020b14" />
                  <rect x="80" y="42" width="12" height="6" fill="#020b14" />
                  <rect x="38" y="56" width="6" height="6" fill="#020b14" />
                  <rect x="48" y="54" width="12" height="8" fill="#020b14" />
                  <rect x="66" y="52" width="8" height="8" fill="#020b14" />
                  <rect x="82" y="56" width="10" height="6" fill="#020b14" />
                  <rect x="38" y="72" width="8" height="8" fill="#020b14" />
                  <rect x="52" y="70" width="8" height="12" fill="#020b14" />
                  <rect x="68" y="72" width="14" height="6" fill="#020b14" />
                  <rect x="86" y="72" width="6" height="14" fill="#020b14" />
                  <rect x="42" y="86" width="12" height="6" fill="#020b14" />
                  <rect x="60" y="86" width="8" height="8" fill="#020b14" />
                  <rect x="74" y="84" width="8" height="10" fill="#020b14" />
                </svg>
              </div>
            </div>
          </div>

          {/* Referral Code Box */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 mb-1">
              OR USE YOUR REFERRAL CODE:
            </span>
            <div className="flex items-center rounded-md overflow-hidden border-2 border-amber-500/80 shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-[#031526]">
              <div className="px-3.5 py-1.5 font-mono font-black text-lg sm:text-xl tracking-widest text-white select-all">
                {referralCode}
              </div>
              <button
                onClick={handleCopy}
                className="bg-[#f97316] hover:bg-[#ea580c] text-white p-2.5 transition-colors cursor-pointer flex items-center justify-center border-l border-amber-600"
                title="Copy referral code"
              >
                {copied ? <Check className="w-5 h-5 text-lime-300" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
