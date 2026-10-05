import { IActividadHerramientaRepository } from '../../domain/repositories';
import { ActividadHerramienta } from '../../domain/entities';
import { CreateActividadHerramientaDto } from '../dto';

export class AddHerramientaUseCase {
  constructor(private readonly herramientaRepository: IActividadHerramientaRepository) {}

  async execute(dto: CreateActividadHerramientaDto): Promise<ActividadHerramienta> {
    const herramienta = new ActividadHerramienta({
      id: this.generateId(),
      actividadId: dto.actividadId,
      herramientaId: dto.herramientaId,
      cantidad: dto.cantidad,
      estado: dto.estado,
      createdAt: new Date(),
    });

    return await this.herramientaRepository.create(herramienta);
  }

  private generateId(): string {
    return crypto.randomUUID();
  }
}