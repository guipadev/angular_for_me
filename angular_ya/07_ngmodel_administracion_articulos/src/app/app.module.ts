import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Como trabajaremos con un formulario donde el operador ingresará el código, descripción
 * y precio de productos lo más conveniente es enlazar los controles 'input' mediante la
 * directiva 'ngModel'.
 * Debemos entonces importar la clase 'FormsModule' en el archivo 'app.module.ts':
 */
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
