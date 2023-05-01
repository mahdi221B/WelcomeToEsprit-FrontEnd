import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { classroom } from '../model/classroom';
import { ClassroomService } from '../services/classroom.service';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-classroom',
  templateUrl:'./classroom.component.html',
  styleUrls: ['./classroom.component.css']
})



export class ClassroomComponent implements OnInit {

 dataa: Subscription = new Subscription;
 classrooms:any
 searchText = '';
  clasroom !:classroom;
  clasroomsList: any;
 constructor(private classroomservice : ClassroomService ) {}
 ngOnInit(): void {
  this.classroomservice.getAllClassrooms().subscribe(
    clasroomsList=>{
      this.clasroomsList=clasroomsList;
      console.log(this.clasroomsList);
      this.clasroomsList.forEach((element: classroom) => {
        console.log(element.block);
      });
      
  });
}
 
deleteClassroom(id:number){
  this.dataa = this.classroomservice.deleteClassroom(id).subscribe(d=>{
    this.classroomservice.getAllClassrooms().subscribe((data)=>{
      this.clasroomsList = data;
    })
  })
}
public addclassroom(){

  return this.classroomservice.addClassroom(this.clasroom).subscribe((Response)=>{
    console.log(Response);
    
  })
}
exportToPDF() {
  const data = document.getElementById('classroom-table')!;
  html2canvas(data).then(canvas => {
    const imgWidth = 208;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    pdf.save('Classrooms.pdf');
  });
}
exportToExcel() {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.clasroomsList.map((classroom: classroom) => ({
    'ID': classroom.id,
    'Room Number': classroom.roomnumber,
    'Floor Number': classroom.floornumber,
    'Capacity': classroom.capacity,
    'Status': classroom.status
  })));

  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Classrooms');

  XLSX.writeFile(wb, 'classrooms.xlsx');
}


}
