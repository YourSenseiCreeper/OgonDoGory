import { AdoptionGalleryComponent } from './adoption-gallery/adoption-gallery.component';
import { AlarmTelephoneComponent } from './alarm-telephone/alarm-telephone.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { PostDetailsComponent } from './post-details/post-details.component';
import { HowToHelpComponent } from './how-to-help/how-to-help.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdoptionComponent,
    AdoptionDetailsComponent,
    AlarmTelephoneComponent,
    AdoptionGalleryComponent,
    PostDetailsComponent,
    HowToHelpComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule,
    NgbModule,
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
