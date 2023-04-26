import { Component, OnInit } from '@angular/core';
import { Project } from '../model/Project';
import { MyteamService } from '../services/myteam.service';
import { ProjectService } from '../services/project.service';
import { Note } from '../model/Note';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
videourl='C://Users//miled//WelcomeToEsprit//assets//';
//videourl='https://www.youtube.com/embed/tgbNymZ7vqY';

  projects!:Project[];
  project!:Project;
  note!:Note;
    constructor(private projectService:ProjectService){}

ngOnInit(): void {
  this.projectService.getAllProjects().subscribe(
      projects => this.projects = projects,
      error => console.error(error)
      
    );
    console.log(this.project);
    
  }


}
