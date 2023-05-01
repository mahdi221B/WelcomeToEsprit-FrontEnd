import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  baseUrl: string = "http://localhost:8082/equipement";

  constructor(private http: HttpClient) {}

  getAllEquipments(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}/findAll`);
  }

  addEquipment(equipment: Equipement): Observable<any> {
    return this.http.post(`${this.baseUrl}/saveEquipement`, equipment);
  }

  updateEquipment(equipment: Equipement): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateEquipement`, equipment);
  }

  deleteEquipment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEquipement/${id}`);
  }

  addEquipmentAndAssignToClassroom(equipment: Equipement, classroomId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/addEquipementAndAssignToClassroom/${classroomId}`, equipment, { responseType: 'text' });
  }
}
