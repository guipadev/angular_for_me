/*
operador Spread.
El operador Spread permite descomponer una estructura de datos en elementos individuales. 
Es la operación inversa de los parámetros Rest. 
La sintaxis se aplica anteponiendo al nombre de la variable tres puntos:
*/

function sumar(valor1:number, valor2:number, valor3:number):number {
  return valor1+valor2+valor3;
}

const vec:number[] = [10,20,30];

const s = sumar(...vec);

console.log(s);