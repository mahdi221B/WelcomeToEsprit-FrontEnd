import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddAdvertisementComponent } from './components/advertisements/add-update-advertisement/add-advertisement.component';
import { DetailAdvertisementComponent } from './components/advertisements/detail-advertisement/detail-advertisement.component';
import { AdvertisementComponent } from './components/advertisements/advertisement/advertisement.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/dashborad', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponentComponent,
    children: [
      { path: '', redirectTo: 'dashborad', pathMatch: 'full' },
      { path: 'dashborad', component: DashboardComponentComponent },
      { path: 'ads', component: AdvertisementComponent},
      { path: 'ads/add', component: AddAdvertisementComponent },
      { path: 'update/:id', component: AddAdvertisementComponent },
      { path: ':id', component: DetailAdvertisementComponent },      
    ]
  },
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }