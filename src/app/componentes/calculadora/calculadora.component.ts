import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public formula: string = "";
  public Resultado: string = "coloque su formula";
  public display: string = "0"; // calcu
  private formular = ""; // calcu
  public resul = "0"; // calcu
  public error: boolean = false


  constructor() { }

  ngOnInit(): void {

  }
  // calcu---------------------------
  // funcion queme va a mostrat un valor en el display
  mostrar(valor: string) {

    if (this.resul != "") {
      this.resul = "";
      this.display = this.formular;

    }
    if (this.display == "0") {
      this.display = "";
    }
    this.display = this.display + valor;
  }

  // no es de la calculadora
  calcular() {
    let x = eval(this.formula);
    this.Resultado = this.formula + "=" + x;
    this.formula = "";

  }


  retroceso() {
    this.formula = this.formula.substr(0, this.formula.length - 1);

  }

  limpiar() {
    this.formula = this.Resultado;

  }
  // calcu ---------------------------
  // borar todo del display
  AC() {
    this.display = "0";
    this.resul = "";
    this.formular = "";
  }
  // calcu ----------------------------------
  // borre el ultimo del display
  C() {
    if (this.formular.length > 0) {
      this.display = this.formular;
      this.resul = "";
      this.formular = "";
    }

    this.display = this.display.substr(0, this.display.length - 1)
    // this.display="0"; unas de tantas formas 

    this.display = (this.display == "") ? "0" : this.display;
  }
  // calcu -------------------------------
  // funcion que calcula y muestra en el display
  calcu() {
    this.formular = this.display;
    try {
      this.resul = eval(this.display);
    } catch {
      this.resul = "error ";
      this.error = true;
    }

    this.display = this.formular + "\n" + this.resul;


  }




}
