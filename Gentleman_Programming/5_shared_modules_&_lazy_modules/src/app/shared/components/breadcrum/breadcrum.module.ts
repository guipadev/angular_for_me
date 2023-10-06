import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumComponent } from './breadcrum.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule], // RouterModule uso en el HTML
  exports: [BreadcrumComponent], // Lo exportamos porque tambien lo vamos usar en distintas partes
  declarations: [BreadcrumComponent],
  providers: [],
})
export class BreadCrumModule {}
