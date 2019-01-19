import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html'
})
export class ForumComponent implements OnInit {

  constructor(private auth: AuthService, 
              private http: HttpClient,
              private router: Router) { 
                 

              }

  ngOnInit() {
  }

}
