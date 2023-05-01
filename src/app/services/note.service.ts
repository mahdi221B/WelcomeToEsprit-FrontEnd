import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../model/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  note!: Note;
  idproject!: number;
  iduser!: number;
  responseMessage!: string;


  constructor(private http: HttpClient) { }


  public givemark(note: Note, idproject: number, iduser: number) {
    return this.http.put<any>('http://localhost:8088/WelcomeToEsprit/Note/givemarktoproject/' + idproject + '/' + iduser, note);

  }


}
