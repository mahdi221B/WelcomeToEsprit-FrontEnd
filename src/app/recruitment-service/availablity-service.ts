
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
export class Availablity {



    baseUrl:string="http://localhost:8088/WelcomeToEsprit/availablity/";
    constructor(private http: HttpClient) { }

    getAvailablit():Observable<Availablity[]>{
        return this.http.get<Availablity[]>(`${this.baseUrl}`);
    }

}