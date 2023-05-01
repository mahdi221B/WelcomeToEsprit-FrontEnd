import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RendezVous } from "../model/RendezVous";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class RendezVousService {

    baseUrl:string="http://localhost:8088/WelcomeToEsprit/reservations/send"
    constructor(private http: HttpClient) { }

    createRendezVous( value: any,id: number): Observable<RendezVous> {
        return this.http.post<RendezVous>(`${this.baseUrl}/${id}`, value);
      }

     


  }