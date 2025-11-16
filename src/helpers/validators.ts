import { Match } from "../types/match.types";

/**
 * Validates that a match object has all required fields
 */
export function validateMatch(match: Match): boolean {
  return !!(
    match.homeTeam &&
    match.awayTeam &&
    match.date &&
    typeof match.homeTeam === "string" &&
    typeof match.awayTeam === "string" &&
    match.homeTeam.trim().length > 0 &&
    match.awayTeam.trim().length > 0
  );
}

/**
 * Determines if a match has been played (has scores)
 */
export function isPlayedMatch(match: Match): boolean {
  return (
    match.homeScore !== undefined &&
    match.awayScore !== undefined &&
    typeof match.homeScore === "number" &&
    typeof match.awayScore === "number"
  );
}

/**
 * Determines if a match is upcoming (no scores, has time)
 */
export function isUpcomingMatch(match: Match): boolean {
  return (
    !isPlayedMatch(match) &&
    match.time !== undefined &&
    match.time.trim().length > 0
  );
}

/**
 * Validates that team names are not empty and are strings
 */
export function validateTeamName(teamName: string | null | undefined): boolean {
  return (
    teamName !== null &&
    teamName !== undefined &&
    typeof teamName === "string" &&
    teamName.trim().length > 0
  );
}

