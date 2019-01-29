import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { Observable } from 'rxjs';
import { Bet } from 'src/app/shared/models/bet.model';
import { NotifyService } from 'src/app/shared/services/notify/notify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // curr user
  public user: any;

  // games from service
  public data = { games: [] };

  // user ticket games
  // public games: Array<{ idMatch: number, result: number }> = new Array<{ idMatch: number, result: number }>();
  public bets: Array<Bet> = new Array<Bet>();
  public isDisabled: Array<boolean>;

  public sum: number;
  private totlaOdd: number;

  constructor(private router: Router,
    public auth: AuthService,
    private notify: NotifyService,
    private ticket: TicketService) {
    this.user = this.auth.user;
    this.totlaOdd = 1.;
    this.ticket.getGames()
      .subscribe((res: any) => {
        this.data = res;
        this.isDisabled = new Array(this.data.games.length);
        for (let i = 0; i < this.data.games.length; i++) {
          this.isDisabled[i] = false || !auth.isAuthenticated;
        }
      });
  }

  ngOnInit() {
  }

  public addToTicket(idMatch: string, result: number, idx: number, odd: number) {
    const bet = new Bet(idMatch, result);
    this.bets.push(bet);
    if (this.bets.includes(bet)) {
      this.isDisabled[idx] = true;
    } else {
      this.isDisabled[idx] = false;
    }
    this.totlaOdd *= odd;

    console.log('odd', this.totlaOdd);
  }

  public clear() {
    for (let i = 0; i < this.data.games.length; i++) {
          this.isDisabled[i] = false;
    }
    this.totlaOdd = 1.;
    this.bets = new Array<Bet>();
    this.sum = 0;
  }

  public payTicket() {
    console.log('games == ', this.bets);
    console.log('user == ', this.user);
    console.log('sum == ', this.sum);
    console.log('disabled btns == ', this.isDisabled);
    console.log('total odd == ', this.isDisabled);
    this.ticket.saveTicket(this.user._id, this.sum, this.bets, this.totlaOdd)
      .subscribe((res: any) => {
        this.notify.Success('Success', 'Check ticket status at history.');
      },
        (error: any) => {
          this.notify.Error('Info', error.error);
        });
  }

}
