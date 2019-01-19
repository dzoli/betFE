import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/services/notify/notify.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private auth: AuthService, private notify: NotifyService) { }

    ngOnInit() {
    }

    login(email: string, password: string) {
        this.auth.login(email, password).subscribe(() => {
            this.router.navigateByUrl('/');
        }, (err) => {
            // alert(`${err.error.error}`);
            this.notify.Error("Error","You have entered an invalid username or password.");
        });
    }

}
