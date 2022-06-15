//Archivo a rutas

import { RouterModule,Routes } from "@angular/router";
import { ContactoComponent } from "./Components/contacto/contacto.component";
import { InicioComponent } from "./Components/inicio/inicio.component";
import { ProyectosComponent } from "./Components/proyectos/proyectos.component";
import { SobreMiComponent } from "./Components/sobre-mi/sobre-mi.component";

const app_routes: Routes=[
    {path: 'inicio', component: InicioComponent},
    {path: 'sobreMi', component: SobreMiComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', pathMatch: 'full', redirectTo:''}

];

//Para usar rutas con hash #; colocar  RouterModule.forRoot(app_routes,{useHash:true});
export const app_routing = RouterModule.forRoot(app_routes);