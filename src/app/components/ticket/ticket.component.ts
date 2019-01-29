import { Component, OnInit, Inject } from '@angular/core';
import { Bet } from 'src/app/shared/models/bet.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/services/notify/notify.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
})
export class TicketComponent implements OnInit {

  public bets: Array<Bet> = new Array<Bet>();
  public totalOdd: number;
  public money: number;
  public potentionalWin: number;

  constructor(public dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private ticket: TicketService,
    private auth: AuthService,
    private notify: NotifyService) {
    this.money = data.money;
    this.bets = data.bets;
    this.totalOdd = data.odd;
    this.potentionalWin = this.totalOdd * this.money;
    console.log('data', data);
  }

  ngOnInit() {
  }

  public payTicket() {
    this.ticket.saveTicket(this.auth.getLoggedUser()._id, this.money, this.bets, this.totalOdd)
      .subscribe((res: any) => {
        this.notify.Success('Success', 'Check ticket status at history.');
        this.dialogRef.close();
      },
        (error: any) => {
          this.notify.Error('Info', error.error);
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
