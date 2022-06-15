import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component'

@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
   InicioComponent,
   ContactoComponent,
   SobreMiComponent,
   ProyectosComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
