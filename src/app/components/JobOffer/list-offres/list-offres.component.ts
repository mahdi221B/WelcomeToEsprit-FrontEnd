import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/model/job-offer';
import { JobOfferServiceService } from 'src/app/recruitment-service/job-offer-service.service';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {
listOffers!: JobOffer[]
  currentPage = 1; 
  showModal = false;

  idJobOffer! : number; 
  offerJob:JobOffer=new JobOffer()


constructor(private jobofferservice:JobOfferServiceService,private route:Router){}

  ngOnInit(): void {
    this.jobofferservice.getJobOffers().subscribe(
      res=>{
        console.log("res",res);
        this.listOffers=res
      }
    )
  }




  update(id: number) {
    this.route.navigateByUrl(`/home/offer/update/${id}`);
  }


  redirecttoform() {
    this.route.navigate(['/addOffer'])
  }

  displayCondidat(){
    this.route.navigate(['/list-condidats'])
  }

  getId(id : number){
    this.idJobOffer = id
    console.log('id', this.idJobOffer);
   this.jobofferservice.getJobOffer(id).subscribe((data)=>{
      this.offerJob = data
      console.log(this.offerJob);
      
    }) 
  }

  UpdateOffer(){
    this.jobofferservice.updateJobOffer(this.idJobOffer , this.offerJob ).subscribe((response)=>{
      this.jobofferservice.getJobOffers().subscribe(
        res=>{
          console.log("res",res);
          
          this.listOffers=res
        }
      )

    })
    this.route.navigate(['/listoffers'])
  
  }

  closeModal() {
    this.showModal = false;
  }

  deleteOffre(id : number){
    this.jobofferservice.deleteJobOffer(id).subscribe((response)=> {
      this.jobofferservice.getJobOffers().subscribe(
        res=>{
          console.log("res",res);
          
          this.listOffers=res
        }
      )
      
    })
  }

}
