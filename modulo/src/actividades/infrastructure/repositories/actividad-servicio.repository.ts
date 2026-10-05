import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IActividadServicioRepository } from '../../domain/repositories';
import { ActividadServicio } from '../../domain/entities';
import { ActividadServicioEntity } from '../database/entities';

@Injectable()
export class ActividadServicioRepository implements IActividadServicioRepository {
  constructor(
    @InjectRepository(ActividadServicioEntity)
    private readonly repository: Repository<ActividadServicioEntity>,
  ) {}

  async create(servicio: ActividadServicio): Promise<ActividadServicio> {
    const entity = this.toEntity(servicio);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<ActividadServicio | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByActividadId(actividadId: string): Promise<ActividadServicio[]> {
    const entities = await this.repository.find({ where: { actividadId } });
    return entities.map(entity => this.toDomain(entity));
  }

  async update(id: string, servicio: Partial<ActividadServicio>): Promise<ActividadServicio> {
    await this.repository.update(id, servicio);
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('Servicio no encontrado');
    }
    return this.toDomain(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  private toEntity(domain: ActividadServicio): ActividadServicioEntity {
    const entity = new ActividadServicioEntity();
    Object.assign(entity, domain);
    return entity;
  }

  private toDomain(entity: ActividadServicioEntity): ActividadServicio {
    return new ActividadServicio({
      id: entity.id,
      actividadId: entity.actividadId,
      servicioId: entity.servicioId,
      cantidad: entity.cantidad,
      costoUnitario: entity.costoUnitario,
      createdAt: entity.createdAt,
    });
  }
}