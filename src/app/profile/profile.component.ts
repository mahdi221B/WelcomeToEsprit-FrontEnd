import { Component, OnInit } from '@angular/core';
import { Profil } from '../model/profil.model';
import { ProfilService } from '../services/profil.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  files: { [key: string]: File } = {};
  constructor(private service: ProfilService) { }
  profil: Profil=new Profil() ;
  profile: Profil=new Profil();
  diplomaimg: string="";
  certificationimg:string="";
  workExperienceimg:string="";
  userID!:number;
  retrievedUserID!:number;
  ngOnInit(): void {
    
    this.userID = 2; // Replace with the actual user ID
    localStorage.setItem('userID', this.userID.toString());
    this.retrievedUserID = parseInt(localStorage.getItem('userID') || '', 10);
   
    this.service.getProfileByUser(this.retrievedUserID).subscribe((data) => {
      
      console.log(data)
      if(data!=null){
        this.profil = data
        this.service.getUrlFile(this.profil.diplomas).subscribe((data) => {
          console.log(data);
          this.diplomaimg = data;
        });
        this.service.getUrlFile(this.profil.certification).subscribe((data) => {
          console.log(data);
          this.certificationimg = data;
        });
        this.service.getUrlFile(this.profil.workExperience).subscribe((data) => {
          console.log(data);
          this.workExperienceimg = data;
        });
      }
      

    });
  }





  onFileSelected(event: any, fieldName: string): void {
    this.files[fieldName] = event.target.files[0];
  }

  submitProfile() {
    console.log(this.profil)
    this.service.saveProfil(this.profil,this.retrievedUserID).subscribe((data) => {
      this.profile = data;
      console.log(data);
      this.service.assignDiplomeToProfile(this.profile.id, this.files['diplomas']).subscribe((data) => {
        console.log(data);
        this.service.assignCertificationToProfile(this.profile.id, this.files['certification']).subscribe((data) => {
          console.log(data);
          this.service.assignWorkExperienceToProfile(this.profile.id, this.files['workExperience']).subscribe((data) => {
            console.log(data);
          })
        })
      })
      
      
    });

  }


}
