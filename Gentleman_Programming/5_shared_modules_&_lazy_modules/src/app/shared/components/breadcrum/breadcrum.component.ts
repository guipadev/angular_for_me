import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css'],
})
export class BreadcrumComponent {
  // Propiedad de entrada para el título
  @Input() title?: string;

  // Propiedad de entrada para el título del botón
  @Input() titleButton?: string;

  // Definición de la propiedad link
  @Input() link?: string;
}
