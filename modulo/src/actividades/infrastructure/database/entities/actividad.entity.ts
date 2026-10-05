import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('actividades')
export class ActividadEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column('text')
  descripcion: string;

  @Column({ type: 'timestamp' })
  fechaInicio: Date;

  @Column({ type: 'timestamp' })
  fechaFin: Date;

  @Column({ default: 'PENDIENTE' })
  estado: string;

  @Column({ default: 'MEDIA' })
  prioridad: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}