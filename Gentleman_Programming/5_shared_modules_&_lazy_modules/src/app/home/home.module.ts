import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BreadCrumModule } from '../shared/components/breadcrum/breadcrum.module';
import { RouterModule, Routes } from '@angular/router';

/**
 * Nos faltaria es nuestra propia ruta apuntando a este componente, en este caso vamos a crear
 * una constante, aunque seria mejor tenerlo en nuestro propio archivo de routing, pero al ser
 * una pequeña ruta vamos a realizarlo en una constante con las rutas
 */
const routes: Routes = [
  {
    path: '', // cuando ruta esta vacia renderia el componente LocationComponent
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, BreadCrumModule, RouterModule.forChild(routes)], // Especificamos que es una ruta hija RouterModule
  exports: [],
  declarations: [HomeComponent], // declaramos aquí nuestro componente y quitamos de app.module
  providers: [],
})
export class HomeModule {}
