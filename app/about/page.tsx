"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AboutPage() {
  const strengths = [
    {
      title: "Comunicación Efectiva",
      description:
        "Capaz de transmitir ideas de forma clara y concisa, tanto de forma oral como escrita.",
    },
    {
      title: "Trabajo en Equipo",
      description:
        "Colaborativo y con facilidad para integrarme en equipos de trabajo multidisciplinarios.",
    },
    {
      title: "Pensamiento Analítico",
      description:
        "Habilidad para analizar problemas, identificar soluciones y tomar decisiones informadas.",
    },
    {
      title: "Creatividad",
      description:
        "Apasionado por el diseño y la innovación, buscando siempre soluciones creativas a los desafíos.",
    },
  ];

  return (
    <div className="container py-12">
      <ScrollReveal variant="fade" direction="up">
        <h1 className="text-4xl font-bold mb-8 gradient-text gradient-blue-purple">
          Sobre Mí
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ScrollReveal variant="slide" direction="left" delay={0.2}>
          <div className="col-span-1">
            <div className="sticky top-24">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="/andres-agudelo.jpg"
                  alt="Andrés Agudelo"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">AndrésAgudelo.dev</h2>
              <p className="text-muted-foreground mb-4">
                Desarrollador Frontend
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Disponible para Proyectos</Badge>
                <Badge variant="outline">Remoto</Badge>
                <Badge variant="outline">Freelance</Badge>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="col-span-2 space-y-8">
          <ScrollReveal variant="slide" direction="up" delay={0.3}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Perfil Profesional</h2>
              <div className="prose dark:prose-invert">
                <p>
                  Desarrollador frontend con experiencia en la creación de
                  soluciones web robustas y atractivas. A lo largo de mi
                  carrera, he trabajado tanto en el desarrollo backend como
                  frontend, lo que me proporciona una visión integral del
                  proceso de desarrollo de software.
                </p>
                <p>
                  Me destaco por mi capacidad para trabajar bajo presión, mi
                  proactividad y mi habilidad para resolver problemas de manera
                  eficiente. Mi objetivo es aplicar mis conocimientos en
                  tecnologías como React, JavaScript, HTML y CSS, así como mi
                  experiencia en frameworks y librerías como Next.js y Remix.js,
                  para crear experiencias de usuario excepcionales.
                </p>
                <p>
                  A lo largo de mi carrera, he trabajado en diversos proyectos
                  para diferentes sectores, incluyendo salud y finanzas. Mi
                  enfoque combina excelencia técnica con un profundo
                  entendimiento de las necesidades del usuario para crear
                  soluciones que aporten valor real.
                </p>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="slide" direction="up" delay={0.4}>
            <section>
              <h2 className="text-2xl font-bold mb-4 ">Fortalezas Clave</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <ScrollReveal
                    key={index}
                    variant="scale"
                    delay={0.5 + index * 0.1}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {strength.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {strength.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="slide" direction="up" delay={0.5}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Educación</h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <ScrollReveal variant="slide" direction="right" delay={0.6}>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Ingeniero de Sistemas
                      </h3>
                      <p className="text-muted-foreground">
                        Universidad de Manizales | 2016 - 2021
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal variant="slide" direction="right" delay={0.7}>
                    <div>
                      <h3 className="text-xl font-semibold">
                        Diseñador Gráfico
                      </h3>
                      <p className="text-muted-foreground">
                        ABS (American Business School) | 2017 - 2019
                      </p>
                    </div>
                  </ScrollReveal>
                </CardContent>
              </Card>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="slide" direction="up" delay={0.6}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Intereses Personales</h2>
              <div className="prose dark:prose-invert">
                <p>
                  Fuera de mi vida profesional, disfruto de la fotografía, el
                  diseño gráfico y contribuir a proyectos de código abierto.
                  También me gusta estar al día con las últimas tendencias
                  tecnológicas y explorar nuevas herramientas y frameworks.
                </p>
                <p>
                  Creo firmemente que mantener un equilibrio entre la vida
                  laboral y personal, así como cultivar diversos intereses,
                  contribuye a la creatividad y a la capacidad de resolver
                  problemas en contextos profesionales.
                </p>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
