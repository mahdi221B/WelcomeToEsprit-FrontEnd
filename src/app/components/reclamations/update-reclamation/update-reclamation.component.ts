import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent implements OnInit {

  reclamation!:Reclamation;
  id!:number;
  listType!:String[];
  listStatus!:String[];  

  constructor(private reclamationService:ReclamationService, private route:Router, private activeRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.reclamation= new Reclamation();
    this.id= this.activeRoute.snapshot.params['id'];
    this.listType = this.reclamationService.listType;
    this.listStatus = this.reclamationService.listStatus;
    this.reclamationService.getReclamationById(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.reclamation = data;
      }
    });

  }

  save(){
      this.reclamationService.updateAndDeleteReclamation(this.reclamation,this.id).subscribe({
        next:()=>this.route.navigateByUrl('/home/reclamation')
      })
  }

}
