/*
Parámetros de métodos.
También cuando definimos funciones o métodos debemos definir el tipo de dato de los mismos:
*/

function mayor(valor1: number, valor2: number): number {
    if (valor1 > valor2)
        return valor1;
    else
        return valor2;
}

/*
El método mayor recibe dos parámetros de tipo 'number' y retorna un tipo de dato 'number' 
que lo indicamos luego de los dos puntos.

Si no retorna dato un método podemos utilizar el tipo 'void':
*/

export class AppComponent {

    constructor() {
        this.mostrarMensaje('Hola mundo');
    }

    mostrarMensaje(mensaje: string): void {
        alert(mensaje);
    }

}