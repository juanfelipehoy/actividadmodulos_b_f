import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { AddServicioUseCase } from '../../../application/use-cases';
import { CreateActividadServicioDto } from '../../../application/dto';

@Controller('actividades/:actividadId/servicios')
export class ActividadesServiciosController {
  constructor(private readonly addServicioUseCase: AddServicioUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addServicio(@Param('actividadId') actividadId: string, @Body() createServicioDto: CreateActividadServicioDto) {
    return await this.addServicioUseCase.execute({
      ...createServicioDto,
      actividadId,
    });
  }
}