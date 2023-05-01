import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { BrowserModule } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { Role } from '../model/Role';
import { AppEventComponent } from '../componnets/app-event/app-event.component';
import { AppEvent } from '../model/AppEvent';
//  
@Injectable({
  providedIn: 'root'
})
export class AppEventService {
  users!: User[];
  roles!: Role[];
  appevent!: AppEvent;
  baseUrl: string = "http://localhost:8088/WelcomeToEsprit/AppEvent/";

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/get/all/Users')
  }



  public addEvent(event: AppEvent) {
    return this.http.post('http://localhost:8088/WelcomeToEsprit/AppEvent/add', event)
  }


  public assignTeacherToJury(id: number, value: any): Observable<any> {
    window.location.reload();

    return this.http.put<any>('http://localhost:8088/WelcomeToEsprit/AppEvent/teachertojury/' + id + '', value);

  }




}
