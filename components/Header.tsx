"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center shrink-0">
          <svg viewBox="0 0 210 44" height="36" xmlns="http://www.w3.org/2000/svg" aria-label="JugueteSTEM">
            <defs>
              <linearGradient id="js-g" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e879f9"/>
                <stop offset="100%" stopColor="#7c3aed"/>
              </linearGradient>
            </defs>
            <rect x="0" y="2" width="40" height="40" rx="10" fill="url(#js-g)"/>
            <circle cx="20" cy="22" r="3.5" fill="white"/>
            <ellipse cx="20" cy="22" rx="13" ry="5" fill="none" stroke="white" strokeWidth="2"/>
            <ellipse cx="20" cy="22" rx="13" ry="5" fill="none" stroke="white" strokeWidth="2" transform="rotate(60 20 22)"/>
            <ellipse cx="20" cy="22" rx="13" ry="5" fill="none" stroke="white" strokeWidth="2" transform="rotate(120 20 22)"/>
            <text x="50" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="800" fontSize="19" fill="#6d28d9">Juguete</text>
            <text x="133" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="900" fontSize="19" fill="#7c3aed">STEM</text>
            <text x="175" y="30" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" fontWeight="400" fontSize="12" fill="#94a3b8">.es</text>
          </svg>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link href="/tienda" className="text-gray-700 hover:text-purple-700 transition-colors">Tienda</Link>
          <Link href="/blog" className="text-gray-700 hover:text-purple-700 transition-colors">Blog</Link>
          <Link href="/sobre-nosotros" className="text-gray-700 hover:text-purple-700 transition-colors">Sobre nosotros</Link>
          <Link href="/tienda" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
            Ver juguetes →
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-purple-50"
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-purple-100 px-4 py-4 space-y-3 text-sm font-semibold">
          <Link href="/tienda" className="block text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Tienda</Link>
          <Link href="/blog" className="block text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/sobre-nosotros" className="block text-gray-700 hover:text-purple-700" onClick={() => setOpen(false)}>Sobre nosotros</Link>
          <Link href="/tienda" className="block bg-orange-500 text-white px-4 py-2 rounded-lg text-center" onClick={() => setOpen(false)}>Ver juguetes →</Link>
        </div>
      )}
    </header>
  );
}
