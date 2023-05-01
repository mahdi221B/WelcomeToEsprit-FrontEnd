import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  listQuestion!:Question[];
  currentPage = 1


  constructor(private questionService:QuestionService,private route:Router ) { }

  ngOnInit(): void {
    this.questionService.getAllQuestion().subscribe({
      next:(data) => 
      this.listQuestion= data
    })
  }

  update(id: number) {
    this.route.navigateByUrl(`/home/question/update/${id}`);
  }

  delete(idQuestion: number){
    this.questionService.deleteQuestion(idQuestion).subscribe({
      next:() => 
      this.listQuestion = this.listQuestion.filter((p)=>p.idQuestion != idQuestion)
    })
  }
}
