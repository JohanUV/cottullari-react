import { useRef, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'
import ScrollToTop from './ScrollToTop.jsx'

// Estructura común a todas las páginas.
// <Outlet /> es el hueco donde React Router inserta la página de la ruta activa.
export default function Layout() {
  const mainRef = useRef(null)
  const { pathname } = useLocation()
  const firstRender = useRef(true)

  // Accesibilidad: al navegar a otra ruta, mueve el foco al contenido principal
  // (para usuarios de teclado y lectores de pantalla). Se omite en la carga inicial.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus()
  }, [pathname])

  return (
    <>
      {/* Enlace "saltar al contenido": visible solo al tabular con el teclado */}
      <a href="#main-content" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  )
}
