import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { AddHerramientaUseCase } from '../../../application/use-cases';
import { CreateActividadHerramientaDto } from '../../../application/dto';

@Controller('actividades/:actividadId/herramientas')
export class ActividadesHerramientasController {
  constructor(private readonly addHerramientaUseCase: AddHerramientaUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addHerramienta(@Param('actividadId') actividadId: string, @Body() createHerramientaDto: CreateActividadHerramientaDto) {
    return await this.addHerramientaUseCase.execute({
      ...createHerramientaDto,
      actividadId,
    });
  }
}