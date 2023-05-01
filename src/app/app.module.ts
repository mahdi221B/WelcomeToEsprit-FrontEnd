import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponentComponent } from './side-bar-component/side-bar-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FooterComponent } from './footer/footer.component';
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
import { ClassroomFilterPipe } from './pipes/classroom-filter.pipe';
import { ProfileComponent } from './profile/profile.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
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
    BlockComponent,
    AddBlockComponent,
    UpdateBlockComponent,
    ClassroomComponent,
    AddclassroomComponent,
    UpdateclassroomComponent,
    EquipmentComponent,
    AddEquipmentComponent,
    UpdateEquipementComponent,
    AdmissionComponent,
    ClassroomFilterPipe,
    ProfileComponent,
    ListProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
