"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: "modern-frontend-architecture",
      title: "Patrones de Arquitectura Frontend Moderna",
      excerpt:
        "Explorando los últimos patrones arquitectónicos en desarrollo frontend y cómo mejoran el rendimiento y la mantenibilidad de las aplicaciones.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 de Mayo, 2023",
      readTime: "8 min de lectura",
      categories: ["Frontend", "Arquitectura", "JavaScript"],
      featured: true,
    },
    {
      id: "state-management",
      title: "Gestión de Estado en Aplicaciones React",
      excerpt:
        "Una guía completa sobre diferentes enfoques de gestión de estado en React, desde Context API hasta Redux y más allá.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "22 de Abril, 2023",
      readTime: "10 min de lectura",
      categories: ["React", "Gestión de Estado", "Frontend"],
      featured: true,
    },
    {
      id: "serverless-architecture",
      title: "Construyendo Aplicaciones Serverless",
      excerpt:
        "Cómo aprovechar la arquitectura serverless para construir aplicaciones escalables y rentables.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 de Marzo, 2023",
      readTime: "7 min de lectura",
      categories: ["Backend", "Serverless", "AWS"],
      featured: false,
    },
    {
      id: "css-grid-layout",
      title: "Dominando CSS Grid Layout",
      excerpt:
        "Un análisis profundo de CSS Grid Layout y cómo puede utilizarse para crear diseños complejos y responsivos con facilidad.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "28 de Febrero, 2023",
      readTime: "6 min de lectura",
      categories: ["CSS", "Frontend", "Diseño"],
      featured: false,
    },
    {
      id: "typescript-best-practices",
      title: "Mejores Prácticas de TypeScript para Proyectos Grandes",
      excerpt:
        "Patrones y prácticas esenciales de TypeScript para mantener la calidad del código y la productividad del desarrollador en aplicaciones a gran escala.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 de Enero, 2023",
      readTime: "9 min de lectura",
      categories: ["TypeScript", "Buenas Prácticas", "JavaScript"],
      featured: false,
    },
    {
      id: "web-performance",
      title: "Técnicas de Optimización de Rendimiento Web",
      excerpt:
        "Estrategias prácticas para mejorar el rendimiento de aplicaciones web, desde code splitting hasta optimización de imágenes y más.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "5 de Diciembre, 2022",
      readTime: "11 min de lectura",
      categories: ["Rendimiento", "Optimización", "Frontend"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="container py-12">
      <ScrollReveal variant="fade" direction="up">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Insights, tutoriales y reflexiones sobre desarrollo y tecnología
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="slide" direction="up" delay={0.2}>
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar artículos..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </ScrollReveal>

      {searchQuery === "" && (
        <section className="max-w-6xl mx-auto mb-16">
          <ScrollReveal variant="fade" direction="up" delay={0.3}>
            <h2 className="text-2xl font-bold mb-6">Artículos Destacados</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <ScrollReveal
                key={post.id}
                variant="slide"
                direction="up"
                delay={0.4 + index * 0.1}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-60 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category, catIndex) => (
                        <Badge key={catIndex} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${post.id}`}>
                        Leer Más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto">
        <ScrollReveal variant="fade" direction="up" delay={0.5}>
          <h2 className="text-2xl font-bold mb-6">
            {searchQuery ? "Resultados de Búsqueda" : "Todos los Artículos"}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <ScrollReveal
              key={post.id}
              variant="slide"
              direction="up"
              delay={0.6 + index * 0.1}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category, catIndex) => (
                      <Badge key={catIndex} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                    {post.categories.length > 2 && (
                      <Badge variant="outline">+{post.categories.length - 2}</Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href={`/blog/${post.id}`}>
                      Leer Más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <ScrollReveal variant="fade" direction="up" delay={0.6}>
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          </ScrollReveal>
        )}
      </section>
    </div>
  );
}