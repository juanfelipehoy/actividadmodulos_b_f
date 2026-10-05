import { IActividadEvidenciaRepository } from '../../domain/repositories';
import { ActividadEvidencia } from '../../domain/entities';
import { CreateActividadEvidenciaDto } from '../dto';

export class AddEvidenciaUseCase {
  constructor(private readonly evidenciaRepository: IActividadEvidenciaRepository) {}

  async execute(dto: CreateActividadEvidenciaDto): Promise<ActividadEvidencia> {
    const evidencia = new ActividadEvidencia({
      id: this.generateId(),
      actividadId: dto.actividadId,
      tipo: dto.tipo,
      url: dto.url,
      descripcion: dto.descripcion,
      createdAt: new Date(),
    });

    return await this.evidenciaRepository.create(evidencia);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}