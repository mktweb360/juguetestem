import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
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
