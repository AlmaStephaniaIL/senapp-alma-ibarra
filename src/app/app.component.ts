import { Component } from '@angular/core';
import { CardModel } from './Models/card.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SenAppWeb';

  dataCard: CardModel[]=[
    {
      UrlImg:"https://www.dhresource.com/0x0/f2/albu/g5/M01/31/E4/rBVaI1nMZ0OABUG9AATvkHWc5ZY128.jpg",
      Title: "Sensor de temperatura",
      description:"Mide la temperatura",
      buttonText:"Más"
    },
    {
      UrlImg: "https://www.geekfactory.mx/wp-content/uploads/2015/06/e18-d80nk-sensor-de-proximidad-infrarrojo.jpg",
      Title: "Sensor Proximidad",
      description:"Mide la proximidad de un objeto",
      buttonText:"Más"
    },
    {
      UrlImg:"https://ipowerelectronics.com/1-large_default/arduino-uno-r3-dip-con-cable-usb.jpg",
      Title: "Arduino Uno",
      description:"Es la tarjeta que manda instrucciones",
      buttonText:"Más"
    },
    {
      UrlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfidk1AMCjE5OcvOJbs2WMTK5NvMGXIqEkkA&usqp=CAU",
      Title: "Esp 32",
      description:"Hace la conexión mediante Bluetooth o WiFi",
      buttonText:"Aprender más"
    },
    {
      UrlImg:"data:image/jpeg;base64,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",
      Title: "Buzzer",
      description:"Emite sonidos",
      buttonText:"Más"
    },
    {
      UrlImg:"https://image.dhgate.com/0x0s/f2-albu-g8-M01-00-3F-rBVaV1x_fGGAMxSTAAGBZW22Qxk052.jpg/5-colores-5mm-ronda-led-bombilla-de-diodo.jpg",
      Title: "Led",
      description:"Enciende en caso de alguna alerta",
      buttonText:"Más"
    }
  ]

  addCard(card: CardModel){ //funcion
    this.dataCard.push(Object.assign({}, card));
  }
}
