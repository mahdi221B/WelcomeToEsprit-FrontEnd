import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advertisement } from 'src/app/model/Advertisement';
import { AdvertisementServiceService } from 'src/app/services/advertisement-service.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit{

  listAds!:Advertisement[];
  ad!: Advertisement;
  currentPage = 1;
  constructor(private advertisementService: AdvertisementServiceService,private route:Router) { }

  ngOnInit(): void {
    this.advertisementService.getAllAdvertisements().subscribe({
      next:(data) => 
      this.listAds= data
    });
  }

  delete(id: number){
    this.advertisementService.deleteAdvertisement(id).subscribe({
      next:() => 
      this.listAds = this.listAds.filter((p)=>p.id != id)
    })
  }

  detail(id: number) {
    this.route.navigateByUrl(`/home/ads/${id}`);
  }
  update(id: number) {
    this.route.navigateByUrl(`/home/ads/update/${id}`);
  }
  
}
