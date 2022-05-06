import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaractEmpleadoComponent } from './caract-empleado/caract-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaractEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
