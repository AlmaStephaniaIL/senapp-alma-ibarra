import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardModel } from 'src/app/Models/card.model';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  card:CardModel=new CardModel(); //creacion de una intacia de card model
  @Output() envioCard: EventEmitter<CardModel>=new EventEmitter;

  constructor() { }
  
  ngOnInit(): void {
  }

  addCard(){ //funcion
    console.log(this.card); //se almacenan todos los datos
    this.envioCard.emit(this.card);
    //this.dataCard.push(this.card); 
  }

}
