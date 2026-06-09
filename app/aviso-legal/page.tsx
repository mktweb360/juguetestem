import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal — JugueteSTEM.es",
  description: "Aviso legal de JugueteSTEM.es — Mkt Web 360 SLU, CIF B87679304.",
};

export default function AvisoLegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-purple-700">Inicio</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Aviso legal</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Aviso legal</h1>

      <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">1. Identificación del titular</h2>
          <ul className="space-y-1">
            <li><strong>Razón social:</strong> Mkt Web 360 SLU</li>
            <li><strong>CIF:</strong> B87679304</li>
            <li><strong>Domicilio social:</strong> España</li>
            <li><strong>Email:</strong> info@mktweb360.com</li>
            <li><strong>Sitio web:</strong> https://www.juguetestem.es</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">2. Objeto y ámbito de aplicación</h2>
          <p>El presente Aviso Legal regula el acceso y uso del sitio web www.juguetestem.es, titularidad de Mkt Web 360 SLU. El acceso implica la aceptación plena de este Aviso Legal.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">3. Propiedad intelectual</h2>
          <p>Todos los contenidos del sitio — textos, imágenes, diseño — son titularidad de Mkt Web 360 SLU o de sus licenciantes. Se prohíbe su reproducción sin autorización expresa por escrito.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">4. Seguridad de juguetes</h2>
          <p>Las recomendaciones de edad y seguridad que aparecen en este sitio son orientativas. Siempre verifica el etiquetado CE del producto y la normativa vigente antes de comprar. Respeta los límites de edad indicados por los fabricantes.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">5. Programa de afiliados</h2>
          <p>JugueteSTEM.es participa en el Programa de Afiliados de Amazon EU (ID: cclaserdepi01-21). Los enlaces identificados como enlaces de afiliado pueden generar comisión para el titular sin coste adicional para el usuario.</p>
        </section>
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">6. Legislación aplicable</h2>
          <p>Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales competentes según la normativa aplicable.</p>
        </section>
        <p className="text-xs text-gray-400">Última actualización: junio 2025</p>
      </div>
    </div>
  );
}
