import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//mvn spring-boot:run
//launcher.exe --disable-web-security --user-data-dir="c:\nocorsbrowserdata"
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }

    createteams(){
return this.http.post('http://localhost:8088/WelcomeToEsprit/AppEvent/createteams',
{Headers:new HttpHeaders({
  'content-Type' : 'application/json'
})});

  } 

  
   public getteam():Observable<any[]>{

    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/Team/getall')}
   }
