import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Role } from '../model/Role';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Team } from '../model/Team';
import { ProjectaddedsuccComponent } from '../componnets/projectaddedsucc/projectaddedsucc.component';

@Injectable({
  providedIn: 'root'
})
export class MyteamService {
  users!: User[];
  roles!: Role[];
  id!: number;
  idteam!: number;
  constructor(private http: HttpClient) { }

  public getuserbyid(id: number): Observable<any> {

    return this.http.get<User>('http://localhost:8088/WelcomeToEsprit/get/UserById/' + id);
  }

  public getteambyid(id: number): Observable<any> {

    return this.http.get<Team>('http://localhost:8088/WelcomeToEsprit/Team/get/' + id);

  }
  public getprojectid(id: number): Observable<any> {

    return this.http.get<Team>('http://localhost:8088/WelcomeToEsprit/Project/get/' + id);

  }

  addVideoProject(file: File, desc: string, idteam: number, id: number): Observable<string> {


    const formData = new FormData();
    formData.append('file', file);
    formData.append('desc', desc);
    return this.http.post<string>('http://localhost:8088/WelcomeToEsprit/Project/addvideo/' + idteam + '/' + id, formData);
  }


}
