import { DataService } from './../data.service';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AdoptionComponent } from './adoption/adoption.component';
import { CommonModule } from '@angular/common';
import { AdoptionDetailsComponent } from './adoption-details/adoption-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from "ngx-bootstrap/collapse";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdoptionComponent,
    AdoptionDetailsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbModule,
    ReactiveFormsModule,
    CollapseModule,
  ],
  providers: [
    Title,
    DataService,
  ],
  entryComponents: []
})
export class AppModule { 
  constructor(router: Router) {
  }
}
