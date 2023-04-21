//Variable de tipo unión.
//TypeScript permite definir variables que almacenen dos o más tipos de datos.
//Puede almacenar un único valor en un determinado momento, pero dicho valor puede variar entre los tipos indicados en la definición:

let edad: number | string;

edad=34;
console.log(edad);

edad='20 años';
console.log(edad);

//Mediante el caracter | separamos los tipos posibles de datos que puede almacenar la variable. 
//La variable 'edad' puede almacenar un valor de tipo 'number' o 'string':

let edad2: number | string;