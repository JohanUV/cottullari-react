import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function NotFound() {
  useReveal()
  useDocumentTitle('Página no encontrada')

  return (
    <section className="section-servicios">
      <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <span className="section-eyebrow">Error 404</span>
        <h2 className="section-title">Esta página se salió de la <em>ruta.</em></h2>
        <p className="section-desc">
          La dirección que buscas no existe. Regresa al inicio y sigue explorando Cottullari.
        </p>
        <Link to="/" className="btn btn-primary">← Volver al inicio</Link>
      </div>
    </section>
  )
}
