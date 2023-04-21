Hemos dicho que Angular es un framework para el desarrollo de aplicaciones web de una sola página. 
Una situación muy común es tener que almacenar en un servidor de internet los datos que se ingresan en la aplicación Angular.

Existen muchas tecnologías para procesar los datos que envía y recibe la aplicación Angular, 
una de la más extendidas en el lenguaje PHP y mediante este acceder a una base de datos MySql.

En este concepto dejaremos en forma muy clara todos los pasos que debemos desarrollar tanto en el cliente (aplicación angular) 
como en el servidor (aplicación PHP y MySql)

### Problema
Confeccionar una aplicación que permita administrar una lista de artículos, cada artículo almacena el código, descripción y precio. 
Se debe poder agregar, borrar y modificar los datos de un artículo almacenados en una base de datos MySQL 
y accedida con una programa en PHP.

Recordemos que la propuesta del framework de Angular es delegar todas las responsabilidades de acceso a datos (peticiones y envío de datos) 
y lógica de negocios en otras clases que colaboran con las componentes. 
Estas clases en Angular se las llama servicios.

Crearemos el servicio 'articulos' para ello utilizamos Angular CLI: ng generate service articulos


### crear una base de datos en MySQL llamada 'bd1' y crear la siguiente tabla:

CREATE DATABASE IF NOT EXISTS bd1 CHARACTER SET utf8 COLLATE utf8_general_ci

USE bd1;
CREATE TABLE articulos (
  codigo int AUTO_INCREMENT,
  descripcion varchar(50),
  precio float,
  PRIMARY KEY (codigo)
)

SELECT * FROM bd1.articulos;

INSERT INTO bd1.articulos 
(codigo, descripcion, precio) VALUES
(null, 'Botas de cuero', 1000);

INSERT INTO bd1.articulos 
(codigo, descripcion, precio) VALUES
(null, 'Pala de metal', 500),
(null, 'Pica de hierro', 3100),
(null, 'Manguera plastica', 20);


### Consultas end point
GET - http://localhost:8080/api/v1/recuperartodos


POST - http://localhost:8080/api/v1/alta
{
    "descripcion": "Barreton hierro", 
    "precio": "100"
}

DELETE - http://localhost:8080/api/v1/baja/5

GET - http://localhost:8080/api/v1/seleccionar/4

PUT - http://localhost:8080/api/v1/modificacion/4
{
    "descripcion": "Balde aluminio", 
    "precio": "500"
}