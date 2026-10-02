import React, { useState } from 'react';
import { Pool, MatchFixture } from '../types';
import { X, Check, Trophy, AlertCircle, Shield, CreditCard, Sparkles, Ticket } from 'lucide-react';

// --- MATCH LIST MODAL ---
export const MatchListModal: React.FC<{
  pool: Pool | null;
  onClose: () => void;
  onGoToPlay: (pool: Pool) => void;
}> = ({ pool, onClose, onGoToPlay }) => {
  if (!pool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#031526] border-2 border-cyan-800 rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-[#020d1a] px-5 py-4 border-b border-cyan-900/60 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#facc15] font-mono">{pool.numberCode}</span>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">{pool.title} — MATCH LIST</h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">Closing on {pool.closingDateText}</p>
          </div>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="bg-[#010912] p-3 rounded border border-cyan-950 text-xs text-slate-300">
            <span className="font-bold text-[#84cc16]">Pool Rules: </span>
            {pool.rulesBrief}
          </div>

          <div className="space-y-2.5">
            {pool.matches.map((match, idx) => (
              <div
                key={match.id}
                className="bg-[#020e1c] border border-slate-800 hover:border-cyan-800 rounded-md p-3 flex flex-col sm:flex-row items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-bold text-white">
                    <span className="text-slate-200">{match.awayTeam}</span>
                    <span className="text-cyan-400 mx-2 text-xs font-semibold">@</span>
                    <span className="text-white">{match.homeTeam}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto text-xs text-slate-400 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                  <div className="text-right">
                    <div className="text-slate-300 font-semibold">{match.date}</div>
                    <div className="text-[11px] text-slate-400">{match.time} &bull; {match.venue}</div>
                  </div>
                  <span className="bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded text-[10px] font-bold">
                    UPCOMING
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#020d1a] px-5 py-3.5 border-t border-cyan-900/60 flex items-center justify-between">
          <div className="text-xs text-slate-300">
            Entry Fee: <span className="font-bold text-[#facc15] font-mono">${pool.singleEntryFee.toFixed(2)}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 rounded"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onGoToPlay(pool);
              }}
              className="px-5 py-2 text-xs font-black bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] rounded uppercase tracking-wider shadow"
            >
              Play This Pool →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PLAY NOW / MAKE PICKS MODAL ---
export const PlayNowModal: React.FC<{
  pool: Pool | null;
  userBalance: number;
  onClose: () => void;
  onSubmitEntry: (fee: number, picks: Record<string, string>) => void;
}> = ({ pool, userBalance, onClose, onSubmitEntry }) => {
  const [picks, setPicks] = useState<Record<string, string>>({});
  const [entryMultiplier, setEntryMultiplier] = useState(1);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!pool) return null;

  const totalFee = pool.singleEntryFee * entryMultiplier;
  const allPicked = pool.matches.every(m => picks[m.id]);

  const handleSelectPick = (matchId: string, team: string) => {
    setPicks(prev => ({ ...prev, [matchId]: team }));
    setErrorMsg(null);
  };

  const handleQuickPick = () => {
    const randomPicks: Record<string, string> = {};
    pool.matches.forEach(m => {
      randomPicks[m.id] = Math.random() > 0.5 ? m.homeTeam : m.awayTeam;
    });
    setPicks(randomPicks);
  };

  const handleSubmit = () => {
    if (!allPicked) {
      setErrorMsg(`Please select a winner for all ${pool.matches.length} matchups before submitting!`);
      return;
    }
    if (userBalance < totalFee) {
      setErrorMsg(`Insufficient balance. Please deposit at least $${(totalFee - userBalance).toFixed(2)} to enter.`);
      return;
    }
    onSubmitEntry(totalFee, picks);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#031526] border-2 border-[#84cc16] rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#020d1a] px-5 py-4 border-b border-cyan-900/60 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#facc15] font-mono">{pool.numberCode}</span>
              <h3 className="text-lg font-black text-white uppercase tracking-wider">{pool.title} — MAKE PICKS</h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Straight-up winner pick&apos;em &bull; No point spreads</p>
          </div>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {/* Status info bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 bg-[#020a14] p-3 rounded border border-cyan-900/60 text-xs">
            <div>
              <span className="text-slate-400">Picks Completed: </span>
              <span className="font-bold text-[#facc15]">{Object.keys(picks).length} of {pool.matches.length}</span>
            </div>
            <button
              onClick={handleQuickPick}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Random Quick Pick</span>
            </button>
          </div>

          {errorMsg && (
            <div className="bg-rose-950/60 border border-rose-600/80 text-rose-200 text-xs p-3 rounded flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Matchups Pick Form */}
          <div className="space-y-3">
            {pool.matches.map((match, idx) => {
              const selected = picks[match.id];

              return (
                <div key={match.id} className="bg-[#020e1c] border border-slate-800 rounded-md p-3">
                  <div className="text-[11px] font-bold text-slate-400 mb-2 flex items-center justify-between">
                    <span>MATCH {idx + 1}: {match.date} &bull; {match.time}</span>
                    <span className="text-slate-500">{match.venue}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {/* Away Team Pick Button */}
                    <button
                      onClick={() => handleSelectPick(match.id, match.awayTeam)}
                      className={`p-2.5 rounded border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selected === match.awayTeam
                          ? 'bg-[#84cc16] text-[#0f2b05] border-[#84cc16] font-black shadow-md'
                          : 'bg-[#03182b] text-slate-200 border-slate-700 hover:border-slate-500 font-bold'
                      }`}
                    >
                      <div className="truncate">
                        <div className="text-xs uppercase">{match.awayTeam}</div>
                        <div className={`text-[10px] ${selected === match.awayTeam ? 'text-[#0f2b05]/80' : 'text-slate-400'}`}>
                          Away {match.awayRecord && `(${match.awayRecord})`}
                        </div>
                      </div>
                      {selected === match.awayTeam && <Check className="w-4 h-4 text-[#0f2b05] shrink-0" />}
                    </button>

                    {/* Home Team Pick Button */}
                    <button
                      onClick={() => handleSelectPick(match.id, match.homeTeam)}
                      className={`p-2.5 rounded border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selected === match.homeTeam
                          ? 'bg-[#84cc16] text-[#0f2b05] border-[#84cc16] font-black shadow-md'
                          : 'bg-[#03182b] text-slate-200 border-slate-700 hover:border-slate-500 font-bold'
                      }`}
                    >
                      <div className="truncate">
                        <div className="text-xs uppercase">{match.homeTeam}</div>
                        <div className={`text-[10px] ${selected === match.homeTeam ? 'text-[#0f2b05]/80' : 'text-slate-400'}`}>
                          Home {match.homeRecord && `(${match.homeRecord})`}
                        </div>
                      </div>
                      {selected === match.homeTeam && <Check className="w-4 h-4 text-[#0f2b05] shrink-0" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Number of entries multiplier */}
          <div className="bg-[#020a14] p-3.5 rounded border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-white">Entries Multiplier</div>
              <div className="text-[11px] text-slate-400">Play multiple entries with the same picks</div>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 5].map((multiplier) => (
                <button
                  key={multiplier}
                  onClick={() => setEntryMultiplier(multiplier)}
                  className={`w-8 h-8 rounded text-xs font-black transition-colors ${
                    entryMultiplier === multiplier
                      ? 'bg-[#facc15] text-[#0f2b05]'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {multiplier}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#020d1a] px-5 py-4 border-t border-cyan-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs">
            <div>
              <span className="text-slate-400">Total Entry Fee: </span>
              <span className="text-[#facc15] font-black font-mono text-sm">${totalFee.toFixed(2)}</span>
            </div>
            <div>
              <span className="text-slate-400">Your Balance: </span>
              <span className="text-white font-bold font-mono text-sm">${userBalance.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-black bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] rounded uppercase tracking-wider shadow-[0_0_15px_rgba(132,204,22,0.4)] active:scale-95 cursor-pointer"
            >
              Submit Entry (${totalFee.toFixed(2)}) →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- DEPOSIT MODAL ---
export const DepositModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onDepositSuccess: (amount: number) => void;
}> = ({ isOpen, onClose, onDepositSuccess }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'paypal' | 'crypto' | 'bank'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const quickAmounts = [20, 50, 100, 250, 500];

  const handleDeposit = () => {
    const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;
    if (isNaN(finalAmount) || finalAmount < 10) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onDepositSuccess(finalAmount);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#031526] border-2 border-[#84cc16] rounded-lg max-w-md w-full overflow-hidden shadow-2xl">
        <div className="bg-[#020d1a] px-5 py-4 border-b border-cyan-900/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#84cc16]" />
            <h3 className="text-base font-black text-white uppercase tracking-wider">Deposit Funds</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase block mb-2">Select Amount</label>
            <div className="grid grid-cols-5 gap-1.5">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`py-2 text-xs font-black rounded border transition-colors ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-[#84cc16] text-[#0f2b05] border-[#84cc16]'
                      : 'bg-[#020e1c] text-white border-slate-700 hover:border-slate-500'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <div className="mt-2.5">
              <input
                type="number"
                placeholder="Or enter custom amount ($)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(0);
                }}
                className="w-full bg-[#020a14] border border-slate-700 focus:border-cyan-400 rounded px-3 py-2 text-xs text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 uppercase block mb-2">Payment Method</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'card', name: 'Credit / Debit Card', icon: '💳' },
                { id: 'paypal', name: 'PayPal / Venmo', icon: '🅿️' },
                { id: 'crypto', name: 'Crypto (USDT/BTC)', icon: '₿' },
                { id: 'bank', name: 'Instant Bank (ACH)', icon: '🏦' },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id as any)}
                  className={`p-2.5 rounded border text-left text-xs font-bold flex items-center gap-2 ${
                    selectedMethod === method.id
                      ? 'bg-cyan-950/80 border-cyan-400 text-white'
                      : 'bg-[#020e1c] border-slate-800 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span>{method.icon}</span>
                  <span className="truncate">{method.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#020a14] p-3 rounded text-[11px] text-slate-400 flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Funds available instantly. 100% Secure 256-bit encryption.</span>
          </div>

          <button
            onClick={handleDeposit}
            disabled={isProcessing}
            className="w-full bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] py-3 rounded font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(132,204,22,0.4)] disabled:opacity-50"
          >
            {isProcessing ? 'Processing Deposit...' : `Confirm Deposit of $${customAmount || selectedAmount}`}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- SWEEPSTAKES CONFIRMATION MODAL ---
export const SweepstakesModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#031526] border-2 border-amber-400 rounded-lg max-w-md w-full overflow-hidden shadow-2xl text-center p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 p-1 rounded text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center mx-auto mb-4 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)]">
          <Ticket className="w-8 h-8 stroke-[2.5]" />
        </div>

        <h3 className="text-xl font-black text-white uppercase tracking-wider">
          You&apos;re Entered!
        </h3>
        <p className="text-amber-400 font-bold text-sm mt-1">
          ✦ Weekly $100 Sweepstakes ✦
        </p>

        <div className="bg-[#020a14] border border-amber-500/40 rounded-lg p-3.5 my-4">
          <div className="text-xs text-slate-400 uppercase tracking-wider">Your Lucky Ticket Number</div>
          <div className="text-2xl font-black text-[#facc15] font-mono tracking-widest mt-1">
            PSP-SWEEP-88421
          </div>
          <div className="text-[11px] text-emerald-400 font-bold mt-1">
            &bull; 5 Winners will be announced this Sunday at 8:00 PM CT
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-5">
          Each winner will receive <span className="text-[#84cc16] font-bold">$20.00 PSP Pool Credit</span> deposited straight into their balance!
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] py-2.5 rounded font-black text-xs uppercase tracking-wider"
        >
          Great, Back To Pools →
        </button>
      </div>
    </div>
  );
};

// --- AUTH MODAL ---
export const AuthModal: React.FC<{
  isOpen: boolean;
  initialMode: 'login' | 'register';
  onClose: () => void;
  onAuthSuccess: (username: string) => void;
}> = ({ isOpen, initialMode, onClose, onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess(email.split('@')[0] || 'SportsWinner26');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#031526] border-2 border-cyan-800 rounded-lg max-w-sm w-full overflow-hidden shadow-2xl p-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <h3 className="text-base font-black text-white uppercase tracking-wider">
            {mode === 'login' ? 'Login To Your Account' : 'Create Free Account'}
          </h3>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="bettor@example.com"
              className="w-full bg-[#020a14] border border-slate-700 focus:border-cyan-400 rounded px-3 py-2 text-xs text-white outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#020a14] border border-slate-700 focus:border-cyan-400 rounded px-3 py-2 text-xs text-white outline-none"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Referral Code (Optional)</label>
              <input
                type="text"
                defaultValue="ABC123"
                className="w-full bg-[#020a14] border border-slate-700 focus:border-cyan-400 rounded px-3 py-2 text-xs text-[#facc15] font-mono outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] py-2.5 rounded font-black text-xs uppercase tracking-wider transition-all mt-2"
          >
            {mode === 'login' ? 'Login Now' : 'Complete Registration'}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-slate-400">
          {mode === 'login' ? (
            <p>
              Don&apos;t have an account?{' '}
              <button onClick={() => setMode('register')} className="text-cyan-400 font-bold hover:underline">
                Register Free
              </button>
            </p>
          ) : (
            <p>
              Already registered?{' '}
              <button onClick={() => setMode('login')} className="text-cyan-400 font-bold hover:underline">
                Login Here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// --- TOAST NOTIFICATION ---
export const ToastNotification: React.FC<{
  message: string | null;
  onClose: () => void;
}> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#041d33] border-2 border-[#84cc16] text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-200">
      <div className="w-6 h-6 rounded-full bg-[#84cc16] text-[#0f2b05] flex items-center justify-center font-bold text-xs">
        ✓
      </div>
      <div className="text-xs font-bold text-slate-100">{message}</div>
      <button onClick={onClose} className="text-slate-400 hover:text-white ml-2">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
