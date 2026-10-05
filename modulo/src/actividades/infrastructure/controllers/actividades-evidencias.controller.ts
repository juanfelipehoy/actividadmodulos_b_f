import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { AddEvidenciaUseCase } from '../../../application/use-cases';
import { CreateActividadEvidenciaDto } from '../../../application/dto';

@Controller('actividades/:actividadId/evidencias')
export class ActividadesEvidenciasController {
  constructor(private readonly addEvidenciaUseCase: AddEvidenciaUseCase) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addEvidencia(@Param('actividadId') actividadId: string, @Body() createEvidenciaDto: CreateActividadEvidenciaDto) {
    return await this.addEvidenciaUseCase.execute({
      ...createEvidenciaDto,
      actividadId,
    });
  }
}