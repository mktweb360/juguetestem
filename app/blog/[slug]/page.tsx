import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPostBySlug } from "@/data/posts";
import { getProductBySlug, amazonLink } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

interface ArticleSection {
  heading?: string;
  text?: string;
  list?: string[];
  pros?: string[];
  cons?: string[];
  cta?: { asin: string; label?: string };
  table?: { headers: string[]; rows: string[][] };
  faqs?: { q: string; a: string }[];
}

const articleContent: Record<string, ArticleSection[]> = {
  "mejores-juguetes-stem-ninos-5-anos": [
    { text: "A los 5 años los niños son auténticas máquinas de preguntas: quieren saber por qué llueve, cómo funcionan las cosas y qué hay dentro de una piedra. Es la edad perfecta para introducir los primeros juguetes STEM (ciencia, tecnología, ingeniería y matemáticas), siempre que estén adaptados a sus manos y a su capacidad de atención. En esta guía analizamos tres juguetes STEM ideales para niños de 5 años, todos disponibles en Amazon España: un kit de ciencia con experimentos seguros, un set de excavación de gemas reales y un juego de construcción magnética. Te contamos sus pros, sus contras y para qué perfil de niño encaja cada uno." },
    { heading: "Tabla comparativa", table: { headers: ["Juguete", "Edad", "Precio", "Área STEM", "Valoración"], rows: [["Thames & Kosmos Kids First", "5+", "€29,99", "Química/Ciencia", "4,5 ★"], ["NatGeo Mega Kit Excavación", "6+", "€24,99", "Geología", "4,6 ★"], ["Geomag Classic 91 piezas", "3+", "€44,99", "Ingeniería/Magnetismo", "4,5 ★"]] } },
    { heading: "Análisis de los 3 mejores juguetes STEM" },
    { heading: "1. Thames & Kosmos Kids First Science Kit — Primeros experimentos", text: "El kit de iniciación a la ciencia de Thames & Kosmos está pensado específicamente para los más pequeños de la casa. Incluye 12 experimentos de química seguros, herramientas de laboratorio de tamaño infantil y un manual a todo color de 28 páginas que guía cada actividad paso a paso. Es la mejor forma de despertar la curiosidad científica desde los 5 años.", pros: ["Diseñado desde los 5 años", "12 experimentos seguros y guiados", "Herramientas de laboratorio de tamaño infantil", "Manual ilustrado a todo color"], cons: ["Requiere supervisión de un adulto", "Instrucciones principalmente en inglés"], cta: { asin: "B0DSCJFN67", label: "Ver el kit Kids First en Amazon →" } },
    { heading: "2. National Geographic Mega Kit de Excavación — Ciencia con las manos", text: "Con más de 25.000 valoraciones, este es uno de los kits STEM más populares de Amazon España. Los niños se convierten en pequeños geólogos y excavan un bloque para descubrir 15 gemas y minerales reales como amatista, cuarzo rosa u ojo de tigre. Incluye herramientas de excavación, una guía de identificación y una bolsa de colección.", pros: ["15 gemas y minerales reales auténticos", "Más de 25.000 valoraciones positivas", "Incluye herramientas, guía y bolsa", "Aprendizaje práctico y muy motivador"], cons: ["Conviene proteger la superficie de trabajo", "El bloque puede resultar duro para los más pequeños"], cta: { asin: "B0BRN37W2C", label: "Ver el Mega Kit de Excavación en Amazon →" } },
    { heading: "3. Geomag Classic Color 91 piezas — Construcción magnética", text: "Las barras magnéticas y bolas de acero de Geomag permiten construir estructuras en 2D y 3D de forma intuitiva, sin instrucciones. A los 5 años es una herramienta excelente para trabajar el pensamiento espacial, la geometría y la ingeniería básica. Fabricado en Suiza y libre de BPA.", pros: ["91 piezas para construcciones complejas", "Estimula el pensamiento espacial y la geometría", "Fabricación suiza de alta calidad y sin BPA", "Compatible con el resto de sets Geomag"], cons: ["Precio algo elevado", "Las piezas magnéticas requieren vigilancia"], cta: { asin: "B01MZ4FJ0N", label: "Ver el set Geomag Classic en Amazon →" } },
    { heading: "Cómo elegir un juguete STEM para un niño de 5 años", list: ["Seguridad ante todo: a los 5 años evita imanes sueltos que se puedan ingerir y piezas muy pequeñas sin supervisión.", "Autonomía adaptada: busca kits con manual visual paso a paso para que el niño participe sin depender del adulto en todo momento.", "Duración de la actividad: a esta edad la atención es corta; prioriza experimentos y construcciones que den resultados rápidos y visibles."] },
    { faqs: [{ q: "¿A partir de qué edad se pueden usar juguetes STEM?", a: "Existen juguetes STEM adaptados desde los 3 años, como los sets de construcción magnética. Los kits de ciencia con experimentos suelen recomendarse a partir de los 5 años, siempre con supervisión adulta." }, { q: "¿Son seguros los kits de ciencia para niños de 5 años?", a: "Los kits de ciencia para esta edad, como el Kids First de Thames & Kosmos, usan materiales y reactivos seguros. Aun así, se recomienda la supervisión de un adulto durante los experimentos." }, { q: "¿Los juguetes STEM sirven igual para niñas y niños?", a: "Por supuesto. Las niñas tienen el mismo interés y aptitud para la ciencia y la tecnología. Ofrecer juguetes STEM por igual desde pequeños ayuda a evitar sesgos de género en las vocaciones futuras." }, { q: "¿Qué juguete STEM regalar a un niño de 5 años que se aburre rápido?", a: "El Mega Kit de Excavación de National Geographic suele funcionar muy bien porque combina misterio, actividad física y una recompensa tangible (las gemas), manteniendo la atención durante toda la actividad." }] },
  ],

  "mejores-juguetes-montessori-2025": [
    { text: "La filosofía Montessori sigue siendo, en 2025, una de las más valoradas por las familias que buscan juguetes que respeten el ritmo natural de aprendizaje de sus hijos. Frente a los juguetes con luces y sonidos, los materiales Montessori apuestan por la madera, la autonomía y el aprendizaje por descubrimiento. En esta guía hemos seleccionado tres de los mejores juguetes Montessori disponibles en Amazon España para niños de 1 a 6 años: dos torres de aprendizaje que fomentan la participación en las tareas del hogar y una Torre Rosa artesanal, material clásico del método. Analizamos cuál encaja mejor según la edad y el presupuesto." },
    { heading: "Tabla comparativa", table: { headers: ["Producto", "Edad", "Precio", "Material", "Valoración"], rows: [["COSYLAND Torre Antivuelco", "18m+", "€79,99", "Bambú", "4,6 ★"], ["Beeloom Panda Tower", "18m+", "€89,99", "Madera", "4,5 ★"], ["Torre Rosa Montessori 10 cubos", "3+", "€34,99", "Madera natural", "4,7 ★"]] } },
    { heading: "Análisis de los 3 mejores juguetes Montessori" },
    { heading: "1. COSYLAND Torre de Aprendizaje Antivuelco — La más segura", text: "La torre de aprendizaje más vendida de Amazon España gracias a su certificación CPC y su estructura antivuelco. Permite que los niños desde 18 meses participen en la cocina o el baño de forma segura, a la altura de la encimera. Fabricada en bambú natural con un acabado elegante y sostenible.", pros: ["Certificación de seguridad CPC", "Estructura antivuelco muy estable", "Apta desde los 18 meses", "Bambú natural y sostenible"], cons: ["El montaje requiere herramientas básicas", "Precio algo superior a competidores"], cta: { asin: "B0CZ4J4Z9M", label: "Ver la torre COSYLAND en Amazon →" } },
    { heading: "2. Beeloom Panda Tower — Altura regulable en 3 niveles", text: "La Beeloom Panda Tower destaca por sus 3 niveles de altura regulable, lo que le da una vida útil más larga a medida que el niño crece. Incorpora barandillas de protección y pies antideslizantes, y está fabricada en madera con acabado no tóxico. Una opción muy completa para cocina y baño.", pros: ["3 niveles de altura regulable", "Barandillas de protección seguras", "Pies antideslizantes", "Madera con acabado no tóxico"], cons: ["Requiere siempre vigilancia de un adulto", "Peso máximo limitado"], cta: { asin: "B093H92GR2", label: "Ver la Beeloom Panda Tower en Amazon →" } },
    { heading: "3. Torre Rosa Montessori 10 cubos — El material clásico", text: "La Torre Rosa es uno de los materiales pedagógicos más icónicos del método Montessori. Estos 10 cubos de madera natural con tintes naturales, de tamaño y peso crecientes, trabajan el pensamiento matemático, la motricidad fina y la concentración. Fabricada artesanalmente en Galicia, con opción de personalizar el nombre sin coste.", pros: ["Material Montessori auténtico y pedagógico", "Fabricación artesanal española (Galicia)", "Madera y tintes 100% naturales", "Personalización del nombre gratuita"], cons: ["Entrega algo más lenta que las grandes marcas", "Disponible solo en madera natural"], cta: { asin: "B0B4BL9M15", label: "Ver la Torre Rosa Montessori en Amazon →" } },
    { heading: "Cómo elegir un juguete Montessori en 2025", list: ["Materiales naturales: prioriza madera, bambú o tela frente al plástico con luces y sonidos.", "Adecuación a la edad: las torres de aprendizaje son ideales desde los 18 meses; los materiales sensoriales con piezas pequeñas, a partir de los 3 años.", "Control del error: un buen material Montessori permite que el niño se dé cuenta solo de si lo hace bien, sin necesidad de corrección adulta."] },
    { faqs: [{ q: "¿Qué es una torre de aprendizaje Montessori?", a: "Es una plataforma segura con barandillas que eleva al niño hasta la altura de la encimera para que participe en tareas de cocina o higiene. Fomenta la autonomía y la autoestima siguiendo la filosofía Montessori." }, { q: "¿Desde qué edad se puede usar una torre de aprendizaje?", a: "La mayoría de torres, como la COSYLAND o la Beeloom, están recomendadas a partir de los 18 meses, cuando el niño ya camina y se mantiene de pie con estabilidad. Siempre bajo supervisión." }, { q: "¿Son mejores los juguetes Montessori que los convencionales?", a: "Los juguetes Montessori fomentan la concentración, la autonomía y la creatividad de forma más profunda que los juguetes electrónicos pasivos. No son mágicos, pero cuentan con un sólido respaldo pedagógico." }, { q: "¿Merece la pena la Torre Rosa Montessori?", a: "Si buscas material Montessori auténtico, la Torre Rosa es una inversión excelente: es duradera, de madera natural y trabaja conceptos matemáticos y sensoriales clave. Además, esta versión se fabrica artesanalmente en España." }] },
  ],

  "juguetes-reyes-magos-2026": [
    { text: "Los Reyes Magos son, para muchas familias españolas, el momento más ilusionante del año. Pero acertar con el regalo no siempre es fácil: cada edad tiene sus intereses y su nivel de desarrollo, y un juguete mal elegido acaba olvidado en un rincón. En esta guía para Reyes Magos 2026 hemos seleccionado cuatro juguetes educativos que triunfan por edades y categorías: excavación de gemas, estrategia, construcción libre y robótica. Todos están disponibles en Amazon España y combinan diversión con aprendizaje real. Te ayudamos a elegir el regalo perfecto según la edad y el perfil de cada niño." },
    { heading: "Tabla comparativa", table: { headers: ["Juguete", "Edad", "Precio", "Categoría", "Valoración"], rows: [["NatGeo Mega Kit Excavación", "6+", "€24,99", "Ciencia", "4,6 ★"], ["Devir Catán Junior", "6+", "€24,99", "Estrategia", "4,5 ★"], ["LEGO 10698 Classic", "4+", "€54,99", "Construcción", "4,7 ★"], ["Science4you Robotics Alfabot", "6+", "€29,99", "Robótica", "4,4 ★"]] } },
    { heading: "Análisis de los 4 mejores regalos de Reyes" },
    { heading: "1. National Geographic Mega Kit de Excavación — Para pequeños científicos", text: "Un regalo que engancha desde el primer minuto: los niños excavan un bloque para descubrir 15 gemas y minerales reales. Con más de 25.000 valoraciones, es uno de los kits de ciencia más vendidos en España. Incluye herramientas, guía de identificación y bolsa de colección. Ideal a partir de los 6 años.", pros: ["15 gemas reales que quedan de recuerdo", "Más de 25.000 valoraciones", "Actividad práctica muy motivadora", "Excelente relación calidad-precio"], cons: ["Genera algo de suciedad al excavar", "Mejor con superficie protegida"], cta: { asin: "B0BRN37W2C", label: "Ver el Mega Kit en Amazon →" } },
    { heading: "2. Devir Catán Junior — Estrategia desde los 6 años", text: "La versión infantil del mítico Catán introduce a los niños en el mundo de la estrategia y el comercio de forma accesible. Para 2 a 4 jugadores, con partidas de unos 30 minutos y en español. Un regalo redondo para familias que quieren empezar a jugar juntos a los juegos de mesa modernos.", pros: ["Introduce la estrategia desde los 6 años", "Partidas de solo 30 minutos", "Edición en español", "Mecánicas simples pero con profundidad"], cons: ["Fichas de plástico (no madera)", "Limitado a 2-4 jugadores"], cta: { asin: "B07WC54XF8", label: "Ver Catán Junior en Amazon →" } },
    { heading: "3. LEGO 10698 Classic Caja Grande — Construcción libre", text: "La caja de ladrillos LEGO más completa para la construcción libre: 790 piezas en 33 colores, con ventanas, puertas, ruedas y ojos, además de 2 bases verdes. Sin instrucciones cerradas, para que la creatividad no tenga límite. Un clásico de Reyes que dura años. Desde los 4 años.", pros: ["790 piezas en 33 colores", "Incluye ventanas, puertas, ruedas y ojos", "Fomenta la creatividad sin límites", "Calidad LEGO garantizada"], cons: ["Precio superior a marcas alternativas", "Sin instrucciones específicas de modelos"], cta: { asin: "B0B6JXPR6K", label: "Ver la caja LEGO Classic en Amazon →" } },
    { heading: "4. Science4you Robotics Alfabot — Primera robótica", text: "Con 238 piezas, este kit permite construir 3 robots diferentes que se mueven gracias a un motor incorporado. Incluye un libro educativo en 9 idiomas (español incluido). Es una introducción estupenda a la robótica y la ingeniería para niños de 6 a 10 años. Más de 4.500 valoraciones lo avalan.", pros: ["Construye 3 robots diferentes", "Motor incluido: los robots se mueven", "Libro educativo en español", "Más de 4.500 valoraciones"], cons: ["El montaje requiere paciencia", "Pilas AA no incluidas"], cta: { asin: "B07B495BJG", label: "Ver Science4you Robotics en Amazon →" } },
    { heading: "Cómo acertar con el regalo de Reyes según la edad", list: ["Ajusta el reto a la edad: un juguete demasiado avanzado frustra y uno demasiado simple aburre; respeta la edad recomendada del fabricante.", "Piensa en el perfil del niño: hay perfiles más científicos (excavación, robótica), más creativos (LEGO) y más sociales (juegos de mesa).", "Compra con antelación: en campaña de Reyes muchos de estos juguetes se agotan; asegúralo en diciembre para evitar sustos."] },
    { faqs: [{ q: "¿Qué juguete educativo regalar en Reyes 2026 a un niño de 6 años?", a: "A los 6 años funcionan muy bien Catán Junior (estrategia), el Mega Kit de Excavación (ciencia) o el kit de robótica Science4you. Elige según sea más estratégico, científico o manual." }, { q: "¿Cuánto conviene gastar en un regalo de Reyes?", a: "Entre 25€ y 60€ encuentras juguetes educativos de altísima calidad. No es necesario gastar más para acertar: la clave está en elegir bien según la edad y los intereses, no en el precio." }, { q: "¿Es mejor un juguete grande o varios pequeños para Reyes?", a: "Para menores de 6 años, varios juguetes de calidad suelen funcionar mejor que uno enorme. Para mayores, un juguete completo como un set de robótica o LEGO genera más ilusión y juego a largo plazo." }, { q: "¿Cuándo debería comprar los juguetes de Reyes para no quedarme sin stock?", a: "Lo ideal es comprar en diciembre. Los juguetes más vendidos, como las cajas de LEGO o los kits de National Geographic, suelen agotarse en la recta final de la campaña de Navidad y Reyes." }] },
  ],

  "mejores-kits-ciencia-ninos": [
    { text: "Pocos regalos despiertan tanto el asombro de un niño como un kit de ciencia. Ver una reacción química, observar una célula al microscopio o hacer crecer cristales convierte el aprendizaje en pura magia. Pero no todos los kits de ciencia son iguales: algunos son puro marketing y otros ofrecen experiencias científicas reales y seguras. En esta guía analizamos tres de los mejores kits de ciencia para niños disponibles en Amazon España: dos kits de química de distinto nivel y un microscopio de la gama National Geographic. Te contamos para qué edad es cada uno y qué puedes esperar." },
    { heading: "Tabla comparativa", table: { headers: ["Kit", "Edad", "Precio", "Área", "Valoración"], rows: [["Thames & Kosmos Intro Chemistry", "8-12", "€39,99", "Química", "4,4 ★"], ["Thames & Kosmos Kids First", "5+", "€29,99", "Química", "4,5 ★"], ["NatGeo Microscopio 37 piezas", "8+", "€49,99", "Microscopía", "4,4 ★"]] } },
    { heading: "Análisis de los 3 mejores kits de ciencia" },
    { heading: "1. Thames & Kosmos Intro to Chemistry — Química real (8-12 años)", text: "El kit de química más completo para introducir a los niños de 8 a 12 años en reacciones, cristalización, ácidos y bases. Incluye 27 experimentos seguros y un manual a todo color de 48 páginas. Los niños incluso construyen sus propios estantes para los tubos de ensayo. Química de verdad, con materiales seguros.", pros: ["27 experimentos de química real", "Manual de 48 páginas a todo color", "Marca líder en kits STEM", "Los niños montan su propio material"], cons: ["Necesita supervisión de un adulto", "Instrucciones principalmente en inglés"], cta: { asin: "B0CDM16V5N", label: "Ver el kit Intro to Chemistry en Amazon →" } },
    { heading: "2. Thames & Kosmos Kids First — Química para peques (5+ años)", text: "La versión para los más pequeños, con 12 experimentos de química seguros, herramientas de tamaño infantil y un manual ilustrado de 28 páginas. Es la mejor puerta de entrada a la ciencia a partir de los 5 años, con actividades sencillas y muy visuales.", pros: ["Pensado desde los 5 años", "12 experimentos seguros y sencillos", "Herramientas de laboratorio infantiles", "Manual ilustrado paso a paso"], cons: ["Requiere supervisión adulta", "Instrucciones sobre todo en inglés"], cta: { asin: "B0DSCJFN67", label: "Ver el kit Kids First en Amazon →" } },
    { heading: "3. National Geographic Microscopio 37 piezas — Observar lo invisible", text: "Un microscopio real con 3 niveles de aumento (40x, 100x y 400x) y un completo kit de 37 piezas: preparados de plantas, muestras en blanco, gemas y minerales, y una guía de laboratorio. El sello National Geographic garantiza calidad pedagógica. Ideal para niños curiosos a partir de 8 años.", pros: ["Aumento real de 40x a 400x", "Kit completo de 37 piezas", "Incluye gemas y minerales reales", "Guía de laboratorio incluida"], cons: ["Instrucciones no garantizadas en español", "Funciona con pilas AA (no incluidas)"], cta: { asin: "B09ZDRP5DM", label: "Ver el microscopio NatGeo en Amazon →" } },
    { heading: "Cómo elegir un buen kit de ciencia para niños", list: ["Adecuación a la edad: elige kits con 12 experimentos sencillos para 5-7 años y kits más completos (27+ experimentos) para 8-12 años.", "Ciencia real, no marketing: prioriza marcas con respaldo pedagógico como Thames & Kosmos o National Geographic frente a kits genéricos.", "Seguridad y supervisión: verifica que los reactivos sean seguros y ten en cuenta que estos kits siempre requieren acompañamiento adulto."] },
    { faqs: [{ q: "¿Son seguros los kits de química para niños?", a: "Los kits de química infantiles de marcas serias usan reactivos seguros que no generan gases tóxicos ni reacciones peligrosas. Aun así, se recomienda supervisión adulta y seguir el manual paso a paso." }, { q: "¿A qué edad se puede empezar con un kit de ciencia?", a: "Hay kits de química adaptados desde los 5 años, como el Kids First de Thames & Kosmos. Los microscopios y kits de química más completos suelen recomendarse a partir de los 8 años." }, { q: "¿Vale la pena un microscopio para niños?", a: "Sí, si es un modelo real con aumentos de al menos 400x, como el de National Geographic. Los microscopios de juguete con poco aumento decepcionan; uno de calidad abre un mundo entero de descubrimiento." }, { q: "¿Los kits de ciencia vienen en español?", a: "El material y las etiquetas suelen ser universales, pero muchos manuales de marcas internacionales como Thames & Kosmos están principalmente en inglés. Conviene tenerlo en cuenta si el niño necesita leerlo de forma autónoma." }] },
  ],

  "juguetes-educativos-3-anos": [
    { text: "A los 3 años los niños viven una auténtica explosión del lenguaje, la motricidad y la imaginación. Es una edad clave en la que el juego se convierte en su principal herramienta de aprendizaje. Elegir juguetes educativos adecuados a esta etapa marca la diferencia entre estimular su desarrollo o simplemente entretenerlo. En esta guía hemos seleccionado tres juguetes educativos ideales para niños de 3 años, disponibles en Amazon España: un material Montessori clásico, un set de construcción magnética y una torre de aprendizaje. Analizamos qué aporta cada uno al desarrollo y cuál encaja mejor con tu peque." },
    { heading: "Tabla comparativa", table: { headers: ["Juguete", "Edad", "Precio", "Desarrolla", "Valoración"], rows: [["Torre Rosa Montessori", "3+", "€34,99", "Matemáticas y motricidad", "4,7 ★"], ["Geomag Classic 91 piezas", "3+", "€44,99", "Pensamiento espacial", "4,5 ★"], ["COSYLAND Torre Aprendizaje", "18m+", "€79,99", "Autonomía", "4,6 ★"]] } },
    { heading: "Análisis de los 3 mejores juguetes para 3 años" },
    { heading: "1. Torre Rosa Montessori 10 cubos — Matemáticas con las manos", text: "Este material Montessori clásico consiste en 10 cubos de madera natural de tamaño y peso crecientes. A los 3 años ayuda a interiorizar conceptos de tamaño, orden y secuencia, además de trabajar la motricidad fina y la concentración. Fabricada artesanalmente en Galicia, con tintes naturales.", pros: ["Material Montessori auténtico", "Trabaja tamaño, orden y motricidad fina", "Madera y tintes 100% naturales", "Fabricación artesanal española"], cons: ["Entrega algo más lenta", "Solo disponible en madera natural"], cta: { asin: "B0B4BL9M15", label: "Ver la Torre Rosa en Amazon →" } },
    { heading: "2. Geomag Classic Color 91 piezas — Construcción magnética", text: "Las barras magnéticas de colores y las bolas de acero permiten a los niños de 3 años construir figuras 2D y 3D de forma libre e intuitiva. Es un juguete que crece con ellos y desarrolla el pensamiento espacial y la creatividad. Fabricado en Suiza y libre de BPA.", pros: ["Construcción libre e intuitiva", "Desarrolla el pensamiento espacial", "Fabricación suiza sin BPA", "Compatible con otros sets Geomag"], cons: ["Las piezas magnéticas requieren vigilancia", "Precio algo elevado"], cta: { asin: "B01MZ4FJ0N", label: "Ver el set Geomag en Amazon →" } },
    { heading: "3. COSYLAND Torre de Aprendizaje — Autonomía en casa", text: "A los 3 años los niños quieren hacer las cosas por sí mismos. La torre de aprendizaje COSYLAND, con certificación CPC y estructura antivuelco, les permite llegar a la encimera de forma segura y participar en la cocina. Fomenta la autonomía y la autoestima siguiendo la filosofía Montessori.", pros: ["Certificación de seguridad CPC", "Estructura antivuelco estable", "Fomenta la autonomía del niño", "Bambú natural y sostenible"], cons: ["Ocupa espacio en la cocina", "El montaje requiere herramientas básicas"], cta: { asin: "B0CZ4J4Z9M", label: "Ver la torre COSYLAND en Amazon →" } },
    { heading: "Qué tener en cuenta al elegir juguetes para 3 años", list: ["Sin piezas peligrosas: a los 3 años ya se pueden usar piezas medianas, pero mantén la vigilancia con imanes y elementos pequeños.", "Juguetes abiertos: prioriza materiales sin una única función (construcción, materiales Montessori) que crezcan con el niño.", "Autonomía y motricidad: a esta edad, los juguetes que trabajan la motricidad fina y la independencia tienen un impacto especialmente positivo."] },
    { faqs: [{ q: "¿Qué juguetes son más educativos para un niño de 3 años?", a: "A los 3 años destacan los materiales Montessori (como la Torre Rosa), la construcción magnética y las torres de aprendizaje, porque desarrollan motricidad, pensamiento lógico y autonomía." }, { q: "¿Es seguro el Geomag para niños de 3 años?", a: "El Geomag Classic está recomendado a partir de los 3 años, pero como incluye piezas magnéticas conviene supervisar el juego para evitar que el niño se lleve piezas a la boca." }, { q: "¿Cuántos juguetes debería tener un niño de 3 años?", a: "Menos es más. La filosofía Montessori recomienda ofrecer pocos juguetes a la vez y rotarlos cada pocas semanas para favorecer la concentración y evitar la sobreestimulación." }, { q: "¿A los 3 años ya se puede usar una torre de aprendizaje?", a: "Sí. Las torres de aprendizaje se recomiendan desde los 18 meses, así que a los 3 años son perfectamente adecuadas y muy útiles para fomentar la autonomía en casa." }] },
  ],

  "mejores-lego-educativos": [
    { text: "LEGO es mucho más que un juguete: es una de las herramientas educativas más potentes que existen. Construir con ladrillos desarrolla la creatividad, la paciencia, el pensamiento espacial y la resolución de problemas, y lo hace de una forma tan divertida que los niños ni se dan cuenta de que están aprendiendo. En esta guía analizamos los mejores sets LEGO educativos de 2025, junto con una alternativa magnética, todos disponibles en Amazon España. Comparamos dos cajas LEGO Classic de distinto tamaño y el set Geomag para que elijas la mejor opción según la edad y el presupuesto." },
    { heading: "Tabla comparativa", table: { headers: ["Set", "Edad", "Precio", "Piezas/Colores", "Valoración"], rows: [["LEGO 10698 Classic Grande", "4+", "€54,99", "790 pzs / 33 colores", "4,7 ★"], ["LEGO Classic XXL 10697", "4+", "€89,99", "39 colores", "4,7 ★"], ["Geomag Classic 91 piezas", "3+", "€44,99", "91 pzs magnéticas", "4,5 ★"]] } },
    { heading: "Análisis de los 3 mejores sets de construcción" },
    { heading: "1. LEGO 10698 Classic Caja Grande — La más equilibrada", text: "La caja de ladrillos LEGO más recomendada para empezar: 790 piezas en 33 colores, con ventanas, puertas, ruedas, ojos y 2 bases verdes. Sin instrucciones cerradas, para fomentar la construcción libre. Ofrece la mejor relación entre variedad, precio y posibilidades. Desde los 4 años.", pros: ["790 piezas en 33 colores", "Incluye ventanas, puertas, ruedas y ojos", "Fomenta la creatividad libre", "Excelente relación calidad-precio"], cons: ["Precio superior a marcas genéricas", "Sin instrucciones de modelos específicos"], cta: { asin: "B0B6JXPR6K", label: "Ver la caja LEGO 10698 en Amazon →" } },
    { heading: "2. LEGO Classic XXL 10697 — Para grandes proyectos", text: "La caja definitiva para constructores ambiciosos: 39 colores y piezas especiales como puertas, ventanas, ruedas y ojos, además de una guía con ideas adaptadas por edades. Ideal para familias con varios niños o para quienes ya tienen experiencia con LEGO y quieren ampliar sus posibilidades.", pros: ["39 colores, la gama más variada", "Incluye piezas especiales", "Guía con ideas por edades", "Perfecta para grandes proyectos"], cons: ["Precio elevado", "Caja de gran tamaño"], cta: { asin: "B00XJ5C4FW", label: "Ver la caja LEGO XXL en Amazon →" } },
    { heading: "3. Geomag Classic Color 91 piezas — La alternativa magnética", text: "Si buscas una alternativa a los ladrillos tradicionales, Geomag ofrece construcción magnética con barras y bolas de acero. Desarrolla el pensamiento espacial en 3D de una forma diferente y muy intuitiva. Fabricado en Suiza y libre de BPA, es compatible con el resto de sets Geomag.", pros: ["Construcción magnética intuitiva", "Desarrolla el pensamiento espacial 3D", "Fabricación suiza sin BPA", "Compatible con otros sets Geomag"], cons: ["Piezas pequeñas: requiere vigilancia", "Precio algo elevado"], cta: { asin: "B01MZ4FJ0N", label: "Ver el set Geomag en Amazon →" } },
    { heading: "Cómo elegir el set LEGO educativo adecuado", list: ["Empieza por LEGO Classic: para construcción libre y educativa, las cajas Classic son más versátiles que los sets temáticos cerrados.", "Tamaño según uso: la caja grande (10698) es ideal para empezar; la XXL (10697) compensa si hay varios niños o mucho uso.", "Seguridad por edad: los sets LEGO estándar se recomiendan desde los 4 años; para menores usa LEGO DUPLO por sus piezas grandes."] },
    { faqs: [{ q: "¿Qué set de LEGO es mejor para empezar?", a: "La caja LEGO Classic 10698 es la más recomendada para empezar: ofrece 790 piezas variadas en 33 colores a un precio equilibrado y permite construcción libre sin instrucciones cerradas." }, { q: "¿A partir de qué edad se puede usar LEGO Classic?", a: "Los sets LEGO Classic están recomendados a partir de los 4 años. Para niños más pequeños, la línea LEGO DUPLO tiene piezas más grandes y seguras." }, { q: "¿Es LEGO realmente educativo?", a: "Sí. Construir con LEGO desarrolla el pensamiento espacial, la motricidad fina, la planificación y la creatividad. Es una de las herramientas de juego con más respaldo pedagógico." }, { q: "¿Merece la pena la caja XXL frente a la grande?", a: "La XXL 10697 compensa si hay varios niños o se usa mucho, por su mayor variedad de colores y piezas. Para un solo niño que empieza, la caja grande 10698 suele ser suficiente." }] },
  ],

  "regalos-navidad-ninos-inteligentes": [
    { text: "La Navidad es la mejor oportunidad del año para regalar algo que, además de ilusionar, ayude a crecer. Frente a los juguetes que se olvidan en enero, los juguetes educativos combinan diversión y estímulo intelectual, y son la apuesta ideal para niños curiosos. En esta guía de regalos de Navidad 2025 hemos reunido cuatro juguetes que triunfan entre las familias que buscan algo más: un microscopio real, un juego de mesa premiado, un kit de robótica y una caja de LEGO. Todos disponibles en Amazon España. Te ayudamos a elegir el regalo perfecto para cada niño inteligente." },
    { heading: "Tabla comparativa", table: { headers: ["Juguete", "Edad", "Precio", "Categoría", "Valoración"], rows: [["NatGeo Microscopio 37 piezas", "8+", "€49,99", "Ciencia", "4,4 ★"], ["Dixit", "8+", "€28,99", "Juego de mesa", "4,8 ★"], ["Science4you Robotics", "6+", "€29,99", "Robótica", "4,4 ★"], ["LEGO 10698 Classic", "4+", "€54,99", "Construcción", "4,7 ★"]] } },
    { heading: "Análisis de los 4 mejores regalos de Navidad" },
    { heading: "1. National Geographic Microscopio 37 piezas — Ciencia de verdad", text: "Un microscopio real con aumentos de 40x, 100x y 400x y un kit de 37 piezas que incluye preparados, muestras, gemas y una guía de laboratorio. Un regalo que puede despertar una vocación científica. Ideal para niños curiosos a partir de 8 años. El sello National Geographic garantiza la calidad.", pros: ["Microscopio real de 40x a 400x", "Kit completo de 37 piezas", "Incluye gemas y guía de laboratorio", "Puede despertar vocaciones científicas"], cons: ["Instrucciones no garantizadas en español", "Pilas AA no incluidas"], cta: { asin: "B09ZDRP5DM", label: "Ver el microscopio NatGeo en Amazon →" } },
    { heading: "2. Dixit — El regalo para toda la familia (★ 4,8)", text: "Ganador del premio Spiel des Jahres, Dixit es el juego de mesa perfecto para las sobremesas navideñas. Los jugadores describen ilustraciones surrealistas mientras los demás adivinan. Para 3 a 8 jugadores, estimula la creatividad y garantiza risas para todas las edades a partir de 8 años.", pros: ["Ganador del premio Spiel des Jahres", "Ideal para jugar en familia (3-8)", "Estimula la creatividad", "Perfecto para las sobremesas navideñas"], cons: ["Requiere creatividad verbal", "Las cartas se repiten con mucho uso"], cta: { asin: "B001OH9EDW", label: "Ver Dixit en Amazon →" } },
    { heading: "3. Science4you Robotics Alfabot — Robótica bajo el árbol", text: "Con 238 piezas, este kit permite construir 3 robots diferentes que se mueven gracias a un motor. Incluye libro educativo en español y es una introducción excelente a la robótica y la ingeniería para niños de 6 a 10 años. Más de 4.500 valoraciones lo respaldan como regalo estrella.", pros: ["Construye 3 robots que se mueven", "Libro educativo en español", "Introduce la robótica desde los 6 años", "Más de 4.500 valoraciones"], cons: ["El montaje requiere paciencia", "Pilas AA no incluidas"], cta: { asin: "B07B495BJG", label: "Ver Science4you Robotics en Amazon →" } },
    { heading: "4. LEGO 10698 Classic Caja Grande — El clásico que nunca falla", text: "790 piezas en 33 colores, con ventanas, puertas, ruedas y ojos, para construcción libre sin límites. Un regalo de Navidad que dura años y crece con el niño. Desde los 4 años, es una apuesta segura para cualquier peque al que le guste crear.", pros: ["790 piezas en 33 colores", "Construcción libre sin límites", "Un clásico duradero", "Calidad LEGO garantizada"], cons: ["Precio superior a alternativas", "Sin instrucciones de modelos concretos"], cta: { asin: "B0B6JXPR6K", label: "Ver la caja LEGO Classic en Amazon →" } },
    { heading: "Cómo elegir un regalo de Navidad educativo que triunfe", list: ["Combina diversión y aprendizaje: los mejores regalos no parecen educativos, pero lo son; busca ese equilibrio (ciencia, robótica, juegos de mesa).", "Adapta a la edad y el interés: un microscopio para el niño observador, robótica para el manitas, LEGO para el creativo, Dixit para el sociable.", "Piensa en el largo plazo: prioriza juguetes con rejugabilidad y posibilidades abiertas frente a novedades que se olvidan en una semana."] },
    { faqs: [{ q: "¿Qué regalar en Navidad a un niño inteligente y curioso?", a: "Para niños curiosos triunfan los juguetes que combinan reto y diversión: un microscopio National Geographic, un kit de robótica Science4you o un juego de mesa como Dixit son apuestas seguras según su edad e intereses." }, { q: "¿Cuánto gastar en un regalo de Navidad educativo?", a: "Entre 25€ y 60€ encuentras juguetes educativos de gran calidad. Lo importante no es el precio, sino acertar con la edad y los intereses del niño para que el regalo tenga recorrido." }, { q: "¿Qué juguete educativo es mejor para un niño de 8 años?", a: "A los 8 años funcionan muy bien un microscopio real, un juego de mesa como Dixit o un kit de robótica. Todos estimulan el pensamiento lógico y la curiosidad de forma divertida." }, { q: "¿Los juguetes educativos son aburridos para los niños?", a: "En absoluto. Los buenos juguetes educativos, como los kits de ciencia o los juegos de mesa premiados, son tan divertidos como estimulantes. La clave está en elegir uno adaptado a los intereses del niño." }] },
  ],

  "mejores-juguetes-montessori-3-anos": [
    { text: "A los 3 años los niños están en plena explosión del lenguaje y del pensamiento lógico. Es el momento perfecto para introducir materiales Montessori que respeten ese ritmo natural de aprendizaje. Pero, ¿qué hace que un juguete sea realmente Montessori?" },
    { heading: "¿Qué define a un juguete Montessori?", text: "La filosofía Montessori, desarrollada por María Montessori a principios del siglo XX, se basa en que los niños aprenden mejor cuando actúan sobre su entorno de forma autónoma. Un juguete Montessori auténtico cumple estos criterios:" },
    { list: ["Fabricado con materiales naturales (madera, tela, metal, nunca plástico brillante con sonidos)", "Tiene un único propósito claro que el niño puede descubrir solo", "Permite el control del error: el niño puede darse cuenta por sí mismo si lo hace mal", "Es atractivo visualmente pero sin sobreestimulación", "Respeta el estadio de desarrollo del niño"] },
    { heading: "Los 3 mejores juguetes Montessori para 3 años", text: "Después de analizar decenas de opciones disponibles en Amazon.es, estos son los juguetes Montessori que mejor relación calidad-precio ofrecen para niños de 2 a 4 años:" },
    { heading: "1. Hape Torre de Colores — El clásico imprescindible", text: "La torre de anillas de Hape es el juguete Montessori más vendido y con razón. Madera certificada FSC, colores brillantes no tóxicos y un diseño que invita al aprendizaje de colores, tamaños y secuencias. Perfecta desde los 12 meses hasta los 3 años." },
    { heading: "2. PlanToys Tablero de Actividades — Para mayores de 18 meses", text: "El tablero de actividades de PlanToys combina 6 ejercicios distintos: cerrojos, cremalleras, botones... Desarrolla la motricidad fina de forma progresiva. La calidad de la madera de caucho reciclada es excepcional." },
    { heading: "Tabla comparativa", table: { headers: ["Juguete", "Edad", "Precio", "Material", "Actividades"], rows: [["Hape Torre Colores", "+12m", "€24,99", "Madera FSC", "Clasificación"], ["PlanToys Tablero", "+18m", "€34,99", "Madera caucho", "6 actividades"], ["Melissa & Doug Ábaco", "+3 años", "€19,99", "Madera", "Contar"]] } },
    { heading: "¿A partir de cuándo son seguros los juguetes Montessori?", text: "Los juguetes Montessori con piezas pequeñas no son seguros para menores de 3 años por riesgo de atragantamiento. Para bebés de 0 a 12 meses, elige juguetes de piezas grandes como sonajeros de madera o móviles sensoriales." },
    { faqs: [{ q: "¿Son los juguetes Montessori mejores que los juguetes convencionales?", a: "Los juguetes Montessori están diseñados para estimular el desarrollo cognitivo de forma más profunda que los juguetes convencionales con luces y sonidos. Favorecen la concentración, la autonomía y la creatividad." }, { q: "¿Son más caros los juguetes Montessori?", a: "En general sí, porque están fabricados con materiales naturales de mayor calidad. Sin embargo, son más duraderos y seguros. El precio medio oscila entre 15€ y 50€ para las mejores marcas." }, { q: "¿Dónde comprar juguetes Montessori en España?", a: "Amazon.es tiene la mayor selección de juguetes Montessori con entrega rápida. Las marcas más recomendadas son Hape, PlanToys, Melissa & Doug y Grimm's." }, { q: "¿Qué diferencia hay entre Montessori y Waldorf?", a: "Montessori enfatiza el aprendizaje por descubrimiento autónomo con materiales concretos. Waldorf se centra más en la imaginación libre, el juego simbólico y los materiales naturales sin forma definida como trozos de madera o telas." }, { q: "¿Son adecuados los juguetes Montessori para niños con TEA?", a: "Sí, muchos niños con TEA se benefician especialmente de los materiales Montessori por su predictibilidad, el control sensorial que ofrecen y la posibilidad de repetir actividades. Siempre consulta con el terapeuta del niño." }] },
  ],

  "juguetes-stem-ninos-8-anos": [
    { text: "Entre los 8 y los 12 años, los niños están listos para enfrentarse a desafíos científicos y tecnológicos más complejos. El pensamiento abstracto está desarrollándose y la curiosidad es máxima. Es el momento ideal para los juguetes STEM." },
    { heading: "¿Por qué los juguetes STEM son tan importantes a esta edad?", text: "Las habilidades STEM (Science, Technology, Engineering, Mathematics) son las más demandadas en el mercado laboral del siglo XXI. Introducirlas de forma lúdica entre los 8 y 12 años tiene un impacto enorme en el desarrollo cognitivo y en las vocaciones futuras." },
    { list: ["Desarrollan el pensamiento lógico y la resolución de problemas", "Fomentan la perseverancia ante el error (mentalidad de crecimiento)", "Despiertan vocaciones científicas y tecnológicas", "Mejoran las matemáticas de forma práctica y divertida", "Preparan para el mundo digital del futuro"] },
    { heading: "Los mejores juguetes STEM para 8-12 años", text: "Después de analizar los mejores kits disponibles en Amazon.es, estos son nuestros finalistas para niños de 8 a 12 años:" },
    { heading: "Kit de Química Thames & Kosmos — 50 experimentos seguros", text: "Este kit es el más completo del mercado para introducir la química de forma segura. 50 experimentos con manual en español, reactivos seguros y resultados espectaculares. Ideal para niños de 8 a 12 años con supervisión adulta." },
    { heading: "LEGO Boost — Programación y robótica con LEGO", text: "LEGO Boost combina la construcción clásica con la programación visual por bloques. Los niños construyen 5 modelos diferentes y los programan desde una app gratuita. La mejor introducción a la robótica para niños de 7 a 12 años." },
    { heading: "Microscopio National Geographic — Ciencia real", text: "Un microscopio real con aumento de hasta 900x. Incluye 52 accesorios y 10 muestras preparadas. El sello National Geographic garantiza la calidad pedagógica. No es un juguete, es un instrumento científico real." },
    { table: { headers: ["Kit", "Edad", "Precio", "Área STEM", "Nivel"], rows: [["Thames Kosmos Química", "8-12", "€39,99", "Ciencia", "Intermedio"], ["LEGO Boost", "7-12", "€89,99", "Tecnología", "Básico-Inter."], ["National Geographic Microscopio", "+8", "€49,99", "Ciencia", "Intermedio"]] } },
    { faqs: [{ q: "¿Qué es mejor: un kit de química o un microscopio para niños de 8 años?", a: "Depende de los intereses del niño. Si le gusta mezclar y ver reacciones, el kit de química. Si le interesa observar y descubrir lo invisible, el microscopio. Para niños muy curiosos, el kit de química suele generar más entusiasmo inicial." }, { q: "¿Son seguros los kits de química para niños?", a: "Los kits de química para niños están formulados con reactivos seguros que no generan gases tóxicos ni reacciones peligrosas. Sin embargo, siempre se recomienda supervisión adulta y seguir las instrucciones del manual." }, { q: "¿LEGO Boost es complicado de usar?", a: "LEGO Boost está diseñado para ser intuitivo. La app guía paso a paso tanto en la construcción como en la programación. Un niño de 7 años puede empezar solo, aunque los padres suelen disfrutar junto a ellos." }, { q: "¿A qué edad es recomendable empezar con robótica?", a: "La mayoría de los expertos recomiendan empezar con programación visual (como Scratch o la app de LEGO) a partir de los 6-7 años, y con robótica física a partir de los 8 años." }, { q: "¿Los kits STEM sirven para niñas también?", a: "Absolutamente. Los estudios muestran que las niñas tienen tanto interés y aptitud para las STEM como los niños cuando se les dan las mismas oportunidades. Evita mensajes de marketing que impliquen lo contrario." }] },
  ],

  "mejores-juegos-mesa-familia": [
    { text: "Apagar las pantallas y reunirse alrededor de un tablero sigue siendo uno de los mejores planes en familia. Los juegos de mesa desarrollan la estrategia, la comunicación, la paciencia y la capacidad de ganar y perder con deportividad, además de crear recuerdos que duran años. En esta guía hemos elegido tres de los mejores juegos de mesa para familias en 2025, disponibles en Amazon España y ordenados por perfil: el más creativo, el más rápido y adictivo, y el mejor para iniciarse en la estrategia. Te ayudamos a elegir según la edad de los niños y el número de jugadores." },
    { heading: "Tabla comparativa", table: { headers: ["Juego", "Edad", "Jugadores", "Duración", "Precio", "Valoración"], rows: [["Dixit", "8+", "3-8", "30 min", "€28,99", "4,8 ★"], ["Virus!", "8+", "2-6", "20 min", "€9,99", "4,6 ★"], ["Devir Catán Junior", "6+", "2-4", "30 min", "€24,99", "4,5 ★"]] } },
    { heading: "Análisis de los 3 mejores juegos de mesa familiares" },
    { heading: "1. Dixit — El más creativo (★ 4,8)", text: "Ganador del prestigioso premio Spiel des Jahres, Dixit es probablemente el juego de mesa más creativo que existe. Los jugadores describen ilustraciones oníricas con una palabra o frase mientras los demás intentan adivinar la carta del narrador. Para 3 a 8 jugadores y partidas de 30 minutos. El juego que más conversaciones y risas genera alrededor de la mesa.", pros: ["Ganador del premio Spiel des Jahres", "Estimula la creatividad y la imaginación", "De 3 a 8 jugadores, muy versátil", "Ilustraciones únicas y evocadoras"], cons: ["Requiere cierta creatividad verbal", "Las cartas se repiten con mucho uso"], cta: { asin: "B001OH9EDW", label: "Ver Dixit en Amazon →" } },
    { heading: "2. Virus! — El más rápido y adictivo (★ 4,6)", text: "El juego de cartas más vendido de España. El objetivo es sencillo: ser el primero en reunir cuatro órganos sanos mientras infectas los de tus rivales. Reglas que se aprenden en 5 minutos, partidas de 20 minutos y muchísima interacción. Funciona igual de bien con 2 que con 6 jugadores, y su precio es imbatible.", pros: ["Superventas en España", "Reglas que se aprenden en 5 minutos", "Partidas cortas de 20 minutos", "Mucha interacción y rejugabilidad"], cons: ["Puede generar piques entre jugadores", "Limitado a 2-6 jugadores"], cta: { asin: "8460659666", label: "Ver Virus! en Amazon →" } },
    { heading: "3. Devir Catán Junior — El mejor para iniciarse en la estrategia (★ 4,5)", text: "La puerta de entrada perfecta a los juegos de estrategia modernos. Catán Junior adapta el universo Catán para niños desde 6 años, con comercio, construcción y planificación en una versión colorida y accesible. Para 2 a 4 jugadores y partidas de unos 30 minutos, en español.", pros: ["Introduce la estrategia desde los 6 años", "Edición en español", "Partidas de 30 minutos", "Ideal como primer juego de estrategia"], cons: ["Fichas de plástico en lugar de madera", "Solo de 2 a 4 jugadores"], cta: { asin: "B07WC54XF8", label: "Ver Catán Junior en Amazon →" } },
    { heading: "Cómo elegir el juego de mesa perfecto para tu familia", list: ["Edad mínima: revisa que todos los miembros puedan participar de verdad; para niños pequeños, mejor juegos desde 6 años como Catán Junior.", "Duración y número de jugadores: para peques prioriza partidas de menos de 30 minutos y comprueba que el juego funcione bien con el número de personas de tu familia.", "Tipo de juego: elige entre creatividad (Dixit), ritmo y risas (Virus!) o estrategia (Catán Junior) según lo que más disfrute tu familia."] },
    { faqs: [{ q: "¿Qué juego de mesa es mejor para toda la familia?", a: "Depende del gusto: Dixit es ideal si buscáis creatividad y conversación, Virus! si preferís partidas rápidas y divertidas, y Catán Junior si queréis iniciaros en la estrategia con niños desde 6 años." }, { q: "¿Cuál es el mejor juego de mesa para niños pequeños?", a: "Para los más pequeños, Catán Junior (desde 6 años) es una apuesta segura por sus reglas accesibles. Virus! también funciona muy bien a partir de los 8 años por su sencillez." }, { q: "¿Cuánto cuesta un buen juego de mesa familiar?", a: "Los mejores juegos de mesa familiares están entre 10€ y 30€. Virus! (unos 10€), Catán Junior (unos 25€) y Dixit (unos 29€) son tres opciones excelentes sin necesidad de gastar más." }, { q: "¿Son los juegos de mesa realmente educativos?", a: "Sí. Los juegos de mesa desarrollan matemáticas, lenguaje, pensamiento estratégico y gestión emocional. Un buen juego puede ser tan formativo como estimulante, y además fortalece los vínculos familiares." }] },
  ],

  "lego-vs-playmobil-cual-elegir": [
    { text: "LEGO y Playmobil son las dos marcas de juguetes de construcción y juego simbólico más importantes del mundo. Cada año aparecen en las listas de los juguetes más vendidos en España y en Europa. Pero, ¿cuál es mejor para tu hijo?" },
    { heading: "Las diferencias clave entre LEGO y Playmobil", text: "Aunque a primera vista parecen similares, LEGO y Playmobil tienen filosofías de juego muy diferentes:" },
    { table: { headers: ["Característica", "LEGO", "Playmobil"], rows: [["Sistema de juego", "Construcción (ensamblar piezas)", "Juego simbólico (rol y narrativa)"], ["Tamaño de piezas", "Pequeño (riesgo < 4 años)", "Grande (seguro desde 3 años)"], ["Edad ideal", "+4 años (Classic), +6 (Technic)", "+3 años"], ["Precio medio", "€20-€90", "€25-€80"], ["Compatibilidad", "Universal entre sets LEGO", "Solo dentro de la línea"], ["Creatividad", "Máxima (piezas sueltas)", "Alta (escenarios completos)"]] } },
    { heading: "¿Cuándo elegir LEGO?", list: ["Si tu hijo tiene más de 5 años", "Si le gusta construir y ensamblar", "Si quieres fomentar la creatividad sin instrucciones (LEGO Classic)", "Si te interesa la programación y la robótica (LEGO Boost)", "Si es fan de Star Wars, Harry Potter o Marvel (sets temáticos)"] },
    { heading: "¿Cuándo elegir Playmobil?", list: ["Si tu hijo tiene entre 3 y 6 años (piezas más seguras)", "Si le gusta el juego de rol y las historias", "Si prefieres escenarios completos ya definidos", "Si quieres fomentar la narrativa y el juego dramático", "Si hay riesgo de ingestión de piezas pequeñas"] },
    { heading: "LEGO Classic vs LEGO Boost vs LEGO Technic", text: "Dentro de LEGO, la gama es enorme. Para empezar recomendamos LEGO Classic (construcción libre), que es el más versátil y educativo. LEGO Boost es perfecto para introducir la programación. LEGO Technic para mayores de 10 años." },
    { faqs: [{ q: "¿Son las piezas LEGO peligrosas para niños de 3 años?", a: "Sí. Las piezas LEGO estándar son pequeñas y representan riesgo de atragantamiento para menores de 3 años. Para esta edad, LEGO tiene la línea DUPLO con piezas mucho más grandes y seguras." }, { q: "¿Se pueden mezclar LEGO de diferentes sets?", a: "Sí, todos los sets LEGO son compatibles entre sí. Esta es una de las grandes ventajas de LEGO: las piezas de un set de hace 30 años son compatibles con las actuales." }, { q: "¿Cuánto duran los juguetes Playmobil?", a: "Playmobil es conocido por su extraordinaria durabilidad. Los sets de hace 20-30 años siguen funcionando perfectamente. Son juguetes que literalmente pasan de generación en generación." }, { q: "¿Qué LEGO es mejor para niñas?", a: "LEGO no tiene género. LEGO Friends (con escenarios y personajes) puede atraer a niñas que prefieren el juego narrativo, pero LEGO Classic y LEGO City son igualmente válidos para todos." }, { q: "¿A qué edad puede un niño usar LEGO sin supervisión?", a: "A partir de los 6-7 años la mayoría de niños pueden usar sets LEGO estándar sin supervisión constante, aunque siempre es recomendable revisar que no haya piezas perdidas en el suelo." }] },
  ],

  "como-elegir-juguete-educativo": [
    { text: "El mercado de juguetes educativos vale miles de millones de euros y casi cualquier fabricante incluye hoy la palabra 'educativo' en su packaging. Pero la realidad es que muy pocos juguetes etiquetados como educativos tienen respaldo científico real. ¿Cómo distinguir los buenos de los que solo son marketing?" },
    { heading: "El problema con el marketing educativo", text: "Los fabricantes de juguetes han aprendido que los padres pagan más por productos etiquetados como educativos. Resultado: luces, sonidos y pantallas que prometen enseñar inglés o matemáticas a bebés de 6 meses. La ciencia, sin embargo, dice lo contrario." },
    { list: ["Los juguetes con luces y sonidos pasivos reducen el tiempo de juego activo", "Los bebés aprenden mejor a través de la interacción humana, no de pantallas", "Los juguetes sobreestimulantes dificultan la concentración", "La investigación de la Academia Americana de Pediatría no recomienda pantallas antes de los 2 años"] },
    { heading: "Los 5 criterios de un juguete realmente educativo", text: "Según investigadores del MIT y la Universidad de Harvard, los juguetes que mejor estimulan el desarrollo tienen estas características:" },
    { list: ["Activos, no pasivos: el niño hace algo, no solo observa", "Abiertos: permiten múltiples usos, no solo uno", "Desafiantes: suponen un esfuerzo cognitivo adecuado a la edad", "Sociales: favorecen la interacción con otros niños o adultos", "Iterativos: invitan a repetir y mejorar"] },
    { heading: "Red flags: señales de que un juguete NO es educativo", list: ["Promete resultados concretos ('aprende inglés en 30 días')", "Tiene muchas luces, sonidos y animaciones automáticas", "El niño es pasivo: solo pulsa botones y observa", "No hay posibilidad de error o corrección", "Pierde interés en menos de 15 minutos de uso real"] },
    { heading: "Los mejores juguetes educativos según la ciencia", text: "Los materiales Montessori, los kits de construcción, los juegos de mesa y los libros de divulgación son consistentemente los más respaldados por la investigación pedagógica. Aquí algunos de nuestros favoritos:" },
    { faqs: [{ q: "¿Son los juguetes Montessori realmente mejores?", a: "La investigación sugiere que los juguetes de madera con propósito único y control del error, típicos de Montessori, desarrollan la concentración y la motricidad fina mejor que los juguetes de plástico con múltiples funciones." }, { q: "¿A qué edad puedo darle una tablet a mi hijo?", a: "La Academia Americana de Pediatría recomienda no exponer a pantallas a menores de 18-24 meses (excepto videollamadas). Entre 2 y 5 años, máximo 1 hora al día de contenido de calidad. Siempre acompañado de un adulto." }, { q: "¿Los juguetes educativos son más caros?", a: "No necesariamente. Un ábaco de madera de €20 es más educativo que un juguete electrónico de €80. El precio no garantiza la calidad educativa. Busca simplicidad, durabilidad y apertura." }, { q: "¿Qué hace que un juego de mesa sea educativo?", a: "Un juego de mesa educativo desarrolla habilidades reales: matemáticas (contar, calcular), lenguaje, pensamiento estratégico, gestión emocional. Lo diferencia de uno puramente de azar que solo depende de la suerte." }, { q: "¿Son los kits STEM realmente eficaces?", a: "Los kits STEM de calidad como Thames & Kosmos o la línea National Geographic tienen respaldo pedagógico real. La clave es que el niño experimente, formule hipótesis y compruebe resultados, no que solo siga instrucciones." }] },
  ],

  "juguetes-regalo-navidad-ninos": [
    { text: "Navidad es el momento del año en que más juguetes se compran y también donde más dinero se desperdicia en juguetes que los niños olvidarán en una semana. Esta guía, organizada por edades, te ayudará a acertar con el regalo perfecto para cada niño." },
    { heading: "Guía por edades: cómo acertar siempre", text: "La clave para regalar bien es conocer el estadio de desarrollo del niño. Un juguete demasiado avanzado frustra; uno demasiado sencillo aburre. Aquí nuestra guía detallada por franjas de edad:" },
    { heading: "Regalos para 0-2 años: sensorial y Montessori", text: "Los bebés aprenden a través de los sentidos. En esta etapa los mejores juguetes son los de madera con texturas y colores, los móviles sensoriales y las torres de anillas. Evita absolutamente los juguetes con luces y sonidos: sobreestimulan y no enseñan nada." },
    { list: ["Torre de anillas Hape — El clásico desde 12 meses", "Tablero de actividades PlanToys — Para mayores de 18 meses", "Sonajeros de madera naturales", "Libros de tela con texturas"] },
    { heading: "Regalos para 3-6 años: construcción y juego simbólico", text: "Entre los 3 y 6 años los niños están en plena edad del juego simbólico: quieren ser superhéroes, cocineros, médicos. También es la edad perfecta para la construcción libre." },
    { list: ["LEGO Classic Caja Grande — Construcción libre desde 4 años", "Playmobil Ciudad Comisaría — Juego de rol completo", "Geomag Classic 88 piezas — Construcción magnética 3D", "Juegos de mesa sencillos: Dobble, Cucurucho"] },
    { heading: "Regalos para 7-12 años: STEM, estrategia y programación", text: "A partir de los 7 años el pensamiento lógico se dispara. Es el momento perfecto para los kits de ciencia, la robótica, los juegos de estrategia y la programación." },
    { list: ["LEGO Boost Programación — La mejor intro a la robótica", "Dixit — Creatividad e imaginación para toda la familia", "Kit de Química Thames & Kosmos — 50 experimentos", "Geomag Classic — Pensamiento espacial avanzado", "National Geographic Microscopio — Ciencia real"] },
    { table: { headers: ["Edad", "Producto recomendado", "Precio", "Categoría"], rows: [["0-2 años", "Hape Torre Colores", "€24,99", "Montessori"], ["3-4 años", "Playmobil Ciudad", "€59,99", "Rol"], ["4-6 años", "LEGO Classic", "€49,99", "Construcción"], ["6-9 años", "Dixit", "€29,99", "Mesa"], ["7-12 años", "LEGO Boost", "€89,99", "Robótica"]] } },
    { faqs: [{ q: "¿Cuánto debería gastar en un regalo de Navidad para un niño?", a: "No hay una cifra mágica, pero entre 25€ y 60€ puedes encontrar juguetes de altísima calidad. No gastes más de €100 en un juguete para menores de 5 años: su capacidad de atención es limitada y hay opciones excelentes a menor precio." }, { q: "¿Qué juguete es el más vendido en Navidad en España?", a: "Los juguetes más vendidos en Navidad en España son consistentemente LEGO, Playmobil y los juegos de cartas como Virus!. En la categoría educativa, Dixit y los kits de Thames & Kosmos son referencias." }, { q: "¿Es mejor regalar un juguete grande o varios pequeños?", a: "Depende de la edad. Para menores de 6 años, varios juguetes pequeños de calidad son mejor que uno grande que puede intimidar. Para mayores, un juguete grande y completo como LEGO Boost genera más entusiasmo." }, { q: "¿Cómo sé si un juguete es seguro?", a: "Busca el sello CE en el packaging, que es obligatorio en la UE. Para menores de 3 años, asegúrate de que no hay piezas pequeñas (menores de 3 cm). Las marcas Hape, PlanToys, LEGO y Playmobil tienen estándares de seguridad muy altos." }, { q: "¿Dónde comprar los mejores juguetes al mejor precio?", a: "Amazon.es tiene la mayor variedad y generalmente los mejores precios del mercado español. Además, la política de devoluciones es muy sencilla si el juguete no cumple expectativas. Revisa siempre las reseñas verificadas antes de comprar." }] },
  ],

  "introduccion-programacion-ninos": [
    { text: "La programación es el lenguaje del siglo XXI. Los niños que aprendan a programar antes de los 12 años tendrán una ventaja competitiva enorme en el mercado laboral del futuro. Pero, ¿cómo enseñarles de forma que sea divertido y no una obligación?" },
    { heading: "¿A qué edad es recomendable empezar?", text: "Los especialistas en educación tecnológica sugieren estas franjas:" },
    { list: ["3-5 años: Juegos de secuencias y algoritmos sin pantalla (ScratchJr en tablet con supervisión)", "6-8 años: Programación visual por bloques (Scratch, Hour of Code)", "7-12 años: Robótica con LEGO Boost, Microbit o Arduino", "10+ años: Python básico, desarrollo web, JavaScript"] },
    { heading: "El método correcto: primero sin pantalla", text: "Los mejores programas de introducción a la programación para menores de 6 años empiezan sin pantalla. Juegos como 'Robot Turtles' o actividades de algoritmos con juguetes físicos crean la base conceptual antes de tocar un ordenador." },
    { heading: "LEGO Boost: la mejor introducción física", text: "LEGO Boost es, sin duda, el mejor juguete para introducir la programación y la robótica entre los 7 y 12 años. Los niños construyen robots y los programan con una app visual por bloques. El aprendizaje es gradual, divertido y muy efectivo." },
    { heading: "Scratch: la herramienta gratuita más potente", text: "Scratch, desarrollado por el MIT, es la herramienta de programación más usada en escuelas de todo el mundo. Es gratuita, visual y permite crear juegos, animaciones e historias interactivas. El libro 'Aprende Programación con Scratch' es la guía perfecta para empezar." },
    { table: { headers: ["Herramienta", "Edad", "Tipo", "Precio", "Ventaja principal"], rows: [["LEGO Boost", "7-12", "Físico + App", "€89,99", "Robótica tangible"], ["Scratch (libro)", "8-12", "Ordenador", "€19,99", "Gratuito y potente"], ["Hour of Code", "6+", "Web", "Gratis", "Sin instalación"]] } },
    { heading: "Errores comunes al enseñar programación a niños", list: ["Empezar demasiado pronto con código real (texto)", "Forzar el aprendizaje cuando no hay interés genuino", "No celebrar los errores como parte del proceso", "Usar herramientas demasiado complejas sin escalado progresivo", "No conectarlo con algo que le guste al niño (juegos, música, arte)"] },
    { faqs: [{ q: "¿Scratch es seguro para niños?", a: "Sí, Scratch tiene una versión offline y una comunidad moderada. Para menores de 13 años se recomienda la versión sin cuenta o con supervisión parental en la comunidad online." }, { q: "¿LEGO Boost es complicado de montar?", a: "LEGO Boost está diseñado para ser montado por niños de 7 años con la app como guía. La mayoría de niños pueden montar el primer modelo en 2-3 horas. La app guía paso a paso con instrucciones animadas." }, { q: "¿Hay diferencia entre programación para niños y para adultos?", a: "Los conceptos fundamentales son los mismos (secuencias, bucles, condicionales, variables), pero las herramientas están adaptadas. Scratch usa bloques visuales en lugar de código de texto, lo que elimina la barrera de la sintaxis." }, { q: "¿Debo comprar un ordenador específico para que mi hijo aprenda a programar?", a: "No. Scratch funciona en cualquier ordenador, tablet o Chromebook. LEGO Boost requiere un iPad o tablet Android. No necesitas invertir en hardware específico para empezar." }, { q: "¿Mi hijo necesita ser bueno en matemáticas para programar?", a: "No necesariamente. Muchos aspectos de la programación (narrativa, diseño visual, juegos) no requieren matemáticas avanzadas. La lógica y la resolución de problemas son más importantes que las matemáticas puras." }] },
  ],

  "beneficios-juego-libre-montessori": [
    { text: "En una era de agendas infantiles sobrecargadas, clases extraescolares y apps educativas, el juego libre es cada vez más escaso. Sin embargo, la investigación científica es unánime: el juego libre no estructurado es esencial para el desarrollo sano de los niños." },
    { heading: "¿Qué es el juego libre?", text: "El juego libre es aquel que el niño elige, dirige y controla sin instrucciones de adultos. No hay objetivo externo, no hay ganadores ni perdedores. El proceso es el fin en sí mismo. No es ver la tele ni usar una tablet: requiere actividad propia del niño." },
    { heading: "Los beneficios demostrados del juego libre", list: ["Desarrollo de la creatividad e imaginación", "Regulación emocional: los niños aprenden a gestionar frustraciones", "Resolución de problemas sin ayuda adulta", "Habilidades sociales: negociar, ceder, liderar", "Independencia y autoconfianza", "Concentración y atención sostenida", "Reducción de la ansiedad y el estrés infantil"] },
    { heading: "La filosofía Montessori y el juego libre", text: "María Montessori llamaba al juego libre 'el trabajo del niño'. Su método no es una serie de actividades prescritas, sino un entorno preparado que invita al niño a explorar de forma autónoma. El adulto observa y facilita, pero no dirige." },
    { heading: "Cómo preparar el entorno Montessori en casa", list: ["Reduce la cantidad de juguetes: menos opciones, más concentración", "Organiza los materiales a la altura del niño (acceso autónomo)", "Elige materiales abiertos: bloques, telas, figuras de animales", "Reserva tiempo sin estructurar en la agenda diaria", "Resiste el impulso de intervenir: observa antes de ayudar", "Rota los juguetes cada 2-3 semanas para renovar el interés"] },
    { heading: "Los mejores juguetes para el juego libre en casa", text: "Los materiales que mejor apoyan el juego libre son los que no tienen una función única. Aquí nuestras recomendaciones:" },
    { table: { headers: ["Juguete", "Por qué favorece el juego libre", "Edad", "Precio"], rows: [["PlanToys Tablero", "6 actividades abiertas, el niño decide", "+18m", "€34,99"], ["Geomag 88 piezas", "Construcción libre sin instrucciones", "+3 años", "€39,99"], ["LEGO Classic", "Piezas sueltas para crear sin límites", "+4 años", "€49,99"]] } },
    { faqs: [{ q: "¿Cuánto tiempo de juego libre necesitan los niños al día?", a: "Los expertos recomiendan al menos 1-2 horas diarias de juego libre no estructurado para niños en edad preescolar, y al menos 1 hora para niños en edad escolar. El tiempo total de pantallas debería ser inferior." }, { q: "¿El juego libre es lo mismo que el juego sin supervisión?", a: "No exactamente. El juego libre puede tener supervisión adulta (especialmente en menores de 3 años por seguridad), pero el adulto no dirige ni organiza el juego. Supervisa la seguridad, no el contenido del juego." }, { q: "¿Cómo sé si mi hijo está aburrido o simplemente jugando libre?", a: "El aburrimiento sano es el preludio de la creatividad. Si tu hijo dice 'no sé qué hacer', espera 10-15 minutos antes de sugerir actividades. La mayoría de las veces encontrará algo por sí solo." }, { q: "¿Los deberes y las extraescolares son compatibles con el juego libre?", a: "Sí, pero requiere planificación consciente. Muchos niños tienen agendas tan llenas que el juego libre brilla por su ausencia. Prioriza al menos 1 hora al día sin actividades estructuradas." }, { q: "¿El método Montessori funciona en casa sin ser una escuela Montessori?", a: "Absolutamente. Los principios básicos — entorno preparado, materiales naturales, autonomía, observación — son perfectamente aplicables en casa. No necesitas una certificación Montessori para aplicar sus principios." }] },
  ],
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = articleContent[slug] ?? [];
  const relatedProducts = post.relatedProducts.map((s) => getProductBySlug(s)).filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "JugueteSTEM.es" },
    publisher: { "@type": "Organization", name: "JugueteSTEM.es", url: "https://www.juguetestem.es" },
  };

  const faqItems = content.flatMap((s) => s.faqs ?? []);
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.juguetestem.es" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.juguetestem.es/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.juguetestem.es/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-purple-700">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-purple-700">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700 line-clamp-1">{post.title}</span>
        </nav>

        <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">{post.category}</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mt-2 mb-3 leading-tight">{post.title}</h1>
        <p className="text-gray-500 text-lg mb-4">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
          <span>📅 {new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>⏱ {post.readTime} min de lectura</span>
        </div>

        <AffiliateDisclosure />

        <div className="prose prose-gray max-w-none">
          {content.map((section, i) => (
            <div key={i} className="mb-6">
              {section.heading && (
                <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-3">{section.heading}</h2>
              )}
              {section.text && <p className="text-gray-700 leading-relaxed">{section.text}</p>}
              {section.list && (
                <ul className="space-y-2 mt-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-2 text-gray-700">
                      <span className="text-purple-500 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.pros && (
                <div className="mt-3">
                  <p className="font-bold text-green-700 text-sm mb-1">Ventajas</p>
                  <ul className="space-y-1">
                    {section.pros.map((item, j) => (
                      <li key={j} className="flex gap-2 text-gray-700 text-sm">
                        <span className="text-green-500 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.cons && (
                <div className="mt-3">
                  <p className="font-bold text-red-600 text-sm mb-1">Desventajas</p>
                  <ul className="space-y-1">
                    {section.cons.map((item, j) => (
                      <li key={j} className="flex gap-2 text-gray-700 text-sm">
                        <span className="text-red-500 font-bold shrink-0">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.cta && (
                <a
                  href={amazonLink(section.cta.asin)}
                  target="_blank"
                  rel="nofollow noopener noreferrer sponsored"
                  className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-colors"
                >
                  {section.cta.label ?? "Ver en Amazon →"}
                </a>
              )}
              {section.table && (
                <div className="overflow-x-auto mt-4 mb-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-purple-50">
                        {section.table.headers.map((h) => (
                          <th key={h} className="text-left px-3 py-2 border border-purple-100 font-bold text-gray-800">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          {row.map((cell, ci) => (
                            <td key={ci} className="px-3 py-2 border border-gray-100 text-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.faqs && (
                <div className="mt-8 space-y-4">
                  <h2 className="text-xl font-extrabold text-gray-900 mb-4">Preguntas frecuentes</h2>
                  {section.faqs.map((faq, fi) => (
                    <div key={fi} className="bg-gray-50 rounded-xl p-5">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Productos recomendados en este artículo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProducts.map((p) => p && <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
