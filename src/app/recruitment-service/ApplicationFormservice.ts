import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ApplicationFormsServices {

    baseUrl:string="http://localhost:8088/WelcomeToEsprit/offres/job-offers/application-forms";
    constructor(private http: HttpClient) { }




    // getJobOffers(): Observable<ApplicationForm[]> {
    //     return this.http.get<ApplicationForm[]>(`${this.baseUrl}`);
    //   }
    
      createFormulaire(ApplicationForm: any , id:number ): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/${id}`, ApplicationForm);
      }
      
    //   getJobOffer(id : number): Observable<ApplicationForm> {
    //     return this.http.get<ApplicationForm>(`${this.baseUrl}/`+ id);
    //   }
    //   updateJobOffer(id: number, value: any): Observable<ApplicationForm> {
    //     return this.http.put<ApplicationForm>(`${this.baseUrl}/${id}`, value);
    //   }
    
    //   deleteJobOffer(id: number): Observable<any> {
    //     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    //   }


}