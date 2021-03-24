import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootRoutingModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
})
export class RootModule {}
