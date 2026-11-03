import type { Metadata } from "next";
import OfertaLanding from "@/components/oferta-landing";
import { LANDINGS } from "@/lib/landings";

export const metadata: Metadata = {
  title: "Diagnóstico de IA",
  description: "90 minutos y un mapa escrito de 3 oportunidades priorizadas para tu negocio. USD 160.",
};

export default function Page() {
  return <OfertaLanding data={LANDINGS.diagnostico} />;
}
