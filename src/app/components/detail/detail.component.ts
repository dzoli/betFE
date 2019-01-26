import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {

  public deltaCredit: number;

  constructor(public auth: AuthService, private ticket: TicketService) { }

  ngOnInit() {
    this.deltaCredit = 0;
  }

  public addCredit() {
    this.ticket.addCredit(this.deltaCredit)
      .subscribe((res: any) => this.auth.setCurrentCredit(res));
    this.deltaCredit = 0;
  }

}
