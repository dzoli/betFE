import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ForumService {

    constructor(private http: HttpClient, private auth: AuthService) { }

    // get all
    public getThemes() {
        let url = '/betWS/forum/all';
        return new Observable((o: any) => {
            this.http.post(url, {}).subscribe((data) => {
                o.next(data);
                return o.complete();
            }, (err) => {
                return o.error(err);
            });
        });
    }

    public addMessageToTopic(idTheme: number, idUser: number, comment: string) {
        let url = '/betWS/forum/'+idTheme+'/save';
        return new Observable((o: any) => {
            this.http.post(url, {
                "creator": this.auth.getLoggedUser(),
                "text": comment
            }).subscribe((data) => {
                o.next(data);
                return o.complete();
            }, (err) => {
                return o.error(err);
            });
        });
    }

    public saveTopic(name: string, desc: string, idUser: number) {
        let url = '/betWS/forum/save';
        return new Observable((o: any) => {
            this.http.post(url, {
                "name": name,
                "description": desc, // time cuvas na serveru
                "created": Date.now(), 
                "creator": this.auth.getLoggedUser()
            }).subscribe((data) => {
                o.next(data);
                return o.complete();
            }, (err) => {
                return o.error(err);
            });
        });
    }
}
