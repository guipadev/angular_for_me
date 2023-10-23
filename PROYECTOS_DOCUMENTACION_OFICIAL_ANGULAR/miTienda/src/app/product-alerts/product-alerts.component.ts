// Para configurar la ProductAlertsComponentrecepción de datos de productos, primero importe Inputdesde @angular/core.
import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // El decorador indica que el valor de la propiedad pasa desde el padre del componente, .@Input()@Input()ProductListComponent
  @Input() product!: Product;

}
