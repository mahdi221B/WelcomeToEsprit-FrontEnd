import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { BlockComponent } from './block/block.component';
import { AddBlockComponent } from './block/add-block/add-block.component';
import { UpdateBlockComponent } from './block/updateblock/update-block.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { AddclassroomComponent } from './classroom/addclassroom/addclassroom.component';
import { UpdateclassroomComponent } from './classroom/update-classroom/updateclassroom.component';
import { EquipmentComponent } from './equipement/equipement.component';
import { AddEquipmentComponent } from './equipement/add-equipement/add-equipement.component';
import { UpdateEquipementComponent } from './equipement/update-equipement/update-equipement.component';
import { AdmissionComponent } from './admission/admission.component';
import { ProfileComponent } from './profile/profile.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponentComponent },
  { path:'ads', component:AdvertisementComponent},
  { path: 'blocks', component:BlockComponent},
  { path: 'addblocks', component:AddBlockComponent},
  { path: 'updateblocks/:id', component:UpdateBlockComponent},
  { path: 'updateclassrooms/:id', component:UpdateclassroomComponent},
  {path: 'classrooms', component: ClassroomComponent},
  { path: 'addclassrooms', component:AddclassroomComponent},
  {path:'equipements',component:EquipmentComponent},
  {path:'addequipement',component:AddEquipmentComponent},
  {path:'updateequipement/:id',component:UpdateEquipementComponent},
  {path:'admissions',component:AdmissionComponent},
  {path:'profile',component:ProfileComponent},
  {path:'list-profile',component:ListProfileComponent},





  { path: '**', component: NotFoundComponent }
  
];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }