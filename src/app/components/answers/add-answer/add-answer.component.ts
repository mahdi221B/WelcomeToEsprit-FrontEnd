import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/model/Answer';
import { AnswerService } from 'src/app/services/answer.service';


@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {

  answer: Answer = new Answer();
  idQuestion!: number;
 

  constructor(private answerService:AnswerService, private route:Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idQuestion = +params['idQuestion'];
    });
  }
  




  save() {
    this.answerService.addAnswer(this.answer, this.idQuestion).subscribe(() => {
      this.route.navigateByUrl('/home/answer');
    });
  }

}
