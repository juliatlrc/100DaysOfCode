import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TomJazzSchoolComponent } from './tom-jazz-school/tom-jazz-school.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TomJazzSchoolComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    TomJazzSchoolComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
