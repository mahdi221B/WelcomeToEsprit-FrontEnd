import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddReclamationComponent } from './components/reclamations/add-reclamation/add-reclamation.component';
import { ReclamationComponent } from './components/reclamations/reclamation/reclamation.component';
import { UpdateReclamationComponent } from './components/reclamations/update-reclamation/update-reclamation.component';
import { AddInterviewComponent } from './components/interviews/add-interview/add-interview.component';
import { UpdateInterviewComponent } from './components/interviews/update-interview/update-interview.component';
import { InterviewComponent } from './components/interviews/interview/interview.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { UpdateQuestionComponent } from './components/questions/update-question/update-question.component';
import { AnswerComponent } from './components/answers/answer/answer.component';
import { AddAnswerComponent } from './components/answers/add-answer/add-answer.component';
import { UpdateAnswerComponent } from './components/answers/update-answer/update-answer.component';


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
       { path: 'interview/update/:id', component: UpdateInterviewComponent },
       { path: 'interview/update/:id', component: UpdateInterviewComponent },
       { path: 'interview/add', component: AddInterviewComponent },
      { path: 'interview', component: InterviewComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'question/add', component: AddQuestionComponent},
      { path: 'question/update/:id', component: UpdateQuestionComponent },
      { path: 'answer', component: AnswerComponent },
      { path: 'answer/add', component: AddAnswerComponent },
      { path: 'answer/update/:id', component: UpdateAnswerComponent },
     
     

      
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