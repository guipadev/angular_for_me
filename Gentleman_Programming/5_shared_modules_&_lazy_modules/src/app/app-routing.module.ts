import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
//import { HomeComponent } from './home/home.component';
//import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        // Indicamos que cuando se llegue a esta ruta, me cargue el componente
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        //component: HomeComponent,
      },
      {
        path: 'location',
        loadChildren: () =>
          import('./location/location.module').then((m) => m.LocationModule),
        //component: LocationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
