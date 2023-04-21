import { Injectable } from '@angular/core';

// El decorador @Injectable() será de suma importancia para poder acceder a esta clase desde la componente.
@Injectable({
  providedIn: 'root'
})

export class ArticulosService {

  constructor() { }

  retornar() {
    return [
              {
                codigo: 1,
                descripcion: "papas",
                precio: 12.33
              },
              {
                codigo: 2,
                descripcion: "manzanas",
                precio: 54
              },
              {
                codigo: 3,
                descripcion: "sandía",
                precio: 14
              }
           ];
  }
}
