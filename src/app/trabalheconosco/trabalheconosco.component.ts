import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avanade-trabalheconosco',
  templateUrl: './trabalheconosco.component.html',
  styleUrls: ['./trabalheconosco.component.css']
})
export class TrabalheconoscoComponent  implements OnInit {

  exibirFormulario: boolean = true;
  nome: string = 'Ótima';
  newName: string;

  cadastrar(){
    alert('Cadastro efetuado com sucesso!');
  }

  constructor() { }

  ngOnInit(): void {
  }

   Opniao(){
     this.nome = this.newName
   }

   opniao : string = 'muito boa'
 }
