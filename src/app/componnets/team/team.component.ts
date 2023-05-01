import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/Team';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  constructor(private teamService: TeamService, private location: Location) { }
  teams!: Team[];
  currentPage = 1;
  id!: number

  ngOnInit(): void {

    this.teamService.getteam()
      .subscribe(teams => this.teams = teams);

  }

  createTeams() {
    this.teamService.createteams().subscribe((response) => {
      console.log(response);


    });
  }


  public calculmark(id: number) {

    const currentteam = this.teams.find((t) => { return t.id === id })
    if (currentteam) {
      this.teamService.calculmark(currentteam.id, currentteam).subscribe(
        (response) => {
          console.log(response);

        }
      );
    }



  }





}