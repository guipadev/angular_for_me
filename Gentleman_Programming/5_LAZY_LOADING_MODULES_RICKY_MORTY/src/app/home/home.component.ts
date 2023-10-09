import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  characters: any[];
  constructor(private apiService: ApiService) {
    this.characters = [];
  }

  ngOnInit(): void {
    this.apiService
      .getCharacters()
      .subscribe((response) => (this.characters = response));
  }
}
