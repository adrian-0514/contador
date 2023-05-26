import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  public historial: string="historial"
  public borrar : boolean = false
  public panelH:boolean=false;

    mostrarPanel(x:Boolean){
      this.panelH=!this.panelH
    }

    historial_(valor:string){
      this.borrar=false;
      this.historial = valor;
    }

    borrarH(){
      this.historial="";
      this.borrar=true;
    }


   
    



}
