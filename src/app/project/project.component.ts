import { Component } from '@angular/core';
import { Project } from '../model/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
project!:Project;
}
