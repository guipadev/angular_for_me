import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midu-app';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle() {
    this.title = "cambiado";
  }

  // Cuando algo ya se ha renderizado, podemos a llamar a ejecutar algo... trigger... Va a devolver tipo de datos de la interfaz
  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
