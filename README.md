# AGROSOFT - Módulo de Actividades

Módulo de gestión de actividades para el sistema AGROSOFT, implementado con arquitectura hexagonal y mejores prácticas de desarrollo.

## 📋 Tabla de Contenidos

- [Arquitectura](#arquitectura)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [API Endpoints](#api-endpoints)
- [Desarrollo](#desarrollo)

## 🏗️ Arquitectura

Este proyecto sigue la **Arquitectura Hexagonal (Ports and Adapters)**, que permite una separación clara entre el dominio del negocio y la infraestructura técnica.

### Capas de la Arquitectura

1. **Domain Layer (Dominio)**
   - Entidades del dominio
   - Puertos (interfaces) para repositorios
   - Lógica de negocio pura

2. **Application Layer (Aplicación)**
   - Casos de uso (Use Cases)
   - DTOs (Data Transfer Objects)
   - Orquestación de operaciones de negocio

3. **Infrastructure Layer (Infraestructura)**
   - Implementación de repositorios (TypeORM)
   - Controladores HTTP
   - Configuración de base de datos
   - Adaptadores externos

### Beneficios

- **Desacoplamiento**: El dominio no depende de frameworks o tecnologías externas
- **Testabilidad**: Fácil de probar cada capa independientemente
- **Mantenibilidad**: Cambios en infraestructura no afectan el dominio
- **Escalabilidad**: Fácil agregar nuevos adaptadores

## 🛠️ Tecnologías

### Backend
- **NestJS** v11.0.1 - Framework de Node.js
- **TypeScript** v5.7.3 - Tipado estático
- **TypeORM** v0.3.20 - ORM para base de datos
- **PostgreSQL** - Base de datos relacional
- **class-validator** - Validación de DTOs
- **class-transformer** - Transformación de datos

### Frontend
- **React** v19.2.8 - Biblioteca UI
- **Vite** v8.3.0 - Build tool
- **Tailwind CSS** v3.4.19 - Framework CSS
- **React Router** v7.18.4 - Enrutamiento
- **Axios** v1.20.0 - Cliente HTTP

## 📁 Estructura del Proyecto

```
agrosoft-module/
├── activi/
│   ├── backend/              # API NestJS
│   │   ├── src/
│   │   │   ├── actividades/          # Módulo principal de actividades
│   │   │   │   ├── application/      # Casos de uso
│   │   │   │   │   └── use-cases/
│   │   │   │   ├── domain/           # Dominio
│   │   │   │   │   ├── entities/
│   │   │   │   │   └── ports/
│   │   │   │   └── infrastructure/    # Infraestructura
│   │   │   │       ├── http/
│   │   │   │       │   ├── controllers/
│   │   │   │       │   └── dto/
│   │   │   │       └── persistence/
│   │   │   ├── actividad-historial/  # Historial de actividades
│   │   │   ├── actividades-evidencias/ # Evidencias
│   │   │   ├── actividades-herramientas/ # Herramientas
│   │   │   ├── actividades-responsables/ # Responsables
│   │   │   ├── actividades-servicios/   # Servicios
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   ├── test/
│   │   ├── .env.example
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── frontend/             # Aplicación React
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── layouts/
│       │   ├── services/
│       │   └── main.jsx
│       ├── public/
│       ├── package.json
│       └── vite.config.js
├── docs/                     # Documentación
│   ├── hexagonal/
│   ├── instructivos/
│   └── presentacion/
├── .gitignore
└── README.md
```

## 🚀 Instalación

### Prerrequisitos

- Node.js v18+ 
- PostgreSQL v12+
- npm o yarn

### Backend

```bash
cd activi/backend
npm install
```

### Frontend

```bash
cd activi/frontend
npm install
```

## ⚙️ Configuración

### Base de Datos

1. Crear una base de datos PostgreSQL:

```sql
CREATE DATABASE agrosoft;
```

2. Configurar las variables de entorno en `activi/backend/.env`:

```bash
cp .env.example .env
```

Editar el archivo `.env` con tus credenciales:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=agrosoft

# Server Configuration
PORT=3000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# TypeORM Configuration
DB_SYNCHRONIZE=false
DB_LOGGING=true
```

**⚠️ Importante**: `DB_SYNCHRONIZE=true` solo debe usarse en desarrollo. En producción debe ser `false` y usar migraciones.

## 🏃 Ejecución

### Backend

```bash
cd activi/backend

# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

El backend estará disponible en `http://localhost:3000`

### Frontend

```bash
cd activi/frontend

# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

El frontend estará disponible en `http://localhost:5173`

## 📡 API Endpoints

### Actividades

- `GET /actividades` - Listar todas las actividades
- `GET /actividades/:id` - Obtener una actividad por ID
- `POST /actividades` - Crear una nueva actividad
- `PUT /actividades/:id` - Actualizar una actividad
- `DELETE /actividades/:id` - Eliminar una actividad

### Actividad Historial

- `GET /actividad-historial` - Listar historial
- `POST /actividad-historial` - Crear registro de historial
- `PUT /actividad-historial/:id` - Actualizar historial
- `DELETE /actividad-historial/:id` - Eliminar historial

### Actividades Evidencias

- `GET /actividades-evidencias` - Listar evidencias
- `POST /actividades-evidencias` - Crear evidencia
- `PUT /actividades-evidencias/:id` - Actualizar evidencia
- `DELETE /actividades-evidencias/:id` - Eliminar evidencia

### Actividades Herramientas

- `GET /actividades-herramientas` - Listar herramientas
- `POST /actividades-herramientas` - Crear herramienta
- `PUT /actividades-herramientas/:id` - Actualizar herramienta
- `DELETE /actividades-herramientas/:id` - Eliminar herramienta

### Actividades Responsables

- `GET /actividades-responsables` - Listar responsables
- `POST /actividades-responsables` - Crear responsable
- `PUT /actividades-responsables/:id` - Actualizar responsable
- `DELETE /actividades-responsables/:id` - Eliminar responsable

### Actividades Servicios

- `GET /actividades-servicios` - Listar servicios
- `POST /actividades-servicios` - Crear servicio
- `PUT /actividades-servicios/:id` - Actualizar servicio
- `DELETE /actividades-servicios/:id` - Eliminar servicio

## 🧪 Desarrollo

### Ejecutar Tests

```bash
cd activi/backend

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:cov
```

### Linting

```bash
cd activi/backend
npm run lint

cd activi/frontend
npm run lint
```

### Formateo

```bash
cd activi/backend
npm run format
```

## 📝 Convenciones de Código

### Backend

- Usar PascalCase para clases y interfaces
- Usar camelCase para métodos y variables
- Usar kebab-case para archivos
- Seguir la arquitectura hexagonal estrictamente
- Validar todos los DTOs con class-validator

### Frontend

- Usar PascalCase para componentes
- Usar camelCase para funciones y variables
- Usar kebab-case para archivos CSS
- Componentes funcionales con hooks
- Props validadas con PropTypes o TypeScript

## 🔒 Seguridad

- Nunca commitear archivos `.env`
- Usar variables de entorno para configuración sensible
- Validar todos los inputs en el backend
- Configurar CORS apropiadamente
- Usar HTTPS en producción
- Implementar autenticación y autorización

## 📄 Licencia

Este proyecto es propiedad de AGROSOFT.

## 👥 Contribución

Para contribuir a este proyecto:

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📞 Soporte

Para soporte técnico, contacta al equipo de desarrollo de AGROSOFT.
