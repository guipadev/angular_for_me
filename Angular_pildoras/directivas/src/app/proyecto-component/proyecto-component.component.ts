import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../models/empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyecto-component',
  templateUrl: './proyecto-component.component.html',
  styleUrls: ['./proyecto-component.component.css']
})

export class ProyectoComponentComponent implements OnInit {
  empleados:Empleado[] = [];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  // Usar Router
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {
    
  }
  

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  // Especificar la ruta home
  volverHome() {
    this.router.navigate(['']);
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
   
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    this.router.navigate(['']);
  }

}
