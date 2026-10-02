import React, { useState } from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavClick: (item: string) => void;
  onSubscribe: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="w-full bg-[#020a14] border-t border-cyan-900/40 text-slate-300 py-12 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto">
        
        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo size="md" />
              <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-slate-300 max-w-sm">
                The premier social sports pool experience. Make straight-up winner picks with{' '}
                <span className="text-[#facc15] font-bold">no point spreads or complicated odds</span>
                , compete on transparent community leaderboards, and play for{' '}
                <span className="text-[#84cc16] font-bold">real-money prize pools every week</span>.
              </p>
            </div>

            <div className="mt-6 text-[11px] text-slate-500 font-medium">
              &copy; 2026 PlaySportsPools.com. All rights reserved.
            </div>
          </div>

          {/* Col 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-black text-[#facc15] uppercase tracking-wider mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('how-to-play')} className="hover:text-white transition-colors cursor-pointer">
                  How To Play
                </button>
              </li>
              <li>
                <span className="text-slate-400">Pools</span>
                <ul className="pl-3 mt-1 space-y-1 text-slate-300">
                  <li>
                    <button onClick={() => onNavClick('open-pools')} className="hover:text-[#84cc16] transition-colors cursor-pointer">
                      &bull; Open Pools
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavClick('match-list')} className="hover:text-[#84cc16] transition-colors cursor-pointer">
                      &bull; Match List
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavClick('results')} className="hover:text-[#84cc16] transition-colors cursor-pointer">
                      &bull; Results
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onNavClick('leaderboards')} className="hover:text-[#84cc16] transition-colors cursor-pointer">
                      &bull; Leaderboards
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <button onClick={() => onNavClick('sweepstakes')} className="hover:text-white transition-colors cursor-pointer">
                  Sweepstakes
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('rules')} className="hover:text-white transition-colors cursor-pointer">
                  Rules
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('referrals')} className="hover:text-white transition-colors cursor-pointer">
                  Referrals
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('faqs')} className="hover:text-white transition-colors cursor-pointer">
                  FAQS
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Pools (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-black text-[#facc15] uppercase tracking-wider mb-3">
              POOLS
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onNavClick('sports-squares')} className="hover:text-white transition-colors cursor-pointer">
                  Sports Squares
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('nfl-survivor')} className="hover:text-white transition-colors cursor-pointer">
                  NFL Survivor
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('nfl-pickem')} className="hover:text-white transition-colors cursor-pointer">
                  NFL Pick &apos;Em
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('college-football')} className="hover:text-white transition-colors cursor-pointer">
                  College Football
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('ncaab')} className="hover:text-white transition-colors cursor-pointer">
                  NCAAB
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('soccer')} className="hover:text-white transition-colors cursor-pointer">
                  Soccer Pick &apos;Em
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('head-to-head')} className="hover:text-white transition-colors cursor-pointer">
                  Head to Head
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('bowl-games')} className="hover:text-white transition-colors cursor-pointer">
                  Bowl Games
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('ncaab-bracket')} className="hover:text-white transition-colors cursor-pointer">
                  NCAAB Bracket
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('all-pools')} className="hover:text-[#84cc16] transition-colors cursor-pointer font-bold">
                  All Pools
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-black text-[#facc15] uppercase tracking-wider mb-3">
              SUPPORT
            </h4>
            <ul className="space-y-1.5 text-xs font-semibold text-slate-300">
              <li>
                <button onClick={() => onNavClick('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('support-center')} className="hover:text-white transition-colors cursor-pointer">
                  Support Center
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('payment-methods')} className="hover:text-white transition-colors cursor-pointer">
                  Payment Methods
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('deposits')} className="hover:text-white transition-colors cursor-pointer">
                  Deposits
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('withdrawals')} className="hover:text-white transition-colors cursor-pointer">
                  Withdrawals
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('psp-transfer')} className="hover:text-white transition-colors cursor-pointer">
                  PSP Transfer
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('account-help')} className="hover:text-white transition-colors cursor-pointer">
                  Account Help
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('fraud-prevention')} className="hover:text-white transition-colors cursor-pointer">
                  Fraud Prevention
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('terms')} className="hover:text-white transition-colors cursor-pointer">
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Stay Connected & Newsletter (Span 2) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs sm:text-sm font-black text-[#facc15] uppercase tracking-wider mb-3">
              STAY CONNECTED
            </h4>

            {/* Social Icons (Blue FB, Dark X, Pink/Orange IG) */}
            <div className="flex items-center gap-2 mb-5">
              <a
                href="#fb"
                onClick={(e) => { e.preventDefault(); }}
                className="w-8 h-8 rounded-full bg-[#1877f2] hover:opacity-90 flex items-center justify-center text-white font-bold text-sm shadow cursor-pointer transition-opacity"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#x"
                onClick={(e) => { e.preventDefault(); }}
                className="w-8 h-8 rounded-full bg-black border border-slate-700 hover:border-slate-500 flex items-center justify-center text-white font-bold text-sm shadow cursor-pointer transition-colors"
                aria-label="Twitter X"
              >
                𝕏
              </a>
              <a
                href="#ig"
                onClick={(e) => { e.preventDefault(); }}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 flex items-center justify-center text-white font-bold text-sm shadow cursor-pointer transition-opacity"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#facc15] mb-2">
                Subscribe for Updates
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-[#010912] border border-slate-700 focus:border-cyan-400 rounded px-3 py-2 text-xs text-white placeholder-slate-500 outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0072ff] to-[#00a6ff] hover:from-[#0060db] hover:to-[#0094e6] text-white font-black text-xs py-2 px-4 rounded uppercase tracking-wider shadow-[0_2px_12px_rgba(0,114,255,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  {subscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* Responsible Gaming & Security badges row */}
        <div className="pt-6 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-3">
          <div className="flex items-center gap-4">
            <span className="font-bold text-slate-300">21+ Responsible Gaming</span>
            <span>&bull;</span>
            <span>256-Bit SSL Encrypted</span>
            <span>&bull;</span>
            <span>Audited Randomization</span>
          </div>
          <div className="text-slate-500">
            PlaySportsPools is a skill-based sports prediction platform. Void where prohibited by law.
          </div>
        </div>

      </div>
    </footer>
  );
};
