import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public user: User = new User();
  public errors: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  public register() {
    // this.auth.register(this.user).subscribe(() => {
    //     this.router.navigateByUrl('/login');
    // }, (err: HttpErrorResponse) => {
    //     alert(`${err.error.error}`);
    // });
  }

}
