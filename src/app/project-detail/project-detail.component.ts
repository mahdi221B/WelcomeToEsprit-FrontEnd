import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../model/Project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  videoUrl!: string;
  projectid!: number;

  projects!: Project[];
  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString != null) {
        const projectid = +idString;
        this.projectService.getVideoById(projectid).subscribe(
          project => this.project = project,
          error => console.error(error)
        );
      }
    });
  }
}