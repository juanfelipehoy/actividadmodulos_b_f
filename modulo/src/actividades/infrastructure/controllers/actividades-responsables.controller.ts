import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { AddResponsableUseCase } from '../../../application/use-cases';
import { CreateActividadResponsableDto } from '../../../application/dto';

@Controller('actividades/:actividadId/responsables')
export class ActividadesResponsablesController {
  constructor(private readonly addResponsableUseCase: AddResponsableUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addResponsable(@Param('actividadId') actividadId: string, @Body() createResponsableDto: CreateActividadResponsableDto) {
    return await this.addResponsableUseCase.execute({
      ...createResponsableDto,
      actividadId,
    });
  }
}