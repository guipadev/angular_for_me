/*
Modificador readonly

Disponemos además de los modificadores 'private' y 'public' uno llamado 'readonly'. 
Mediante este modificador el valor de la propiedad solo puede ser cargado en el constructor o 
al momento de definirlo y luego no puede ser modificado ni desde un método de la clase o fuera de la clase.

Veamos un ejemplo con una propiedad 'readonly':
*/
class Articulo {
    readonly codigo: number;
    descripcion: string;
    precio: number;
  
    constructor(codigo:number, descripcion:string, precio:number) {
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=precio;
    }

    //Podemos utilizar también la sintaxis abreviada de propiedades:
    //constructor(readonly codigo:number, public descripcion:string, public precio:number) { }

    imprimir() {
        //Una vez que se inicia la propiedad 'codigo' en el constructor su valor no puede cambiar:
        //this.codigo=7; //Error
        console.log(`Código:${this.codigo} Descripción:${this.descripcion} Precio:${this.precio}`);
    }
}
  
let articulo1: Articulo;
articulo1 = new Articulo(1,'papas',12.5);
//El mismo error se produce si tratamos de cambiar su valor desde fuera de la clase:
//articulo1.codigo=7; //Error
articulo1.imprimir();

