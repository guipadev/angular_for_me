# 8 - Componentes: creación
Hasta ahora siempre hemos desarrollado toda la lógica en la componente que se crea por defecto al crear un proyecto con Angular CLI.

La realidad es que en proyectos de mediano y gran tamaño no podemos disponer toda la lógica en una única componente.

Las componentes son una de las características fundamentales de Angular. Ayudan a extender las características básicas de las etiquetas HTML y encapsular código.

Para crear otras componentes la herramienta Angular CLI nos provee la posibilidad de crearlas desde la línea de comandos de Node.js

## Problema
Implementar una aplicación que muestre tres dados. Crear una componente 'dado' además de la componente que crea por defecto Angular CLI

Seguir los siguientes pasos para implementar el proyecto003:

1. Desde la línea de comandos de Node.js procedemos a crear el proyecto:

```ng new proyecto003```

2. Primero descendemos a la carpeta proyecto003 y nuevamente desde la línea de comandos procedemos a crear la componente 'dado' escribiendo:

```ng generate component dado```

Al ejecutar este comando se crean 4 archivos.

Además dentro de la carpeta 'app' se crea una carpeta llamada 'dado' y dentro de ella se localizan los cuatro archivos creados:

El archivo que se modifica es 'app.module.ts' donde podemos comprobar que se importa la componente que acabamos de crear:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DadoComponent } from './dado/dado.component';


@NgModule({
  declarations: [
    AppComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Es decir que ahora nuestro módulo tiene 2 componentes:

```
  declarations: [
    AppComponent,
    DadoComponent
  ],
```

El nombre de la clase Angular CLI se encarga de finalizarlo con la palabra Component: 'DadoComponent'

## Acotaciones
La división de un proyecto en componentes en Angular nos permite crear piezas independientes y reutilizables.

Siempre debe haber una primer componente donde arranca la aplicación, si utilizamos la herramienta Angular CLI se llama 'AppComponent'. Luego podemos crear otras componentes como en nuestro caso de 'DadoComponent'.

Tenemos que toda componente tiene un nombre de clase, por ejemplo 'DadoComponent' y luego un nombre de selector definida para dicha componente 'app-dado'. En las vistas para definir objetos de una determinada componente debemos hacer referencia al nombre del selector:

``` <app-dado></app-dado>```

La componente 'AppComponent' si vemos su nombre de selector es 'app-root', luego si queremos ver donde se crea un objeto de este tipo de selector debemos abrir el archivo 'index.html' que lo generó automáticamente Angular CLI.

