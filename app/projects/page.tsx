"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "porfolio-andresagudelo",
      title: "Portafolio Personal",
      description:
        "Sitio web personal desarrollado con Next.js y TypeScript para mostrar proyectos y experiencia profesional.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      demoUrl: "https://andresagudelo.dev",
      githubUrl: "https://github.com/andres1006/porfolio-AndresAgudelo",
      featured: true,
    },
    {
      id: "gestion-punto-venta-cafe-quindio",
      title: "Gestión Punto de Venta para Café Quindío",
      description:
        "Sistema integral de gestión de punto de venta personalizado para Café Quindío, diseñado para optimizar las operaciones diarias, mejorar la eficiencia y aumentar la rentabilidad. Implementé funcionalidades clave como la gestión de inventario, el procesamiento de ventas, la generación de informes y la gestión de clientes.",
      image:
        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Gestión de Inventario",
      ],
      demoUrl: "https://cafe-quindio-pos.example.com",
      githubUrl: "https://github.com/andres1006/cafe-quindio-pos",
      featured: true,
    },
    {
      id: "imakination-landing",
      title: "Imakination Landing Page",
      description:
        "Landing page atractiva y efectiva para Imakination, con el objetivo de promocionar sus servicios y generar leads. Página web moderna, responsiva y optimizada para la conversión que destaca la propuesta de valor de Imakination, presenta testimonios de clientes y facilita el contacto con la empresa.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      demoUrl: "https://imakination.example.com",
      githubUrl: "https://github.com/andres1006/imakination-landing",
      featured: true,
    },
    {
      id: "freddo-air",
      title: "Freddo Air App",
      description:
        "Aplicación web para Freddo Air, que permite a los usuarios gestionar sus sistemas de climatización de forma remota y eficiente. Implementé funcionalidades clave como el control de temperatura, la programación de horarios, la monitorización del consumo energético y la generación de alertas.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React.js", "Node.js", "API REST", "IoT"],
      demoUrl: "https://freddo-air.example.com",
      githubUrl: "https://github.com/andres1006/freddo-air",
      featured: false,
    },
    {
      id: "controlsoft",
      title: "Controlsoft",
      description:
        "Software de gestión integral para Controlsoft, diseñado para automatizar y optimizar sus procesos administrativos y operativos. Implementé funcionalidades como la gestión de proyectos, tareas, documentos, clientes y recursos humanos, mejorando la eficiencia, reduciendo costos operativos y facilitando la toma de decisiones estratégicas.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Angular", "API REST", "MySQL", "Gestión de Proyectos"],
      demoUrl: "https://controlsoft.example.com",
      githubUrl: "https://github.com/andres1006/controlsoft",
      featured: false,
    },
    {
      id: "webapp-heating-shop",
      title: "Tienda de Calefacción",
      description:
        "Aplicación web para una tienda de productos de calefacción con funcionalidades de e-commerce.",
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      demoUrl: "https://heating-shop.example.com",
      githubUrl: "https://github.com/andres1006/webapp-heating-shop",
      featured: true,
    },
    {
      id: "zenith-solution",
      title: "Zenith Solution",
      description:
        "Plataforma de soluciones empresariales con dashboard administrativo y gestión de usuarios.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["TypeScript", "React", "Redux", "Express"],
      demoUrl: "https://zenith-solutions.example.com",
      githubUrl: "https://github.com/andres1006/zenith-solution",
      featured: true,
    },
    {
      id: "dashboard-next",
      title: "Dashboard Next.js",
      description:
        "Panel de administración moderno desarrollado con Next.js y TypeScript con autenticación y visualización de datos.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "https://dashboard.example.com",
      githubUrl: "https://github.com/andres1006/dashboard-next",
      featured: false,
    },
    {
      id: "landingmiti",
      title: "Landing Page Miti",
      description:
        "Página de aterrizaje desarrollada con Astro para optimizar rendimiento y SEO.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Astro", "JavaScript", "CSS", "HTML"],
      demoUrl: "https://miti.example.com",
      githubUrl: "https://github.com/andres1006/landingMiti",
      featured: false,
    },
    {
      id: "ecommerce-air",
      title: "E-commerce Astro",
      description:
        "Plataforma de comercio electrónico con componentes reutilizables desarrollada con Astro.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["Astro", "SCSS", "JavaScript", "API REST"],
      demoUrl: "https://ecommerce.example.com",
      githubUrl: "https://github.com/andres1006/ecommerce-air",
      featured: false,
    },
    {
      id: "poc-realstate-reactnative",
      title: "App Inmobiliaria",
      description:
        "Aplicación móvil para búsqueda y gestión de propiedades inmobiliarias desarrollada con React Native.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "Maps API"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/andres1006/POC-realState-ReactNative",
      featured: false,
    },
    {
      id: "petgram",
      title: "Petgram",
      description:
        "Aplicación similar a Instagram pero enfocada en mascotas, desarrollada con React.",
      image:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "JavaScript", "GraphQL", "Styled Components"],
      demoUrl: "https://petgram.example.com",
      githubUrl: "https://github.com/andres1006/petgram",
      featured: false,
    },
    {
      id: "aura-health-system",
      title: "Sistema de Salud Aura",
      description:
        "Conjunto de aplicaciones para gestión de pacientes y datos médicos, incluyendo frontend, servicios y automatización.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["JavaScript", "C++", "MATLAB", "MongoDB"],
      demoUrl: "https://aura-health.example.com",
      githubUrl: "https://github.com/andres1006/auraServices",
      featured: true,
    },
    {
      id: "qt-mongo-aura",
      title: "Integración Qt-MongoDB",
      description:
        "Aplicación de escritorio en C++ que sube información de pacientes a MongoDB desde una interfaz Qt.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "desktop",
      technologies: ["C++", "Qt", "MongoDB", "JSON"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/andres1006/qt_mongo_aura",
      featured: false,
    },
    {
      id: "camerascanqr",
      title: "Escáner QR",
      description:
        "Aplicación para escanear códigos QR utilizando la cámara del dispositivo.",
      image:
        "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["JavaScript", "HTML5", "CSS", "Camera API"],
      demoUrl: "https://qr-scanner.example.com",
      githubUrl: "https://github.com/andres1006/camerascanqr",
      featured: false,
    },
    {
      id: "imakinacion",
      title: "Imakinación",
      description:
        "Plataforma creativa para diseño y generación de contenido visual.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["JavaScript", "Canvas API", "Node.js", "Express"],
      demoUrl: "https://imakinacion.example.com",
      githubUrl: "https://github.com/andres1006/imakinacion",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container py-12">
      <ScrollReveal variant="fade" direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Portafolio de Proyectos</h1>
          <p className="text-muted-foreground">
            Explora mis últimos trabajos y proyectos técnicos
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="slide" direction="up" delay={0.2}>
        <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-12">
          <TabsList className="grid grid-cols-7 w-full">
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              Todos
            </TabsTrigger>
            <TabsTrigger value="featured" onClick={() => setFilter("featured")}>
              Destacados
            </TabsTrigger>
            <TabsTrigger value="web" onClick={() => setFilter("web")}>
              Web
            </TabsTrigger>
            <TabsTrigger value="mobile" onClick={() => setFilter("mobile")}>
              Móvil
            </TabsTrigger>
            <TabsTrigger value="desktop" onClick={() => setFilter("desktop")}>
              Escritorio
            </TabsTrigger>
            <TabsTrigger value="github" onClick={() => setFilter("github")}>
              GitHub
            </TabsTrigger>
            <TabsTrigger value="all" onClick={() => setFilter("all")}>
              Ver Todos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desktop" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>

      <GitHubRepositories />

      <div className="flex justify-center mt-8">
        <Button asChild size="lg" variant="default">
          <Link
            href="https://github.com/andres1006?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 mr-2" /> Ver todos los repositorios en
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <ScrollReveal variant="slide" direction="up" delay={index * 0.1}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-2 right-2">
              <Badge>Destacado</Badge>
            </div>
          )}
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <Button asChild size="sm" variant="outline">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" /> Código
              </Link>
            </Button>
            <Button asChild size="sm" className="ml-auto">
              <Link href={`/projects/${project.id}`}>
                Detalles <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

function GitHubRepositories() {
  const repositories = [
    {
      name: "porfolio-AndresAgudelo",
      url: "https://github.com/andres1006/porfolio-AndresAgudelo",
      description: "Portafolio personal desarrollado con Next.js",
    },
    {
      name: "webapp-heating-shop",
      url: "https://github.com/andres1006/webapp-heating-shop",
      description: "Tienda web de productos de calefacción",
    },
    {
      name: "zenith-solution",
      url: "https://github.com/andres1006/zenith-solution",
      description: "Plataforma de soluciones empresariales",
    },
    {
      name: "dashboard-next",
      url: "https://github.com/andres1006/dashboard-next",
      description: "Dashboard administrativo con Next.js",
    },
    {
      name: "landingMiti",
      url: "https://github.com/andres1006/landingMiti",
      description: "Landing page desarrollada con Astro",
    },
    {
      name: "od-mariana-henao-web",
      url: "https://github.com/andres1006/od-mariana-henao-web",
      description: "Sitio web para odontología",
    },
    {
      name: "ecommerce-air",
      url: "https://github.com/andres1006/ecommerce-air",
      description: "Componentes de e-commerce con Astro",
    },
    {
      name: "POC-realState",
      url: "https://github.com/andres1006/POC-realState",
      description: "Prueba de concepto para aplicación inmobiliaria",
    },
    {
      name: "POC-realState-ReactNative",
      url: "https://github.com/andres1006/POC-realState-ReactNative",
      description: "Versión móvil de la aplicación inmobiliaria",
    },
    {
      name: "imakinacion",
      url: "https://github.com/andres1006/imakinacion",
      description: "Plataforma creativa para diseño",
    },
    {
      name: "auraServices",
      url: "https://github.com/andres1006/auraServices",
      description: "Servicios backend para sistema de salud",
    },
    {
      name: "apiparqueaderoprof1",
      url: "https://github.com/andres1006/apiparqueaderoprof1",
      description: "API para sistema de parqueadero",
    },
    {
      name: "parqueaderoangular",
      url: "https://github.com/andres1006/parqueaderoangular",
      description: "Frontend para sistema de parqueadero",
    },
    {
      name: "camerascanqr",
      url: "https://github.com/andres1006/camerascanqr",
      description: "Aplicación para escanear códigos QR",
    },
    {
      name: "commands-git",
      url: "https://github.com/andres1006/commands-git",
      description: "Guía de comandos Git",
    },
    {
      name: "qt_mongo_aura",
      url: "https://github.com/andres1006/qt_mongo_aura",
      description: "Integración de Qt con MongoDB",
    },
    {
      name: "auraOctavePaciente",
      url: "https://github.com/andres1006/auraOctavePaciente",
      description: "Software de Octave para pacientes",
    },
    {
      name: "AuraFrontend",
      url: "https://github.com/andres1006/AuraFrontend",
      description: "Frontend para sistema de salud Aura",
    },
    {
      name: "practicaFront",
      url: "https://github.com/andres1006/practicaFront",
      description: "Prácticas de desarrollo frontend",
    },
    {
      name: "cleanTextSDC",
      url: "https://github.com/andres1006/cleanTextSDC",
      description: "Utilidad para limpieza de texto",
    },
    {
      name: "auraAutomator",
      url: "https://github.com/andres1006/auraAutomator",
      description: "Automatización para sistema Aura",
    },
    {
      name: "parqueadero",
      url: "https://github.com/andres1006/parqueadero",
      description: "Sistema de gestión de parqueadero",
    },
    {
      name: "pythonAura",
      url: "https://github.com/andres1006/pythonAura",
      description: "Componentes Python para sistema Aura",
    },
    {
      name: "clasificadoresDiferenciales",
      url: "https://github.com/andres1006/clasificadoresDiferenciales",
      description: "Clasificadores diferenciales para análisis",
    },
    {
      name: "auraClasificadores",
      url: "https://github.com/andres1006/auraClasificadores",
      description: "Clasificadores para sistema Aura",
    },
    {
      name: "qt_pdf_aura",
      url: "https://github.com/andres1006/qt_pdf_aura",
      description: "Generador de PDF en C desde Qt",
    },
    {
      name: "auraPacientesControl",
      url: "https://github.com/andres1006/auraPacientesControl",
      description: "Control de pacientes para sistema Aura",
    },
    {
      name: "petgram",
      url: "https://github.com/andres1006/petgram",
      description: "Aplicación similar a Instagram para mascotas",
    },
    {
      name: "player.js",
      url: "https://github.com/andres1006/player.js",
      description: "Control de video y audio embebido",
    },
  ];

  return (
    <div className="mt-20">
      <ScrollReveal variant="fade" direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Repositorios en GitHub</h2>
          <p className="text-muted-foreground">
            Lista completa de mis repositorios públicos en GitHub
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="slide" direction="up" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <ScrollReveal
              key={index}
              variant="slide"
              direction="up"
              delay={index * 0.05}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {repo.description || "Sin descripción disponible"}
                  </p>
                  <div className="mt-auto">
                    <Button asChild size="sm" variant="outline">
                      <Link
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> Ver en GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
