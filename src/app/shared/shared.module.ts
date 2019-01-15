import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { GuestGuard } from './guards/guest.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    GuestGuard
  ],
  declarations: [],
  exports: []
})
export class SharedModule { }
