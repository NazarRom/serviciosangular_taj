import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
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
  {path:"empleadosoficio", component:EmpleadosoficioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
