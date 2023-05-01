import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project!: Project;
  constructor(private http: HttpClient) { }




  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/Project/getall')
  }

  getVideoById(id: any): Observable<any> {
    return this.http.get<Project>('http://localhost:8088/WelcomeToEsprit/Project/get/' + id);
  }

}
