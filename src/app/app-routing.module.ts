import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component';
import { ReclamationComponent } from './components/reclamations/reclamation/reclamation.component';
import { UpdateReclamationComponent } from './components/reclamations/update-reclamation/update-reclamation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/dashborad', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponentComponent,
    children: [
      { path: '', redirectTo: 'dashborad', pathMatch: 'full' },
      { path: 'dashborad', component: DashboardComponentComponent },


      { path: 'reclamation', component: ReclamationComponent },
      { path: 'reclamation/add', component: AddReclamationComponent },
      { path: 'reclamation/update/:id', component: UpdateReclamationComponent },

      
    ]
  },
  { path: '**', component: NotFoundComponent }
];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }