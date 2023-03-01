import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {

  constructor(private httpClient:HttpClient, private loginService:LoginService) { }

  // Obtener data de firebase
  cargarEmpleados() {

    const token = this.loginService.getIdToken(); // Obtener token
    // Ingresar a URL mediante token
    return this.httpClient.get('https://mis-clientes-1d4b3-default-rtdb.firebaseio.com/datos.json' + '?auth=' + token);
  
  }

  // Enviar data a firebase
  guardarEmpleados(empleados:Empleado[]) {
    // link a enviar y especificar array a guardar de empleados, poner observable suscribe
    // post va repitiendo infor y put actualiza
    this.httpClient.put('https://mis-clientes-1d4b3-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
      response => console.log(`Se han guardado los empleados: ${response}`),
      error => console.log(`Error: ${error}`),
    );
  }

  actualizarEmpleado(indice:number, empleado:Empleado) {
    let url = 'https://mis-clientes-1d4b3-default-rtdb.firebaseio.com/datos/' + indice + '.json';

    this.httpClient.put(url,empleado).subscribe(
      response => console.log(`Se han modificado correctamente el empleado: ${response}`),
      error => console.log(`Error: ${error}`),
    );
  }

  eliminarEmpleado(indice:number) {
    let url = 'https://mis-clientes-1d4b3-default-rtdb.firebaseio.com/datos/' + indice + '.json';

    this.httpClient.delete(url).subscribe(
      response => console.log(`Se ha eliminado correctamente el empleado: ${response}`),
      error => console.log(`Error: ${error}`),
    );

    
  }
}
