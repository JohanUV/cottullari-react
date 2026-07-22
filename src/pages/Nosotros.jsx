import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Nosotros() {
  useReveal()
  useDocumentTitle('Nosotros')

  return (
    <section id="nosotros" className="section-nosotros">
      <div className="blob-deco-1"></div>
      <div className="blob-deco-2"></div>
      <div className="container two-col">
        <div className="col-text reveal-left">
          <span className="section-eyebrow">Sobre nosotros</span>
          <h2 className="section-title">Pioneros del <em>turismo terrestre</em> en Cotopaxi.</h2>
          <p className="lead">
            La Compañía de Transporte de Turismo Cottullari S.A. nació el 26 de marzo y fue
            aprobada por la Superintendencia de Compañías el 1 de abril de 2010. Su fundador,
            el Sr. Javier Díaz, junto a un equipo de socios visionarios cargados de grandes sueños y esperanzas,
            inició la actividad económica con 9 unidades.
          </p>
          <p className="lead">
            Gracias a la calidad del servicio y la confianza de nuestros clientes, nuestra
            actividad se expandió rápidamente. Actualmente contamos con
            <strong> 22 unidades</strong> entre buses, microbuses y furgonetas, con seguros
            nacionales e internacionales del Pacto Andino.
          </p>
          <Link to="/contacto" className="link-arrow">Conoce más sobre la empresa</Link>
        </div>
        <div className="col-card reveal-right">
          <article className="value-card">
            <header><span>01</span> Misión</header>
            <p>
              Representar eficientemente a la provincia de Cotopaxi como pioneros del transporte
              turístico, consolidando nuestra imagen en el mercado nacional e internacional,
              apoyando a los socios al fortalecimiento de la calidad del servicio y brindando
              seguridad a nuestros pasajeros.
            </p>
          </article>
          <article className="value-card value-card-dark">
            <header><span>02</span> Visión</header>
            <p>
              Trabajar con eficiencia y eficacia dentro y fuera de la provincia para fortalecer
              nuestra compañía, generando confianza en cada uno de nuestros clientes a través
              del buen servicio.
            </p>
          </article>
        </div>
      </div>

      <div className="container team-section reveal-scale">
        <div className="team-photo-frame">
          <img src="/img/socios.jpg" alt="Equipo de socios y colaboradores de Cottullari S.A. - 16 años de aniversario" loading="lazy" />
          <div className="team-overlay">
            <span className="team-badge">★ 16 AÑOS DE TRAYECTORIA</span>
            <h3>Una <em>familia</em> que crece junto a usted</h3>
            <p>Más de 30 colaboradores comprometidos con su seguridad y comodidad en cada viaje.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
