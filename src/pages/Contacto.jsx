import { useLocation } from 'react-router-dom'
import CotizarForm from '../components/CotizarForm.jsx'
import IconWhatsApp from '../components/IconWhatsApp.jsx'
import useReveal from '../hooks/useReveal.js'
import useDocumentTitle from '../hooks/useDocumentTitle.js'

export default function Contacto() {
  useReveal()
  useDocumentTitle('Contacto')

  // Si llegamos desde "Cotizar este destino", el destino viene en el state
  // de la navegación y preseleccionamos esa opción en el formulario.
  const location = useLocation()
  const destinoInicial = location.state?.destino ?? ''

  return (
    <>
      {/* Cotización */}
      <section id="cotizacion" className="section-cotizacion">
        <div className="blob-cot-1"></div>
        <div className="blob-cot-2"></div>
        <div className="container two-col two-col-form">
          <div className="form-info reveal-left">
            <span className="section-eyebrow">Cotice su viaje</span>
            <h2 className="section-title">Cuéntenos a <em>dónde quiere ir.</em></h2>
            <p className="lead">
              Complete el formulario y nuestro equipo se pondrá en contacto en menos de 24 horas
              con una propuesta personalizada según su destino, número de pasajeros y fechas.
            </p>
            <ul className="form-bullets">
              <li>Respuesta en menos de 24 horas</li>
              <li>Cotización sin compromiso</li>
              <li>Asesoría personalizada</li>
              <li>Seguros nacionales e internacionales</li>
            </ul>
            <p className="form-direct">
              ¿Prefiere hablar directamente?<br />
              <a href="https://wa.me/593987775286" target="_blank" rel="noopener" className="link-wa">📱 WhatsApp 24h: 098 777 5286</a>
            </p>
          </div>

          <CotizarForm destinoInicial={destinoInicial} />
        </div>
      </section>

      {/* Ubicación */}
      <section id="contacto" className="section-ubicacion">
        <div className="container">
          <header className="section-header reveal">
            <span className="section-eyebrow">Visítenos</span>
            <h2 className="section-title">Dos oficinas para <em>servirle mejor.</em></h2>
          </header>

          <div className="locations">
            <div className="map-frame reveal-left">
              <iframe
                src="https://www.google.com/maps?q=-0.9227485,-78.6203378&z=17&output=embed"
                title="Ubicación matriz de Cottullari S.A. en Latacunga"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="locations-info">
              <article className="office-card office-card-main reveal-right" data-delay="100">
                <span className="office-tag">MATRIZ</span>
                <h3>Latacunga</h3>
                <p>📍 Av. Amazonas N° 18-21 y Alfredo Baquerizo Moreno</p>
                <p>📞 032 385 395</p>
                <p>📱 0995 547 096 · 0997 713 123</p>
                <p>🕐 Lun–Vie 09:00–18:00 · Sáb 08:00–12:00</p>
              </article>
              <article className="office-card reveal-right" data-delay="200">
                <span className="office-tag">SUCURSAL</span>
                <h3>Ambato</h3>
                <p>📍 Av. Bolivariana km 4.5, calle Plantón</p>
                <p>(junto a Teojama Comercial S.A.)</p>
              </article>
              <article className="office-card office-card-dark reveal-right" data-delay="300">
                <span className="office-tag">24 HORAS</span>
                <h3>Atención inmediata</h3>
                <p>📱 WhatsApp: 098 777 5286</p>
                <p>✉️ cotullari@hotmail.com</p>
                <a href="https://www.facebook.com/CottullariSA" target="_blank" rel="noopener" className="link-arrow link-arrow-light">Síganos en Facebook</a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp con mockup de chat */}
      <section id="whatsapp" className="section-whatsapp">
        <div className="whats-blob-1"></div>
        <div className="whats-blob-2"></div>
        <div className="container two-col two-col-whats">
          <div className="whatsapp-info reveal-left">
            <span className="section-eyebrow whats-eyebrow">Contacto directo</span>
            <h2 className="section-title section-title-light">Escríbenos por <em className="green-em">WhatsApp</em></h2>
            <p className="lead lead-light">
              Resolvemos tus dudas al instante. Información sobre tarifas, fechas disponibles
              y rutas para tu próximo viaje.
            </p>
            <ul className="form-bullets form-bullets-light">
              <li>Respuesta inmediata</li>
              <li>Información personalizada</li>
              <li>Asesoría sobre tarifas y rutas</li>
              <li>Reserva sin compromiso</li>
            </ul>
            <a href="https://wa.me/593987775286" target="_blank" rel="noopener noreferrer" className="btn btn-whats">
              <IconWhatsApp size={22} />
              Iniciar Conversación
            </a>
            <p className="whatsapp-phone">📞 098 777 5286 · Servicio 24 horas</p>
          </div>

          <div className="whatsapp-mockup reveal-right">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="chat-header">
                <div className="chat-avatar">
                  <img src="/img/logo.png" alt="Cottullari" loading="lazy" />
                </div>
                <div className="chat-info">
                  <strong>Cottullari S.A.</strong>
                  <small>● En línea</small>
                </div>
              </div>
              <div className="chat-messages">
                <div className="chat-date">HOY · 10:32 AM</div>
                <div className="msg msg-them">
                  ¡Hola! 👋 Bienvenido a Cottullari Turismo.<br />
                  ¿En qué podemos ayudarte hoy?
                </div>
                <div className="msg msg-me">
                  Hola, necesito un bus para 35 personas a Cuenca el próximo viernes 🚌
                </div>
                <div className="msg msg-them">
                  ¡Perfecto! Tenemos un bus de 45 PAX disponible para esa fecha. ¿Es viaje de ida y vuelta o solo ida?
                </div>
                <div className="msg msg-me">
                  Ida y vuelta. Saliendo a las 6 AM y regreso domingo en la tarde
                </div>
                <div className="msg msg-typing"><span></span><span></span><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
