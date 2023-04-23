import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/model/job-offer';
import { JobOfferServiceService } from 'src/app/recruitment-service/job-offer-service.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  offer:JobOffer=new JobOffer()
  constructor(private jobofferService:JobOfferServiceService,private router:Router){}
  ngOnInit(): void {
  }

  saveOrUpdate():void{
  console.log(this.offer);
  
    this.jobofferService.createJobOffer(this.offer).subscribe(
      res=>{
        this.router.navigate(['/listoffers'])
      }
    )

  }

}
