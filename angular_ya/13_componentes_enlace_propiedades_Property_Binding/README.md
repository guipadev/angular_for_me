# 13 - Componentes: enlace de propiedades (Property Binding)

Hemos visto como enviar datos simples mediante propiedades mediante 'property binding'. 
Ahora veremos en profundidad el concepto de Property Binding (enlace de propiedades) muy utilizada si tenemos que enviar una estructura de datos compleja a una componente hija.

Vimos que si teníamos que enviar un dato de tipo string a una propiedad de una componente lo indicamos inmediatamente al valor a enviar:

```
<app-dado valor="3"></app-dado>
```

En algunas situaciones podemos recuperar el dato del modelo mediante interpolación (pero la componente hija lo recibe siempre como un string):

```
<app-dado valor="{{valor}}"></app-dado>
```

El problema se presenta si queremos enviar una estructura de datos más compleja como puede ser un arreglo. En estos casos el concepto de enlace de propiedades nos resuelve el problema:

```
<app-listadoarticulos [datos]="articulos"></app-listadoarticulos>
```

Si tenemos la componente app-listadoarticulos y tenemos que enviar el vector 'articulos' disponemos el nombre de la propiedad entre corchetes [datos]

Esto corchetes indican a Angular que busque en el modelo la variable 'articulos':

```
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];
```
## Problema
En la componente AppComponent definir un arreglo con los datos de 5 artículos. Luego crear una segunda componente llamada 'listadoarticulos' que reciba mediante una propiedad el arreglo y su objetivo sea mostrar en una tabla HTML todos los datos.

Crear la componente 'listadoarticulos' escribiendo:

```ng generate component listadoarticulos```

En nuestro tercer paso vamos a implementar la vista de la componente 'listadoarticulos' y su modelo. Abrimos el archivo 'listadoarticulos.component.ts' y codificamos:

```
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css']
})
export class ListadoarticulosComponent implements OnInit {

  @Input() datos:any;
  
  constructor() { }

  ngOnInit() {
  }

}
```

Luego veremos formas más robustas de definir el tipo de datos de la propiedad 'datos' (con any recibimos cualquier tipo de dato)

Codificamos ahora el archivo 'listadoarticulos.component.html':

```
<div>
  <table border="1">
    <tr>
      <td>Codigo</td><td>Descripcion</td><td>Precio</td>
    </tr>
    <tr *ngFor="let art of datos">
      <td>{{art.codigo}}</td>
      <td>{{art.descripcion}}</td>
      <td>{{art.precio}}</td>
    </tr>
  </table>
</div>
```

Abrimos ahora el archivo 'app.component.html' y remplazamos su contenido con la definición de una etiqueta app-listadoarticulos con el enlace a la propiedad:

```<app-listadoarticulos [datos]="articulos"></app-listadoarticulos>```

Son fundamentales encerrar entre corchetes el nombre de la propiedad para que angular entienda que hay un enlace y rescate los datos del modelo de la variable 'articulos' y no envíe el string 'articulos'.

La clase AppComponent define la propiedad articulos que es la que se enlaza con la propiedad de la etiqueta app-listadoarticulos:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];
}
```