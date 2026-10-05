import { IsString, IsDate, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export enum EstadoActividad {
  PENDIENTE = 'PENDIENTE',
  EN_PROGRESO = 'EN_PROGRESO',
  COMPLETADA = 'COMPLETADA',
  CANCELADA = 'CANCELADA'
}

export enum PrioridadActividad {
  BAJA = 'BAJA',
  MEDIA = 'MEDIA',
  ALTA = 'ALTA',
  URGENTE = 'URGENTE'
}

export class CreateActividadDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsDate()
  @IsNotEmpty()
  fechaInicio: Date;

  @IsDate()
  @IsNotEmpty()
  fechaFin: Date;

  @IsEnum(EstadoActividad)
  @IsOptional()
  estado?: EstadoActividad;

  @IsEnum(PrioridadActividad)
  @IsOptional()
  prioridad?: PrioridadActividad;
}