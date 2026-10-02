/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ReferralBanner } from './components/ReferralBanner';
import { OpenPoolsSection } from './components/OpenPoolsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SweepstakesBanner } from './components/SweepstakesBanner';
import { Footer } from './components/Footer';
import {
  MatchListModal,
  PlayNowModal,
  DepositModal,
  SweepstakesModal,
  AuthModal,
  ToastNotification
} from './components/Modals';
import { POOLS_DATA } from './data/poolsData';
import { Pool } from './types';

export default function App() {
  // State matching the screenshot exact balance
  const [balance, setBalance] = useState<number>(1977.06);
  const [activeNav, setActiveNav] = useState<string>('home');
  const [referralCode] = useState<string>('ABC123');
  const [isSweepstakesEntered, setIsSweepstakesEntered] = useState<boolean>(false);
  const [activeEntries, setActiveEntries] = useState<number>(3);

  // Modals state
  const [matchListPool, setMatchListPool] = useState<Pool | null>(null);
  const [playNowPool, setPlayNowPool] = useState<Pool | null>(null);
  const [depositModalOpen, setDepositModalOpen] = useState<boolean>(false);
  const [sweepstakesModalOpen, setSweepstakesModalOpen] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleDepositSuccess = (amount: number) => {
    setBalance(prev => prev + amount);
    showToast(`Successfully deposited $${amount.toFixed(2)} to your balance!`);
  };

  const handleEnterSweepstakes = () => {
    setIsSweepstakesEntered(true);
    setSweepstakesModalOpen(true);
    showToast('Your free entry for the Weekly $100 Sweepstakes is confirmed!');
  };

  const handlePlayNow = (pool: Pool) => {
    setPlayNowPool(pool);
  };

  const handleViewMatchList = (pool: Pool) => {
    setMatchListPool(pool);
  };

  const handleSubmitEntry = (fee: number, picks: Record<string, string>) => {
    setBalance(prev => Math.max(0, prev - fee));
    setActiveEntries(prev => prev + 1);
    const poolTitle = playNowPool?.title || 'Pool';
    setPlayNowPool(null);
    showToast(`Entry confirmed for ${poolTitle}! $${fee.toFixed(2)} deducted from balance.`);
  };

  const handleNavClick = (itemId: string) => {
    setActiveNav(itemId);
    if (itemId === 'sweepstakes') {
      handleEnterSweepstakes();
    } else if (itemId === 'deposit') {
      setDepositModalOpen(true);
    } else if (itemId === 'open-pools' || itemId === 'pools' || itemId === 'all-pools') {
      const el = document.getElementById('open-pools-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (itemId === 'how-to-play') {
      const el = document.getElementById('how-it-works-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (itemId === 'referrals') {
      const el = document.getElementById('referral-banner-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (itemId === 'profile') {
      showToast('Account: VIP Bettor • Balance: $' + balance.toFixed(2));
    } else if (itemId === 'my-picks') {
      showToast(`You have ${activeEntries} active pool entries running!`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (email: string) => {
    showToast(`Subscribed ${email} for sports pool updates & weekly odds!`);
  };

  return (
    <div className="min-h-screen bg-[#020b14] text-slate-100 flex flex-col font-sans selection:bg-[#84cc16] selection:text-black">
      {/* 1. Header & Top Bar */}
      <Header
        balance={balance}
        onOpenDeposit={() => setDepositModalOpen(true)}
        onOpenAuth={handleOpenAuth}
        onOpenSweepstakes={handleEnterSweepstakes}
        onNavClick={handleNavClick}
        activeNav={activeNav}
      />

      {/* Main Body */}
      <main className="flex-1 w-full">
        {/* 2. Hero Banner */}
        <HeroBanner
          onOpenAuth={handleOpenAuth}
          onExplorePools={() => {
            const el = document.getElementById('open-pools-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Promotional Referral Banner */}
        <div id="referral-banner-section">
          <ReferralBanner
            referralCode={referralCode}
            onCopyNotice={showToast}
          />
        </div>

        {/* 4. Current Open Pools Section */}
        <div id="open-pools-section">
          <OpenPoolsSection
            pools={POOLS_DATA}
            onPlayNow={handlePlayNow}
            onViewMatchList={handleViewMatchList}
            onViewAllPools={() => {
              showToast('Showing all 5 active sports pools with live countdowns.');
            }}
          />
        </div>

        {/* 5. How It Works Section */}
        <div id="how-it-works-section">
          <HowItWorksSection />
        </div>

        {/* 6. Weekly $100 Sweepstakes Banner */}
        <div id="sweepstakes-banner-section">
          <SweepstakesBanner
            onEnterSweepstakes={handleEnterSweepstakes}
            isEntered={isSweepstakesEntered}
          />
        </div>
      </main>

      {/* 7. Comprehensive Footer */}
      <Footer
        onNavClick={handleNavClick}
        onSubscribe={handleSubscribe}
      />

      {/* Interactive Modals */}
      <MatchListModal
        pool={matchListPool}
        onClose={() => setMatchListPool(null)}
        onGoToPlay={(pool) => setPlayNowPool(pool)}
      />

      <PlayNowModal
        pool={playNowPool}
        userBalance={balance}
        onClose={() => setPlayNowPool(null)}
        onSubmitEntry={handleSubmitEntry}
      />

      <DepositModal
        isOpen={depositModalOpen}
        onClose={() => setDepositModalOpen(false)}
        onDepositSuccess={handleDepositSuccess}
      />

      <SweepstakesModal
        isOpen={sweepstakesModalOpen}
        onClose={() => setSweepstakesModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authModalMode}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={(username) => {
          showToast(`Welcome back, ${username}!`);
        }}
      />

      {/* Toast Notification */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
