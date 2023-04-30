import { Component, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/model/job-offer';
import { JobOfferServiceService } from 'src/app/recruitment-service/job-offer-service.service';

@Component({
  selector: 'app-front-office-offre',
  templateUrl: './front-office-offre.component.html',
  styleUrls: ['./front-office-offre.component.css']
})
export class FrontOfficeOffreComponent implements OnInit   {

  listJobOffres! : JobOffer[];

  idOffre! : number;
  //1
  showModal = false;
  
constructor(private jobOfferServiceService : JobOfferServiceService){}



ngOnInit(): void {

   this.jobOfferServiceService.getJobOffers().subscribe((data)=>{
    this.listJobOffres=data
   })
}


//2
closeModal() {
  this.showModal = false;
}

postulerId(id : number){
this.idOffre = id
}
}


