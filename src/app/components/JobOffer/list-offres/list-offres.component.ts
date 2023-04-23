import { Component, OnInit } from '@angular/core';
import { JobOffer } from 'src/app/model/job-offer';
import { JobOfferServiceService } from 'src/app/recruitment-service/job-offer-service.service';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {
listOffers:Array<JobOffer>=new Array()
constructor(private jobofferservice:JobOfferServiceService){}

  ngOnInit(): void {
    this.jobofferservice.getJobOffers().subscribe(
      res=>{
        console.log("res",res);
        
        this.listOffers=res
      }
    )
  }



}
