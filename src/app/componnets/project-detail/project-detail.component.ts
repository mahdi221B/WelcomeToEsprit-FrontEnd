import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../model/Project';
import { NoteService } from '../../services/note.service';
import { Note } from '../../model/Note';


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
  id!: any;
  iduser!: any;
  note!: Note;
  idproject!: any;
  responseMessage!: string;
  counter: number = 0;
  constructor(private route: ActivatedRoute, private projectService: ProjectService, private ns: NoteService) {
    this.id = this.route.snapshot.paramMap.get("id"),
      console.log(this.id
      )
    this.note = new Note();
  }

  ngOnInit(): void {
    localStorage.setItem('iduser', '42'),

      this.projectService.getVideoById(this.id).subscribe(
        project => this.project = project,


        error => console.error(error)
      );
    console.log(this.project);

  }
  public givemark() {
    //if (this.counter = 10) { this.counter == 0 }
    this.idproject = this.id
    this.route.queryParams.subscribe(params => {
      this.iduser = params['iduser'];
    });
    this.ns.givemark(this.note, this.idproject, Number(localStorage.getItem('iduser'))).subscribe(
      note => this.note = note,
      error => console.error(error)
    );



    console.log(this.note),
      console.log(this.idproject),
      console.log(this.iduser)
    this.counter++;
  }

}