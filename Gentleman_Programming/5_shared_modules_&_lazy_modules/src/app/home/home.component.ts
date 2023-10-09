import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Character } from './models/character.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Usamos la clase Character para tipar characters
  characters: Character[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCharacters().subscribe((response) => {
      // Los personajes están en la propiedad "results"
      this.characters = response.results;
    });
  }
}
