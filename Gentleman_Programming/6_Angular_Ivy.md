# Angular Ivy
El motor de render y compilador más rápido del oeste

## Tree Shaking
Reduce el peso de la aplicación, por lo cual sera más rápida la app
Consiste en borrar código muerto, la app angular utiliza 3 archivos diferentes:

1. Archivo contiene la App
2. Archivo es importado por el 1er archivo
3. Archivo existen dentro de nuestro repositorio, pero no se utiliza para nada.

El compilador va a ver import y export de JavaScript y va a ver que este 3cer archivo no se utiliza, por lo cual lo eliminara.

Reduciendo el bulding de la app y lo hace más rápido.

## AOT(Ahead Of Time) vs JIT (Just In Time
Son dos métodos diferentes de compilación.

### JIT
Compila la aplicación pero en tiempo de ejecución, en el browser.
Sus problemas son:

1. Tiene que descargar el compilador y justamente compilar la aplicación esta en display osea cuando se renderiza.

2. El código va incluir el compilador porqué es necesario, por lo cual el building es más pesado.

3. Los errores, por ejemplo que hagamos los templates en nuestro componentes, llamar una variable que no existe.

Este error aparece cuando voy a la pantalla/página disponsa su view ese componente, cuando ese componente cargue su template, va a petar/romper la aplicación, y aparecera al lado en rojo la consola, que hay una variable que no existe.

### AOT
Antes de Tiempo, con lo cual hace es compilar toda la app, analizarla y el resultante es prácticamente la aplicació compilada que se entrega al navegador para que se renderice.

Ventajas:
1. Al estar ya compilada, la aplicación va a cargar más rápido.
2. No tenemos que estar descargando el compilador, porque ya sé lo estamos dando de una.
3. Ádemas de estar compilada, ya esta optimizada, reduciendo a casi la mitad el building en cuanto a JIT.
4. Los errores de template van a parecer en la compilación.

## Mejoras de Ivy
1. Más rápido para realizar un ```ng build --prod``` para producción
2. Más rápido para ```ng serve``` correr.
3. Más rápido en la recompilación **recompile lazy module** cuando hacemos un cambio y guardamos.
4. El peso **minified** de la aplicación disminuye.

## Solo un archivo por vez es compilado
Ivy tiene una cosa importante, su filosofia es ir archivo por archivo y compilarlo. Lo que trata de hacer es se ve el componente y su template.

Va uno por uno identificando cambios que se realicen entre cada cosa.

## Si no se usa... no entra
Si algo no se usa, no va a entrar dentro de la compilación

## Tree Shaking Atómico
Ivy le da un plus para mejorar la eficiencia, más rápido, lo que trata de hacer es agarrar cada cosa y lo va a tratar de reducir lo más atómicamente posible.

## Mejor pipelining

Template HTML ----> Template instructions ----> DOM

El Template HTML genera diferentes tipos de instrucciones, que no tienen un interpretador para saber cual es la que o no se debeje ejecutar son esas, y con eso se genera el DOM.

Cuando hacemos procesos de forma secuencial, mejor que el anterior View Engine:

Template HTML ----> Template Data ----> Angular Interprete ----> DOM

Aquì lo que hacia el Template HTML, era generar el Template Data, archivo metadata.json que sacaba todas las configuraciones de los decoradores y entragaba al interpretador de angular, que se fijaba de que cosas que ejecutar o no para ejecutar el DOM.

## Mejor Debuggin
Todos los template van a hacer incluidos dentro de la etapa de compilaciòn del pipelining. Por lo cual cuando se produce un error va indicar en que linea se encuentra. Capacidad de debugging a los template.

## Nuevo puntos de entrada en la compilaciòn
Formas de transpilar el código:

- ngtsc: Typescript -> Javascript
TypeScript transformado a JavaScript, durante la compilación.

- ngcc: módulos npm -> Ivy
Recorrer los módulos que tengamos de npm, en el proyecto y va a tratar de transformar a Ivy.