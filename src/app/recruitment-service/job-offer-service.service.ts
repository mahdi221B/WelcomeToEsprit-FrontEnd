import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobOffer } from '../model/job-offer';
@Injectable({
  providedIn: 'root'
})
export class JobOfferServiceService {
  baseUrl:string="http://localhost:8088/WelcomeToEsprit/offres";
  constructor(private http: HttpClient) { }


  getJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.baseUrl}`);
  }

  createJobOffer(jobOffer: JobOffer): Observable<JobOffer> {
    return this.http.post<JobOffer>(`${this.baseUrl}`, jobOffer);
  }

  updateJobOffer(id: number, value: any): Observable<JobOffer> {
    return this.http.put<JobOffer>(`${this.baseUrl}/${id}`, value);
  }

  deleteJobOffer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
