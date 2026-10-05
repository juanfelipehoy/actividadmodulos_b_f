# AGROSOFT - Backend API

API RESTful para el módulo de actividades de AGROSOFT, implementada con NestJS y arquitectura hexagonal.

## 🛠️ Tecnologías

- **NestJS** v11.0.1
- **TypeScript** v5.7.3
- **TypeORM** v0.3.20
- **PostgreSQL**
- **class-validator** v0.15.1
- **class-transformer** v0.5.1

## 📁 Estructura

```
src/
├── actividades/                  # Módulo de actividades
│   ├── application/
│   │   └── use-cases/           # Casos de uso
│   ├── domain/
│   │   ├── entities/            # Entidades del dominio
│   │   └── ports/               # Interfaces de repositorios
│   └── infrastructure/
│       ├── http/
│       │   ├── controllers/     # Controladores REST
│       │   └── dto/             # Data Transfer Objects
│       └── persistence/         # Implementación TypeORM
├── actividad-historial/          # Módulo de historial
├── actividades-evidencias/       # Módulo de evidencias
├── actividades-herramientas/     # Módulo de herramientas
├── actividades-responsables/     # Módulo de responsables
├── actividades-servicios/        # Módulo de servicios
├── app.module.ts                 # Módulo raíz
└── main.ts                       # Punto de entrada
```

## 🚀 Instalación

```bash
npm install
```

## ⚙️ Configuración

Copiar el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env
```

Configurar las variables en `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=agrosoft
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
DB_SYNCHRONIZE=false
DB_LOGGING=true
```

## 🏃 Ejecución

### Desarrollo

```bash
npm run start:dev
```

### Producción

```bash
npm run build
npm run start:prod
```

### Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

### Linting

```bash
npm run lint
```

### Formateo

```bash
npm run format
```

## 📡 API Endpoints

### Actividades

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/actividades` | Listar todas las actividades |
| GET | `/actividades/:id` | Obtener una actividad por ID |
| POST | `/actividades` | Crear una nueva actividad |
| PUT | `/actividades/:id` | Actualizar una actividad |
| DELETE | `/actividades/:id` | Eliminar una actividad |

### Otros módulos

Similar estructura para:
- `/actividad-historial`
- `/actividades-evidencias`
- `/actividades-herramientas`
- `/actividades-responsables`
- `/actividades-servicios`

## 🏗️ Arquitectura Hexagonal

El proyecto sigue la arquitectura hexagonal (Ports and Adapters):

### Domain Layer
- Contiene la lógica de negocio pura
- No depende de frameworks externos
- Define entidades y puertos (interfaces)

### Application Layer
- Contiene los casos de uso
- Orquesta las operaciones del dominio
- Usa DTOs para transferencia de datos

### Infrastructure Layer
- Implementa los puertos del dominio
- Controladores HTTP
- Repositorios TypeORM
- Configuración externa

## 🔒 Seguridad

- Validación de DTOs con class-validator
- Configuración de CORS
- Variables de entorno para datos sensibles
- Transformación automática de tipos

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run build` | Compila el proyecto |
| `npm run format` | Formatea el código con Prettier |
| `npm run start` | Inicia la aplicación en modo prod |
| `npm run start:dev` | Inicia en modo desarrollo con watch |
| `npm run start:debug` | Inicia en modo debug |
| `npm run start:prod` | Inicia en modo producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run test` | Ejecuta tests unitarios |
| `npm run test:cov` | Ejecuta tests con coverage |
| `npm run test:e2e` | Ejecuta tests E2E |
