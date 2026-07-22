import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import Flota from './pages/Flota.jsx'
import Destinos from './pages/Destinos.jsx'
import DestinoDetalle from './pages/DestinoDetalle.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

// <Routes> elige UNA <Route> según la URL actual.
// <Layout> es la ruta padre: aporta header + footer comunes,
// y sus rutas hijas se renderizan dentro con <Outlet />.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="flota" element={<Flota />} />
        <Route path="destinos" element={<Destinos />} />
        {/* Ruta con parámetro dinámico :region -> se lee con useParams() */}
        <Route path="destinos/:region" element={<DestinoDetalle />} />
        <Route path="contacto" element={<Contacto />} />
        {/* Ruta comodín: cualquier URL no definida cae en la página 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
