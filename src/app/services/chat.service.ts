import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Messages } from '../model/Messages';
import { Conversations } from '../model/Conversations';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    baseUrl:string="http://localhost:8088/WelcomeToEsprit/message";

    constructor(private http: HttpClient) { }

    getChatsById(id: number): Observable<Messages[]> {
      return this.http.get<Messages[]>(`${this.baseUrl}/getConversationMessages/${id}`);
    }

    getMessagesByConversationIdAndUserId(idUser: number): Observable<Conversations[]> {
      return this.http.get<Conversations[]>(`${this.baseUrl}/getMessagesByConversationIdAndUserId/${idUser}`);
    }
    
}