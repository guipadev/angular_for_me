/*
TypeScript incorpora muchas características de la programación orientada a objetos disponibles en lenguajes como Java y C#.

La sintaxis básica de una clase puede ser:
*/

class Persona {
    nombre: string;
    edad: number;
  
    //El constructor es el primer método que se ejecuta en forma automática al crear un objeto de la clase 'Persona':
    constructor(nombre:string, edad:number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    //Los atributos se definen fuera de los métodos. 
    //Para acceder a los mismos dentro de los métodos debemos anteceder la palabra clave 'this':
    imprimir() {
        console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
    }
}

let persona1: Persona;
persona1 = new Persona('Juan', 45);
persona1.imprimir();