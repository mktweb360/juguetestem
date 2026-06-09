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
  table?: { headers: string[]; rows: string[][] };
  faqs?: { q: string; a: string }[];
}

const articleContent: Record<string, ArticleSection[]> = {
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
    { text: "Apartar las pantallas y reunirse alrededor de un tablero es una de las mejores actividades que puede hacer una familia. Los juegos de mesa desarrollan habilidades cognitivas y sociales que las pantallas no pueden ofrecer: estrategia, negociación, paciencia, y la capacidad de perder con deportividad." },
    { heading: "¿Por qué los juegos de mesa son tan beneficiosos?", list: ["Desarrollan el pensamiento estratégico y la planificación", "Mejoran las habilidades matemáticas de forma lúdica", "Fomentan la comunicación y el trabajo en equipo", "Enseñan a gestionar la frustración de perder", "Crean recuerdos familiares positivos", "Son aptos para diferentes edades jugando juntos"] },
    { heading: "Los 10 mejores juegos de mesa familiares en 2025", text: "Aquí nuestra selección de los mejores juegos de mesa para jugar en familia, con opciones para diferentes edades y niveles:" },
    { heading: "Dixit — El más creativo (★ 4.8/5)", text: "Dixit es el juego de mesa más premiado de los últimos 20 años y con razón. 84 cartas con ilustraciones surrealistas, mecánica simple pero profunda, y una capacidad infinita para la creatividad. Es el juego que más conversaciones genera alrededor de la mesa." },
    { heading: "Catán Junior — El mejor para iniciarse en la estrategia", text: "Catán Junior adapta el famoso Catán de Settlers para niños desde 6 años. Comercio, construcción y estrategia en una versión colorida y accesible. Es el paso perfecto antes de pasar al Catán original." },
    { heading: "Virus! — El más rápido y adictivo", text: "Virus! es el juego de cartas español más vendido de los últimos años. Reglas simples, partidas de 20 minutos y un nivel de diversión altísimo. Funciona igual de bien con 2 que con 6 jugadores." },
    { table: { headers: ["Juego", "Edad", "Jugadores", "Duración", "Precio", "Categoría"], rows: [["Dixit", "+8", "3-6", "30 min", "€29,99", "Creatividad"], ["Catán Junior", "+6", "2-4", "45 min", "€24,99", "Estrategia"], ["Virus!", "+8", "2-6", "20 min", "€14,99", "Cartas"]] } },
    { heading: "Consejos para elegir el juego de mesa adecuado", list: ["Revisa la edad mínima: es importante para que todos puedan participar de verdad", "Considera la duración: para niños pequeños, mejor partidas de menos de 30 minutos", "El número de jugadores importa: muchos juegos son mejores con más gente", "Empieza con juegos cooperativos si hay niños pequeños o competitivos intensos", "Los juegos con varios niveles de dificultad crecen con los hijos"] },
    { faqs: [{ q: "¿Qué juego de mesa es mejor para niños de 6 años?", a: "Para 6 años recomendamos Catán Junior, Dobble o Dixit Kids. Son juegos con reglas simples, duración moderada y suficiente emoción para mantener la atención." }, { q: "¿Cuáles son los juegos de mesa más vendidos en España?", a: "Los juegos de mesa más vendidos en España son Virus!, Dobble, Dixit, Catán y Cluedo. Virus! es el juego de cartas español más vendido de todos los tiempos." }, { q: "¿Son los juegos de mesa realmente educativos?", a: "Sí. Los juegos de mesa desarrollan matemáticas (conteo, probabilidad), lenguaje, pensamiento estratégico y habilidades sociales. Un juego bien elegido puede ser tan educativo como una hora de estudio." }, { q: "¿Qué diferencia hay entre juegos cooperativos y competitivos?", a: "En los juegos cooperativos todos juegan juntos contra el juego (como Pandemia). En los competitivos los jugadores compiten entre sí (como Catán). Los cooperativos son ideales para niños que tienen dificultad con la frustración de perder." }, { q: "¿Cuánto debería gastar en un juego de mesa?", a: "Los mejores juegos de mesa están entre 15€ y 50€. No necesitas gastar más de 30€ para tener un juego de altísima calidad. Dixit (€29,99), Catán Junior (€24,99) y Virus! (€14,99) son tres apuestas seguras." }] },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

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
