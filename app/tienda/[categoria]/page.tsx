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

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.name,
    description: cat.description,
    url: `https://www.juguetestem.es/tienda/${cat.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-purple-700">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/tienda" className="hover:text-purple-700">Tienda</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{cat.name}</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{cat.icon}</span>
            <h1 className="text-3xl font-extrabold text-gray-900">{cat.name}</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">{cat.description}</p>
        </div>

        <AffiliateDisclosure />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {catProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {guide && (
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Guía de compra: {cat.name}</h2>
            <p className="text-gray-700 mb-5">{guide.intro}</p>
            <h3 className="font-bold text-gray-800 mb-3">Consejos para elegir bien:</h3>
            <ul className="space-y-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex gap-2 text-gray-700 text-sm">
                  <span className="text-purple-500 font-bold shrink-0">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
