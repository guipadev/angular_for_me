# 11 - Componentes: llamar a métodos de la componente hija desde el template del padre

Otra forma de comunicarnos de la componente padre a la componente hija es la posibilidad de llamar a métodos de la componente hija definiendo una variable en el template HTML donde declaramos la componente hija.

Para llamar a los métodos la componente debe definir una variable en el template del HTML:

```
<app-dado #dado1></app-dado>
<button (click)="dado1.tirar()">Tirar</button>
```

Para definir una variable local le antecedemos el caracter # al nombre. Luego podemos llamar a métodos indicando el nombre de la variable y el método a llamar.

## Problema
Crear una componente llamada 'selectornumerico' que le pasemos el mínimo y el máximo valor que puede mostrar. Dentro de la componente definir dos botones que puedan incrementar o decrementar en 1 el valor actual.

En el template HTML de la componente padre definir un selectornumerico y definir una variable local para poder llamar luego a un método del selectornumerico para fijar cualquier valor.

crear la componente 'selectornumerico' escribiendo:

```ng generate component selectornumerico```

El archivo que se modifica es 'app.module.ts' donde podemos comprobar que se importa la componente que acabamos de crear.

- Implementar la vista de la componente 'selectornumerico' y su modelo. Abrimos el archivo 'selectornumerico.component.ts' y codificamos:

```
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {
  @Input() minimo: number=1;
  @Input() maximo: number=1;
  actual: number=1;
  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual<this.maximo)
      this.actual++;
  }

  decrementar() {
    if (this.actual>this.minimo)
      this.actual--;
  }  

  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }
}
```


