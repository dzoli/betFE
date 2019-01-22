import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/shared/services/ticket/ticket.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public user: any;
    public deltaCredit: number;
    public games: Array<{ idMatch: number, result: number, team1: string, team2: string, odd: number }> = new Array<{ idMatch: number, result: number, team1: string, team2: string, odd: number }>();
    public data = { games: [] }; // all games from service (date will be added later)

    constructor(private router: Router, 
                private auth: AuthService, 
                private ticket: TicketService) {
        this.user = auth.user;
        this.ticket.getGames()
            .subscribe((res: any) => this.data = res);

        console.log("data == " ,this.data);
        
    }
    
    
    public addCredit() {
        this.ticket.addCredit(this.deltaCredit)
        .subscribe((res: any) => this.auth.setCurrentCredit(res));
    }
    
    ngOnInit() {
        // this.ticket.getGames()
        //         .subscribe((res: any) => this.data = res);
    }
}
