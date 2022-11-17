import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PadrecomicsComponent } from './components/padrecomics/padrecomics.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicServices } from './services/comic.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component'
import { PersonaService } from './services/persona.service';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { EmpleadosplantillaComponent } from './components/empleadosplantilla/empleadosplantilla.component';
import { PlantillaService } from './services/plantilla.service';
import { EmpleadosroutingComponent } from './components/empleadosrouting/empleadosrouting.component';
import { DetallesempleadoComponent } from './components/detallesempleado/detallesempleado.component';
@NgModule({
  declarations: [
    AppComponent,
    PadrecomicsComponent,
    HijocomicComponent,
    MenuComponent,
    HomeComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    EmpleadosplantillaComponent,
    EmpleadosroutingComponent,
    DetallesempleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [ComicServices,PersonaService,EmpleadosService,PlantillaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
