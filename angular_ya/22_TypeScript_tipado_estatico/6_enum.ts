
//ENUM
//El tipo de dato enum permite hacer nuestro código más legible:
//Estamos declarando un nuevo tipo de dato que puede almacenar alguno de los cuatro valores indicados entre llaves:
enum Operacion { Suma, Resta, Multiplicacion, Division };

//Luego podemos definir una variable de este tipo y almacenar uno de esos cuatro valores:
let actual: Operacion = Operacion.Multiplicacion;

//Cuando queremos saber que valor almacena la variable 'actual' la comparamos por ejemplo con los valores 
//posibles del tipo 'Operacion':

switch (actual) {
    case Operacion.Suma: {
        console.log('Operación actual: Suma ');
        break;
    }
    case Operacion.Resta: {
        console.log('Operación actual: Resta ');
        break;
    }
    case Operacion.Multiplicacion: {
        console.log('Operación actual: Multiplicacion ');
        break;
    }      
    case Operacion.Division: {
        console.log('Operación actual: Division ');
        break;
    }      
}

//Es una forma más elegante que tratar de resolver el problema con una variable de tipo 'number':
/*
let actual: number = 0; //0 = suma / 1 = resta / 2 = multiplicacion / 3 = division

    switch (actual) {
      case 0: {
        console.log('Operación actual: Suma ');
        break;
      }
      case 1: {
        console.log('Operación actual: Resta ');
        break;
      }
      case 2: {
        console.log('Operación actual: Multiplicacion ');
        break;
      }      
      case 3: {
        console.log('Operación actual: Division ');
        break;
      }      
    }
*/