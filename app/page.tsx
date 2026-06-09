import Link from "next/link";
import { categories, getFeaturedProducts } from "@/data/products";
import { getLatestPosts } from "@/data/posts";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const latestPosts = getLatestPosts(4);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🧩🔬🎲</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Juguetes educativos y STEM<br className="hidden sm:block" /> para niños curiosos
          </h1>
          <p className="text-purple-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Analizamos los mejores juguetes Montessori, kits de ciencia, juegos de mesa y recursos educativos para que elijas con confianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tienda" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl text-lg transition-colors">
              Ver tienda →
            </Link>
            <Link href="/blog" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-xl text-lg transition-colors border border-white/30">
              Leer guías
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Explora por categoría</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/tienda/${cat.slug}`}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all p-4 text-center group"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-bold text-gray-800 text-sm group-hover:text-purple-700 transition-colors leading-tight">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-1">{cat.priceRange}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Productos más recomendados</h2>
          <Link href="/tienda" className="text-purple-700 font-semibold text-sm hover:underline">Ver todos →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Por qué confiar en nosotros */}
      <section className="bg-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8">¿Por qué confiar en JugueteSTEM.es?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Análisis honestos", desc: "Evaluamos cada juguete con criterios pedagógicos reales, sin dejarnos llevar por el marketing." },
              { icon: "👶", title: "Por edades y etapas", desc: "Cada recomendación incluye la franja de edad ideal y el tipo de habilidades que desarrolla." },
              { icon: "💰", title: "Mejor precio garantizado", desc: "Comparamos precios en Amazon para que encuentres siempre la mejor oferta disponible." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimos artículos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Últimas guías y análisis</h2>
          <Link href="/blog" className="text-purple-700 font-semibold text-sm hover:underline">Ver todos →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">{post.category}</span>
              <h3 className="font-extrabold text-gray-900 mt-1 mb-2 leading-tight hover:text-purple-700 transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-3">{post.readTime} min de lectura</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
