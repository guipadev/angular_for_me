/*
Los lenguajes con tipado estático permiten detectar errores de asignación en tiempo de desarrollo.

Por ejemplo si tenemos la definición de una variable 'number' y luego queremos asignarle un 'string' la herramienta de desarrollo la puede detectar (también si lo compilamos nos detecta un error):
 */

let version: number = 2.1;
 // version = '2.4'; // esto genera error

/*
JavaScript es un lenguaje de programación que usa un tipado dinámico, luego la comprobación de tipificación se realiza durante su ejecución en vez de durante la compilación.
*/