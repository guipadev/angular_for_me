import { Pipe, PipeTransform } from '@angular/core';

/**
El método transform es el que se ejecuta cada vez que llamamos a la pipe 'letras' declarada en el decorador @Pipe.
El método transform recibe un parámetro obligatorio que es 'value' y puede ser de cualquier tipo (number, string, array, object etc.) y un segundo parámetro opcional.
Veamos la lógica como implementar la pipe que transforme un valor entero comprendido entre 1 y 7 a letras:
 */

@Pipe({
  name: 'letras'
})

/**
 * El método transform es el que se ejecuta cada vez que llamamos
 * a la pipe 'letras' declarada en el decorador @Pipe.
 *
 * El método transform recibe un parámetro obligatorio que es
 * 'value' y puede ser de cualquier tipo (number, string, array, object etc.)
 * y un segundo parámetro opcional.
 */
export class LetrasPipe implements PipeTransform {

  /**
   * El parámetro 'value' recibe el valor que debe procesar la pipe. 
   * El parámetro 'args' puede no llegar en dicho caso almacena un null.
   * Si en 'args' llega un null luego ejecuta el último switch de la función retornando 
   * en castellano el número almacenado en 'value'.
   */

  transform(value: any, args?: any): any {

    if (args != null) {

      if (args == 'ingles')
        switch (value) {
          case 1: return 'one';
          case 2: return 'two';
          case 3: return 'three';
          case 4: return 'four';
          case 5: return 'five';
          case 6: return 'six';
          case 7: return 'seven';
        }

      if (args == 'portugues')
        switch (value) {
          case 1: return 'um';
          case 2: return 'dois';
          case 3: return 'três';
          case 4: return 'quatro';
          case 5: return 'cinco';
          case 6: return 'seis';
          case 7: return 'sete';
        }
    }

    switch (value) {
      case 1: return 'uno';
      case 2: return 'dos';
      case 3: return 'tres';
      case 4: return 'cuatro';
      case 5: return 'cinco';
      case 6: return 'seis';
      case 7: return 'siete';
    }

    return null;
  }
}
