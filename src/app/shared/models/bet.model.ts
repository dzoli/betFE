export class Bet {

  public gameKey: string;
  public bet: number;
  public home: string;
  public away: string;
  public time: string;

  //  constructor(data?: {
  //   gameKey?: string,
  //   bet?: number,
  // }) {
  //   Object.assign(this, data || {});
  // }

  constructor(gameKey: string, bet: number, home: string, away: string, time: string) {
    this.gameKey = gameKey;
    this.bet = bet;
    this.home = home;
    this.away = away;
    this.time = time;
  }

}


