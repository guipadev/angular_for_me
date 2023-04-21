import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-modifica-component',
  templateUrl: './modifica-component.component.html',
  styleUrls: ['./modifica-component.component.css'],
})
export class ModificaComponentComponent implements OnInit {
  empleados: Empleado[] = [];
  indice!: number;
  accion!: number;

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  // Usar Router y ActivatedRoute para recibir parametro
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    // Obtener el valor que viaja por la URL
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.empleados = this.empleadosService.empleados;

    // Asignar al indice el id obtenido del parametro ruta
    this.indice = this.route.snapshot.params['id'];

    // Obtener el empleado con id respectivo
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );

    // Cargar datos a campos respectivos
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  // Especificar la ruta home
  volverHome() {
    this.router.navigate(['']);
  }

  actualizaEmpleado() {
    if (this.accion == 1) {
      let miEmpleado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      );

      // Pasamos indice y empleado a modificar
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado);

      this.router.navigate(['/home']);
    } else {
      // Pasamos indice y empleado a modificar
      this.empleadosService.eliminarEmpleado(this.indice);

      this.router.navigate(['/home']);
    }
  }
}
