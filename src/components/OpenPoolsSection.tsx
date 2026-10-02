import React, { useState, useEffect } from 'react';
import { Pool } from '../types';
import { ChevronRight } from 'lucide-react';

interface OpenPoolsSectionProps {
  pools: Pool[];
  onPlayNow: (pool: Pool) => void;
  onViewMatchList: (pool: Pool) => void;
  onViewAllPools: () => void;
}

// Countdown timer item for each card
const CountdownDisplay: React.FC<{ targetTimestamp: number }> = ({ targetTimestamp }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, targetTimestamp - Date.now());
    const totalSecs = Math.floor(diff / 1000);
    const days = Math.floor(totalSecs / 86400);
    const hours = Math.floor((totalSecs % 86400) / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return { days, hours, minutes, seconds };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, targetTimestamp - Date.now());
      const totalSecs = Math.floor(diff / 1000);
      const days = Math.floor(totalSecs / 86400);
      const hours = Math.floor((totalSecs % 86400) / 3600);
      const minutes = Math.floor((totalSecs % 3600) / 60);
      const seconds = totalSecs % 60;
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return (
    <div className="bg-[#010c18] border border-cyan-900/60 rounded px-2 py-2 grid grid-cols-4 gap-1 text-center my-2.5">
      <div>
        <div className="text-lg sm:text-xl font-black text-[#facc15] font-mono leading-none">
          {timeLeft.days}
        </div>
        <div className="text-[9px] font-bold text-[#facc15]/80 uppercase tracking-tighter mt-1">
          DAYS
        </div>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-black text-[#facc15] font-mono leading-none">
          {timeLeft.hours}
        </div>
        <div className="text-[9px] font-bold text-[#facc15]/80 uppercase tracking-tighter mt-1">
          HOURS
        </div>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-black text-[#facc15] font-mono leading-none">
          {timeLeft.minutes}
        </div>
        <div className="text-[9px] font-bold text-[#facc15]/80 uppercase tracking-tighter mt-1">
          MINUTES
        </div>
      </div>
      <div>
        <div className="text-lg sm:text-xl font-black text-[#facc15] font-mono leading-none">
          {timeLeft.seconds}
        </div>
        <div className="text-[9px] font-bold text-[#facc15]/80 uppercase tracking-tighter mt-1">
          SECONDS
        </div>
      </div>
    </div>
  );
};

export const OpenPoolsSection: React.FC<OpenPoolsSectionProps> = ({
  pools,
  onPlayNow,
  onViewMatchList,
  onViewAllPools,
}) => {
  const [selectedSport, setSelectedSport] = useState<string>('ALL');

  const sportsFilter = ['ALL', 'NFL', 'COLLEGE FOOTBALL', 'SOCCER', 'NCAAB'];

  const filteredPools = selectedSport === 'ALL' 
    ? pools 
    : pools.filter(p => p.sport === selectedSport || (selectedSport === 'NFL' && p.sport === 'SURVIVOR'));

  return (
    <section className="w-full bg-[#020d1a] py-8 px-4 sm:px-6 border-b border-cyan-950">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 border-b border-slate-800/80 pb-3">
          
          {/* Left Title: Bar + "CURRENT OPEN POOLS" */}
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-6 bg-gradient-to-b from-[#f97316] to-[#ea580c] rounded-sm" />
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider flex items-center gap-2">
              <span className="text-white drop-shadow-sm">CURRENT</span>
              <span className="text-[#84cc16] drop-shadow-[0_0_8px_rgba(132,204,22,0.4)]">OPEN POOLS</span>
            </h2>
          </div>

          {/* Right: View All Pools Action */}
          <div className="flex items-center gap-4">
            {/* Filter buttons */}
            <div className="hidden md:flex items-center gap-1 bg-[#031526] p-1 rounded-md border border-slate-800">
              {sportsFilter.map((sport) => (
                <button
                  key={sport}
                  onClick={() => setSelectedSport(sport)}
                  className={`px-2.5 py-1 text-xs font-bold rounded transition-colors ${
                    selectedSport === sport
                      ? 'bg-[#84cc16] text-[#0f2b05]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>

            <button
              onClick={onViewAllPools}
              className="flex items-center gap-1 text-xs sm:text-sm font-black text-[#facc15] hover:text-[#fde047] uppercase tracking-wider cursor-pointer group"
            >
              <span>VIEW ALL POOLS</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#facc15]" />
            </button>
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {filteredPools.map((pool) => (
            <div
              key={pool.id}
              className="bg-gradient-to-b from-[#031c33] to-[#021324] border border-[#0d3b66] rounded-md p-3.5 flex flex-col justify-between hover:border-cyan-500/60 hover:shadow-[0_4px_20px_rgba(3,105,161,0.25)] transition-all duration-200 group"
            >
              {/* Card Header: Title & Number Code */}
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                  <h3 className="text-sm font-black tracking-wide text-white uppercase group-hover:text-cyan-300 transition-colors">
                    {pool.title}
                  </h3>
                  <span className="text-sm font-black text-[#facc15] font-mono">
                    {pool.numberCode}
                  </span>
                </div>

                {/* Entry fee */}
                <div className="flex items-center justify-between text-xs py-0.5">
                  <span className="text-slate-300 font-semibold">Single entry</span>
                  <span className="text-white font-bold font-mono">
                    ${pool.singleEntryFee.toFixed(2)}
                  </span>
                </div>

                {/* Closing on date */}
                <div className="text-xs py-1">
                  <div className="text-slate-400 text-[11px]">Closing on</div>
                  <div className="text-slate-200 font-semibold text-[11.5px] truncate">
                    {pool.closingDateText}
                  </div>
                </div>

                {/* Live Countdown */}
                <CountdownDisplay targetTimestamp={pool.closingTimestamp} />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-2 pt-1">
                <button
                  onClick={() => onPlayNow(pool)}
                  className="bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] text-[11px] sm:text-xs font-black py-2 px-1 rounded transition-all duration-150 uppercase tracking-tight flex items-center justify-center gap-0.5 shadow-sm hover:shadow-[0_0_10px_rgba(132,204,22,0.5)] active:scale-95 cursor-pointer"
                >
                  <span>PLAY NOW</span>
                  <span>→</span>
                </button>

                <button
                  onClick={() => onViewMatchList(pool)}
                  className="bg-[#031424] hover:bg-[#062442] text-slate-200 hover:text-white border border-slate-700/80 text-[11px] sm:text-xs font-bold py-2 px-1 rounded transition-all duration-150 uppercase tracking-tight text-center active:scale-95 cursor-pointer"
                >
                  MATCH LIST
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
