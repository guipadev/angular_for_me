/*
Propiedades estáticas

Las propiedades estáticas pertenecen a la clase y no a las instancias de la clase. 
Se las define antecediendo el modificador 'static'.

Con un ejemplo quedará claro este tipo de propiedades:
*/

class Dado {
    
    //La propiedad 'valor' es independiente en cada dado pero la propiedad 'tiradas' es compartida por los dos objetos.
    private valor: number;
    //Una propiedad estática requiere el modificador 'static' previo a su nombre:
    static tiradas:number = 0;
    
    tirar() {
      this.generar();
    }
  
    private generar() {
      this.valor = Math.floor(Math.random() * 6) + 1;
      //Para acceder a dichas propiedades debemos anteceder el nombre de la clase y no la palabra clave 'this':
      Dado.tiradas++;
    }
  
    imprimir() {
      console.log(`Salió el valor ${this.valor}`);
    }
}

//No importan cuantos objetos de la clase se definan luego todos esos objetos comparten la misma variable estática:
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

let dado2 = new Dado();
dado2.tirar();
dado2.imprimir();

//Es por eso que la propiedad 'tiradas' almacena un 2 luego de tirar el primer y segundo dado.
console.log(`Cantidad de tiradas de dados:${Dado.tiradas}`); // 2