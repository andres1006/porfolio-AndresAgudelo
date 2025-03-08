"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, Code, Briefcase, User, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [typingComplete, setTypingComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative py-20 md:py-28 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_65%)]" />
          
          {/* Animated circles */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="block mb-2 typing-animation overflow-hidden">Hola, soy</span>
                <span className="gradient-text gradient-blue-purple">Andrés Agudelo</span>
              </h1>
              <p className={`text-xl md:text-2xl mb-4 transition-opacity duration-1000 ${typingComplete ? 'opacity-100 gradient-text gradient-green-blue' : 'opacity-0'}`}>
                Desarrollador Frontend
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Especializado en crear interfaces de usuario atractivas e intuitivas con React, Next.js y diseño UI/UX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="animate-pulse-slow">
                  <Link href="/projects">
                    Ver Proyectos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Contactar
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
                <Image
                  src="/andres-agudelo.jpg"
                  alt="Andrés Agudelo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      {/* Services Section with Scroll Animation */}
      <section className="py-16 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
        </div>
        
        <div className="container">
          <ScrollReveal variant="fade" direction="up">
            <h2 className="text-3xl font-bold mb-4 gradient-text gradient-pink-purple text-center">Mis Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
              Servicios especializados para satisfacer tus necesidades de desarrollo web y diseño
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 mb-4" />,
                title: "Desarrollo Frontend",
                description: "Creación de interfaces modernas y responsivas utilizando React, Next.js y las mejores prácticas de desarrollo.",
              },
              {
                icon: <Briefcase className="h-10 w-10 mb-4" />,
                title: "Diseño UI/UX",
                description: "Diseño de experiencias de usuario intuitivas y atractivas, con enfoque en usabilidad y accesibilidad.",
              },
              {
                icon: <User className="h-10 w-10 mb-4" />,
                title: "Consultoría Técnica",
                description: "Asesoramiento en arquitectura frontend, optimización de rendimiento y mejores prácticas de desarrollo.",
              },
            ].map((service, index) => (
              <ScrollReveal 
                key={index}
                variant="slide" 
                direction="up" 
                delay={index * 0.2}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary/80">
                  <CardContent className="pt-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with Parallax Effect */}
      <section className="py-16 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
        </div>
        
        <div className="container">
          <ScrollReveal variant="fade" direction="up">
            <h2 className="text-3xl font-bold mb-4 gradient-text gradient-orange-red text-center">Proyectos Destacados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
              Una selección de mis trabajos más relevantes
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Plataforma de Salud",
                description: "Sistema para el sector salud desarrollado con React y Electron, facilitando la gestión de pacientes y citas médicas.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/projects/health-platform",
              },
              {
                title: "Dashboard Financiero",
                description: "Interfaz interactiva para monitoreo y visualización de métricas financieras con React y gráficos avanzados.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/projects/dashboard",
              },
            ].map((project, index) => (
              <ScrollReveal
                key={index}
                variant="scale"
                delay={index * 0.2}
              >
                <Card className="overflow-hidden h-full shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold mb-1 text-white">{project.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button asChild variant="outline" size="sm" className="group">
                      <Link href={project.link}>
                        Ver Proyecto 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="fade" direction="up" delay={0.4}>
            <div className="text-center mt-12">
              <Button asChild className="group">
                <Link href="/projects">
                  Ver Todos los Proyectos 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA with Gradient Background */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"></div>
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        />
        
        <div className="container relative z-10">
          <ScrollReveal variant="slide" direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">¿Trabajamos Juntos?</h2>
              <p className="text-xl opacity-90 mb-8 text-primary-foreground">
                ¿Tienes un proyecto en mente? Contáctame para discutir cómo puedo ayudarte.
              </p>
              <Button asChild size="lg" variant="secondary" className="group hover:shadow-lg transition-all duration-300">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contactar
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}