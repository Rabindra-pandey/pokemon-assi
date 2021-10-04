export interface PokemonDetails {
    name: string;
    height: number;
    wight: number;
    abilities: string
}

export interface PokemonAPI {
    count: number;
    next: string;
    previous: string;
    results: []
}

