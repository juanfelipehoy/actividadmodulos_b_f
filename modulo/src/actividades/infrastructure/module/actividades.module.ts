import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
  ActividadesController,
  ActividadesResponsablesController,
  ActividadesEvidenciasController,
  ActividadesServiciosController,
  ActividadesHerramientasController,
  ActividadesHistorialController,
} from '../controllers';
import { 
  ActividadRepository,
  ActividadResponsableRepository,
  ActividadEvidenciaRepository,
  ActividadServicioRepository,
  ActividadHerramientaRepository,
  ActividadHistorialRepository,
} from '../repositories';
import { 
  ActividadEntity,
  ActividadResponsableEntity,
  ActividadEvidenciaEntity,
  ActividadServicioEntity,
  ActividadHerramientaEntity,
  ActividadHistorialEntity,
} from '../database/entities';
import { 
  CreateActividadUseCase,
  GetActividadUseCase,
  GetAllActividadesUseCase,
  UpdateActividadUseCase,
  DeleteActividadUseCase,
  AddResponsableUseCase,
  AddEvidenciaUseCase,
  AddServicioUseCase,
  AddHerramientaUseCase,
  AddHistorialUseCase,
} from '../../../application/use-cases';
import { 
  IActividadRepository,
  IActividadResponsableRepository,
  IActividadEvidenciaRepository,
  IActividadServicioRepository,
  IActividadHerramientaRepository,
  IActividadHistorialRepository,
} from '../../../domain/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ActividadEntity,
      ActividadResponsableEntity,
      ActividadEvidenciaEntity,
      ActividadServicioEntity,
      ActividadHerramientaEntity,
      ActividadHistorialEntity,
    ]),
  ],
  controllers: [
    ActividadesController,
    ActividadesResponsablesController,
    ActividadesEvidenciasController,
    ActividadesServiciosController,
    ActividadesHerramientasController,
    ActividadesHistorialController,
  ],
  providers: [
    {
      provide: IActividadRepository,
      useClass: ActividadRepository,
    },
    {
      provide: IActividadResponsableRepository,
      useClass: ActividadResponsableRepository,
    },
    {
      provide: IActividadEvidenciaRepository,
      useClass: ActividadEvidenciaRepository,
    },
    {
      provide: IActividadServicioRepository,
      useClass: ActividadServicioRepository,
    },
    {
      provide: IActividadHerramientaRepository,
      useClass: ActividadHerramientaRepository,
    },
    {
      provide: IActividadHistorialRepository,
      useClass: ActividadHistorialRepository,
    },
    CreateActividadUseCase,
    GetActividadUseCase,
    GetAllActividadesUseCase,
    UpdateActividadUseCase,
    DeleteActividadUseCase,
    AddResponsableUseCase,
    AddEvidenciaUseCase,
    AddServicioUseCase,
    AddHerramientaUseCase,
    AddHistorialUseCase,
  ],
  exports: [
    IActividadRepository,
    IActividadResponsableRepository,
    IActividadEvidenciaRepository,
    IActividadServicioRepository,
    IActividadHerramientaRepository,
    IActividadHistorialRepository,
  ],
})
export class ActividadesModule {}