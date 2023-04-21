import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Cuando utilizamos la directiva ngModel debemos importar la clase 'FormsModule'
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
