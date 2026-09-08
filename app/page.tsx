import type { Metadata } from "next";
import Link from "next/link";
import { categories, getFeaturedProducts, getProductsByCategory } from "@/data/products";
import { getLatestPosts } from "@/data/posts";
import ProductCard from "@/components/ProductCard";
import HeroBackground from "@/components/HeroBackground";
import EmailCaptureSection from "@/components/EmailCaptureSection";
import OffersSlider, { type OfferSlide } from "@/components/OffersSlider";

// Ofertas destacadas del slider — productos reales del catálogo con imagen y badge verificados
const offerSlides: OfferSlide[] = [
  {
    image: "/images/products/thames-kosmos-intro-chemistry-27-experimentos.jpg",
    badge: "Recomendado STEM",
    title: "Thames & Kosmos Intro Chemistry",
    subtitle: "Kit de 27 experimentos de química para iniciarse en ciencia",
    price: "€61,61",
    href: "/tienda/juguetes-stem/thames-kosmos-intro-chemistry-27-experimentos",
  },
  {
    image: "/images/products/dixit-juego-mesa-asmodee-2021.jpg",
    badge: "Premio Spiel des Jahres",
    title: "Dixit — Asmodee",
    subtitle: "El juego de mesa de imaginación e ilustración para toda la familia",
    price: "€32,97",
    href: "/tienda/juegos-mesa-educativos/dixit-juego-mesa-asmodee-2021",
  },
  {
    image: "/images/products/lego-10698-caja-ladrillos-creativos-grande.jpg",
    badge: "Más completa",
    title: "LEGO Classic 10698",
    subtitle: "Caja grande de ladrillos creativos para construir sin límites",
    price: "€49,99",
    href: "/tienda/construccion-lego/lego-10698-caja-ladrillos-creativos-grande",
  },
];

export const metadata: Metadata = {
  title: "JugueteSTEM.es — Juguetes educativos y STEM para niños",
  description: "Las mejores reseñas y guías de juguetes educativos y STEM para niños. Montessori, ciencia, robótica, juegos de mesa y más.",
  alternates: { canonical: "https://www.juguetestem.es" },
};

export default function HomePage() {
  const featured = getFeaturedProducts(6);
  const latestPosts = getLatestPosts(4);
  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count: getProductsByCategory(cat.slug).length,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white py-20 px-4" style={{minHeight: "520px"}}>
        <HeroBackground overlay="from-purple-900/50 via-purple-800/35 to-purple-900/45" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">🧩🔬🎲</div>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
            Juguetes educativos y STEM<br className="hidden sm:block" /> para niños curiosos
          </h1>
          <p className="text-purple-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]">
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

      {/* Categorías + Ofertas destacadas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Categorías y ofertas destacadas</h2>
        <p className="text-center text-gray-500 mb-8">Elige tu categoría o descubre los productos mejor valorados del momento</p>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* Menú vertical de categorías — 25% */}
          <aside className="w-full md:w-1/4 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm h-full">
              <div className="bg-purple-600 px-4 py-3">
                <span className="text-white font-semibold text-sm uppercase tracking-wide">Categorías</span>
              </div>
              <nav className="divide-y divide-gray-50">
                {categoriesWithCount.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/tienda/${cat.slug}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 hover:text-purple-700 transition-colors group"
                  >
                    <span className="text-xl leading-none">{cat.icon}</span>
                    <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-purple-700 leading-tight">{cat.name}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">{cat.count}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Slider de ofertas destacadas — 75% */}
          <div className="w-full md:w-3/4">
            <OffersSlider slides={offerSlides} intervalMs={4000} />
          </div>
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
      
      {/* LEAD MAGNET — Captura de email */}
      <EmailCaptureSection />

    </>
  );
}
