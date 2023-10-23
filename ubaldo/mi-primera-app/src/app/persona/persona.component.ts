import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre:string = 'Juan';
  apellido:string = 'Dangond';
  edad:any = 28;
  //private edad:any = 28;
  
  /* //Para que puedan acceder al privado
  getEdad():number{
    return this.edad;
  }
  */

  constructor() { }

}
