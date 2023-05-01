import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from '../model/Answer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  baseUrl:string="http://localhost:8088/springMVC/answer";
 

  constructor(private http: HttpClient) { }


  getAllAnswer(): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.baseUrl}/getall`);
  }  

  addAnswer(answer: Answer, questionId: number): Observable<Answer> {
    return this.http.post<Answer>(`${this.baseUrl}/${questionId}`, answer);
  }

  updateAnswer(answer: Answer, id: number): Observable<Answer> {
    return this.http.put<Answer>(`${this.baseUrl}/update/${id}/`, answer);
  }

 

  deleteAnswer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

 
}

