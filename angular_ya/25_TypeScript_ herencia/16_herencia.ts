/*
La herencia es otra característica fundamental de la programación orientada a objetos y
TypeScript lo implementa.

La herencia significa que se pueden crear nuevas clases partiendo de clases existentes, 
que tendrá todas los atributos y los métodos de su 'superclase' o 'clase padre' 
y además se le podrán añadir otros atributos y métodos propios.

Veamos con un ejemplo la sintaxis que plantea TypeScript para implementar la herencia:
*/
class Persona {
    protected nombre: string;
    protected edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}

//Mediante la palabra clave extends indicamos el nombre de la clase padre. 
//Una clase puede heredar de una sola clase (en este ejemplo 'Persona'):
class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, edad: number, sueldo: number) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    //La subclase Empleado puede acceder a las propiedades de la clase padre si los mismos se definieron 
    //en forma public o protected:
    imprimir() {
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }

    pagaImpuestos() {
        if (this.sueldo > 5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
            console.log(`${this.nombre} no debe pagar impuestos`);
    }
}


const persona1 = new Persona('Juan', 44);
persona1.imprimir();

//Con el modificador protected permitimos que la subclase pueda acceder a los atributos de la clase padre 
const empleado1 = new Empleado('Ana', 22, 7000);
//pero luego donde definamos un objeto de esta clase no los pueda acceder y permanezcan encapsulados:
//empleado1.nombre='facundo'; //error
empleado1.imprimir();
empleado1.pagaImpuestos();

