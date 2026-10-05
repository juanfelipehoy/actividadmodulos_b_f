import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IActividadRepository } from '../../domain/repositories';
import { Actividad } from '../../domain/entities';
import { ActividadEntity } from '../database/entities';

@Injectable()
export class ActividadRepository implements IActividadRepository {
  constructor(
    @InjectRepository(ActividadEntity)
    private readonly repository: Repository<ActividadEntity>,
  ) {}

  async create(actividad: Actividad): Promise<Actividad> {
    const entity = this.toEntity(actividad);
    const savedEntity = await this.repository.save(entity);
    return this.toDomain(savedEntity);
  }

  async findById(id: string): Promise<Actividad | null> {
    const entity = await this.repository.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findAll(): Promise<Actividad[]> {
    const entities = await this.repository.find();
    return entities.map(entity => this.toDomain(entity));
  }

  async update(id: string, actividad: Partial<Actividad>): Promise<Actividad> {
    await this.repository.update(id, actividad);
    const entity = await this.repository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('Actividad no encontrada');
    }
    return this.toDomain(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByEstado(estado: string): Promise<Actividad[]> {
    const entities = await this.repository.find({ where: { estado } });
    return entities.map(entity => this.toDomain(entity));
  }

  async findByFechaRange(fechaInicio: Date, fechaFin: Date): Promise<Actividad[]> {
    const entities = await this.repository
      .createQueryBuilder('actividad')
      .where('actividad.fechaInicio >= :fechaInicio', { fechaInicio })
      .andWhere('actividad.fechaFin <= :fechaFin', { fechaFin })
      .getMany();
    return entities.map(entity => this.toDomain(entity));
  }

  private toEntity(domain: Actividad): ActividadEntity {
    const entity = new ActividadEntity();
    Object.assign(entity, domain);
    return entity;
  }

  private toDomain(entity: ActividadEntity): Actividad {
    return new Actividad({
      id: entity.id,
      titulo: entity.titulo,
      descripcion: entity.descripcion,
      fechaInicio: entity.fechaInicio,
      fechaFin: entity.fechaFin,
      estado: entity.estado,
      prioridad: entity.prioridad,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}