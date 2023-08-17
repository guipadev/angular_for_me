# 48 - Angular Material: Tablas - mat-table y filtrar datos

Hay que tener en cuenta que no existe una componente especial o selector para filtrar datos de una tabla.
Para resolver este problema debemos implementar nosotros el filtrado de datos en forma manual.

## Problema
Mostrar un listado de artículos ficticios(codigo, descripción y precio), permitir filtrar todos los datos según un string
que carguemos en una componente mat-input.

Crearemos primero el proyecto

```ng new proyecto030```

Procedemos a instalar todas las dependencias de Angular Material ayudados por Angular CLI mediante el comando 'add':

```ng add @angular/material```

Modificamos el archivo 'app.module.ts' donde debemos importar MatTableModule y MatInputModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Modificamos el archivo 'app.component.ts' con la lógica de nuestra componente:

```
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  dataSource:any;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
```

En este archivo importamos la clase:

```
import { MatTableDataSource } from '@angular/material/table';
```

definimos un método llamado 'filtrar' que se ejecuta cada vez que el usuario ingresa o borra un caracter en el control mat-input:

```
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
```

Cuando iniciamos la propiedad 'filter' de dataSource, se actualizan los datos que se mostrarán en la vista.

La clase 'Articulo' se la declaró después de la clase 'AppComponent':

```
export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
```

Codificamos la interfaz visual en el archivo 'app.component.html':

```
<mat-form-field>
  <mat-label>Buscar</mat-label>
  <input matInput (keyup)="filtrar($event)" placeholder="buscar">
</mat-form-field>
<div class="mat-elevation-z8">
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <ng-container matColumnDef="codigo">
      <th mat-header-cell *matHeaderCellDef> Código </th>
      <td mat-cell *matCellDef="let articulo"> {{articulo.codigo}} </td>
    </ng-container>

    <ng-container matColumnDef="descripcion">
      <th mat-header-cell *matHeaderCellDef> Descripción </th>
      <td mat-cell *matCellDef="let articulo"> {{articulo.descripcion}} </td>
    </ng-container>

    <ng-container matColumnDef="precio">
      <th mat-header-cell *matHeaderCellDef> Precio </th>
      <td mat-cell *matCellDef="let articulo"> {{articulo.precio}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="columnas"></tr>
    <tr mat-row *matRowDef="let row; columns: columnas;"></tr>
  </table>
</div>
```

Creamos un cuadro de entrada de datos y fijamos para el evento 'keyup' la ejecución del método 'filtrar':

```
<mat-form-field>
  <mat-label>Buscar</mat-label>
  <input matInput (keyup)="filtrar($event)" placeholder="buscar">
</mat-form-field>
```

Para mostrar la tabla de datos hacemos lo que ya conocemos:

```
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <ng-container matColumnDef="codigo">
      <th mat-header-cell *matHeaderCellDef> Código </th>
      <td mat-cell *matCellDef="let articulo"> {{articulo.codigo}} </td>
    </ng-container>

    <ng-container matColumnDef="descripcion">
      <th mat-header-cell *matHeaderCellDef> Descripción </th>
      <td mat-cell *matCellDef="let articulo"> {{articulo.descripcion}} </td>
    </ng-container>

    <ng-container matColumnDef="precio">
      <th mat-header-cell *matHeaderCellDef> Precio </th>
      <td mat-cell *matCellDef="let articulo"> {{articulo.precio}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="columnas"></tr>
    <tr mat-row *matRowDef="let row; columns: columnas;"></tr>
  </table>
```

la hoja de estilo de la componente 'app.component.css':

```
table {
    width: 100%;
 }
```
