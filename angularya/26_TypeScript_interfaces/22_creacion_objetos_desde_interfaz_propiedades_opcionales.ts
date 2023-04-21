/*
Propiedades opcionales.
Una interface puede definir propiedades opcionales que luego la clase que la implementa puede o no definirlas. 
Se utiliza la misma sintaxis de los parámetros opcionales, es decir se le agrega el caracter '?' al final 
del nombre de la propiedad.
*/
interface Punto {
    x: number;
    y: number;
    z?: number;
}


//Como vemos el objeto 'puntoPlano' solo implementa las propiedades 'x' e 'y'.
let puntoPlano: Punto = {x:10, y:20};
console.log(puntoPlano);

//Se produce un error en tiempo de compilación si no implementamos todas las propiedades obligatorias, por ejemplo:
//Esta línea genera un error ya que solo se define la propiedad 'x' y falta definir la propiedad 'y'.
//let puntoPlano: Punto = {x:10};

let puntoEspacio: Punto = {x:10, y:20, z:70};
console.log(puntoEspacio);