/*
Problema
Se tiene la siguiente interface:

interface Figura {
  superficie: number;
  perimetro: number;
  
  calcularSuperficie(): number;
  
  calcularPerimetro(): number;
}

Declar dos clases que representen un Cuadrado y un Rectángulo. 
Implementar la interface Figura en ambas clases.
*/

//En este problema la interface Figura tiene dos métodos que deben ser implementados 
//por las clases y dos propiedades que también deben definirlos:
interface Figura {
  superficie: number;
  perimetro: number;

  calcularSuperficie(): number;
  calcularPerimetro(): number;
}

//La clase Cuadrado indica que implementa la interface Figura, 
//esto hace necesario que se implementen los métodos calcularSuperficie 
//y calcularPerimetro, y las dos propiedades:  
class Cuadrado implements Figura {
  superficie: number;
  perimetro: number;

  //La clase Cuadrado tiene una propiedad llamada lado que la recibe el constructor.
  constructor(private lado: number) {
    this.superficie = this.calcularSuperficie();
    this.perimetro = this.calcularPerimetro();
  }

  calcularSuperficie(): number {
    return this.lado * this.lado;
  }

  calcularPerimetro(): number {
    return this.lado * 4;
  }
}


//De forma similar la clase Rectangulo implementa la interface Figura:
class Rectangulo implements Figura {
  superficie: number;
  perimetro: number;

  constructor(private ladoMayor: number, private ladoMenor: number) {
    this.superficie = this.calcularSuperficie();
    this.perimetro = this.calcularPerimetro();
  }

  calcularSuperficie(): number {
    return this.ladoMayor * this.ladoMenor;
  }

  calcularPerimetro(): number {
    return (this.ladoMayor * 2) + (this.ladoMenor * 2);
  }
}

//Finalmente definimos un objeto de la clase Cuadrado y otro de la clase Rectangulo, 
//luego llamamos a los métodos calcularPerimetro y calcularSuperficie para cada objeto:  
let cuadrado1: Cuadrado;
cuadrado1 = new Cuadrado(10);
console.log(`Perimetro del cuadrado : ${cuadrado1.calcularPerimetro()}`);
console.log(`Superficie del cuadrado : ${cuadrado1.calcularSuperficie()}`);

//Las interfaces exige que una clase siga las especificaciones de la misma 
//y se implementen algoritmos más robustos. 
//En nuestro ejemplo tanto la clase Rectangulo como Cuadrado tienen una forma
// similar de trabajar gracias a que implementan la interfaz Figura.

let rectangulo1: Rectangulo;
rectangulo1 = new Rectangulo(10, 5);
console.log(`Perimetro del rectangulo : ${rectangulo1.calcularPerimetro()}`);
console.log(`Superficie del cuadrado : ${rectangulo1.calcularSuperficie()}`);