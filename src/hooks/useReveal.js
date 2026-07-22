import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Replica el efecto de aparición por scroll del sitio original.
// Observa los elementos .reveal / .reveal-left / .reveal-right / .reveal-scale
// y les agrega la clase .is-visible cuando entran en pantalla.
// Se vuelve a ejecutar en cada cambio de ruta (por eso depende de location).
export default function useReveal() {
  const location = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])
}
