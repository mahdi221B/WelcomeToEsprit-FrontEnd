import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../model/Comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl:string="http://localhost:8088/WelcomeToEsprit/comment";

  constructor(private http: HttpClient) { }

  getCommentsByPost(id: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}/retrieveCommentsByPostId/${id}`);
  }

  getAllComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}/getall`);
  }

  addComments(comment: Comments): Observable<Comments> {
    return this.http.post<Comments>(`${this.baseUrl}/add`, comment);
  }

  updateComments(comment: Comments, id: number): Observable<Comments> {
    return this.http.put<Comments>(`${this.baseUrl}/update/${id}`, comment);
  }

  deleteComments(id:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  getCommentsById(id: number): Observable<Comments> {
    return this.http.get<Comments>(`${this.baseUrl}/get/${id}`);
  }
  
}
