import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent  {
@Input() cont =0;
@Output() respuesta:EventEmitter<number>= new EventEmitter();

constructor()  { 

}


sumar(): void{

  this.cont++;
  console.log(this.cont);
  this.respuesta.emit(this.cont);
}
}
