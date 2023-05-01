import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/Project';
import { MyteamService } from '../../services/myteam.service';
import { ProjectService } from '../../services/project.service';
import { Note } from '../../model/Note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects!: Project[];
  project!: Project;
  note!: Note;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      projects => this.projects = projects,
      error => console.error(error)

    );
    console.log(this.project);

  }

}
