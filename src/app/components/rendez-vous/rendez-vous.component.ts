import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/app/model/RendezVous';
import { JobOffer } from 'src/app/model/job-offer';
import { RendezVousService } from 'src/app/recruitment-service/RendezVousService';
import { JobOfferServiceService } from 'src/app/recruitment-service/job-offer-service.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  listRDV!: RendezVous;


  id : number= 3;
  RDV:RendezVous=new RendezVous();

  
  listJobOffres! : JobOffer[];


  constructor(private rendezVousService:RendezVousService,private jobOfferServiceService : JobOfferServiceService, private route:Router){}
 
  ngOnInit(): void {
    this.jobOfferServiceService.getJobOffers().subscribe((data)=>{
      this.listJobOffres=data
     })

  
  }

  addRDV(): void {
   
    this.rendezVousService.createRendezVous(this.RDV,this.id)
      .subscribe(response => {
        console.log(response);
        console.log(this.RDV);
        
        this.jobOfferServiceService.getJobOffers().subscribe((data)=>{
          this.listJobOffres=data
         })
     
      });
    
}

}
