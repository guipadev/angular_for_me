import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ArticulosService {

  // Disponer url de su servidor que tiene las páginas (PHP - Java)
  //url = 'https://scratchya.com.ar/angular/proyecto016/';
  url = 'http://localhost:8080/api/v1/';


  constructor(private http: HttpClient) { }

  // método 'recuperarTodos' de la clase 'ArticulosService', es el que tiene la responsabilidad de hacer una petición al servidor:
  //recuperarTodos() {
  //  return this.http.get(`${this.url}recuperartodos.php`);
  //}
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodos`);
  }

  // El método 'alta' de la clase 'ArticulosService' hace la llamada al servidor mediante el objeto 'http'
  // de la clase 'HttpClient'. Se utiliza el método 'post' ya que se enviarán datos al servidor:
  //alta(articulo:any) {
  //  return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
  //}
  alta(articulo:any) {
    return this.http.post(`${this.url}alta`, JSON.stringify(articulo));
  }

  // El método 'baja' de la clase 'ArticulosService' procede a llamar al archivo baja.php y le pasa como parámetro el código de artículo que se debe borrar:
  //baja(codigo:number) {
  //  return this.http.get(`${this.url}baja.php?codigo=${codigo}`);
  //}
  baja(codigo:number) {
    return this.http.get(`${this.url}baja/${codigo}`);
  }

  //seleccionar(codigo:number) {
  //  return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  //}
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionar/${codigo}`);
  }

  //modificacion(articulo:any) {
  //  return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));
  //}
  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacion`, JSON.stringify(articulo));
  }
}
