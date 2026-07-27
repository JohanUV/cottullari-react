import { useState } from 'react'

const destinosOpciones = [
  'Sierra (Cotopaxi, Baños, Quito)',
  'Costa (Salinas, Manta, Esmeraldas)',
  'Oriente (Tena, Puyo)',
  'Colombia',
  'Perú',
  'Otro / Personalizado',
]

const WHATSAPP_NUMERO = '593987775286'

// El <input type="date"> entrega "2026-07-27"; lo pasamos a dd/mm/aaaa.
const formatearFecha = (iso) => {
  if (!iso) return ''
  const [anio, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${anio}`
}

// Arma el texto de la solicitud para WhatsApp. Omite los campos opcionales
// que el usuario dejó vacíos para que el mensaje no quede con huecos.
const construirMensajeWhatsApp = (datos) => {
  const lineas = [
    '*Solicitud de cotización — Cottullari S.A.*',
    '',
    `*Nombre:* ${datos.nombre}`,
    `*Correo:* ${datos.correo}`,
  ]
  if (datos.telefono) lineas.push(`*Teléfono:* ${datos.telefono}`)
  if (datos.destino) lineas.push(`*Destino:* ${datos.destino}`)
  if (datos.pasajeros) lineas.push(`*Pasajeros:* ${datos.pasajeros}`)
  if (datos.fecha) lineas.push(`*Fecha tentativa:* ${formatearFecha(datos.fecha)}`)
  lineas.push('', `*Mensaje:* ${datos.mensaje}`)
  return lineas.join('\n')
}

// Formulario de cotización.
// En desarrollo envía por fetch (AJAX) al backend PHP registrar.php, que
// guarda en MySQL; Vite hace de proxy para evitar CORS.
// En producción el sitio es estático en Cloudflare (no hay PHP ni MySQL), así
// que la solicitud se entrega por WhatsApp con los datos ya redactados.
export default function CotizarForm({ destinoInicial = '' }) {
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setEnviando(true)
    setError('')

    if (import.meta.env.PROD) {
      const datos = Object.fromEntries(new FormData(form))
      const texto = encodeURIComponent(construirMensajeWhatsApp(datos))
      // window.open dentro del handler del submit: el navegador lo cuenta como
      // acción del usuario y no lo bloquea como popup.
      window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`, '_blank', 'noopener')
      setEnviado(true)
      return
    }

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
          {import.meta.env.PROD ? (
            <p>
              Abrimos WhatsApp con su solicitud lista para enviar. Si no se abrió
              solo, escríbanos al <strong>098 777 5286</strong>. Atendemos 24 horas.
            </p>
          ) : (
            <p>
              Gracias por su solicitud. Nuestro equipo se pondrá en contacto en menos de 24 horas.
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <form className="cotizar-form reveal-right" onSubmit={handleSubmit}>
      <h3 className="form-title">Solicite su cotización</h3>

      <div className="form-row">
        <label htmlFor="nombre">Nombre completo *</label>
        <input type="text" id="nombre" name="nombre" required maxLength="80" autoComplete="name" placeholder="Ej. Juan Pérez" />
      </div>

      <div className="form-row form-row-double">
        <div>
          <label htmlFor="correo">Correo electrónico *</label>
          <input type="email" id="correo" name="correo" required autoComplete="email" spellCheck="false" placeholder="usuario@correo.com" />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono / WhatsApp</label>
          <input type="tel" id="telefono" name="telefono" maxLength="15" autoComplete="tel" inputMode="tel" placeholder="0999 999 999" />
        </div>
      </div>

      <div className="form-row form-row-double">
        <div>
          <label htmlFor="destino">Destino del viaje</label>
          <select id="destino" name="destino" defaultValue={destinoInicial}>
            <option value="">Seleccione…</option>
            {destinosOpciones.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pasajeros">N° de pasajeros</label>
          <input type="number" id="pasajeros" name="pasajeros" min="1" max="60" inputMode="numeric" placeholder="Ej. 25" />
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
        {enviando ? 'Enviando…' : 'Enviar solicitud →'}
      </button>
      <p className="form-note">Al enviar, aceptas que nos contactemos contigo para procesar tu cotización.</p>
    </form>
  )
}
