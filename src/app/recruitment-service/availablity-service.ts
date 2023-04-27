
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Availablity } from '../model/availablity';

@Injectable({
    providedIn: 'root'
  })
  
export class availablityservice {



    baseUrl:string="http://localhost:8088/WelcomeToEsprit/availablity/getUserDisponbility";
    constructor(private http: HttpClient) { }

    updateAvailablit(id: number, value: any): Observable<Availablity> {
        return this.http.put<Availablity>(`${this.baseUrl}/${id}`, value);
    }
    getAvailablitById(id: number): Observable<Availablity[]> {
      return this.http.get<Availablity[]>(`${this.baseUrl}/${id}`);
    }
    
    

}