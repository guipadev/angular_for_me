/**
TypeScript aporta varias características que JavaScript no dispone hasta el momento cuando 
tenemos que plantear funciones y métodos.

Parámetros tipados y funciones que retornan un valor.
Podemos indicar a cada parámetro el tipo de dato que puede recibir y también el tipo de dato 
que retorna la función  o método en caso que estemos en una clase:
 */

function sumar(valor1: number, valor2: number): number {
  return valor1 + valor2;
}

console.log(sumar(10, 5));

/*
La función sumar recibe dos parámetros de tipo number y retorna un valor de tipo number.
Luego si llamamos a esta función enviando un valor distinto a number el compilador nos
avisará del error:

console.log(sumar('juan', 'carlos'));

Se genera un error: "Argument of type '"juan"' is not assignable to parameter of type 'number'.

Inclusive editores de texto moderno como Visual Studio Code pueden antes de compilarse avisar
del error.

El tipado estático favorece a identificar este tipo de errores antes de ejecutar la aplicación.
Lo mismo cuando una función retorna un dato debemos indicar al final de la misma dicho tipo:
  */

// function sumar(valor1:number, valor2:number): number {}

// La función sumar retorna un valor de tipo number.

// Luego si la función retorna un tipo distinto a number se genera un error:

/*
function sumar(valor1:number, valor2:number): number {
  return 'Hola mundo';
}
*/

//Como estamos retornando un string se genera el 
//error: Type '"Hola mundo"' is not assignable to type 'number'








