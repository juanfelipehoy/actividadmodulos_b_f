import { ActividadServicio } from '../entities';

export interface IActividadServicioRepository {
  create(servicio: ActividadServicio): Promise<ActividadServicio>;
  findById(id: string): Promise<ActividadServicio | null>;
  findByActividadId(actividadId: string): Promise<ActividadServicio[]>;
  update(id: string, servicio: Partial<ActividadServicio>): Promise<ActividadServicio>;
  delete(id: string): Promise<void>;
}