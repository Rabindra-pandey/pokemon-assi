import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(pageIndex, pageSize): Observable<any> {
    let limit = pageSize;
    let offset = pageSize * pageIndex;
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokePic(url: string): Observable<any> {
    return this.http.get(url);
  }

  getDetailsss(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
  }

  // use this API is search and finding evolved pokemon pic
  getDetails(pokemonName: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  }
}
