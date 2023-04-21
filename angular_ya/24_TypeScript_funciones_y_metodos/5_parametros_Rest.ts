/*
parámetros Rest.
Otra característica de TypeScript es la posibilidad de pasar una lista indefinida de valores y que los reciba un vector.

El concepto de parámetro Rest se logra antecediendo tres puntos al nombre del parámetro:
*/

function sumar(...valores:number[]) {
  let suma=0;
  for(let x=0;x<valores.length;x++)
    suma+=valores[x];
  return suma;
}

console.log(sumar(10, 2, 44, 3));
console.log(sumar(1, 2));
console.log(sumar());

/*
El parámetro 'valores' se le anteceden los tres puntos seguidos e indicamos que se trata de un vector de tipo 'number'. 
Cuando llamamos a la función le pasamos una lista de valores enteros que luego la función los empaqueta en el vector:

La función con un parámetro Rest puede tener otros parámetros pero se deben declarar antes.

Los parámetros Rest no pueden tener valores por defecto.
*/