import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl:string="http://localhost:8088/WelcomeToEsprit/post";

    constructor(private http: HttpClient) { }

    getAllPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(`${this.baseUrl}/getall`);
    }
    addPost(post: Post, id: number): Observable<Post> {
      return this.http.post<Post>(`${this.baseUrl}/add/${id}`, post);
    }
    addWPostFiles(post: Post, id: number, files: File[]): Observable<Post> {
      const formData = new FormData();
      formData.append('post', JSON.stringify(post));
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }
      return this.http.post<Post>(`${this.baseUrl}/addWFiles/${id}`, formData);
    }
    getPostById(id: number): Observable<Post> {
      return this.http.get<Post>(`${this.baseUrl}/get/${id}`);
    }
    getPosts(id: number): Observable<Post[]> {
      return this.http.get<Post[]>(`${this.baseUrl}/getall`);    
    }
    updatePost(post: Post, id: number): Observable<Post> {
      return this.http.put<Post>(`${this.baseUrl}/update/${id}`, post);
    }
    deletePost(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
    }
}