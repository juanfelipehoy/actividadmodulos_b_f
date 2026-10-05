import { IActividadServicioRepository } from '../../domain/repositories';
import { ActividadServicio } from '../../domain/entities';
import { CreateActividadServicioDto } from '../dto';

export class AddServicioUseCase {
  constructor(private readonly servicioRepository: IActividadServicioRepository) {}

  async execute(dto: CreateActividadServicioDto): Promise<ActividadServicio> {
    const servicio = new ActividadServicio({
      id: this.generateId(),
      actividadId: dto.actividadId,
      servicioId: dto.servicioId,
      cantidad: dto.cantidad,
      costoUnitario: dto.costoUnitario,
      createdAt: new Date(),
    });

    return await this.servicioRepository.create(servicio);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}