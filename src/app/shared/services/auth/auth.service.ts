import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; 
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

  public user: User;
  public head: any;

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = false;
    this.user = new User();
    this.head = this.getRequestHeaders();
  }

  public register(user: User){
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

  public getRequestHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
    
  }
}
