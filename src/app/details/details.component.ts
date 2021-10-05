import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() item: any;
  pokemonImg: string;
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonAbilities: string;

  constructor() { }

  ngOnInit(): void {
    this.pokemonImg = this.item.sprites.other['official-artwork'].front_default;
    this.pokemonHeight = this.item.height;
    this.pokemonWeight = this.item.weight;
    this.pokemonAbilities = this.abilitiesStr(this.item);
  }

  abilitiesStr(val): string {
    const arr = [];
    val.abilities.forEach((item) => {
      arr.push(item.ability.name);
    });
    return arr.join(', ');
  }

}
