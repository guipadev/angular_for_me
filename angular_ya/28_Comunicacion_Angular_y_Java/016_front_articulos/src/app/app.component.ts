import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';
import { Articulo } from './models/articulo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articulos: Articulo[] = [];

  // var indica si se guarda un nuevo artículo o está actualizando uno existente
  guardandoNuevoArticulo = true;

  // objeto que almacena los datos del artículo a guardar o actualizar
  articuloForm = { codigo: 0, descripcion: '', precio: 0 };

  /*
  Recuperación de todos los registros
  Inmediatamente se inicia la aplicación Angular se crea el objeto de la clase 'AppComponent'
  (nuestra única componente), en esta clase debe llegar al constructor el objeto de la clase 'ArticulosService':
  La clase ArticulosService está creada en el archivo 'articulos.service.ts':
  En ningún momento creamos un objeto de ésta clase, sino el framework de Angular se encarga de esto.
  */
  constructor(private articuloService: ArticulosService) {}

  ngOnInit(): void {
    this.listarArticulos();
  }

  listarArticulos(): void {
    this.articuloService.listarTodosLosArticulos().subscribe(
      (response) => {
        this.articulos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  guardarArticulo(): void {
    if (this.guardandoNuevoArticulo) {
      const nuevoArticulo: Articulo = {
        codigo: this.articuloForm.codigo,
        descripcion: this.articuloForm.descripcion,
        precio: this.articuloForm.precio,
      };

      this.articuloService.guardarArticulo(nuevoArticulo).subscribe(
        (response) => {
          console.log(response);
          this.listarArticulos();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      const detallesArticulo: Articulo = {
        codigo: this.articuloForm.codigo,
        descripcion: this.articuloForm.descripcion,
        precio: this.articuloForm.precio,
      };

      this.actualizarArticulo();
    }

    // restablecer el formulario
    this.articuloForm = { codigo: 0, descripcion: '', precio: 0 };
    this.guardandoNuevoArticulo = true;
  }

  eliminarArticulo(codigo: number): void {
    this.articuloService.eliminarArticulo(codigo).subscribe(
      (response) => {
        console.log(response);
        this.listarArticulos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerArticuloPorId(codigo: number): void {
    this.articuloService.obtenerArticulosPorId(codigo).subscribe(
      (response) => {
        console.log(response);
        this.articuloForm = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizarArticulo(): void {
    const detallesArticulo: Articulo = {
      codigo: this.articuloForm.codigo,
      descripcion: this.articuloForm.descripcion,
      precio: this.articuloForm.precio,
    };

    this.articuloService
      .actualizarArticulo(this.articuloForm.codigo, detallesArticulo)
      .subscribe(
        (response) => {
          console.log(response);
          this.listarArticulos();
        },
        (error) => {
          console.log(error);
        }
      );

    // restablecer el formulario
    this.articuloForm = { codigo: 0, descripcion: '', precio: 0 };
    this.guardandoNuevoArticulo = true;
  }

  hayRegistros() {
    return true;
  }

  /*
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
  */
}
