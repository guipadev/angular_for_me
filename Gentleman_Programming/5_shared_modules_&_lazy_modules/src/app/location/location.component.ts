import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from './models/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];

  //Inyección de dependencias y tipa el servicio correctamente
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getLocations().subscribe((response) => {
      this.locations = response.results; // Asigna la respuesta directamente a locations
    });
  }
}
