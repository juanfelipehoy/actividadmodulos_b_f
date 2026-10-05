const ActividadCard = ({ actividad, onEdit, onDelete }) => {
  const getEstadoConfig = (estado) => {
    const configs = {
      pendiente: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-400' },
      en_proceso: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-400' },
      completada: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-400' },
      cancelada: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', dot: 'bg-red-400' },
    };
    return configs[estado] || configs.pendiente;
  };

  const getPrioridadConfig = (prioridad) => {
    const configs = {
      alta: { bg: 'bg-red-50', text: 'text-red-600', label: 'Alta' },
      media: { bg: 'bg-amber-50', text: 'text-amber-600', label: 'Media' },
      baja: { bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Baja' },
    };
    return configs[prioridad] || configs.media;
  };

  const getTipoIcon = (tipo) => {
    const icons = {
      siembra: '🌱',
      riego: '💧',
      fertilizacion: '🧪',
      cosecha: '🌾',
      poda: '✂️',
      plagas: '🐛',
    };
    return icons[tipo] || '📋';
  };

  const estadoConfig = getEstadoConfig(actividad.estado);
  const prioridadConfig = getPrioridadConfig(actividad.prioridad);

  return (
    <div className="group bg-white rounded-2xl border border-emerald-100/60 p-5 hover:shadow-lg hover:shadow-emerald-100/40 transition-all duration-300 hover:-translate-y-0.5">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
            {getTipoIcon(actividad.tipo_actividad)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">{actividad.titulo}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{actividad.tipo_actividad}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${estadoConfig.bg} ${estadoConfig.text} border ${estadoConfig.border}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${estadoConfig.dot}`}></span>
          {actividad.estado?.replace('_', ' ')}
        </div>
      </div>

      {/* Description */}
      {actividad.descripcion && (
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">{actividad.descripcion}</p>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {actividad.fecha_programada ? new Date(actividad.fecha_programada).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }) : 'Sin fecha'}
        </div>
        <div className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${prioridadConfig.bg} ${prioridadConfig.text}`}>
          {prioridadConfig.label}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
        <button
          onClick={() => onEdit(actividad)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-600 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Editar
        </button>
        <button
          onClick={() => onDelete(actividad.id_actividad)}
          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActividadCard;
