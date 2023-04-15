import { Component, OnInit } from '@angular/core';
import { AdvertisementServiceService } from '../services/advertisement-service.service';
import { Router } from '@angular/router';
import { Advertisement } from '../model/Advertisement';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit{

  listAds!:Advertisement[];

  constructor(private advertisementService: AdvertisementServiceService,private route:Router) { }
  ngOnInit(): void {
    this.advertisementService.getAllAdvertisements().subscribe({next:(data) => 
      this.listAds= data
    });
  }

  delete(id: number){
    this.advertisementService.deleteAdvertisement(id).subscribe({
         next : () => this.listAds = this.listAds.filter((p)=>p.id != id)
    })
  }
}
