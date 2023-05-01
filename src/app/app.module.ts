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
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppEventComponent } from './app-event/app-event.component';
import { TeamComponent } from './team/team.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectComponent } from './project/project.component';
import { MyteamComponent } from './myteam/myteam.component';
import { ProjectaddedsuccComponent } from './projectaddedsucc/projectaddedsucc.component';
import { GetvideoComponent } from './getvideo/getvideo.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddeventComponent } from './addevent/addevent.component';
=======
import { AddAdvertisementComponent } from './components/advertisements/add-update-advertisement/add-advertisement.component';
import { DetailAdvertisementComponent } from './components/advertisements/detail-advertisement/detail-advertisement.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdvertisementComponent } from './components/advertisements/advertisement/advertisement.component';
import { ForumComponent } from './components/forum/forum.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactComponent } from './components/forum/react/react.component';
import { AddUpdatePostComponent } from './components/posts/add-update-post/add-update-post.component';
import { PostComponent } from './components/posts/post/post.component';
import { DetailPostComponent } from './components/posts/detail-post/detail-post.component';
import { AddUpdateCommentsComponent } from './components/comments/add-update-comments/add-update-comments.component';
import { CommentsComponent } from './components/comments/comments/comments.component';
>>>>>>> 966c8b2a04b91a797a2e0c0521fee62509342e90



@NgModule({
  declarations: [
    AppEventComponent,
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    FooterComponent,
    AdvertisementComponent,
<<<<<<< HEAD
    FooterComponent,
    TeamComponent,
    ProjectComponent,
    MyteamComponent,
    ProjectaddedsuccComponent,
    GetvideoComponent,
    ProjectDetailComponent,
    AddeventComponent,
  ],
  imports: [
          BrowserModule,

        FormsModule,
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      NgxPaginationModule

  
=======
    AddAdvertisementComponent,
    DetailAdvertisementComponent,
    ForumComponent,
    ReactComponent,
    AddUpdatePostComponent,
    PostComponent,
    DetailPostComponent,
    AddUpdateCommentsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule, 
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    ScrollingModule,
    InfiniteScrollModule
>>>>>>> 966c8b2a04b91a797a2e0c0521fee62509342e90
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [
        NO_ERRORS_SCHEMA,
      ]
})
export class AppModule { }
