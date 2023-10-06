import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  locations: any[] = [];

  constructor(private apiService: ApiService) {} // Usa la inyección de dependencias y tipa el servicio correctamente

  ngOnInit() {
    this.apiService.getLocations().subscribe((response) => {
      this.locations = response; // Asigna la respuesta directamente a locations
    });
  }
}
