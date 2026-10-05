# AGROSOFT - Frontend

Aplicación frontend para el módulo de actividades de AGROSOFT, implementada con React y Vite.

## 🛠️ Tecnologías

- **React** v19.2.8
- **Vite** v8.3.0
- **Tailwind CSS** v3.4.19
- **React Router** v7.18.4
- **Axios** v1.20.0
- **TypeScript** (opcional)

## 📁 Estructura

```
src/
├── components/           # Componentes reutilizables
│   ├── ActividadCard.jsx
│   └── ActividadForm.jsx
├── pages/                # Páginas de la aplicación
│   ├── ActividadesPage.jsx
│   ├── EvidenciasPage.jsx
│   └── HistorialPage.jsx
├── layouts/              # Layouts de la aplicación
│   └── MainLayout.jsx
├── services/             # Servicios API
│   └── api.js
├── assets/               # Imágenes y recursos estáticos
├── App.jsx               # Componente principal
└── main.jsx              # Punto de entrada
```

## 🚀 Instalación

```bash
npm install
```

## ⚙️ Configuración

Configurar la URL de la API en `src/services/api.js`:

```javascript
const API_URL = 'http://localhost:3000';
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

La aplicación se conecta con la API backend usando Axios. Los endpoints están configurados en `src/services/api.js`.

### Ejemplo de uso:

```javascript
import { createActividad } from '../services/api';

const handleSubmit = async (data) => {
  try {
    const response = await createActividad(data);
    console.log('Actividad creada:', response);
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
