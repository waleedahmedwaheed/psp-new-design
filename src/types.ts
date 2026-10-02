export interface MatchFixture {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time: string;
  venue: string;
  homeRecord?: string;
  awayRecord?: string;
  status: 'UPCOMING' | 'LIVE' | 'FINAL';
  homeLogo?: string;
  awayLogo?: string;
}

export interface Pool {
  id: string;
  numberCode: string;
  title: string;
  sport: 'NFL' | 'COLLEGE FOOTBALL' | 'SOCCER' | 'NCAAB' | 'SURVIVOR';
  singleEntryFee: number;
  closingDateText: string;
  closingTimestamp: number; // in epoch ms
  prizePool: string;
  entriesCount: number;
  maxEntries: number;
  rulesBrief: string;
  matches: MatchFixture[];
}

export interface UserState {
  isLoggedIn: boolean;
  username: string;
  balance: number;
  referralCode: string;
  activeEntriesCount: number;
  sweepstakesEntered: boolean;
}
