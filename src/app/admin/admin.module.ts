import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponentComponent } from './admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewMailComponent } from './mails/new-mail.component';
import { SpeciesDictionaryComponent } from './species-dictionary/species-dictionary.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
    AdminComponentComponent,
    NewMailComponent,
    SpeciesDictionaryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
  ]
})
export class AdminModule { }
