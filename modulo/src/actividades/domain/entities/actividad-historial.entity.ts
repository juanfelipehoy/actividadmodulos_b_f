export class ActividadHistorial {
  id: string;
  actividadId: string;
  accion: string;
  descripcion: string;
  usuarioId: string;
  fechaAccion: Date;

  constructor(data?: Partial<ActividadHistorial>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}