# ¿Qué son los Módulos de Angular y cómo usarlos, a ver si lo hacías BIEN...

Angular es **Modularizado** por ejemplo en una red social, encontraremos la parte de mensajes, parte de new feeds, y cada cosa esta por separado, se puede identificar muy fácil la funcionalidad

En Angular un módulo es una colección de cosas necesaria para poder llevar a desarrollo una funcionalidad, osea **1 módulo = 1 funcionalidad**

Todos aquellos **componentes** **servicios** y archivos de **configuraciones** que se necesiten para que esa **funcionalidad** funcione, tendremos que meterla dentro de nuestro **Modulo** esa es la principal idea, se tendra todo lo necesario para brindar dicha funcionalidad

## Ejemplo Modulo en la vida real

Un armario seria un modulo
Al tener un armaria tiene varias cajoneras
En un cajon puede haber medias, otro cajon camisas y otro pantalonetas
Cada cajon se encarga de brindar una funcionalidad

Nuestra aplicación que seria nuestro armario, va a tener cada cajon que seria neustros modulos y cada uno de estos modulos va a contener nuestras medias, pantalones y short esa es la principal idea. 

Esto se hace porque va a contener todo lo necesario para brindar dicha funcionalidad


Para que nuestra aplicación funcione dentro de Angular, esta va a tener **componentes** pero a su vez tambien tiene **servicios** 

## Existen 3 tipos de Modulos

1. ### El normal, es el módulo por funcionalidad
	Que indicamos anteriormente. Cada modulo va a contener todo lo necesario para una cierta funcionalidad funcione


2. ### Core Module - Modulo Core
	Va a contener todo lo necesario, **fundamental** para nuestra aplicación funcione correctamente

	Un **Core Module** es cietamente lo mismo que un **Modulo normal** pero todo aquello para que nuestra aplicación funcione.

	#### Ejemplo Computador
	- Tuvieramos una **PC** de escritorio, esta seria nuestra **aplicación**. Pero esta no funciona si no tiene:
	- **Main Board** seria nuestro **Módulo Core**.
	- RAM, DDHH, CPU, GPU, estos serian nuestros **componentes**, **servicios** y **módulos**. Estas representan cada unas de las cosas que si o si debe tener la aplicación y estan dentro de los **core module**.


	#### Ejemplo Red Social
	Tiene un apartado de mensajes, new feeds, login. Este último seria el modulo de autenticación, cual permite logearnos en la aplicación, controla quien decimos ser, para poder ingresar a la App.
	Esto va a ir dentro del **Core Module** ya que es un buen lugar para meter los servicios de autenticación.

	Hay personas que lo tiene en otro modulo aparte, pero piense que vamos a indagar bastante en esta información. Cuando vemos que es algo repetitivo, que se usa en toda la aplicación, el mejor lugar para ponerlo es el **core module**.

	#### Ejemplo Angular Material
    El modulo Angular es algo que se utiliza en toda la aplicación y se puede meter dentro del **core module** osea hay modulos dentro de otros modulos.
    
    Los modulos pueden importar otros modulos, por lo cual podemos meter un modulo, dentro de un modulo y este dentro de otro modulo, etc...
    
3. ### Shared Modulo - Modulo Compartido
    Son aquellos que justamente van a contener cualquier tipo de lógica **reutilizable**

    Porque no se mete dentro del **core module** si es reutilizable?
    
    Puede llegar a pasar que sea algo que no sea primordial para la aplicación, osea en vez de agarrar y utilizar todo lo de **Angular Material** solamente utilizamos algunas cosas.

    Por ejemplo un **input** o solamento usamos un modal de Angular Material. Osea estas cosas pueden que vayan a una cierta funcionalidad.

    Lo que utilicemos en el servicio de mensajeria, no es lo mismo que utilizaremos en el servicio de new feed.

    Entonces para que se va a poner en el core module, es algo no necesario.

    Aquí es cuando viene el concepto de **modulo compartido** osea **shared**
    Lo metemos en un modulo compartido, porque sabemos que en un futuro lo vamos a reutilizar y hay podemos meter solamnete en aquellos modulos que nos importe.

    #### Ejemplo Caja de Herramientas
    Esta tiene un destornillador
    Este destornillador va a tener diferentes cabesales para dicho destornillador
    Hay tenemos un modulo de destornillador

    Vamos a tener llaves inglesas, etc.. cada cosa funciona para algo diferente
    Tiene diferentes funcionalidades

    No solamente usamos un destornillador para ajustar nuestro armario, tambien lo podemos usar ajustar la mesa, la licuadora y muchas otras cosas

    Es algo que se puede **reutilizar** justamente y es algo compartido, una funcionaliad que puede aplicar en muchos lugares distintos

    1 funcionalidad a N lugares

    Esta es la magia que tiene el Shared Module
    
## Lazy Loading

Carga perezosa, que es la capacidad de poder cargar **on demand** algo.

Ejemplo 
Normalmente se podria usar para un slider de imagenes, el cual muestra una imagen por ves
Este carrusel podria tener 300 imagenes, por lo cual no seria conveniente cargas las 300 imagenes en memoria y luego que el slider pase una imagen una por una

En este caso se aplica el concepto de **lazy loading** carga perezosa, en el cual vamos agarrar una imagen y la que vamos a mostrar es la que se carga en memoria, a medida que esas imagenes se van solicitando para ir de una a la otra, cada una de estas imagenes van a ser pedidas **on demand** y cargadas en memoria


Lo mismo podemos hacer con otros módulos y es ultra fácil. Ejemplo vamos a tener el modulo de aplicación, generalmente dividimos la aplicación en dos secciones, una parte **pública** y una parte **privada** la idea de esto seria que la parte pública, es lo que siempre va a estar en memoria, es lo primero que va a ver el usuario.

Parte pública vamos a ver por ejemplo lo que es registrarse, el login y luego en la parte privada ya tenemos nuestra aplicación.

El tema es que vamos autenticarnos en la parte pública y si somos quien decimos ser, ahí vamos a cargar el resto de información de la aplicación o almenos la primer cosas que tenemos que mostrar, por ejemplo ese dashboard.

Esto lo hacemos por varias razones:

1. Nuestra aplicación va hacer super rápida porque solamente va a cargar un login, el resto de la apliación no existe todavía. Entonces la experiencia de usuario a la primera carga sera espectacular.

2. Seguridad, como va a ser un hacker o quien sea en meterse a nuestra aplicación, si ni siquiera existe la aplicación todavia. Pues nunca le hemos pasado esa información.

## Nosotros generalmente como sabemos en qué modulo estamos 
Lo que vamos a utiliza es el **Angular Router**

Osea tenemos una ruta que es la **URL** y esta va estar asignada a un cierto **Módulo** y así es como nosotros sabemos cómo hacer **lazy loading** que module debemos cargar de forma perezosa

Cuando x **URL** aparezca este x **Módulo** es el que vamos a cargar en memoria, esa seria la principal idea

    Cargar el modulo de acuerdo al angular router, cada url que se diriga se carga el modulo.