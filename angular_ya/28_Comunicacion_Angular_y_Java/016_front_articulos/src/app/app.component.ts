import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  articulos:any;

  art = {
    codigo:0,
    descripcion:"",
    precio:0
  }


  // Recuperación de todos los registros
  // Inmediatamente se inicia la aplicación Angular se crea el objeto de la clase 'AppComponent'
  // (nuestra única componente), en esta clase debe llegar al constructor el objeto de la clase 'ArticulosService':
  // La clase ArticulosService está creada en el archivo 'articulos.service.ts':
  // En ningún momento creamos un objeto de ésta clase, sino el framework de Angular se encarga de esto.
  constructor(private articulosServicio: ArticulosService) {}

  // método ngOnInit procede a llamar al método recuperarTodos
  ngOnInit() {
    this.recuperarTodos();
  }

  // El metodo 'recuperarTodos' tiene por objetivo utilizar el 'servicio' que llega al constructor para llamar al método 'recuperarTodos' del servicio propiamente dicho
  // El método 'recuperarTodos' de la clase 'ArticulosService' retorna un objeto de la clase 'HttpClient'.
  // Ahora debemos entender porque podemos llamar al método 'suscribe':
  // El método 'suscribe' recibe los resultados y procedemos a asignar a la propiedad 'articulos',
  // con esto, Angular se encarga de actualizar la página con todos los artículos recuperados.
  // El proceso de actualizar la página sucede en el archivo 'app.component.html
  recuperarTodos() {
    this.articulosServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  // El método 'alta' se encuentra codificado en el archivo 'app.component.ts' dentro de la clase 'AppComponent'
  // En este método procedemos a llamar al método 'alta' de la clase 'ArticulosService' y se le pasa como parámetro
  // la propiedad 'art' que almacena la descripción y precio del artículo que el operador acaba de ingresar por teclado.
  // recibe los datos de la respuesta JSON, mostrando un mensaje si la carga se efectuó correctamente:
  alta() {
    this.articulosServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        // También llamamos al método 'recuperarTodos' con el objetivo que se actualice la pantalla con los datos
        // actuales de la tabla 'articulos'.
        this.recuperarTodos();
      }
    });
  }

  // Llamamos al método 'baja' de la clase 'ArticulosService' y le pasamos como parámetro el código de artículo que queremos borrar.
  // Luego en el método 'baja' de la clase 'AppComponent' podemos mostrar un mensaje si la baja se ejecutó con éxito:
  baja(codigo:number) {
    this.articulosServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.articulosServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo:number) {
    this.articulosServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  }

}
