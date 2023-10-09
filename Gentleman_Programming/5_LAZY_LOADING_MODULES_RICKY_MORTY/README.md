
# LazyLoadingModules

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Refactorización
- Estructura de proyecto
- No tener todos los componentes en el archivo `app.module.ts` 
- Porque se genera un archivo main.js y si este posee muchos componentes se volveria lento
- Por lo cual se crean los modulos en el directorio correspondiente como home.module.ts, location.module.ts y breadcum.module.ts para cuando exportemos e importemos solo sea el componente necesario y no todo un conjunto que no necesitamos.

### En temas de seguridad
Digamos que tuvieras la parte de autenticación. Si el usuario no esta logueado, debemos mostar el modulo del login.
Buena practica seria:
1. lazy loading en la aplicación.
2. solamente cargar el modulo de login, como no tendra nada que ver con el resto de la aplicación, ser cargara rapidisimo.
3. Si no esta cargada el resto de la aplicación, como hace un tercero para poder acceder a información del código, si no existe todavia, osea que tambien estamos autenticando el acceso a ese código.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
