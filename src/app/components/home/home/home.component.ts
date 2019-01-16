import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public user: any;  

  constructor(private router: Router, private auth: AuthService) { 
      this.user = auth.user;
  }

  ngOnInit() {
  }

}
