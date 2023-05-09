import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent {
  public contador: number= 100;
  constructor()  { 

   
  }
  
  
  renderizar(valor:number){
    this.contador=valor;
  }

}

