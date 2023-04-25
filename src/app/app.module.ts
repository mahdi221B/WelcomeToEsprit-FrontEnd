import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
import { ListOffresComponent } from './components/JobOffer/list-offres/list-offres.component';
import { AddOfferComponent } from './components/JobOffer/add-offer/add-offer.component';
import { TestComponent } from './components/JobOffer/test/test.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { FrontOfficeComponent } from './components/front-office/front-office.component';
import { ListeClassifierCondidatsComponent } from './components/liste-classifier-condidats/liste-classifier-condidats.component';
import { AvailablityComponent } from './components/availablity/availablity.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    AdvertisementComponent,
    FooterComponent,
    ListOffresComponent,
    AddOfferComponent,
    TestComponent,
    ApplicationFormComponent,
    FrontOfficeComponent,
    ListeClassifierCondidatsComponent,
    AvailablityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
