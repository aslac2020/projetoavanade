import { Component,Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Pessoas} from '../models/pessoas'


@Component({
  selector: 'avanade-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})


export class PessoasComponent implements OnInit {

  exibirTable:  boolean = false;

  listaPessoas: Pessoas[] = [
  { foto: 'assets/images/foto1.jpeg' , name: 'Pedro', raca: 'Branca', email: 'pedro@gmail.com', telefone: '1196654-0375' },
  { foto: 'assets/images/foto2.jpeg' , name: 'Joice', raca: 'Branca', email: 'joice@gmail.com', telefone: '1198554-0578' },
  { foto: 'assets/images/foto3.jpeg' , name: 'Jorge', raca: 'Negro', email: 'jorge@gmail.com', telefone: '119320-0375' },
  { foto: 'assets/images/foto4.jpeg' , name: 'Ivonete', raca: 'Branca', email: 'ivonete@gmail.com', telefone: '1196654-0375' },
  { foto: 'assets/images/foto5.jpg' , name: 'Bianca', raca: 'Branca', email: 'bianca@gmail.com', telefone: '1196852-0200' },
  { foto: 'assets/images/foto6.jpeg' , name: 'Nicole', raca: 'Negra', email: 'nicole@gmail.com', telefone: '1199554-01005' },
  { foto: 'assets/images/foto7.jpg' , name: 'Paulo', raca: 'Branca', email: 'jorge@gmail.com', telefone: '11996582-0001' },
  { foto: 'assets/images/foto8.jpg' , name: 'Maria', raca: 'Branca', email: 'maria@gmail.com', telefone: '1199872-0375' },
   
  ];

  displayedColumns: string[] = ['foto', 'name', 'raca', 'email', 'telefone'];

  constructor() { }

  ngOnInit(): void {
  }

  exibeTable(){
    this.exibirTable = true;
    }

    closeTable(){
      this.exibirTable = false
    }

    @Input() valorPessoas: number = 8;

}
