import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  question!:Question;
  id!:number;
  

  constructor(private questionService:QuestionService, private route:Router, private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.question= new Question();
    this.id= this.activeRoute.snapshot.params['id'];
    this.questionService.getQuestionById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.question = data;
      }
    });

  }

  save(){
    this.reclamationService.updateAndDeleteReclamation(this.reclamation,this.id).subscribe({
      next:()=>this.route.navigateByUrl('/home/reclamation')
    })
}

}

