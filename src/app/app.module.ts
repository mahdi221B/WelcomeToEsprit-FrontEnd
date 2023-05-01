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
import { FooterComponent } from './footer/footer.component';
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
import { WebSocketService } from './web-socket.service';
import { MessageComponent } from './components/message/message.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    FooterComponent,
    AdvertisementComponent,
    AddAdvertisementComponent,
    DetailAdvertisementComponent,
    ForumComponent,
    ReactComponent,
    AddUpdatePostComponent,
    PostComponent,
    DetailPostComponent,
    AddUpdateCommentsComponent,
    CommentsComponent,
    MessageComponent,
    TimeAgoPipe,
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
  ],
   providers: [WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}