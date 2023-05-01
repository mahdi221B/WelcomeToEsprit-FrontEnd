import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { statistique } from "../model/statistique";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

  export class statistiqueservice {
    baseUrl:string="http://localhost:8088/WelcomeToEsprit/statistiques";
  constructor(private http: HttpClient) { }



  getstatistique(): Observable<statistique[]> {
    return this.http.get<statistique[]>(`${this.baseUrl}`);
  }



  }