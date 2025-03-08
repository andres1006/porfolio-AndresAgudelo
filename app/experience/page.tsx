"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ExperiencePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const experiences = [
    {
      title: "Desarrollador Frontend",
      company: "Infosel S.A.S",
      location: "CDMX (México)",
      period: "2021 - Presente",
      description:
        "Desarrollo y ayudo a disminuir la brecha entre diseñadores y desarrolladores frontends a nivel de diseño UI/UX. Me desenvuelvo como desarrollador frontend con React js (90%), React native (80%), redux (80%), Material UI (90%) y otras librerías importantes para este framework.",
      skills: ["React", "React Native", "Redux", "Material UI", "UI/UX"],
      type: "work",
    },
    {
      title: "Desarrollador Frontend",
      company: "FreedomCenter S.A.S",
      location: "Manizales (Colombia)",
      period: "2019 - 2021",
      description:
        "Lideré equipo de desarrollo para proyecto dirigido al sector salud. Me desempeñé como desarrollador frontend con React js (80%) y Electron (70%).",
      skills: ["React", "Electron", "Liderazgo de Equipo"],
      type: "work",
    },
    {
      title: "Desarrollador Frontend",
      company: "Tbooks",
      location: "México",
      period: "2020 - 2020",
      description:
        "Realicé pruebas y ajustes a funcionalidades del frontend ya desarrolladas. Ayudé a la mejora constante de la interfaz gráfica y la experiencia de usuario.",
      skills: ["Frontend", "UI/UX", "Testing"],
      type: "work",
    },
    {
      title: "Desarrollador Backend",
      company: "Goingtube",
      location: "Manizales (Colombia)",
      period: "2018 - 2018",
      description:
        "Realicé pruebas y ajustes a funcionalidades como enviar correos de verificación, tokenizaciones, respuestas de endpoints, etc.",
      skills: ["Backend", "APIs", "Autenticación"],
      type: "work",
    },
    {
      title: "Ingeniero de Sistemas",
      company: "Universidad de Manizales",
      location: "Manizales (Colombia)",
      period: "2016 - 2021",
      description:
        "Formación en ingeniería de sistemas con enfoque en desarrollo de software y arquitectura de sistemas.",
      type: "education",
    },
    {
      title: "Diseñador Gráfico",
      company: "ABS (American Business School)",
      location: "Manizales (Colombia)",
      period: "2017 - 2019",
      description:
        "Formación en diseño gráfico, interfaces de usuario y experiencia de usuario.",
      type: "education",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-6 w-6" />;
      case "education":
        return <GraduationCap className="h-6 w-6" />;
      case "award":
        return <Award className="h-6 w-6" />;
      default:
        return <Briefcase className="h-6 w-6" />;
    }
  };

  return (
    <div className="container py-12">
      <ScrollReveal variant="fade" direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Experiencia Profesional</h1>
          <p className="text-muted-foreground">
            Un recorrido por mi trayectoria profesional, educación y logros.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative max-w-3xl mx-auto" ref={ref}>
        {/* Timeline line */}
        <motion.div
          className="absolute left-9 top-0 bottom-0 w-0.5 bg-border"
          style={{ scaleY: scrollYProgress }}
          initial={{ scaleY: 0 }}
        />

        <div className="space-y-12 pt-6 pb-12">
          {experiences.map((experience, index) => (
            <ScrollReveal
              key={index}
              variant="slide"
              direction="left"
              delay={index * 0.1}
              threshold={0.2}
            >
              <div className="relative flex items-start">
                <div className="absolute left-0 flex items-center justify-center w-18 h-18">
                  <div className="flex items-center justify-center w-18 h-18 rounded-full bg-background border-2 border-primary z-10">
                    {getIcon(experience.type)}
                  </div>
                </div>

                <div className="ml-24">
                  <Card className="w-full">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">
                            {experience.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {experience.company} • {experience.location} •{" "}
                            {experience.period}
                          </p>
                        </div>
                        <Badge
                          className="mt-2 md:mt-0 w-fit"
                          variant={
                            experience.type === "work"
                              ? "default"
                              : experience.type === "education"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {experience.type === "work"
                            ? "Trabajo"
                            : experience.type === "education"
                            ? "Educación"
                            : "Premio"}
                        </Badge>
                      </div>
                      <p className="mb-4">{experience.description}</p>
                      {experience.skills && (
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
