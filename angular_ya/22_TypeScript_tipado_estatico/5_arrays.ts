
//ARREGLOS con elementos del mismo tipo
//Podemos almacenar un conjunto de elementos del mismo tipo mediante vectores o arreglos:
let vector: number[] = [1, 4, 2];

vector.push(33);

for (let elemento of vector)

console.log(elemento);

//Indicamos luego del tipo de dato los corchetes abiertos y cerrados:

let vector2: number[]

//Si queremos definir e inicializar algunas componentes del arreglo luego la sintaxis es:
let vector3: number[] = [1, 4, 2];

//El compilador de TypeScript nos podrá avisar del error si queremos agregar componentes que no sean de tipo 'number':
//vector.push('juan'); //error

//OTRA SINTAXIS definir ARREGLO en TypeScript es mediante genéricos utilizando la clase Array:
let vector4: Array<number> = [1, 4, 2];

vector.push(33);

for(let elemento of vector)

console.log(elemento);