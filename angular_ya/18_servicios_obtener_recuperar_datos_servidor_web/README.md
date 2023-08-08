# 18 - Servicios: recuperación de datos de un servidor web

Hemos dicho en el concepto anterior que en Angular se delega todas las responsabilidades de acceso a datos (peticiones y envío de datos) y lógica de negocios en otras clases que colaboran con las componentes y son llamados servicios.

Veremos ahora como recuperar datos de un servidor web implementando dicha actividad en un servicio.

## Problema
Confeccionar una aplicación que recupere una respuesta en JSON de la dirección:

```https://scratchya.com.ar/vue/datos.php```

La estructura del archivo JSON es:

```
[
  {
    "codigo": 1,
    "descripcion": "papas",
    "precio": 12.33
  },
  {
    "codigo": 2,
    "descripcion": "manzanas",
    "precio": 54
  }
]
```

Mostrar en una tabla HTML todos los artículos recuperados.

La recuperación de datos se debe hacer en un servicio.

Crearemos el servicio que recuperará desde un servidor la lista de artículos

```ng generate service articulos```

Con el comando anterior estamos creando la clase 'ArticulosService'

Se crean dos archivos.

El código generado de la clase 'ArticulosService' es:

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }
}
```

Lo modificamos por el siguiente código que permita recuperar desde un servidor web el archivo JSON:

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://scratchya.com.ar/vue/datos.php");
  }  
}
```

El archivo 'app.module.ts' se modifica con el siguiente código (se importa la clase HttpClientModule):

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Ahora veremos como consumimos el servicio desde nuestra componente. Procedemos a modificar la componente que se crea por defecto 'AppComponent' que tiene por responsabilidad mostrar en la página el listado de artículos:

```
import { Component, OnInit } from '@angular/core';
import  { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  articulos: any;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.retornar()
      .subscribe( result =>  this.articulos = result)
  }
}
```

Primero importamos el servicio llamado ArticulosService que se almacena en el archivo 'articulos.service.ts':

```import { ArticulosService } from './articulos.service';```

Para inyectar el objeto de la clase 'ArticulosService' que crea Angular en forma automática lo hacemos en el parámetro del constructor:

```
  constructor(private articulosServicio: ArticulosService) {
  }
```

Se almacena en el atributo 'articulosServicio' la referencia del objeto de la clase 'ArticulosService' que crea Angular.

En el método ngOnInit actualizamos la propiedad 'articulos' con el resultado devuelto:

```
  ngOnInit() {
    this.articulosService.retornar()
      .subscribe( result =>  this.articulos = result)
  }
```

Esta asignación dispara la actualización de la página HTML.

Falta que codifiquemos la vista con los datos recuperados:

app.component.html

```
<div *ngIf="articulos!=null; else espera">
  <table border="1">
    <tr>
      <td>Codigo</td><td>Descripcion</td><td>Precio</td>
    </tr>
    <tr *ngFor="let art of articulos">
      <td>{{art.codigo}}</td>
      <td>{{art.descripcion}}</td>
      <td>{{art.precio}}</td>
    </tr>
  </table>
</div>
```

```<ng-template #espera>Esperando datos...</ng-template>```

Si ejecutamos ahora el proyecto013 veremos en el navegador el listado de artículos, pero ahora recuperados de un servidor y no extraidos de un vector como en el concepto anterior.

