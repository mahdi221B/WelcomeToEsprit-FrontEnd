import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question!:Question;
 

  constructor(private questionService:QuestionService, private route:Router) {}

  ngOnInit(): void {
    this.question= new Question();
  }

  save(){
    this.questionService.addQuestion(this.question).subscribe({
      next:()=>this.route.navigateByUrl('/home/question')
    })
  }

}

