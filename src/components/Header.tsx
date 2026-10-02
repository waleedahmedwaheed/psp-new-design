import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  ChevronDown, 
  User, 
  Menu, 
  X, 
  PlusCircle, 
  ExternalLink,
  ShieldCheck,
  LogOut,
  HelpCircle,
  Trophy
} from 'lucide-react';

interface HeaderProps {
  balance: number;
  onOpenDeposit: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenSweepstakes: () => void;
  onNavClick: (item: string) => void;
  activeNav: string;
}

export const Header: React.FC<HeaderProps> = ({
  balance,
  onOpenDeposit,
  onOpenAuth,
  onOpenSweepstakes,
  onNavClick,
  activeNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home', hasDropdown: false },
    { label: 'ABOUT US', id: 'about', hasDropdown: false },
    { 
      label: 'HOW TO PLAY', 
      id: 'how-to-play', 
      hasDropdown: true,
      items: ['Pick\'Em Pools', 'Survivor Rules', 'Squares & Grid', 'Prize Distributions']
    },
    { 
      label: 'POOLS', 
      id: 'pools', 
      hasDropdown: true,
      items: ['NFL Week 4 (#45)', 'NFL Survivor (#46)', 'College Football (#47)', 'Soccer Pick\'Em (#48)', 'NCAAB (#49)', 'View All Pools']
    },
    { label: 'SWEEPSTAKES', id: 'sweepstakes', isSpecial: true, hasDropdown: false },
    { 
      label: 'RULES', 
      id: 'rules', 
      hasDropdown: true,
      items: ['General Rules', 'Tie-breaker Rules', 'Scoring System', 'Payout Timing'] 
    },
    { 
      label: 'REFERRALS', 
      id: 'referrals', 
      hasDropdown: true,
      items: ['Referral Program (5%)', 'Invite Friends', 'My Commission Stats'] 
    },
    { label: 'FAQS', id: 'faqs', hasDropdown: false },
    { 
      label: 'APPAREL', 
      id: 'apparel', 
      hasDropdown: true,
      items: ['Official Hats', 'Jerseys & Hoodies', 'Merch Store'] 
    },
    { 
      label: 'DEPOSIT', 
      id: 'deposit', 
      hasDropdown: true,
      items: ['Credit / Debit Card', 'PayPal / Venmo', 'Bank Transfer (ACH)', 'Cryptocurrency'] 
    },
    { 
      label: 'WITHDRAW', 
      id: 'withdraw', 
      hasDropdown: true,
      items: ['Request Payout', 'Payout History', 'Verification Status'] 
    },
    { label: 'PSP TRANSFER', id: 'transfer', hasDropdown: false },
    { label: 'CONTACT', id: 'contact', hasDropdown: false },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'sweepstakes') {
      onOpenSweepstakes();
    } else if (id === 'deposit') {
      onOpenDeposit();
    } else {
      onNavClick(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#030e1b] text-white sticky top-0 z-40 border-b border-cyan-900/40 shadow-xl">
      {/* Top Header Bar */}
      <div className="w-full bg-[#020b14] border-b border-white/5 py-2.5 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Connect With Us */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
              CONNECT WITH US
            </span>
            <div className="flex items-center gap-2">
              <a
                href="#facebook"
                onClick={(e) => { e.preventDefault(); }}
                className="w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center text-white text-xs font-bold shadow"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#twitter"
                onClick={(e) => { e.preventDefault(); }}
                className="w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center text-white text-xs font-bold border border-slate-700"
                aria-label="Twitter / X"
              >
                𝕏
              </a>
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); }}
                className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 transition-opacity flex items-center justify-center text-white text-xs font-bold shadow"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex items-center">
            <Logo size="md" />
          </div>

          {/* Right: Balance, Deposit, Language, Account */}
          <div className="flex items-center gap-2.5 sm:gap-4 ml-auto lg:ml-0">
            {/* Balance Pill */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold bg-[#031526] px-2.5 py-1 rounded border border-slate-700/80">
              <span className="text-slate-300 hidden xs:inline">Balance:</span>
              <span className="text-[#facc15] font-black font-mono tracking-tight text-sm sm:text-base">
                ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            {/* Deposit Button */}
            <button
              onClick={onOpenDeposit}
              className="bg-[#84cc16] hover:bg-[#a3e635] text-[#0f2b05] text-xs font-black px-3.5 py-1.5 rounded transition-all duration-200 shadow-[0_2px_10px_rgba(132,204,22,0.35)] hover:shadow-[0_2px_14px_rgba(163,230,53,0.5)] active:scale-95 uppercase tracking-wide cursor-pointer flex items-center gap-1"
            >
              <PlusCircle className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Deposit</span>
            </button>

            {/* Language Selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-xs text-slate-300 bg-[#031526] border border-slate-700 px-2 py-1.5 rounded hover:text-white transition-colors cursor-pointer"
              >
                <span>{language}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-[#041a30] border border-cyan-800 rounded shadow-2xl py-1 z-50 text-xs">
                  {['English', 'Español', 'Français'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-slate-200 hover:bg-cyan-900/60 hover:text-white transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Account / Logout */}
            <div className="relative">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded"
              >
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">MY ACCOUNT</span>
                <span className="text-slate-500 hidden sm:inline">/</span>
                <span className="text-slate-400 hover:text-rose-400">LOGOUT</span>
                <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5" />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-[#041a30] border border-cyan-800/80 rounded shadow-2xl py-1 z-50 text-xs divide-y divide-white/10">
                  <div className="px-3 py-2">
                    <p className="font-bold text-white">VIP Sports Bettor</p>
                    <p className="text-[11px] text-emerald-400">Active Account · Verified</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setAccountDropdownOpen(false);
                        onNavClick('profile');
                      }}
                      className="w-full text-left px-3 py-1.5 text-slate-200 hover:bg-cyan-900/50 flex items-center justify-between"
                    >
                      <span>Account Settings</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                    <button
                      onClick={() => {
                        setAccountDropdownOpen(false);
                        onNavClick('my-picks');
                      }}
                      className="w-full text-left px-3 py-1.5 text-slate-200 hover:bg-cyan-900/50 flex items-center justify-between"
                    >
                      <span>My Active Entries</span>
                      <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                    </button>
                    <button
                      onClick={() => {
                        setAccountDropdownOpen(false);
                        onOpenDeposit();
                      }}
                      className="w-full text-left px-3 py-1.5 text-slate-200 hover:bg-cyan-900/50 flex items-center justify-between"
                    >
                      <span>Deposit Funds</span>
                      <span className="text-lime-400 font-mono font-bold">+</span>
                    </button>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setAccountDropdownOpen(false);
                        onOpenAuth('login');
                      }}
                      className="w-full text-left px-3 py-1.5 text-rose-300 hover:bg-rose-950/40 flex items-center justify-between"
                    >
                      <span>Switch Account / Logout</span>
                      <LogOut className="w-3.5 h-3.5 text-rose-400" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-300 hover:text-white bg-slate-800 rounded ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="hidden lg:block bg-gradient-to-r from-[#031424] via-[#05213d] to-[#031424] border-t border-b border-cyan-800/40">
        <div className="max-w-[1440px] mx-auto px-4">
          <ul className="flex items-center justify-between text-[11.5px] font-extrabold tracking-wide uppercase py-1">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              const isSpecial = item.isSpecial;

              return (
                <li
                  key={item.id}
                  className="relative group py-2"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1 px-2.5 py-1 transition-all duration-150 cursor-pointer whitespace-nowrap rounded ${
                      isActive
                        ? 'text-[#facc15] font-black'
                        : isSpecial
                        ? 'text-[#facc15] hover:text-[#fde047]'
                        : 'text-slate-200 hover:text-[#facc15]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown className="w-3 h-3 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-2.5 right-2.5 h-[3px] bg-gradient-to-r from-[#84cc16] via-[#facc15] to-[#84cc16] rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && item.items && activeDropdown === item.id && (
                    <div className="absolute top-full left-0 w-56 bg-[#041a30] border border-cyan-800 rounded shadow-2xl py-2 z-50 text-xs normal-case animate-in fade-in slide-in-from-top-1 duration-150">
                      {item.items.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => {
                            setActiveDropdown(null);
                            handleNavClick(item.id);
                          }}
                          className="w-full text-left px-3.5 py-2 text-slate-200 hover:bg-cyan-900/60 hover:text-white transition-colors flex items-center justify-between group/sub"
                        >
                          <span>{subItem}</span>
                          <span className="text-cyan-400 opacity-0 group-hover/sub:opacity-100 transition-opacity text-xs">→</span>
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#031526] border-b border-cyan-800/80 px-4 py-3 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-white/5 pb-1">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-2 px-2 text-xs font-bold uppercase flex items-center justify-between ${
                    item.id === activeNav
                      ? 'text-[#facc15] bg-white/5 rounded'
                      : item.isSpecial
                      ? 'text-[#facc15]'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
              </div>
            ))}
            <div className="pt-3 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('login');
                }}
                className="flex-1 py-2 text-xs font-bold bg-slate-800 text-white rounded text-center"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('register');
                }}
                className="flex-1 py-2 text-xs font-bold bg-[#84cc16] text-[#0f2b05] rounded text-center"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
