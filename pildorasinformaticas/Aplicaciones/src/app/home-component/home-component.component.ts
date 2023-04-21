import { Component } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent {

  titulo = "Registro de Usuarios";

  empleados:Empleado[] = [];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) {
    // Esta alternativa es sin implementar el OnInti
    // this.empleados = this.empleadosService.empleados;
   }

   ngOnInit(): void {
     // No cargar de forma local
    // this.empleados = this.empleadosService.empleados;
    
    // Validar x consola que se carga un observable
    // console.log(this.empleadosService.obtenerEmpleados());

    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados => {
      // comproba obtencion de datos
      // console.log(misEmpleados);

      // Ingresar los datos al array vacio
      this.empleados = Object.values(misEmpleados);

      // Despues de extraer la informacion del objeto e incluirlo en el array
      // Cada vez que creamos un registro se llama el metodo e incluye el registro
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

   agregarEmpleado() {
    // Guardar datos del empleado que vienen del formulario
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // Uso del servicio pero como
    // Se inyecto servicio al servicio venta emergente al servicio empleados ya no hay necesidad
    // this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
    // Agregar dato, se deja la opción que el servicio realice el proceso
    // this.empleados.push(miEmpleado);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

}
