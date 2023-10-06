# Directivas, hay MÁS de 1 tipo ! identificamos cada uno y vemos porqué hacen a Angular especial

Angular es un framework de estructura, porque utiliza un cierta magia negra por  ahí que hace es aumentar la funcionalidades que se depositan en los elmentos del DOM. Y esa magia son las directivas.

## Directivas
Extendien funcionalidades

```
<div *ngIf = "true">
	¡Me ven!
</div>
```

En este caso en especifico **ngIf** hace renderizar o no un elemento en el DOM, basandose en una cierta condición, en este caso es true, por lo cual siempre se vera en pantalla.

## Distintos Tipos de Directivas

### * Estructura
Modifican el HTML

- ngIf

- ngFor
	Capacidad de recorrer un arreglo de elementos y por cada uno de estos elementos, renderizar algo en pantalla

- ngSwitch
	Es el reemplazo lo que seria un Case, bajo cierta propiedad segun el valor que este tenga que realizar una u/o otra cosa

- ngIfElse
	Capacidad de hacer un If Else, según se cumpla ese If renderizar una cosa y si no cumple la condición renderizar otra también

### [] Entrada
La identificamos por el uso de los brackets, que son los clasicos atributos de entrada y lo que permite pasar propiedades a un cierto elemento.

```
<input [ngModel] = "prop" />
```

Ejemplo tenemos un input con el **ngModel** que es la capacidad de agarra un valor de una propiedad y asociarla a un cierto elemento del DOM, en este caso un **input** por lo cual en este momento lo que realizaria es si es **prop** tiene un valor se va a ver representado en el **input**. 

### () Evento
Un evento es cualquier cosa que haga justamente una llamada a un método, puede ser directamente, iniciado por un usuario como un clic. En este caso cada vez ue el usuario de clic se llamara al método.

```
<button (ngClick) = "metodo()" />
```

### [()] caja de bananas / dual binding
Una unión entrea entrada y evento que es lo que se llama generalmente de manera coloquial la caja de bananas.

Dual binding que es servir tanto de entrada como de salida para los elementos del DOM. 

Lo podriamos representar, digamos en la parte de entra del **ngModel** que si prop tiene un tipo valor, eso se iba a ver representado en el **input**, pero si ademas de ponerle las cajitas **[]** le ponemos un parentisis **()** al **ngModel** ahora es de doble via **dual binding** de entrada leemos el valor que tiene el **prop** lo mostramos en pantalla y despúes también de salida de tipo evento, si el usuario va y escribe algo en ese **input** ese valor va a modificar la **prop** la cual va a valer lo que el usuario escriba.

## Son parte de Angular

### *ngIF

Renderiza el elemento si cumple una condicion

```
prop = true

<div *ngIf="prop">
	¡Me ven!
</div>
```

`prop` es la referencia a un espacio de memoria que en su interior guarda el valor de true y eso es lo que referenciamos en el HTML.


### ngFor

Renderiza X veces con elementos de un array

```
items = [
	{nombre: "gentleman"},
	{nombre: "programming"}
]

<div *ngFor="let item of items">
	{item.nombre}
<div>
```

En este caso tenemos un * ya que estamos modificando el HTML, hay una variable let que significa que va a tener solamente su ciclo de vida dentro de este div, este scope.  

Creando una variable item que representa el elemento en esa instancia de este ciclo. **let item of items** sacamos el primer elemento de el arreglo de items, y esto lo que se veria al inspeccionar el HTML.

```
<div>gentleman</div>
<div>programming</div>
```

Esto se puede combinar con *ngIf, para hacer cosas como que deseo recorrer este arrgelo y quiero mostrar cada uno de estos elementos, pero si el elemento no es X nombre no lo dibujes.


### [ngStyle]

De entrada, aplica estilos de manera condicional

Es algo muy utilizado, tambien se puede utilizar el hermano **ngClass** que aplica estilos de manera condicional, esto quiere decir por ejemplo tenemos un **span** en este caso tien un atributo de entrada, porque vamos a estar dandole información a este **span** indicandole que tenga un estilo, un background que en caso de que mi propiedad válido sea válido me lo ponga **green** y si no lo va a poner en **red**.

El **ngClass** es exactamente lo mismo, solamente que va a agregar una clase u otra dependiendo del valor de la propiedad, esa seria la idea.

```
<span [ngStyle] = "{ background : valido ? 'green' : 'red'}">
	¿Qué color seré?
</span>
```

En este caso tenemos un boolean válido, que es true o false, pero tambien podriamos utilizar dentro del **ngStyle** y dentro del **ngClass** una propiedad dentro de su interior que tenga que color tiene, podemos directamente utilizar una propiedad con String green.

Es una forma de relacionar lo que seria el HTML con lo que tenemos dentro de nuestros componentes por ejemplo.

## ¡Podemos hacer nuestras propias directivas!

Angular no solo nos provee algunas por defecto, para que nosotros utilicemos, si no que tambien nos va a permitir directamente crear nuestras propias directivas.

Por ejemplo podremos agarrar y decir que todos aquellos **span** que tenga este atributo, esta directiva, lo que vamos hacer es transformarlo todo a toUperCase .
Podemos crear un directiva custom para eso. Queremos que solo la primer letra se toUperCase, se puede hacer, queremos que siempre cierto estilo, se puede hacer.

## Recomendación

Encontrara como crear sus propias directivas, es súper fácil:

https://angular.io/guide/attribute-directives










