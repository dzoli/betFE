import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public user: User = new User();
  public errors: any[] = [];

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  public register() {
    this.auth.register(this.user).subscribe(() => {
        this.router.navigateByUrl('/login');
    }, (err: HttpErrorResponse) => {
        alert(`${err.error.error}`);
    });
  }

}
