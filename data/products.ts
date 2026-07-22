import { amazonLink } from "@/lib/amazon";

export interface Product {
  slug: string;
  name: string;
  asin: string;
  price: string;
  priceMin?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription?: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  badge?: string;
  categorySlug: string;
  categoryName?: string;
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
    name: "Kits y recursos educativos",
    icon: "🧪",
    priceRange: "9€ — 29€",
    description: "Kits de robótica, excavación y ciencia para niños curiosos. Experimentos y proyectos STEM para aprender haciendo.",
  },
];

export const products: Product[] = [
  // JUGUETES MONTESSORI
  {
    slug: "beeloom-panda-tower-torre-aprendizaje",
    name: "Beeloom Panda Tower Torre de Aprendizaje Montessori 3 Niveles Gris",
    asin: "B093H92GR2",
    categorySlug: "juguetes-montessori",
    categoryName: "Juguetes Montessori",
    price: "€89,99",
    priceMin: 89,
    rating: 4.5,
    reviewCount: 1200,
    shortDescription: "Torre de aprendizaje Montessori Beeloom con 3 niveles de altura regulable, estable y segura para cocina y baño.",
    fullDescription: "La Beeloom Panda Tower es la torre de aprendizaje Montessori de referencia en Amazon España. Con 3 escalones de altura regulable, barandillas de protección y pies antideslizantes. Permite a los niños participar activamente en la cocina o el baño de forma segura. Fabricada en madera con acabado no tóxico apto para niños.",
    pros: ["3 niveles de altura regulable", "Barandillas de protección seguras", "Pies antideslizantes", "Madera con acabado no tóxico", "Fácil montaje"],
    cons: ["Requiere vigilancia de adulto", "Peso máximo limitado"],
    specs: { "Niveles": "3 altura regulable", "Material": "Madera", "Certificación": "CE", "Color": "Gris", "Uso": "Cocina y baño" },
    badge: "Más vendida",
  },
  {
    slug: "cosyland-torre-aprendizaje-antivuelco",
    name: "COSYLAND Torre de Aprendizaje Montessori Antivuelco CPC Bambu",
    asin: "B0CZ9837NN",
    categorySlug: "juguetes-montessori",
    categoryName: "Juguetes Montessori",
    price: "€79,99",
    priceMin: 79,
    rating: 4.6,
    reviewCount: 2283,
    shortDescription: "Torre aprendizaje Montessori COSYLAND certificada CPC con estructura antivuelco más estable. Desde 18 meses.",
    fullDescription: "La COSYLAND es la torre de aprendizaje más vendida en Amazon España gracias a su certificación CPC y su estructura antivuelco patentada. Desde 18 meses, permite a los bebés y niños pequeños explorar y participar en actividades del hogar de forma completamente segura. Color bambu natural elegante.",
    pros: ["Certificación CPC garantía de seguridad", "Estructura antivuelco más estable del mercado", "Desde 18 meses", "Bambu natural sostenible", "Más de 2.000 valoraciones positivas"],
    cons: ["Montaje requiere herramientas básicas", "Precio ligeramente superior a competidores"],
    specs: { "Desde": "18 meses", "Certificación": "CPC", "Material": "Bambu natural", "Seguridad": "Antivuelco patentada" },
  },
  {
    slug: "torre-rosa-montessori-10-cubos-madera",
    name: "Torre Rosa Montessori 10 Cubos Madera Natural Fabricada en Galicia",
    asin: "B0B4BL9M15",
    categorySlug: "juguetes-montessori",
    categoryName: "Juguetes Montessori",
    price: "€34,99",
    priceMin: 34,
    rating: 4.7,
    reviewCount: 380,
    shortDescription: "Torre Rosa Montessori original con 10 cubos de madera natural y tintes naturales. Fabricada artesanalmente en Galicia.",
    fullDescription: "La Torre Rosa Montessori es el material pedagógico clásico del método Montessori. 10 cubos de madera natural con tintes naturales de diferente tamaño y peso, fabricados artesanalmente en Galicia. Permite personalización de nombre sin coste. Desarrolla el pensamiento matemático, la motricidad fina y la concentración.",
    pros: ["Fabricación artesanal española en Galicia", "Madera y tintes 100% naturales", "Personalización de nombre gratuita", "Material pedagógico auténtico Montessori", "Apoya pequeñas empresas locales"],
    cons: ["Entrega algo más lenta que grandes marcas", "Solo disponible en madera natural"],
    specs: { "Cubos": "10 (diferentes tamaños)", "Material": "Madera natural + tintes naturales", "Fabricación": "Artesanal Galicia", "Personalización": "Nombre sin coste" },
  },

  // JUGUETES STEM Y CIENCIA
  {
    slug: "thames-kosmos-intro-chemistry-27-experimentos",
    name: "Thames & Kosmos Intro to Chemistry Kit 27 Experimentos STEM 8-12 años",
    asin: "B0CDM16V5N",
    categorySlug: "juguetes-stem",
    categoryName: "Juguetes STEM y Ciencia",
    price: "€39,99",
    priceMin: 39,
    rating: 4.4,
    reviewCount: 620,
    shortDescription: "Kit de química Thames & Kosmos con 27 experimentos para niños de 8 a 12 años. Manual a todo color de 48 páginas.",
    fullDescription: "El Thames & Kosmos Intro to Chemistry es el kit de ciencia STEM más completo para introducir a los niños de 8-12 años en la química. Con 27 experimentos seguros que incluyen reacciones químicas, cristalización, trabajo con ácidos y bases, e identificación de sustancias. Manual guía a todo color de 48 páginas. Los niños construyen sus propios estantes de tubos de ensayo.",
    pros: ["27 experimentos seguros y variados", "Manual 48 páginas a todo color", "Los niños construyen sus propios estantes", "Marca líder en kits STEM 22 años", "Cubre química real con materiales seguros"],
    cons: ["Requiere vigilancia de adulto", "Instrucciones en inglés principalmente"],
    specs: { "Experimentos": "27", "Edad": "8-12 años", "Manual": "48 páginas a todo color", "Marca": "Thames & Kosmos", "Áreas": "Química, reacciones, cristalización" },
    badge: "Recomendado STEM",
  },
  {
    slug: "national-geographic-microscopio-kit-37-piezas",
    name: "National Geographic Microscopio Kit STEM 37 piezas 40x-400x Gemas y Minerales",
    asin: "B09ZDRP5DM",
    categorySlug: "juguetes-stem",
    categoryName: "Juguetes STEM y Ciencia",
    price: "€49,99",
    priceMin: 49,
    rating: 4.4,
    reviewCount: 1850,
    shortDescription: "Microscopio National Geographic 40x-400x con kit completo de 37 piezas, preparados, gemas y guía de laboratorio.",
    fullDescription: "El microscopio National Geographic Explorer Series incluye todo lo necesario para explorar el mundo microscópico. Zoom hasta 400x con 3 niveles de aumento (40x, 100x, 400x), 6 preparados de plantas incluidos, 6 diapositivas en blanco, especímenes de roca y minerales (geoda, pirita, fluorita, calcita, cuarzo, amatista) y guía de laboratorio interactiva.",
    pros: ["37 piezas completo sin necesitar más", "3 niveles de aumento 40x-400x", "Gemas y minerales reales incluidos", "Guía de laboratorio interactiva", "Marca National Geographic de confianza"],
    cons: ["Instrucciones no garantizadas en español", "Requiere pilas AA no incluidas"],
    specs: { "Aumento": "40x / 100x / 400x", "Piezas": "37", "Preparados": "6 de plantas + 6 en blanco", "Extras": "Gemas y minerales reales", "Luz": "Superior e inferior" },
  },
  {
    slug: "national-geographic-microscopio-800x-smartphone",
    name: "National Geographic Microscopio 40x-800x con Soporte Smartphone 25 piezas",
    asin: "B07YZ7Q67T",
    categorySlug: "juguetes-stem",
    categoryName: "Juguetes STEM y Ciencia",
    price: "€39,99",
    priceMin: 39,
    rating: 4.2,
    reviewCount: 890,
    shortDescription: "Microscopio National Geographic 40x-800x con soporte para smartphone, 2 oculares y disco de filtros de colores.",
    fullDescription: "El National Geographic 40x-800x incluye un soporte para smartphone que permite fotografiar y grabar lo observado con el móvil. Con 2 oculares (WF10x y WF20x), disco de filtro de 6 colores, caja con preparados y utensilios de preparación. Perfecto para niños de 6 años en adelante que quieren compartir sus descubrimientos.",
    pros: ["Soporte smartphone para fotos y vídeos", "Hasta 800x de aumento", "Disco filtro 6 colores para resaltar objetos", "2 oculares de campo amplio", "Caja preparados y accesorios incluidos"],
    cons: ["Instrucciones no garantizadas en español", "Solo 309g puede moverse", "Pilas AA no incluidas"],
    specs: { "Aumento": "40x - 800x", "Oculares": "WF10x + WF20x", "Smartphone": "Soporte incluido", "Filtros": "6 colores", "Edad": "6+ años" },
  },

  // JUEGOS DE MESA EDUCATIVOS
  {
    slug: "dixit-juego-mesa-asmodee-2021",
    name: "Dixit Juego de Mesa Asmodee Edición 2021 8+ años 3-8 Jugadores",
    asin: "B001OH9EDW",
    categorySlug: "juegos-mesa-educativos",
    categoryName: "Juegos de mesa educativos",
    price: "€28,99",
    priceMin: 28,
    rating: 4.8,
    reviewCount: 7487,
    shortDescription: "Dixit, el juego de mesa ganador del Spiel des Jahres para 3-8 jugadores. Estimula la imaginación y creatividad. 8+ años.",
    fullDescription: "Dixit es el juego de mesa más premiado para estimular la imaginación y creatividad. Los jugadores deben describir ilustraciones oníricas con palabras, frases o sonidos mientras los demás intentan adivinar cuál es la carta del narrador. Ganador del Spiel des Jahres (el Oscar de los juegos de mesa). Para 3-8 jugadores, partidas de 30 minutos.",
    pros: ["Ganador Spiel des Jahres (máximo premio juegos de mesa)", "Estimula creatividad e imaginación", "3 a 8 jugadores muy versátil", "Ilustraciones oníricas únicas", "Para toda la familia desde 8 años"],
    cons: ["Requiere creatividad verbal", "Las cartas pueden repetirse con mucho uso"],
    specs: { "Jugadores": "3-8", "Edad": "8+ años", "Duración": "30 min", "Premio": "Spiel des Jahres", "Idioma": "Multilenguaje incluye español" },
    badge: "Premio Spiel des Jahres",
  },
  {
    slug: "catan-junior-devir-6-anos",
    name: "Devir Catán Junior Juego de Mesa Estrategia 6+ años Español",
    asin: "B07WC54XF8",
    categorySlug: "juegos-mesa-educativos",
    categoryName: "Juegos de mesa educativos",
    price: "€24,99",
    priceMin: 24,
    rating: 4.5,
    reviewCount: 1980,
    shortDescription: "Catán Junior, la versión del clásico juego de estrategia para niños desde 6 años. Para 2-4 jugadores, 30 min.",
    fullDescription: "Catán Junior adapta el universo Catán para que los niños de 6 años puedan disfrutar del juego de estrategia más exitoso del mundo. Los jugadores construyen escondrijos en un archipiélago de 6 islas y recolectan recursos (madera, cabras, melaza y espadas) para expandir su dominio. Introduce conceptos de estrategia, comercio y planificación de forma divertida.",
    pros: ["Versión accesible del juego más exitoso del mundo", "Introduce estrategia desde 6 años", "Partidas de solo 30 minutos", "En español, catalán y portugués", "Mecánicas simplificadas pero profundas"],
    cons: ["Fichas de plástico (no madera como versión adultos)", "Solo 2-4 jugadores"],
    specs: { "Jugadores": "2-4", "Edad": "6+ años", "Duración": "30 min", "Idioma": "Español + Catalán + Portugués", "Recursos": "Madera, cabras, melaza, espadas" },
  },
  {
    slug: "virus-juego-cartas-tranjis-games",
    name: "Virus! Juego de Cartas Tranjis Games Edición Española 8+ años",
    asin: "8460659666",
    categorySlug: "juegos-mesa-educativos",
    categoryName: "Juegos de mesa educativos",
    price: "€9,99",
    priceMin: 9,
    rating: 4.6,
    reviewCount: 12400,
    shortDescription: "Virus! el juego de cartas más contagioso. 2-6 jugadores, 8+ años, 20 min. Gana el primero con 4 órganos sanos.",
    fullDescription: "Virus! es el juego de cartas más vendido y adictivo de España. El objetivo es ser el primero en tener los 4 órganos completos y sanos mientras infectas los de los rivales con virus. Con 68 cartas en 4 colores (órganos, virus, medicamentos y cartas de acción). Partidas de 20 minutos cargadas de risas, traiciones y estrategia. Apto desde 8 años.",
    pros: ["Uno de los juegos de cartas más vendidos en España", "Reglas sencillas de aprender en 5 minutos", "Mucha interacción entre jugadores", "Partidas cortas de 20 minutos", "Alto factor adictivo y rejugabilidad"],
    cons: ["Puede generar conflictos entre jugadores sensibles", "Solo 2-6 jugadores"],
    specs: { "Jugadores": "2-6", "Edad": "8+ años", "Duración": "20 min", "Cartas": "68 + 2 personalizables", "Idiomas": "Español, Inglés, Alemán, Francés" },
    badge: "Superventas",
  },

  // CONSTRUCCIÓN Y LEGO
  {
    slug: "lego-10698-caja-ladrillos-creativos-grande",
    name: "LEGO 10698 Classic Caja de Ladrillos Creativos Grande 4+ años",
    asin: "B00PY3EYQO",
    categorySlug: "construccion-lego",
    categoryName: "Construcción y LEGO",
    price: "€54,99",
    priceMin: 54,
    rating: 4.7,
    reviewCount: 3742,
    shortDescription: "LEGO Classic 10698 Caja Grande con ladrillos en 33 colores, ventanas, puertas, ruedas, ojos y 2 bases verdes. 4+ años.",
    fullDescription: "La LEGO Classic 10698 es la caja de ladrillos más completa para la construcción libre. Con piezas en 33 colores diferentes, 8 tipos de ventana, 8 puertas con marcos diferentes, 2 bases verdes de distinto tamaño, ojos, neumáticos y llantas. Las posibilidades son infinitas: motos, animales, casas, robots. Para niños de 4 años en adelante.",
    pros: ["33 colores diferentes de piezas", "Incluye ventanas, puertas, ruedas y ojos", "2 bases verdes incluidas", "Construcción libre sin límites", "Marca LEGO calidad garantizada"],
    cons: ["Precio superior a marcas alternativas", "Sin instrucciones específicas (libertad creativa)"],
    specs: { "Piezas": "790", "Colores": "33", "Incluye": "Ventanas + puertas + ruedas + ojos + 2 bases", "Edad": "4+ años", "Referencia": "10698" },
    badge: "Más completa",
  },
  {
    slug: "lego-classic-caja-creativa-xxl-10697",
    name: "LEGO Classic Caja Creativa XXL 10697 39 Colores Construcción Libre",
    asin: "B00XJ5C4FW",
    categorySlug: "construccion-lego",
    categoryName: "Construcción y LEGO",
    price: "€89,99",
    priceMin: 89,
    rating: 4.7,
    reviewCount: 2100,
    shortDescription: "LEGO Classic Caja XXL 10697 con 39 colores y piezas especiales: puertas, ventanas, ruedas y ojos. Para grandes proyectos.",
    fullDescription: "La LEGO Classic XXL 10697 es la caja de ladrillos definitiva para constructores ambiciosos. Con 39 colores y piezas especiales como puertas, ventanas, ruedas y ojos, permite llevar a cabo grandes proyectos. Incluye guía con ideas de construcción adaptadas a diferentes edades y niveles. Para niños de 4 años en adelante.",
    pros: ["39 colores, la más variada de la gama", "Piezas especiales incluidas", "Guía con ideas por edades", "Apta para grandes proyectos", "Excelente regalo duradero"],
    cons: ["Precio elevado", "Tamaño de caja grande"],
    specs: { "Colores": "39", "Incluye": "Puertas, ventanas, ruedas, ojos", "Guía": "Ideas por edades", "Edad": "4+ años", "Referencia": "10697" },
  },
  {
    slug: "geomag-classic-color-91-piezas",
    name: "Geomag Classic Color 91 Piezas Magnéticas Construcción 3+ años",
    asin: "B01MZ4FJ0N",
    categorySlug: "construccion-lego",
    categoryName: "Construcción y LEGO",
    price: "€44,99",
    priceMin: 44,
    rating: 4.5,
    reviewCount: 1890,
    shortDescription: "Geomag Classic Color 91 piezas magnéticas suizas. Barras de colores y bolas de metal para construcción libre 3D. 3+ años.",
    fullDescription: "Geomag Classic Color 91 piezas es el juego de construcción magnética más completo de la gama Geomag. Las barras magnéticas de colores y las bolas de acero permiten construir figuras 2D y 3D de forma intuitiva. Fabricado en Suiza con los más estrictos estándares de calidad y seguridad. Compatible con todos los sets Geomag. Libre de BPA.",
    pros: ["91 piezas para construcciones complejas", "Fabricado en Suiza con máxima calidad", "Compatible con todos los sets Geomag", "Estimula pensamiento espacial y STEM", "Libre de BPA, seguro para niños"],
    cons: ["Precio elevado", "Las piezas pequeñas requieren vigilancia de adulto"],
    specs: { "Piezas": "91 (barras + bolas)", "Fabricación": "Suiza", "Compatibilidad": "Todos los sets Geomag", "Edad": "3+ años", "Certificación": "Sin BPA" },
  },

  // LIBROS Y RECURSOS EDUCATIVOS
  {
    slug: "science4you-robotics-alfabot-238-piezas",
    name: "Science4you Robotics Alfabot 3 en 1 Kit Robótica 238 Piezas 6+ años",
    asin: "B07B495BJG",
    categorySlug: "libros-educativos",
    categoryName: "Libros y recursos educativos",
    price: "€29,99",
    priceMin: 29,
    rating: 4.4,
    reviewCount: 4582,
    shortDescription: "Kit de robótica Science4you con 238 piezas para construir 3 robots diferentes que se mueven. 6-10+ años.",
    fullDescription: "El Science4you Robotics Alfabot permite a los niños construir 3 robots diferentes que se mueven con motor incorporado (pilas AA). Incluye 238 piezas de construcción y libro educativo en 9 idiomas (incluido español). Desarrolla habilidades en robótica, ingeniería y construcción. Marca portuguesa con más de 4.500 valoraciones positivas.",
    pros: ["3 robots diferentes con el mismo kit", "Motor incluido los robots se mueven", "Libro en 9 idiomas incluido español", "Más de 4.500 valoraciones positivas", "Excelente regalo para 6-10 años"],
    cons: ["Montaje tedioso requiere paciencia", "Pilas AA no incluidas"],
    specs: { "Piezas": "238", "Robots": "3 modelos diferentes", "Motor": "Incluido (pilas AA)", "Libro": "9 idiomas incluido español", "Edad": "6-10+ años" },
    badge: "Top ventas robótica",
  },
  {
    slug: "national-geographic-mega-kit-excavacion-gemas",
    name: "National Geographic Mega Kit Excavación 15 Gemas Reales Juguete STEM",
    asin: "B0BRN37W2C",
    categorySlug: "libros-educativos",
    categoryName: "Libros y recursos educativos",
    price: "€24,99",
    priceMin: 24,
    rating: 4.6,
    reviewCount: 25796,
    shortDescription: "Kit excavación National Geographic con 15 gemas reales. Desentierra amatista, cuarzo, lapislázuli y más. 6+ años.",
    fullDescription: "El National Geographic Mega Kit de Excavación es el kit STEM más vendido de Amazon España en su categoría. Con más de 25.000 valoraciones. Los niños excavan para descubrir 15 gemas reales auténticas incluyendo amatista, cuarzo rosa, lapislázuli, ojo de tigre y más. Incluye herramientas de excavación, guía identificación de gemas y bolsa de colección.",
    pros: ["Más de 25.000 valoraciones positivas", "15 gemas reales auténticas", "Herramientas de excavación incluidas", "Guía de identificación de gemas", "Bolsa de colección para guardarlas"],
    cons: ["Requiere superficie protegida para excavar", "El bloque puede ser difícil para niños pequeños"],
    specs: { "Gemas": "15 reales auténticas", "Incluye": "Herramientas + guía + bolsa colección", "Edad": "6+ años", "Marca": "National Geographic" },
    badge: "Más vendido",
  },
  {
    slug: "thames-kosmos-kids-first-science-kit",
    name: "Thames & Kosmos Kids First Science Kit 12 Experimentos Química 5+ años",
    asin: "B0DSCJFN67",
    categorySlug: "libros-educativos",
    categoryName: "Libros y recursos educativos",
    price: "€29,99",
    priceMin: 29,
    rating: 4.5,
    reviewCount: 340,
    shortDescription: "Kit de ciencia Thames & Kosmos para niños de 5+ años con 12 experimentos de química seguros y manual a todo color.",
    fullDescription: "El Thames & Kosmos Kids First Science Kit es la introducción perfecta a la química para niños de 5 años. Con 12 experimentos seguros y divertidos, herramientas y equipos de laboratorio de tamaño infantil y manual a todo color de 28 páginas. Los niños exploran la química de forma práctica y segura bajo supervisión adulta.",
    pros: ["Edad de inicio desde 5 años", "12 experimentos seguros para pequeños", "Herramientas de laboratorio de tamaño infantil", "Manual 28 páginas a todo color", "Marca Thames & Kosmos de confianza"],
    cons: ["Requiere supervisión adulta", "Instrucciones principalmente en inglés"],
    specs: { "Experimentos": "12", "Edad": "5+ años", "Manual": "28 páginas a todo color", "Herramientas": "Tamaño infantil incluidas" },
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
