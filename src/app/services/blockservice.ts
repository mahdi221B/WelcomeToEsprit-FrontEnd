import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject ,tap } from 'rxjs';
import { block } from '../model/block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  Block !:block;
  baseUrl:string="http://localhost:8082/block";
  private refresh = new Subject<void>()

  get Refresh(){
    return this.refresh;
  }
  

  constructor(private http:  HttpClient ) { }

  getAllblocks() {
    return this.http.get(`${this.baseUrl}/findAll`);
}
  addBlock(Bloc:any){
    return this.http.post(`${this.baseUrl}/saveBlock`,Bloc)
  }



  deleteBlock(id:any) {
    return this.http.delete(`${this.baseUrl}/deleteBlock/${id}`);
}
  
updateBlock( value: any): Observable<any> {  
  return this.http.put(`${this.baseUrl}/updateBlock`, value);  
}  
}