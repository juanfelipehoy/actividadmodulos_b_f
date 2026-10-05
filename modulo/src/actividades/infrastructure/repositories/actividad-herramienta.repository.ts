import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IActividadHerramientaRepository } from '../../domain/repositories';
import { ActividadHerramienta } from '../../domain/entities';
import { ActividadHerramientaEntity } from '../database/entities';

@Injectable()
export class ActividadHerramientaRepository implements IActividadHerramientaRepository {
  constructor(
    @InjectRepository(ActividadHerramientaEntity)
    private readonly repository: Repository<ActividadHerramientaEntity>,
  ) {}

  async create(herramienta: ActividadHerramienta): Promise<ActividadHerramienta> {
    const entity = this.toEntity(herramienta);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<ActividadHerramienta | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByActividadId(actividadId: string): Promise<ActividadHerramienta[]> {
    const entities = await this.repository.find({ where: { actividadId } });
    return entities.map(entity => this.toDomain(entity));
  }

  async update(id: string, herramienta: Partial<ActividadHerramienta>): Promise<ActividadHerramienta> {
    await this.repository.update(id, herramienta);
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('Herramienta no encontrada');
    }
    return this.toDomain(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  private toEntity(domain: ActividadHerramienta): ActividadHerramientaEntity {
    const entity = new ActividadHerramientaEntity();
    Object.assign(entity, domain);
    return entity;
  }

  private toDomain(entity: ActividadHerramientaEntity): ActividadHerramienta {
    return new ActividadHerramienta({
      id: entity.id,
      actividadId: entity.actividadId,
      herramientaId: entity.herramientaId,
      cantidad: entity.cantidad,
      estado: entity.estado,
      createdAt: entity.createdAt,
    });
  }
}