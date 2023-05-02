import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Menu} from "./menu";

@Component({
  selector: 'app-menu-simple-page',
  templateUrl: './menu-simple-page.component.html',
  styleUrls: ['./menu-simple-page.component.css']
})
export class MenuSimplePageComponent implements OnInit{

  propertiesMenu:Array<Menu> =[

    {
      id:"2",
      title:"Mes infos",
      icon:"fa-solid fa-bars",
      url:"",
      sousMenu:[
        {
          id:"21",
          title:"Details",
          icon:"fa-solid fa-users",
          url:"details"
        }
      ]
    },
    {
      id:"3",
      title:"Admission",
      icon:"fa-solid fa-certificate",
      url:"",
      sousMenu:[
        {
          id:"31",
          title:"List Admission",
          icon:"fa-solid fa-cash-register",
          url:""
        },
        {
          id:"33",
          title:"UpComing interviews",
          icon:"fa-solid fa-clipboard-question",
          url:""
        },
      ]
    },
    {
      id:"4",
      title:"Notifications",
      icon:"fa-solid fa-bell",
      url:"",
      sousMenu:[
        {
          id:"41",
          title:"New Posts",
          icon:"fa-solid fa-blog",
          url:""
        },
        {
          id:"42",
          title:"New Comments",
          icon:"fa-solid fa-comments",
          url:""
        },
        {
          id:"43",
          title:"New reacts",
          icon:"fa-solid fa-heart",
          url:""
        }
      ]
    },
    {
      id:"5",
      title:"Reclamations",
      icon:"fa-solid fa-spell-check",
      url:"",
      sousMenu:[
        {
          id:"51",
          title:"list Reclamations",
          icon:"fa-solid fa-list-check",
          url:""
        }
      ]
    },
  ];

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigate(url?:string){
    this.router.navigate([url]);
  }

}
