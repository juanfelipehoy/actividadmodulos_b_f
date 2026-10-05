import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateActividadHistorialDto {
  @IsString()
  @IsNotEmpty()
  actividadId: string;

  @IsString()
  @IsNotEmpty()
  accion: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  usuarioId: string;

  @IsDate()
  @IsNotEmpty()
  fechaAccion: Date;
}