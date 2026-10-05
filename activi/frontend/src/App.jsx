import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ActividadesPage from './pages/ActividadesPage';
import HistorialPage from './pages/HistorialPage';
import EvidenciasPage from './pages/EvidenciasPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ActividadesPage />} />
          <Route path="actividades" element={<ActividadesPage />} />
          <Route path="historial" element={<HistorialPage />} />
          <Route path="evidencias" element={<EvidenciasPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
