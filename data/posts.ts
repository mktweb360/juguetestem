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
    relatedProducts: ["cosyland-torre-aprendizaje-antivuelco", "torre-rosa-montessori-10-cubos-madera", "beeloom-panda-tower-torre-aprendizaje"],
  },
  {
    slug: "juguetes-stem-ninos-8-anos",
    title: "Los mejores juguetes STEM para niños de 8 a 12 años",
    excerpt: "Selección de los mejores kits de ciencia, robótica y programación para niños de 8 a 12 años. Comparativa y guía de compra.",
    category: "STEM",
    date: "2025-01-20",
    readTime: 9,
    relatedProducts: ["thames-kosmos-intro-chemistry-27-experimentos", "national-geographic-microscopio-kit-37-piezas", "national-geographic-microscopio-800x-smartphone"],
  },
  {
    slug: "mejores-juegos-mesa-familia",
    title: "Los mejores juegos de mesa para toda la familia en 2025",
    excerpt: "Los 3 mejores juegos de mesa para familias en 2025: guía por edad y número de jugadores para elegir el juego perfecto.",
    category: "Juegos de mesa",
    date: "2025-07-10",
    readTime: 8,
    relatedProducts: ["dixit-juego-mesa-asmodee-2021", "virus-juego-cartas-tranjis-games", "catan-junior-devir-6-anos"],
  },
  {
    slug: "lego-vs-playmobil-cual-elegir",
    title: "LEGO vs Playmobil: cuál elegir según la edad y el perfil de tu hijo",
    excerpt: "Comparativa detallada entre LEGO y Playmobil. Descubre qué marca encaja mejor según la edad, intereses y tipo de juego de tu hijo.",
    category: "Construcción",
    date: "2025-02-15",
    readTime: 7,
    relatedProducts: ["lego-10698-caja-ladrillos-creativos-grande", "lego-classic-caja-creativa-xxl-10697", "geomag-classic-color-91-piezas"],
  },
  {
    slug: "como-elegir-juguete-educativo",
    title: "Cómo elegir un juguete educativo de verdad (y no caer en el marketing)",
    excerpt: "No todos los juguetes etiquetados como educativos lo son. Aprende a distinguir los juguetes que realmente potencian el desarrollo de tu hijo.",
    category: "Guías",
    date: "2025-03-01",
    readTime: 8,
    relatedProducts: ["beeloom-panda-tower-torre-aprendizaje", "torre-rosa-montessori-10-cubos-madera", "national-geographic-mega-kit-excavacion-gemas"],
  },
  {
    slug: "juguetes-regalo-navidad-ninos",
    title: "Los mejores juguetes para regalar en Navidad 2025 — Guía por edades",
    excerpt: "La guía definitiva de juguetes para Navidad 2025 organizada por edades: de 0 a 2, de 3 a 6, de 7 a 12 años. Recomendaciones reales.",
    category: "Guías",
    date: "2025-03-15",
    readTime: 12,
    relatedProducts: ["lego-10698-caja-ladrillos-creativos-grande", "dixit-juego-mesa-asmodee-2021", "geomag-classic-color-91-piezas", "science4you-robotics-alfabot-238-piezas"],
  },
  {
    slug: "introduccion-programacion-ninos",
    title: "Cómo introducir la programación a niños de forma divertida",
    excerpt: "La programación ya es una habilidad esencial. Descubre los mejores métodos y juguetes para que tus hijos aprendan a programar sin aburrirse.",
    category: "STEM",
    date: "2025-04-01",
    readTime: 9,
    relatedProducts: ["science4you-robotics-alfabot-238-piezas", "thames-kosmos-intro-chemistry-27-experimentos", "national-geographic-microscopio-kit-37-piezas"],
  },
  {
    slug: "beneficios-juego-libre-montessori",
    title: "Beneficios del juego libre y la filosofía Montessori en casa",
    excerpt: "El juego libre es esencial para el desarrollo infantil. Cómo aplicar los principios Montessori en casa para fomentar la autonomía y creatividad.",
    category: "Montessori",
    date: "2025-04-15",
    readTime: 7,
    relatedProducts: ["torre-rosa-montessori-10-cubos-madera", "geomag-classic-color-91-piezas", "cosyland-torre-aprendizaje-antivuelco"],
  },
  {
    slug: "mejores-juguetes-stem-ninos-5-anos",
    title: "Los mejores juguetes STEM para niños de 5 años en 2025",
    excerpt: "Guía de los mejores juguetes STEM para niños de 5 años: kits de ciencia, construcción y experimentos que estimulan el aprendizaje.",
    category: "STEM",
    date: "2025-07-01",
    readTime: 7,
    relatedProducts: ["thames-kosmos-kids-first-science-kit", "national-geographic-mega-kit-excavacion-gemas", "geomag-classic-color-91-piezas"],
  },
  {
    slug: "mejores-juguetes-montessori-2025",
    title: "Los mejores juguetes Montessori en 2025 — Guía para padres",
    excerpt: "Los mejores juguetes Montessori de 2025 para niños de 1 a 6 años: torres de aprendizaje, materiales sensoriales y juegos de madera.",
    category: "Montessori",
    date: "2025-07-03",
    readTime: 8,
    relatedProducts: ["cosyland-torre-aprendizaje-antivuelco", "beeloom-panda-tower-torre-aprendizaje", "torre-rosa-montessori-10-cubos-madera"],
  },
  {
    slug: "juguetes-reyes-magos-2026",
    title: "Los mejores juguetes para Reyes Magos 2026 — Guía de regalos por edad",
    excerpt: "Guía completa de los mejores juguetes para Reyes Magos 2026 por edad y tipo: STEM, Montessori, juegos de mesa, construcción y más.",
    category: "Guías",
    date: "2025-07-05",
    readTime: 9,
    relatedProducts: ["national-geographic-mega-kit-excavacion-gemas", "catan-junior-devir-6-anos", "lego-10698-caja-ladrillos-creativos-grande", "science4you-robotics-alfabot-238-piezas"],
  },
  {
    slug: "mejores-kits-ciencia-ninos",
    title: "Los mejores kits de ciencia para niños en 2025",
    excerpt: "Análisis de los mejores kits de ciencia para niños: experimentos de química, microscopios y kits STEM que hacen que aprender sea divertido.",
    category: "STEM",
    date: "2025-07-08",
    readTime: 8,
    relatedProducts: ["thames-kosmos-intro-chemistry-27-experimentos", "thames-kosmos-kids-first-science-kit", "national-geographic-microscopio-kit-37-piezas"],
  },
  {
    slug: "juguetes-educativos-3-anos",
    title: "Los mejores juguetes educativos para niños de 3 años en 2025",
    excerpt: "Guía de juguetes educativos para niños de 3 años: Montessori, construcción magnética y primeros kits de ciencia que estimulan el desarrollo.",
    category: "Guías",
    date: "2025-07-12",
    readTime: 7,
    relatedProducts: ["torre-rosa-montessori-10-cubos-madera", "geomag-classic-color-91-piezas", "cosyland-torre-aprendizaje-antivuelco"],
  },
  {
    slug: "mejores-lego-educativos",
    title: "Los mejores sets de LEGO educativos para niños en 2025",
    excerpt: "Análisis de los mejores sets LEGO educativos en 2025: Creative Box, Classic y sets para desarrollar creatividad y pensamiento espacial.",
    category: "Construcción",
    date: "2025-07-14",
    readTime: 7,
    relatedProducts: ["lego-10698-caja-ladrillos-creativos-grande", "lego-classic-caja-creativa-xxl-10697", "geomag-classic-color-91-piezas"],
  },
  {
    slug: "regalos-navidad-ninos-inteligentes",
    title: "Los mejores regalos de Navidad para niños inteligentes 2025",
    excerpt: "Guía de regalos de Navidad para niños 2025: juguetes educativos, STEM, Montessori y juegos de mesa que son divertidos y estimulantes.",
    category: "Guías",
    date: "2025-07-16",
    readTime: 9,
    relatedProducts: ["national-geographic-microscopio-kit-37-piezas", "dixit-juego-mesa-asmodee-2021", "science4you-robotics-alfabot-238-piezas", "lego-10698-caja-ladrillos-creativos-grande"],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getLatestPosts(count = 6): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, count);
}
