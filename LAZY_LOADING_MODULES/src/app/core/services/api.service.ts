import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _apiUrl = `https://rickandmortyapi.com/api`;
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http
      .get(`${this._apiUrl}/character`)
      .pipe(map((response: any) => response.results));
  }

  getLocations() {
    return this.http
      .get(`${this._apiUrl}/location`)
      .pipe(map((response: any) => response.results));
  }
}
