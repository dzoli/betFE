import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/services/notify/notify.service';
import { FormService } from 'src/app/shared/services/form/form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private auth: AuthService,
              private notify: NotifyService,
              public form: FormService) { }

  ngOnInit() {
  }

  public onClear() {
    this.form.loginForm.reset();
    this.form.initLoginForm();
  }

  public login(email: string, password: string) {
    console.log('click');
    this.auth.login(email, password).subscribe(() => {
      this.router.navigateByUrl('/');
    }, (err) => {
      // alert(`${err.error.error}`);
      this.notify.Error('Error', 'You have entered an invalid username or password.');
    });
  }

}
