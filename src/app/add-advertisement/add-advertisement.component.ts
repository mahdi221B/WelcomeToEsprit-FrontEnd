import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../model/Advertisement';
import { AdvertisementServiceService } from '../services/advertisement-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit{

  listAds!:Advertisement[];
  //ad : Advertisement = new Advertisement();
  ad!: Advertisement;
  id!:number;
  isUpdate!: boolean;

  constructor(private advertisementService: AdvertisementServiceService,private routes:ActivatedRoute ,private route:Router) { }
  
  ngOnInit(): void {
    this.ad = new Advertisement();
    this.isUpdate = false;
    this.routes.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.id = +params['id'];

        this.advertisementService.getAdvertisementById(this.id).subscribe({
          next: (data) => {
            console.log(data);
            this.ad = data;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }


  saveOrUpdate() {
    if (this.isUpdate) {
      this.advertisementService.addAdvertisement(this.ad).subscribe({
        next:()=>this.route.navigateByUrl('/ads')
      })
    } else {
      this.advertisementService.addAdvertisement(this.ad).subscribe({
        next:()=>this.route.navigateByUrl('/ads')
      })
    }
  }
  // addAds (){
  //   this.advertisementService.addAdvertisement(this.ad).subscribe({
  //     next:()=>this.route.navigateByUrl('/ads')
  //   })
  // }
  // updateAds (){
  //   this.advertisementService.updateAdvertisement(this.ad,this.id).subscribe({
  //     next:()=>this.route.navigateByUrl('/ads')
  //   })
  // }
}
