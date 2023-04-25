import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../model/Reclamation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  baseUrl:string="http://localhost:8088/springMVC/reclamation";
  listStatus:string[] = ["pending","resolved"];
  listType:string[] = ["returns","complaints","warranty _requests"];

  constructor(private http: HttpClient) { }

  getAllReclamation(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}/getall`);
  }

  addReclamation(reclamation: Reclamation): Observable<Reclamation> {
    return this.http.post<Reclamation>(`${this.baseUrl}/add`, reclamation);
  }

  updateAndDeleteReclamation(reclamation: Reclamation, id: number): Observable<Reclamation> {
    return this.http.put<Reclamation>(`${this.baseUrl}/reclamation/${id}/resolve`, reclamation);
  }

  getReclamationById(id: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.baseUrl}/get/${id}`);
  }
}