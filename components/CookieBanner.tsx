"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const CONSENT_KEY = "juguetestem_consent_v2";
const LEGACY_CONSENT_KEY = "juguetestem_consent";

type Consent = { advertising: boolean; analytics: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const gtag = window.gtag ?? ((...args: unknown[]) => window.dataLayer!.push(args));
  gtag("consent", "update", {
    ad_storage: consent.advertising ? "granted" : "denied",
    ad_user_data: consent.advertising ? "granted" : "denied",
    ad_personalization: consent.advertising ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
  });
}

function readConsent(): Consent | null {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as Partial<Consent>;
      return { advertising: !!parsed.advertising, analytics: !!parsed.analytics };
    } catch {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
  }

  // Migración desde la clave antigua (string "accepted" | "rejected")
  const legacy = localStorage.getItem(LEGACY_CONSENT_KEY);
  if (legacy === "accepted" || legacy === "rejected") {
    const migrated: Consent = { advertising: legacy === "accepted", analytics: legacy === "accepted" };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(migrated));
    localStorage.removeItem(LEGACY_CONSENT_KEY);
    return migrated;
  }
  if (legacy) localStorage.removeItem(LEGACY_CONSENT_KEY);

  return null;
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (consent) {
      pushConsent(consent);
      setAccepted(consent.advertising);
    } else {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    const reopen = () => setShow(true);
    window.addEventListener("openCookieBanner", reopen);
    return () => window.removeEventListener("openCookieBanner", reopen);
  }, []);

  function save(consent: Consent) {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    pushConsent(consent);
    setAccepted(consent.advertising);
    setShow(false);
  }

  function accept() {
    save({ advertising: true, analytics: true });
  }

  function reject() {
    save({ advertising: false, analytics: false });
  }

  return (
    <>
      {accepted && (
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6063067965030118"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      )}

      {show && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-gray-900 border-t-2 border-purple-600 shadow-2xl">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-200 flex-1">
              Usamos cookies para personalizar anuncios (Google AdSense) y mejorar tu experiencia. Solo las activamos con tu permiso.{" "}
              <Link href="/politica-de-cookies" className="underline text-purple-400 hover:text-purple-300">Más info</Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={reject}
                className="px-4 py-2 text-sm rounded-lg border border-gray-500 text-gray-300 hover:border-gray-300 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
              >
                Aceptar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
