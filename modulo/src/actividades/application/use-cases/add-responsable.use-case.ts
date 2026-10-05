import { IActividadResponsableRepository } from '../../domain/repositories';
import { ActividadResponsable } from '../../domain/entities';
import { CreateActividadResponsableDto } from '../dto';

export class AddResponsableUseCase {
  constructor(private readonly responsableRepository: IActividadResponsableRepository) {}

  async execute(dto: CreateActividadResponsableDto): Promise<ActividadResponsable> {
    const responsable = new ActividadResponsable({
      id: this.generateId(),
      actividadId: dto.actividadId,
      responsableId: dto.responsableId,
      rol: dto.rol,
      createdAt: new Date(),
    });

    return await this.responsableRepository.create(responsable);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}