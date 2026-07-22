import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Enlaces de navegación de la SPA. Cada uno apunta a una ruta.
const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/flota', label: 'Flota' },
  { to: '/destinos', label: 'Destinos' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Header con fondo sólido al hacer scroll (igual que el sitio original).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body cuando el menú móvil está abierto.
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Link en el logo: navega a Inicio sin recargar */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/img/logo.png" alt="Cottullari S.A. — Transporte de Turismo" />
        </Link>

        <nav className={`main-nav${open ? ' is-open' : ''}`} id="mainNav">
          {links.map((l) => (
            // NavLink agrega automáticamente la clase 'is-active' a la ruta actual
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="nav-cta" onClick={closeMenu}>
            Cotizar
          </Link>
        </nav>

        <Link to="/contacto" className="btn btn-primary btn-sm header-cta">
          Cotizar
        </Link>

        <button
          className={`nav-toggle${open ? ' is-active' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mainNav"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
