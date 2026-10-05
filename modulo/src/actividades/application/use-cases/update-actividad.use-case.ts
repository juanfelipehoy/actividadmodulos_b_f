import { IActividadRepository } from '../../domain/repositories';
import { Actividad } from '../../domain/entities';
import { UpdateActividadDto } from '../dto';

export class UpdateActividadUseCase {
  constructor(private readonly actividadRepository: IActividadRepository) {}

  async execute(id: string, dto: UpdateActividadDto): Promise<Actividad> {
    const existingActividad = await this.actividadRepository.findById(id);
    if (!existingActividad) {
      throw new Error('Actividad no encontrada');
    }

    const updatedActividad = await this.actividadRepository.update(id, {
      ...dto,
      updatedAt: new Date(),
    });

    return updatedActividad;
  }
}