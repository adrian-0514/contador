import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestarComponent } from './componentes/restar/restar.component';
import { SumarComponent } from './componentes/sumar/sumar.component';
import { TituloComponent } from './componentes/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    RestarComponent,
    SumarComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
