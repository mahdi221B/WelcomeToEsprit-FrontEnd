import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { block } from 'src/app/model/block';
import { classroom } from 'src/app/model/classroom';
import { BlockService } from 'src/app/services/blockservice';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-updateclassroom',
  templateUrl: './updateclassroom.component.html',
  styleUrls: ['./updateclassroom.component.css']
})
export class UpdateclassroomComponent implements OnInit{

  id!: number;
  classroms!: any;
  clasroom!: classroom;
  param:string="";
  blocks:any
  bloc !:block;
  
  idBlock:any;
  constructor(private cs: ClassroomService, private route: ActivatedRoute, private router:Router,private blockservice:BlockService) {
    this.route.params.subscribe(params => {
      this.param=params['id'];
    })
  }
  ngOnInit(): void {
    //this.clasroom = new this.classroms();
    this.classroomsList();
    console.log(this.clasroom)
    this.blocksList()
   
  }
  blocksList(){
    this.blockservice.getAllblocks().subscribe((data)=>{
      this.blocks = data;
    })
    console.log(this.blocks);
  }
  classroomsList() {
    this.cs.getAllClassrooms().subscribe((data) => {
      this.classroms = data;
      this.clasroom= this.classroms.find((p: classroom) => { return p.id.toString() === this.param });
      console.log(this.clasroom)
    })
  }

  public update() {
    this.cs.addAndAssignClassroomToBlock(this.clasroom,this.idBlock).subscribe((res: any)=>{
      console.log(res);
      this.router.navigate(['/classrooms']);
    })
   
  }

}
