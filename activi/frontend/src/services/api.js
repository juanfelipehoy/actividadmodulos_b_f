import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Actividades
export const actividadesApi = {
  getAll: () => api.get('/actividades'),
  getById: (id) => api.get(`/actividades/${id}`),
  create: (data) => api.post('/actividades', data),
  update: (id, data) => api.patch(`/actividades/${id}`, data),
  delete: (id) => api.delete(`/actividades/${id}`),
};

// Actividad Historial
export const historialApi = {
  getAll: () => api.get('/actividad-historial'),
  getById: (id) => api.get(`/actividad-historial/${id}`),
  create: (data) => api.post('/actividad-historial', data),
  update: (id, data) => api.patch(`/actividad-historial/${id}`, data),
  delete: (id) => api.delete(`/actividad-historial/${id}`),
  getByActividad: (actividadId) => api.get(`/actividad-historial/actividad/${actividadId}`),
};

// Actividades Evidencias
export const evidenciasApi = {
  getAll: () => api.get('/actividades-evidencias'),
  getById: (id) => api.get(`/actividades-evidencias/${id}`),
  create: (data) => api.post('/actividades-evidencias', data),
  update: (id, data) => api.patch(`/actividades-evidencias/${id}`, data),
  delete: (id) => api.delete(`/actividades-evidencias/${id}`),
  getByActividad: (actividadId) => api.get(`/actividades-evidencias/actividad/${actividadId}`),
};

// Actividades Herramientas
export const herramientasApi = {
  getAll: () => api.get('/actividades-herramientas'),
  getById: (id) => api.get(`/actividades-herramientas/${id}`),
  create: (data) => api.post('/actividades-herramientas', data),
  update: (id, data) => api.patch(`/actividades-herramientas/${id}`, data),
  delete: (id) => api.delete(`/actividades-herramientas/${id}`),
  getByActividad: (actividadId) => api.get(`/actividades-herramientas/actividad/${actividadId}`),
};

// Actividades Responsables
export const responsablesApi = {
  getAll: () => api.get('/actividades-responsables'),
  getById: (id) => api.get(`/actividades-responsables/${id}`),
  create: (data) => api.post('/actividades-responsables', data),
  update: (id, data) => api.patch(`/actividades-responsables/${id}`, data),
  delete: (id) => api.delete(`/actividades-responsables/${id}`),
  getByActividad: (actividadId) => api.get(`/actividades-responsables/actividad/${actividadId}`),
};

// Actividades Servicios
export const serviciosApi = {
  getAll: () => api.get('/actividades-servicios'),
  getById: (id) => api.get(`/actividades-servicios/${id}`),
  create: (data) => api.post('/actividades-servicios', data),
  update: (id, data) => api.patch(`/actividades-servicios/${id}`, data),
  delete: (id) => api.delete(`/actividades-servicios/${id}`),
  getByActividad: (actividadId) => api.get(`/actividades-servicios/actividad/${actividadId}`),
};

export default api;