export class ActividadHerramienta {
  id: string;
  actividadId: string;
  herramientaId: string;
  cantidad: number;
  estado: string;
  createdAt: Date;

  constructor(data?: Partial<ActividadHerramienta>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}