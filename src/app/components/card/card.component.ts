import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  UrlImg: string ="";
  @Input()
  Title: string ="Titulo";
  @Input()
  description: string ="descripcion";
  @Input()
  buttonText: string ="Más";
  constructor() { }

  ngOnInit(): void {
  }

}
