export class ActividadEvidencia {
  id: string;
  actividadId: string;
  tipo: string;
  url: string;
  descripcion: string;
  createdAt: Date;

  constructor(data?: Partial<ActividadEvidencia>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}