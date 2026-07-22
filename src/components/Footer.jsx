import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="logo-footer" src="/img/logo.png" alt="Cottullari S.A." />
          <p>
            Compañía de Transporte de Turismo. Líderes en transporte turístico desde 2010,
            representando a la provincia de Cotopaxi con calidad y seguridad.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/flota">Flota</Link></li>
            <li><Link to="/destinos">Destinos</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Av. Amazonas 18-21 · Latacunga</li>
            <li>032 385 395</li>
            <li>0995 547 096</li>
            <li>cotullari@hotmail.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Síganos</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com/CottullariSA" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
            <a href="https://wa.me/593987775286" target="_blank" rel="noopener" aria-label="WhatsApp">WA</a>
            <a href="mailto:cotullari@hotmail.com" aria-label="Correo">✉</a>
          </div>
          <p className="footer-tagline">"Vive una experiencia turística extraordinaria con calidad y confort"</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Compañía de Transporte de Turismo Cottullari S.A. Todos los derechos reservados.</p>
          <p>Sitio web desarrollado por Johan Untuña — ESPE Latacunga · Mayo 2026</p>
        </div>
      </div>
    </footer>
  )
}
