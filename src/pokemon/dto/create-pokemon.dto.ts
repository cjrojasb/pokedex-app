import { IsString, IsPositive, IsNumber } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  no: number;
}
