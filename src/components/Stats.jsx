const stats = [
  { numero: '16', label: 'Años de trayectoria' },
  { numero: '22', label: 'Unidades en flota' },
  { numero: '3', label: 'Países cubiertos' },
  { numero: '24/7', label: 'Atención disponible' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat reveal-scale" data-delay={i * 100} key={s.label}>
              <div className="stat-number">{s.numero}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
