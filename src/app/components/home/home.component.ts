import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public user: any;
    public currCredit: number = 0;
    public deltaCredit: number;

    constructor(private router: Router, 
                private auth: AuthService, 
                private ticket: TicketService) {
        this.user = auth.user;
    }


    public addCredit() {
        this.ticket.addCredit(this.deltaCredit)
                .subscribe((res: any) => this.currCredit = res);
    }

    ngOnInit() {
        if (this.auth.isAuthenticated) {
            this.currCredit = this.auth.getCurrentUserCredit();
        }
    }
}
