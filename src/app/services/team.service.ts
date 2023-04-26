import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//mvn spring-boot:run
//  chrome.exe --disable-web-security --user-data-dir=c:\my-chrome-data\data

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }

    createteams(){
        window.location.reload();
return this.http.post('http://localhost:8088/WelcomeToEsprit/AppEvent/createteams',
{Headers:new HttpHeaders({
  'content-Type' : 'application/json'
})})

;

  } 

  
   public getteam():Observable<any[]>{

    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/Team/getall')}

public assignmark(id: number,value:any):Observable<any>{
    window.location.reload();
      
      return this.http.post<any>('http://localhost:8088/WelcomeToEsprit/Team/noteteam/'+id+'',value );

}

public stats(num: number, dept:String ):Observable<any>{
      
      return this.http.get<any>('http://localhost:8088/WelcomeToEsprit/Note/avrage/'+num +''+dept );

}

   }
