import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre nosotros — JugueteSTEM.es",
  description: "Quiénes somos y cómo elegimos los juguetes que recomendamos en JugueteSTEM.es.",
};

export default function SobreNosotrosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-purple-700">Inicio</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Sobre nosotros</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Sobre JugueteSTEM.es</h1>

      <div className="space-y-6 text-gray-700">
        <p className="text-lg">
          JugueteSTEM.es es un proyecto de <strong>Mkt Web 360 SLU</strong> (CIF B87679304) dedicado a ayudar a los padres españoles a elegir los mejores juguetes educativos y STEM para sus hijos.
        </p>

        <h2 className="text-xl font-extrabold text-gray-900">Nuestra misión</h2>
        <p>
          Creemos que el juego es la forma más poderosa de aprendizaje. Analizamos decenas de juguetes con criterios pedagógicos reales — no nos dejamos llevar por el marketing — para ofrecerte solo las recomendaciones que de verdad merecen la pena.
        </p>

        <h2 className="text-xl font-extrabold text-gray-900">Cómo evaluamos los juguetes</h2>
        <ul className="space-y-2">
          <li className="flex gap-2"><span className="text-purple-500 font-bold shrink-0">✓</span> Adecuación a la edad y etapa de desarrollo</li>
          <li className="flex gap-2"><span className="text-purple-500 font-bold shrink-0">✓</span> Calidad y seguridad de los materiales</li>
          <li className="flex gap-2"><span className="text-purple-500 font-bold shrink-0">✓</span> Valor educativo y pedagógico real</li>
          <li className="flex gap-2"><span className="text-purple-500 font-bold shrink-0">✓</span> Relación calidad-precio</li>
          <li className="flex gap-2"><span className="text-purple-500 font-bold shrink-0">✓</span> Opiniones verificadas de otros padres</li>
        </ul>

        <h2 className="text-xl font-extrabold text-gray-900">Transparencia en afiliados</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="font-semibold text-amber-900 mb-2">Programas de afiliados que utilizamos:</p>
          <ul className="space-y-2 text-sm text-amber-800">
            <li>
              <strong>Amazon Associates (cclaserdepi01-21):</strong> Somos afiliados del programa de Amazon España. Cuando compras a través de nuestros enlaces de Amazon, recibimos una comisión sin coste adicional para ti.
            </li>
            <li>
              <strong>Google AdSense (pub-6063067965030118):</strong> Mostramos publicidad de Google en algunas páginas, solo con tu consentimiento de cookies.
            </li>
          </ul>
        </div>

        <p>
          Estas comisiones nos permiten mantener el sitio y publicar contenido gratuito de calidad. <strong>Nunca aceptamos pagos por reseñas positivas</strong> y nuestras opiniones son siempre honestas e independientes.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm text-gray-600">
          <p><strong>Datos de la empresa:</strong></p>
          <p>Mkt Web 360 SLU · CIF: B87679304 · Email: info@mktweb360.com</p>
        </div>
      </div>
    </div>
  );
}
