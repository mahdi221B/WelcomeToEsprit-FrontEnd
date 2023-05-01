import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Advertisement } from '../model/Advertisement';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

    baseUrl:string="http://localhost:8088/WelcomeToEsprit/advertisement";

    constructor(private http: HttpClient) { }

    getAllAdvertisements(): Observable<Advertisement[]> {
      return this.http.get<Advertisement[]>(`${this.baseUrl}/getall`);
    }

    addAdvertisement(advertisement: Advertisement): Observable<Advertisement> {
      return this.http.post<Advertisement>(`${this.baseUrl}/add`, advertisement);
    }

    updateAdvertisement(advertisement: Advertisement, id: number): Observable<Advertisement> {
      return this.http.put<Advertisement>(`${this.baseUrl}/update/${id}`, advertisement);
    }
  
    deleteAdvertisement(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
    }

    getAdvertisementById(id: number): Observable<Advertisement> {
      return this.http.get<Advertisement>(`${this.baseUrl}/get/${id}`);
    }
  
    getCampaigns(): Observable<Map<string, string>> {
      return this.http.get<Map<string, string>>(`${this.baseUrl}/getCampaigns`);
    }
}