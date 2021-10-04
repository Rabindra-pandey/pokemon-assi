import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PokemonAPI, PokemonDetails } from '../models/pokemon';
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lists = [];
  pokemonList = [];

  pageEvent: PageEvent;
  pageIndex:number = 0;
  pageSize:number = 20;
  pageSizeOptions: number[] = [10, 20, 50];
  totalCount: number;
  spinner: boolean = true;

  constructor(private api: ApiService, private store: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.lists = this.getLists();
  }

  getLists(): any[] {
    const pokemons = [];
    this.api.getAll(this.pageIndex, this.pageSize).subscribe((data: PokemonAPI) => {
      this.totalCount = data.count;
      this.pokemonList =  data.results;
      this.pokemonList.forEach((pokemon) => {
        this.api.getPokePic(pokemon.url).subscribe((res: PokemonDetails) => {
          pokemons.push(res);
          this.store.setPokemonIntoStore(res);
        });
      });
    },
    (error) => {
      console.log(error);
    },
    () => {
      this.spinner = false;
    });
    return pokemons;
  }

  searchData(event: any): void {
    if(event.search) {
      let pokemonName = event.search.toLowerCase();
      this.api.getDetails(pokemonName).subscribe((res: any) => {
        this.store.setPokemonIntoStore(res);
        this.redirectTo(pokemonName);  
      },
      (err) => {
        alert('Data not found');
      });           
    }
  }

  redirectTo(name: string): void {
    sessionStorage.setItem('pokemon', name);
    this.router.navigate(['/pokemon', name])
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.lists = this.getLists();
    return event;
  }
}
