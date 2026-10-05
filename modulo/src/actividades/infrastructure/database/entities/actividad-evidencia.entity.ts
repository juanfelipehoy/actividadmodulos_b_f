import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('actividades_evidencias')
export class ActividadEvidenciaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  actividadId: string;

  @Column()
  tipo: string;

  @Column()
  url: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @CreateDateColumn()
  createdAt: Date;
}