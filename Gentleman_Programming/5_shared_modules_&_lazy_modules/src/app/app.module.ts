import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
//import { LocationModule } from './location/location.module';
//import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule], // se declara aqui los modulos
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
