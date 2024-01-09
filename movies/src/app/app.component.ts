import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ApiService } from './services/api.service';
import { constantUri } from './utils/constantUri';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, LoginComponent],
})
export class AppComponent {
  constructor(private apiService: ApiService<any>) {
    const getConfig = { url: constantUri.tokenNew, params: constantUri.apikey };

    this.apiService.getService(getConfig).subscribe((val) => {
      console.log(val);
    });
  }

  title = 'movies';
}
