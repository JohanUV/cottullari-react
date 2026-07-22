import { useState } from 'react'

const destinosOpciones = [
  'Sierra (Cotopaxi, Baños, Quito)',
  'Costa (Salinas, Manta, Esmeraldas)',
  'Oriente (Tena, Puyo)',
  'Colombia',
  'Perú',
  'Otro / Personalizado',
]

// Formulario de cotización. Envía los datos por fetch (AJAX) al backend PHP
// registrar.php, que guarda en MySQL. Vite hace de proxy para evitar CORS.
export default function CotizarForm({ destinoInicial = '' }) {
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setEnviando(true)
    setError('')
    try {
      const respuesta = await fetch('/registrar.php', {
        method: 'POST',
        body: new FormData(form),
      })
      const data = await respuesta.json()
      if (data.ok) {
        setEnviado(true)
      } else {
        setError(data.error || 'No se pudo enviar la solicitud.')
        setEnviando(false)
      }
    } catch (err) {
      setError('Error de conexión al enviar el formulario. Verifica que el servidor esté activo.')
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <div className="cotizar-form reveal-right is-visible">
        <div className="form-enviado">
          <h3>✓ Formulario enviado</h3>
          <p>
            Gracias por su solicitud. Nuestro equipo se pondrá en contacto en menos de 24 horas.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form className="cotizar-form reveal-right" onSubmit={handleSubmit}>
      <h3 className="form-title">Solicite su cotización</h3>

      <div className="form-row">
        <label htmlFor="nombre">Nombre completo *</label>
        <input type="text" id="nombre" name="nombre" required maxLength="80" placeholder="Ej. Juan Pérez" />
      </div>

      <div className="form-row form-row-double">
        <div>
          <label htmlFor="correo">Correo electrónico *</label>
          <input type="email" id="correo" name="correo" required placeholder="usuario@correo.com" />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono / WhatsApp</label>
          <input type="tel" id="telefono" name="telefono" maxLength="15" placeholder="0999 999 999" />
        </div>
      </div>

      <div className="form-row form-row-double">
        <div>
          <label htmlFor="destino">Destino del viaje</label>
          <select id="destino" name="destino" defaultValue={destinoInicial}>
            <option value="">Seleccione...</option>
            {destinosOpciones.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pasajeros">N° de pasajeros</label>
          <input type="number" id="pasajeros" name="pasajeros" min="1" max="60" placeholder="Ej. 25" />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="fecha">Fecha tentativa</label>
        <input type="date" id="fecha" name="fecha" />
      </div>

      <div className="form-row">
        <label htmlFor="mensaje">Mensaje adicional *</label>
        <textarea id="mensaje" name="mensaje" rows="4" required placeholder="Cuéntenos detalles del viaje, requerimientos especiales, etc."></textarea>
      </div>

      {error && (
        <p className="form-error" role="alert">⚠️ {error}</p>
      )}

      <button type="submit" className="btn btn-primary btn-block" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar solicitud →'}
      </button>
      <p className="form-note">Al enviar, aceptas que nos contactemos contigo para procesar tu cotización.</p>
    </form>
  )
}
