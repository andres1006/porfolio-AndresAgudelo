"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function SkillsPage() {
  const [selectedTab, setSelectedTab] = useState("technical");

  const technicalSkills = [
    { name: "HTML5/CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 70 },
    { name: "Remix.js", level: 60 },
    { name: "Angular.js", level: 70 },
    { name: "GraphQL", level: 60 },
    { name: "Node.js", level: 70 },
    { name: "Adobe Illustrator", level: 80 },
    { name: "Adobe XD", level: 80 },
  ];

  const softSkills = [
    { name: "Comunicación", level: 90 },
    { name: "Trabajo en Equipo", level: 95 },
    { name: "Resolución de Problemas", level: 90 },
    { name: "Gestión del Tiempo", level: 85 },
    { name: "Liderazgo", level: 80 },
    { name: "Adaptabilidad", level: 90 },
    { name: "Pensamiento Crítico", level: 85 },
    { name: "Creatividad", level: 85 },
  ];

  const tools = [
    "VS Code",
    "Git",
    "GitHub",
    "Jira",
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Postman",
    "Chrome DevTools",
    "npm/yarn",
    "Webpack",
    "Jest",
    "Material UI",
    "Redux",
    "Electron",
  ];

  const certifications = [
    {
      name: "Desarrollo Frontend con React",
      issuer: "Platzi",
      date: "2022",
    },
    {
      name: "UI/UX Design Fundamentals",
      issuer: "Udemy",
      date: "2021",
    },
    {
      name: "JavaScript Avanzado",
      issuer: "Coursera",
      date: "2020",
    },
    {
      name: "Diseño Gráfico Profesional",
      issuer: "ABS",
      date: "2019",
    },
  ];

  return (
    <div className="container py-12">
      <ScrollReveal variant="fade" direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Habilidades & Experiencia</h1>
          <p className="text-muted-foreground">
            Un resumen completo de mis habilidades técnicas, competencias y cualificaciones profesionales.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="slide" direction="up" delay={0.2}>
        <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="technical" onClick={() => setSelectedTab("technical")}>
              Habilidades Técnicas
            </TabsTrigger>
            <TabsTrigger value="soft" onClick={() => setSelectedTab("soft")}>
              Habilidades Blandas
            </TabsTrigger>
            <TabsTrigger value="tools" onClick={() => setSelectedTab("tools")}>
              Herramientas & Tecnologías
            </TabsTrigger>
            <TabsTrigger value="certifications" onClick={() => setSelectedTab("certifications")}>
              Certificaciones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="mt-6">
            <ScrollReveal variant="slide" direction="up" cascade cascadeDelay={0.05}>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </ScrollReveal>
          </TabsContent>

          <TabsContent value="soft" className="mt-6">
            <ScrollReveal variant="slide" direction="up" cascade cascadeDelay={0.05}>
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </ScrollReveal>
          </TabsContent>

          <TabsContent value="tools" className="mt-6">
            <ScrollReveal variant="scale" cascade cascadeDelay={0.03}>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {tool}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </TabsContent>

          <TabsContent value="certifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <ScrollReveal key={index} variant="slide" direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {cert.issuer} • {cert.date}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>

      <ScrollReveal variant="fade" direction="up" delay={0.5}>
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Áreas de Especialización</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Desarrollo Frontend",
                items: [
                  "Frameworks modernos (React, Next.js)",
                  "Diseño responsivo",
                  "Gestión de estado (Redux, Context API)",
                  "Optimización de rendimiento",
                ],
              },
              {
                title: "Diseño UI/UX",
                items: [
                  "Prototipado y wireframing",
                  "Diseño de interfaces",
                  "Experiencia de usuario",
                  "Sistemas de diseño",
                ],
              },
              {
                title: "Tecnologías Emergentes",
                items: [
                  "Automatización",
                  "Integración de IA",
                  "Aplicaciones multiplataforma",
                  "Desarrollo móvil híbrido",
                ],
              },
            ].map((specialty, index) => (
              <ScrollReveal key={index} variant="slide" direction="up" delay={0.6 + index * 0.1}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">{specialty.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {specialty.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}