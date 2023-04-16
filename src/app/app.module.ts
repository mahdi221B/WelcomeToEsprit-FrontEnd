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
import { FormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { DetailAdvertisementComponent } from './detail-advertisement/detail-advertisement.component';
import { UpdateAdvertisementComponent } from './update-advertisement/update-advertisement.component';
import { NgxPaginationModule } from 'ngx-pagination';


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
    AddAdvertisementComponent,
    DetailAdvertisementComponent,
    UpdateAdvertisementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
