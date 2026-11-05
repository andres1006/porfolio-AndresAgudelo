import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const PDF = "/recursos/sistema-marketing-ia.pdf";
const IMAGEN = { url: "/og/sistema-marketing-ia.jpg", width: 1200, height: 630, alt: "Mi sistema de marketing con IA - Andrés Agudelo" };
const TITULO = "Mi sistema de marketing con IA";
const DESCRIPCION = "Guía gratis en PDF: los 4 prompts con los que armo mi semana de contenido.";

// WhatsApp e Instagram no muestran vista previa de un PDF; esta página da la imagen y lleva al PDF.
export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: "/recursos/sistema-marketing-ia" },
  openGraph: { type: "article", url: "/recursos/sistema-marketing-ia", title: TITULO, description: DESCRIPCION, images: [IMAGEN] },
  twitter: { card: "summary_large_image", title: TITULO, description: DESCRIPCION, images: [IMAGEN.url] },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="site-shell overflow-hidden">
        <section className="site-container pb-24 pt-20 lg:pb-32 lg:pt-28">
          <p className="eyebrow entra"><span className="eyebrow-dot" /> Guía gratis · PDF</p>
          <h1 className="display-title display-title-sm entra entra-2 mt-6 max-w-5xl">
            Mi sistema de marketing con <em>IA</em>
          </h1>
          <p className="hero-copy entra entra-3 mt-7 max-w-2xl">
            Marca, números, calendario y ganchos: los 4 prompts con los que armo mi semana de contenido. Tú apruebas antes de publicar.
          </p>
          <div className="entra entra-4 mt-9">
            <a href={PDF} download className="brand-button brand-button-primary">
              Descargar la guía <ArrowDown aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
