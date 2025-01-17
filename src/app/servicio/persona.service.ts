import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/'
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>('http://localhost:8080/personas/lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>('http://localhost:8080/personas/' + `detail/${id}`);
  }

  /* public save(persona: persona): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/persona/' + 'create', persona);
  } */

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/personas/' + `update/${id}`, persona);
  }

  /* public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8080/persona/' + `delete/${id}`);
  } */
}
