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
        "Lidero el desarrollo y la implementación de soluciones frontend innovadoras y escalables, contribuyendo activamente a la reducción de la brecha entre diseñadores y desarrolladores. Esto se logra mediante la optimización del diseño UI/UX, asegurando una colaboración efectiva y una entrega de productos de alta calidad. Me desempeño como desarrollador frontend senior, utilizando un conjunto de tecnologías avanzadas que incluyen React.js, React Native, Redux, Material UI y otras librerías esenciales. Mi enfoque se centra en el desarrollo de aplicaciones web y móviles de alto rendimiento, con una excelente experiencia de usuario y una arquitectura robusta.",
      skills: [
        "React",
        "React Native",
        "Redux",
        "Material UI",
        "UI/UX",
        "Next.js",
      ],
      type: "work",
    },
    {
      title: "Desarrollador Frontend",
      company: "Controlsoft",
      location: "Manizales (Colombia)",
      period: "Diciembre 2024 - 2025",
      description:
        "Software de gestión integral para Controlsoft, diseñado para automatizar y optimizar sus procesos administrativos y operativos. Implementé funcionalidades como la gestión de proyectos, tareas, documentos, clientes y recursos humanos, mejorando la eficiencia, reduciendo costos operativos y facilitando la toma de decisiones estratégicas.",
      skills: [
        "Angular",
        "API REST",
        "MySQL",
        "Gestión de Proyectos",
        "Frontend",
      ],
      type: "Freelance",
    },
    {
      title: "Desarrollador Frontend",
      company: "FreedomCenter S.A.S",
      location: "Manizales (Colombia)",
      period: "2019 - 2021",
      description:
        "Lideré un equipo de desarrollo multidisciplinario en la concepción, diseño y creación de un proyecto innovador y de alto impacto dirigido al sector salud. Gestioné eficazmente el ciclo de vida completo del desarrollo de software, desde la planificación y el diseño hasta la implementación, las pruebas y el despliegue. Desarrollé e implementé soluciones frontend robustas y eficientes utilizando React.js y Electron. Creé interfaces de usuario intuitivas, accesibles y visualmente atractivas para aplicaciones de escritorio, garantizando una experiencia de usuario óptima y una alta usabilidad.",
      skills: [
        "React",
        "Electron",
        "Liderazgo de Equipo",
        "Gestión de Proyectos",
      ],
      type: "work",
    },
    {
      title: "Desarrollador Frontend",
      company: "Tbooks",
      location: "México",
      period: "2020 - 2020",
      description:
        "Ejecuté pruebas exhaustivas y detalladas de funcionalidades frontend existentes, identificando y resolviendo errores críticos y mejorando la estabilidad general de la aplicación web. Realicé ajustes precisos y optimizaciones de código, garantizando la calidad, el rendimiento y la confiabilidad del software. Colaboré activamente con el equipo de diseño y desarrollo en la mejora continua de la interfaz gráfica y la experiencia del usuario. Implementé soluciones creativas e innovadoras que optimizaron la usabilidad, la accesibilidad y el atractivo visual de la plataforma, resultando en una mayor satisfacción del usuario y una mejor adopción del producto.",
      skills: ["Frontend", "UI/UX", "Testing", "Optimización"],
      type: "work",
    },
    {
      title: "Desarrollador Backend",
      company: "Goingtube",
      location: "Manizales (Colombia)",
      period: "2018 - 2018",
      description:
        "Participé activamente en el diseño, desarrollo y mantenimiento de la API para una plataforma, implementando soluciones robustas, escalables y seguras. Contribuí al desarrollo de la arquitectura, la lógica y la funcionalidad de la API, asegurando su correcto funcionamiento y su integración con otros sistemas. Desarrollé e implementé pruebas unitarias e integrales exhaustivas, garantizando la calidad y la cobertura del código. Realicé ajustes precisos y optimizaciones de código, resolviendo errores críticos y mejorando el rendimiento y la eficiencia de la API. Implementé funcionalidades clave como el envío de correos de verificación, la tokenización de usuarios y la optimización de respuestas de endpoints, asegurando la seguridad, la integridad y el rendimiento de la API.",
      skills: [
        "Backend",
        "APIs",
        "Autenticación",
        "Pruebas Unitarias",
        "Optimización",
      ],
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
      case "Freelance":
        return <Briefcase className="h-6 w-6" />;
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
                              : experience.type === "Freelance"
                              ? "outline"
                              : "outline"
                          }
                        >
                          {experience.type === "work"
                            ? "Trabajo"
                            : experience.type === "education"
                            ? "Educación"
                            : "Freelance"}
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
