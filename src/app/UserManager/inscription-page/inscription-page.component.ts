import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user/user.service";
import {Address} from "../../../wel-esprit-api/src/models/address";
import {User} from "../../../wel-esprit-api/src/models/user";
import {AuthenticationRequest} from "../../../wel-esprit-api/src/models/authentication-request";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent implements OnInit{

  user:User={};
  address:Address={};
  errorMsg='';
  constructor(
    private registerService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  inscrire():void{
    let roles:any;
    this.user.address=this.address
    this.registerService.inscrption(this.user)
      .subscribe(user=>{
          //todo
        },
        error => {
          this.errorMsg='Veuillez a remplir tous les champs!'
        }
      )

  }
}
