export interface Match {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  time?: string;
  state?: "played" | "upcoming" | "postponed" | "canceled";
  link?: string;
}

export interface NetworkRequest {
  url: string;
  method: string;
  timestamp: number;
  responseTime?: number;
  cached?: boolean;
  status?: number;
}

