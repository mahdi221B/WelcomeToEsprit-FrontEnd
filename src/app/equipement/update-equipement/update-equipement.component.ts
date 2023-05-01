import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { classroom } from 'src/app/model/classroom';
import { Equipement } from 'src/app/model/equipement';
import { ClassroomService } from 'src/app/services/classroom.service';
import { EquipmentService } from 'src/app/services/equipmentservice.service';
@Component({
  selector: 'app-update-equipement',
  templateUrl: './update-equipement.component.html',
  styleUrls: ['./update-equipement.component.css']
})
export class UpdateEquipementComponent implements OnInit{
  dataa: Subscription = new Subscription;
  data: any;
  equipment!: Equipement;
  equipementStatusValues: string[] = ['AVAILABLE', 'INUSE', 'UNDERMAINTENANCE']; 
  idClass:any;
  param:string="";
  equipements!:any;
  clasroomsList: any;
  constructor(private equipmentService: EquipmentService, private route: ActivatedRoute,private router: Router,private classroomservice : ClassroomService) { 
    this.route.params.subscribe(params => {
      this.param=params['id'];
    })
  }

  ngOnInit(): void {
    this.equipementsList();
    this.classroomservice.getAllClassrooms().subscribe(
      clasroomsList=>{
        this.clasroomsList=clasroomsList;
        console.log(this.clasroomsList);
    });
  }

  equipementsList() {
    this.equipmentService.getAllEquipments().subscribe((data) => {
      this.equipements = data;
      this.equipment= this.equipements.find((p: classroom) => { return p.id.toString() === this.param });
      console.log(this.equipment)
    })
  }

  public update() {
    this.equipmentService.addEquipmentAndAssignToClassroom(this.equipment,this.idClass).subscribe((res: any)=>{
      console.log(res);
      this.router.navigate(['/equipements']);
    })
   
  }
}
