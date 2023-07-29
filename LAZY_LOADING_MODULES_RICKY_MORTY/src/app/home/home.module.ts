import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BreadCrumModule } from '../shared/components/breadcrum/breadcum.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, BreadCrumModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class HomeModule {}
