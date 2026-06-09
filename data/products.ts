import { amazonLink } from "@/lib/amazon";

export interface Product {
  slug: string;
  name: string;
  asin: string;
  price: string;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  badge?: string;
  categorySlug: string;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  priceRange: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "juguetes-montessori",
    name: "Juguetes Montessori",
    icon: "🧩",
    priceRange: "15€ — 79€",
    description: "Juguetes de madera y materiales naturales que potencian el aprendizaje autónomo siguiendo la filosofía Montessori.",
  },
  {
    slug: "juguetes-stem",
    name: "Juguetes STEM y Ciencia",
    icon: "🔬",
    priceRange: "25€ — 89€",
    description: "Kits de ciencia, robótica y programación para despertar la curiosidad científica y tecnológica de los niños.",
  },
  {
    slug: "juegos-mesa-educativos",
    name: "Juegos de mesa educativos",
    icon: "🎲",
    priceRange: "15€ — 49€",
    description: "Juegos de mesa que combinan diversión y aprendizaje: estrategia, creatividad y habilidades sociales.",
  },
  {
    slug: "construccion-lego",
    name: "Construcción y LEGO",
    icon: "🧱",
    priceRange: "19€ — 89€",
    description: "Sets de construcción, LEGO y juguetes magnéticos que desarrollan el pensamiento espacial y la creatividad.",
  },
  {
    slug: "libros-educativos",
    name: "Libros y recursos educativos",
    icon: "📚",
    priceRange: "9€ — 29€",
    description: "Libros de divulgación, enciclopedias visuales y recursos educativos para niños curiosos.",
  },
];

export const products: Product[] = [
  // MONTESSORI
  {
    slug: "hape-torre-colores-montessori",
    name: "Hape Torre de Colores Montessori",
    asin: "B074W7D3KJ",
    price: "€24,99",
    rating: 4.7,
    reviewCount: 3241,
    shortDescription: "Torre de anillas de madera para clasificar colores y tamaños. Para bebés de 12 meses a 3 años.",
    pros: ["Madera certificada FSC", "Colores brillantes no tóxicos", "Desarrolla motricidad fina", "Ideal desde 12 meses"],
    cons: ["Solo para menores de 3 años", "Piezas pueden perderse"],
    specs: { Edad: "+12 meses", Material: "Madera FSC", Piezas: "10 anillas + base", Certificación: "CE, FSC" },
    badge: "Más vendido",
    categorySlug: "juguetes-montessori",
  },
  {
    slug: "plan-toys-tablero-actividades",
    name: "PlanToys Tablero de Actividades",
    asin: "B07CQGQM3P",
    price: "€34,99",
    rating: 4.6,
    reviewCount: 2156,
    shortDescription: "Tablero de actividades con 6 ejercicios de habilidad. Desarrolla la concentración y motricidad.",
    pros: ["6 actividades distintas", "Madera sostenible", "Sin plásticos", "Muy durable"],
    cons: ["Solo madera natural sin colores vivos", "Precio medio-alto"],
    specs: { Edad: "+18 meses", Material: "Madera de caucho", Actividades: "6", Certificación: "CE" },
    badge: "Mejor calidad",
    categorySlug: "juguetes-montessori",
  },
  {
    slug: "melissa-doug-abaco-madera",
    name: "Melissa & Doug Ábaco de Madera",
    asin: "B001DQKUV6",
    price: "€19,99",
    rating: 4.5,
    reviewCount: 4521,
    shortDescription: "Ábaco clásico de madera con 100 cuentas de colores. Aprende a contar de forma divertida.",
    pros: ["100 cuentas 10 colores", "Madera resistente", "Excelente para aprender matemáticas", "Precio asequible"],
    cons: ["Sin instrucciones de actividades"],
    specs: { Edad: "+3 años", Cuentas: "100 en 10 colores", Material: "Madera" },
    badge: "Mejor precio",
    categorySlug: "juguetes-montessori",
  },
  // STEM
  {
    slug: "thames-kosmos-quimica-junior",
    name: "Thames & Kosmos Kit de Química Junior",
    asin: "B000BG2J3Q",
    price: "€39,99",
    rating: 4.5,
    reviewCount: 1876,
    shortDescription: "Kit de 50 experimentos de química para niños de 8-12 años. Incluye manual explicativo.",
    pros: ["50 experimentos incluidos", "Manual muy claro", "Reactivos seguros", "Despierta vocaciones científicas"],
    cons: ["Requiere supervisión adulta", "Algunos reactivos se agotan"],
    specs: { Edad: "8-12 años", Experimentos: "50", "Idioma manual": "Español" },
    badge: "Más completo",
    categorySlug: "juguetes-stem",
  },
  {
    slug: "lego-boost-programacion",
    name: "LEGO Boost Programación Creativa",
    asin: "B00AHZXZPU",
    price: "€89,99",
    rating: 4.6,
    reviewCount: 2341,
    shortDescription: "Introducción a la programación y robótica con LEGO. 847 piezas, 5 modelos programables.",
    pros: ["Introduce programación de forma lúdica", "5 modelos distintos", "App gratuita iOS/Android", "Compatible con LEGO Technic"],
    cons: ["Precio elevado", "Requiere tablet o smartphone"],
    specs: { Edad: "7-12 años", Piezas: "847", Modelos: "5", App: "Gratuita iOS/Android" },
    badge: "Mejor robótica",
    categorySlug: "juguetes-stem",
  },
  {
    slug: "national-geographic-microscopio",
    name: "National Geographic Microscopio para Niños",
    asin: "B07MQDKQ9D",
    price: "€49,99",
    rating: 4.4,
    reviewCount: 1543,
    shortDescription: "Microscopio real con 300x-900x de aumento. 52 accesorios y 10 muestras preparadas.",
    pros: ["Aumento real hasta 900x", "52 accesorios incluidos", "10 muestras preparadas", "Luz LED ajustable"],
    cons: ["Frágil si se cae", "No apto para menores de 8 años"],
    specs: { Edad: "+8 años", Aumento: "300x-900x", Muestras: "10 preparadas", Accesorios: "52" },
    badge: "Mejor ciencia",
    categorySlug: "juguetes-stem",
  },
  // JUEGOS DE MESA
  {
    slug: "dixit-juego-mesa",
    name: "Dixit Juego de Mesa",
    asin: "B07BFKPDXC",
    price: "€29,99",
    rating: 4.8,
    reviewCount: 12543,
    shortDescription: "El juego de mesa de creatividad e imaginación más premiado. Para 3-6 jugadores, de 8 años.",
    pros: ["Múltiples premios internacionales", "Desarrolla creatividad", "84 cartas ilustradas", "Para toda la familia"],
    cons: ["Requiere cierto nivel de abstracción", "No recomendado para menores de 8 años"],
    specs: { Edad: "+8 años", Jugadores: "3-6", Duración: "30 min", Idioma: "Español" },
    badge: "Más premiado",
    categorySlug: "juegos-mesa-educativos",
  },
  {
    slug: "catan-junior-juego-estrategia",
    name: "Catán Junior Juego de Estrategia",
    asin: "B08KJ4H7PR",
    price: "€24,99",
    rating: 4.6,
    reviewCount: 3241,
    shortDescription: "Versión junior del famoso Catan para niños de 6 años. Aprende estrategia, comercio y planificación.",
    pros: ["Introduce el pensamiento estratégico", "Versión simplificada del original", "Colorido y atractivo", "Rejugabilidad alta"],
    cons: ["Partidas pueden alargarse", "Requiere adulto para primeras partidas"],
    specs: { Edad: "+6 años", Jugadores: "2-4", Duración: "45 min" },
    badge: "Mejor estrategia",
    categorySlug: "juegos-mesa-educativos",
  },
  {
    slug: "virus-juego-cartas",
    name: "Virus! El Juego de Cartas",
    asin: "B09FFDP46V",
    price: "€14,99",
    rating: 4.7,
    reviewCount: 15432,
    shortDescription: "El juego de cartas más vendido en España. Rápido, divertido y para toda la familia.",
    pros: ["Muy fácil de aprender", "Partidas rápidas 20 min", "Para toda la familia", "Precio imbatible"],
    cons: ["Algo caótico con 6 jugadores", "Depende del azar"],
    specs: { Edad: "+8 años", Jugadores: "2-6", Duración: "20 min" },
    badge: "Más vendido",
    categorySlug: "juegos-mesa-educativos",
  },
  // CONSTRUCCION
  {
    slug: "lego-classic-caja-creativa",
    name: "LEGO Classic Caja Creativa Grande",
    asin: "B07PXMJM9Q",
    price: "€49,99",
    rating: 4.8,
    reviewCount: 8765,
    shortDescription: "La caja LEGO clásica con 790 piezas de todos los colores. Construcción libre sin límites.",
    pros: ["790 piezas multicolores", "Construcción completamente libre", "Compatible con todos los sets LEGO", "Fomenta creatividad"],
    cons: ["Sin instrucciones específicas", "No incluye figuras"],
    specs: { Edad: "+4 años", Piezas: "790", Tipo: "Construcción libre" },
    badge: "Más vendida",
    categorySlug: "construccion-lego",
  },
  {
    slug: "playmobil-ciudad-policia",
    name: "Playmobil Ciudad Comisaría Policía",
    asin: "B08Z9J7QXL",
    price: "€59,99",
    rating: 4.5,
    reviewCount: 3241,
    shortDescription: "Comisaría de policía con 2 figuras, vehículo y accesorios. Juego de rol completo.",
    pros: ["Muy completo con accesorios", "Figuras de calidad", "Fomenta juego creativo", "Piezas grandes no peligrosas"],
    cons: ["Piezas específicas no compatibles con otras marcas", "Precio medio"],
    specs: { Edad: "+4 años", Figuras: "2", Incluye: "Vehículo + accesorios" },
    badge: "Mejor juego de rol",
    categorySlug: "construccion-lego",
  },
  {
    slug: "geomag-magnetic-set-88",
    name: "Geomag Classic 88 Piezas Magnéticas",
    asin: "B09NMQT4YX",
    price: "€39,99",
    rating: 4.6,
    reviewCount: 2156,
    shortDescription: "88 piezas magnéticas para construcción 3D. Desarrolla pensamiento espacial y creatividad.",
    pros: ["Desarrolla pensamiento 3D", "Imanes muy seguros", "Construcciones estables", "Certificado juguete seguro"],
    cons: ["Precio elevado por pieza", "Requiere supervisión con menores de 3 años"],
    specs: { Edad: "+3 años", Piezas: "88", Tipo: "Magnéticas 3D", Certificación: "CE" },
    badge: "Mejor magnético",
    categorySlug: "construccion-lego",
  },
  // LIBROS
  {
    slug: "enciclopedia-visual-national-geographic",
    name: "National Geographic Enciclopedia Visual Niños",
    asin: "B07XKJM4QM",
    price: "€24,99",
    rating: 4.7,
    reviewCount: 5432,
    shortDescription: "Enciclopedia visual con 1.000 fotografías. Ciencia, naturaleza, historia y geografía para niños de 8-14 años.",
    pros: ["1.000 fotografías de alta calidad", "Contenido muy completo", "Ideal para primaria y secundaria", "Diseño muy atractivo"],
    cons: ["Texto denso para menores de 8 años", "Edición en papel pesado"],
    specs: { Edad: "8-14 años", Páginas: "304", Fotografías: "1.000" },
    badge: "Más completa",
    categorySlug: "libros-educativos",
  },
  {
    slug: "donde-esta-wally-coleccion",
    name: "¿Dónde está Wally? Colección Completa",
    asin: "B07XQL7MNY",
    price: "€29,99",
    rating: 4.8,
    reviewCount: 9876,
    shortDescription: "Los 6 libros clásicos de Wally en una caja. Desarrolla atención y concentración.",
    pros: ["6 libros incluidos", "Desarrolla atención y concentración", "Para toda la familia", "Clásico atemporal"],
    cons: ["Puede volverse repetitivo con el tiempo"],
    specs: { Edad: "+6 años", Libros: "6", Idioma: "Español" },
    badge: "Clásico imprescindible",
    categorySlug: "libros-educativos",
  },
  {
    slug: "aprende-programacion-scratch",
    name: "Aprende Programación con Scratch",
    asin: "B08MXKP9XC",
    price: "€19,99",
    rating: 4.5,
    reviewCount: 1876,
    shortDescription: "Libro de introducción a la programación con Scratch para niños de 8-12 años. 15 proyectos paso a paso.",
    pros: ["15 proyectos completos", "Muy visual y fácil de seguir", "Herramienta gratuita Scratch", "Introduce pensamiento computacional"],
    cons: ["Requiere ordenador para practicar"],
    specs: { Edad: "8-12 años", Proyectos: "15", Herramienta: "Scratch gratuito" },
    badge: "Mejor programación",
    categorySlug: "libros-educativos",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(count = 6): Product[] {
  return products.filter((p) => p.badge).slice(0, count);
}

export { amazonLink };
