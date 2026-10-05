import { Actividad } from '../entities';

export interface IActividadRepository {
  create(actividad: Actividad): Promise<Actividad>;
  findById(id: string): Promise<Actividad | null>;
  findAll(): Promise<Actividad[]>;
  update(id: string, actividad: Partial<Actividad>): Promise<Actividad>;
  delete(id: string): Promise<void>;
  findByEstado(estado: string): Promise<Actividad[]>;
  findByFechaRange(fechaInicio: Date, fechaFin: Date): Promise<Actividad[]>;
}