import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //num5
  name!: string;

  //num8
  urlImage!: string;

  //
  experience!: string;


  //num3
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  search(){
    //num4
    this.pokemonService.getPokemon(this.name).subscribe((data: any) => {
      this.urlImage = data.sprites.front_default,
      this.experience = data.sprites.base_experience
    });
  }

}
