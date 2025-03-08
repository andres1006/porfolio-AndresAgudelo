"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/emailjs-config";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z
    .string()
    .email({ message: "Por favor ingresa un correo electrónico válido." }),
  subject: z
    .string()
    .min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Enviar correo electrónico usando la API
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (response) => {
        const data = await response.json();
        setIsSubmitting(false);

        if (response.ok && data.success) {
          toast.success("¡Mensaje enviado con éxito!", {
            description:
              "Gracias por tu mensaje. Me pondré en contacto contigo pronto.",
            duration: 5000,
          });
          form.reset();
        } else {
          toast.error("Error al enviar el mensaje", {
            description:
              data.details ||
              "Por favor, intenta nuevamente o contáctame directamente por WhatsApp.",
            duration: 8000,
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);

        toast.error("Error al enviar el mensaje", {
          description:
            "Hubo un problema de conexión. Por favor, intenta nuevamente o contáctame directamente por WhatsApp.",
          duration: 5000,
        });
      });
  }

  return (
    <div className="container py-12">
      <ScrollReveal variant="fade" direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-muted-foreground">
            ¿Tienes alguna pregunta o quieres trabajar juntos? ¡No dudes en
            contactarme!
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <ScrollReveal variant="slide" direction="left" delay={0.2}>
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Mail className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    andresagudelo1006@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Phone className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+57 320 538 97 40</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <MapPin className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Manizales, Caldas, Colombia
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="slide"
          direction="right"
          delay={0.4}
          className="md:col-span-2"
        >
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asunto</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Asunto de tu mensaje"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tu mensaje"
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      O contáctame directamente por WhatsApp
                    </p>
                    <WhatsAppButton form={form} />
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal variant="fade" direction="up" delay={0.6}>
        <div className="mt-16 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "¿Qué servicios ofreces?",
                    answer:
                      "Ofrezco servicios de desarrollo frontend, diseño UI/UX, consultoría técnica y desarrollo de aplicaciones web y móviles con React y React Native.",
                  },
                  {
                    question:
                      "¿Cuál es tu tiempo típico de entrega para un proyecto?",
                    answer:
                      "Los tiempos varían según el alcance y la complejidad. Un sitio web simple puede tomar 2-4 semanas, mientras que una aplicación compleja podría llevar varios meses.",
                  },
                  {
                    question: "¿Trabajas con clientes internacionales?",
                    answer:
                      "Sí, trabajo con clientes de todo el mundo. La colaboración remota es una parte fundamental de mi flujo de trabajo.",
                  },
                  {
                    question: "¿Cuál es tu estructura de precios?",
                    answer:
                      "Ofrezco opciones de precios basados en proyectos y por hora. Cada proyecto se cotiza individualmente según los requisitos y el alcance.",
                  },
                ].map((faq, index) => (
                  <ScrollReveal
                    key={index}
                    variant="slide"
                    direction="up"
                    delay={0.7 + index * 0.1}
                  >
                    <div className="border-b pb-4 last:border-0 last:pb-0">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  );
}
