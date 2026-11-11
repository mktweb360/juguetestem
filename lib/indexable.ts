// Fichas de producto que se mantienen indexables (11/2026).
// Criterio: las más citadas por las guías del blog (relatedProducts). El resto de fichas siguen
// accesibles para el usuario, pero con noindex,follow y fuera del sitemap: Google AdSense evalúa
// el sitio completo y las fichas plantilla de afiliado restaban valor al conjunto.
export const FEATURED_PRODUCT_SLUGS = new Set<string>([
  "thames-kosmos-intro-chemistry-27-experimentos",
  "geomag-classic-color-91-piezas",
  "national-geographic-mega-kit-excavacion-gemas",
  "catan-junior-devir-6-anos",
  "cosyland-torre-aprendizaje-antivuelco",
  "national-geographic-microscopio-kit-37-piezas",
  "science4you-robotics-alfabot-238-piezas",
  "thames-kosmos-kids-first-science-kit",
  "lego-10698-caja-ladrillos-creativos-grande",
  "dixit-juego-mesa-asmodee-2021",
  "small-foot-arcoiris-madera-xl-12-piezas",
  "virus-pack-tapete-fundas-deck-box",
  "magna-tiles-clear-colors-32-piezas",
  "lego-duplo-caja-creativa-todo-color-10479",
  "national-geographic-microscopio-800x-smartphone",
]);

export const isFeaturedProduct = (slug: string) => FEATURED_PRODUCT_SLUGS.has(slug);
