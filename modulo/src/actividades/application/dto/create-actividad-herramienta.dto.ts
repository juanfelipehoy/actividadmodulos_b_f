import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateActividadHerramientaDto {
  @IsString()
  @IsNotEmpty()
  actividadId: string;

  @IsString()
  @IsNotEmpty()
  herramientaId: string;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}