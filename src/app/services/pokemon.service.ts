import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //num1
  private url: string= "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http : HttpClient) { }

  //num2
  getPokemon(name: string){
    //inyeccion de dependencias
    return this.http.get(this.url + name)
  }
}
