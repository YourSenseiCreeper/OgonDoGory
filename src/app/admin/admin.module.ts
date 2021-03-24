import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
