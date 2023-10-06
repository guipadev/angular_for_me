# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Lazy Loading
No solo ganamos performance, tambien se gana semantica, el main.js va ser más pequeño y lo que se va a cargar se reduce en tamaño.

### El tema de seguridad
Estamos con la App y le agregamos la parte de autenticación, si el usuario no se loguea, lo único que debemos mostrar es el login.

1. Buena práctica es lazy loading en la aplicación.
2. Solamente cargar el módulo el login, que como no va a tener nada que ver con el resot de la App va a cargarse rápidisimo.
3. Parte de seguridad, si no esta cargada el resto de la aplicación, como hace un tercero para poder acceder a información del código, si no existe todavía, lo cual estamos autenticando el acceso a ese código.

## Default loading

Todos los modulos se van a cargar en el main.js

 -----------	 -----------	 -----------  
| feature 1 |	| feature 2 |	| feature n |
 -----------	 -----------	 -----------
 	  |				 	|			|
	  |					|			|
--------------------------------------------
|				main.js						|
 -------------------------------------------

## Lazy loading feature modules

Cada modulo tiene su propio archivo

 -----------	 	 -----------	 -----------  
| feature 1 |		| feature 2 |	| feature n |
 -----------	 	 -----------	 -----------
 	  |				 	|					|
	  |					|					|
 --------------	 	 --------------	 	 --------------  
| feature-1.js |	| feature-2.js |	| feature-n.js |
 --------------	 	 --------------	 	 --------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
