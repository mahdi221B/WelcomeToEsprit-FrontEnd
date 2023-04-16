import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { DetailAdvertisementComponent } from './detail-advertisement/detail-advertisement.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'ads', component:AdvertisementComponent},
  { path: 'ads/:id', component:DetailAdvertisementComponent},
  { path: 'ads/add', component:AddAdvertisementComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }