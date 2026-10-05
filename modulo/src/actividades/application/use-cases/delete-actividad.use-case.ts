import { IActividadRepository } from '../../domain/repositories';

export class DeleteActividadUseCase {
  constructor(private readonly actividadRepository: IActividadRepository) {}

  async execute(id: string): Promise<void> {
    const existingActividad = await this.actividadRepository.findById(id);
    if (!existingActividad) {
      throw new Error('Actividad no encontrada');
    }

    await this.actividadRepository.delete(id);
  }
}