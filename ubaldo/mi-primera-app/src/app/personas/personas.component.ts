import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //inline
    //styles:[`h1{color:blue}`]
    styleUrls: ['./personas.component.css'] 
})

//Property Binding
export class PersonasComponent {
    deshabilitar = false;
    mensaje = '';
    titulo = 'Profesión';
    mostrar = false;

    agregarPersona(){ //Cuando se invoca agrega la inf. al DOM
        this.mostrar = true;
        this.mensaje = 'Persona Agregada';
    }
    
    /* Se utilizaba aplicando Event Binding
    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }
    */
}