export class ActividadServicio {
  id: string;
  actividadId: string;
  servicioId: string;
  cantidad: number;
  costoUnitario: number;
  createdAt: Date;

  constructor(data?: Partial<ActividadServicio>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}