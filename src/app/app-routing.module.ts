import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddAdvertisementComponent } from './components/advertisements/add-update-advertisement/add-advertisement.component';
import { DetailAdvertisementComponent } from './components/advertisements/detail-advertisement/detail-advertisement.component';
import { AdvertisementComponent } from './components/advertisements/advertisement/advertisement.component';
import { ForumComponent } from './components/forum/forum.component';
import { PostComponent } from './components/posts/post/post.component';
import { AddUpdatePostComponent } from './components/posts/add-update-post/add-update-post.component';
import { DetailPostComponent } from './components/posts/detail-post/detail-post.component';
import { CommentsComponent } from './components/comments/comments/comments.component';
import { AddUpdateCommentsComponent } from './components/comments/add-update-comments/add-update-comments.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/dashborad', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponentComponent,
    children: [
      { path: '', redirectTo: 'dashborad', pathMatch: 'full' },
      { path: 'dashborad', component: DashboardComponentComponent },
      { path: 'ads', component: AdvertisementComponent },
      { path: 'ads/add', component: AddAdvertisementComponent },
      { path: 'posts', component: PostComponent },
      { path: 'post/add', component: AddUpdatePostComponent },
      { path: 'comments/add', component: AddUpdateCommentsComponent },
      { path: 'comments/update/:id', component: AddUpdateCommentsComponent},
      { path: 'post/update/:id', component: AddUpdatePostComponent },
      { path: 'ads/update/:id', component: AddAdvertisementComponent },
      { path: 'postcomments/:id', component: CommentsComponent }, 
      { path: 'post/:id', component: DetailPostComponent },
      { path: 'ads/:id', component: DetailAdvertisementComponent }, 
    ]
  },
  
  { path: 'forum', component: ForumComponent },
  { path: '**', component: NotFoundComponent }
];
// , {
//   path: 'forum',
//   loadChildren: () => import('./components/forum/forum.module').then(m => m.ForumModule)
// },
/*The import function is used to dynamically load the module. The then method is used to handle the 
loaded module's class. In this case, the m parameter represents the loaded module's class, 
which is ForumModuleModule.*/




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }