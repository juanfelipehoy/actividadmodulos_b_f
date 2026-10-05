import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('actividades_servicios')
export class ActividadServicioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  actividadId: string;

  @Column('uuid')
  servicioId: string;

  @Column('int')
  cantidad: number;

  @Column('decimal')
  costoUnitario: number;

  @CreateDateColumn()
  createdAt: Date;
}