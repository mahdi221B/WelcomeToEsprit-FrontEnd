import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Availablity } from 'src/app/model/availablity';
import { availablityservice } from 'src/app/recruitment-service/availablity-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-availabtity',
  templateUrl: './list-availabtity.component.html',
  styleUrls: ['./list-availabtity.component.css']
})
export class ListAvailabtityComponent implements OnInit {


  
  

  availablity: Availablity = new Availablity();
  listAvailablity!: Availablity[]
  id: number= 2;
  idAvailablity!: number;
  currentPage: number= 1;
  //1
  showModal = false;



  constructor(private availablityservice: availablityservice, private route: Router,private location: Location) { }

  ngOnInit(): void {
    this.availablityservice.getAvailablitById(this.id).subscribe(
      res=>{
        console.log("res",res);
        this.listAvailablity=res
      }
    )
  }

  getId(id : number){
    this.idAvailablity = id;
    this.availablityservice.getAvailablitToUpdateById(id).subscribe((data)=>{
      this.availablity = data      
    })
  }


  UpdateAvailability(){
    this.availablityservice.updateAvailablit(this.idAvailablity , this.availablity ).subscribe((response)=>{
      this.availablityservice.getAvailablitById(this.id).subscribe(
        res=>{
          console.log("res",res);
          this.listAvailablity=res
    
        }
      )
    })
    this.route.navigate(['/list-availablity'])
  }

  //2
  closeModal() {
    this.showModal = false;
  }

  addOffre(): void {
    this.availablityservice.createAvailablity(this.availablity,this.idAvailablity)
      .subscribe(response => {
        console.log(response);
        // Faire quelque chose avec la réponse
        // (rediriger vers une autre page, afficher un message de confirmation, etc.)
      });
  }




  deleteAvailability  (id : number){
   
    this.availablityservice.deleteavailablity(id).subscribe((response)=> {
      this.availablityservice.getAvailablitToUpdateById(id).subscribe(
        res=>{
          console.log("res",res);
          
          this.availablity=res
        }
      )
      
    })
    this.route.navigate(['/list-availablity'])
  }
  
    

}
