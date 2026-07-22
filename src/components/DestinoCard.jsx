import { Link } from 'react-router-dom'

// Cada tarjeta de destino es un <Link> que lleva a la ruta con parámetro
// /destinos/:region  (ej. /destinos/sierra).
export default function DestinoCard({ destino, delay }) {
  return (
    <Link
      to={`/destinos/${destino.slug}`}
      className={`dest-card${destino.large ? ' dest-card-large' : ''} ${destino.large ? 'reveal-scale' : 'reveal'}`}
      data-delay={delay}
    >
      <div
        className="dest-img"
        role="img"
        aria-label={destino.titulo}
        style={{ backgroundImage: `url('${destino.img}')` }}
      ></div>
      <div className="dest-overlay">
        <span className="dest-region">{destino.region}</span>
        <h3>{destino.titulo}</h3>
        <p>{destino.resumen}</p>
      </div>
    </Link>
  )
}
