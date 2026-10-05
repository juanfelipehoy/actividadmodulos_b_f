import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('actividad_historial')
export class ActividadHistorialEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  actividadId: string;

  @Column()
  accion: string;

  @Column('text')
  descripcion: string;

  @Column('uuid')
  usuarioId: string;

  @Column({ type: 'timestamp' })
  fechaAccion: Date;
}