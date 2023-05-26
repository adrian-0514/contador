import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  @Output() mosHist: EventEmitter<boolean>= new EventEmitter();
  @Output() hist: EventEmitter<string>= new EventEmitter();
  @Input() borrarH = false;

  public formula: string = "";
  public Resultado: string = "coloque su formula";
  public display: string = "0"; // calcu
  private formular = ""; // calcu
  public resul = "0"; // calcu
  public error: boolean = false;
  public tipo : boolean = false;
  public nombre : string = "CTF";
  private valAnterior : string = "";
  private historial : string = "";
 


  constructor() { }

  ngOnInit(): void {

  }
  esNumero(val: string){
    return /^[0-9-.]+([.][0-9]+)?$/.test(val);
  }
  sustraer(x:number){
    return this.display.charAt(this.display.length - x);
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
    if (valor=="%"){
     let x = 1;
     this.valAnterior="";
      while (this.esNumero(this.sustraer(x)))   {
    this.valAnterior=this.sustraer(x)+this.valAnterior;
   
        x++;
      }
      this.display = this.display.substring(0, this.display.length + 1 - x);
      valor = (eval(this.valAnterior)/100).toFixed(3).toString();

    }
    if(valor=="π"){
      valor=Math.PI.toFixed(4);
      let c=this.display.slice(-1);
      if (c!="("&& c!="+" && c!="-" && c!="/" && c!="*" && c!="d" && c!="." && this.display!=""){
      valor = "*" + valor;
    }
  }
  if(valor=="±"){
    let x = 1;
    this.valAnterior="";
     while (this.esNumero(this.sustraer(x)))   {
   this.valAnterior=this.sustraer(x)+this.valAnterior;
  
       x++;
     }
     this.display = this.display.substring(0, this.display.length + 1 - x);
     valor = (eval(this.valAnterior)* -1).toString();
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
      this.resul = eval(this.display.replace("mod", "%"));
    } catch {
      this.resul = "error ";
      this.error = true;
    }

    this.display = this.formular + "\n" + this.resul;
    this.hayHistoria();
    this.historial = this.historial+ "\n" +this.formular + " = " + this.resul;
   this.mostrarHistoriar();
    


  }

  cambiar(){
    this.tipo=!this.tipo;
    if(this.tipo){
      this.nombre="STD";
    }else{
      this.nombre="CTF";
    }
  }

  cambiarpanel(){
this.mosHist.emit(true);
  }

  mostrarHistoriar(){
    this.hist.emit(this.historial);

  }

  hayHistoria(){
    if(this.borrarH){
      this.historial="";
      this.borrarH=false;
    }
  }
  
 

}
