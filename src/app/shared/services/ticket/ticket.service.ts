import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bet } from '../../models/bet.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient, private auth: AuthService) { }


  public addCredit(credit: number) {
    const url = '/betWS/user/addCredit';
    return new Observable((o: any) => {
      this.http.post(url, {
        'user': this.auth.getLoggedUser(),
        'credit': credit
      }).subscribe((data) => {
        o.next(data);
        return o.complete();
      }, (err) => {
        return o.error(err);
      });
    });
  }

  public getGames() {
    const url = '/betWS/ticket/game/' + Date.now();
    return new Observable((o: any) => {
      this.http.get(url, {

      }).subscribe((data) => {
        o.next(data);
        return o.complete();
      }, (err) => {
        return o.error(err);
      });
    });
  }

  public saveTicket(userId: string, money: number, bets: Array<Bet>, totalOdd: number) {
    const url = '/betWS/ticket/save';
    return new Observable((o: any) => {
      this.http.post(url, {
        'userKey': userId,
        'sum': money,
        'bets': bets,
        'totalOdd': totalOdd
      }).subscribe((data) => {
        o.next(data);
        return o.complete();
      }, (err) => {
        return o.error(err);
      });
    });
  }

  public allTicketsForUser() {
    const url = '/betWS/ticket/?id=' + this.auth.getLoggedUser()._id;
    console.log(url);
    return new Observable((o: any) => {
      this.http.get(url, {
      }).subscribe((data) => {
        o.next(data);
        return o.complete();
      }, (err) => {
        return o.error(err);
      });
    });
  }

}
