import { User } from './user.model';
import { Bet } from './bet.model';

export class Ticket {
  _id: string;
  time: string;
  potentionalWinnings: number;
  stake: number;
  totalOdd: number;
  valid: boolean;
  user: User;
  bets: Bet[];
}

interface Game {
  _id: string;
  time: string;
  city: string;
  awayOdd: number;
  homeOdd: number;
  egalOdd: number;
  awayScore: number;
  homeScore: number;
  team1: Team1;
  team2: Team1;
}

interface Team1 {
  _id: string;
  name: string;
  city: string;
  stadium: string;
}
