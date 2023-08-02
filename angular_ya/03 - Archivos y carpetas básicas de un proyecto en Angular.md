# 3 - Archivos y carpetas básicas de un proyecto en Angular

Crear un proyecto en Angular utilizamos la herramienta Angular CLI y desde la línea de comandos escribimos:

```
ng new proyecto001
```

No haremos por el momento un estudio exhaustivo de todos los archivos y carpetas que se crean (más 44500 archivos y 3900 carpetas en la versión de Angular 13.x), sino de aquellas que se requieren modificar según el concepto que estemos estudiando.

En Angular la pieza fundamental es la 'COMPONENTE'. Debemos pensar siempre que una aplicación se construye a base de un conjunto de componentes (por ejemplo pueden ser componentes: un menú, lista de usuarios, login, tabla de datos, calendario, formulario de búsqueda etc.)

Angular CLI nos crea una única componente llamada 'AppComponent' que se distribuye en 4 archivos:

```
app.component.ts
app.component.html
app.component.css
app.component.spec.ts
```

Todos estos archivos se localizan en la carpeta 'app' y esta carpeta se encuentra dentro de la carpeta 'src':

En Angular se programa utilizando el lenguaje TypeScript. El archivo donde se declara la clase AppComponent es 'app.component.ts':

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
}
```

La Clase AppComponent define un atributo llamado 'title' y lo inicializa con el string 'proyecto001' que coincide con el nombre del proyecto que creamos:

```title = 'proyecto001';```

Dijimos anteriormente que la clase completa se distribuye en otros archivos y podemos ver que mediante la función decoradora @Component le indicamos los otros archivos que pertenecen a esta componente:

```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

El archivo 'app.component.html' tiene la parte visual de nuestra componente 'AppComponent' y está constituido mayormente por código HTML (cada vez que realicemos un proyecto a este código lo borraremos para resolver nuestro problema):

Como vimos en el concepto anterior cambiamos el contenido de este archivo por:

```
<h1 style="text-align:center">
  Bienvenido a {{ title }}
</h1>
```

Analizaremos ahora de este trozo de HTML donde aparece el atributo 'title' de la componente:

```
Bienvenido a {{ title }}
```

Cuando ejecutamos nuestra aplicación desde la línea de comandos de Node.js:

Podemos ver que aparece el string 'proyecto001' y no {{ title }}:

```
title = 'proyecto001';
```

Este concepto de sustitución se llama interpolación. 

Otro archivo que se asocia a la componente 'AppComponent' es 'app.component.css' donde se almacenan todos los estilos que se van a aplicar solo a dicha componente, es decir que quedarán encapsulados en la componente 'AppComponent'.

En la carpeta raíz del proyecto hay un archivo llamado 'styles.css' donde podemos definir estilos que se aplicarán en forma global a todas las componentes de nuestra aplicación:

Ya hemos nombrado los tres archivos fundamentales que definen toda componente:

app.component.ts
app.component.html
app.component.css

Queda uno llamado 'app.component.spec.ts' que tiene por objetivo definir código de testing para medir el correcto funcionamiento de la componente (dejaremos para más adelante este concepto)

Otro archivo fundamental que nos crea Angular CLI es 'app.module.ts' en la misma carpeta donde se encuentran los 4 archivos de la componente 'AppComponent':

**app.module.ts**

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

Nombramos este archivo porque como mínimo una aplicación en Angular debe tener un módulo. Podemos ver que en la función @NgModule en la propiedad 'declarations' se le pasa un vector con un elemento que es nuestra componente 'AppComponent'.

La aplicación mínima en Angular debe tener un módulo y dentro de dicho módulo como mínimo una componente:

AppModule
-------------------------
|   AppComponente       |
|   ---------------     |
|   |             |     |  
|   ---------------     |
-------------------------

Un proyecto grande se divide en diferentes módulos con un conjunto de componentes cada uno.

Por ejemplo podemos tener un módulo 'Clientes' con tres componentes que resuelven distintas partes visuales de la aplicación:

Clientes
------------------------------------------------------------
|   ListadoClientes       Busqueda      FormularioEdicion   |
|   --------------        -----------   -----------------   |
|   |             |       |         |   |               |   |
|   --------------        -----------   -----------------   |
-------------------------------------------------------------

En los primeros conceptos de este tutorial estaremos trabajando con la única componente 'AppComponent' y más adelante veremos como crear más componentes en el módulo 'AppModule' e inclusive como crear más módulos.

Hay muchos más archivos y carpetas en el proyecto que nos crea Angular CLI pero iremos viendo su objetivo a medida que avancemos en el curso.










