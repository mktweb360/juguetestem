import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, products, getProductBySlug, getProductsByCategory, amazonLink } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { getPostBySlug } from "@/data/posts";

export async function generateStaticParams() {
  return products.map((p) => ({ categoria: p.categorySlug, producto: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string; producto: string }> }): Promise<Metadata> {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  if (!product) return {};
  return {
    title: `${product.name} — Análisis y opinión`,
    description: product.shortDescription,
    alternates: { canonical: `https://www.juguetestem.es/tienda/${categoria}/${producto}` },
  };
}

export default async function ProductoPage({ params }: { params: Promise<{ categoria: string; producto: string }> }) {
  const { categoria, producto } = await params;
  const product = getProductBySlug(producto);
  const cat = categories.find((c) => c.slug === categoria);
  if (!product || !cat) notFound();

  const related = getProductsByCategory(categoria).filter((p) => p.slug !== producto).slice(0, 2);
  const relatedGuides = (product.relatedPosts ?? []).map((s) => getPostBySlug(s)).filter(Boolean);

  // Sin `offers` (precio) ni `aggregateRating`: precio y opiniones solo pueden
  // mostrarse vía la API oficial de Amazon (Creators API). Emitir precio estático
  // o ratings de Amazon incumple el Operating Agreement de Amazon y la política
  // de datos estructurados de Google.
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
      { "@type": "Question", name: `¿Para qué edad es ${product.name}?`, acceptedAnswer: { "@type": "Answer", text: product.specs["Edad"] ? `${product.name} está recomendado para ${product.specs["Edad"]}.` : "Consulta las especificaciones del producto." } },
      { "@type": "Question", name: `¿Dónde comprar ${product.name}?`, acceptedAnswer: { "@type": "Answer", text: `Puedes ver el precio actualizado y comprar ${product.name} en su ficha de Amazon.es. El precio varía según disponibilidad y ofertas.` } },
      { "@type": "Question", name: `¿Es seguro ${product.name}?`, acceptedAnswer: { "@type": "Answer", text: `${product.name} cumple con la normativa CE de seguridad para juguetes en la Unión Europea.` } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-gray-400 text-sm mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-purple-700">Inicio</Link>
          <span className="mx-1">›</span>
          <Link href="/tienda" className="hover:text-purple-700">Tienda</Link>
          <span className="mx-1">›</span>
          <Link href={`/tienda/${cat.slug}`} className="hover:text-purple-700">{cat.name}</Link>
          <span className="mx-1">›</span>
          <span className="text-gray-700 line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={`/images/products/${product.categorySlug}.jpg`}
              alt={product.name}
              className="w-full h-64 object-cover"
              loading="eager"
            />
          </div>

          <div>
            {product.badge && (
              <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.shortDescription}</p>

            <a
              href={amazonLink(product.asin)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-center py-4 px-6 rounded-xl text-lg transition-colors mb-2"
            >
              🛒 Comprar en Amazon →
            </a>
            <p className="text-xs text-gray-400 text-center mt-1">Se abrirá Amazon.es · Enlace de afiliado</p>
          </div>
        </div>

        <AffiliateDisclosure />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h2 className="font-extrabold text-green-800 mb-3 flex items-center gap-2">
              <span>✓</span> Puntos positivos
            </h2>
            <ul className="space-y-2">
              {product.pros.map((pro, i) => (
                <li key={i} className="text-green-700 text-sm flex gap-2">
                  <span className="shrink-0">✓</span>{pro}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h2 className="font-extrabold text-red-800 mb-3 flex items-center gap-2">
              <span>✗</span> Puntos a tener en cuenta
            </h2>
            <ul className="space-y-2">
              {product.cons.map((con, i) => (
                <li key={i} className="text-red-700 text-sm flex gap-2">
                  <span className="shrink-0">✗</span>{con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="font-extrabold text-gray-900 mb-4">Especificaciones</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="bg-gray-50 rounded-xl p-3">
                <dt className="text-xs text-gray-400 font-semibold uppercase">{key}</dt>
                <dd className="font-bold text-gray-800 text-sm mt-1">{val}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
          <h2 className="font-extrabold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 text-sm">¿Para qué edad es {product.name}?</h3>
              <p className="text-gray-600 text-sm mt-1">{product.specs["Edad"] ? `Está recomendado para ${product.specs["Edad"]}.` : "Consulta las especificaciones del producto para más información."}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">¿Dónde comprar {product.name}?</h3>
              <p className="text-gray-600 text-sm mt-1">Puedes ver el precio actualizado y comprarlo en su ficha de Amazon.es a través de nuestro enlace. El precio varía según disponibilidad y ofertas.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">¿Es seguro este juguete?</h3>
              <p className="text-gray-600 text-sm mt-1">Sí, {product.name} cumple con la normativa CE de seguridad para juguetes en la Unión Europea. Respeta siempre los límites de edad indicados.</p>
            </div>
          </div>
        </div>

        {relatedGuides.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Guías relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedGuides.map((p) => p && (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="flex items-start gap-3 bg-purple-50 border border-purple-100 rounded-2xl p-4 hover:bg-purple-100 transition-colors group"
                >
                  <span className="text-purple-600 text-xl shrink-0 mt-0.5">📖</span>
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">{p.category}</span>
                    <h3 className="font-bold text-gray-900 text-sm mt-0.5 leading-tight group-hover:text-purple-700 transition-colors">{p.title}</h3>
                    <span className="text-purple-700 font-semibold text-xs mt-1 inline-block">Leer guía →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">También te puede interesar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
