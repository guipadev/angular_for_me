import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectoComponentComponent } from './proyecto-component/proyecto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ModificaComponentComponent } from './modifica-component/modifica-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

// Creación de rutas
const appRoutes:Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'proyectos', component: ProyectoComponentComponent},
  {path: 'quienes', component: QuienesComponentComponent},
  {path: 'contacto', component: ContactoComponentComponent},
  {path: 'actualiza/:id', component: ActualizaComponentComponent},
  {path: 'modifica/:id', component: ModificaComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorPersonalizadoComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectoComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ModificaComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // Uso de esta const para rutas de la página
    HttpClientModule
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosService,
    DataService,
    LoginService
  ], // Registrar servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
