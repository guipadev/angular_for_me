import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Luego en la componente definimos por ejemplo un vector con los números del 1 al 7 ('app.component.ts'):
 */
export class AppComponent {

  vector = [1,2,3,4,5,6,7];

}
