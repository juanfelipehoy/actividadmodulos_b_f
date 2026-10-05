import { ActividadResponsable } from '../entities';

export interface IActividadResponsableRepository {
  create(responsable: ActividadResponsable): Promise<ActividadResponsable>;
  findById(id: string): Promise<ActividadResponsable | null>;
  findByActividadId(actividadId: string): Promise<ActividadResponsable[]>;
  update(id: string, responsable: Partial<ActividadResponsable>): Promise<ActividadResponsable>;
  delete(id: string): Promise<void>;
}