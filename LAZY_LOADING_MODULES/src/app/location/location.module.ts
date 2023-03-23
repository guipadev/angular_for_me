import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { BreadCrumModule } from '../shared/components/breadcrum/breadcum.module';
import { Routes, RouterModule } from '@angular/router';

// Buena practica, deberia tenerlo en nuestro propio archivo de routing
// Pero al ser una ruta pequeña, creamos una constante que tenga las rutas
const routes: Routes = [
  {
    path: '',
    component: LocationComponent, // Objeto que renderiza el componente
  },
];

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, BreadCrumModule, RouterModule.forChild(routes)], // Al ser una ruta fija usamos forChild
  exports: [],
  providers: [],
})
export class LocationModule {}
