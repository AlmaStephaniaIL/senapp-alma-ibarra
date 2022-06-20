import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/Models/card.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  card:CardModel=new CardModel(); //creacion de una intacia de card model
  ngOnInit(): void {
  }

  addCard(){
    console.log(this.card); //se almacenan todos los datos
    this.dataCard.push(this.card); 
  }

}
