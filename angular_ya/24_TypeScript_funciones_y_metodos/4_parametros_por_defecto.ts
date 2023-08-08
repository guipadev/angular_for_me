/*
Parámetros por defecto.
Esta característica de TypeScript nos permite asignar un valor por defecto a un parámetro 
para los casos en que la llamada a la misma no se le envíe.
*/

function sumar(valor1: number, valor2: number, valor3: number = 0): number {
  return valor1 + valor2 + valor3;
}

console.log(sumar(5, 4));
console.log(sumar(5, 4, 3));

//El tercer parámetro almacena un cero si no se lo pasamos en la llamada:

console.log(sumar(5, 4));

/*
Puede haber varios valores por defecto, pero deben ser los últimos. 
Es decir primero indicamos los parámetros que reciben datos en forma obligatoria cuando los llamamos y finalmente 
indicamos aquellos que tienen valores por defecto.
*/