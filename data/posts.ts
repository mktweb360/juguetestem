export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  relatedProducts: string[];
}

export const posts: Post[] = [
  {
    slug: "mejores-juguetes-montessori-3-anos",
    title: "Los mejores juguetes Montessori para niños de 3 años en 2025",
    excerpt: "Guía completa para elegir juguetes Montessori para niños de 2 a 4 años: materiales, tipos y nuestras recomendaciones más vendidas.",
    category: "Montessori",
    date: "2025-01-10",
    readTime: 8,
    relatedProducts: ["hape-torre-colores-montessori", "melissa-doug-abaco-madera"],
  },
  {
    slug: "juguetes-stem-ninos-8-anos",
    title: "Los mejores juguetes STEM para niños de 8 a 12 años",
    excerpt: "Selección de los mejores kits de ciencia, robótica y programación para niños de 8 a 12 años. Comparativa y guía de compra.",
    category: "STEM",
    date: "2025-01-20",
    readTime: 9,
    relatedProducts: ["thames-kosmos-quimica-junior", "national-geographic-microscopio"],
  },
  {
    slug: "mejores-juegos-mesa-familia",
    title: "Los 10 mejores juegos de mesa para jugar en familia en 2025",
    excerpt: "Los juegos de mesa más divertidos y educativos para disfrutar en familia. Opciones para todas las edades y niveles.",
    category: "Juegos de mesa",
    date: "2025-02-01",
    readTime: 10,
    relatedProducts: ["dixit-juego-mesa", "virus-juego-cartas"],
  },
  {
    slug: "lego-vs-playmobil-cual-elegir",
    title: "LEGO vs Playmobil: cuál elegir según la edad y el perfil de tu hijo",
    excerpt: "Comparativa detallada entre LEGO y Playmobil. Descubre qué marca encaja mejor según la edad, intereses y tipo de juego de tu hijo.",
    category: "Construcción",
    date: "2025-02-15",
    readTime: 7,
    relatedProducts: ["lego-classic-caja-creativa", "playmobil-ciudad-policia"],
  },
  {
    slug: "como-elegir-juguete-educativo",
    title: "Cómo elegir un juguete educativo de verdad (y no caer en el marketing)",
    excerpt: "No todos los juguetes etiquetados como educativos lo son. Aprende a distinguir los juguetes que realmente potencian el desarrollo de tu hijo.",
    category: "Guías",
    date: "2025-03-01",
    readTime: 8,
    relatedProducts: ["hape-torre-colores-montessori", "plan-toys-tablero-actividades"],
  },
  {
    slug: "juguetes-regalo-navidad-ninos",
    title: "Los mejores juguetes para regalar en Navidad 2025 — Guía por edades",
    excerpt: "La guía definitiva de juguetes para Navidad 2025 organizada por edades: de 0 a 2, de 3 a 6, de 7 a 12 años. Recomendaciones reales.",
    category: "Guías",
    date: "2025-03-15",
    readTime: 12,
    relatedProducts: ["lego-boost-programacion", "dixit-juego-mesa", "geomag-magnetic-set-88"],
  },
  {
    slug: "introduccion-programacion-ninos",
    title: "Cómo introducir la programación a niños de forma divertida",
    excerpt: "La programación ya es una habilidad esencial. Descubre los mejores métodos y juguetes para que tus hijos aprendan a programar sin aburrirse.",
    category: "STEM",
    date: "2025-04-01",
    readTime: 9,
    relatedProducts: ["lego-boost-programacion", "aprende-programacion-scratch"],
  },
  {
    slug: "beneficios-juego-libre-montessori",
    title: "Beneficios del juego libre y la filosofía Montessori en casa",
    excerpt: "El juego libre es esencial para el desarrollo infantil. Cómo aplicar los principios Montessori en casa para fomentar la autonomía y creatividad.",
    category: "Montessori",
    date: "2025-04-15",
    readTime: 7,
    relatedProducts: ["plan-toys-tablero-actividades", "geomag-magnetic-set-88"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(count = 6): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
