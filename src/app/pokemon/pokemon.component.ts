import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemonName: string;
  pokemonImg: string;
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonAbilities: string;
  constructor(private api: ApiService, private activeRoute: ActivatedRoute, private store: StoreService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.pokemonName = params.id;
      const pokemonRes = this.store.getPokemonFromStore(this.pokemonName);
      if (!pokemonRes) {
        this.api.getDetails(this.pokemonName).subscribe((res: any) => {
          this.pokemonImg = res.sprites.other['official-artwork'].front_default;
          this.pokemonHeight = res.height;
          this.pokemonWeight = res.weight;
          this.pokemonAbilities = this.abilitiesStr(res);
        },
        (err) => {
          console.log(err);
        });
      } else {
        this.pokemonImg = pokemonRes.sprites.other['official-artwork'].front_default;
        this.pokemonHeight = pokemonRes.height;
        this.pokemonWeight = pokemonRes.weight;
        this.pokemonAbilities = this.abilitiesStr(pokemonRes);
      }
    });
  }

  abilitiesStr(val): string {
    const arr = [];
    val.abilities.forEach((item) => {
      arr.push(item.ability.name);
    });
    return arr.join(', ');
  }

}
