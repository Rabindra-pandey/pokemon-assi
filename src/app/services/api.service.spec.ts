import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DATA, POKEMON } from '../models/testdata';

describe('ApiService', () => {
  let apiService: ApiService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    apiService = TestBed.get(ApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should retrive all pokemons', () => {
    let offset = 0,
        limit = 20;
    apiService.getAll(offset, limit)
      .subscribe((pokemons) => {
        expect(pokemons).toBeTruthy('No data found');
        const pokemon = pokemons.find(pok => pok.id==10);
        expect(pokemon.name).toBe('caterpie');
      });

    const req = httpTestingController.expectOne(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    expect(req.request.method).toEqual('GET');
    req.flush({results: Object.values(DATA)});
  });

  it('should find a pokemon by name', () => {
    let pokemonName = 'caterpie';
    apiService.getDetails(pokemonName)
      .subscribe((pokemon) => {
        expect(pokemon).toBeTruthy('No data found');
        expect(pokemon.name).toBe('caterpie');
      });

    const req = httpTestingController.expectOne(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    expect(req.request.method).toEqual('GET');
    req.flush(POKEMON[1]);
  });

});
