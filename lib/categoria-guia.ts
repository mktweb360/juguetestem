// Contenido editorial propio de cada categoría (21/10/2026): criterios de elección, errores habituales y
// preguntas frecuentes. Se muestra en la página de categoría y alimenta las fichas de producto.
// Sin precios, valoraciones ni cifras sin fuente (reglas de Amazon Associates y verify-build).

export interface CategoriaGuia {
  /** Criterios para elegir: cada uno con su título y un párrafo. */
  criterios: { titulo: string; texto: string }[];
  /** Errores de compra habituales. */
  errores: string[];
  /** Preguntas de la categoría (también en JSON-LD de la categoría). */
  faq: { q: string; a: string }[];
  /** Comprobaciones que se muestran en cada ficha, antes de comprar. */
  antesDeComprar: string[];
}

export const CATEGORIA_GUIA: Record<string, CategoriaGuia> = {
  "juguetes-montessori": {
    criterios: [
      {
        titulo: "Un juguete, una habilidad",
        texto:
          "En el material Montessori cada pieza aísla una dificultad: encajar, clasificar, apilar, abrir y cerrar. Antes de comprar, decide qué habilidad quieres trabajar (coordinación ojo-mano, pinza, orden, vocabulario) y busca el juguete que la trabaje sin añadir luces, sonidos ni pantallas que distraigan.",
      },
      {
        titulo: "Que el niño pueda corregirse solo",
        texto:
          "Un buen material tiene control del error: el cilindro entra en su hueco o no entra, la torre se sostiene o se cae. Así el niño detecta el fallo sin que un adulto intervenga, y esa autonomía es lo que distingue este enfoque de un juguete de madera cualquiera.",
      },
      {
        titulo: "Materiales y acabados",
        texto:
          "La madera maciza, el bambú, la tela o el metal sin recubrimientos dudosos son lo habitual. Comprueba en la ficha del fabricante que las pinturas son al agua y que el producto lleva el marcado CE; en juguetes para menores de tres años, esa información no es opcional.",
      },
      {
        titulo: "Tamaño y seguridad según la edad",
        texto:
          "Las piezas pequeñas pueden provocar atragantamiento. Si el juguete lleva el aviso de no apto para menores de 36 meses, respétalo aunque el niño parezca preparado. En muebles como torres de aprendizaje o camas bajas, la estabilidad y la supervisión adulta pesan más que el diseño.",
      },
    ],
    errores: [
      "Comprar muchas piezas a la vez: con pocos materiales a mano el niño profundiza más en cada uno.",
      "Elegir por la estética del catálogo en lugar de por el momento de desarrollo del niño.",
      "Dar por Montessori cualquier juguete de madera: lo que cuenta es el diseño y el reto, no el material.",
    ],
    faq: [
      {
        q: "¿Desde qué edad se puede empezar con juguetes Montessori?",
        a: "Desde los primeros meses hay materiales de agarre, observación y movimiento. Cada juguete indica la edad mínima del fabricante; úsala como límite y no como objetivo, y adapta la elección a lo que el niño ya hace solo.",
      },
      {
        q: "¿Un juguete de madera es siempre Montessori?",
        a: "No. La madera es un material habitual, pero el enfoque se reconoce por el diseño: una sola dificultad por pieza, control del error y ausencia de estímulos que distraigan.",
      },
      {
        q: "¿Cuántos juguetes conviene tener a la vista?",
        a: "Pocos y ordenados, al alcance del niño. Rotarlos cada cierto tiempo mantiene el interés sin necesidad de comprar más.",
      },
    ],
    antesDeComprar: [
      "Comprueba en la ficha de Amazon el marcado CE y la edad mínima del fabricante.",
      "Si lleva piezas pequeñas, mira si el fabricante advierte que no es apto para menores de 36 meses.",
      "Valora si es un reto adecuado hoy para el niño, no dentro de un año.",
    ],
  },
  "juguetes-stem": {
    criterios: [
      {
        titulo: "El nivel debe retar sin frustrar",
        texto:
          "Un kit demasiado fácil se abandona en una tarde; uno demasiado difícil acaba en el cajón. Fíjate en la edad del fabricante y en si el manual permite empezar por experimentos sencillos y subir de dificultad.",
      },
      {
        titulo: "Manual y materiales en español",
        texto:
          "Un manual claro y en tu idioma marca la diferencia entre un kit que se usa en familia y otro que depende de buscar vídeos. Comprueba también que los consumibles (reactivos, pilas, cables) vienen incluidos o se pueden reponer.",
      },
      {
        titulo: "Qué se aprende de verdad",
        texto:
          "Distingue entre seguir pasos y entender por qué ocurre algo. Los mejores kits proponen preguntas, hipótesis y pequeños cambios para comprobar qué pasa, no solo una receta con resultado fijo.",
      },
      {
        titulo: "Seguridad y supervisión",
        texto:
          "Los kits de química, electrónica o soldadura requieren un adulto presente. Lee las advertencias del fabricante, usa los equipos de protección que indique y no sustituyas reactivos por otros que no vengan en el kit.",
      },
    ],
    errores: [
      "Comprar el kit más completo para un niño que aún no tiene la destreza para usarlo.",
      "Dejar el kit sin supervisión adulta en los primeros experimentos.",
      "Confundir muchos experimentos con buen aprendizaje: pocos bien entendidos valen más que muchos a medias.",
    ],
    faq: [
      {
        q: "¿A partir de qué edad son útiles los kits de robótica y programación?",
        a: "Depende del kit. Los juegos de programación secuencial con tarjetas o cartas se usan desde edades tempranas, y los que requieren montar y conectar piezas suelen indicar edades superiores. La referencia es siempre la edad que marca el fabricante.",
      },
      {
        q: "¿Los kits de química son seguros?",
        a: "Lo son si se usan como indica el manual, con supervisión adulta y con el equipo de protección que recomiende el fabricante. Evita mezclar sustancias que no estén en las instrucciones.",
      },
      {
        q: "¿Qué hago si el niño pierde el interés a mitad de kit?",
        a: "Cambia de experimento o vuelve a uno que ya domine. Retomarlo semanas después suele funcionar mejor que insistir.",
      },
    ],
    antesDeComprar: [
      "Comprueba la edad mínima del fabricante y el marcado CE en la ficha de Amazon.",
      "Mira si el manual está en español y si los consumibles vienen incluidos.",
      "Reserva un adulto para la primera sesión: el kit se disfruta más en compañía.",
    ],
  },
  "juegos-mesa-educativos": {
    criterios: [
      {
        titulo: "Número de jugadores y duración",
        texto:
          "Un juego pensado para cuatro funciona mal con dos, y una partida larga cansa a los más pequeños. Mira el rango de jugadores y el tiempo de partida que indica el fabricante y compáralo con tu casa real: cuántos sois y cuánto rato podéis dedicarle.",
      },
      {
        titulo: "Competitivo o cooperativo",
        texto:
          "En los cooperativos todos ganan o pierden a la vez, lo que reduce las rabietas por perder y trabaja la comunicación. Los competitivos enseñan a gestionar la frustración y a esperar turno. Elegir uno u otro según el carácter del niño evita conflictos.",
      },
      {
        titulo: "Qué habilidad trabaja",
        texto:
          "Memoria, lectoescritura, cálculo, lógica o expresión: la mayoría de los juegos educativos se centran en una. Escoge según lo que quieras reforzar y que el aprendizaje quede dentro del juego, sin parecer deberes.",
      },
      {
        titulo: "Reglas que se aprenden rápido",
        texto:
          "Si explicar las reglas lleva más de unos minutos, los niños pequeños pierden el interés. Los juegos con reglas simples y progresión permiten empezar pronto y añadir complejidad después.",
      },
    ],
    errores: [
      "Comprar un juego por encima de la edad esperando que el niño crezca hacia él.",
      "Ignorar el número de jugadores y acabar con un juego que casi no se usa.",
      "Obligar a terminar la partida: mejor parar a tiempo y volver otro día.",
    ],
    faq: [
      {
        q: "¿Los juegos cooperativos son mejores para niños pequeños?",
        a: "Suelen funcionar bien porque evitan la presión de ganar o perder, pero no sustituyen a los competitivos. Combinar ambos tipos ayuda a practicar cooperación y gestión de la frustración.",
      },
      {
        q: "¿Cómo sé si un juego es adecuado para la edad de mi hijo?",
        a: "Empieza por la edad que marca el fabricante y comprueba si el niño entiende las reglas tras una explicación corta. Si no, guárdalo unos meses.",
      },
      {
        q: "¿Un juego de mesa puede ayudar con la lectoescritura?",
        a: "Sí, si el juego está diseñado para ello: formar palabras, asociar imágenes y letras o crear frases son mecánicas habituales. Sirve de apoyo, no de sustituto de la lectura diaria.",
      },
    ],
    antesDeComprar: [
      "Comprueba el rango de jugadores y la duración de la partida.",
      "Revisa la edad mínima del fabricante y el marcado CE.",
      "Valora si prefieres un juego cooperativo o competitivo según el carácter del niño.",
    ],
  },
  "construccion-lego": {
    criterios: [
      {
        titulo: "Juego libre o instrucciones",
        texto:
          "Las cajas de piezas variadas (tipo LEGO Classic) invitan a inventar; los sets temáticos con instrucciones enseñan a seguir una secuencia y dejan una maqueta terminada. Ninguna opción es mejor: depende de si el niño disfruta creando desde cero o completando un modelo.",
      },
      {
        titulo: "Tamaño de las piezas y edad",
        texto:
          "Las piezas pequeñas son un riesgo de atragantamiento en menores de tres años. Para los más pequeños existen líneas con piezas grandes; para el resto, respeta la edad que marque el fabricante.",
      },
      {
        titulo: "Compatibilidad con lo que ya tienes",
        texto:
          "Antes de comprar un set nuevo, comprueba si es compatible con las piezas de casa. Mezclar ladrillos de distintas marcas funciona en muchos casos, pero no siempre encajan igual de bien.",
      },
      {
        titulo: "Piezas magnéticas",
        texto:
          "Los juegos magnéticos trabajan la geometría y la estructura en 3D con muy poca frustración. Comprueba que los imanes van bien sellados y no uses sets con piezas dañadas, porque un imán suelto es peligroso si se ingiere.",
      },
    ],
    errores: [
      "Elegir un set por la caja y no por la edad ni por la dificultad del montaje.",
      "Mezclar todas las piezas de varios sets sin guardar las instrucciones, y perder la opción de reconstruir el modelo.",
      "No revisar periódicamente las piezas magnéticas: si una se rompe, hay que retirarla.",
    ],
    faq: [
      {
        q: "¿Qué es mejor, LEGO Classic o un set temático?",
        a: "Classic es para juego libre y creatividad; los sets temáticos son para quien disfruta construyendo un modelo concreto. Mucha gente empieza con una caja de piezas y añade temáticos después.",
      },
      {
        q: "¿A qué edad puede un niño construir con instrucciones?",
        a: "Depende de la complejidad del set. El fabricante indica una edad mínima; fíjate también en el número de pasos y en si el niño tolera esperar al resultado final.",
      },
      {
        q: "¿Son seguras las piezas magnéticas?",
        a: "Lo son si cumplen la normativa de juguetes y están en buen estado. Retira cualquier pieza rota y mantén los sets fuera del alcance de niños pequeños que se lleven objetos a la boca.",
      },
    ],
    antesDeComprar: [
      "Comprueba la edad mínima y el aviso de piezas pequeñas en la ficha de Amazon.",
      "Decide si buscas juego libre o un modelo con instrucciones.",
      "Si lleva imanes, mira que el fabricante indique que están bien sellados.",
    ],
  },
  "libros-educativos": {
    criterios: [
      {
        titulo: "Adaptado al nivel lector",
        texto:
          "Un libro demasiado fácil no engancha y uno demasiado difícil se abandona. Fíjate en la edad recomendada, en el tamaño de la letra y en cuánto texto hay por página, y compáralo con lo que el niño lee hoy.",
      },
      {
        titulo: "Formato según el uso",
        texto:
          "Las enciclopedias visuales se consultan a ratos; los libros de actividades se hacen con lápiz en la mano; los cuentos se leen en voz alta. Elige el formato que encaje con el momento en que lo vais a usar.",
      },
      {
        titulo: "Contenido riguroso",
        texto:
          "En divulgación científica, comprueba quién firma el libro y la editorial. Los libros publicados por editoriales especializadas en infantil suelen indicar autoría, ilustradores y colección, lo que ayuda a valorar la fiabilidad.",
      },
      {
        titulo: "Que invite a hacer algo",
        texto:
          "Los libros que proponen experimentos, preguntas o retos conectan con el juego y refuerzan lo aprendido. Sirven de puente entre la lectura y los juguetes de ciencia o construcción.",
      },
    ],
    errores: [
      "Comprar el libro más grueso creyendo que enseña más.",
      "Ignorar la edad lectora y esperar que el niño crezca hasta él.",
      "Usar los libros de actividades sin tiempo compartido: funcionan mejor acompañados.",
    ],
    faq: [
      {
        q: "¿Cómo elijo un libro de divulgación científica para niños?",
        a: "Fíjate en la edad indicada, en el nivel de texto y en la editorial. Las ilustraciones claras y las explicaciones cortas por tema funcionan mejor que los bloques densos.",
      },
      {
        q: "¿Los libros de actividades sustituyen a los juguetes de ciencia?",
        a: "No: los complementan. Un libro propone el reto y el juguete o los materiales del hogar permiten llevarlo a la práctica.",
      },
      {
        q: "¿Conviene leer los libros educativos en voz alta?",
        a: "Si el niño aún no lee con soltura, sí. Leer juntos y comentar lo que se ve es una de las mejores formas de ampliar vocabulario.",
      },
    ],
    antesDeComprar: [
      "Comprueba la edad recomendada y el idioma de la edición.",
      "Mira la editorial y el autor en la ficha de Amazon.",
      "Valora si el formato (consulta, actividad o lectura) encaja con cómo lo vais a usar.",
    ],
  },
  "telescopios-microscopios": {
    criterios: [
      {
        titulo: "Los aumentos no lo son todo",
        texto:
          "En un telescopio manda el diámetro de la lente o del espejo: cuanta más luz recoge, más se ve. Un aumento alto con poca apertura da imágenes oscuras y borrosas. En un microscopio, lo importante es la calidad óptica y que los objetivos y oculares se combinen con sentido, no la cifra de aumentos del embalaje.",
      },
      {
        titulo: "Estabilidad del trípode o la base",
        texto:
          "Un soporte endeble convierte cada roce en una imagen que tiembla. Con niños, la estabilidad y la facilidad de enfoque pesan más que la potencia máxima.",
      },
      {
        titulo: "Qué quieres observar",
        texto:
          "Para la Luna y los planetas sirve un refractor sencillo. Para células, hojas o minerales, un microscopio con iluminación. Y para insectos, piedras o monedas, una lupa binocular (estereoscópica) suele ser más cómoda que un microscopio.",
      },
      {
        titulo: "Accesorios incluidos",
        texto:
          "Portaobjetos, preparaciones, buscadores o filtros hacen que el kit sea utilizable desde el primer día. Comprueba qué incluye y qué hay que comprar aparte antes de decidir.",
      },
    ],
    errores: [
      "Dejarse llevar por los «1000 aumentos» del embalaje: sin buena óptica y apertura, solo se amplía la borrosidad.",
      "Mirar al Sol con un telescopio sin filtro solar certificado: puede causar daños graves en la vista.",
      "Comprar un telescopio para ver planetas sin un trípode estable.",
    ],
    faq: [
      {
        q: "¿Qué es más importante en un telescopio, los aumentos o el diámetro?",
        a: "El diámetro (apertura), porque determina cuánta luz recoge el instrumento. Los aumentos se consiguen cambiando de ocular, pero la luz no se puede añadir.",
      },
      {
        q: "¿Se puede mirar al Sol con un telescopio infantil?",
        a: "No, nunca sin un filtro solar adecuado colocado delante del instrumento. Mirar al Sol sin protección puede causar lesiones irreversibles en la vista.",
      },
      {
        q: "¿Microscopio o lupa binocular para un niño?",
        a: "Si quiere ver células o preparaciones muy finas, un microscopio. Si prefiere observar objetos enteros (insectos, hojas, minerales) con comodidad, una lupa binocular suele ser más práctica.",
      },
    ],
    antesDeComprar: [
      "Mira el diámetro de la lente y la estabilidad del trípode, no solo los aumentos.",
      "Comprueba qué accesorios incluye y cuáles hay que comprar aparte.",
      "Un telescopio nunca debe apuntarse al Sol sin un filtro solar adecuado.",
    ],
  },
};
