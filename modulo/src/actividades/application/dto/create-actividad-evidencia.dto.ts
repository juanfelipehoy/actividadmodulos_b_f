import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateActividadEvidenciaDto {
  @IsString()
  @IsNotEmpty()
  actividadId: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}