import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.auth.login(email, password).subscribe(() => {
        this.router.navigateByUrl('/');
    }, (err) => {
        alert(`${err.error.error}`);
    });
  }

}
