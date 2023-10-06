import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  characters = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCharacters().subscribe((response) => {
      this.characters = response.results; // Los personajes están en la propiedad "results"
    });
  }
}
