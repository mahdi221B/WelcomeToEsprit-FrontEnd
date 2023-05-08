import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../wel-esprit-api/src/models/user";
import {UserService} from "../services/user/user.service";
import {Address} from "../../../wel-esprit-api/src/models/address";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  userModify:User={};
  addressModify:Address={};
  constructor(
    private activateRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {

    const idUser= this.activateRoute.snapshot.params['idUser'];
    if (idUser){
        this.userService.findUserById(idUser)
          .subscribe(
            user=>{
              this.userModify=user;
              this.addressModify=this.userModify.address ? this.userModify.address:{};
            }
          )
    }
  }

  cancel():void{
    this.router.navigate(['/home/users'])
  }
  enregistrer():void{
    this.userModify.address=this.addressModify
    this.userService.modifyUser(this.userModify)
      .subscribe(
        user=>{
          this.router.navigate(['/home/users'])
        }
      )
  }

}
