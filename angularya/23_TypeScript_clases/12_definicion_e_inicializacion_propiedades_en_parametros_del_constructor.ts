/*
Definición e inicialización de propiedades en los parámetros del constructor.

Esta característica no es común en otros lenguajes orientados a objetos y tiene por objetivo crear clases más breves.

En TypeScript podemos definir algunas propiedades de la clase en la zona de parámetros del constructor, 
con esto nos evitamos de su declaración fuera de los métodos.

Por ejemplo la clase Persona la podemos codificar con ésta otra sintaxis:
*/
class Persona {

    //Como vemos el constructor tiene un bloque de llaves vacías ya que no tenemos que implementar ningún código 
    //en su interior, pero al anteceder el modificador de acceso en la zona de parámetros los mismos pasan a ser 
    //propiedades de la clase y no parámetros:

    //Podemos sin problemas definir propiedades tanto 'public' como 'private'.
    //La definición de propiedades en la zona de parámetros solo se puede hacer en el constructor de la clase 
    //y no está permitido en cualquier otro método.
    constructor(
        public nombre:string, 
        public edad:number
    ) { }
  
    imprimir() {
        console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
    }
}
  
let persona1: Persona;
persona1 = new Persona('Juan', 45);
persona1.imprimir();