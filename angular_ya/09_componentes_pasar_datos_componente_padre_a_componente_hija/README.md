# 9 - Componentes: pasar datos de la componente padre a la componente hija

Una aplicación con Angular está conformada por componentes. Siempre hay una componente padre y esta puede tener una o más componentes hijas, a su vez las componentes hijas pueden tener componentes hijas de ellas y así sucesivamente.

Veremos una técnica para pasar datos de la componente padre a la componente hija.

Podemos pasar datos a una componente en el momento que definimos una etiqueta de la misma:

```<app-dado valor="3"></app-dado>```

Cuando declaramos la etiqueta app-dado definimos una propiedad llamada 'valor' y le pasamos el dato a dicha componente. Es idéntico a lo que hacemos a cuando definimos etiquetas HTML con sus propiedades.

## Problema
Implementar una aplicación que muestre tres dados (crear una componente llamada 'dado') y un botón. Cuando se presione el botón generar tres valores aleatorios y pasarlos a las componentes respectivas para que se muestren. La clase principal debe mostrar un mensaje que el usuario ganó si los tres dados tienen el mismo valor.

Repetiremos los mismos pasos del concepto anterior para practicar la creación de una nueva componente y veremos lo nuevo de recibir datos en la componente creada.

1. Primero descendemos a la carpeta proyecto004 y nuevamente desde la línea de comandos procedemos a crear la componente 'dado' escribiendo:

```ng generate component dado```

Recordemos que al ejecutar este comando se crean 4 archivos y se modifica uno.

Además dentro de la carpeta 'app' se crea una carpeta llamada 'dado' y dentro de ella se localizan los cuatro archivos creados.

El archivo que se modifica es 'app.module.ts' donde podemos comprobar que se importa la componente que acabamos de crear, Es decir que ahora nuestro módulo tiene 2 componentes:

```
  declarations: [
    AppComponent,
    DadoComponent
  ],
```

2. En nuestro tercer paso vamos a implementar la vista de la componente 'dado' y su modelo. Abrimos el archivo 'dado.component.ts' y codificamos.

En la clase DadoComponent podemos identificar la sintaxis para definir una propiedad que llega como parámetro de la componente padre:

```@Input() valor: string="";```

No debemos asignar ningún dato a la propiedad valor ya que se cargará cuando creemos un objeto de esta clase.

Para definir el decorador @Input() debemos importar la clase Input:

```import { Component, OnInit, Input } from '@angular/core';```

3. Finamente nos falta definir tres objetos de nuestra clase 'DadoComponent' y pasar los valores que queremos que se muestren, si volvemos a ver el archivo 'dado.component.ts' podemos identificar en la llamada a @Component que tiene una propiedad llamada 'selector' con el valor 'app-dado':

```
@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
```

Este es el selector que debemos utilizar para definir objetos de la clase DadoComponent en las vistas.

Abrimos ahora el archivo 'app.component.html' y remplazamos su contenido con la definición de tres dados y mediante interpolación pasamos el valor para cada dado.

## Acotaciones
Dependiendo del problema nos conviene definir propiedades privadas a una componente o definir propiedades que lleguen los datos desde la componente padre. En éste problema como tenemos que controlar si los tres dados tienen el mismo valor es más conveniente que el dado tenga solo la responsabilidad de mostrar un valor y que el control de los tres números se debe hacer en la componente principal 'AppComponent'

## Property binding (enlace de propiedades)
Vimos que podemos modificar el valor de un propiedad en el archivo HTML mediante interpolación:

```
<app-dado valor="{{valor1}}"></app-dado>
<app-dado valor="{{valor2}}"></app-dado>
<app-dado valor="{{valor3}}"></app-dado>
```
La segundo forma de resolver el problema en lugar de interpolación es mediante el enlace de propiedades, también llamado 'property binding'.

Debemos encerrar entre corchetes el nombre de la propiedad y luego asignar un atributo definido en el modelo de datos:

```
<app-dado [valor]="valor1"></app-dado>
<app-dado [valor]="valor2"></app-dado>
<app-dado [valor]="valor3"></app-dado>
```
Con property binding debemos definir en la componente el tipo de dato number.

