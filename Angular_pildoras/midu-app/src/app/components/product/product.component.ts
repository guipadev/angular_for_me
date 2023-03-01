import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  // @Input() title: string = ''; // input en especifico

  // recibira todo un product
  @Input() product!: Product; // ! para indicar que en algun momento se inicializarar
  
  // Pero es buena practica inicializar los valores
  /*
  @Input() product: Product = {
    title: '',
    price: 0,
    images: [],
    id: 0
  };
  */
}
