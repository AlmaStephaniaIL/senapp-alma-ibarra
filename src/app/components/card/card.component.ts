import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  UrlImage: string ="";
  @Input()
  cardTitle: string ="Hola";
  @Input()
  description: string ="descripcion";
  @Input()
  buttonText: string =" Aprender más";
  constructor() { }

  ngOnInit(): void {
  }

}
