import ServicioCard from '../components/ServicioCard.jsx'
import { servicios } from '../data/servicios.js'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Servicios() {
  useReveal()
  useDocumentTitle('Servicios')

  return (
    <section id="servicios" className="section-servicios">
      <div className="shape-deco"></div>
      <div className="container">
        <header className="section-header reveal">
          <span className="section-eyebrow">Lo que hacemos</span>
          <h2 className="section-title">Servicios <em>diseñados</em> para cada viaje.</h2>
          <p className="section-desc">
            Sea una gira académica, un viaje corporativo o unas vacaciones familiares,
            tenemos la unidad y la ruta perfecta.
          </p>
        </header>

        <ul className="services-grid">
          {servicios.map((s, i) => (
            <ServicioCard key={s.titulo} servicio={s} delay={((i % 3) + 1) * 100} />
          ))}
        </ul>
      </div>
    </section>
  )
}
