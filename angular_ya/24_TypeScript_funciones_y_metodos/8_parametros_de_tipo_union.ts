//Parámetros de tipo unión.
//Vimos en otro concepto que podemos definir variables que pueden almacenar más de un tipo de dato indicando los mismos el operador '|':

let edad: number | string;
edad = 34;
console.log(edad);
edad = '20 años';
console.log(edad);

//Con parámetros podemos utilizar la misma sintaxis:

function sumar(valor1: number | string, valor2: number | string ): number | string  {
  if (typeof valor1 ==='number' && typeof valor2 ==='number')
    return valor1+valor2;
  else 
    return valor1.toString() + valor2.toString();
}

console.log(sumar(4, 5));
console.log(sumar('Hola ', 2));
console.log(sumar('Hola ', 'Mundo'));

/*
En este tipo de caso deberemos identificar que operación realizar según los tipos de datos de los parámetros. 

En el ejemplo si los dos parámetros se reciben tipos de datos 'number' procedemos a sumarlos como enteros:

  if (typeof valor1 ==='number' && typeof valor2 ==='number')
    return valor1+valor2;

En el caso contrario con que uno de los dos valores sea de tipo 'string' procedemos a concatenarlos, previamente los convertimos a string:

  else 
    return valor1.toString() + valor2.toString();
*/