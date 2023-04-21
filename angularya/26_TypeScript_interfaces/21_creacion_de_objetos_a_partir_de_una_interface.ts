/*
Creación de objetos a partir de una interface.

TypeScript permite crear objetos a partir de una interfaz. 
La sintaxis para dicha creación es:
*/

interface Punto {
    x: number;
    y: number;
    //Propiedades opcionales.
    //Una interface puede definir propiedades opcionales que luego la clase que la implementa puede o no definirlas. 
    //Se utiliza la misma sintaxis de los parámetros opcionales, es decir se le agrega el caracter '?' al final del nombre de la propiedad.
    z?: number;
}

//No podemos utilizar el operador new para la creación del objeto.
//Podemos definir la variable e inmediatamente iniciarla:
let punto1: Punto;
punto1 = {x:10, y:20};
console.log(punto1);

let puntoPlano: Punto = {x:10, y:20};
console.log(puntoPlano);

let puntoEspacio: Punto = {x:10, y:20, z:70};
console.log(puntoEspacio);