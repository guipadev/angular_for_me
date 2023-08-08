/*
Modificadores de acceso a propiedades y métodos.
Podemos definir propiedades y métodos privados y públicos antecediendo las palabras claves 
'private' y 'public'.
*/
class Dado {

  private valor: number;

  //Si no agregamos modificador de acceso por defecto es 'public', luego tendremos el mismo resultado 
  //si utilizamos la siguiente sintaxis para declarar la clase:
  //Es decir nos ahorramos de escribir 'public' antes de las propiedades y métodos que queremos 
  //definir con esta característica.
  public tirar() {
    this.generar();
  }

  private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1;
  }

  public imprimir() {
    console.log(`Salió el valor ${this.valor}`);
  }
}

let dado1 = new Dado();
//El objeto 'dado1' tiene acceso a todos los atributos y métodos que tienen el modificador 'public' 
//por eso podemos llamar a los métodos 'tirar' e 'imprimir':    
dado1.tirar();
dado1.imprimir();
//Se generará un error si queremos acceder al atributo 'valor' o al método 'generar':
//dado1.generar();

// Si no agregamos modificador de acceso por defecto es 'public', luego tendremos el mismo 
// resultado si utilizamos la siguiente sintaxis para declarar la clase:

// Es decir nos ahorramos de escribir 'public' antes de las propiedades y métodos que queremos definir con esta característica.


/*
class Dado {
  private valor: number;

  tirar() {
    this.generar();
  }

  private generar() {
    this.valor = Math.floor(Math.random() * 6) + 1;
  }

  imprimir() {
    console.log(`Salió el valor ${this.valor}`);
  }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
*/

