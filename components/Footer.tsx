import Link from "next/link";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧩</span>
              <span className="font-extrabold text-white text-lg">JugueteSTEM.es</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Guías y reseñas de juguetes educativos y STEM para ayudar a los padres a elegir el mejor juguete para sus hijos.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Categorías</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/tienda/${c.slug}`} className="hover:text-purple-400 transition-colors">
                    {c.icon} {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Blog</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/mejores-juguetes-montessori-3-anos" className="hover:text-purple-400 transition-colors">Juguetes Montessori</Link></li>
              <li><Link href="/blog/juguetes-stem-ninos-8-anos" className="hover:text-purple-400 transition-colors">Juguetes STEM 8-12 años</Link></li>
              <li><Link href="/blog/mejores-juegos-mesa-familia" className="hover:text-purple-400 transition-colors">Juegos de mesa familia</Link></li>
              <li><Link href="/blog/juguetes-regalo-navidad-ninos" className="hover:text-purple-400 transition-colors">Guía regalos Navidad</Link></li>
              <li><Link href="/blog" className="hover:text-purple-400 transition-colors font-semibold">→ Ver todos los artículos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-nosotros" className="hover:text-purple-400 transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-purple-400 transition-colors">Contacto</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-purple-400 transition-colors">Aviso legal</Link></li>
              <li><Link href="/politica-de-privacidad" className="hover:text-purple-400 transition-colors">Privacidad</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-purple-400 transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 space-y-2 text-xs text-gray-500">
          <p>
            <strong className="text-gray-400">Aviso de afiliados:</strong> JugueteSTEM.es participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados diseñado para ofrecer a sitios web un medio para ganar comisiones publicitarias mediante la creación de enlaces a Amazon.es. Los precios son orientativos y pueden variar.
          </p>
          <p>© {new Date().getFullYear()} Mkt Web 360 SLU — CIF B87679304 — info@mktweb360.com</p>
        </div>
      </div>
    </footer>
  );
}
