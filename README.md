# Cottullari S.A. — SPA con React + React Router

Conversión de la landing page personal del primer parcial en una **Single Page
Application (SPA)** con **React** y **enrutamiento con React Router**
(Laboratorio 2B — Programación Web, ESPE).

## Conceptos de enrutamiento aplicados

| Concepto | Dónde se usa en este proyecto |
|----------|-------------------------------|
| `BrowserRouter` | `src/main.jsx` — envuelve toda la app |
| `Routes` / `Route` | `src/App.jsx` — define cada ruta |
| `Link` / `NavLink` | `src/components/Header.jsx`, `Footer.jsx`, tarjetas |
| Ruta con parámetro `:region` | `src/App.jsx` → `/destinos/:region` |
| `useParams` | `src/pages/DestinoDetalle.jsx` — lee `:region` |
| `Outlet` | `src/components/Layout.jsx` — layout compartido |
| Ruta comodín `*` (404) | `src/pages/NotFound.jsx` |

## Rutas de la SPA

- `/` — Inicio (hero + estadísticas)
- `/nosotros` — Sobre la empresa
- `/servicios` — Servicios ofrecidos
- `/flota` — Flota, comodidades, carrusel y video
- `/destinos` — Las 5 regiones (cada tarjeta es un `Link`)
- `/destinos/:region` — Detalle de una región (usa `useParams`)
- `/contacto` — Formulario de cotización, ubicación y WhatsApp
- `*` — Página 404

## Requisitos

- Node.js y npm instalados.
- **XAMPP con Apache + MySQL** para el formulario de cotización:
  - El backend PHP original vive en `C:\xampp\htdocs\cottullari`.
  - Importa `cottullari.sql` en phpMyAdmin (crea la BD `cottullari`).

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre la URL que muestra Vite (por defecto http://localhost:5173).

### Formulario de cotización (PHP + MySQL)

`vite.config.js` incluye un **proxy** que reenvía las peticiones
`POST /registrar.php` hacia `http://localhost/cottullari/registrar.php`
(XAMPP). Así el formulario guarda en MySQL sin problemas de CORS.
Para que funcione, Apache y MySQL de XAMPP deben estar encendidos.

## Estructura

```
src/
├─ main.jsx            → BrowserRouter
├─ App.jsx             → Routes / Route
├─ components/         → Layout, Header, Footer, Stats, DestinoCard,
│                        ServicioCard, CotizarForm, WhatsAppFloat, ScrollToTop
├─ pages/              → Home, Nosotros, Servicios, Flota, Destinos,
│                        DestinoDetalle, Contacto, NotFound
├─ data/              → destinos.js, servicios.js, flota.js
├─ hooks/             → useReveal.js
└─ styles/style.css   → estilos (reutilizados del sitio original)
```
