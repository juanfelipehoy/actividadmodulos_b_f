import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IActividadHistorialRepository } from '../../domain/repositories';
import { ActividadHistorial } from '../../domain/entities';
import { ActividadHistorialEntity } from '../database/entities';

@Injectable()
export class ActividadHistorialRepository implements IActividadHistorialRepository {
  constructor(
    @InjectRepository(ActividadHistorialEntity)
    private readonly repository: Repository<ActividadHistorialEntity>,
  ) {}

  async create(historial: ActividadHistorial): Promise<ActividadHistorial> {
    const entity = this.toEntity(historial);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<ActividadHistorial | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByActividadId(actividadId: string): Promise<ActividadHistorial[]> {
    const entities = await this.repository.find({ where: { actividadId } });
    return entities.map(entity => this.toDomain(entity));
  }

  async findByUsuarioId(usuarioId: string): Promise<ActividadHistorial[]> {
    const entities = await this.repository.find({ where: { usuarioId } });
    return entities.map(entity => this.toDomain(entity));
  }

  private toEntity(domain: ActividadHistorial): ActividadHistorialEntity {
    const entity = new ActividadHistorialEntity();
    Object.assign(entity, domain);
    return entity;
  }

  private toDomain(entity: ActividadHistorialEntity): ActividadHistorial {
    return new ActividadHistorial({
      id: entity.id,
      actividadId: entity.actividadId,
      accion: entity.accion,
      descripcion: entity.descripcion,
      usuarioId: entity.usuarioId,
      fechaAccion: entity.fechaAccion,
    });
  }
}