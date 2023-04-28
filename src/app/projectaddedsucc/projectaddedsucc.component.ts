import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TeamService } from '../services/team.service';
import { Observable } from 'rxjs';
import { Team } from '../model/Team';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-projectaddedsucc',
  templateUrl: './projectaddedsucc.component.html',
  styleUrls: ['./projectaddedsucc.component.css']
})
export class ProjectaddedsuccComponent implements OnInit {

  constructor(private teamService: TeamService) { }
  teams!: Team[];
  data: any = {};
  currentPage = 1;
  id!: number
  public chart: any;

  ngOnInit(): void {
    this.teamService.getteam()
      .subscribe(teams => {
        this.teams = teams
        const deps: any = {};
        this.data = this.teams.reduce((acc: any, team) => {
          deps[team.department] = (deps[team.department] || 0) + 1;
          acc[team.department] = ((acc[team.department] || 0) * (deps[team.department] - 1) + team.noteTeam) / (deps[team.department]);
          return acc;
        },



          {});


        console.log(deps)
        this.createChart(this.data);
      });

  }

  createChart(d: any) {
    this.chart = new Chart("MyChart", {
      type: 'bar', // This denotes the type of chart

      data: {
        labels: Object.keys(d), // Values on X-Axis
        datasets: [
          {
            label: "avreage mark of department",
            data: Object.values(d),
            backgroundColor: [ // Add an array of colors for each slice of the pie chart
              'rgba(255, 99, 132, 0.8)', // Red
              'rgba(54, 162, 235, 0.8)', // Blue
              'rgba(255, 206, 86, 0.8)', // Yellow
              'rgba(75, 192, 192, 0.8)', // Green
              'rgba(153, 102, 255, 0.8)', // Purple
              'rgba(255, 159, 64, 0.8)', // Orange
              'rgba(99, 255, 132, 0.8)', // Light green
              'rgba(255, 99, 255, 0.8)', // Pink
              'rgba(192, 192, 192, 0.8)', // Gray
              'rgba(0, 0, 0, 0.8)', // Black
            ].slice(0, Object.keys(d).length), // Slice the color array to match the number of departments
          },
        ],

      },


    });

    this.chart.resize(500, 300);

  }

};