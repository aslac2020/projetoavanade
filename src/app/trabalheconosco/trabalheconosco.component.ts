import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'avanade-trabalheconosco',
  templateUrl: './trabalheconosco.component.html',
  styleUrls: ['./trabalheconosco.component.css']
})
export class TrabalheconoscoComponent  implements OnInit {
  exibirFormulario: boolean = true;

  cadastrar(){
    alert('Cadastro efetuado com sucesso!');
  }

  constructor() { }

  ngOnInit(): void {
  }

 }
