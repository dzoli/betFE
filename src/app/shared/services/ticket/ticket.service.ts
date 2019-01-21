import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    constructor(private http: HttpClient, private auth: AuthService) { }


    public addCredit(credit: number) {
        let url = '/betWS/user/addCredit';
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

}
