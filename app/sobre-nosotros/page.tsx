import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros — JugueteSTEM.es",
  description: "Ana Romero, Maestra de Primaria con 9 años de experiencia en educación STEM y Montessori, es la voz experta detrás de JugueteSTEM.es.",
  alternates: { canonical: "/sobre-nosotros" },
};

const SITE_URL = "https://www.juguetestem.es";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ana Romero",
  jobTitle: "Maestra de Primaria especializada en STEM",
  url: `${SITE_URL}/sobre-nosotros`,
  description: "Maestra de Primaria con 9 años de experiencia en educación STEM y metodología Montessori en aulas de infantil y primaria.",
  knowsAbout: [
    "juguetes educativos",
    "metodología Montessori",
    "educación STEM",
    "robótica infantil",
    "juguetes de construcción",
    "desarrollo cognitivo infantil",
  ],
  worksFor: {
    "@type": "Organization",
    name: "JugueteSTEM.es",
    url: SITE_URL,
  },
  sameAs: [SITE_URL],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JugueteSTEM.es",
  legalName: "Mkt Web 360 SLU",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  taxID: "B87679304",
  foundingDate: "2024",
  description:
    "Portal especializado en juguetes educativos STEM y materiales Montessori para niños. Comparativas y análisis con criterio pedagógico profesional.",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "juguetes educativos",
    "metodología Montessori",
    "juguetes STEM",
    "robótica infantil",
    "juegos de construcción",
    "libros educativos",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@mktweb360.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.instagram.com/juguetestem.es",
    "https://www.facebook.com/juguetestem.es",
  ],
  employee: {
    "@type": "Person",
    name: "Ana Romero",
    jobTitle: "Maestra de Primaria especializada en STEM",
  },
};

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav className="text-gray-400 text-sm mb-6">
          <Link href="/" className="hover:text-purple-700">
            Inicio
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Sobre nosotros</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          Sobre JugueteSTEM.es
        </h1>

        {/* Author profile card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 flex gap-5 items-start shadow-sm">
          <div className="shrink-0 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl font-extrabold select-none">
            AR
          </div>
          <div>
            <p className="text-lg font-extrabold text-gray-900 leading-tight">
              Ana Romero
            </p>
            <p className="text-sm text-purple-700 font-semibold mb-2">
              Maestra de Primaria especializada en STEM y Montessori
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Con 9 años de experiencia en aulas de infantil y primaria,
              Ana Romero combina la teoría pedagógica con la práctica real
              del aula para evaluar qué juguetes educativos aportan valor
              genuino al desarrollo de los niños. Especializada en
              metodología Montessori y educación STEM, analiza cada producto
              con los mismos criterios que aplicaría en su clase: seguridad,
              adecuación a la edad, potencial de aprendizaje y durabilidad.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Metodología Montessori",
                "Educación STEM",
                "Robótica infantil",
                "Juguetes de construcción",
                "Desarrollo cognitivo",
                "Juegos de mesa educativos",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-3 py-0.5 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 text-gray-700">
          {/* Qué es JugueteSTEM.es */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              Qué es JugueteSTEM.es
            </h2>
            <p>
              JugueteSTEM.es es un portal especializado en juguetes educativos
              STEM y materiales Montessori para niños, creado por{" "}
              <strong>Mkt Web 360 SLU</strong> (CIF B87679304) con un objetivo
              claro: ayudar a las familias españolas a elegir juguetes que
              aporten valor pedagógico real, no solo entretenimiento.
            </p>
            <p className="mt-3">
              Todas las recomendaciones pasan por el criterio de Ana Romero,
              maestra en activo con experiencia directa en el aula. No
              publicamos reseñas de productos que no cumplan nuestros
              estándares pedagógicos, aunque sean los más vendidos del mercado.
            </p>
          </section>

          {/* Criterios pedagógicos */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              Criterios pedagógicos de selección
            </h2>
            <p className="mb-4">
              Cada juguete que analizamos se evalúa con los mismos criterios
              que aplicamos en el aula. Un juguete solo entra en nuestras
              recomendaciones si supera todos estos filtros:
            </p>
            <ul className="space-y-2.5">
              {[
                "Adecuación real a la edad y etapa de desarrollo cognitivo",
                "Valor educativo demostrable: desarrolla habilidades concretas (motricidad, lógica, creatividad, autonomía)",
                "Materiales seguros y de calidad: certificaciones CE, materiales no tóxicos, durabilidad contrastada",
                "Coherencia pedagógica: el diseño respeta cómo aprenden los niños, no solo el marketing",
                "Relación calidad-precio honesta frente a alternativas del mercado",
                "Opiniones verificadas de familias y educadores, no solo de compradores ocasionales",
              ].map((criterion) => (
                <li key={criterion} className="flex gap-2.5 items-start">
                  <span className="text-purple-500 font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Aviso de seguridad */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              Aviso de seguridad — juguetes y edad recomendada
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-semibold text-amber-900 mb-2">
                Información importante para las familias:
              </p>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>
                  <strong>Respeta siempre la edad mínima indicada</strong> en
                  el packaging del juguete. Las etiquetas de edad no son
                  sugerencias de marketing: reflejan pruebas de seguridad
                  reales.
                </li>
                <li>
                  <strong>Piezas pequeñas y menores de 3 años:</strong> los
                  juguetes con piezas menores de 3 cm suponen riesgo de
                  atragantamiento. Incluye kits de ciencia, imanes, piezas
                  LEGO estándar y minerales de excavación.
                </li>
                <li>
                  <strong>Kits de ciencia y experimentos:</strong> siempre
                  requieren supervisión de un adulto, incluso si el fabricante
                  indica que son seguros. Los reactivos son seguros en
                  condiciones normales de uso, no en todos los escenarios.
                </li>
                <li>
                  <strong>Imanes:</strong> los juguetes con imanes fuertes
                  (como Geomag) requieren vigilancia adicional en niños
                  menores de 6 años. La ingestión de varios imanes es una
                  emergencia médica.
                </li>
              </ul>
            </div>
          </section>

          {/* Transparencia en afiliados */}
          <section>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">
              Transparencia en afiliados
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="font-semibold text-amber-900 mb-2">
                Programas de afiliados que utilizamos:
              </p>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>
                  <strong>Amazon Associates (cclaserdepi01-21):</strong> Somos
                  afiliados del programa de Amazon España. Cuando compras a
                  través de nuestros enlaces de Amazon, recibimos una comisión
                  sin coste adicional para ti.
                </li>
                <li>
                  <strong>
                    Google AdSense (pub-6063067965030118):
                  </strong>{" "}
                  Mostramos publicidad de Google en algunas páginas, solo con
                  tu consentimiento de cookies.
                </li>
              </ul>
            </div>
            <p>
              Estas comisiones nos permiten mantener el sitio y publicar
              contenido gratuito de calidad.{" "}
              <strong>
                Nunca aceptamos pagos por reseñas positivas
              </strong>{" "}
              y nuestras opiniones son siempre honestas e independientes. La
              presencia de un enlace de afiliado no influye en la valoración
              del producto.
            </p>
          </section>

          {/* Company footer */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-600">
            <p className="font-semibold text-gray-700 mb-1">
              Datos de la empresa
            </p>
            <p>Mkt Web 360 SLU · CIF: B87679304</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@mktweb360.com"
                className="text-purple-700 hover:underline"
              >
                info@mktweb360.com
              </a>
            </p>
            <p className="mt-2 text-gray-500">
              Portal activo desde 2024 · Contenido revisado con criterio
              pedagógico profesional
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
