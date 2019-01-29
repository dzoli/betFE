export class Bet {

  public gameKey: string;
  public bet: number;

  //  constructor(data?: {
  //   gameKey?: string,
  //   bet?: number
  // }) {
  //   Object.assign(this, data || {});
  // }

  constructor(gameKey: string, bet: number) {
    this.gameKey = gameKey;
    this.bet = bet;
  }

}


