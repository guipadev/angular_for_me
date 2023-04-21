//Funciones callbacks
//Una función callback es una función que se pasa a otra función como parámetro y dentro de la misma es llamada.

function operar(valor1: number, valor2: number, func: (x: number, y:number) => number): number {
  return func(valor1, valor2);
}

console.log(operar(3, 7, (x: number,y: number): number => {
  return x+y;
}))

console.log(operar(3, 7, (x: number,y: number): number => {
  return x-y;
}))

console.log(operar(3, 7, (x: number,y: number): number => {
  return x*y;
}))

//La función operar recibe tres parámetros, los dos primeros son de tipo 'number' y el tercero es de tipo función:

//function operar(valor1: number, valor2: number, func: (x: number, y:number)=>number): number {
//La función que debe recibir debe tener como parámetros dos 'number' y retornar un 'number'.

//Cuando llamamos a la función además de los dos enteros le debemos pasar una función que reciba dos 'number' y retorne un 'number':

console.log(operar(3, 7, (x: number,y: number): number => {
  return x+y;
}))

//Como podemos observar llamamos a la función 'operar' tres veces y le pasamos funciones que procesan los dos enteros 
//para obtener su suma, resta y multiplicación.

//Para hacer más claro nuestro código TypeScript mediante la palabra clave type permite crear nuevos tipos 
//y luego reutilizarlos:

type Operacion=(x: number, y:number) => number;

function operar2(valor1: number, valor2: number, func: Operacion): number {
  return func(valor1, valor2);
}

console.log(operar2(3, 7, (x: number,y: number): number => {
  return x+y;
}))

console.log(operar2(3, 7, (x: number,y: number): number => {
  return x-y;
}))

console.log(operar2(3, 7, (x: number,y: number): number => {
  return x*y;
}))

//El tipo Operacion tiene la firma de una función con dos parámetros de tipo 'number' y el retorno de un 'number'. 
//Luego cuando declaramos la función operar definimos el tercer parámetro llamado 'func' de tipo 'Operacion':

//function operar(valor1: number, valor2: number, func: Operacion): number {