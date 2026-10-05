import { Controller, Get, Post, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { AddHistorialUseCase } from '../../../application/use-cases';
import { CreateActividadHistorialDto } from '../../../application/dto';

@Controller('actividades/:actividadId/historial')
export class ActividadesHistorialController {
  constructor(private readonly addHistorialUseCase: AddHistorialUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addHistorial(@Param('actividadId') actividadId: string, @Body() createHistorialDto: CreateActividadHistorialDto) {
    return await this.addHistorialUseCase.execute({
      ...createHistorialDto,
      actividadId,
    });
  }
}