import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../wel-esprit-api/src/models/user";
import {Router} from "@angular/router";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  @Input()
  userDetail:User={};

  selectedUserToDelete ?=-1;
  constructor(
    private router:Router,
    private userService:UserService
  ) {
  }

  ngOnInit(): void {
  }

  gotoModify() {
    this.router.navigate(['modify/:this.userDetail.id'])
  }

  supprimerUser():void{
    this.userService.deleteUSer(this.userDetail.id ? this.userDetail.id:0)
      .subscribe(
        user=>{
          this.router.navigate(['users']);
        }
      )
  }
}
