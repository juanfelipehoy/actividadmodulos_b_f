import { useState } from 'react';

const ActividadForm = ({ onSubmit, onCancel, initialData = {} }) => {
  const [formData, setFormData] = useState({
    titulo: initialData.titulo || '',
    descripcion: initialData.descripcion || '',
    tipo_actividad: initialData.tipo_actividad || 'siembra',
    estado: initialData.estado || 'pendiente',
    prioridad: initialData.prioridad || 'media',
    fecha_programada: initialData.fecha_programada || '',
    id_cultivo_real: initialData.id_cultivo_real || 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-5 border-b border-emerald-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {initialData.id_actividad ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  )}
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {initialData.id_actividad ? 'Editar Actividad' : 'Nueva Actividad'}
                </h2>
                <p className="text-xs text-gray-400">
                  {initialData.id_actividad ? 'Modifica los datos de la actividad' : 'Registra una nueva actividad agricola'}
                </p>
              </div>
            </div>
            <button onClick={onCancel} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Titulo */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Titulo</label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Ej: Riego de maiz"
            />
          </div>

          {/* Descripcion */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Descripcion</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows={3}
              className="input-field resize-none"
              placeholder="Describe la actividad..."
            />
          </div>

          {/* Grid: Tipo + Estado */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Tipo</label>
              <div className="relative">
                <select
                  name="tipo_actividad"
                  value={formData.tipo_actividad}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="siembra">Siembra</option>
                  <option value="riego">Riego</option>
                  <option value="fertilizacion">Fertilizacion</option>
                  <option value="cosecha">Cosecha</option>
                  <option value="poda">Poda</option>
                  <option value="plagas">Control de Plagas</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Estado</label>
              <div className="relative">
                <select
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="en_proceso">En Proceso</option>
                  <option value="completada">Completada</option>
                  <option value="cancelada">Cancelada</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Grid: Prioridad + Fecha */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Prioridad</label>
              <div className="relative">
                <select
                  name="prioridad"
                  value={formData.prioridad}
                  onChange={handleChange}
                  className="select-field"
                >
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1.5">Fecha Programada</label>
              <input
                type="date"
                name="fecha_programada"
                value={formData.fecha_programada}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button type="button" onClick={onCancel} className="btn-secondary flex-1">
              Cancelar
            </button>
            <button type="submit" className="btn-primary flex-1">
              {initialData.id_actividad ? 'Actualizar' : 'Crear Actividad'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActividadForm;
