/*
Funciones anónimas.
Una función anónima no especifica un nombre. 
Son semejantes a JavaScript con la salvedad de la definición de tipos para los parámetros:
*/

const funcSumar = function (valor1: number, valor2: number): number {
  return valor1 + valor2;
}

console.log(funcSumar(4, 9));
