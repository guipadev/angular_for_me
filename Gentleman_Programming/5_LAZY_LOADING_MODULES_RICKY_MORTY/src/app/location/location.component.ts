import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  locations: any[] = [];
  ngOnInit(): void {
    this.apiService
      .getLocations()
      .subscribe((response) => (this.locations = response));
  }
}
