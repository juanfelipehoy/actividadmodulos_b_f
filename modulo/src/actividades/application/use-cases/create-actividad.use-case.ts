import { IActividadRepository } from '../../domain/repositories';
import { Actividad } from '../../domain/entities';
import { CreateActividadDto, EstadoActividad, PrioridadActividad } from '../dto';

export class CreateActividadUseCase {
  constructor(private readonly actividadRepository: IActividadRepository) {}

  async execute(dto: CreateActividadDto): Promise<Actividad> {
    const actividad = new Actividad({
      id: this.generateId(),
      titulo: dto.titulo,
      descripcion: dto.descripcion,
      fechaInicio: dto.fechaInicio,
      fechaFin: dto.fechaFin,
      estado: dto.estado || EstadoActividad.PENDIENTE,
      prioridad: dto.prioridad || PrioridadActividad.MEDIA,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.actividadRepository.create(actividad);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}