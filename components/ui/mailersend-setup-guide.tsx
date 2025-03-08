"use client";

import { useState } from "react";
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function MailerSendSetupGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error de configuración de MailerSend</AlertTitle>
      <AlertDescription>
        <p className="mb-2">
          No has configurado correctamente MailerSend para el envío de correos.
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          {isOpen ? "Ocultar instrucciones" : "Mostrar instrucciones"}
          {isOpen ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>

        {isOpen && (
          <div className="mt-4 space-y-2 text-sm">
            <p className="font-semibold">
              Sigue estos pasos para configurar MailerSend:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Regístrate en{" "}
                <a
                  href="https://www.mailersend.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline inline-flex items-center"
                >
                  MailerSend <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>Verifica un dominio en el dashboard de MailerSend</li>
              <li>Crea una API key con permisos para enviar correos</li>
              <li>
                Abre el archivo{" "}
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                  lib/mailersend-config.ts
                </code>{" "}
                y actualiza:
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                      MAILERSEND_API_KEY
                    </code>
                  </li>
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                      SENDER_EMAIL
                    </code>{" "}
                    (debe ser de tu dominio verificado)
                  </li>
                  <li>
                    <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                      RECIPIENT_EMAIL
                    </code>{" "}
                    (tu correo para recibir mensajes)
                  </li>
                </ul>
              </li>
            </ol>
            <p className="mt-2">
              Para más detalles, consulta el archivo{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
                README.md
              </code>
              .
            </p>
          </div>
        )}
      </AlertDescription>
    </Alert>
  );
}
