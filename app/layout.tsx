// STAGED FIX — juguetestem.es — app/layout.tsx
// CWV improvements applied on top of juguetestem-schema-layout.tsx:
//   1. Added next/font (Geist, subsets: ["latin"]) — eliminates web-font FOUT,
//      self-hosts via Next.js CDN, emits preload hint automatically.
//   2. Added rel="preconnect" + dns-prefetch to AdSense domains.
//   3. Added google-adsense-account meta tag (was missing from live layout).
//   4. Wired geistSans.variable onto <html> so --font-geist-sans is available
//      to globals.css (see juguetestem-cwv-globals.css).
// Deploy: cp juguetestem-cwv-layout.tsx ../juguetestem/app/layout.tsx
//         cp juguetestem-cwv-globals.css ../juguetestem/app/globals.css

import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

/* CWV: next/font self-hosts Geist, subsets to latin, applies display:swap and
   emits a <link rel="preload"> automatically — eliminates FOUT and the
   render-blocking Google Fonts network round-trip.                            */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://www.juguetestem.es";

export const metadata: Metadata = {
  title: {
    default: "JugueteSTEM.es — Juguetes educativos y STEM para niños",
    template: "%s | JugueteSTEM.es",
  },
  description: "Las mejores reseñas y guías de juguetes educativos y STEM para niños. Montessori, ciencia, robótica, juegos de mesa y más.",
  metadataBase: new URL(SITE_URL),
  verification: {
    google: "gTV4UlsEexaJvqIeMXuD1MOd4QV4WXWhnk_tfThO4Wc",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "JugueteSTEM.es",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "JugueteSTEM.es",
  url: SITE_URL,
  description: "Reseñas y guías de juguetes educativos y STEM para niños en español",
  inLanguage: "es",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JugueteSTEM.es",
  legalName: "Mkt Web 360 SLU",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  taxID: "B87679304",
  contactPoint: { "@type": "ContactPoint", email: "info@mktweb360.com", contactType: "customer service" },
  description: "Portal especializado en juguetes educativos STEM y materiales Montessori para niños. Comparativas y análisis con criterio pedagógico profesional.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: ["juguetes educativos", "metodología Montessori", "juguetes STEM", "robótica infantil", "juegos de construcción", "libros educativos"],
  sameAs: ["https://www.instagram.com/juguetestem.es", "https://www.facebook.com/juguetestem.es"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {/* CWV: Preconnect to AdSense — opens TCP early so the script loads
            faster the moment the user gives consent in the cookie banner.     */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        {/* AdSense site verification — ad script loaded conditionally by CookieBanner */}
        <meta name="google-adsense-account" content="ca-pub-6063067965030118" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
