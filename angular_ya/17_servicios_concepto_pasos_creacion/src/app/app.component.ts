import { Component } from '@angular/core';
import { ArticulosService } from './articulos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  articulos :any;

  // inyectar el objeto de la clase 'ArticulosService
  constructor(private articulosServicio: ArticulosService) { }

  ngOnInit() {
    this.articulos = this.articulosServicio.retornar();
  }
}
