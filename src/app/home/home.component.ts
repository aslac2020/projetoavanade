import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avanade-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  valor: number;
  
  ngOnInit(): void {
    this.valor = 8;
  }

  like(){
    alert('Eu curti :)');
  }
    
}
