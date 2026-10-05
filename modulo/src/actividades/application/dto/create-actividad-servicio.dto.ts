import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateActividadServicioDto {
  @IsString()
  @IsNotEmpty()
  actividadId: string;

  @IsString()
  @IsNotEmpty()
  servicioId: string;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;

  @IsNumber()
  @IsNotEmpty()
  costoUnitario: number;
}