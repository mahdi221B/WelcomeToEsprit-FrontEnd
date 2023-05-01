import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interview } from '../model/Interview';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  baseUrl:string="http://localhost:8088/springMVC/interview";
  listFormat:string[] = ["face_to_face ","online"];
  listCandidatType:string[] = ["Student_Post","Teacher_Post"];

  constructor(private http: HttpClient) { }

  getAllInterview(): Observable<Interview[]> {
    return this.http.get<Interview[]>(`${this.baseUrl}/getall`);
  }


  addInterview(interview: Interview): Observable<Interview> {
    return this.http.post<Interview>(`${this.baseUrl}/add`, interview);
  }

  updateInterview(interview: Interview, id: number): Observable<Interview> {
    return this.http.put<Interview>(`${this.baseUrl}/update/${id}/`, interview);
  }

  getInterviewById(id: number): Observable<Interview> {
    return this.http.get<Interview>(`${this.baseUrl}/get/${id}`);
  }

  deleteInterview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  
  
 
}