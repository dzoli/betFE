import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { tick } from '@angular/core/src/render3';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { MatDialog } from '@angular/material';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

  public ticketsDs: Array<Ticket>;
  public columns: string [] = ['Date', 'Potentional_winnins', 'Stake', 'Total_odd', 'Status', 'Games'];

  constructor(private ticket: TicketService, private dialog: MatDialog) {
    this.ticket.allTicketsForUser()
      .subscribe((res: Array<Ticket>) => {
        console.log(res);
        this.ticketsDs = res;
        console.log('res', this.ticketsDs);
      });

   }

  ngOnInit() {
  }

   public openDialog(allBets: any): void {
      const dialogRef = this.dialog.open(GamesComponent, {
        width: '850px',
        data: {bets: allBets}
      });

      dialogRef.afterClosed().subscribe(res => {
        console.log('Games dialog closed.');
      });
  }

}
