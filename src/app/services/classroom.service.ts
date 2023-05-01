import { Injectable } from '@angular/core';
import { classroom } from '../model/classroom';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  Classroom !:classroom;
  baseUrl:string="http://localhost:8082/classroom";
  private refresh = new Subject<void>()

  get Refresh(){
    return this.refresh;
  }
  

  constructor(private http: HttpClient) {}
    getAllClassrooms(){
      return this.http.get(`${this.baseUrl}/findAll`);
    }
  
    addClassroom(Classroom:any){
      return this.http.post(`${this.baseUrl}/saveClassroom`,Classroom)
    }
  
    addAndAssignClassroomToBlock(classroom: any, blockId: number): Observable<any> {
      return this.http.post(`${this.baseUrl}/addClassroomAndAssignToBlock/${blockId}`, classroom, { responseType: 'text' });
    }
    
  
    deleteClassroom(id:any) {
      return this.http.delete(`${this.baseUrl}/deleteClassroom/${id}`);
  }
  updateClassroom(value: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateClassroom`, value);
  }
  getAllAdmissions(){
    return this.http.get(`${this.baseUrl}/retrieveAllAdmission`);
  }
  acceptAdmission(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/makeAdmissionResult/${id}/ACCEPTED`, {}, { responseType: 'text' });
  }

  rejectAdmission(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/makeAdmissionResult/${id}/REJECTED`, {}, { responseType: 'text' });
  }
}
