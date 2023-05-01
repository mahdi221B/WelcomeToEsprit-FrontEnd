import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipement } from '../model/equipement';
import { EquipmentService } from '../services/equipmentservice.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipmentComponent implements OnInit {
  dataa: Subscription = new Subscription;
  

  equipment!: Equipement;
  equipmentsList: any;

  constructor(private equipmentService: EquipmentService) {}

  ngOnInit(): void {
    this.equipmentService.getAllEquipments().subscribe(
      equipmentsList => {
        this.equipmentsList = equipmentsList;
        console.log(this.equipmentsList);
        this.equipmentsList.forEach((element: Equipement) => {
          console.log(element.classroom);
        });
      }
    );
  }

  deleteEquipment(id: number) {
    this.dataa = this.equipmentService.deleteEquipment(id).subscribe(d => {
      this.equipmentService.getAllEquipments().subscribe((data) => {
        this.equipmentsList = data;
      })
    })
  }

  public addEquipment() {
    return this.equipmentService.addEquipment(this.equipment).subscribe((Response) => {
      console.log(Response);
    })
  }
}
