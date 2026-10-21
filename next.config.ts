import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/juguetes-matematicas-ninos-guia-2025",
        destination: "/blog/juegos-aprender-matematicas-ninos-por-edad",
        permanent: true,
      },
      {
        source: "/blog/juguetes-energia-solar-renovable-ninos-guia-2026",
        destination: "/blog/mejores-kits-ciencia-ninos",
        permanent: true,
      },
      {
        source: "/blog/quickstop-analisis-opinion",
        destination: "/blog/juegos-cartas-educativos-familia",
        permanent: true,
      },
      {
        source: "/blog/geosafari-jr-kidnoculars-analisis",
        destination: "/blog/mejor-telescopio-ninos-principiantes-2025",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/lego-creator-3in1-safari-animales-salvajes-31150",
        destination: "/tienda/construccion-lego/lego-creator-3in1-casa-arbol-31150",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/national-geographic-kids-primer-libro-espacio",
        destination: "/tienda/libros-educativos/national-geographic-kids-enciclopedia-espacio",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/thames-kosmos-roller-coaster-engineering",
        destination: "/tienda/libros-educativos/thames-kosmos-physics-workshop-200-experimentos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/kit-microscopio-ninos-adaptador-smartphone-1200x",
        destination: "/tienda/telescopios-microscopios/microscopio-ninos-300x-1200x-led-principiantes",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/telescopio-70-400-adaptador-telefono-tripode",
        destination: "/tienda/telescopios-microscopios",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/telescopio-80mm-600mm-tripode-adaptador-telefono",
        destination: "/tienda/telescopios-microscopios/telescopio-refractor-80-500-adultos-ninos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/mijiao-telescopio-360-50mm-90x-tripode",
        destination: "/tienda/telescopios-microscopios/telescopio-astronomico-ninos-8-12-anos-tripode",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/thinkfun-rush-hour-juego-logica-espacial",
        destination: "/tienda/juegos-mesa-educativos/ubongo-junior-asmodee-puzzle-rapido",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/melissa-doug-juego-pesca-magnetico-madera",
        destination: "/tienda/juguetes-montessori",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/lego-duplo-tractor-animales-granja-10950",
        destination: "/tienda/construccion-lego/lego-duplo-tren-vapor-10874-control-app",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/acelife-robot-solar-12en1-kit-stem",
        destination: "/tienda/juguetes-stem",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/melissa-doug-cubo-clasificar-formas-madera",
        destination: "/tienda/juguetes-montessori/janod-sweet-cocoon-clasificacion-formas-colores",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/hahaland-animales-pop-up-montessori",
        destination: "/tienda/juguetes-montessori",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/inputmakers-kit-electrico-escolar-circuitos",
        destination: "/tienda/juguetes-stem/snap-circuits-jr-sc-100-electronica-ninos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/learning-resources-botley-robot-codificador",
        destination: "/tienda/juguetes-stem",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/quickstop-juego-mesa-familiar-reflejos",
        destination: "/tienda/juegos-mesa-educativos/dobble-juego-cartas-asmodee-velocidad-atencion",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/ludilo-palabrea-juego-cartas-vocabulario",
        destination: "/tienda/juegos-mesa-educativos/scrabble-junior-mattel-letras-espanol",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/lego-friends-refugio-pandas-42648",
        destination: "/tienda/construccion-lego",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/gemmicc-baldosas-magneticas-100-piezas",
        destination: "/tienda/construccion-lego/geomag-classic-color-91-piezas",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/descubre-cuerpo-humano-pop-ups-libro",
        destination: "/tienda/libros-educativos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/teenii-kit-electricidad-magnetismo-ninos",
        destination: "/tienda/juguetes-stem/snap-circuits-jr-sc-100-electronica-ninos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/learning-resources-geosafari-jr-kidnoculars",
        destination: "/tienda/telescopios-microscopios",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/kizplays-kit-explorador-naturaleza-22-piezas",
        destination: "/tienda/telescopios-microscopios",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/hape-torre-colores-montessori",
        destination: "/tienda/juguetes-montessori",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/plan-toys-tablero-actividades",
        destination: "/tienda/juguetes-montessori",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/melissa-doug-abaco-madera",
        destination: "/tienda/juguetes-montessori",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/thames-kosmos-quimica-junior",
        destination: "/tienda/juguetes-stem/thames-kosmos-intro-chemistry-27-experimentos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/lego-boost-programacion",
        destination: "/tienda/juguetes-stem/lego-boost-creative-toolbox-17101-robotica",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/national-geographic-microscopio",
        destination: "/tienda/juguetes-stem/national-geographic-microscopio-kit-37-piezas",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/dixit-juego-mesa",
        destination: "/tienda/juegos-mesa-educativos/dixit-juego-mesa-asmodee-2021",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/catan-junior-juego-estrategia",
        destination: "/tienda/juegos-mesa-educativos/catan-junior-devir-6-anos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/virus-juego-cartas",
        destination: "/tienda/juegos-mesa-educativos/virus-juego-cartas-tranjis-games",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/lego-classic-caja-creativa",
        destination: "/tienda/construccion-lego/lego-classic-caja-creativa-xxl-10697",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/playmobil-ciudad-policia",
        destination: "/tienda/construccion-lego",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/geomag-magnetic-set-88",
        destination: "/tienda/construccion-lego/geomag-classic-color-91-piezas",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/enciclopedia-visual-national-geographic",
        destination: "/tienda/libros-educativos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/donde-esta-wally-coleccion",
        destination: "/tienda/libros-educativos",
        permanent: true,
      },
      {
        source: "/tienda/:categoria/aprende-programacion-scratch",
        destination: "/tienda/libros-educativos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
