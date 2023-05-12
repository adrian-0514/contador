import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestarComponent } from './componentes/restar/restar.component';
import { SumarComponent } from './componentes/sumar/sumar.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RestarComponent,
    SumarComponent,
    TituloComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
