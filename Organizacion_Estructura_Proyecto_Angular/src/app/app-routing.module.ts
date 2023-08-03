import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/shared/components/not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
      { path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule) },
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Refresh page in production, evit error
  exports: [RouterModule],
})
export class AppRoutingModule { }
