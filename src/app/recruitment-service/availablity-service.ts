
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Availablity } from '../model/availablity';

@Injectable({
    providedIn: 'root'
  })
  
export class availablityservice {



   // baseUrl:string="http://localhost:8088/WelcomeToEsprit/availablity/getUserDisponbility";
      baseUrl:string="http://localhost:8088/WelcomeToEsprit/availablity";
      constructor(private http: HttpClient) { }



    createAvailablity( value: any,id: number): Observable<Availablity> {
      return this.http.post<Availablity>(`${this.baseUrl}/${id}`, value);
    }
    updateAvailablit(idDisbo: number, avilablity: Availablity): Observable<Availablity> {
        return this.http.put<Availablity>(`${this.baseUrl}/${idDisbo}`, avilablity);
    }
    getAvailablitById(id: number): Observable<Availablity[]> {
      return this.http.get<Availablity[]>(`${this.baseUrl}/${id}`);
    }
    getAvailablitToUpdateById(id: number): Observable<Availablity> {
      return this.http.get<Availablity>(`${this.baseUrl}/getby/${id}`);
    } 
    // getJobOffer(id : number): Observable<Availablity> {
    //   return this.http.get<Availablity>(`${this.baseUrl}/`+ id);
    // }
    
    deleteavailablity(idDisbo: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${idDisbo}`, { responseType: 'text' });
    }
    

}