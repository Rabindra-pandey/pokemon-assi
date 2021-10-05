import { Injectable } from '@angular/core';
import { PokemonDetails } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  pokemons = [];

  constructor() { }

  setPokemonIntoStore(res: PokemonDetails): void {
    if (res) {
      this.pokemons.push(res);
    }
  }

  getPokemonFromStore(name: string): any {
    return this.pokemons.find((item: any) => item.name === name);
  }
}
