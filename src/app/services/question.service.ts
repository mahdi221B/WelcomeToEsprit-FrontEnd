import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../model/Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl:string="http://localhost:8088/springMVC/question";


  constructor(private http: HttpClient) { }

  getAllQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}/getall`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.baseUrl}/add`, question);
  }

  updateQuestion(question: Question, id: number): Observable<Question> {
    return this.http.put<Question>(`${this.baseUrl}/question/${id}/resolve`, question);
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}/get/${id}`);
  }

  deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}