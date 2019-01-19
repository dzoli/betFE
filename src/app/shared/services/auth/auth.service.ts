import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { HttpInterceptorHandler } from '@angular/common/http/src/interceptor';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public isAuthenticated: boolean;
    public isAdmin: boolean;
    public isUser: boolean;
    public isOfficer: boolean;

    public user: any;
    public head: any;

    constructor(private http: HttpClient, private router: Router) {
        this.isAuthenticated = false;
        this.user = new User();
        this.head = this.getRequestHeaders();
    }

    public register(user: User) {
        return new Observable((o) => {
            this.http.post('/betWS/user/save', {
                "username": user.username,
                "password": user.password,
                "email": user.email,
                "lastname": user.surname,
                "firstname": user.name,
                "credit": 0.0,
                "role": "user"
            }, this.head).subscribe(() => {
                this.router.navigateByUrl('/login');
            }, (err) => {
                return o.error(err);
            });
        });
    }

    public login(email: string, password: string) {
        return new Observable((o: Observer<any>) => {
            this.http.post('/betWS/user/login', {
                'email': email,
                'password': password
            }, this.head).subscribe((data) => {
                this.isAuthenticated = true;
                this.router.navigateByUrl('/home');
                this.user = data;
                this.isAdmin = this.user.role === 'admin';
                this.isOfficer = this.user.role === 'officer';
                this.isUser = this.user.role === 'user';
                o.next(data);
                return o.complete();
            }, (err) => {
                return o.error(err)
            });
        });
    }

    public logout() {
        window.localStorage.removeItem('loginToken');
        this.isAuthenticated = false;
        this.router.navigateByUrl('/login');
    }

    public getRequestHeaders(): HttpHeaders {
        return new HttpHeaders().set('Content-Type', 'application/json');
    }

    public getLoggedUserParams(): any{
        let user = {
            'email' : this.user.email,
            'password' : this.user.password
        }
        return user;
    }
    
    public getLoggedUser(): any{
        return this.user;
    }
}
