import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PessoasComponent } from './pessoas/pessoas.component';
import { DiversidadeComponent } from './diversidade/diversidade.component';
import {MatButtonModule} from '@angular/material/button';
import { TrabalheconoscoComponent } from './trabalheconosco/trabalheconosco.component';
import {MatInputModule} from '@angular/material/input';
import { QuemsoueuComponent } from './quemsoueu/quemsoueu.component';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoasComponent,
    DiversidadeComponent,
    TrabalheconoscoComponent,
    QuemsoueuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
