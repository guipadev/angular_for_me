import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Articulo } from './Articulo'

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

  // En el método ngOnInit almacenamos en el arreglo de tipo Articulo 100 elementos aleatorios
  ngOnInit() {
    for (let x = 1; x <= 100; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
      this.dataSource = new MatTableDataSource<Articulo>(this.datos);
      this.dataSource.paginator = this.paginator;
  }
}
