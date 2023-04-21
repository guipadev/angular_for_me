import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';

/**
 * Otros módulos pueden consumir la componente 'dado' es exportandolo
 */

@NgModule({
  declarations: [
    DadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DadoComponent],
})
export class ElementosModule { }
