"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams({
      subject: `Contacto JugueteSTEM: ${data.get("asunto") as string}`,
      body: `Nombre: ${data.get("nombre") as string}\nEmail: ${data.get("email") as string}\n\nMensaje:\n${data.get("mensaje") as string}`,
    });
    window.location.href = `mailto:info@mktweb360.com?${params.toString()}`;
    setSubmitted(true);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      <nav className="text-gray-400 text-sm mb-6">
        <Link href="/" className="hover:text-purple-700">Inicio</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Contacto</span>
      </nav>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Contacto</h1>
      <p className="text-gray-500 mb-8">¿Tienes preguntas sobre un juguete o quieres sugerir un análisis? Escríbenos.</p>

      {submitted ? (
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">✓</div>
          <h2 className="font-bold text-purple-800 text-lg mb-2">¡Mensaje enviado!</h2>
          <p className="text-purple-700 text-sm">Tu cliente de correo se ha abierto. Te responderemos por email.</p>
          <Link href="/" className="mt-4 inline-block text-purple-700 font-semibold text-sm">← Volver al inicio</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">Nombre *</label>
            <input type="text" id="nombre" name="nombre" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="tu@email.com" />
          </div>
          <div>
            <label htmlFor="asunto" className="block text-sm font-semibold text-gray-700 mb-1">Asunto *</label>
            <select id="asunto" name="asunto" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
              <option value="">Selecciona un asunto</option>
              <option value="Consulta sobre juguete">Consulta sobre un juguete</option>
              <option value="Sugerencia de análisis">Sugerencia de análisis</option>
              <option value="Error en el sitio">Error en el sitio web</option>
              <option value="Colaboración">Colaboración o publicidad</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">Mensaje *</label>
            <textarea id="mensaje" name="mensaje" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none" placeholder="Escribe tu mensaje..." />
          </div>
          <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            Enviar mensaje
          </button>
          <p className="text-xs text-gray-400 text-center">Se abrirá tu cliente de correo para enviar a <strong>info@mktweb360.com</strong></p>
        </form>
      )}

      <div className="mt-12 space-y-8 text-gray-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">Para qué puedes escribirnos</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Dudas sobre una guía o un análisis:</strong> si algo de un artículo del <Link href="/blog" className="text-purple-700 hover:underline">blog</Link> no queda claro o quieres saber por qué recomendamos un juguete para una edad concreta.</li>
            <li><strong>Sugerencias de productos o temas:</strong> juguetes educativos, kits STEM, materiales Montessori o juegos de mesa que te gustaría que comparásemos.</li>
            <li><strong>Errores detectados:</strong> un enlace que no funciona, un producto que ya no está disponible, una edad recomendada mal indicada o cualquier dato que no coincida con la ficha del fabricante.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">Lo que no hacemos</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>No vendemos directamente:</strong> los productos de la <Link href="/tienda" className="text-purple-700 hover:underline">tienda</Link> se compran en Amazon.es. Los pedidos, envíos, garantías y devoluciones los gestiona Amazon o el vendedor correspondiente, no nosotros.</li>
            <li><strong>No hacemos valoraciones médicas ni diagnósticos:</strong> no somos docentes, pedagogos ni profesionales sanitarios. Si tienes dudas sobre el desarrollo de tu hijo, consulta con su pediatra o con un especialista.</li>
            <li><strong>No aceptamos pagos por reseñas positivas:</strong> la presencia de un enlace de afiliado no influye en nuestra valoración de un producto.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">Cómo elegimos y actualizamos los productos</h2>
          <p>Comparamos edad recomendada, certificaciones de seguridad, materiales y fichas del fabricante antes de recomendar cualquier juguete. Cuando revisamos una guía, la fecha de última actualización aparece al principio del artículo. Explicamos el proceso completo en <Link href="/sobre-nosotros" className="text-purple-700 hover:underline">Sobre nosotros</Link>.</p>
        </section>

        <section>
          <h2 className="text-lg font-extrabold text-gray-900 mb-2">Quién está detrás</h2>
          <p>JugueteSTEM.es es un sitio de Mkt Web 360 SLU. Puedes escribirnos directamente a <a href="mailto:info@mktweb360.com" className="text-purple-700 hover:underline">info@mktweb360.com</a>. Usamos los datos que nos envíes para responder a tu mensaje, como se explica en la <Link href="/politica-de-privacidad" className="text-purple-700 hover:underline">política de privacidad</Link>; los datos del titular están en el <Link href="/aviso-legal" className="text-purple-700 hover:underline">aviso legal</Link>.</p>
        </section>
      </div>
    </div>
  );
}
