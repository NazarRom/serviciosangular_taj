import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicServices } from 'src/app/services/comic.service';
@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css'],
})
export class ComicsinyeccionComponent implements OnInit {
  public comics!: Array<Comic>; //array del modelo
  //en los constructores, solamente se realiza la inversion de control
  //los objetos se suelen utilizar dentro de init()
  constructor(private _services: ComicServices) { }

  ngOnInit(): void {
    this.comics = this._services.getComics();
  }

}
