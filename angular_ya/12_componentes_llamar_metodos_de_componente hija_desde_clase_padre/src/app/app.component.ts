import { Component, ViewChild } from '@angular/core';
import { SelectornumericoComponent} from './selectornumerico/selectornumerico.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  [x: string]: any;

  // Definir una propiedad llamada selector1 y mediante el decorador @ViewChild hacemos referencia a la variable definida en el template HTML que también se llama 'selector1':
  @ViewChild('selector1') selector1!: SelectornumericoComponent;
  @ViewChild('selector2') selector2!: SelectornumericoComponent;

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }
}
