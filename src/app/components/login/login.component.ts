import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(email, password) {
    // this.authService.login(email, password).subscribe(() => {
    //     this.router.navigateByUrl('/');
    // }, (err: HttpErrorResponse) => {
    //     alert(`${err.error.error}`);
    // });
  }

}
