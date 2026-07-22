import DestinoCard from '../components/DestinoCard.jsx'
import { destinos } from '../data/destinos.js'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Destinos() {
  useReveal()
  useDocumentTitle('Destinos')

  return (
    <section id="destinos" className="section-destinos">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-eyebrow">A dónde vamos</span>
          <h2 className="section-title">Cinco regiones, <em>una sola compañía.</em></h2>
          <p className="section-desc">
            Desde las playas del Pacífico hasta la selva amazónica y los mercados de Otavalo,
            pasando por Bogotá y Lima. Haz clic en cada destino para ver más detalles.
          </p>
        </header>

        <div className="destinations">
          {destinos.map((d, i) => (
            <DestinoCard key={d.slug} destino={d} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
