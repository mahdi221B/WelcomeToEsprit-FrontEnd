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
import { FooterComponent } from './footer/footer.component';
import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component';
import { ReclamationComponent } from './components/reclamations/reclamation/reclamation.component';
import { UpdateReclamationComponent } from './components/reclamations/update-reclamation/update-reclamation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddInterviewComponent } from './components/interviews/add-interview/add-interview.component';
import { UpdateInterviewComponent } from './components/interviews/update-interview/update-interview.component';
import { InterviewComponent } from './components/interviews/interview/interview.component';
import { UpdateQuestionComponent } from './components/questions/update-question/update-question.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { AnswerComponent } from './components/answers/answer/answer.component';
import { AddAnswerComponent } from './components/answers/add-answer/add-answer.component';






@NgModule({
  declarations: [
    AppComponent,
    SideBarComponentComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotFoundComponent,
    FooterComponent,
    AddReclamationComponent,
    ReclamationComponent,
    UpdateReclamationComponent,
    AddInterviewComponent,
    UpdateInterviewComponent,
    InterviewComponent,
    UpdateQuestionComponent,
    QuestionComponent,
    AddQuestionComponent,
    
    AnswerComponent,
    AddAnswerComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
