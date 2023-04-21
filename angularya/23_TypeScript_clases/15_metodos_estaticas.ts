/*
Métodos estáticas

Igual que las propiedades estáticas los métodos estáticos se los accede por el nombre de la clase. 
Este tipo de métodos solo pueden acceder a propiedades estáticas.
*/

class Matematica {
    
    //Debemos anteceder la palabra clave static al nombre del método.
    static mayor(v1:number, v2: number): number {
        if (v1 > v2) 
            return v1;
        else
            return v2;
    }
  
    static menor(v1:number, v2: number): number {
        if (v1 < v2)
            return v1;
        else
            return v2;
    }
  
    static aleatorio(inicio: number, fin: number): number {
        return Math.floor((Math.random() * (fin + 1 - inicio)) + inicio);
    }
}

//Cuando llamamos a un método debemos anteceder también el nombre de la clase, 
//no hace falta definir una instancia u objeto de la clase:
let x1 = Matematica.aleatorio(1,10);
let x2 = Matematica.aleatorio(1,10);

console.log(`El mayor entre ${x1} y ${x2} es ${Matematica.mayor(x1,x2)}`);
console.log(`El menor entre ${x1} y ${x2} es ${Matematica.menor(x1,x2)}`);