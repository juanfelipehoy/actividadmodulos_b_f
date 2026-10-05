import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('actividades_herramientas')
export class ActividadHerramientaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  actividadId: string;

  @Column('uuid')
  herramientaId: string;

  @Column('int')
  cantidad: number;

  @Column()
  estado: string;

  @CreateDateColumn()
  createdAt: Date;
}