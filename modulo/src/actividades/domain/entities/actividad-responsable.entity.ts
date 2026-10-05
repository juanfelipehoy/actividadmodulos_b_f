export class ActividadResponsable {
  id: string;
  actividadId: string;
  responsableId: string;
  rol: string;
  createdAt: Date;

  constructor(data?: Partial<ActividadResponsable>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}