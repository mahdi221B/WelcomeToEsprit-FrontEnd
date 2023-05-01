import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../model/Team';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-projectaddedsucc',
  templateUrl: './projectaddedsucc.component.html',
  styleUrls: ['./projectaddedsucc.component.css']
})
export class ProjectaddedsuccComponent implements OnInit {

  teams!: Team[];
  data: any = {};
  chart1: any;
  chart2: any;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    // Chart 1
    this.teamService.getteam()
      .subscribe(teams => {
        this.teams = teams
        const deps: any = {};
        this.data = this.teams.reduce((acc: any, team) => {
          deps[team.department] = (deps[team.department] || 0) + 1;
          acc[team.department] = ((acc[team.department] || 0) * (deps[team.department] - 1) + team.noteTeam) / (deps[team.department]);
          return acc;
        }, {});

        this.chart1 = new Chart("MyChart1", {
          type: 'bar',
          data: {
            labels: Object.keys(this.data),
            datasets: [
              {
                label: "Average mark of department",
                data: Object.values(this.data),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                  'rgba(75, 192, 192, 0.8)',
                  'rgba(153, 102, 255, 0.8)',
                  'rgba(255, 159, 64, 0.8)',
                  'rgba(99, 255, 132, 0.8)',
                  'rgba(255, 99, 255, 0.8)',
                  'rgba(192, 192, 192, 0.8)',
                  'rgba(0, 0, 0, 0.8)',
                ].slice(0, Object.keys(this.data).length),
              },
            ],
          },

        }
        );
        this.chart1.resize(500, 300);

      })
      ;

    // Chart 2

    this.teamService.getteam().subscribe((teams) => {
      const intervals = [{ label: "0-7", count: 0 }, { label: "7-10", count: 0 }, { label: "10-13", count: 0 }, { label: "13-16", count: 0 }, { label: "16-20", count: 0 },];

      teams.forEach((team) => {
        const mark = team.noteTeam;
        if (mark >= 0 && mark < 7) {
          intervals[0].count++;
        } else if (mark >= 7 && mark < 10) {
          intervals[1].count++;
        } else if (mark >= 10 && mark < 13) {
          intervals[2].count++;
        } else if (mark >= 13 && mark < 16) {
          intervals[3].count++;
        } else if (mark >= 16 && mark <= 20) {
          intervals[4].count++;
        }
      });

      const counts = intervals.map((interval) => interval.count);
      this.chart2 = new Chart("MyChart2", {

        type: 'bar',
        data: {
          labels: ['0-7', '7-10', '10-13', '13-16', '16-20'],
          datasets: [{
            label: 'Number of Teams',
            data: counts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1

          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }

      }

      );
      this.chart2.resize(500, 300);


    });

  }
}