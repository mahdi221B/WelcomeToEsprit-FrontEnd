import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// cd C:\Users\miled\WelcomeToEsprit
//mvn spring-boot:run
//  cd C:\Users\miled\AppData\Local\Google\Chrome\Application
// chrome.exe --disable-web-security --user-data-dir=c:\my-chrome-data\data
//C:\Users\miled\WelcomeToEsprit-FrontEnd

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  createteams() {
    return this.http.post('http://localhost:8088/WelcomeToEsprit/AppEvent/createteams',
      {
        Headers: new HttpHeaders({
          'content-Type': 'application/json'
        })
      }


    )

      ;


  }


  public getteam(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8088/WelcomeToEsprit/Team/getall')
  }

  public calculmark(id: number, value: any): Observable<any> {
    window.location.reload();

    return this.http.post<any>('http://localhost:8088/WelcomeToEsprit/Team/noteteam/' + id + '', value);

  }


  public stats(num: number, dept: String): Observable<any> {

    return this.http.get<any>('http://localhost:8088/WelcomeToEsprit/Note/avrage/' + num + '' + dept);

  }

}
