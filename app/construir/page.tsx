import type { Metadata } from "next";
import OfertaLanding from "@/components/oferta-landing";
import { LANDINGS } from "@/lib/landings";

export const metadata: Metadata = {
  title: "Desarrollo de producto con IA",
  description: "Construye tu producto o herramienta con IA, con especificación, arquitectura y entregas por etapas.",
};

export default function Page() {
  return <OfertaLanding data={LANDINGS.construir} />;
}
