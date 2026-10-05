import { IActividadRepository } from '../../domain/repositories';
import { Actividad } from '../../domain/entities';

export class GetActividadUseCase {
  constructor(private readonly actividadRepository: IActividadRepository) {}

  async execute(id: string): Promise<Actividad | null> {
    return await this.actividadRepository.findById(id);
  }
}