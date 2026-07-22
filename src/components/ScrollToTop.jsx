import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Cumple dos funciones:
// 1) Al cambiar de ruta, sube la vista al inicio (comportamiento esperado en una SPA).
// 2) Muestra un botón flotante "volver arriba" cuando el usuario baja bastante.
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { pathname } = useLocation()

  // (1) Reinicia el scroll en cada navegación.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  // (2) Controla la visibilidad del botón.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top${visible ? ' is-visible' : ''}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}
