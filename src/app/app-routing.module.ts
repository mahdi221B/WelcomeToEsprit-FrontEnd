import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AppComponent } from './app.component';
import { AppEventComponent } from './componnets/app-event/app-event.component';
import { TeamComponent } from './componnets/team/team.component';
import { MyteamComponent } from './componnets/myteam/myteam.component';
import { ProjectComponent } from './componnets/project/project.component';
import { ProjectaddedsuccComponent } from './componnets/projectaddedsucc/projectaddedsucc.component';
import { GetvideoComponent } from './componnets/getvideo/getvideo.component';
import { ProjectDetailComponent } from './componnets/project-detail/project-detail.component';
import { StatsComponent } from './componnets/stats/stats.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'ads', component: AdvertisementComponent },
  { path: 'event', component: AppEventComponent },
  { path: 'team', component: TeamComponent },
  { path: 'Myteam', component: MyteamComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'succ', component: GetvideoComponent },
  { path: 'Projects', component: ProjectComponent },

  { path: 'video/:id', component: ProjectDetailComponent },



  { path: '**', component: NotFoundComponent }

];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }