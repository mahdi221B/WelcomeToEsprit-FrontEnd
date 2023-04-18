import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AppComponent } from './app.component';
import { AppEventComponent } from './app-event/app-event.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'ads', component:AdvertisementComponent},
  {path :'event', component:AppEventComponent},
    {path :'team', component:TeamComponent},

  { path: '**', component: NotFoundComponent }
  
];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }