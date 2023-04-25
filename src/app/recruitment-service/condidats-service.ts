import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { condidat } from '../model/condidat.model';
@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  baseUrl:string="http://localhost:8088/WelcomeToEsprit/formulaires/classifiedd";
  constructor(private http: HttpClient) { }


  getCondidats(): Observable<condidat[]> {
    return this.http.get<condidat[]>(`${this.baseUrl}`);
  }
}