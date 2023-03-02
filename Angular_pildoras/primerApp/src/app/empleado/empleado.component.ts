import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre = 'Juan';
  
  apellido = 'Diaz';
  
  edad = 28;
  
  // empresa = 'microsoft';

  genero = "No Binario";


  habilitacionCuadro = false; // Property Binding en HTML

  usoRegistrado = false;

  textoDeRegistro = "No hay nadie registrado";

  
  getRegistroUsuario() {
    this.usoRegistrado = false;
  }

  /*
  setUsuarioRegistrado() {
    //alert("El usuario se acaba de registrar"); // Event Binding en HTML
    this.textoDeRegistro = "El usuario se registro con exito";
  }
  */

  // Event Binding en HTML
  setUsuarioRegistrado(event: Event) { // Event permite acceder a propiedades del objecto
    if ((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar"; // casting del evento a elemento HTML
    } else {
      this.textoDeRegistro="No hay nadie registrado";
    }
  }

  // llamaEmpresa(value:String) { }

  cambiaGenero(event:Event) {
    this.genero = (<HTMLInputElement>event.target).value;
  }
}
