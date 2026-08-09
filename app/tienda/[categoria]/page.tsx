import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export async function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} — Mejores juguetes ${cat.name}`,
    description: cat.description,
    alternates: { canonical: `https://www.juguetestem.es/tienda/${categoria}` },
  };
}

const guideContent: Record<string, { intro: string; tips: string[] }> = {
  "juguetes-montessori": {
    intro: "Los juguetes Montessori están diseñados para fomentar la autonomía, la concentración y el aprendizaje por descubrimiento. Fabricados con materiales naturales como madera, respetan los ritmos de desarrollo de cada niño.",
    tips: ["Elige materiales naturales: madera, tela, metal. Evita plásticos con sonidos y luces.", "Respeta la edad indicada: los materiales deben suponer un reto adecuado.", "Menos es más: ofrece pocos juguetes a la vez para favorecer la concentración.", "Prioriza la apertura: un juguete sin función única estimula más la creatividad."],
  },
  "juguetes-stem": {
    intro: "Los juguetes STEM (Ciencia, Tecnología, Ingeniería y Matemáticas) preparan a los niños para el futuro de manera lúdica. Despiertan la curiosidad científica y desarrollan el pensamiento lógico.",
    tips: ["Ajusta el nivel al niño: demasiado fácil aburre, demasiado difícil frustra.", "Valora los kits con manual en español: facilitan la supervisión y el aprendizaje.", "Los kits de robótica y programación son ideales a partir de 7 años.", "La supervisión adulta es clave en los primeros experimentos de química."],
  },
  "juegos-mesa-educativos": {
    intro: "Los juegos de mesa educativos desarrollan habilidades cognitivas y sociales: pensamiento estratégico, trabajo en equipo, resolución de problemas y comunicación. Ideales para toda la familia.",
    tips: ["Revisa el número de jugadores: muchos juegos son mejores con más participantes.", "La duración importa: los niños pequeños se cansan con partidas largas.", "Los juegos cooperativos son ideales para trabajar el trabajo en equipo.", "Empieza con juegos de reglas simples y ve aumentando la complejidad."],
  },
  "construccion-lego": {
    intro: "Los juguetes de construcción desarrollan el pensamiento espacial, la paciencia y la creatividad. LEGO, Playmobil y los juguetes magnéticos son referentes internacionales con décadas de historia.",
    tips: ["LEGO Classic es ideal para juego libre; los sets temáticos para niños con intereses concretos.", "Playmobil tiene piezas más grandes, ideales para niños menores de 5 años.", "Los juguetes magnéticos como Geomag desarrollan el pensamiento 3D de forma excepcional.", "Verifica siempre el límite de edad: las piezas pequeñas representan riesgo de atragantamiento."],
  },
  "libros-educativos": {
    intro: "Los libros educativos y enciclopedias visuales son una inversión excepcional para el desarrollo intelectual de los niños. Fomentan el hábito lector y la curiosidad por el conocimiento.",
    tips: ["Las enciclopedias visuales son más efectivas que los libros de texto densos.", "Los libros de actividades como Scratch combinan lectura y práctica.", "¿Dónde está Wally? es un clásico que trabaja la atención y concentración.", "Adapta el libro al nivel lector: demasiado fácil no reta, demasiado difícil frustra."],
  },
};

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) notFound();

  const catProducts = getProductsByCategory(categoria);
  const guide = guideContent[categoria];

  const categoriesWithCount = categories.map((c) => ({
    ...c,
    count: getProductsByCategory(c.slug).length,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.name,
    description: cat.description,
    url: `https://www.juguetestem.es/tienda/${cat.slug}`,
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: cat.name,
    numberOfItems: catProducts.length,
    itemListElement: catProducts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://www.juguetestem.es/tienda/${p.categorySlug}/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-purple-700">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/tienda" className="hover:text-purple-700">Tienda</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{cat.name}</span>
        </nav>

        {/* Mobile: category pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 md:hidden scrollbar-hide">
          {categoriesWithCount.map((c) => (
            <Link
              key={c.slug}
              href={`/tienda/${c.slug}`}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors border ${
                c.slug === categoria
                  ? "bg-purple-700 text-white border-purple-700 font-semibold"
                  : "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
              }`}
            >
              <span>{c.icon}</span>
              <span className="whitespace-nowrap">{c.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden md:block w-56 lg:w-64 flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-purple-700 text-white rounded-t-xl px-4 py-3">
                <span className="font-bold text-sm uppercase tracking-wide">Categorías</span>
              </div>
              <nav className="bg-white border border-t-0 border-gray-200 rounded-b-xl overflow-hidden">
                <Link
                  href="/tienda"
                  className="flex items-center justify-between px-4 py-3 border-b border-gray-100 hover:bg-purple-50 transition-colors group"
                >
                  <span className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-purple-800">
                    <span>🏪</span>
                    <span>Todos los productos</span>
                  </span>
                </Link>
                {categoriesWithCount.map((c) => {
                  const isActive = c.slug === categoria;
                  return (
                    <Link
                      key={c.slug}
                      href={`/tienda/${c.slug}`}
                      className={`flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0 transition-colors ${
                        isActive
                          ? "bg-purple-700 text-white"
                          : "hover:bg-purple-50 text-gray-700"
                      }`}
                    >
                      <span className={`flex items-center gap-2 text-sm ${isActive ? "font-semibold text-white" : "group-hover:text-purple-800"}`}>
                        <span>{c.icon}</span>
                        <span>{c.name}</span>
                      </span>
                      <span className={`text-xs rounded-full px-2 py-0.5 ${
                        isActive
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}>{c.count}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-5 bg-purple-50 border border-purple-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-purple-800 mb-1">Rango de precios</p>
                <p className="text-sm font-bold text-gray-800">{cat.priceRange}</p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Compact header */}
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">{cat.name}</h1>
                <p className="text-gray-500 text-sm mt-0.5 max-w-xl">{cat.description}</p>
              </div>
            </div>

            {/* Product count bar */}
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 mb-5">
              <span className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{catProducts.length} productos</span> en esta categoría
              </span>
              <span className="text-xs text-gray-400">{cat.priceRange}</span>
            </div>

            <AffiliateDisclosure />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
              {catProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>

            {guide && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-extrabold text-gray-900 mb-2">Guía de compra: {cat.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{guide.intro}</p>
                <h3 className="font-bold text-gray-800 text-sm mb-2">Consejos para elegir bien:</h3>
                <ul className="space-y-2">
                  {guide.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-gray-600 text-sm">
                      <span className="text-purple-500 font-bold shrink-0">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-8 pl-3 border-l-2 border-gray-200">
              Enlace de afiliado Amazon Associates. Recibimos una comisión sin coste adicional para ti.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
