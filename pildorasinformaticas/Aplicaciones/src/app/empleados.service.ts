import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';


@Injectable() // Vamos a poder utilizar un servicio desde este servicio
// Esto es un Data Service que es crear un servicio de datos para poder inyectarlo en todos los componentes que lo soliciten
export class EmpleadosService {

  // Inyectamos el servicio ventana y dataservice que conecta al firebase
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataService) { }

  empleados:Empleado[] = [];

  /*
  // Cargar información localmente
  empleados:Empleado[] = [
    new Empleado("Juan", "Diaz", "Presidente", 31000000),
    new Empleado("Juan", "Diaz", "Ministro", 30000000),
    new Empleado("Juan", "Diaz", "Senador", 32000000),
    new Empleado("Juan", "Diaz", "Gobernador", 13000000),
    new Empleado("Juan", "Diaz", "General", 28000000),
  ];
  */

  // Recibe por parametro el array
  setEmpleados(misEmpleados:Empleado[]) {
    // El array vacio = array que se pasa por parametro
    this.empleados = misEmpleados;
  }

  agregarEmpleadoServicio(empleado:Empleado) {
    // utilizamos el servicio inyectado
    this.servicioVentanaEmergente.muestraMensaje(`Persona que se va a agregar:\n ${empleado.nombre}  \nSalario:\n ${empleado.salario}`);
    this.empleados.push(empleado);
    // Agregar
    this.dataService.guardarEmpleados(this.empleados);
  }

  // Obtener empleados de firebase, retorna un Observable el cual permite operaciones asincronas
  // Y poder actualizar en 2do plano la informacion almacenada en una BD sin realizar consultas repetitivas
  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }

  encontrarEmpleado(indice:number) {
    let empleado:Empleado = this.empleados[indice];

    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado) {

    let empledoModificado = this.empleados[indice];

    empledoModificado.nombre = empleado.nombre;
    empledoModificado.apellido = empleado.apellido;
    empledoModificado.cargo = empleado.cargo;
    empledoModificado.salario = empleado.salario;

    // Utilizar el método del servicio
    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice:number) {
    // Indice y cantidad
    this.empleados.splice(indice,1);
    
    // Eliminar firebase
    this.dataService.eliminarEmpleado(indice);

    // Reconstruir guardar en array vacio
    if(this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
  }

}
