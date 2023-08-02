import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project 1 al 5';
  sitio = 'http://www.google.com';

  nombre = 'Charlotte';
  apellido = 'Lozada';
  edad = 7;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma = 0;

    for (let x = 0; x < this.sueldos.length; x++)
      suma += this.sueldos[x];

    return suma;
  }

  // Ejemplo para captura de eventos
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
