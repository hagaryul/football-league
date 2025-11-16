/**
 * CSS selectors for the Israeli Football League section
 * Note: These selectors may need adjustment based on actual DOM structure
 */
export const SELECTORS = {
  // Main container selectors - adjust based on actual page structure
  leagueList: '[data-league*="football"], [data-league*="soccer"], .league-list, .matches-list',
  matchItem: '.match-item, .match, [class*="match"], [data-match]',
  teamName: '.team-name, .team, [class*="team"]',
  homeTeam: '.home-team, [class*="home"]',
  awayTeam: '.away-team, [class*="away"]',
  score: '.score, .result, [class*="score"]',
  matchDate: '.date, .match-date, [class*="date"]',
  matchTime: '.time, .match-time, [class*="time"]',
  matchLink: 'a[href*="match"], .match-link, [class*="link"]',
  // Status indicators
  postponed: '[class*="postponed"], [class*="delay"]',
  canceled: '[class*="canceled"], [class*="cancel"]',
};

