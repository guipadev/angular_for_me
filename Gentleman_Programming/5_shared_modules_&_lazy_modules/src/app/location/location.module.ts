import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location.component';
import { BreadCrumModule } from '../shared/components/breadcrum/breadcrum.module';

/**
 * Nos faltaria es nuestra propia ruta apuntando a este componente, en este caso vamos a crear
 * una constante, aunque seria mejor tenerlo en nuestro propio archivo de routing, pero al ser
 * una pequeña ruta vamos a realizarlo en una constante con las rutas
 */
const routes: Routes = [
  {
    path: '', // cuando ruta esta vacia renderia el componente LocationComponent
    component: LocationComponent,
  },
];

/**
 * LocationModule solamente está encargandose de tener solamente un componente
 * para despues usarlo en otro lado
 */
@NgModule({
  imports: [CommonModule, BreadCrumModule, RouterModule.forChild(routes)], // Importamos el modulo aquí. RouterModule rutas hijas
  exports: [],
  declarations: [LocationComponent], // declaramos aquí nuestro componente y quitamos de app.module
  providers: [],
})
export class LocationModule {}
