import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { LoginComponent } from './login/containers/login.component';
import { PublicService } from './public.service';

@NgModule({
  imports: [
    SharedModule,
    PublicRoutingModule // debe estar siempre al final
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent],
  exports: [],
  providers: [
    PublicService // Disponible dentro del modulo
  ],
})
export class PublicModule {
  constructor() { }
}
