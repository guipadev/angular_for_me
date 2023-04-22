import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from './models/articulo.model';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  private baseURL = 'http://localhost:8080/api/v1/articulo';

  constructor(private http: HttpClient) {}

  listarTodosLosArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.baseURL}/`);
  }

  guardarArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(`${this.baseURL}/`, articulo);
  }

  eliminarArticulo(codigo: number): Observable<Articulo> {
    return this.http.delete<Articulo>(`${this.baseURL}/${codigo}`);
  }

  obtenerArticulosPorId(codigo: number): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.baseURL}/${codigo}`);
  }

  actualizarArticulo(
    codigo: number,
    detallesArticulo: Articulo
  ): Observable<Articulo> {
    return this.http.put<Articulo>(
      `${this.baseURL}/${codigo}`,
      detallesArticulo
    );
  }

  /*
  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  }
  */
}
