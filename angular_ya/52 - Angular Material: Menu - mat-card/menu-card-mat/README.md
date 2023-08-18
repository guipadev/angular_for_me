# 52 - Angular Material: Menu - mat-card

Otra componente visual que viene dentro de la librería de Angular Material son las tarjetas (mat-card) que nos permiten mostrar una serie de datos con una cabecera cuerpo y pie.

Para probar esta componente repasaremos la creación de un servicio y consumo de un API público.

## Problema
Recuperar del servidor RandoUser.me un usuario aleatorio y mostrar los datos recuperados en una componente mat-card.
Disponer un botón que al ser presionado se refresque con un nuevo usuario.

Crearemos primero el proyecto

```ng new proyecto034```

Procedemos a instalar todas las dependencias de Angular Material ayudados por Angular CLI mediante el comando 'add':

```ng add @angular/material```

Crearemos el servicio que recuperará desde el servidor público los datos de un usuario aleatorio:

```ng generate service usuario```

Modificamos el archivo para recuperar los datos del servidor, debemos importar la clase 'HttpClient' e inyectar al constructor la referencia de un objeto de dicha clase al cual llamamos 'http':

```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    retornar() {
      return this.http.get("https://randomuser.me/api/");
    }
}
```

El método 'retornar' será llamado desde la componente, este método mediante el objeto de la clase HttpClient llama al método get y le pasa como parámetro la URL del servidor que retornará el archivo JSON con los datos de un usuario aleatorio.

Modificamos el archivo app.module.ts importando la clase HttpClientModule para poder emplear la clase 'HttpClient' que definimos en la clase 'UsuarioService'. Además importamos MatCardModule y MatButtonModule donde se definen las componentes visuales que requerimos en nuestro proyecto:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

Modificamos el archivo app.component.ts:

```
import { Component } from '@angular/core';
import { UsuarioService} from './usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario:any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.recuperarPersona();
  }

  recargar() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe( result =>  {this.usuario = result});
  }
}
```

Al constructor inyectamos un objeto de la clase 'UsuarioService':

```constructor(private usuarioService: UsuarioService) {}```

En los métodos ngOnInit y cuando se presiona un botón que tiene la tarjeta se llama al método 'recuperarPersona':

```
  ngOnInit() {
    this.recuperarPersona();
  }

  recargar() {
    this.recuperarPersona();
  }
```

El método recuperarPersona llama al método 'retornar' definido en la clase 'UsuarioService', como sabemos la recuperación de datos de un servidor se hace de forma asíncrona, para capturar los datos retornados del servidor procedemos a llamar al método 'subscribe' del objeto que retorna la clase 'UsuarioService'. En el método 'subscribe' procedemos a actualizar el atributo 'usuario' con el archivo en formato JSON, luego Angular se encarga de actualizar la vista, es decir el archivo 'app.component.html':

```
  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe( result =>  {this.usuario = result});
  }
```

Modificamos el archivo app.component.html:

```
<div class="contenedor">
  <mat-card class="tarjeta" *ngIf="usuario!=null">
    <mat-card-header>
      <div mat-card-avatar><img mat-card-image src="{{usuario.results[0].picture.thumbnail}}" class="circular"></div>
      <mat-card-title>{{usuario.results[0].name.last}}, {{usuario.results[0].name.first}}</mat-card-title>
      <mat-card-subtitle>{{usuario.results[0].gender=='male'?'varon':'mujer'}}</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image src="{{usuario.results[0].picture.large}}">
    <mat-card-content>
      <p>Teléfono:{{usuario.results[0].phone}}</p>
      <p>Email:{{usuario.results[0].email}}</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-flat-button (click)="recargar()" color="primary">Otra persona?</button>
    </mat-card-actions>
  </mat-card>
</div>
```

Se utilizan una serie de etiquetas definidas en Angular Material para componer una tarjeta: mat-card, mat-card-header, mat-card-title, mat-card-subtitle, mat-card-content y mat-card-action.

Cuando se presiona el botón con la etiqueta "Otra persona?" se llama el método 'recargar' el cual hace una petición a la API pública y se nos retorna un nuevo usuario.

Hasta que el atributo 'usuario' tenga un valor distinto a null no se procede a mostrar la tarjeta, esto lo logramos mediante ngIf:

Los datos de la variable 'usuario' se muestran mediante interpolación y se los ubica dentro de las distintas secciones de la tarjeta.

```
<mat-card class="tarjeta" *ngIf="usuario!=null">
<mat-card class="tarjeta" *ngIf="usuario!=null">
```

Modificamos el archivo app.component.css:

```
.tarjeta {
    min-width: 400px;
    max-width: 600px;
}

.circular {
    border-radius: 50%;
}

.contenedor {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

La tarjeta aparece centrada en forma vertical y horizontal gracias a la clase 'contenedor'.
