"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Definir el esquema del formulario para TypeScript
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type FormValues = z.infer<typeof formSchema>;

// Función para generar un enlace de WhatsApp con los datos del formulario
function generateWhatsAppLink(data: FormValues): string {
  const phoneNumber = "573205389740"; // Número de teléfono sin el signo +
  const message = encodeURIComponent(
    `Hola, mi nombre es ${data.name}.\n\nAsunto: ${data.subject}\n\n${data.message}\n\nMi correo: ${data.email}`
  );

  return `https://wa.me/${phoneNumber}?text=${message}`;
}

interface WhatsAppButtonProps {
  form: UseFormReturn<FormValues>;
}

export function WhatsAppButton({ form }: WhatsAppButtonProps) {
  const [isGeneratingLink, setIsGeneratingLink] = useState(false);

  const handleWhatsAppClick = () => {
    // Validar el formulario antes de generar el enlace
    const formState = form.getValues();
    const result = formSchema.safeParse(formState);

    if (!result.success) {
      // Si hay errores de validación, mostrar los errores en el formulario
      form.trigger();
      return;
    }

    setIsGeneratingLink(true);

    // Generar el enlace de WhatsApp y abrir en una nueva ventana
    const whatsappLink = generateWhatsAppLink(formState);

    // Pequeño retraso para mostrar el estado de carga
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setIsGeneratingLink(false);
    }, 500);
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white hover:text-white border-[#25D366] cursor-pointer"
      onClick={handleWhatsAppClick}
      disabled={isGeneratingLink}
    >
      {isGeneratingLink ? (
        <>
          <MessageSquare className="mr-2 h-4 w-4 animate-pulse" />
          Generando enlace...
        </>
      ) : (
        <>
          <MessageSquare className="mr-2 h-4 w-4" />
          Contactar por WhatsApp
        </>
      )}
    </Button>
  );
}
