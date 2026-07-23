import Icon from './Icon.jsx'

export default function ServicioCard({ servicio, delay }) {
  return (
    <li className="service-card reveal" data-delay={delay}>
      <div className="service-icon"><Icon name={servicio.icono} /></div>
      <h3>{servicio.titulo}</h3>
      <p>{servicio.texto}</p>
    </li>
  )
}
