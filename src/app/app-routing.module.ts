import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversidadeComponent } from './diversidade/diversidade.component';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { QuemsoueuComponent } from './quemsoueu/quemsoueu.component';
import { TrabalheconoscoComponent } from './trabalheconosco/trabalheconosco.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: DiversidadeComponent
  },
  {
    path: '',
    component : PessoasComponent
  },
  {
    path: '',
    component : TrabalheconoscoComponent
  },
  {
    path: '',
    component : QuemsoueuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
