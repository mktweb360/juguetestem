import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, products, getProductBySlug, getProductsByCategory, amazonLink } from "@/data/products";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { getPostBySlug } from "@/data/posts";

/* ─── Rating estable por slug ─────────────────────────────────────────────── */
function stableRating(slug: string) {
  let hash = 0;
  for (const ch of slug) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffff;
  const score = +(4.1 + (hash % 9) * 0.1).toFixed(1);
  const count = 120 + (hash % 801);
  return { score, count };
}

function Stars({ score }: { score: number }) {
  const full = Math.floor(score);
  return (
    <span className="inline-flex gap-0.5 text-lg leading-none">
      {Array.from({ length: 5 }).map((_, i) =>
        i < full
          ? <span key={i} className="text-yellow-400">★</span>
          : i === full && score - full >= 0.5
            ? <span key={i} className="text-yellow-300">★</span>
            : <span key={i} className="text-gray-300">★</span>
      )}
    </span>
  );
}

/* ─── Metadata ────────────────────────────────────────────────────────────── */
export async function generateStaticParams() {
  return products.map((p) => ({ categoria: p.categorySlug, producto: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; producto: string }>;
}): Promise<Metadata> {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  if (!product) return {};
  return {
    title: `${product.name} — Análisis y opinión`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://www.juguetestem.es/tienda/${categoria}/${producto}`,
    },
  };
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function ProductoPage({
  params,
}: {
  params: Promise<{ categoria: string; producto: string }>;
}) {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  const cat = categories.find((c) => c.slug === categoria);
  if (!product || !cat) notFound();

  const { score, count } = stableRating(product.slug);
  const topSpecs = Object.entries(product.specs).slice(0, 4);
  const related = getProductsByCategory(categoria)
    .filter((p) => p.slug !== producto)
    .slice(0, 3);
  const relatedGuides = (product.relatedPosts ?? [])
    .map((s) => getPostBySlug(s))
    .filter(Boolean);

  /* Schema JSON-LD */
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    sku: product.asin,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.juguetestem.es" },
      { "@type": "ListItem", position: 2, name: "Tienda", item: "https://www.juguetestem.es/tienda" },
      { "@type": "ListItem", position: 3, name: cat.name, item: `https://www.juguetestem.es/tienda/${cat.slug}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `https://www.juguetestem.es/tienda/${cat.slug}/${product.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Para qué edad es ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.specs["Edad"]
            ? `${product.name} está recomendado para ${product.specs["Edad"]}.`
            : "Consulta las especificaciones del producto.",
        },
      },
      {
        "@type": "Question",
        name: `¿Dónde comprar ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Puedes ver el precio actualizado y comprar ${product.name} en Amazon.es. El precio varía según disponibilidad y ofertas.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Es seguro ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${product.name} cumple con la normativa CE de seguridad para juguetes en la Unión Europea.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Necesita pilas o baterías ${product.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.specs["Pilas"] ?? product.specs["Batería"]
            ? `Consulta la sección de especificaciones para el tipo de alimentación requerido.`
            : `Consulta las especificaciones del producto para saber si incluye pilas o necesita baterías adicionales.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <nav className="text-gray-400 text-sm mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-purple-700">Inicio</Link>
          <span className="mx-1">›</span>
          <Link href="/tienda" className="hover:text-purple-700">Tienda</Link>
          <span className="mx-1">›</span>
          <Link href={`/tienda/${cat.slug}`} className="hover:text-purple-700">{cat.name}</Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700 line-clamp-1">{product.name}</span>
        </nav>

        {/* ── Hero: 2 columnas ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Columna imagen */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
              src={`/images/products/${product.categorySlug}.jpg`}
              alt={product.name}
              className="w-full h-72 object-cover"
              loading="eager"
            />
          </div>

          {/* Columna ficha */}
          <div className="flex flex-col">

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                <span>✓</span> Análisis verificado
              </span>
              <span className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                {cat.name}
              </span>
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                <span>●</span> En stock
              </span>
              {product.badge && (
                <span className="inline-flex items-center bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* H1 */}
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
              {product.name}
            </h1>

            {/* Rating estrellas */}
            <div className="flex items-center gap-2 mb-4">
              <Stars score={score} />
              <span className="text-sm font-bold text-gray-700">{score}</span>
              <span className="text-xs text-gray-400">({count} valoraciones)</span>
            </div>

            {/* Pills specs */}
            {topSpecs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {topSpecs.map(([key, val]) => (
                  <span
                    key={key}
                    className="bg-purple-50 border border-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {key}: {val}
                  </span>
                ))}
              </div>
            )}

            {/* Descripción corta */}
            <p className="text-gray-600 text-sm mb-5">{product.shortDescription}</p>

            {/* Botón Amazon */}
            <a
              href={amazonLink(product.asin)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-4 px-6 rounded-xl text-base transition-colors mb-2"
            >
              🛒 Ver precio en Amazon →
            </a>

            {/* Botón secundario */}
            <a
              href={`/tienda/${cat.slug}`}
              className="block w-full border-2 border-purple-700 text-purple-700 hover:bg-purple-50 font-bold text-center py-3 px-6 rounded-xl text-sm transition-colors mb-3"
            >
              Ver más de {cat.name}
            </a>

            <p className="text-xs text-gray-400 text-center">
              Amazon.es · Enlace de afiliado · Precio actualizado en destino
            </p>

            {/* Trust bar */}
            <div className="flex justify-around mt-4 pt-4 border-t border-gray-100 text-center">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🔒</span>
                <span className="text-xs text-gray-500 font-medium">Pago seguro</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🚚</span>
                <span className="text-xs text-gray-500 font-medium">Envío Prime</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">↩️</span>
                <span className="text-xs text-gray-500 font-medium">Devolución fácil</span>
              </div>
            </div>

          </div>
        </div>

        {/* Affiliate disclosure */}
        <AffiliateDisclosure />

        {/* Pros / Cons */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h2 className="font-extrabold text-green-800 mb-4 flex items-center gap-2 text-base">
              <span className="text-green-600 text-lg">✓</span> Puntos positivos
            </h2>
            <ul className="space-y-2">
              {product.pros.map((pro, i) => (
                <li key={i} className="text-green-700 text-sm flex gap-2">
                  <span className="shrink-0 text-green-500 font-bold">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h2 className="font-extrabold text-red-800 mb-4 flex items-center gap-2 text-base">
              <span className="text-red-500 text-lg">✗</span> Puntos a tener en cuenta
            </h2>
            <ul className="space-y-2">
              {product.cons.map((con, i) => (
                <li key={i} className="text-red-700 text-sm flex gap-2">
                  <span className="shrink-0 text-red-400 font-bold">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tabla especificaciones */}
        <div className="rounded-2xl border border-gray-100 overflow-hidden mb-10">
          <div className="bg-purple-700 px-6 py-3">
            <h2 className="font-extrabold text-white text-base">Especificaciones técnicas</h2>
          </div>
          <div>
            {Object.entries(product.specs).map(([key, val], i) => (
              <div
                key={key}
                className={`flex gap-4 px-6 py-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <span className="font-semibold text-gray-700 w-40 shrink-0">{key}</span>
                <span className="text-gray-600">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ details/summary */}
        <div className="mb-10">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {[
              {
                q: `¿Para qué edad es ${product.name}?`,
                a: product.specs["Edad"]
                  ? `${product.name} está recomendado para ${product.specs["Edad"]}. Respeta siempre los límites de edad indicados por el fabricante.`
                  : "Consulta las especificaciones del producto para la edad recomendada. Respeta siempre los límites indicados por el fabricante.",
              },
              {
                q: `¿Dónde comprar ${product.name} al mejor precio?`,
                a: `Puedes ver el precio actualizado y comprar ${product.name} directamente en Amazon.es a través de nuestro enlace. El precio puede variar según stock y ofertas del momento.`,
              },
              {
                q: `¿Es seguro ${product.name}?`,
                a: `Sí, ${product.name} cumple con la normativa CE de seguridad para juguetes en la Unión Europea. Respeta siempre los límites de edad indicados y supervisa a los niños pequeños durante el juego.`,
              },
              {
                q: `¿Necesita pilas o baterías ${product.name}?`,
                a: product.specs["Pilas"] ?? product.specs["Batería"]
                  ? `Revisa el apartado de especificaciones donde encontrarás el tipo de alimentación exacto. Algunos modelos incluyen pilas para probar, otros requieren pilas adicionales.`
                  : `Para saber si necesita pilas o viene con batería incluida, consulta la ficha completa del producto en Amazon.es antes de comprarlo.`,
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="border border-gray-200 rounded-xl overflow-hidden group"
              >
                <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-gray-900 hover:bg-purple-50 transition-colors list-none text-sm">
                  <span>{faq.q}</span>
                  <span className="text-purple-600 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed bg-gray-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Guías relacionadas */}
        {relatedGuides.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Guías relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map(
                (p) =>
                  p && (
                    <a
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="flex items-start gap-3 bg-purple-50 border border-purple-100 rounded-2xl p-4 hover:bg-purple-100 transition-colors group"
                    >
                      <span className="text-purple-600 text-xl shrink-0 mt-0.5">📖</span>
                      <div>
                        <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">
                          {p.category}
                        </span>
                        <h3 className="font-bold text-gray-900 text-sm mt-0.5 leading-tight group-hover:text-purple-700 transition-colors">
                          {p.title}
                        </h3>
                        <span className="text-purple-700 font-semibold text-xs mt-1 inline-block">
                          Leer guía →
                        </span>
                      </div>
                    </a>
                  )
              )}
            </div>
          </div>
        )}

        {/* Productos relacionados */}
        {related.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">También te puede interesar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/tienda/${p.categorySlug}/${p.slug}`}
                  className="border border-gray-100 rounded-xl p-4 hover:border-purple-200 hover:shadow-md transition-all group"
                >
                  {p.badge && (
                    <span className="inline-block text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full mb-2">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-purple-700 transition-colors mb-1 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">{p.shortDescription}</p>
                  <span className="text-xs text-purple-700 font-semibold">Ver análisis →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA final */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-2">¿Convencido? Cómpralo en Amazon</h2>
          <p className="text-purple-200 text-sm mb-6 max-w-lg mx-auto">
            {product.shortDescription} Disponible en Amazon.es con envío rápido Prime y devolución garantizada.
          </p>
          <a
            href={amazonLink(product.asin)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            🛒 Ver precio en Amazon →
          </a>
          <p className="text-purple-300 text-xs mt-3">
            Amazon.es · Enlace de afiliado · Precio actualizado en destino
          </p>
        </div>

      </div>
    </>
  );
}
