import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokemonResponse } from './interfaces/pokemon-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  private pokeapiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=650';

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async setSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokemonResponse>(this.pokeapiUrl);

    // insert multiple simultaneous records with promise All
    // const insertPromises = [];

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = Number(segments[segments.length - 2]);

      // insertPromises.push(this.pokemonModel.create({ name, no }));

      pokemonToInsert.push({ name, no });
    });

    // await Promise.all(insertPromises);

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed was execute successfully';
  }
}
