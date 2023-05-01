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
import { ListAvailabtityComponent } from './components/availablity/list-availabtity/list-availabtity.component';
import { AddAvailabtityComponent } from './components/availablity/add-availabtity/add-availabtity.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FrontOfficeOffreComponent } from './components/front-office-offre/front-office-offre.component';
import { RendezVousComponent } from './components/rendez-vous/rendez-vous.component';
import { FullCalendarComponent } from './components/availablity/full-calendar/full-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { CommonModule } from '@angular/common';


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
    AvailablityComponent,
    ListAvailabtityComponent,
    AddAvailabtityComponent,
    FrontOfficeOffreComponent,
    
    RendezVousComponent,
    FullCalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    
    ReactiveFormsModule,
    NgxPaginationModule,
    
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
