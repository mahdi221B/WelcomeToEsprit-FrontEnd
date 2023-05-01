import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationForm } from 'src/app/model/applicationForm';
import { JobOffer } from 'src/app/model/job-offer';
import { statistique } from 'src/app/model/statistique';
import { JobOfferServiceService } from 'src/app/recruitment-service/job-offer-service.service';
import { statistiqueservice } from 'src/app/recruitment-service/statistiqueservice';

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {
listOffers!: JobOffer[]
listStatistique ! :statistique[];
  currentPage = 1; 
  showModal = false;

  idJobOffer! : number; 
  offerJob:JobOffer=new JobOffer()

listcandidat! : ApplicationForm[]  ; 
  
  
  


constructor(private jobofferservice:JobOfferServiceService,private statistiqueservices:statistiqueservice , private route:Router){}

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




    
    this.jobofferservice.getJobOffer(this.idJobOffer).subscribe((data)=>{
      this.listcandidat =data.applicationForms;
      console.log('candidat',this.listcandidat);
      
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


  getstatistique(){
    this.statistiqueservices.getstatistique().subscribe(
      res=>{
        console.log("res",res);
        this.listStatistique=res
      }
    )
  
  }

  // addJob():void{
  //    console.log(this.offerJob);
     
  //      this.jobofferservice.createJobOffer(this.offerJob).subscribe(
  //        res=>{
  //          console.log("res",res);
          
  //         this.listOffers.push
  //        }
  //      )
     
  //    }
  addOffre(): void {
    this.jobofferservice.createJobOffer(this.offerJob)
      .subscribe(response => {
        console.log(response);
        
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
        this.jobofferservice.getJobOffers().subscribe(
          res=>{
            console.log("res",res);
            this.listOffers=res
          }
        )
      });
 
      
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
