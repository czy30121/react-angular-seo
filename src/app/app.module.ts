import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AboutComponent } from './modules/about/about.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-erp-starter' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
