import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
