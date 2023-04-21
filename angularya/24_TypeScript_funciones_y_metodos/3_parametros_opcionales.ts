/*
Parámetros opcionales.
En TypeScript debemos agregar el caracter '?' al nombre del parámetro para indicar que el mismo puede o no llegar un dato:
*/

function sumar(valor1:number, valor2:number, valor3?:number):number {
  if (valor3)
    return valor1+valor2+valor3;
  else
    return valor1+valor2;
}

console.log(sumar(5,4));
console.log(sumar(5,4,3));

//El tercer parámetro es opcional:
//Luego a la función 'sumar' la podemos llamar pasando 2 o 3 valores numéricos:


/*
Si pasamos una cantidad de parámetros distinta a 2 o 3 se genera un error en tiempo de compilación: 
' error TS2554: Expected 2-3 arguments, but got 4.'

Los parámetros opcionales deben ser los últimos parámetros definidos en la función. 
Puede tener tantos parámetros opcionales como se necesiten.
*/
