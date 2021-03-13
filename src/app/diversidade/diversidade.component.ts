import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'avanade-diversidade',
  templateUrl: './diversidade.component.html',
  styleUrls: ['./diversidade.component.css']
})
export class DiversidadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image: string = 'assets/images/diversidade.jpg';
}
