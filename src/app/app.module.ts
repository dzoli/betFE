import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import {RegisterComponent} from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; // check docs: https://www.npmjs.com/package/ngx-pagination
import { OrderModule } from 'ngx-order-pipe';
import { HomeComponent } from './components/home/home.component';
import { ForumComponent } from './components/forum/forum/forum.component'; // check docs: https://www.npmjs.com/package/ngx-order-pipe
import { NotifyService } from './shared/services/notify/notify.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
