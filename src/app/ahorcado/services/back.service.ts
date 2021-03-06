import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface Response {
  palabra: string;
  cantActualVidas: number;
  estadoPartida: string;
  letrasArriesgadas: string[];
  nombreJugador: string;
  dificultad: string;
  puntaje: number;
}

@Injectable({
  providedIn: 'root'
})
export class BackService {

  headers = new HttpHeaders();
  options = {};
  apiUrl = '';

  constructor( private http: HttpClient ) {

    this.headers.set('Accept', 'application/json');
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set('Content-type', 'application/x-www-form-urlencoded');
    this.headers.set('X-Requested-With', 'XMLHttpRequest');

    this.options = { headers: this.headers, withCredentials: true};
    this.apiUrl = environment.apiUrl;
  }

  backendTest(): Observable<{message: string}> {
    const url = `${this.apiUrl}`;
    return this.http.get<{message: string}>(url);
  }

  iniciar(nombre: string, dificultad = 'MEDIA'): Observable<Response> {
    const url = `${this.apiUrl}iniciar`;
    const data = { nombre, dificultad };
    return this.http.post<Response>(url, data, this.options);
  }

  enviarLetra(letra: string): Observable<Response> {
    const url = `${this.apiUrl}enviar-letra`;
    const data = { letra };
    return this.http.post<Response>(url, data, this.options);
  }

  arriesgarPalabra(palabra: string): Observable<Response> {
    const url = `${this.apiUrl}enviar-palabra`;
    const data = { palabra };
    return this.http.post<Response>(url, data, this.options);
  }

  verRanking(): Observable<{}> {
    const url = `${this.apiUrl}ver-ranking`;
    return this.http.post<Response>(url, this.options);
  }



}
