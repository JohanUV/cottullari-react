import { flota, comodidades, carrusel } from '../data/flota.js'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Flota() {
  useReveal()
  useDocumentTitle('Flota')

  return (
    <>
      <section id="flota" className="section-flota">
        <div className="blob-flota-1"></div>
        <div className="blob-flota-2"></div>
        <div className="container">
          <header className="section-header section-header-light reveal">
            <span className="section-eyebrow">Nuestra flota</span>
            <h2 className="section-title">22 unidades modernas para cada tipo de grupo.</h2>
            <p className="section-desc">
              Buses, microbuses y vans equipados con tecnología de confort,
              asegurados nacional e internacionalmente.
            </p>
          </header>

          <div className="fleet-table-wrapper reveal-scale">
            <table className="fleet-table">
              <thead>
                <tr>
                  <th>Tipo de unidad</th>
                  <th>Capacidad</th>
                  <th>Ideal para</th>
                  <th>Servicios incluidos</th>
                  <th>Categoría</th>
                </tr>
              </thead>
              <tbody>
                {flota.map((u) => (
                  <tr key={u.tipo}>
                    <td>
                      <strong>{u.tipo}</strong> {u.detalle && <small>{u.detalle}</small>}
                    </td>
                    <td><span className="fleet-cap">{u.capacidad}</span></td>
                    <td>{u.ideal}</td>
                    <td>{u.servicios}</td>
                    <td><span className={`badge ${u.badgeClass}`}>{u.badge}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="amenities reveal">
            <h3 className="amenities-title">Comodidades en nuestras unidades</h3>
            <ul className="amenities-grid">
              {comodidades.map((c, i) => (
                <li className="reveal-scale" data-delay={100 + i * 50} key={c.texto}>
                  <span>{c.icono}</span> {c.texto}
                </li>
              ))}
            </ul>
          </div>

          <div className="fleet-showcase reveal-scale" data-delay="200">
            <img src="/img/flota-completa.jpg" alt="Flota completa de Cottullari S.A. estacionada" loading="lazy" />
            <div className="fleet-showcase-overlay">
              <h3>Flota completa <em>en operación</em></h3>
              <p>Unidades modernas listas para llevarte a cualquier destino del Ecuador y más allá.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de unidades */}
      <section className="section-carrusel">
        <div className="container">
          <header className="section-header reveal">
            <span className="section-eyebrow">Conoce nuestras unidades</span>
            <h2 className="section-title">Cada categoría, <em>una experiencia.</em></h2>
            <p className="section-desc">
              Desde buses Premium hasta busetas ejecutivas, todas las unidades equipadas
              con tecnología de confort.
            </p>
          </header>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {/* Duplicamos las slides para lograr el bucle infinito de la animación CSS */}
            {[...carrusel, ...carrusel].map((s, i) => (
              <div className="carousel-slide" key={i}>
                <img src={s.img} alt={i < carrusel.length ? s.alt : ''} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multimedia */}
      <section id="experiencia" className="section-multimedia">
        <div className="blob-mm"></div>
        <div className="container">
          <header className="section-header section-header-light reveal">
            <span className="section-eyebrow">En movimiento</span>
            <h2 className="section-title">Conoce el viaje <em>antes de viajar.</em></h2>
          </header>

          <div className="media-wrapper reveal-scale">
            <div className="media-frame">
              <video controls poster="/img/banner-flota.jpg">
                <source src="/video/promo.mp4" type="video/mp4" />
                Su navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="media-caption">
              ¿Aún no tiene el video listo? Visite nuestra{' '}
              <a href="https://www.facebook.com/CottullariSA" target="_blank" rel="noopener">página oficial de Facebook</a>{' '}
              para ver fotos y testimonios reales.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
