## 4 - Interpolación en los archivos HTML de Angular

Una de las características fundamentales en Angular es separar la vista del modelo de datos. En el modelo de datos tenemos las variables y en la vista implementamos como se muestran dichos datos.

Modificaremos el proyecto001 para ver este concepto de interpolación.

Abriremos el archivo que tiene la clase AppComponent (app.component.ts) y lo modificaremos con el siguiente código:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+=this.sueldos[x];
    return suma;
  }
}
```

La clase 'AppComponent' representa los datos de un empleado. Definimos e inicializamos 5 propiedades:

```
nombre = 'Rodriguez Pablo';
edad = 40;
email = 'rpablo@gmail.com';
sueldos = [1700, 1600, 1900];
activo = true;
```

Definimos dos métodos, en el primero según el valor que almacena la propiedad 'activo' retornamos un string que informa si es un empleado activo o inactivo:

```
esActivo() {
  if (this.activo)
    return 'Trabajador Activo';
  else
    return 'Trabajador Inactivo';
}

```

El segundo método retorna la suma de sus últimos 3 meses de trabajo que se almacenan en la propiedad 'sueldos':

```
ultimos3Sueldos() {
  let suma=0;

  for(let x=0; x<this.sueldos.length; x++)
    suma+=this.sueldos[x];
    return suma;
}
```

Veamos ahora el archivo html que muestra los datos, esto se encuentra en 'app.component.html':

```
<div>
  <p>Nombre del Empleado:{{nombre}}</p>
  <p>Edad:{{edad}}</p>
  <p>Los últimos tres sueldos son: {{sueldos[0]}}, {{sueldos[1]}} y {{sueldos[2]}}</p>
  <p>En los últimos 3 meses ha ganado: {{ultimos3Sueldos()}}</p>
  <p>{{esActivo()}}</p>
</div>
```

Para acceder a las propiedades del objeto dentro del template del HTML debemos disponer dos llaves abiertas y cerradas y dentro el nombre de la propiedad:

`<p>Nombre del Empleado:{{nombre}}</p>`

Cuando se tratan de vectores la primer forma que podemos acceder es mediante un subíndice:

`<p>Los últimos tres sueldos son: {{sueldos[0]}}, {{sueldos[1]}} y {{sueldos[2]}}</p>`

Finalmente podemos llamar a métodos que tiene por objetivo consultar el valor de propiedades:

```
<p>En los últimos 3 meses ha ganado: {{ultimos3Sueldos()}}</p>
<p>{{esActivo()}}</p>
```

En principio podríamos decir que si los datos son siempre los mismos no tiene sentido definir propiedades en la clase y sustituirlos luego en el HTML, pero luego veremos que las propiedades las vamos a cargar mediante una petición a un servidor web, en esas circunstancias veremos la potencia que tiene modificar las propiedades y luego en forma inmediata se modifica la vista.

### Acotaciones

Dentro de las dos llaves abiertas y cerradas Angular nos permite efectuar una operación:

`<p>En los últimos 3 meses ha ganado: {{sueldos[0]+sueldos[1]+sueldos[2]}}</p>`

Primero se opera la expresión dispuesta dentro de las llaves previo a mostrarla.

Otro ejemplo:

`<p>El empleado dentro de 5 años tendrá:{{edad+5}}</p>`

Podemos utilizar la interpolación como valor en propiedades de elementos HTML. Si en la clase tenemos definida la propiedad:

`sitio='http://www.google.com';`

Luego en la vista podemos interpolar la propiedad 'url' del elemento 'a' con la siguiente sintaxis:

`<p>Puede visitar el sitio ingresando <a href="{{sitio}}">aquí</a></p>`

## 5 - Directivas *ngIf y *ngFor

Las directivas *ngIf y *ngFor son atributos que podemos agregarle a los elementos HTML que nos permiten en el caso del \*ngIf condicionar si dicha marca debe agregarse a la página HTML.

La directiva \*ngFor nos permite generar muchos elementos HTML repetidos a partir del recorrido de un arreglo de datos.

Para analizar con un ejemplo estas directivas procederemos nuevamente a modificar el proyecto001.

En el archivo 'app.component.ts' procedemos a codificar la clase AppComponent con la definición de 3 propiedades:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];
}
```

Hemos definido las propiedades nombre, edad y sueldos en la clase AppComponent:

```
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];
}
```

Ahora procedemos a modificar el archivo app.component.html:

```
<div>
  <p>Nombre del Empleado:{{nombre}}</p>
  <p>Edad:{{edad}}</p>
  <p *ngIf="edad>=18">Es mayor de edad.</p>
  <table border="1">
    <tr>
      <td>Sueldos</td>
    </tr>
    <tr *ngFor="let sueldo of sueldos">
      <td>{{sueldo}}</td>
    </tr>
  </table>
</div>
```

La directiva \*ngIf verifica la condición que indicamos entre comillas, en el caso de verificarse verdadero se agrega el elemento HTML 'p':

```
<p *ngIf="edad>=18">Es mayor de edad.</p>
```

Probemos de modificar la propiedad edad en la clase AppComponent por el valor 7:

```
export class AppComponent {
  nombre = 'Rodriguez Pablo';
  edad = 7;
  sueldos = [1700, 1600, 1900];
}
```

Al recargar la página podemos comprobar que no aparece el mensaje contenido en dicho párrafo: **'Es mayor de edad.'**

La directiva \*ngFor nos genera posiblemente muchos elementos HTML repetidos, en este ejemplo una serie de filas de una tabla HTML:

```
<tr *ngFor="let sueldo of sueldos">
    <td>{{sueldo}}</td>
</tr>
```

En cada repetición en la variable 'sueldo' se almacena una componente del arreglo 'sueldos'. De esta forma podemos mostrar los datos del arreglo mediante la directiva \*ngFor.

##Acotaciones
La directiva \*ngIf podemos plantear un else con la siguiente sintaxis:

```
<p *ngIf="edad>=18; else menor">Es mayor de edad.</p>
<ng-template #menor><p>Es un menor de edad.</p></ng-template>
```

En el caso que la condición del \*ngIf se verifique falso le indicamos con un else un nombre que debe luego especificarse en un elemento ng-template. Lo que disponemos dentro del elemento ng-template es lo que se muestra.

## 6 - Captura de eventos

Otra actividad muy común en una aplicación es la captura de eventos. La presión de un botón, la presión de una tecla, el desplazamiento de la flecha del mouse etc. son eventos que podemos capturar.

El evento más común que podemos encontrar en cualquier aplicación es la presión de un botón. Modificaremos nuevamente el proyecto001 para que la componente AppComponent muestre un etiqueta con un número 0 y luego dos botones que permitan incrementar o decrementar en uno el contenido de la etiqueta.

Nuevamente debemos modificar el archivo 'app.component.ts' con el siguiente código:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador = 1;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

}
```

Definimos en la clase la propiedad 'contador' y lo iniciamos con el valor '1':

```
export class AppComponent {
contador = 1;
```

Luego otros dos métodos de la clase AppComponent, que serán llamados al presionar alguno de los botones, incrementan en uno o decrementan en uno el valor almacenado en la propiedad contador:

```
  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
```

Recordar que las propiedades dentro de los métodos debemos anteceder la palabra clave 'this'

El segundo archivo donde se encuentra la vista de la componente es app.component.html:

```
<div>
  <p>{{contador}}</p>
  <button (click)="incrementar()">Sumar 1</button>
  <button (click)="decrementar()">Restar 1</button>
</div>
```

Como ya conocemos mostramos el contenido de la propiedad contador mediante interpolación de string:

```
  <p>{{contador}}</p>
```

Luego definimos dos elementos HTML de tipo 'button' y definimos los eventos click (deben ir entre paréntesis los nombres de los eventos) y luego entre comillas el nombre del método que se llama:

```
  <button (click)="incrementar()">Sumar 1</button>
  <button (click)="decrementar()">Restar 1</button>
```

Cuando se presiona el botón 'Sumar 1' se llama el método 'incrementar()', en dicho método si recordamos se modifica el contenido de la propiedad 'contador':

```
  incrementar() {
    this.contador++;
  }
```

Lo más importante notar que Angular detecta cuando se modifican valores almacenados en propiedades y automáticamente se encarga de actualizar la interfaz visual sin tener que llamar a algún método.

Este concepto se conoce como 'binding' en una dirección (cambio en atributos de la clase se actualizan en la vista)
