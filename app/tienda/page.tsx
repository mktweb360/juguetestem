import Link from "next/link";
import type { Metadata } from "next";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Tienda — Juguetes educativos y STEM",
  description: "Explora todas las categorías de juguetes educativos y STEM: Montessori, ciencia, juegos de mesa, construcción y libros.",
  alternates: { canonical: "https://www.juguetestem.es/tienda" },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tienda de Juguetes Educativos y STEM — JugueteSTEM.es",
  description: "Catálogo completo de juguetes educativos, Montessori, STEM y juegos de mesa para niños",
  url: "https://www.juguetestem.es/tienda",
};

export default function TiendaPage() {
  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count: getProductsByCategory(cat.slug).length,
  }));

  const totalProducts = categoriesWithCount.reduce((sum, c) => sum + c.count, 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-purple-700">Inicio</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Tienda</span>
        </nav>

        {/* Mobile: category pills */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 md:hidden scrollbar-hide">
          {categoriesWithCount.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda/${cat.slug}`}
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-sm text-purple-700 hover:bg-purple-100 transition-colors"
            >
              <span>{cat.icon}</span>
              <span className="font-medium whitespace-nowrap">{cat.name}</span>
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
                  className="flex items-center justify-between px-4 py-3 bg-purple-50 border-b border-gray-100 hover:bg-purple-100 transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-purple-800">
                    <span>🏪</span>
                    <span>Todos los productos</span>
                  </span>
                  <span className="text-xs bg-purple-700 text-white rounded-full px-2 py-0.5">{totalProducts}</span>
                </Link>
                {categoriesWithCount.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/tienda/${cat.slug}`}
                    className="flex items-center justify-between px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-purple-50 transition-colors group"
                  >
                    <span className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-purple-800">
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors">{cat.count}</span>
                  </Link>
                ))}
              </nav>

              <div className="mt-5 bg-purple-50 border border-purple-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-purple-800 mb-1">¿Necesitas ayuda?</p>
                <p className="text-xs text-gray-600">Consulta nuestra guía para elegir el juguete perfecto según edad e intereses.</p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <h1 className="text-2xl font-extrabold text-gray-900">Todos los productos</h1>
                <p className="text-sm text-gray-500 mt-0.5">{totalProducts} productos en {categories.length} categorías</p>
              </div>
            </div>

            {/* Category sections */}
            <div className="space-y-10">
              {categoriesWithCount.map((cat) => {
                const products = getProductsByCategory(cat.slug);
                return (
                  <section key={cat.slug}>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{cat.icon}</span>
                        <h2 className="font-extrabold text-gray-900 text-lg">{cat.name}</h2>
                        <span className="text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5 font-semibold">{cat.count}</span>
                      </div>
                      <Link
                        href={`/tienda/${cat.slug}`}
                        className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1"
                      >
                        Ver todos <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {products.slice(0, 3).map((product) => (
                        <Link
                          key={product.slug}
                          href={`/tienda/${cat.slug}/${product.slug}`}
                          className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-purple-200 transition-all group"
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-purple-700 transition-colors line-clamp-2">{product.name}</h3>
                            {product.badge && (
                              <span className="flex-shrink-0 text-xs bg-purple-700 text-white rounded-full px-2 py-0.5 font-semibold">{product.badge}</span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.shortDescription}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-purple-700 font-bold text-sm">{product.price}</span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <span className="text-yellow-400">★</span>
                              {product.rating} ({product.reviewCount})
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    {products.length > 3 && (
                      <div className="mt-3 text-center">
                        <Link
                          href={`/tienda/${cat.slug}`}
                          className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-800 font-medium"
                        >
                          Ver los {products.length - 3} productos restantes de {cat.name} →
                        </Link>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 mt-8 pl-3 border-l-2 border-gray-200">
              Enlace de afiliado Amazon Associates. Recibimos una comisión sin coste adicional para ti.
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
