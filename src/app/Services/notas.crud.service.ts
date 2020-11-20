import { NotasI } from './../Models/notas.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotasCrudService {
  private urlAPI = 'https://localhost:44322/api/notas';

  constructor(private http: HttpClient) { }

  GetNotas(): Observable<NotasI[]>{
    return this.http.get<NotasI[]>(this.urlAPI);
  }

  GetNota(id: number): Observable<NotasI>{
    return this.http.get<NotasI>(this.urlAPI + '/' + id);
  }

  addNota(nota: NotasI): Observable<NotasI> {
    return this.http.post<NotasI>(this.urlAPI, nota);
  }

  updateNota(id: string, nota: NotasI): Observable<NotasI> {
    return this.http.put<NotasI>(this.urlAPI + '/' + id, nota);
  }

  deleteNota(id: string): Observable<{}>{
    return this.http.delete(this.urlAPI + '/' + id);
  }
}
