import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilPageComponent } from './acceuil-page/acceuil-page.component';
import { LoginPageComponent } from './UserManager/login-page/login-page.component';
import { InscriptionPageComponent } from './UserManager/inscription-page/inscription-page.component';
import { SimpleUserPageComponent } from './UserManager/simple-user-page/simple-user-page.component';
import {UserMenuComponent} from "./user-menu/user-menu.component";
import { MenuSimplePageComponent } from './UserManager/menu-simple-page/menu-simple-page.component';
import { HeaderSimplePageComponent } from './UserManager/header-simple-page/header-simple-page.component';
import { UpdateUserComponent } from './UserManager/update-user/update-user.component';
import { ProfilePageComponent } from './UserManager/profile-page/profile-page.component';
import { ChangePasswordPageComponent } from './UserManager/change-password-page/change-password-page.component';
import { ListUserPageComponent } from './UserManager/list-user-page/list-user-page.component';
import { PaginationComponent } from './UserManager/pagination/pagination.component';
import { UserDetailComponent } from './UserManager/user-detail/user-detail.component';
import { ButtonActionComponent } from './UserManager/button-action/button-action.component';
import { ListRolePageComponent } from './UserManager/list-role-page/list-role-page.component';
import { RoleDetailComponent } from './UserManager/role-detail/role-detail.component';
import { AddRolePageComponent } from './UserManager/add-role-page/add-role-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    AdvertisementComponent,
    FooterComponent,
    AcceuilPageComponent,
    LoginPageComponent,
    UserMenuComponent,
    InscriptionPageComponent,
    SimpleUserPageComponent,
    MenuSimplePageComponent,
    HeaderSimplePageComponent,
    UpdateUserComponent,
    ProfilePageComponent,
    ChangePasswordPageComponent,
    ListUserPageComponent,
    PaginationComponent,
    UserDetailComponent,
    ButtonActionComponent,
    ListRolePageComponent,
    RoleDetailComponent,
    AddRolePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    /**{
      provide:HTTP_INTERCEPTORS,
      useClass:IntercepteurService,
      multi:true
    }**/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
