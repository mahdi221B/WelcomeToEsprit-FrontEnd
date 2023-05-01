import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Interview } from 'src/app/model/Interview';
import { InterviewService } from 'src/app/services/interview.service';

@Component({
  selector: 'app-update-interview',
  templateUrl: './update-interview.component.html',
  styleUrls: ['./update-interview.component.css']
})
export class UpdateInterviewComponent implements OnInit {

  interview!:Interview;
  listFormat!:String[];
  listCandidatType!:String[];
  id!:number;
 
  constructor(private interviewService:InterviewService, private route:Router, private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.interview= new Interview();
    this.id= this.activeRoute.snapshot.params['id'];
    this.listCandidatType = this.interviewService.listCandidatType;
    this.listFormat = this.interviewService.listFormat;
    this.interviewService.getInterviewById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.interview = data;
      }
    });

  }

  save(){
      this.interviewService.updateInterview(this.interview,this.id).subscribe({
        next:()=>this.route.navigateByUrl('/home/interview')
      })
  }

}
