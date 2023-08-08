# 21 - TypeScript

Hemos avanzado sobre muchas características del framework Angular y no nos hemos detenido sobre el lenguaje que lo soporta que es TypeScript.

TypeScript es un superconjunto de JavaScript que compila a JavaScript.

TypeScript agrega muchas características a JavaScript que nos facilitan la implementación de las aplicaciones.

Cada vez que compilamos la aplicación Angular:

```ng serve -o```

Se convierten todos los archivos TypeScript (*.ts) en archivos JavaScript (*.js). Este proceso se hace en forma automática gracias a la herramienta Angular CLI. Como programadores en Angular solo nos concentramos en el desarrollo de la aplicación utilizando TypeScript y dejamos que la herramienta se encargue de todas las transformaciones para que luego se ejecute dentro de un navegador web (recordemos que los navegadores solo pueden interpretar archivos JavaScript y no TypeScript)

Cuando creamos un proyecto con Angular CLI se instala en la carpeta 'node_modules' el compilador en la subcarpeta 'typescript'.

## Ventajas
- Facilita el desarrollo de aplicaciones complejas.
- Agrega la posibilidad de definir tipos (string, number, boolean etc.) a las variables que creamos. Con esta característica nos permite identificar problemas en nuestras aplicaciones en tiempo de compilación. Esta característica ayuda que nuestro programa sea más legible.
- El origen del nombre de este lenguaje "TypeScript" es por la posibilidad de definir tipos (Type) a las variables.
- Definición de sintaxis más claras en la declaración de clases y sus propiedades.
- Definición de herencia de clases e implementación de interfaces.
- Definición propiedades privadas, protegidas y públicas.
- Captura de errores cuando se compila el programa en TypeScript.

TypeScript es un lenguaje creado por Microsoft y de distribución libre, el sitio oficial del lenguaje donde podemos consultar su documentación más actual está aquí. De todos modos recordemos que no necesitamos descargarlo e instalarlo ya que Angular CLI siempre hace esto por nosotros cada vez que creamos un proyecto.
 
