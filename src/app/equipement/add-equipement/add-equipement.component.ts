import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { classroom } from 'src/app/model/classroom';
import { Equipement } from 'src/app/model/equipement';
import { ClassroomService } from 'src/app/services/classroom.service';
import { EquipmentService } from 'src/app/services/equipmentservice.service';

@Component({
  selector: 'app-add-equipement',
  templateUrl: './add-equipement.component.html',
  styleUrls: ['./add-equipement.component.css']
})
export class AddEquipmentComponent implements OnInit {
  dataa: Subscription = new Subscription;
  data: any;
  equipment!: Equipement;
  equipementStatusValues: string[] = ['AVAILABLE', 'INUSE', 'UNDERMAINTENANCE']; 
  idClass:any;


  clasroomsList: any;
  constructor(private equipmentService: EquipmentService, private router: Router,private classroomservice : ClassroomService) { }

  ngOnInit(): void {
    this.equipment = new Equipement();
    this.classroomservice.getAllClassrooms().subscribe(
      clasroomsList=>{
        this.clasroomsList=clasroomsList;
        console.log(this.clasroomsList);
        
        
    });
  }

  addEquipment() {
    this.equipmentService.addEquipmentAndAssignToClassroom(this.equipment,this.idClass).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/equipements']); // Update the route to match your desired navigation path
    });
  }
}
