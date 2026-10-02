import { Pool } from '../types';

// Anchor the countdowns relative to current time so they countdown cleanly in real-time
const now = Date.now();

export const POOLS_DATA: Pool[] = [
  {
    id: 'nfl-week-4',
    numberCode: '#45',
    title: 'NFL WEEK 4',
    sport: 'NFL',
    singleEntryFee: 20.00,
    closingDateText: 'Sun, Oct 4, 2026 – 12:00 CT',
    // 4 days, 21 hours, 3 minutes, 15 seconds
    closingTimestamp: now + (4 * 86400 + 21 * 3600 + 3 * 60 + 15) * 1000,
    prizePool: '$4,500.00',
    entriesCount: 184,
    maxEntries: 300,
    rulesBrief: 'Straight-up pick the winners of 14 NFL Week 4 matchups. Most correct picks wins the main pool!',
    matches: [
      {
        id: 'm-nfl-1',
        homeTeam: 'Kansas City Chiefs',
        awayTeam: 'Los Angeles Chargers',
        date: 'Sun, Oct 4, 2026',
        time: '12:00 PM CT',
        venue: 'Arrowhead Stadium',
        homeRecord: '3-0',
        awayRecord: '2-1',
        status: 'UPCOMING'
      },
      {
        id: 'm-nfl-2',
        homeTeam: 'Buffalo Bills',
        awayTeam: 'Miami Dolphins',
        date: 'Sun, Oct 4, 2026',
        time: '12:00 PM CT',
        venue: 'Highmark Stadium',
        homeRecord: '3-0',
        awayRecord: '1-2',
        status: 'UPCOMING'
      },
      {
        id: 'm-nfl-3',
        homeTeam: 'Philadelphia Eagles',
        awayTeam: 'Dallas Cowboys',
        date: 'Sun, Oct 4, 2026',
        time: '3:25 PM CT',
        venue: 'Lincoln Financial Field',
        homeRecord: '2-1',
        awayRecord: '2-1',
        status: 'UPCOMING'
      },
      {
        id: 'm-nfl-4',
        homeTeam: 'Detroit Lions',
        awayTeam: 'Green Bay Packers',
        date: 'Sun, Oct 4, 2026',
        time: '3:05 PM CT',
        venue: 'Ford Field',
        homeRecord: '3-1',
        awayRecord: '2-2',
        status: 'UPCOMING'
      },
      {
        id: 'm-nfl-5',
        homeTeam: 'San Francisco 49ers',
        awayTeam: 'Seattle Seahawks',
        date: 'Sun, Oct 4, 2026',
        time: '7:20 PM CT',
        venue: "Levi's Stadium",
        homeRecord: '2-2',
        awayRecord: '3-1',
        status: 'UPCOMING'
      }
    ]
  },
  {
    id: 'nfl-survivor-46',
    numberCode: '#46',
    title: 'NFL SURVIVOR',
    sport: 'SURVIVOR',
    singleEntryFee: 25.00,
    closingDateText: 'Sun, Oct 4, 2026 – 12:00 CT',
    // 4 days, 21 hours, 3 minutes, 15 seconds
    closingTimestamp: now + (4 * 86400 + 21 * 3600 + 3 * 60 + 15) * 1000,
    prizePool: '$8,250.00',
    entriesCount: 312,
    maxEntries: 500,
    rulesBrief: 'Pick one team each week to win straight-up. You cannot pick the same team twice. Survive until the end!',
    matches: [
      {
        id: 'm-surv-1',
        homeTeam: 'Kansas City Chiefs',
        awayTeam: 'Los Angeles Chargers',
        date: 'Sun, Oct 4, 2026',
        time: '12:00 PM CT',
        venue: 'Arrowhead Stadium',
        homeRecord: '3-0',
        awayRecord: '2-1',
        status: 'UPCOMING'
      },
      {
        id: 'm-surv-2',
        homeTeam: 'Baltimore Ravens',
        awayTeam: 'Cincinnati Bengals',
        date: 'Sun, Oct 4, 2026',
        time: '12:00 PM CT',
        venue: 'M&T Bank Stadium',
        homeRecord: '2-1',
        awayRecord: '1-2',
        status: 'UPCOMING'
      },
      {
        id: 'm-surv-3',
        homeTeam: 'Detroit Lions',
        awayTeam: 'Green Bay Packers',
        date: 'Sun, Oct 4, 2026',
        time: '3:05 PM CT',
        venue: 'Ford Field',
        homeRecord: '3-1',
        awayRecord: '2-2',
        status: 'UPCOMING'
      },
      {
        id: 'm-surv-4',
        homeTeam: 'Houston Texans',
        awayTeam: 'Jacksonville Jaguars',
        date: 'Sun, Oct 4, 2026',
        time: '12:00 PM CT',
        venue: 'NRG Stadium',
        homeRecord: '2-1',
        awayRecord: '0-3',
        status: 'UPCOMING'
      }
    ]
  },
  {
    id: 'cfb-47',
    numberCode: '#47',
    title: 'COLLEGE FOOTBALL',
    sport: 'COLLEGE FOOTBALL',
    singleEntryFee: 20.00,
    closingDateText: 'Sat, Sep 27, 2026 – 12:00 CT',
    // 2 days, 8 hours, 16 minutes, 42 seconds
    closingTimestamp: now + (2 * 86400 + 8 * 3600 + 16 * 60 + 42) * 1000,
    prizePool: '$3,800.00',
    entriesCount: 165,
    maxEntries: 250,
    rulesBrief: 'Top 10 NCAAF marquee matchups of Saturday. Pick straight-up winners to take home the pool!',
    matches: [
      {
        id: 'm-cfb-1',
        homeTeam: 'Georgia Bulldogs',
        awayTeam: 'Alabama Crimson Tide',
        date: 'Sat, Sep 27, 2026',
        time: '6:30 PM CT',
        venue: 'Sanford Stadium',
        homeRecord: '4-0',
        awayRecord: '3-0',
        status: 'UPCOMING'
      },
      {
        id: 'm-cfb-2',
        homeTeam: 'Ohio State Buckeyes',
        awayTeam: 'Penn State Nittany Lions',
        date: 'Sat, Sep 27, 2026',
        time: '11:00 AM CT',
        venue: 'Ohio Stadium',
        homeRecord: '4-0',
        awayRecord: '3-0',
        status: 'UPCOMING'
      },
      {
        id: 'm-cfb-3',
        homeTeam: 'Texas Longhorns',
        awayTeam: 'Oklahoma Sooners',
        date: 'Sat, Sep 27, 2026',
        time: '2:30 PM CT',
        venue: 'Cotton Bowl',
        homeRecord: '4-0',
        awayRecord: '3-1',
        status: 'UPCOMING'
      },
      {
        id: 'm-cfb-4',
        homeTeam: 'Oregon Ducks',
        awayTeam: 'Washington Huskies',
        date: 'Sat, Sep 27, 2026',
        time: '7:00 PM CT',
        venue: 'Autzen Stadium',
        homeRecord: '4-0',
        awayRecord: '3-1',
        status: 'UPCOMING'
      }
    ]
  },
  {
    id: 'soccer-48',
    numberCode: '#48',
    title: 'SOCCER',
    sport: 'SOCCER',
    singleEntryFee: 20.00,
    closingDateText: 'Sat, Sep 27, 2026 – 10:00 CT',
    // 2 days, 6 hours, 12 minutes, 10 seconds
    closingTimestamp: now + (2 * 86400 + 6 * 3600 + 12 * 60 + 10) * 1000,
    prizePool: '$2,900.00',
    entriesCount: 130,
    maxEntries: 200,
    rulesBrief: 'Premier League & Champions League super fixtures. Select winner (Home / Away) or Draw!',
    matches: [
      {
        id: 'm-soc-1',
        homeTeam: 'Arsenal FC',
        awayTeam: 'Manchester City',
        date: 'Sat, Sep 27, 2026',
        time: '10:30 AM CT',
        venue: 'Emirates Stadium',
        homeRecord: '4-1-0',
        awayRecord: '4-1-0',
        status: 'UPCOMING'
      },
      {
        id: 'm-soc-2',
        homeTeam: 'Real Madrid',
        awayTeam: 'FC Barcelona',
        date: 'Sat, Sep 27, 2026',
        time: '2:00 PM CT',
        venue: 'Santiago Bernabéu',
        homeRecord: '5-0-0',
        awayRecord: '5-0-0',
        status: 'UPCOMING'
      },
      {
        id: 'm-soc-3',
        homeTeam: 'Liverpool FC',
        awayTeam: 'Chelsea FC',
        date: 'Sat, Sep 27, 2026',
        time: '11:30 AM CT',
        venue: 'Anfield',
        homeRecord: '4-0-1',
        awayRecord: '3-1-1',
        status: 'UPCOMING'
      },
      {
        id: 'm-soc-4',
        homeTeam: 'Bayern Munich',
        awayTeam: 'Borussia Dortmund',
        date: 'Sat, Sep 27, 2026',
        time: '11:30 AM CT',
        venue: 'Allianz Arena',
        homeRecord: '4-0-0',
        awayRecord: '3-1-0',
        status: 'UPCOMING'
      }
    ]
  },
  {
    id: 'ncaab-49',
    numberCode: '#49',
    title: 'NCAAB',
    sport: 'NCAAB',
    singleEntryFee: 20.00,
    closingDateText: 'Fri, Mar 13, 2027 – 7:00 CT',
    // 168 days, 10 hours, 24 minutes, 36 seconds
    closingTimestamp: now + (168 * 86400 + 10 * 3600 + 24 * 60 + 36) * 1000,
    prizePool: '$12,000.00',
    entriesCount: 420,
    maxEntries: 600,
    rulesBrief: 'The Grand March Madness Championship Pool. Pick the bracket or conference champions!',
    matches: [
      {
        id: 'm-ncaab-1',
        homeTeam: 'Duke Blue Devils',
        awayTeam: 'North Carolina Tar Heels',
        date: 'Fri, Mar 13, 2027',
        time: '7:00 PM CT',
        venue: 'Cameron Indoor Stadium',
        homeRecord: '24-4',
        awayRecord: '23-5',
        status: 'UPCOMING'
      },
      {
        id: 'm-ncaab-2',
        homeTeam: 'UConn Huskies',
        awayTeam: 'Kentucky Wildcats',
        date: 'Fri, Mar 13, 2027',
        time: '8:30 PM CT',
        venue: 'Gampel Pavilion',
        homeRecord: '26-2',
        awayRecord: '22-6',
        status: 'UPCOMING'
      },
      {
        id: 'm-ncaab-3',
        homeTeam: 'Kansas Jayhawks',
        awayTeam: 'Houston Cougars',
        date: 'Fri, Mar 13, 2027',
        time: '9:00 PM CT',
        venue: 'Allen Fieldhouse',
        homeRecord: '25-3',
        awayRecord: '25-3',
        status: 'UPCOMING'
      }
    ]
  }
];
