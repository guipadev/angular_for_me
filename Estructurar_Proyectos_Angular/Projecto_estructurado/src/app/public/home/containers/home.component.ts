import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // accesible modulo del servicio
  characters: any;
  continents: any;

  constructor(private publicService: PublicService) { }

  ngOnInit() {
    this.getCharacters();
    this.getContinents();
  }

  getCharacters() {
    this.publicService.getCharacters().subscribe(
      response => this.characters = response, // llega rta asigna var characters
      error => console.log(error)

    )
  }
  getContinents() { // nos subscribimos para recibir el observable
    this.publicService.getContinents().subscribe(
      response => this.continents = response, // llega rta asigna var characters
      error => console.log(error)

    )
  }

}
