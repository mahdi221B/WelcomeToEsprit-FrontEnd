import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit{

  propertiesMenu:Array<Menu> =[
    {
      id:"1",
      title:"User Manager",
      icon:"fa-solid fa-users",
      url:"",
      sousMenu:[
        {
          id:"11",
          title:"Users",
          icon:"fa-solid fa-users",
          url:"users"
        },
        {
          id:"12",
          title:"Roles",
          icon:"fa-solid fa-chart-bar",
          url:"roles"
        }
      ]
    }]

  constructor(
    private router:Router
  ) { }
  ngOnInit(): void {
  }

  navigate(url?:string){
    this.router.navigate([url]);
  }
}
