import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/model/Interview';
import { InterviewService } from 'src/app/services/interview.service';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.css']
})
export class AddInterviewComponent implements OnInit {

  interview!:Interview;
  listFormat!:String[];
  listCandidatType!:String[];

  constructor(private interviewService:InterviewService, private route:Router) {}

  ngOnInit(): void {
    this.interview= new Interview();
  }

  save(){
    this.interviewService.addInterview(this.interview).subscribe({
      next:()=>this.route.navigateByUrl('/home/interview')
    })
  }


}
