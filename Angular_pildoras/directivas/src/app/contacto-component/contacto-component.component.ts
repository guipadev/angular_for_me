import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-contacto-component',
  templateUrl: './contacto-component.component.html',
  styleUrls: ['./contacto-component.component.css']
})


export class ContactoComponentComponent {

  registrado = false; 

  entradas:Array<any>;

  mensaje = "";
  
  nombre:string = "";
  apellido:string = "";
  cargo:string = "";

  constructor() {

    this.entradas = [
      {titulo: "Rust"},
      {titulo: "C#++"},
      {titulo: "Perl"},
      {titulo: "Java"},
      {titulo: "Ruby"},
    ]
  }

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }

}
