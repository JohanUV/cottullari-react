import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Stats from '../components/Stats.jsx'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Home() {
  useReveal()
  useDocumentTitle('')

  // Parallax sutil del fondo del hero (igual que el sitio original).
  useEffect(() => {
    const heroBg = document.querySelector('.hero-bg')
    if (!heroBg) return
    const onScroll = () => {
      const s = window.scrollY
      if (s < 800) heroBg.style.transform = `scale(1.05) translateY(${s * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <section id="inicio" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-shapes">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
          <div className="ring-1"></div>
        </div>
        <div className="container hero-content">
          <span className="eyebrow">LÍDERES EN TRANSPORTE TURÍSTICO · DESDE 2010</span>
          <h1 className="hero-title">
            Vive Ecuador<br />
            <em>como nunca antes.</em>
          </h1>
          <p className="hero-subtitle">
            Calidad, confort y seguridad en cada destino. Llevamos a turistas, empresas e instituciones
            por la Costa, Sierra, Oriente, Colombia y Perú con nuestra flota de 22 unidades modernas.
          </p>
          <div className="hero-actions">
            <Link to="/contacto" className="btn btn-primary">Cotiza tu viaje</Link>
            <Link to="/flota" className="btn btn-ghost">Ver nuestra flota</Link>
          </div>
          <div className="hero-scroll">
            <span className="hero-scroll-line"></span> Desliza para conocer más
          </div>
        </div>
      </section>

      <Stats />

      {/* Teaser de secciones — invita a navegar por las rutas de la SPA */}
      <section className="section-servicios">
        <div className="container">
          <header className="section-header reveal">
            <span className="section-eyebrow">Bienvenido</span>
            <h2 className="section-title">Todo lo que necesitas para tu <em>próximo viaje.</em></h2>
            <p className="section-desc">
              Explora nuestra compañía, servicios, flota moderna y los destinos que cubrimos
              en Ecuador y el exterior.
            </p>
          </header>
          <ul className="services-grid">
            <li className="service-card reveal" data-delay="100">
              <div className="service-icon">🏢</div>
              <h3>Nosotros</h3>
              <p>16 años representando a Cotopaxi como pioneros del turismo terrestre.</p>
              <Link to="/nosotros" className="link-arrow">Conócenos</Link>
            </li>
            <li className="service-card reveal" data-delay="200">
              <div className="service-icon">🚌</div>
              <h3>Flota</h3>
              <p>22 unidades modernas: buses, microbuses y vans equipadas con confort premium.</p>
              <Link to="/flota" className="link-arrow">Ver flota</Link>
            </li>
            <li className="service-card reveal" data-delay="300">
              <div className="service-icon">🗺️</div>
              <h3>Destinos</h3>
              <p>Cinco regiones: Sierra, Costa, Oriente, Colombia y Perú.</p>
              <Link to="/destinos" className="link-arrow">Ver destinos</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
