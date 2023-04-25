import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  reclamation!:Reclamation;
  listType!:String[];
  listStatus!:String[];

  constructor(private reclamationService:ReclamationService, private route:Router) {}

  ngOnInit(): void {
    this.reclamation= new Reclamation();
  }

  save(){
    this.reclamationService.addReclamation(this.reclamation).subscribe({
      next:()=>this.route.navigateByUrl('/home/reclamation')
    })
  }

}
