import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ForumService {

    constructor(private http: HttpClient) { }

    // get all
    public getThemes() {
        let url = '/betWS/all';
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
        let url = '/betWS/idTheme/save';
        return new Observable((o: any) => {
            this.http.post(url, {
                "idTheme": idTheme,
                "idUser": idUser,
                "commentContent": comment
            }).subscribe((data) => {
                o.next(data);
                return o.complete();
            }, (err) => {
                return o.error(err);
            });
        });
    }

    public saveTopic(name: string, desc: string, idUser: number) {
        let url = '/betWS/save';
        return new Observable((o: any) => {
            this.http.post(url, {
                "name": name,
                "description": desc,
                "time": Date.now(),
                "user": {
                    "idUser": idUser
                }
            }).subscribe((data) => {
                o.next(data);
                return o.complete();
            }, (err) => {
                return o.error(err);
            });
        });
    }
}
