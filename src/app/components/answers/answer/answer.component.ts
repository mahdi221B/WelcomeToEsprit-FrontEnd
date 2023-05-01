import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/model/Answer';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit{

  listAnswer!:Answer[];
  currentPage = 1
  


  constructor(private answerService:AnswerService,private route:Router ) { }

  ngOnInit(): void {
    this.answerService.getAllAnswer().subscribe({
      next:(data) => 
      this.listAnswer= data
    })
  }

  update(id: number) {
    this.route.navigateByUrl(`/home/answer/update/${id}`);
  }

  delete(id: number){
    this.answerService.deleteAnswer(id).subscribe({
      next:() => 
      this.listAnswer = this.listAnswer.filter((p)=>p.id != id)
    })
  }
  
  
}

