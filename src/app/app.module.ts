import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateOfferComponent } from './offer/create-offer/create-offer.component';
import { ShowOfferComponent } from './offer/show-offer/show-offer.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateOfferComponent,
    ShowOfferComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
