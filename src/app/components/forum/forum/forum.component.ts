import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/shared/services/forum/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {
    public data: any;
    public idTheme: number;
    public idUser: number;
    public commentContent: string;

    constructor(private authService: AuthService,
        private http: HttpClient,
        private forumService: ForumService,
        private router: Router) {
        let currentUser = this.authService.getLoggedUser();

        this.forumService.getThemes()
            .subscribe(res => { this.data = res; console.log(res) });
        this.idUser = authService.getLoggedUser()._id;
    }

    saveComment(idTheme, commentContent) {
        this.forumService.addMessageToTopic(idTheme, this.idUser, commentContent)
            .subscribe((res) => { 
                console.log(res);
                this.data = res 
            });
    }

    createTheme(name: HTMLInputElement, desc: HTMLInputElement) {
        console.log(" aa " + this.authService.getLoggedUser());
        this.forumService.saveTopic(name.value, desc.value, this.idUser)
            .subscribe((res) => { this.data = res });
        name.value = '';
        desc.value = '';
    }

    ngOnInit() {
    }

}
