/*
operador Spread.
El operador Spread permite descomponer una estructura de datos en elementos individuales. 
Es la operación inversa de los parámetros Rest. 
La sintaxis se aplica anteponiendo al nombre de la variable tres puntos:
*/

function sumar(valor1: number, valor2: number, valor3: number): number {
  return valor1 + valor2 + valor3;
}

const vec: number[] = [10, 20, 30];

const s = sumar(...vec);

console.log(s);

/*
El error que estás viendo se debe a una incompatibilidad en el uso de la sintaxis de propagación 
(...) en TypeScript. 
El mensaje error "A spread argument must either have a tuple type or be passed to a rest parameter" 
indica que TypeScript espera que uses la sintaxis de propagación en un tipo de tupla o con un 
parámetro rest.

En tu caso, estás intentando propagar los elementos de un array en una función que espera 
parámetros individuales, y TypeScript está indicando que esto no es compatible.

Para solucionar este problema, puedes cambiar la función sumar para que acepte un array como 
parámetro y sumar sus elementos. Aquí tienes una forma de hacerlo:

function sumar(valores: number[]): number {
  return valores.reduce((total, valor) => total + valor, 0);
}

const vec: number[] = [10, 20, 30];

const s = sumar(vec);

console.log(s);

*/