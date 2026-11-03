"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { guardarUtm } from "@/lib/analytics";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const CLAVE = "medicion-consentimiento";

function leer(): string | null {
  try {
    return window.localStorage.getItem(CLAVE);
  } catch {
    return null;
  }
}

export default function AnalyticsConsent() {
  const [estado, setEstado] = useState<string | null | undefined>(undefined);

  useEffect(() => setEstado(leer()), []);
  useEffect(() => guardarUtm(), []);

  if (!GTM_ID || !/^GTM-[A-Z0-9]+$/.test(GTM_ID) || estado === undefined) return null;

  const decidir = (valor: "aceptada" | "rechazada") => {
    try {
      window.localStorage.setItem(CLAVE, valor);
    } catch {
      // Sin almacenamiento, la decisión vale solo para esta visita.
    }
    setEstado(valor);
  };

  if (estado === "aceptada") {
    return (
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
    );
  }
  if (estado === "rechazada") return null;

  return (
    <div role="region" aria-label="Medición del sitio" className="consent-bar">
      <p>Uso Google Analytics para saber qué páginas sirven. Solo se activa si aceptas.</p>
      <div className="flex gap-2">
        <button type="button" className="consent-button" onClick={() => decidir("rechazada")}>Rechazar</button>
        <button type="button" className="consent-button consent-button-primary" onClick={() => decidir("aceptada")}>Aceptar</button>
      </div>
    </div>
  );
}
