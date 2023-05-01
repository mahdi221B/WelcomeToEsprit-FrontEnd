import { Component, OnInit } from '@angular/core';
import { MyteamService } from '../../services/myteam.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../../model/User';
import { Team } from '../../model/Team';
import { Project } from '../../model/Project';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {
  id!: any;
  user!: User;
  users!: User[];
  ccurrentuser!: User;
  file!: File;
  desc!: string;
  team!: Team;
  project!: Project;
  errorMessage!: string;
  constructor(private route: ActivatedRoute, private myteamservice: MyteamService, private router: Router) { }



  ngOnInit(): void {

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];

      this.myteamservice.getuserbyid(this.id).subscribe(user => {
        this.user = user;
        console.log(queryParams);
      });
    });
  }


  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }
  getprojectid() {
    this.myteamservice.getprojectid(this.user.team.id).subscribe(project => {
      this.project = project;
      console.log(this.project);
    });
  };


  addVideoProject(): void {

    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      if (this.project) {
        this.errorMessage = 'A project already exists for this team.';
      }



      this.myteamservice.addVideoProject(this.file, this.desc, this.user.team.id, this.id)
        .subscribe((response: string) => {
          console.log(response);
          console.log(this.errorMessage);
          console.log(this.project);
        });

    });
    this.succ();
  }

  succ() {

    this.router.navigate(['/', 'succ']);
  }
}





