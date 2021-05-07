import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponentComponent } from './admin.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpeciesDictionaryComponent } from './species-dictionary/species-dictionary.component';
import { NewPostComponent } from './posts/new-post.component';
import { AddEditAnimalComponent } from './add-edit-animal/add-edit-animal.component';
import { NewMailComponent } from './mails/new/new-mail.component';
import { MailListComponent } from './mails/list/mail-list.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    LoginComponent,
    AdminComponentComponent,
    NewMailComponent,
    SpeciesDictionaryComponent,
    NewPostComponent,
    AddEditAnimalComponent,
    MailListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbCollapseModule,
    CollapseModule,
    NgbModule,
  ]
})
export class AdminModule { }
