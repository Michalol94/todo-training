import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NavbarComponentModule } from '@navigations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { InMemoryContextStorageModule } from '@team';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    CommonModule,
    BsDropdownModule.forRoot(),
    NavbarComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    InMemoryContextStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
