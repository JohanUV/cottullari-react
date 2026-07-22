import IconWhatsApp from './IconWhatsApp.jsx'

// Botón flotante de WhatsApp.
export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/593987775286"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <IconWhatsApp size={32} />
      <span className="wa-pulse"></span>
    </a>
  )
}
