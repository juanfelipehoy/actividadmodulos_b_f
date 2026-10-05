import { IsString, IsDate, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { EstadoActividad, PrioridadActividad } from './create-actividad.dto';

export class UpdateActividadDto {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDate()
  @IsOptional()
  fechaInicio?: Date;

  @IsDate()
  @IsOptional()
  fechaFin?: Date;

  @IsEnum(EstadoActividad)
  @IsOptional()
  estado?: EstadoActividad;

  @IsEnum(PrioridadActividad)
  @IsOptional()
  prioridad?: PrioridadActividad;
}