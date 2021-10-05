import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiService', () => {
  let apiService: ApiService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService
      ]
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
        expect(pokemons).toBeTruthy('No data found')
      })
  });
});
