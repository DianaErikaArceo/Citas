import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICIta } from './cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  cita: ICIta[];
  private apiUrl = "api/Citas/";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


  getCitas(): Observable<ICIta[]> {
    return this.http.get<ICIta[]>(this.apiUrl);
  }

  createCita(cita: ICIta): Observable<ICIta> {
    return this.http.post<ICIta>(this.apiUrl, cita);
  }

}
