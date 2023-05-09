import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.css']
})
export class RestarComponent {
@Input() cont=0;
@Output() respuesta:EventEmitter<number>= new EventEmitter();

constructor()  { 

}


restar(): void{
this.cont--;
console.log(this.cont);
  this.respuesta.emit(this.cont);
  
  
}
}