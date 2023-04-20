import { Component, OnInit } from '@angular/core';
import { Team } from '../model/Team';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  constructor(private teamService: TeamService ,private location: Location){}
  teams!:Team[];
    currentPage = 1;

  ngOnInit(): void {
    
this.teamService.getteam()
.subscribe(teams=>this.teams=teams);
        }

        createTeams(){
 this.teamService.createteams().subscribe((response) =>{
console.log(response);
 });
}

}
