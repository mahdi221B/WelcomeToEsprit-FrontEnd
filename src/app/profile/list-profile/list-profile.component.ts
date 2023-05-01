import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil.model';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit{
  
  profilesList: Profil[] = []; 
  constructor(private service:ProfilService){}
  openImage(imageUrl: string) {
    window.open(imageUrl, '_blank');
  }
  ngOnInit(): void {
    this.service.findAll().subscribe((data)=>{
      console.log(data);
      
      data.forEach((profil:Profil) => {
        if(profil.diplomas!=null){
          this.service.getUrlFile(profil.diplomas).subscribe((data) => {
            console.log(data);
            profil.diplomas = data;
          });
        }
        if(profil.certification!=null){
          this.service.getUrlFile(profil.certification).subscribe((data) => {
            console.log(data);
            profil.certification = data;
          });
        }
        if(profil.workExperience!=null){
          this.service.getUrlFile(profil.workExperience).subscribe((data) => {
            console.log(data);
            profil.workExperience = data;
          });
        }
        
      });
      this.profilesList=data;
    })
  }
  
}
