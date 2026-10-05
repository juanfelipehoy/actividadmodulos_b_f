import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IActividadResponsableRepository } from '../../domain/repositories';
import { ActividadResponsable } from '../../domain/entities';
import { ActividadResponsableEntity } from '../database/entities';

@Injectable()
export class ActividadResponsableRepository implements IActividadResponsableRepository {
  constructor(
    @InjectRepository(ActividadResponsableEntity)
    private readonly repository: Repository<ActividadResponsableEntity>,
  ) {}

  async create(responsable: ActividadResponsable): Promise<ActividadResponsable> {
    const entity = this.toEntity(responsable);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<ActividadResponsable | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByActividadId(actividadId: string): Promise<ActividadResponsable[]> {
    const entities = await this.repository.find({ where: { actividadId } });
    return entities.map(entity => this.toDomain(entity));
  }

  async update(id: string, responsable: Partial<ActividadResponsable>): Promise<ActividadResponsable> {
    await this.repository.update(id, responsable);
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('Responsable no encontrado');
    }
    return this.toDomain(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  private toEntity(domain: ActividadResponsable): ActividadResponsableEntity {
    const entity = new ActividadResponsableEntity();
    Object.assign(entity, domain);
    return entity;
  }

  private toDomain(entity: ActividadResponsableEntity): ActividadResponsable {
    return new ActividadResponsable({
      id: entity.id,
      actividadId: entity.actividadId,
      responsableId: entity.responsableId,
      rol: entity.rol,
      createdAt: entity.createdAt,
    });
  }
}