# AgroSoft Cultivos - Frontend

## 🎨 Stack Tecnológico

- **React 19.2.8** - Framework UI
- **Vite 8.3.0** - Build tool
- **Tailwind CSS** - Framework CSS
- **Axios** - Cliente HTTP
- **React Router DOM** - Enrutamiento

## 🚀 Configuración y Ejecución

### Requisitos Previos
- Backend corriendo en `http://localhost:3000`
- Docker con PostgreSQL corriendo

### Instalación
```bash
npm install
```

### Ejecutar en Desarrollo
```bash
npm run dev
```

### Build para Producción
```bash
npm run build
npm run preview
```

## 🎨 Diseño

- **Colores**: Paleta de verdes AgroSoft (agro-50 a agro-900)
- **Estilo**: Minimalista y limpio
- **Responsive**: Adaptado a dispositivos móviles
- **Accesible**: Buen contraste y navegación clara

## 📱 Funcionalidades

- ✅ Gestión de actividades agrícolas
- ✅ Crear, editar, eliminar actividades
- ✅ Visualización en tarjetas
- ✅ Filtrado por estado y prioridad
- ✅ Diseño responsivo

## 🔗 Conexión con Backend

El frontend se conecta al backend vía axios en `http://localhost:3000`

**Configuración CORS en backend:**
- Origin: `http://localhost:5173`
- Métodos: GET, POST, PUT, PATCH, DELETE
- Credentials: enabled

## 📁 Estructura de Archivos

```
src/
├── components/           # Componentes React
│   ├── ActividadCard.jsx
│   └── ActividadForm.jsx
├── layouts/             # Layouts
│   └── MainLayout.jsx
├── pages/               # Páginas
│   └── ActividadesPage.jsx
├── services/            # Servicios API
│   └── api.js
├── App.jsx              # App principal
└── main.jsx             # Entry point
```