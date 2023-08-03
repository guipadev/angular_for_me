import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatTabsModule,
    MatCardModule
  ],
  declarations: [
    LoginBoxComponent,
    NotFoundComponent
  ],
  exports: [ // Accesible al resto de la app
    HttpClientModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    LoginBoxComponent,
    NotFoundComponent
  ],
  providers: [],
})
export class SharedModule {
  constructor() { }
}
