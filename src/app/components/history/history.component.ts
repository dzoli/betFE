import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
})
export class HistoryComponent implements OnInit {

  public ticketsDs: Array<Ticket>;
  public columns: string [] = ['Date', 'Potentional_winnins', 'Stake', 'Total_odd', 'Status'];

  constructor(private ticket: TicketService) {
    this.ticket.allTickets()
      .subscribe((res: Array<Ticket>) => {
        console.log(res);
        this.ticketsDs = res;
        console.log('res', this.ticketsDs);
      });

   }

  ngOnInit() {
  }

}
