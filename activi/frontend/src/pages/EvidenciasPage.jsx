import { useState, useEffect } from 'react';
import { evidenciasApi } from '../services/api';

const EvidenciasPage = () => {
  const [evidencias, setEvidencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEvidencias();
  }, []);

  const loadEvidencias = async () => {
    try {
      setLoading(true);
      const response = await evidenciasApi.getAll();
      setEvidencias(response.data);
      setError(null);
    } catch (err) {
      setError('Error al cargar evidencias');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-80">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-400 font-medium">Cargando evidencias...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Evidencias</h1>
          <p className="text-sm text-gray-400 mt-0.5">Fotos y documentos de las actividades</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Nueva Evidencia
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}

      {/* Grid */}
      {evidencias.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-emerald-100/60">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Sin evidencias</h3>
          <p className="text-sm text-gray-400">Sube fotos o documentos de tus actividades</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {evidencias.map((evidencia) => (
            <div key={evidencia.id_actividad_evidencia} className="bg-white rounded-2xl border border-emerald-100/60 overflow-hidden hover:shadow-lg hover:shadow-emerald-100/40 transition-all duration-300 hover:-translate-y-0.5">
              <div className="aspect-video bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Actividad #{evidencia.id_actividad}</p>
                  <span className="text-xs text-gray-400">
                    {evidencia.fecha_registro ? new Date(evidencia.fecha_registro).toLocaleDateString('es-ES') : ''}
                  </span>
                </div>
                {evidencia.descripcion && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">{evidencia.descripcion}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EvidenciasPage;
