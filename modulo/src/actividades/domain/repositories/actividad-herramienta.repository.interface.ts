import { ActividadHerramienta } from '../entities';

export interface IActividadHerramientaRepository {
  create(herramienta: ActividadHerramienta): Promise<ActividadHerramienta>;
  findById(id: string): Promise<ActividadHerramienta | null>;
  findByActividadId(actividadId: string): Promise<ActividadHerramienta[]>;
  update(id: string, herramienta: Partial<ActividadHerramienta>): Promise<ActividadHerramienta>;
  delete(id: string): Promise<void>;
}