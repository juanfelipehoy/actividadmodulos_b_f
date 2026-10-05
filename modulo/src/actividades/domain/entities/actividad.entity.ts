export class Actividad {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
  prioridad: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(data?: Partial<Actividad>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}