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
      id: "health-platform",
      title: "Plataforma de Salud",
      description:
        "Sistema para el sector salud desarrollado con React y Electron, facilitando la gestión de pacientes y citas médicas.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "Electron", "Redux", "Material UI"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/health-platform",
      featured: true,
    },
    {
      id: "dashboard",
      title: "Dashboard Financiero",
      description:
        "Interfaz interactiva para monitoreo y visualización de métricas financieras con React y gráficos avanzados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "web",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/dashboard",
      featured: true,
    },
    {
      id: "mobile-app",
      title: "App de Seguimiento Fitness",
      description:
        "Aplicación móvil para seguimiento de entrenamientos, nutrición y métricas de salud con recomendaciones personalizadas.",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "mobile",
      technologies: ["React Native", "Redux", "Firebase", "Health API"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/fitness-app",
      featured: false,
    },
    {
      id: "ai-tool",
      title: "Generador de Contenido IA",
      description:
        "Herramienta que utiliza machine learning para generar textos de marketing, posts de blog y contenido para redes sociales.",
      image: "https://images.unsplash.com/photo-1677442135968-6144fc1c8d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "ai",
      technologies: ["Python", "TensorFlow", "OpenAI API", "Flask"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/ai-content",
      featured: false,
    },
    {
      id: "blockchain",
      title: "Exchange Descentralizado",
      description:
        "Plataforma de intercambio basada en blockchain para trading de criptomonedas y tokens sin intermediarios.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/dex",
      featured: false,
    },
    {
      id: "game",
      title: "Juego Educativo",
      description:
        "Juego interactivo diseñado para enseñar conceptos de programación a principiantes a través de puzzles y desafíos.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "game",
      technologies: ["Unity", "C#", "WebGL", "Firebase"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/edu-game",
      featured: false,
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : filter === "featured" 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => project.category === filter);

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
            <TabsTrigger value="ai" onClick={() => setFilter("ai")}>
              IA
            </TabsTrigger>
            <TabsTrigger value="blockchain" onClick={() => setFilter("blockchain")}>
              Blockchain
            </TabsTrigger>
            <TabsTrigger value="game" onClick={() => setFilter("game")}>
              Juegos
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

          <TabsContent value="ai" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="game" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </ScrollReveal>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal
      variant="slide"
      direction="up"
      delay={index * 0.1}
    >
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
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3 mt-auto">
            <Button asChild size="sm" variant="outline">
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Demo
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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