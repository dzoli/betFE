import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Bet } from 'src/app/shared/models/bet.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
})
export class GamesComponent implements OnInit {

  public bets: Array<any>;
  public columns: string[] = ['Date', 'Home', 'Away', 'Home_score', 'Away_score', 'Result', 'Status'];

  constructor(public dialogRef: MatDialogRef<GamesComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.bets = data.bets;
    console.log('data=', data);
  }

  ngOnInit() {
  }

}

