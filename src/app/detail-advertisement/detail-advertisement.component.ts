import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementServiceService } from '../services/advertisement-service.service';
import { Advertisement } from '../model/Advertisement';

@Component({
  selector: 'app-detail-advertisement',
  templateUrl: './detail-advertisement.component.html',
  styleUrls: ['./detail-advertisement.component.css']
})
export class DetailAdvertisementComponent  implements OnInit  {
  id!:number;
  listAds!:Advertisement[];
  ad!:Advertisement;

  constructor(private route:ActivatedRoute,private advertisementService:AdvertisementServiceService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ad = new Advertisement();
    this.advertisementService.getAdvertisementById(this.id).subscribe({
      next: (data) => {
        console.log(data)
        this.ad = data;
      }
    });
  }

}
