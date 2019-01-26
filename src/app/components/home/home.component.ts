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
    // curr user
    public user: any;

    // games from service
    public data = { games: [] };

    // user ticket games
    public games: Array<{ idMatch: number, result: number, team1: string, team2: string, odd: number }> =
        new Array<{ idMatch: number, result: number, team1: string, team2: string, odd: number }>();

    public sum: number;
    private numberOfGames: number;

    constructor(private router: Router,
        public auth: AuthService,
        private ticket: TicketService) {

        this.user = this.auth.user;
        this.ticket.getGames()
            .subscribe((res: any) => this.data = res);

    }

    ngOnInit() {
    }

    public addToTicket(team1: string, team2: string, idMatch: number, odd: number, result: number) {
        this.games.push({
            'team1': team1,
            'team2': team2,
            'idMatch': idMatch,
            'odd': odd,
            'result': result
        });
        this.numberOfGames++;
    }

    public payTicket() {
        console.log('games == ', this.games);
        console.log('user == ', this.user);
        console.log('sum == ', this.sum);
    }

}
