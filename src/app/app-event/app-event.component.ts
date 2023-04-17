import { Component, OnInit } from '@angular/core';
import { AppEventService } from 'src/app/services/app-event.service';
import { User } from '../model/User';
import { BrowserModule } from '@angular/platform-browser'
import { Role } from '../model/Role';
import { AppEvent } from '../model/AppEvent';

import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../model/Team';


@Component({
  selector: 'app-app-event',
  templateUrl: './app-event.component.html',
  styleUrls: ['./app-event.component.css']
})
export class AppEventComponent implements OnInit {
constructor(private appEventService: AppEventService){}
  users!: User[];
  roles!:Role[];
  teams!:Team[];
  appevent!:AppEvent;


  ngOnInit()  {
    this.appEventService.getUsers()
      .subscribe(users => this.users = users);

this.appEventService.getteam()
.subscribe(teams=>this.teams=teams);
      
      console.log(this.users)
    this.appevent= new AppEvent();
  }


createTeams(){
 //this.appEventService.createteams().subscribe((response) =>{
//console.log(response);
// });}
console.log(this.teams)
}
public addEvent(){  
     return this.appEventService.addEvent(this.appevent).subscribe((response) =>{
console.log(response);
});}












}
