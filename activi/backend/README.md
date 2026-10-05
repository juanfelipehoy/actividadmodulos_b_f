# AgroSoft Cultivos - Backend

## 🏗️ Arquitectura Hexagonal

Este proyecto sigue una arquitectura hexagonal (Clean Architecture) con separación clara entre dominio, aplicación e infraestructura.

### Estructura de cada módulo:
```
módulo/
├── domain/
│   ├── entities/           # Entidades del dominio (lógica de negocio pura)
│   └── ports/              # Puertos/interfaces (contratos)
├── application/
│   └── use-cases/          # Casos de uso del dominio
└── infrastructure/
    ├── http/
    │   ├── controllers/    # Adaptadores HTTP
    │   └── dto/            # DTOs para transferencia de datos
    └── persistence/        # Adaptadores de persistencia (TypeORM)
```

## 🚀 Configuración y Ejecución

### Requisitos
- Docker y Docker Compose
- Node.js

### Paso 1: Iniciar PostgreSQL con Docker
```bash
docker-compose up -d
```

### Paso 2: Instalar dependencias
```bash
npm install
```

### Paso 3: Ejecutar en desarrollo
```bash
npm run start:dev
```

### Paso 4: Para producción
```bash
npm run build
npm run start:prod
```

## 📝 Variables de Entorno

Las variables de configuración están en `.env`:
- `DB_TYPE`: Tipo de base de datos (postgres)
- `DB_HOST`: Host de la base de datos
- `DB_PORT`: Puerto de la base de datos
- `DB_USERNAME`: Usuario de la base de datos
- `DB_PASSWORD`: Contraseña de la base de datos
- `DB_DATABASE`: Nombre de la base de datos

## ⚠️ Notas Importantes

1. **synchronize: true**: Crea automáticamente las tablas. Úsalo solo en desarrollo.
2. **En producción**: Usa migraciones de TypeORM en lugar de synchronize.
3. **Arquitectura hexagonal**: Los módulos exportan solo puertos, no casos de uso.
4. **Infraestructura separada**: TypeORM, ConfigModule y Docker son adaptadores de infraestructura.

## 🎯 Módulos Implementados

- **actividades**: Gestión de actividades agrícolas
- **actividad-historial**: Historial de cambios de actividades
- **actividades-evidencias**: Evidencias de actividades
- **actividades-herramientas**: Herramientas de actividades
- **actividades-responsables**: Responsables de actividades
- **actividades-servicios**: Servicios de actividades