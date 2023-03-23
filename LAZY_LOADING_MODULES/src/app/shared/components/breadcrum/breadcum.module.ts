import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumComponent } from './breadcrum.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumComponent],
  providers: [],
})
export class BreadCrumModule {}
