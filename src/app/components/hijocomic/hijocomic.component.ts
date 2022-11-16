import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-hijocomic',
  templateUrl: './hijocomic.component.html',
  styleUrls: ['./hijocomic.component.css']
})
export class HijocomicComponent implements OnInit {
@Input() comic!: Comic;
@Input() index!: any;
@Output() seleccionarFavorito : EventEmitter<any> = new EventEmitter();
@Output() modificarComic: EventEmitter<any> = new EventEmitter();
@Output() eliminarComic: EventEmitter<any> = new EventEmitter();
marcarFavorito(): void{
this.seleccionarFavorito.emit(this.comic);
}
deleteComic(): void {
  this.eliminarComic.emit(this.index);
}
updateComic(): void{
  this.modificarComic.emit(this.index);
}
  constructor() { }

  ngOnInit(): void {
  }

}
