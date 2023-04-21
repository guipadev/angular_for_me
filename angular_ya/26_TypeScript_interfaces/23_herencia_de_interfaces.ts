//Herencia de interfaces.
//TypeScript permite que una interface herede de otra:

interface Punto {
    x: number;
    y: number;
}
  
interface Punto3D extends Punto {
    z: number;
}
  
let punto1: Punto = {x:10, y:20};
let punto2: Punto3D = {x:23, y:13, z:12};

console.log(punto1);
console.log(punto2);