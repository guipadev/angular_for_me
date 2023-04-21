/*
Una interface declara una serie de métodos y propiedades que deben ser implementados luego por una o más clases.

Las interfaces vienen a suplir la imposibilidad de herencia múltiple.

Por ejemplo podemos tener dos clases que representen un avión y un helicóptero. Luego plantear una interface con un método llamado volar.
Las dos clases pueden implementar dicha interface y codificar el método volar 
(los algoritmos seguramente sean distintos pero el comportamiento de volar es común tanto a un avión como un helicóptero)

La sintaxis en TypeScript para declarar una interface es:

interface [nombre de la interface] {
    [declaración de propiedades]
    [declaración de métodos]
}
*/

//Problema
//Definir una interface llamada Punto que declare un método llamado imprimir. Luego declarar dos clases que la implementen.

//Para declarar una interface en TypeScript utilizamos la palabra clave interface y seguidamente su nombre. 
//Luego entre llaves indicamos todas las cabeceras de métodos y propiedades. 
//En nuestro ejemplo declaramos la interface Punto e indicamos que quien la implemente debe definir 
//un método llamado imprimir sin parámetros y que no retorna nada:

interface Punto {
    imprimir(): void;
}

//Por otro lado declaramos dos clases llamados PuntoPlano con dos propiedades y PuntoEspacio con tres propiedades, 
//además indicamos que dichas clases implementarán la interface Punto:

class PuntoPlano implements Punto {
    constructor(private x:number, private y:number) {}
  
    imprimir() {
        console.log(`Punto en el plano: (${this.x},${this.y})`);
    }
}

//La sintaxis para indicar que una clase implementa una interface requiere disponer la palabra clave implements y en forma seguida
//el o los nombres de interfaces a implementar. Si una clase hereda de otra también puede implementar una o más interfaces.
class PuntoEspacio implements Punto {
    constructor(private x:number, private y:number, private z:number) {}
  
    //El método imprimir en cada clase se implementa en forma distinta, en uno se imprimen 3 propiedades y en la otra se imprimen 2 propiedades.
    imprimir() {
        console.log(`Punto en el espacio: (${this.x},${this.y},${this.z})`);
    }
}

//Luego definimos un objeto de la clase PuntoPlano y otro de tipo PuntoEspacio:

let puntoPlano1: PuntoPlano;
puntoPlano1 = new PuntoPlano(10, 4);
puntoPlano1.imprimir();

let puntoEspacio1: PuntoEspacio;
puntoEspacio1 = new  PuntoEspacio(20, 50, 60);
puntoEspacio1.imprimir();

//Si una clase indica que implementa una interfaz y luego no se la codifica, se genera un error en tiempo de compilación 
//informándonos de tal situación (inclusive el editor Visual Studio Code detecta dicho error antes de compilar):
/*
prueba.ts(5,7): error TS2420: Class 'PuntoPlano' incorrectly implements interface 'Punto'.
  Property 'imprimir' is missing in type 'PuntoPlano'.
prueba.ts(20,13): error TS2339: Property 'imprimir' does not exist on type 'PuntoPlano'.
*/

//Este error se produce si codificamos la clase sin implementar el método imprimir:
/*
class PuntoPlano implements Punto{
  constructor(private x:number, private y:number) {}
}
*/