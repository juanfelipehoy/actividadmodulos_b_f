import { ActividadEvidencia } from '../entities';

export interface IActividadEvidenciaRepository {
  create(evidencia: ActividadEvidencia): Promise<ActividadEvidencia>;
  findById(id: string): Promise<ActividadEvidencia | null>;
  findByActividadId(actividadId: string): Promise<ActividadEvidencia[]>;
  update(id: string, evidencia: Partial<ActividadEvidencia>): Promise<ActividadEvidencia>;
  delete(id: string): Promise<void>;
}