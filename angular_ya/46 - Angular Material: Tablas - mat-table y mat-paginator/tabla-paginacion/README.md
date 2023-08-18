# 46 - Angular Material: Tablas - mat-table y mat-paginator

Vimos en el concepto anterior que Angular material dispone de una componente para mostrar datos en una tabla mediante la componente mat-table. Ahora veremos otra componente que normalmente se la asocia a mat-table llamada mat-paginator. Esta nueva componente nos permite paginar los datos dentro de una tabla.

Problema
Mostrar un listado de artículos ficticios(codigo, descripción y precio) mediante la componente mat-table y mediante una componente mat-paginator permitir definir páginas de 5,10 o 15 registros.

Crearemos primero el proyecto

```ng new proyecto028```

Procedemos a instalar todas las dependencias de Angular Material ayudados por Angular CLI mediante el comando 'add':
```
ng add @angular/material
```

Modificamos el archivo 'app.module.ts' donde debemos importar MatTableModule, MatPaginatorModule, BrowserAnimationsModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Modificamos el archivo 'app.component.ts' con la lógica de nuestra componente:

```
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
```

En este archivo importamos las clases:

```
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
```

En el método ngOnInit almacenamos en el arreglo de tipo Articulo 100 elementos aleatorios:

```
  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
```

También en este método inicializamos la propiedad dataSource con la referencia de un objeto MatTableDataSource a la que le pasamos como parámetro en el constructor el arreglo:

```
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
```

Finalmente inicializamos la propiedad 'paginator' del 'dataSource' con la referencia de la componente 'paginator':

```
    this.dataSource.paginator = this.paginator;
```

La clase 'Articulo' se la declaró después de la clase 'AppComponent' (podemos perfectamente declararla en un archivo separado para mayor orden de nuestro código):

```
export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}
```

Codificamos la interfaz visual en el archivo 'app.component.html':

```
<div class="mat-elevation-z8">
  <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" #tabla1>

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
  <mat-paginator [pageSizeOptions]="[5, 10, 15]" showFirstLastButtons></mat-paginator>
</div>
```

Cuando definimos la etiqueta 'table' especificamos el enlace de la propiedad '[dataSource]' con nuestro objeto 'dataSource':

```
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8" #tabla1>
```

Para las columnas definimos etiquetas 'ng-container' iniciando la propiedad 'matColumnDef' con alguna de las componentes del atributo 'columnas', también creamos el título de la columna como su contenido:

```
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
```

Luego tenemos la componente mat-paginator:

```
  <mat-paginator [pageSizeOptions]="[5, 10, 15]" showFirstLastButtons></mat-paginator>
```

la hoja de estilo de la componente 'app.component.css':

```
table {
    width: 100%;
 }
```
