import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profil } from '../model/profil.model';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:8082/profil";

  saveProfil(profil: Profil,idUser:number): Observable<Profil> {
    return this.http.post<Profil>(`${this.baseUrl}/saveProfil/${idUser}`, profil);
  }

  updateProfil(profil: Profil): Observable<Profil> {
    return this.http.put<Profil>(`${this.baseUrl}/updateProfil`, profil);
  }

  deleteProfil(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteProfil/${id}`);
  }

  findAll(): Observable<Profil[]> {
    return this.http.get<Profil[]>(`${this.baseUrl}/findAll`);
  }

  assignDiplomeToProfile(idProfil: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.baseUrl}/assignDiplomeToProfile/${idProfil}`, formData);
  }

  getProfileByUser(idUser: number): Observable<Profil> {
    return this.http.get<Profil>(`${this.baseUrl}/getProfileByUser/${idUser}`);
  }
  getUrlFile(file: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/urlFile/${file}`, { responseType: 'text' as 'json' });
  }
  assignWorkExperienceToProfile(idProfil: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/assignWorkExperience/${idProfil}`, formData);
  }

  assignCertificationToProfile(idProfil: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/assignCertification/${idProfil}`, formData);
  }
  
}
