import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class GuestGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService){}


    canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("=== snapshot", routeSnapshot);
        console.log("=== state", state);
        if (this.auth.isAuthenticated) {
            this.router.navigate(['/register']);
        }     
        return true;
    }
}
