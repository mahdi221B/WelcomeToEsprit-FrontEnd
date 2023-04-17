import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { BrowserModule } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { Role } from '../model/Role';
import { AppEventComponent } from '../app-event/app-event.component';
import { AppEvent } from '../model/AppEvent';
//mvn spring-boot:run
@Injectable({
  providedIn: 'root'
})
export class AppEventService {
  users!: User[];
roles!:Role[];
appevent!: AppEvent;
  constructor(private http : HttpClient) { }



  createteams(){
return this.http.post('http://localhost:8088/WelcomeToEsprit/AppEvent/createteams',
{Headers:new HttpHeaders({
  'content-Type' : 'application/json'
})});

  } 


 public getUsers():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/get/all/Users')}

  

public addEvent(event: AppEvent)  {
   return this.http.post('http://localhost:8088/WelcomeToEsprit/AppEvent/add' , event)}
    

   public getteam():Observable<any[]>{

    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/Team/getall')}
   }

  


