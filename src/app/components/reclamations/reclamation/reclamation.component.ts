import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  listReclamation!:Reclamation[];
  currentPage = 1


  constructor(private reclamationService:ReclamationService,private route:Router ) { }

  ngOnInit(): void {
    this.reclamationService.getAllReclamation().subscribe({
      next:(data) => 
      this.listReclamation= data
    })
  }

  update(id: number) {
    this.route.navigateByUrl(`/home/reclamation/update/${id}`);
  }
  delete(id: number){
    this.reclamationService.deleteReclamation(id).subscribe({
      next:() => 
      this.listReclamation = this.listReclamation.filter((p)=>p.id != id)
    })
  }
}
