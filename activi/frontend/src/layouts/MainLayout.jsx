import { Outlet, useLocation } from 'react-router-dom';

const navItems = [
  {
    path: '/actividades',
    label: 'Actividades',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    path: '/historial',
    label: 'Historial',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    path: '/evidencias',
    label: 'Evidencias',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-[#f8faf9]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-emerald-100 flex flex-col fixed h-full">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-emerald-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-emerald-900 tracking-tight">AgroSoft</h1>
              <p className="text-[11px] text-emerald-500 font-medium">Gestion Agricola</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <p className="px-4 text-[10px] font-semibold text-emerald-400 uppercase tracking-widest mb-3">Modulos</p>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path === '/actividades' && location.pathname === '/');
            return (
              <a
                key={item.path}
                href={item.path}
                className={`sidebar-link ${isActive ? 'sidebar-link-active' : 'sidebar-link-inactive'}`}
              >
                {item.icon}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-emerald-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-sm font-semibold text-emerald-600">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">Usuario</p>
              <p className="text-xs text-gray-400 truncate">Administrador</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-emerald-50 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {navItems.find(n => location.pathname === n.path || (n.path === '/actividades' && location.pathname === '/'))?.label || 'Actividades'}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/20 focus:border-emerald-300 transition-all"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="relative p-2 text-gray-400 hover:text-emerald-600 transition-colors rounded-xl hover:bg-emerald-50">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
