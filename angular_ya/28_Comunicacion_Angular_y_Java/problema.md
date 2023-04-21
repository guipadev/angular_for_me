En este concepto dejaremos en forma muy clara todos los pasos que debemos desarrollar tanto en el cliente (aplicación angular) 
como en el servidor (aplicación PHP y MySql)

### Problema
Confeccionar una aplicación que permita administrar una lista de artículos, cada artículo almacena el código, descripción y precio. 
Se debe poder agregar, borrar y modificar los datos de un artículo almacenados en una base de datos MySQL 
y accedida con una programa en PHP.


Tenemos una serie de archivos PHP que reciben datos en formato JSON y retornan también un JSON.

- Archivo 'recuperartodos.php' retorna en formato JSON todos los artículos:
```
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select codigo, descripcion, precio from articulos");
  $vec=[];  
  while ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>
```

- Archivo 'alta.php' recibe los datos en formato JSON y los almacena en la tabla:
```
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"insert into articulos(descripcion,precio) values
                  ('$params->descripcion',$params->precio)");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>
```

- Archivo 'baja.php':
```
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();
  
  mysqli_query($con,"delete from articulos where codigo=$_GET[codigo]");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'articulo borrado';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>
```

- Archivo 'modificacion.php':
``
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"update articulos set descripcion='$params->descripcion',
                                          precio=$params->precio
                                          where codigo=$params->codigo");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>
```

- Archivo 'seleccionar.php':
```
<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $con=retornarConexion();

  $registros=mysqli_query($con,"select codigo, descripcion, precio from articulos where codigo=$_GET[codigo]");
    
  if ($reg=mysqli_fetch_array($registros))  
  {
    $vec[]=$reg;
  }
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?> 
```

- Archivo 'conexion.php':
```
<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","bd1");
  return $con;
}
?>
```



