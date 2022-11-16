import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {
public personas!: Array<Persona>;
  constructor( private _service: PersonaService) { }

  ngOnInit(): void {
    this._service.getPersonas().then(res=>{
      this.personas = res;
      console.log(res);
    });
  }

}
