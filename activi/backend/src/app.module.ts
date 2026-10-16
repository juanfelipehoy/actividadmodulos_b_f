import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadesModule } from './actividades/actividades.module';
import { ActividadHistorialModule } from './actividad-historial/actividad-historial.module';
import { ActividadesEvidenciasModule } from './actividades-evidencias/actividades-evidencias.module';
import { ActividadesHerramientasModule } from './actividades-herramientas/actividades-herramientas.module';
import { ActividadesResponsablesModule } from './actividades-responsables/actividades-responsables.module';
import { ActividadesServiciosModule } from './actividades-servicios/actividades-servicios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_DATABASE || 'agrosoft',
        entities: [__dirname + '/**/*.orm-entity{.ts,.js}'],
        synchronize: false,
        migrations: [__dirname + '/**/migrations/*{.ts,.js}'],
        migrationsRun: process.env.DB_SYNCHRONIZE === 'true' || process.env.NODE_ENV === 'development',
        logging: process.env.DB_LOGGING === 'true',
      }),
    }),
    ActividadesModule,
    ActividadHistorialModule,
    ActividadesEvidenciasModule,
    ActividadesHerramientasModule,
    ActividadesResponsablesModule,
    ActividadesServiciosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
