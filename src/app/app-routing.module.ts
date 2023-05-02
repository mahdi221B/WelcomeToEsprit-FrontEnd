import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import {AcceuilPageComponent} from "./acceuil-page/acceuil-page.component";
import {LoginPageComponent} from "./UserManager/login-page/login-page.component";
import {InscriptionPageComponent} from "./UserManager/inscription-page/inscription-page.component";
import {SimpleUserPageComponent} from "./UserManager/simple-user-page/simple-user-page.component";
import {UpdateUserComponent} from "./UserManager/update-user/update-user.component";
import {ProfilePageComponent} from "./UserManager/profile-page/profile-page.component";
import {ChangePasswordPageComponent} from "./UserManager/change-password-page/change-password-page.component";
import {ListUserPageComponent} from "./UserManager/list-user-page/list-user-page.component";
import {ListRolePageComponent} from "./UserManager/list-role-page/list-role-page.component";
import {AddRolePageComponent} from "./UserManager/add-role-page/add-role-page.component";


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponentComponent,
    children:[
      {
        path: 'users',component: ListUserPageComponent
      },
      {
        path: 'roles',component: ListRolePageComponent
      },
      {
        path: 'addRole',component: AddRolePageComponent
      },
      {
        path: 'modify',component: UpdateUserComponent
      }
    ]
  },
  { path: 'dashboard', component: DashboardComponentComponent },
  //{ path: '**', component: NotFoundComponent },
  {path:'accueil', component:AcceuilPageComponent},
  {path:'simplePage',
    component:SimpleUserPageComponent,
    children:[
      {path:'details',component:UpdateUserComponent},
      {path:'profil',component:ProfilePageComponent},
      {path:'changePassword',component:ChangePasswordPageComponent}
    ]
  },
      {path:'login',
      component:LoginPageComponent
      },
      {path:'inscrire',
        component:InscriptionPageComponent
      },

  { path: 'ads',component:AdvertisementComponent},

  //{path: 'simpleUserProfil',component: UserProfilPageComponent}
];
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
