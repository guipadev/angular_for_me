import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {

  // Comunicación Padre a Hija (flujo de padre a hijo)
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  // Se inyecto servicio al servicio venta emergente al servicio empleados
  constructor(private miServicio:ServicioEmpleadosService) { }

  agregaCaracteristicas(value: string) {
    // Se inyecto servicio al servicio venta emergente al servicio empleados
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
