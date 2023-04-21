import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  articulos: any;
  paises: any;

  // definir propiedad en parámetros del constructor que inyecta cuando crea componente
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://scratchya.com.ar/vue/datos.php")
      .subscribe(
        resultado => {
          this.articulos = resultado;
        }
      );

      this.http.get("https://api.covid19api.com/summary")
      .subscribe(
        resultado => {
          this.paises = resultado;

        }
      );
  }

}
