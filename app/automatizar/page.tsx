import type { Metadata } from "next";
import OfertaLanding from "@/components/oferta-landing";
import { LANDINGS } from "@/lib/landings";

export const metadata: Metadata = {
  title: "Automatización para tu negocio",
  description: "Quítale trabajo repetitivo a tu negocio con automatizaciones y agentes de IA, con revisión humana donde importa.",
};

export default function Page() {
  return <OfertaLanding data={LANDINGS.automatizar} />;
}
