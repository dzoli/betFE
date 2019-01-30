import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { Observable } from 'rxjs';
import { Bet } from 'src/app/shared/models/bet.model';
import { NotifyService } from 'src/app/shared/services/notify/notify.service';
import { MatDialog } from '@angular/material';
import { TicketComponent } from '../ticket/ticket.component';

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
  public totalOdd: number;

  constructor(private router: Router,
    private dialog: MatDialog,
    public auth: AuthService,
    private notify: NotifyService,
    private ticket: TicketService) {
    this.user = this.auth.user;
    this.totalOdd = 1.;
    this.sum = 0;
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

  public addToTicket(idMatch: string, result: number, idx: number, odd: number, home: string, away: string, time: string) {
    const bet = new Bet(idMatch, result, home, away, time);
    this.bets.push(bet);
    if (this.bets.includes(bet)) {
      this.isDisabled[idx] = true;
    } else {
      this.isDisabled[idx] = false;
    }
    this.totalOdd *= odd;

    console.log('odd', this.totalOdd);
  }

  public clear() {
    for (let i = 0; i < this.data.games.length; i++) {
      this.isDisabled[i] = false;
    }
    this.totalOdd = 1.;
    this.bets = new Array<Bet>();
    this.sum = 0;
  }

  public openDialog(): void {
      const dialogRef = this.dialog.open(TicketComponent, {
        width: '850px',
        data: { bets: this.bets, odd: this.totalOdd, money: this.sum }
      });

      dialogRef.afterClosed().subscribe(res => {

        this.clear();
      });
  }



}
