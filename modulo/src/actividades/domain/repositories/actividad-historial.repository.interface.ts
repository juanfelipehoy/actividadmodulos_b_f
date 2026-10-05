import { ActividadHistorial } from '../entities';

export interface IActividadHistorialRepository {
  create(historial: ActividadHistorial): Promise<ActividadHistorial>;
  findById(id: string): Promise<ActividadHistorial | null>;
  findByActividadId(actividadId: string): Promise<ActividadHistorial[]>;
  findByUsuarioId(usuarioId: string): Promise<ActividadHistorial[]>;
}