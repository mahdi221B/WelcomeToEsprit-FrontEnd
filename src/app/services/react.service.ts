import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { React } from '../model/React';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReactService {

  baseUrl:string="http://localhost:8088/WelcomeToEsprit/react";
  emojiList = ['like', 'love', 'wow', 'haha', 'sad', 'angry']

  constructor(private http: HttpClient) { }

  addOrUpdate(react: string, idUser: number, idPost: number): Observable<React> {
    return this.http.post<React>(`${this.baseUrl}/addOrUpdate/${react}/${idUser}/${idPost}`,React);
  }
  getPostReacts(idPost: number): Observable<React> {
    return this.http.get<React>(`${this.baseUrl}/get/${idPost}`);
  }
  removeReaction(idPost: number): Observable<React> {
    return this.http.delete<React>(`${this.baseUrl}/delete/${idPost}`);
  }
  getReactByUserIdAndPostId(idUser: number, idPost: number): Observable<any> {
    return this.http.get<React>(`${this.baseUrl}/ReactByUserIdAndPostId/${idUser}/${idPost}`);
  }
  userReactions(idUser: number, idPost: number): Observable<React> {
    return this.http.get<React>(`${this.baseUrl}/userReactions/${idUser}/${idPost}`);
  }
  getReactById(idReact: number): Observable<React> {
    return this.http.get<React>(`${this.baseUrl}/get/${idReact}`);
  }

}