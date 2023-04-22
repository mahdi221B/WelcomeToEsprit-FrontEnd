import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser'

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
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventComponent } from './app-event/app-event.component';
import { TeamComponent } from './team/team.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './project/project.component';
import { MyteamComponent } from './myteam/myteam.component';



@NgModule({
  declarations: [
    AppEventComponent,
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    AdvertisementComponent,
    FooterComponent,
    TeamComponent,
    ProjectComponent,
    MyteamComponent,
  ],
  imports: [
          BrowserModule,

        FormsModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      NgxPaginationModule

  
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [
        NO_ERRORS_SCHEMA,
      ]
})
export class AppModule { }
