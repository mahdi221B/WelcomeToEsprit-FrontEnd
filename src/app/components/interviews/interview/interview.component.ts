import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/model/Interview';
import { InterviewService } from 'src/app/services/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent  implements OnInit {

  listInterview!:Interview[];
  currentPage = 1
  


  constructor(private interviewService:InterviewService,private route:Router ) { }

  ngOnInit(): void {
    this.interviewService.getAllInterview().subscribe({
      next:(data) => 
      this.listInterview= data
    })
  }

  update(id: number) {
    this.route.navigateByUrl(`/home/interview/update/${id}`);
  }

  delete(id: number){
    this.interviewService.deleteInterview(id).subscribe({
      next:() => 
      this.listInterview = this.listInterview.filter((p)=>p.id != id)
    })
  }
  
  
}

