import { useEffect } from 'react'

// Actualiza el <title> de la pestaña según la página/ruta activa.
// Mejora el SEO y la experiencia al tener varias pestañas abiertas.
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — Cottullari S.A.`
      : 'Cottullari S.A. — Transporte Turístico en Ecuador'
  }, [title])
}
