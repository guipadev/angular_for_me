import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  // Compartir datos del componente padre al componente hijo
  @Input() mensaje?: string;

  // Compartir datos del componente hijo al componente padre
  @Output() enviar = new EventEmitter<string>();

  enviarMsj() {
    this.enviar.emit('Hi desde component Hijo');
    console.log('Msj enviado!');
  }
}
