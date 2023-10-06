# ¿ Qué es ?, patrones, ventajas, cuando usar, proyecto predilecto y más ! - #1

No es un framework, es una plataforma y framework de estructura, porque posee directivas, aumentar la funcionaliad que tiene un elemento del DOM por medio de directivas, que son propias de Angular.

Ejemplo, si se cumple se renderiza en HTML, o si no, no se renderiza para nada:

```<div *ngIf="condition">```

- Aplicación nativa (movil)
- App de escritorio
- Angular CLI
	Crear componentes, posee un esquematic, crear algo basado en un esquema como puede ser ejemplo un componente dentro de angular, un servicio etc..
- Angular Universal
	Server Side Rendering dentro de la aplicación, lo que permite servir cada una de las páginas de nuestra aplicación por medio de solicitudes del servidor, genial para contenido estatico
- Angular Material
	Libreria que se usa para el IU, el reemplazo a Bootstrap
- Angular Fire
	Libreria oficial para utilizar FireBase
- Protractor (ya sale)
	Realizar  end to testing 
- Karma
- Jasmine
- TypeScript

## ¿Cúando usar Angular?

- Aplicación de gran tamaño que necesita escalar
- Robustez
- Buena estructura
- Complejidad
- Requerimientos bien definidos

## Patron que utiliza

- MVC
- MVVM
- Basado en componentes

**MODELO** Donde va a estar todos nuestros datos en estas propiedades, ahí lo vamos a mostrar en la **VISTA** pero la misma **VISTA** vamos a poder modificar el **MODELO** por eso es **MVVM**
En Angular es muy común con el tema del **two-way-data-binding** que es tratar justamente de brindar una propiedad y que se pueda modificar en la **VISTA** en resumen **MVN** pero a su vez contine elementos como por ejemplo un servicio que contine lógica de negocios **CONTROLLER** que son los que modifican también al **MODELO** y en este caso, ese cambio luego se ve representado en la **VISTA** ossea MVC, el modelo contiene los datos, la vista la muestra y el controlador lo modifica, tambien hay esto por lo cual es un mix de las dos cosas, pero con certeza Angular es basado en componentes

## Angular Way

Es la Angular de hacer las cosas, cada vez que tenemos un tipo de problematica, seguramente vamos a tener una sola solución
Debido que Angular es opinado, osea que la comunidad va a regir que es lo que va a entrar en Angular, cual es la forma correcta de hacer las cosas

### Gran curva de Aprendizaje

Es muy alta, tiene buenas practicas