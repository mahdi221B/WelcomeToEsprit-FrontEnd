import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { block } from 'src/app/model/block';
import { classroom } from 'src/app/model/classroom';
import { BlockService } from 'src/app/services/blockservice';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-addclassroom',
  templateUrl: './addclassroom.component.html',
  styleUrls: ['./addclassroom.component.css']
})
export class AddclassroomComponent implements OnInit{

  dataa: Subscription = new Subscription;
  data:any
  clasroom: classroom = new classroom();
  blocks:any
  bloc !:block;
  classroom: any;
  idBlock:any;
  constructor(private classroomservice: ClassroomService ,private router:Router,private blockservice:BlockService) { }

  ngOnInit(){
    this.blocksList();
  }
  blocksList(){
    this.blockservice.getAllblocks().subscribe((data)=>{
      this.blocks = data;
    })
    console.log(this.blocks);
  }
  addClassroom(FormClassroom: any) {
    this.data = this.classroomservice.addClassroom(FormClassroom.value).subscribe(
      (data: any) => {
        console.log(data);
      });
    this.router.navigate(['/classrooms']);
  }

  addclassrooms() {
    this.classroomservice.addAndAssignClassroomToBlock(this.clasroom,this.idBlock).subscribe((Response: any) => {
      console.log(Response);
      this.router.navigate(['/classrooms']);
    });
  }

}
