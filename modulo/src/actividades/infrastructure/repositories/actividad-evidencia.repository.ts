import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IActividadEvidenciaRepository } from '../../domain/repositories';
import { ActividadEvidencia } from '../../domain/entities';
import { ActividadEvidenciaEntity } from '../database/entities';

@Injectable()
export class ActividadEvidenciaRepository implements IActividadEvidenciaRepository {
  constructor(
    @InjectRepository(ActividadEvidenciaEntity)
    private readonly repository: Repository<ActividadEvidenciaEntity>,
  ) {}

  async create(evidencia: ActividadEvidencia): Promise<ActividadEvidencia> {
    const entity = this.toEntity(evidencia);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<ActividadEvidencia | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByActividadId(actividadId: string): Promise<ActividadEvidencia[]> {
    const entities = await this.repository.find({ where: { actividadId } });
    return entities.map(entity => this.toDomain(entity));
  }

  async update(id: string, evidencia: Partial<ActividadEvidencia>): Promise<ActividadEvidencia> {
    await this.repository.update(id, evidencia);
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('Evidencia no encontrada');
    }
    return this.toDomain(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  private toEntity(domain: ActividadEvidencia): ActividadEvidenciaEntity {
    const entity = new ActividadEvidenciaEntity();
    Object.assign(entity, domain);
    return entity;
  }

  private toDomain(entity: ActividadEvidenciaEntity): ActividadEvidencia {
    return new ActividadEvidencia({
      id: entity.id,
      actividadId: entity.actividadId,
      tipo: entity.tipo,
      url: entity.url,
      descripcion: entity.descripcion,
      createdAt: entity.createdAt,
    });
  }
}