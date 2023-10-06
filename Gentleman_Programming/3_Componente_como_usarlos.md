# ¿ Qué es un componente ? SEGURO que no sabes que hay más de un tipo y cómo usarlos correctamente

Dentro de Angular sabemos que vamos a tener módulos, van a contener ciertas funcionalidades
La idea de cada modulo es representar una funcionalidad en especifico para poder sectorizar nuestra aplicación, pero a su vez eso módulos como van a hacer esa funcionalidad, esa lógica de negocio

Pues eso se hace con los componentes, son nuestros bread and butter que vamos a utilizar a lo largo de la aplicación

## Componentes
Son la vida de nuestra App

### Componentes Tontos = State Less
Sin ningun tipo de estado interno. Prácticamente no tienen lógica.

1. Se usan para mostrar elementos en pantalla

	Muchas veces vamos a obtener información del backend y esa información de alguna manera debemos mostrar en pantalla

	Los componentes state less, con fantásticos para darles un formato en especifico y mostrarlo.

	Ejemplo:
	Hacemos una llamada al backend y este nos trae 15 jugadores de futbol, vamos a mostrarlo en un formato de lista con imagenes de cada uno de los jugadores etc...

	Podriamos hacer componentes para cada uno de los elementos de esta lista para poder mostrar la imagen con su nombre y hasta con que pie pega el jugador.

	Es algo muy clásico y un componente es perfecto para eso.

2. Dar estilos
	Muchas veces hemos tenido que hacer un título, una descripción, algo dentro de nuestra aplicación y que es algo que se tiene que repetir siempre igual por ejemplo un title como se menciono.
	Un título con con cierto font-size, padding, margin o directamente tiene cierto color etc...
	Podemos crear un componente que de esos estilo a la información que le lleg ay ya lo tenemos, solamento lo tenemos que reutilizar y siempre se va a ver igual para toda la aplicación 

3. Cualquier cosa sin lógica

### Componentes Inteligentes - State Full

Contienen Logica de Negocio

Estos tiene un state un estado interno en su interior y se utilizan para:

1. Obtener datos
	Hacer llamadas al backend por ejemplo en angular utilizando nuestros servicios
	Esto se realiza con HttpClient 
	
2. Modificar el estado de la App
	Podemos modificar los datos que nos llega y esa información se va a compartir a través de la aplicación

	Ejemplo
	Podemos usar Angular desde RxJS hasta NgRx Store que es una libreria para manejar estados de la aplicación
	Tambien podemos usar Redux

3. Enviar información al backend
	Podemos modificar información de la BD, y esto se hacer por medio de enviar información a los end point

4. Etc
	Cualquier cosa que tenga logica de negocio es espectacular para esto


## Ciclo de Vida de los Componentes
Hay varios tipos pero se mencionaran los 3 más especificos que utilizamos en el día a día como programadores, en cada tipo tienen cierta logica:

1. Un Componente Nace
2. Un Componente Cambia, mientras se ejecuta
3. Un Componente Muere, se destruye

### ¿Qué hacer en cada ciclo?

#### Nace
- Inicializar valores
- Llamar a endpoints, para poder cargar información

Cuando un componente nace, tenemos que inicializarlo, tenemos que dejarlo listo con toda la información para que este pueda ser útil.

Por buena práctica, siempre tenga un estado vacío, para sus propiedades, para no tener problemas luego. 

Ya que más de una vez nos podemos llegar a encontrar de utilizar un objeto que todavia no tiene valor, es un undefined.

Por lo cual obtendriamos el clasico, no se puede utilizar la propiedad nombre de un objeto que es undefined.

Digamos que vamos hacer persona.nombre y persona no tiene valor, así inicializar los valores es buena práctica. 

#### Cambia

- Lógica de negocios
- Modificar valores
- Renderizar valores y sus cambios

Cuando un componente **cambia** generalmente que vamos hacer aquí, bueno la lógica de negocios, todo lo que tenga que ver con la funcionalidad del componente, tambien podemos modificar los valores, podemos modificar las propiedades de nuestro componente y cada vez que la modifiquemos esto se va a ver renderizado en pantalla y cada vez que se cambien tambien se va a ver ahí.

Conclusión
Inicializamos los valores cuando cambian
Luego los valores se renderizan en pantalla
Cuando los modificamos sus cambios se van a ver reflejados
Por eso se dice que Angular es una mezcla de MVC y MVVM

MVC Modelo Vista Controlador
Modelo contiene la información
Vista lo va a ver representado
Controlador lo modifica

Pero a su vez Angular tiene dual binding, nosotros vamos a tener una propiedad, esa propiedad la vamos a mostrar en la interfaz y desde la interfaz la podemos modificar afectando tambien el modelo.

Osea del Modelo va a la Vista y la Vista puede modificarlo y eso va al Modelo.

#### Muere
Cuando muere un componente vamos a tratar de hacer:

- Terminar cualquier conexión
- Liberar memoria

Termina cualquier conexión externa que tenga nuestro componente con la aplicación 

Esto se llama liberar memoria
Defendernos de los famosos memory leak

Más de una vez vamos a hacer una suscripción, por ejemplo un observable o un canal de información y si nuestro componente muere, esa suscribción tiene que morir, porque si no vamos a tener problemas de información


## ¿Porqué usar componentes?

### Reusabilidad

Ejemplo
Cada vez que queremos crear un title y que dicho título siempre se vea igual.
Vamos a suponer que no usamos componentes, si no cosas directamente de JavaScript, HTML y CSS,.
Cada vez que queramos representar el title, podriamos aplicar una clase.

Pero que pasa si ese título además tiene un formato diferente y cada vez que utilizamos ese title hay que aplicar ese formato diferente.

Además de crear un método reutilizable y lo vamos llamando cada vez que queremos meter esto, se nos complica.

Entonces con un componente lo podemos solucionar muy fácilmente, porque al crear este componente y utilizarlo de una ya sabemos que va a funcionar igual en todos los lugares donde este se invoque.

### Escalabilidad 

Lo cual nos ayuda para la parte de reusabilidad. Simplificamos el código dejando toda la parte de esta lógica en un lugar chiquitito y lo podemos reutilizar. 

Porque escabilidad, porque el día de mañana digamos dicen el título debe ser de otro color, tiene otro formato, toLowerCase.

Si no lo hicieramos con componentes, si no que lo hacemos de otra manera, tendremos que ir a todos los lugares donde queremos aplicar este tipo de formato y tipo de estilo, y modificarlo, si la aplicación es grande, que díficil.

Con un componente solamente vas a ese componente tocas un poco de ese código y ya lo tenemos funcionando.

### Independencia (Atomicidad)

Es la capacida que cada componente, tiene que se independiente uno de otro. Cada uno tiene que encargarse de un pedacito de lógica.

Porque el tema de atomicidad, porque entra más pequeño es mejor todo lo que vimos anteriormente, reusabilida y escalabilidad. 

Cuanto más pequeña la lógica que nuestro componente va a hacer foco, mejor para nostros ampliando los dos items anteriores.

## Cuanto más chiquito + reusable y mantenible

Hablamos justamente de atomicidad.

Contenedor App
_________________________________________________________
|	 ___		 ___   ___   ___                         | 
|	|___| logo	|___| |___| |___| opciones de navegación |	
|________________________________________________________|
|	Barra de navegación									 |
|	 _______________________________________________	 |
|  	|   contenedor articulo							|	 |
|	|	 ______________								|	 |
|	|   |Título		   |							|	 |
|	|   |______________|							|	 |
|	|												|	 |
|	| 	 _______________________________			|	 |
|	|   |Descripción		    		|			|	 |
|	|	|_______________________________|			|	 |
|	|_______________________________________________|	 |
|														 |
|	Contenedor Dashboard								 |
|________________________________________________________|


Podemos pensar la barra de navegación como un componente, pero esta tiene muchos componentes a dentro.  

Vamos a crear un componente(State Less) logo, que se encarge de darle un estilo diferente a la imagen, de darle una marge, padding, tipo de efecto.

Las opciones de navegación, tambien vamos a aplicar cada una de sus opciones diferentes. Pueden ser ahora un componente (State Full) que tengan links que hagan un tipo de formato, que llamen al backend por ejemplo, que hagan tracking que es algo interesante y comun el día de hoy, que es que cada vez que yo clickeo mandamos la información de que es lo que se le da clic o a donde fui etc. a una BD y asi conseguir estadísticas como están usando nuestra aplicación los usuarios

## Atomicidad

Átomo	-->	Molécula	-->	Organismo	-->	Ecosistema	


Debemos pensar que nuestro componente, va a teer la funcionalidad más pequeña que pueda llegar a tener y eso es un **atomo** dentro de nuestro aplicación. Eso es un componente.

El conjunto de componentes lo podemos llamar **moléculas**,  una molécula es un conjunto anidado de componentes, que entre si forman una cierta funcionalidad.

A la vez podemos ener un **organismo**, el cual es un conjunto de moléculas.

Por ende un **ecosistema** es un conjunto de organismos.

Un conjunto de ecosistemas es nuestra **Aplicación**.

### Ejemplo como va escalando

#### Átomo
 ______
|Buscar|	Esto es un boton
|______|

#### Molécula 
__________________
|		 _______  |
|input  |Buscar | |
|		|_______| |	
|_________________|

Se introduce un poco más de funcionalidad y unirlo con otro componente, como un input, ahora escribimos en el input y cuando hacemos clic, buscamos sobre lo que el usuario hay escrito en ese input. Estamos unificando dos componentes cada uno se encarga de una funcionalidad en especifico.

#### Organismo
________________________
|proveedor de internet 	|
|  _________________	|
| |		   _______  |	|
| |input  |Buscar | |	|
| | 	  |_______| |	|
| |_________________|	|
|	 					|
|  provvedro de energia |
|  _________________	|
| |		   _______  |	|
| |input  |Buscar | |	|
| | 	  |_______| |	|
| |_________________|	|
|_______________________|

Conjunto de moleculas, en este caso vamos a obtener un formulario, este formulario esta compuesto ya por varias moleculas que a su vez, tienen varios componentes. El input y buscar son las moleculas, pero dentro lo estamos utilizando dentro ya con otra molecula que es lo de abajo, el proveedor de internet. Por lo cual ya formamos nuestro organismo conjunto de moleculas.

#### Ecosistema
________________________________________________________
| ______________________	 ________________________	|
||proveedor de internet |	|						 |	|
||  _________________	|	| soport técnico		 |	|
|| |		_______  |	|	|  ____________	  ______ |	|
|| |input  |Buscar | |	|	| |Enviar email| |Llamar||	|
|| | 	   |_______| |	|	| |____________| |______||	|	
|| |_________________|	|	|						 |	|
||	 					|	| te llamamos NUMERO	 |	|
|| provvedro de energia |	|________________________|	|
||  _________________	|								|
|| |		_______  |	|								|
|| |input  |Buscar | |	|								|
|| |   	   |_______| |	|								|
|| |_________________|	|								|
||______________________|								|
|_______________________________________________________|


El ecosistema un conjunto de organismos, a la izquierda un formulario y a la derecha por ejemplo la funcionalidad de contactar soporte técnico, que podemos llamar, enviar un email o poner un te llamamos y utilizar un input.

Todos estos componentes son lo mismo, el input es un componente siempre, el button es un componente, lo unico que cambia es el texto.

O tambien puede cambiar que formato acepta ejemplo el del lado izquierda puede aceptar un string, pero el de la derecha numeros. 

Es el mismo componente, solamente que lo hacemos lo más generico posible para poder atacer varias cosas, entonces aumentamos la reusabilidad.

Nuevamente se encarga de una funcionalidad en específico, que es la de recolectar por ejemplo en este caso el input información del usuario y el boton es solamente, mostrar un texto y cuando se haga clic, llame una funcionalidad extra como puede ser llamar al backend utilizando la información del input.




