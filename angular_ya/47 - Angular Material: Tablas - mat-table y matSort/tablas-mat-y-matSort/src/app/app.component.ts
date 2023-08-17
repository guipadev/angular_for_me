import { Component, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { Articulo } from './models/Articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  
  dataSource:any;

  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  ngOnInit() {
    for (let x = 1; x <= 10; x++)
      this.datos.push(new Articulo(x, `artículo ${x}`, Math.trunc(Math.random() * 1000)));
    this.dataSource = new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.sort = this.sort;
  }
}
