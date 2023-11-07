import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Pokemon } from './interfaces/pokemon-response.interface';

@Injectable()
export class SeedService {
  private http = axios;
  private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon';

  async setSeed() {
    const { data } = await this.http.get<Pokemon>(this.pokeapiUrl);
    return data.results;
  }
}
