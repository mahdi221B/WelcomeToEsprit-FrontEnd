import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../model/Advertisement';
import { AdvertisementServiceService } from '../services/advertisement-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.css']
})
export class AddAdvertisementComponent implements OnInit{

  listAds!:Advertisement[];
  //ad : Advertisement = new Advertisement();
  ad!: Advertisement;

  constructor(private advertisementService: AdvertisementServiceService,private route:Router) { }
  ngOnInit(): void {
    this.ad = new Advertisement();
  }

    addAds (){
    this.advertisementService.addAdvertisement(this.ad).subscribe({
      next:()=>this.route.navigateByUrl('/ads')
    })
  }
}
