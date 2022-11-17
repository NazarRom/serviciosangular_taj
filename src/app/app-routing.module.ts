import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { EmpleadosplantillaComponent } from './components/empleadosplantilla/empleadosplantilla.component';
import { EmpleadosroutingComponent } from './components/empleadosrouting/empleadosrouting.component';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { HomeComponent } from './components/home/home.component';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"padrescomic", component: PadrecomicsComponent},
  {path:"inyeccion", component:ComicsinyeccionComponent},
  {path:"personas", component:PersonasapiComponent},
  {path:"empleadosalario", component:EmpleadossalarioComponent},
  {path:"empleadosoficio", component:EmpleadosoficioComponent},
  {path:"plantilla",component:EmpleadosplantillaComponent},
  {path:"emprouting", component:EmpleadosroutingComponent},
  {path:"detalles/:idEmpleado", component:DetallesempleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
