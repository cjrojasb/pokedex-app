import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './interfaces/pokemon-response.interface';

@Injectable()
export class SeedService {
  private readonly http: AxiosInstance = axios;
  private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=15';

  async setSeed() {
    const { data } = await this.http.get<PokemonResponse>(this.pokeapiUrl);

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = Number(segments[segments.length - 2]);

      console.log({ name, no });
    });

    return data.results;
  }
}
