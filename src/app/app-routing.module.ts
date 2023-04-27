import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ListOffresComponent } from './components/JobOffer/list-offres/list-offres.component';
import { AddOfferComponent } from './components/JobOffer/add-offer/add-offer.component';
import { TestComponent } from './components/JobOffer/test/test.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { ListeClassifierCondidatsComponent } from './components/liste-classifier-condidats/liste-classifier-condidats.component';
import { ListAvailabtityComponent } from './components/availablity/list-availabtity/list-availabtity.component';

const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'ads', component:AdvertisementComponent},
  {path:'listoffers',component:ListOffresComponent},
  {path:"addOffer",component:AddOfferComponent},
  {path:"list-condidats",component:ListeClassifierCondidatsComponent},
  {path:"add",component:AddOfferComponent},
  {path:"list-availablity",component:ListAvailabtityComponent},
  { path:'test', component : TestComponent},
  { path: '**', component: NotFoundComponent }
  
];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }