import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public formula:string="";
  public resultado:string="";


  constructor()  {  }

  ngOnInit(): void{

  }
  calcular(){
    let x=eval(this.formula);
    this.resultado =this.formula+"="+x;
    this.formula="";

  }
  
  retroceso(){
    this.formula=this.formula.substr(0,this.formula.length-1);
  }
  
 }
