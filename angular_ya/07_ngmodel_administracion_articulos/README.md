# Directiva ngModel

Esta directiva nos permite tener un enlace unidireccional entre una propiedad de nuestra clase con el valor que se muestra un control de formulario HTML de tipo input, textarea etc.

Por ejemplo si en la clase AppComponent tenemos la propiedad 'nombre' con el valor 'juan':

```nombre='juan';```

Luego en la vista definimos la directiva ngModel entre corchetes y le asignamos el nombre de la propiedad definida en la clase:

```<input type="text" [ngModel]="nombre">```

Lo que hay que tener en cuenta que es un enlace en una única dirección: el valor de la propiedad de la clase se refleja en la interfaz visual. Si el operador cambia el contenido del control 'input' por ejemplo por el nombre 'ana' luego la propiedad 'nombre' de la clase sigue almacenando el valor 'juan'.

Si queremos que el enlace sea en las dos direcciones debemos utilizar la siguiente sintaxis:

```<input type="text" [(ngModel)]="nombre">```

Un primer ejemplo muy corto que podemos hacer es modificar para que se ingrese el nombre y apellido de una persona y se muestre inmediatamente en la parte inferior.

Cuando utilizamos la directiva ngModel debemos importar la clase 'FormsModule' en el archivo 'app.module.ts' y especificarla en la propiedad 'imports':

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Luego nuestro archivo 'app.component.ts' debe tener:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre='';
  apellido='';
}
```
El archivo app.component.html donde definimos las directiva ngModel para cada control es:

```
<div>
  <p>Ingrese nombre<input type="text" [(ngModel)]="nombre"></p>
  <p>Ingrese apellido<input type="text" [(ngModel)]="apellido"></p>  
  <p>Nombre completo:{{nombre}},{{apellido}}</p>
</div>
```

# Problema (Administración de artículos)

Confeccionar una aplicación que permita administrar un vector de objetos que almacena en cada elemento el código, descripción y precio de un artículo. Se debe poder agregar, borrar y modificar los datos de un artículo.

1. Como trabajaremos con un formulario donde el operador ingresará el código, descripción y precio de productos lo más conveniente es enlazar los controles 'input' mediante la directiva 'ngModel'. Debemos entonces importar la clase 'FormsModule' en el archivo 'app.module.ts':

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```