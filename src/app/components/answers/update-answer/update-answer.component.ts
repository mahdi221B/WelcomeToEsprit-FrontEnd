import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/model/Answer';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-update-answer',
  templateUrl: './update-answer.component.html',
  styleUrls: ['./update-answer.component.css']
})
export class UpdateAnswerComponent implements OnInit {

  answer!:Answer;
  id!:number;
  

  constructor(private answerService:AnswerService, private route:Router, private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.answer= new Answer();
    this.id= this.activeRoute.snapshot.params['id'];
    this.answerService.getAnswerById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.answer = data;
      }
    });

  }

  save(){
    this.answerService.updateAnswer(this.answer,this.id).subscribe({
      next:()=>this.route.navigateByUrl('/home/answer')
    })
}

}



