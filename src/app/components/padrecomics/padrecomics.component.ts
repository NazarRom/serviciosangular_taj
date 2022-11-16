import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicServices } from 'src/app/services/comic.service';
@Component({
  selector: 'app-padrecomics',
  templateUrl: './padrecomics.component.html',
  styleUrls: ['./padrecomics.component.css']
})
export class PadrecomicsComponent implements OnInit {
  public arrayComics!: Array<Comic>;
  public comicFavorito!: Comic;
  @ViewChild("cajatitulo") cajatitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion!: ElementRef;
  constructor(private _service: ComicServices) {
    
  }
  eliminarComic(event:number): void{
    this.arrayComics.splice(event,1);
  }
  insertarComic(): void {
    var titulo = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    var newComic = new Comic(titulo, imagen, descripcion);
    this.arrayComics.push(newComic);
  }
  //al modificar en el hijo recibimos index a modificar
  modificarComic(event: number): void {
    var titulo = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    this.arrayComics[event] = new Comic(titulo, imagen, descripcion);
  }
  //al seleccionar favorito en el hijo recibiremos un comic
  seleccionarFavorito(event: Comic): void {
    this.comicFavorito = event;

  }
  ngOnInit(): void {
    this.arrayComics = this._service.getComics();
  }

}
