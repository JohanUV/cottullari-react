// Datos de los destinos. El campo `slug` se usa en la ruta con parámetros
// /destinos/:region  ->  se lee con useParams() en DestinoDetalle.jsx
export const destinos = [
  {
    slug: 'sierra',
    region: 'SIERRA',
    titulo: 'Andes y volcanes',
    resumen: 'Cotopaxi, Quilotoa, Baños, Otavalo, Quito y más.',
    // formValue debe coincidir con una opción del <select> del formulario
    formValue: 'Sierra (Cotopaxi, Baños, Quito)',
    img: '/img/sierra-cotopaxi.jpg',
    large: true,
    descripcion:
      'La Sierra ecuatoriana es nuestro hogar. Recorremos el Parque Nacional Cotopaxi, la laguna del Quilotoa, ' +
      'las cascadas de Baños, los mercados artesanales de Otavalo y el centro histórico de Quito, Patrimonio de la Humanidad.',
    lugares: ['Volcán Cotopaxi', 'Laguna Quilotoa', 'Baños de Agua Santa', 'Otavalo', 'Quito Colonial'],
  },
  {
    slug: 'costa',
    region: 'COSTA',
    titulo: 'Pacífico ecuatoriano',
    resumen: 'Salinas, Manta, Montañita, Esmeraldas.',
    formValue: 'Costa (Salinas, Manta, Esmeraldas)',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    large: false,
    descripcion:
      'Playas de arena dorada, sol todo el año y el mejor ambiente costero. Llevamos a tu grupo a los ' +
      'principales balnearios del Pacífico con total comodidad y seguridad.',
    lugares: ['Salinas', 'Manta', 'Montañita', 'Esmeraldas', 'Puerto López'],
  },
  {
    slug: 'oriente',
    region: 'ORIENTE',
    titulo: 'Selva viva',
    resumen: 'Tena, Puyo, Misahuallí, Yasuní.',
    formValue: 'Oriente (Tena, Puyo)',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80&auto=format&fit=crop',
    large: false,
    descripcion:
      'La Amazonía ecuatoriana te espera con su biodiversidad única. Rutas seguras hacia la puerta de entrada ' +
      'de la selva, con paradas en los principales atractivos naturales del Oriente.',
    lugares: ['Tena', 'Puyo', 'Misahuallí', 'Parque Yasuní'],
  },
  {
    slug: 'colombia',
    region: 'COLOMBIA',
    titulo: 'Con seguro DUTT',
    resumen: 'Pasto, Cali, Bogotá y rutas turísticas.',
    formValue: 'Colombia',
    img: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1200&q=80&auto=format&fit=crop',
    large: false,
    descripcion:
      'Viajes internacionales a Colombia con seguro DUTT y toda la documentación en regla. ' +
      'Rutas turísticas hacia las principales ciudades del país vecino.',
    lugares: ['Pasto', 'Cali', 'Bogotá'],
  },
  {
    slug: 'peru',
    region: 'PERÚ',
    titulo: 'Circuito cerrado',
    resumen: 'Tumbes, Lima, Cuzco, Machu Picchu.',
    formValue: 'Perú',
    img: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80&auto=format&fit=crop',
    large: false,
    descripcion:
      'Circuitos cerrados hacia el sur, con los seguros internacionales del Pacto Andino. ' +
      'Descubre las maravillas del Perú, desde la costa hasta la ciudadela de Machu Picchu.',
    lugares: ['Tumbes', 'Lima', 'Cuzco', 'Machu Picchu'],
  },
]

export const getDestino = (slug) => destinos.find((d) => d.slug === slug)
