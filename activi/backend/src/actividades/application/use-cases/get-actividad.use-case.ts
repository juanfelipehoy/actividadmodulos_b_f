import { Inject, Injectable } from '@nestjs/common';
import { ActividadDomain } from '../../domain/entities/actividad.entity';
import { ACTIVIDAD_REPOSITORY } from '../../domain/ports/actividad.repository.port';
import type { ActividadRepositoryPort } from '../../domain/ports/actividad.repository.port';

@Injectable()
export class GetActividadUseCase {
  constructor(
    @Inject(ACTIVIDAD_REPOSITORY)
    private readonly actividadRepository: ActividadRepositoryPort,
  ) {}

  findAll(): Promise<ActividadDomain[]> {
    return this.actividadRepository.findAll();
  }

  execute(id: number): Promise<ActividadDomain | null> {
    return this.actividadRepository.findById(id);
  }
}
