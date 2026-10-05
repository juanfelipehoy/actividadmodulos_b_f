import { IActividadHistorialRepository } from '../../domain/repositories';
import { ActividadHistorial } from '../../domain/entities';
import { CreateActividadHistorialDto } from '../dto';

export class AddHistorialUseCase {
  constructor(private readonly historialRepository: IActividadHistorialRepository) {}

  async execute(dto: CreateActividadHistorialDto): Promise<ActividadHistorial> {
    const historial = new ActividadHistorial({
      id: this.generateId(),
      actividadId: dto.actividadId,
      accion: dto.accion,
      descripcion: dto.descripcion,
      usuarioId: dto.usuarioId,
      fechaAccion: dto.fechaAccion,
    });

    return await this.historialRepository.create(historial);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}