import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { MatDialog } from '@angular/material';
import { DetailComponent } from '../detail/detail.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

    constructor(public auth: AuthService, private dialog: MatDialog) { }

    ngOnInit() {
    }

    openDialog() {
      // open new component as dialg
      this.dialog.open(DetailComponent, {
          width: '400px'
      });
    }


}
