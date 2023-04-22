import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
project!:Project;
  constructor(private http: HttpClient) { }


/*
  addVideo(file: File, desc: string, id: number, iduser: number): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('desc', desc);
    return this.http.post<string>(`${this.baseUrl}/addvideo/${id}/${iduser}`, formData);
  }
*/
}
