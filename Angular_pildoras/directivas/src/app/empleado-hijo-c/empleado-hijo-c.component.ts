import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

  // Obtener datos componente Padre (flujo de padre a hijo)
  @Input() empleadoDeLista!:Empleado;

  @Input() indice!:number;


  // Componente Padre de empleado-hijo-c
  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
  
}
