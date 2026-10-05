import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('actividades_responsables')
export class ActividadResponsableEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  actividadId: string;

  @Column('uuid')
  responsableId: string;

  @Column()
  rol: string;

  @CreateDateColumn()
  createdAt: Date;
}