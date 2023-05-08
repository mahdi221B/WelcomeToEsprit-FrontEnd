import {Component, OnInit} from '@angular/core';
import {User} from "../../../wel-esprit-api/src/models/user";
import {Router} from "@angular/router";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.css']
})
export class ListUserPageComponent implements OnInit{
  listUsers: Array<User> =[];

  constructor(
    private router:Router,
    private userService:UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.findAllUsers()
      .subscribe(
        users=>{
          this.listUsers=users
        }
      );
  }

}
