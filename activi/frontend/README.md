# AGROSOFT - Frontend

Aplicación frontend para el módulo de actividades de AGROSOFT, implementada con React y Vite.

## 🛠️ Tecnologías

- **React** v19.2.8
- **TypeScript** v7.0.2
- **Vite** v8.3.0
- **Tailwind CSS** v3.4.19
- **React Router** v7.18.4
- **Axios** v1.20.0

## 📁 Estructura

```
src/
├── components/           # Componentes reutilizables
│   ├── ActividadCard.tsx
│   └── ActividadForm.tsx
├── pages/                # Páginas de la aplicación
│   ├── ActividadesPage.tsx
│   ├── EvidenciasPage.tsx
│   └── HistorialPage.tsx
├── layouts/              # Layouts de la aplicación
│   └── MainLayout.tsx
├── services/             # Servicios API con tipos TypeScript
│   └── api.ts
├── assets/               # Imágenes y recursos estáticos
├── App.tsx               # Componente principal
└── main.tsx              # Punto de entrada
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

Configurar la URL de la API en `.env`:

```env
VITE_API_URL=http://localhost:3000
```

## 🏃 Ejecución

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Producción

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

## 📡 Páginas

### Actividades
- Lista de todas las actividades
- Crear nueva actividad
- Editar actividad existente
- Eliminar actividad

### Evidencias
- Gestión de evidencias de actividades
- Subir archivos de evidencia
- Ver evidencias asociadas

### Historial
- Historial de cambios de actividades
- Timeline de modificaciones
- Auditoría de cambios

## 🎨 Estilos

El proyecto usa **Tailwind CSS** para el estilizado. Los estilos se configuran en:

- `tailwind.config.js` - Configuración de Tailwind
- `src/index.css` - Estilos globales
- Componentes con clases de Tailwind

## 🔗 Integración con Backend

La aplicación se conecta con la API backend usando Axios. Los endpoints están configurados en `src/services/api.ts` con tipos TypeScript.

### Ejemplo de uso:

```typescript
import { actividadesApi, Actividad } from '../services/api';

const handleSubmit = async (data: Partial<Actividad>) => {
  try {
    const response = await actividadesApi.create(data);
    console.log('Actividad creada:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint |

## 🧩 Componentes

### ActividadCard
Componente para mostrar una actividad individual con su información.

### ActividadForm
Formulario para crear y editar actividades con validación.

### MainLayout
Layout principal con navegación y estructura común.

## 🔄 Enrutamiento

El enrutamiento se maneja con React Router v7. Las rutas están configuradas en `App.jsx`:

- `/` - Página de actividades
- `/evidencias` - Página de evidencias
- `/historial` - Página de historial

## 🎯 Características

- **SPA**: Single Page Application con navegación fluida
- **Responsive**: Diseño adaptable a diferentes dispositivos
- **API Integration**: Conexión con backend REST API
- **Form Validation**: Validación de formularios
- **State Management**: Gestión de estado con React hooks
