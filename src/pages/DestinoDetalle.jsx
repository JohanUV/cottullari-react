import { useParams, Link } from 'react-router-dom'
import { getDestino } from '../data/destinos.js'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function DestinoDetalle() {
  useReveal()

  // useParams() lee el parámetro dinámico :region de la URL.
  // Ej: en /destinos/sierra  ->  region === 'sierra'
  const { region } = useParams()
  const destino = getDestino(region)

  useDocumentTitle(destino ? destino.titulo : 'Destino')

  // Si el slug no corresponde a ningún destino, mostramos un aviso.
  if (!destino) {
    return (
      <section className="section-destinos">
        <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
          <span className="section-eyebrow">Destino no encontrado</span>
          <h2 className="section-title">No tenemos información de "{region}".</h2>
          <p className="section-desc">Revisa nuestros destinos disponibles.</p>
          <Link to="/destinos" className="btn btn-primary">← Volver a destinos</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section-destinos">
      <div className="container">
        <header className="section-header reveal">
          <Link to="/destinos" className="link-arrow">← Todos los destinos</Link>
          <span className="section-eyebrow" style={{ marginTop: '18px' }}>{destino.region}</span>
          <h2 className="section-title">{destino.titulo}</h2>
        </header>

        <div className="two-col">
          <div className="col-text reveal-left">
            <p className="lead">{destino.descripcion}</p>

            <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>Lugares que visitamos</h3>
            <ul className="amenities-grid">
              {destino.lugares.map((lugar) => (
                <li className="reveal-scale" key={lugar}><span>📍</span> {lugar}</li>
              ))}
            </ul>

            <div className="hero-actions" style={{ marginTop: '28px' }}>
              {/* Pasamos el destino por el state del Link; Contacto lo lee con useLocation
                  y el formulario preselecciona la opción correspondiente. */}
              <Link to="/contacto" state={{ destino: destino.formValue }} className="btn btn-primary">
                Cotizar este destino
              </Link>
              <Link to="/destinos" className="btn btn-ghost">Ver otros destinos</Link>
            </div>
          </div>

          <div className="col-card reveal-right">
            <div
              className="dest-img"
              role="img"
              aria-label={destino.titulo}
              style={{
                backgroundImage: `url('${destino.img}')`,
                minHeight: '380px',
                borderRadius: 'var(--r-lg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
