import type { Metadata } from "next";
import OfertaLanding from "@/components/oferta-landing";
import { LANDINGS } from "@/lib/landings";

export const metadata: Metadata = {
  title: "Consultoría técnica de IA",
  description: "Revisión de arquitectura y acompañamiento para equipos que construyen agentes y productos con IA.",
};

export default function Page() {
  return <OfertaLanding data={LANDINGS.consultoria} />;
}
