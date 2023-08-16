/*
Clases abstractas

En algunas situaciones tenemos métodos y propiedades comunes a un conjunto de clases, 
podemos agrupar dichos métodos y propiedades en una clase abstracta.

Hay una sintaxis especial en TypeScript para indicar que una clase es abstracta.

No se pueden definir objetos de una clase abstracta y seguramente será heredada por 
otras clases de las que si podremos definir objetos.

Problema: 
Declarar una clase abstracta que represente una Operación. 
Definir en la misma tres propiedades valor1, valor2 y resultado, 
y tres métodos: constructor, imprimir y operar (éste último hacerlo abstracto). 

Plantear dos clases llamadas Suma y Resta que hereden de la clase Operación e implementen 
el método abstracto operar.
*/

//Mediante la palabra clave abstract indicamos que la clase debe definirse como abstracta,
//luego no se pueden definir objetos de la clase Operacion:

abstract class Operacion {
    public valor1: number;
    public valor2: number;
    public resultado: number = 0;

    constructor(v1: number, v2: number) {
        this.valor1 = v1;
        this.valor2 = v2;
    }

    //Definimos un método abstracto llamado operar, esto obliga a todas las clases que heredan de Operación 
    //implementar el algoritmo de dicho método, sino se genera un error en tiempo de compilación.
    abstract operar(): void;

    imprimir() {
        console.log(`Resultado: ${this.resultado}`);
    }
}

//La subclase Suma, heredar de Operación e implementa el método operar:
class Suma extends Operacion {
    constructor(v1: number, v2: number) {
        super(v1, v2);
    }

    operar() {
        this.resultado = this.valor1 + this.valor2;
    }
}

class Resta extends Operacion {
    constructor(v1: number, v2: number) {
        super(v1, v2);
    }

    operar() {
        this.resultado = this.valor1 - this.valor2;
    }
}

//Solo podemos definir objetos de las clases Suma y Resta. 
//Se genera un error si tratamos de crear un objeto de la clase Operacion:

let suma1: Suma;
suma1 = new Suma(10, 4);
suma1.operar();
suma1.imprimir();

let resta1: Resta;
resta1 = new Resta(10, 4);
resta1.operar();
resta1.imprimir();