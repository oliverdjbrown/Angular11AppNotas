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
}
