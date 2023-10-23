import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'compartir-input-ouput';

  mensajePadre = 'Hola desde el componente Padre';

  mensajeRecibidoHijo?: string;

  recibirMensaje(mensaje: string) {
    this.mensajeRecibidoHijo = mensaje;
  }

  recibirOtroMsj(mensaje: any) {
    this.mensajeRecibidoHijo = mensaje;
  }
}
