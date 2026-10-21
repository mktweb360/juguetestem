import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, products, getProductBySlug, getProductsByCategory, amazonLink } from "@/data/products";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { getPostBySlug } from "@/data/posts";
import { productTitle, productTitleUnique, relatedInCategory, publicDescription } from "@/lib/seo";
import { CATEGORIA_GUIA } from "@/lib/categoria-guia";

/* ─── Metadata ────────────────────────────────────────────────────────────── */
// Imagen de respaldo por categoría para fichas sin imagen propia (ficheros que existen en public/images/products).
const CATEGORY_IMAGE: Record<string, string> = {
  "construccion-lego": "/images/products/construcciones.jpg",
  "juegos-mesa-educativos": "/images/products/juegos-mesa.jpg",
  "juguetes-stem": "/images/products/kits-ciencia.jpg",
  "juguetes-montessori": "/images/products/juguetes-montessori.jpg",
  "libros-educativos": "/images/products/libros-educativos.jpg",
  "telescopios-microscopios": "/images/products/telescopios-microscopios.jpg",
};

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
    title: { absolute: productTitleUnique(product, products, "análisis y opinión") },
    description: product.shortDescription,
    alternates: {
      canonical: `https://www.juguetestem.es/tienda/${categoria}/${producto}`,
    },
    ...(product.unavailable ? { robots: { index: false, follow: true } } : {}),
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

  const topSpecs = Object.entries(product.specs).slice(0, 4);
  const related = relatedInCategory(getProductsByCategory(categoria), producto, 3);
  const relatedGuides = (product.relatedPosts ?? [])
    .map((s) => getPostBySlug(s))
    .filter(Boolean);

  const analisis = publicDescription(product.fullDescription);
  const guia = CATEGORIA_GUIA[categoria];
  const edad = product.specs["Edad"];
  // Preguntas propias de la ficha: la edad, lo que dice la categoría y las alternativas reales del catálogo.
  const faqs = [
    ...(edad ? [{ q: `¿Para qué edad es ${product.name}?`, a: `El fabricante lo indica para ${edad}. Úsalo como límite mínimo y comprueba si el niño tiene la destreza para el reto que plantea.` }] : []),
    ...(guia ? [guia.faq[0]] : []),
    { q: `¿Qué puntos débiles tiene ${product.name}?`, a: product.cons.length ? `${product.cons.join(". ")}.` : "Consulta la ficha del fabricante." },
    { q: "¿Con qué otros productos se puede comparar?", a: related.length ? `En esta misma categoría tienes ${related.map((r) => r.name).join(", ")}; más abajo los comparamos con este.` : "Consulta el resto de la categoría." },
  ];

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
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
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
              src={product.image ?? CATEGORY_IMAGE[product.categorySlug] ?? "/images/hero-bg.jpg"}
              alt={product.name}
              className="w-full h-72 object-cover"
              loading="eager"
            />
          </div>

          {/* Columna ficha */}
          <div className="flex flex-col">

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                {cat.name}
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

            {product.unavailable && (
              <p className="mb-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                Este producto no está disponible ahora mismo en Amazon.es. Te recomendamos ver las alternativas de la misma categoría más abajo.
              </p>
            )}
            {/* Botón de compra */}
            {!product.unavailable && <a
              href={amazonLink(product.asin)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-4 px-6 rounded-xl text-base transition-colors mb-2"
            >
              🛒 Ver precio actualizado →
            </a>}

            {/* Botón secundario */}
            <a
              href={`/tienda/${cat.slug}`}
              className="block w-full border-2 border-purple-700 text-purple-700 hover:bg-purple-50 font-bold text-center py-3 px-6 rounded-xl text-sm transition-colors mb-3"
            >
              Ver más de {cat.name}
            </a>

            <p className="text-xs text-gray-400 text-center">
              Enlace de afiliado · Precio actualizado en destino
            </p>

          </div>
        </div>

        {/* Affiliate disclosure */}
        <AffiliateDisclosure />

        {/* Análisis propio */}
        {analisis && (
          <section className="my-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Qué es y cómo funciona</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{analisis}</p>
          </section>
        )}

        {guia && (
          <section className="mb-10 rounded-2xl border border-purple-100 bg-purple-50 p-6">
            <h2 className="text-base font-extrabold text-purple-900 mb-3">Antes de comprar en {cat.name}</h2>
            <ul className="space-y-2">
              {guia.antesDeComprar.map((t, i) => (
                <li key={i} className="text-sm text-purple-900 flex gap-2"><span className="shrink-0 font-bold">→</span>{t}</li>
              ))}
            </ul>
            <p className="text-xs text-purple-800 mt-3">
              <Link href={`/tienda/${cat.slug}`} className="font-semibold underline">Guía completa de {cat.name}</Link>
            </p>
          </section>
        )}

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
            {faqs.map((faq, i) => (
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

        {/* Comparativa con alternativas de la categoría */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Comparado con otras opciones de la categoría</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left text-gray-600">
                  <tr><th className="px-4 py-3">Producto</th><th className="px-4 py-3">Edad</th><th className="px-4 py-3">Dato clave</th></tr>
                </thead>
                <tbody>
                  {[product, ...related].map((p) => {
                    const otro = Object.entries(p.specs).find(([k]) => k !== "Edad");
                    return (
                      <tr key={p.slug} className={p.slug === product.slug ? "bg-purple-50 font-semibold" : "border-t border-gray-100"}>
                        <td className="px-4 py-3">
                          {p.slug === product.slug ? p.name : <Link href={`/tienda/${p.categorySlug}/${p.slug}`} className="text-purple-700 hover:underline">{p.name}</Link>}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{p.specs["Edad"] ?? "Según fabricante"}</td>
                        <td className="px-4 py-3 text-gray-600">{otro ? `${otro[0]}: ${otro[1]}` : "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
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
        {!product.unavailable && <div className="rounded-2xl bg-gradient-to-r from-purple-700 to-purple-800 text-white p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-2">¿Convencido? Cómpralo ahora</h2>
          <p className="text-purple-200 text-sm mb-6 max-w-lg mx-auto">
            {product.shortDescription} Consulta en Amazon.es el precio, el vendedor y las condiciones de envío y devolución.
          </p>
          <a
            href={amazonLink(product.asin)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            🛒 Ver precio actualizado →
          </a>
          <p className="text-purple-300 text-xs mt-3">
            Enlace de afiliado · Precio actualizado en destino
          </p>
        </div>}

      </div>
    </>
  );
}
