import { IsString, IsNotEmpty } from 'class-validator';

export class CreateActividadResponsableDto {
  @IsString()
  @IsNotEmpty()
  actividadId: string;

  @IsString()
  @IsNotEmpty()
  responsableId: string;

  @IsString()
  @IsNotEmpty()
  rol: string;
}