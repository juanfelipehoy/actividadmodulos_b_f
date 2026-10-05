import { IActividadRepository } from '../../domain/repositories';
import { Actividad } from '../../domain/entities';

export class GetAllActividadesUseCase {
  constructor(private readonly actividadRepository: IActividadRepository) {}

  async execute(): Promise<Actividad[]> {
    return await this.actividadRepository.findAll();
  }
}