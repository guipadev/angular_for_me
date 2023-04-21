import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  // @Input() valor:string = "";
  // Con property binding debemos definir en la componente el tipo de dato number:

  @Input() valor:number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
