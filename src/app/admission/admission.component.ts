import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { classroom } from '../model/classroom';
import { ClassroomService } from '../services/classroom.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit{
  dataa: Subscription = new Subscription;
  classrooms:any
 
   clasroom !:classroom;
   admissionsList: any;
  constructor(private classroomservice : ClassroomService ) {}
  ngOnInit(): void {
   this.classroomservice.getAllAdmissions().subscribe(
     clasroomsList=>{
       this.admissionsList=clasroomsList;
       console.log(this.admissionsList);
       
       
   });
 }
  
 acceptAdmission(id:number){
    this.classroomservice.acceptAdmission(id).subscribe((data)=>{
      this.classroomservice.getAllAdmissions().subscribe(
        clasroomsList=>{
          this.admissionsList=clasroomsList;
          console.log(this.admissionsList);
          
          
      });
    })
 }
 rejectAdmission(id:number){
  this.classroomservice.rejectAdmission(id).subscribe((data)=>{
    this.classroomservice.getAllAdmissions().subscribe(
      clasroomsList=>{
        this.admissionsList=clasroomsList;
        console.log(this.admissionsList);
        
        
    });
  })
 }
}
